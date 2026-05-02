import { prisma } from "@/lib/prisma";
import { generateId } from "@/lib/generate-id";
import {
  CreateReviewInput,
  UpdateReviewInput,
} from "@/lib/validations/review.validation";

export async function getAllReview() {
  return await prisma.review.findMany({
    orderBy: { tanggal: "desc" },
  });
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
