import { prisma } from "@/lib/prisma";
import {
  CreateLayananInput,
  UpdateLayananInput,
} from "@/lib/validations/layanan.validation";
import { generateId } from "../generate-id";
import cloudinaryService from "../cloudinary";

export async function getAllLayanan() {
  return await prisma.layanan.findMany({
    orderBy: { createdAt: "desc" },
  });
}

export async function getLayananById(id: number) {
  return await prisma.layanan.findUnique({
    where: { id },
  });
}

export async function createLayanan(data: CreateLayananInput) {
  return await prisma.layanan.create({
    data: {
      id: generateId("layanan"),
      namaLayanan: data.namaLayanan,
      deskripsi: data.deskripsi,
      foto: data.foto,
    },
  });
}

export async function updateLayanan(id: number, data: UpdateLayananInput) {
  return await prisma.layanan.update({
    where: { id },
    data: {
      namaLayanan: data.namaLayanan,
      deskripsi: data.deskripsi,
      foto: data.foto,
    },
  });
}

export async function deleteLayanan(id: number) {
  const layanan = await prisma.layanan.findUnique({
    where: { id },
    select: { foto: true },
  });

  if (layanan?.foto) {
    const result = await cloudinaryService.remove(layanan.foto);
    if (!result || result.result !== "ok") {
      throw new Error("Gagal menghapus foto di Cloudinary");
    }
  }

  return await prisma.layanan.delete({
    where: { id },
  });
}
