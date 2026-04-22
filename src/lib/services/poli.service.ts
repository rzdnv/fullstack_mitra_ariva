import { prisma } from "@/lib/prisma";
import {
  CreatePoliInput,
  UpdatePoliInput,
} from "@/lib/validations/poli.validation";

export async function getAllPoli() {
  return await prisma.poli.findMany({
    orderBy: { createdAt: "desc" },
    include: {
      _count: {
        select: { dokter: true },
      },
    },
  });
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
