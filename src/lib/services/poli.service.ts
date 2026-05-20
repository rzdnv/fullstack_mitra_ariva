import { prisma } from "@/lib/prisma";
import {
  CreatePoliInput,
  UpdatePoliInput,
} from "@/lib/validations/poli.validation";
import { generateId } from "../generate-id";
import { IParams } from "@/types/param";

export async function getAllPoli() {
  return await prisma.poli.findMany({
    orderBy: { createdAt: "desc" },
    include: {
      dokter: true,
      _count: {
        select: { dokter: true },
      },
    },
  });
}

// GET — Dengan pagination & search → API Route
export async function getPoliPaginated({
  page = 1,
  limit = 10,
  search = "",
}: IParams) {
  const where = {
    ...(search && {
      namaPoli: {
        contains: search,
        mode: "insensitive" as const,
      },
    }),
  };

  const [poli, total] = await Promise.all([
    prisma.poli.findMany({
      where,
      skip: (page - 1) * limit,
      take: limit,
      include: {
        dokter: true,
        _count: {
          select: { dokter: true },
        },
      },
      orderBy: { createdAt: "desc" },
    }),
    prisma.poli.count({ where }),
  ]);

  return {
    data: poli,
    meta: {
      total,
      page,
      limit,
      totalPage: Math.ceil(total / limit),
    },
  };
}

export async function getPoliById(id: number) {
  return await prisma.poli.findUnique({
    where: { id },
    include: {
      dokter: {
        include: {
          jadwal: true,
        },
      },
    },
  });
}

export async function createPoli(data: CreatePoliInput) {
  return await prisma.poli.create({
    data: {
      id: generateId("poli"),
      namaPoli: data.namaPoli,
    },
  });
}

export async function updatePoli(id: number, data: UpdatePoliInput) {
  return await prisma.poli.update({
    where: { id },
    data: {
      namaPoli: data.namaPoli,
    },
  });
}

export async function deletePoli(id: number) {
  return await prisma.poli.delete({
    where: { id },
  });
}
