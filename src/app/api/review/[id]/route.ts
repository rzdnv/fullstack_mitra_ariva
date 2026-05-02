import { NextRequest } from "next/server";
import { updateReviewSchema } from "@/lib/validations/review.validation";
import {
  getReviewById,
  updateReview,
  deleteReview,
} from "@/lib/services/review.service";
import { successResponse, errorResponse } from "@/lib/api-response";
import { requireAuth } from "@/lib/auth-guard";

// GET /api/review/:id
export async function GET(
  _req: NextRequest,
  { params }: { params: Promise<{ id: string }> },
) {
  try {
    const { id } = await params;
    const review = await getReviewById(Number(id));
    if (!review) return errorResponse("Review tidak ditemukan", 404);
    return successResponse(review, "Data review berhasil diambil");
  } catch (error) {
    console.error("[GET /api/review/:id]", error);
    return errorResponse("Gagal mengambil data review");
  }
}

// PUT /api/review/:id
export async function PUT(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> },
) {
  try {
    const { error } = await requireAuth();
    if (error) return error;

    const { id } = await params;
    const body = await req.json();
    const parsed = updateReviewSchema.safeParse(body);

    if (!parsed.success) {
      return errorResponse(parsed.error.issues[0].message, 400);
    }

    const review = await updateReview(Number(id), parsed.data);
    return successResponse(review, "Review berhasil diupdate");
  } catch (error) {
    console.error("[PUT /api/review/:id]", error);
    return errorResponse("Gagal mengupdate review");
  }
}

// DELETE /api/review/:id
export async function DELETE(
  _req: NextRequest,
  { params }: { params: Promise<{ id: string }> },
) {
  try {
    const { error } = await requireAuth();
    if (error) return error;

    const { id } = await params;
    const review = await getReviewById(Number(id));
    if (!review) return errorResponse("Review tidak ditemukan", 404);

    await deleteReview(Number(id));
    return successResponse(review, "Review berhasil dihapus");
  } catch (error) {
    console.error("[DELETE /api/review/:id]", error);
    return errorResponse("Gagal menghapus review");
  }
}
