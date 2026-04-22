import { prisma } from "@/lib/prisma";
import {
  CreateDokterInput,
  UpdateDokterInput,
} from "@/lib/validations/dokter.validation";

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
  return await prisma.dokter.delete({
    where: { id },
  });
}
