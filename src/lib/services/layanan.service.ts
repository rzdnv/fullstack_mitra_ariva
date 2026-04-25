import { prisma } from "@/lib/prisma";
import {
  CreateLayananInput,
  UpdateLayananInput,
  CreateLayananDetailInput,
  UpdateLayananDetailInput,
} from "@/lib/validations/layanan.validation";
import { generateId } from "../generate-id";

// ─────────────────────────────────────────
// LAYANAN
// ─────────────────────────────────────────

export async function getAllLayanan() {
  return await prisma.layanan.findMany({
    orderBy: { createdAt: "desc" },
    include: {
      detail: {
        orderBy: { harga: "asc" },
      },
      _count: {
        select: { detail: true },
      },
    },
  });
}

export async function getLayananById(id: number) {
  return await prisma.layanan.findUnique({
    where: { id },
    include: {
      detail: {
        orderBy: { harga: "asc" },
      },
    },
  });
}

export async function createLayanan(data: CreateLayananInput) {
  return await prisma.layanan.create({
    data: {
      id: generateId("layanan"),
      namaLayanan: data.namaLayanan,
      deskripsi: data.deskripsi,
    },
  });
}

export async function updateLayanan(id: number, data: UpdateLayananInput) {
  return await prisma.layanan.update({
    where: { id },
    data: {
      namaLayanan: data.namaLayanan,
      deskripsi: data.deskripsi,
    },
  });
}

export async function deleteLayanan(id: number) {
  // Hapus semua detail dulu sebelum hapus layanan
  await prisma.layananDetail.deleteMany({
    where: { layananId: id },
  });

  return await prisma.layanan.delete({
    where: { id },
  });
}

// ─────────────────────────────────────────
// LAYANAN DETAIL
// ─────────────────────────────────────────

export async function getAllLayananDetail(layananId: number) {
  return await prisma.layananDetail.findMany({
    where: { layananId },
    orderBy: { harga: "asc" },
    include: {
      layanan: true,
    },
  });
}

export async function getLayananDetailById(id: number) {
  return await prisma.layananDetail.findUnique({
    where: { id },
    include: {
      layanan: true,
    },
  });
}

export async function createLayananDetail(data: CreateLayananDetailInput) {
  return await prisma.layananDetail.create({
    data: {
      id: generateId("layananDetail"),
      layananId: data.layananId,
      namaPaket: data.namaPaket,
      harga: data.harga,
      deskripsi: data.deskripsi,
    },
    include: {
      layanan: true,
    },
  });
}

export async function updateLayananDetail(
  id: number,
  data: UpdateLayananDetailInput,
) {
  return await prisma.layananDetail.update({
    where: { id },
    data: {
      namaPaket: data.namaPaket,
      harga: data.harga,
      deskripsi: data.deskripsi,
    },
    include: {
      layanan: true,
    },
  });
}

export async function deleteLayananDetail(id: number) {
  return await prisma.layananDetail.delete({
    where: { id },
  });
}
