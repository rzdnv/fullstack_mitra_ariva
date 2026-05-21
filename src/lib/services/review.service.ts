import { prisma } from "@/lib/prisma";
import { generateId } from "@/lib/generate-id";
import {
  CreateReviewInput,
  UpdateReviewInput,
} from "@/lib/validations/review.validation";
import { IParams } from "@/types/param";

export async function getAllReview() {
  return await prisma.review.findMany({
    orderBy: { tanggal: "desc" },
  });
}

// GET — Dengan pagination & search → API Route
export async function getReviewPaginated({
  page = 1,
  limit = 10,
  search = "",
}: IParams) {
  const where = {
    ...(search && {
      nama: {
        contains: search,
        mode: "insensitive" as const,
      },
    }),
  };

  const [review, total] = await Promise.all([
    prisma.review.findMany({
      where,
      skip: (page - 1) * limit,
      take: limit,
      orderBy: { createdAt: "desc" },
    }),
    prisma.review.count({ where }),
  ]);

  return {
    data: review,
    meta: {
      total,
      page,
      limit,
      totalPage: Math.ceil(total / limit),
    },
  };
}

export async function getReviewById(id: number) {
  return await prisma.review.findUnique({
    where: { id },
  });
}

export async function createReview(data: CreateReviewInput) {
  return await prisma.review.create({
    data: {
      id: generateId("review"),
      nama: data.nama,
      tanggal: new Date(data.tanggal),
      review: data.review,
      rating: data.rating,
      gender: data.gender,
    },
  });
}

export async function updateReview(id: number, data: UpdateReviewInput) {
  return await prisma.review.update({
    where: { id },
    data: {
      nama: data.nama,
      tanggal: data.tanggal ? new Date(data.tanggal) : undefined,
      review: data.review,
      rating: data.rating,
      gender: data.gender,
    },
  });
}

export async function deleteReview(id: number) {
  return await prisma.review.delete({
    where: { id },
  });
}
