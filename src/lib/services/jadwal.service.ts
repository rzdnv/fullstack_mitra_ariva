import { prisma } from "@/lib/prisma";
import {
  CreateJadwalInput,
  UpdateJadwalInput,
} from "@/lib/validations/jadwal.validation";
import { generateId } from "../generate-id";
import { IJadwalParams } from "@/types/jadwal";
import { Hari } from "@/generated/prisma";

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

// GET — Dengan pagination & search → API Route
export async function getJadwalPaginated({
  page = 1,
  limit = 10,
  search = "",
  dokterId,
}: IJadwalParams) {
  const where = {
    ...(search && {
      hari: {
        equals: search.toUpperCase() as Hari,
      },
    }),
    ...(dokterId && { dokterId }),
  };

  const [jadwal, total] = await Promise.all([
    prisma.jadwalDokter.findMany({
      where,
      skip: (page - 1) * limit,
      take: limit,
      include: {
        dokter: {
          include: {
            poli: true,
          },
        },
      },
      orderBy: { hari: "asc" },
    }),
    prisma.jadwalDokter.count({ where }),
  ]);

  return {
    data: jadwal,
    meta: {
      total,
      page,
      limit,
      totalPage: Math.ceil(total / limit),
    },
  };
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
