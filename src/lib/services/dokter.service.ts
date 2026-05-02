import { prisma } from "@/lib/prisma";
import {
  CreateDokterInput,
  UpdateDokterInput,
} from "@/lib/validations/dokter.validation";
import { generateId } from "../generate-id";
import cloudinaryService from "../cloudinary";

export async function getAllDokter() {
  return await prisma.dokter.findMany({
    orderBy: { createdAt: "desc" },
    include: {
      poli: true,
      jadwal: {
        orderBy: { hari: "asc" },
      },
    },
  });
}

export async function getDokterById(id: number) {
  return await prisma.dokter.findUnique({
    where: { id },
    include: {
      poli: true,
      jadwal: {
        orderBy: { hari: "asc" },
      },
    },
  });
}

export async function getDokterByPoli(poliId: number) {
  return await prisma.dokter.findMany({
    where: { poliId },
    include: {
      poli: true,
      jadwal: {
        orderBy: { hari: "asc" },
      },
    },
  });
}

export async function createDokter(data: CreateDokterInput) {
  return await prisma.dokter.create({
    data: {
      id: generateId("dokter"),
      nama: data.nama,
      spesialis: data.spesialis,
      foto: data.foto,
      poliId: data.poliId,
    },
    include: {
      poli: true,
    },
  });
}

export async function updateDokter(id: number, data: UpdateDokterInput) {
  return await prisma.dokter.update({
    where: { id },
    data: {
      nama: data.nama,
      spesialis: data.spesialis,
      foto: data.foto,
      poliId: data.poliId,
    },
    include: {
      poli: true,
    },
  });
}

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
