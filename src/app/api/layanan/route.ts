import { NextRequest } from "next/server";
import { createLayananSchema } from "@/lib/validations/layanan.validation";
import { getAllLayanan, createLayanan } from "@/lib/services/layanan.service";
import { successResponse, errorResponse } from "@/lib/api-response";
import { requireAuth } from "@/lib/auth-guard";

// GET /api/layanan
export async function GET() {
  try {
    const layanan = await getAllLayanan();
    return successResponse(layanan, "Data layanan berhasil diambil");
  } catch (error) {
    console.error("[GET /api/layanan]", error);
    return errorResponse("Gagal mengambil data layanan");
  }
}

// POST /api/layanan
export async function POST(req: NextRequest) {
  try {
    const { error } = await requireAuth();
    if (error) return error;

    const body = await req.json();
    const parsed = createLayananSchema.safeParse(body);

    if (!parsed.success) {
      return errorResponse(parsed.error.issues[0].message, 400);
    }

    const layanan = await createLayanan(parsed.data);
    return successResponse(layanan, "Layanan berhasil dibuat", 201);
  } catch (error) {
    console.error("[POST /api/layanan]", error);
    return errorResponse("Gagal membuat layanan");
  }
}
