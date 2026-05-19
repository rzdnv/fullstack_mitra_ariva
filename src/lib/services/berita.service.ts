import { prisma } from "@/lib/prisma";
import {
  CreateBeritaInput,
  UpdateBeritaInput,
} from "@/lib/validations/berita.validation";
import { generateId } from "../generate-id";
import cloudinaryService from "../cloudinary";
import { IBeritaParams } from "@/types/berita";

export async function getAllBerita() {
  return await prisma.berita.findMany({
    orderBy: { tanggal: "desc" },
    include: {
      user: {
        select: {
          id: true,
          username: true,
          role: true,
        },
      },
    },
  });
}

// GET — Dengan pagination & search → API Route
export async function getBeritaPaginated({
  page = 1,
  limit = 10,
  search = "",
  userId,
}: IBeritaParams) {
  const where = {
    ...(search && {
      judul: {
        contains: search,
        mode: "insensitive" as const,
      },
    }),
    ...(userId && { userId }),
  };

  const [berita, total] = await Promise.all([
    prisma.berita.findMany({
      where,
      skip: (page - 1) * limit,
      take: limit,
      include: {
        user: {
          select: {
            id: true,
            username: true,
            role: true,
          },
        },
      },
      orderBy: { tanggal: "desc" },
    }),
    prisma.berita.count({ where }),
  ]);

  return {
    data: berita,
    meta: {
      total,
      page,
      limit,
      totalPage: Math.ceil(total / limit),
    },
  };
}

export async function getBeritaByUser(userId: number) {
  return await prisma.berita.findMany({
    where: { userId },
    include: {
      user: {
        select: {
          id: true,
          username: true,
          role: true,
        },
      },
    },
    orderBy: { createdAt: "desc" },
  });
}

export async function getBeritaById(id: number) {
  return await prisma.berita.findUnique({
    where: { id },
    include: {
      user: {
        select: {
          id: true,
          username: true,
          role: true,
        },
      },
    },
  });
}

export async function createBerita(data: CreateBeritaInput) {
  return await prisma.berita.create({
    data: {
      id: generateId("berita"),
      judul: data.judul,
      isi: data.isi,
      gambar: data.gambar,
      tanggal: new Date(data.tanggal),
      userId: data.userId,
    },
    include: {
      user: {
        select: {
          id: true,
          username: true,
          role: true,
        },
      },
    },
  });
}

export async function updateBerita(id: number, data: UpdateBeritaInput) {
  return await prisma.berita.update({
    where: { id },
    data: {
      judul: data.judul,
      isi: data.isi,
      gambar: data.gambar,
      tanggal: data.tanggal ? new Date(data.tanggal) : undefined,
      userId: data.userId,
    },
    include: {
      user: {
        select: {
          id: true,
          username: true,
          role: true,
        },
      },
    },
  });
}

export async function deleteBerita(id: number) {
  const berita = await prisma.berita.findUnique({
    where: { id },
    select: { gambar: true },
  });

  if (berita?.gambar) {
    const result = await cloudinaryService.remove(berita.gambar);

    if (!result || result.result !== "ok") {
      throw new Error("Gagal menghapus gambar di Cloudinary");
    }
  }

  return await prisma.berita.delete({
    where: { id },
  });
}
