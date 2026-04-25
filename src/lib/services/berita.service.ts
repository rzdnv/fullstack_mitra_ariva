import { prisma } from "@/lib/prisma";
import {
  CreateBeritaInput,
  UpdateBeritaInput,
} from "@/lib/validations/berita.validation";
import { generateId } from "../generate-id";

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

export async function getBeritaTerbaru(limit = 5) {
  return await prisma.berita.findMany({
    take: limit,
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
  return await prisma.berita.delete({
    where: { id },
  });
}
