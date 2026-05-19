import { prisma } from "@/lib/prisma";
import { generateId } from "@/lib/generate-id";
import cloudinaryService from "@/lib/cloudinary";
import {
  CreateDokterInput,
  UpdateDokterInput,
} from "@/lib/validations/dokter.validation";
import { IDokterParams } from "@/types/dokter";

// GET — Semua (tanpa pagination) → Server Component
export async function getAllDokter() {
  return await prisma.dokter.findMany({
    orderBy: { poliId: "asc" },
    include: {
      poli: true,
      jadwal: { orderBy: { hari: "asc" } },
    },
  });
}

// GET — Dengan pagination & search → API Route
export async function getDokterPaginated({
  page = 1,
  limit = 10,
  search = "",
  poliId,
}: IDokterParams) {
  const where = {
    ...(search && {
      OR: [
        { nama: { contains: search, mode: "insensitive" as const } },
        { spesialis: { contains: search, mode: "insensitive" as const } },
      ],
    }),
    ...(poliId && { poliId }),
  };

  const [dokter, total] = await Promise.all([
    prisma.dokter.findMany({
      where,
      skip: (page - 1) * limit,
      take: limit,
      include: {
        poli: true,
        jadwal: { orderBy: { hari: "asc" } },
      },
      orderBy: { createdAt: "desc" },
    }),
    prisma.dokter.count({ where }),
  ]);

  return {
    data: dokter,
    meta: {
      total,
      page,
      limit,
      totalPage: Math.ceil(total / limit),
    },
  };
}

// GET — By Poli (tanpa pagination) → Server Component
export async function getDokterByPoli(poliId: number) {
  return await prisma.dokter.findMany({
    where: { poliId },
    include: {
      poli: true,
      jadwal: { orderBy: { hari: "asc" } },
    },
  });
}

// GET — By ID
export async function getDokterById(id: number) {
  return await prisma.dokter.findUnique({
    where: { id },
    include: {
      poli: true,
      jadwal: { orderBy: { hari: "asc" } },
    },
  });
}

// CREATE
export async function createDokter(data: CreateDokterInput) {
  return await prisma.dokter.create({
    data: {
      id: generateId("dokter"),
      nama: data.nama,
      spesialis: data.spesialis,
      foto: data.foto,
      poliId: data.poliId,
    },
    include: { poli: true },
  });
}

// UPDATE
export async function updateDokter(id: number, data: UpdateDokterInput) {
  if (data.foto) {
    const existing = await prisma.dokter.findUnique({
      where: { id },
      select: { foto: true },
    });
    if (existing?.foto && existing.foto !== data.foto) {
      try {
        await cloudinaryService.remove(existing.foto);
      } catch (error) {
        console.error("Gagal hapus foto lama cloudinary:", error);
      }
    }
  }

  return await prisma.dokter.update({
    where: { id },
    data: {
      nama: data.nama,
      spesialis: data.spesialis,
      foto: data.foto,
      poliId: data.poliId,
    },
    include: { poli: true },
  });
}

// DELETE
export async function deleteDokter(id: number) {
  const dokter = await prisma.dokter.findUnique({
    where: { id },
    select: { foto: true },
  });

  if (dokter?.foto) {
    const result = await cloudinaryService.remove(dokter.foto);
    if (!result || result.result !== "ok") {
      throw new Error("Gagal menghapus foto di Cloudinary");
    }
  }

  await prisma.jadwalDokter.deleteMany({
    where: { dokterId: id },
  });

  return await prisma.dokter.delete({
    where: { id },
  });
}
