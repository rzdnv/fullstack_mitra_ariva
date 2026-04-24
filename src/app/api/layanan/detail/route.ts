import { NextRequest } from "next/server";
import { createLayananDetailSchema } from "@/lib/validations/layanan.validation";
import {
  getAllLayananDetail,
  createLayananDetail,
} from "@/lib/services/layanan.service";
import { successResponse, errorResponse } from "@/lib/api-response";
import { requireAuth } from "@/lib/auth-guard";

// GET /api/layanan/detail?layananId=1
export async function GET(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);
    const layananId = searchParams.get("layananId");

    if (!layananId) {
      return errorResponse("layananId wajib diisi", 400);
    }

    const detail = await getAllLayananDetail(Number(layananId));
    return successResponse(detail, "Data detail layanan berhasil diambil");
  } catch (error) {
    console.error("[GET /api/layanan/detail]", error);
    return errorResponse("Gagal mengambil data detail layanan");
  }
}

// POST /api/layanan/detail
export async function POST(req: NextRequest) {
  try {
    const { error } = await requireAuth();
    if (error) return error;

    const body = await req.json();
    const parsed = createLayananDetailSchema.safeParse(body);

    if (!parsed.success) {
      return errorResponse(parsed.error.issues[0].message, 400);
    }

    const detail = await createLayananDetail(parsed.data);
    return successResponse(detail, "Detail layanan berhasil dibuat", 201);
  } catch (error) {
    console.error("[POST /api/layanan/detail]", error);
    return errorResponse("Gagal membuat detail layanan");
  }
}
