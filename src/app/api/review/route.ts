import { NextRequest } from "next/server";
import { createReviewSchema } from "@/lib/validations/review.validation";
import {
  getAllReview,
  createReview,
  getReviewPaginated,
} from "@/lib/services/review.service";
import { successResponse, errorResponse } from "@/lib/api-response";
import { requireAuth } from "@/lib/auth-guard";

// GET /api/review — public
export async function GET(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);
    const page = searchParams.get("page");
    const limit = searchParams.get("limit");
    const search = searchParams.get("search") ?? "";

    if (!page && !limit) {
      // Ambil semua
      const review = await getAllReview();
      return successResponse(review, "Data review berhasil diambil");
    }

    // Kalau ada page & limit → pagination
    const result = await getReviewPaginated({
      page: Number(page ?? 1),
      limit: Number(limit ?? 10),
      search,
    });

    return successResponse(result, "Data review berhasil diambil");
  } catch (error) {
    console.error("[GET /api/review]", error);
    return errorResponse("Gagal mengambil data review");
  }
}

// POST /api/review — harus login
export async function POST(req: NextRequest) {
  try {
    const { error } = await requireAuth();
    if (error) return error;

    const body = await req.json();
    const parsed = createReviewSchema.safeParse(body);

    if (!parsed.success) {
      return errorResponse(parsed.error.issues[0].message, 400);
    }

    const review = await createReview(parsed.data);
    return successResponse(review, "Review berhasil dibuat", 201);
  } catch (error) {
    console.error("[POST /api/review]", error);
    return errorResponse("Gagal membuat review");
  }
}
