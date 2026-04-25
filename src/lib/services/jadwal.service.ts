import { prisma } from "@/lib/prisma";
import {
  CreateJadwalInput,
  UpdateJadwalInput,
} from "@/lib/validations/jadwal.validation";
import { generateId } from "../generate-id";

export async function getAllJadwal() {
  return await prisma.jadwalDokter.findMany({
    orderBy: { hari: "asc" },
    include: {
      dokter: {
        include: {
          poli: true,
        },
      },
    },
  });
}

export async function getJadwalById(id: number) {
  return await prisma.jadwalDokter.findUnique({
    where: { id },
    include: {
      dokter: {
        include: {
          poli: true,
        },
      },
    },
  });
}

export async function getJadwalByDokter(dokterId: number) {
  return await prisma.jadwalDokter.findMany({
    where: { dokterId },
    orderBy: { hari: "asc" },
    include: {
      dokter: {
        include: {
          poli: true,
        },
      },
    },
  });
}

export async function createJadwal(data: CreateJadwalInput) {
  // Cek apakah dokter sudah punya jadwal di hari yang sama
  const existing = await prisma.jadwalDokter.findFirst({
    where: {
      dokterId: data.dokterId,
      hari: data.hari,
    },
  });

  if (existing) {
    throw new Error(`Dokter sudah memiliki jadwal di hari ${data.hari}`);
  }

  return await prisma.jadwalDokter.create({
    data: {
      id: generateId("jadwal"),
      dokterId: data.dokterId,
      hari: data.hari,
      jamMulai: data.jamMulai,
      jamSelesai: data.jamSelesai,
    },
    include: {
      dokter: {
        include: { poli: true },
      },
    },
  });
}

export async function updateJadwal(id: number, data: UpdateJadwalInput) {
  return await prisma.jadwalDokter.update({
    where: { id },
    data: {
      dokterId: data.dokterId,
      hari: data.hari,
      jamMulai: data.jamMulai,
      jamSelesai: data.jamSelesai,
    },
    include: {
      dokter: {
        include: { poli: true },
      },
    },
  });
}

export async function deleteJadwal(id: number) {
  return await prisma.jadwalDokter.delete({
    where: { id },
  });
}
