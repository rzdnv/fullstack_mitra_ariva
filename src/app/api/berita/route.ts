import { NextRequest } from "next/server";
import { createBeritaSchema } from "@/lib/validations/berita.validation";

import { successResponse, errorResponse } from "@/lib/api-response";
import { requireAuth } from "@/lib/auth-guard";
import {
  createBerita,
  getAllBerita,
  getBeritaByUser,
  getBeritaPaginated,
} from "@/lib/services/berita.service";

// GET /api/berita
export async function GET(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);
    const page = searchParams.get("page");
    const limit = searchParams.get("limit");
    const search = searchParams.get("search") ?? "";
    const userId = searchParams.get("userId");

    if (!page && !limit) {
      if (userId) {
        // Ambil semua berdasarkan user
        const user = await getBeritaByUser(Number(userId));
        return successResponse(user, "Data berita berhasil diambil");
      }

      // Ambil semua
      const berita = await getAllBerita();
      return successResponse(berita, "Data berita berhasil diambil");
    }

    // Kalau ada page & limit → pagination
    const result = await getBeritaPaginated({
      page: Number(page ?? 1),
      limit: Number(limit ?? 10),
      search,
      userId: userId ? Number(userId) : undefined,
    });

    return successResponse(result, "Data berita berhasil diambil");
  } catch (error) {
    console.error("[GET /api/berita]", error);
    return errorResponse("Gagal mengambil data berita");
  }
}

// POST /api/berita
export async function POST(req: NextRequest) {
  try {
    const { error } = await requireAuth();
    if (error) return error;

    const body = await req.json();
    const parsed = createBeritaSchema.safeParse(body);

    if (!parsed.success) {
      return errorResponse(parsed.error.issues[0].message, 400);
    }

    const berita = await createBerita(parsed.data);
    return successResponse(berita, "Berita berhasil dibuat", 201);
  } catch (error) {
    console.error("[POST /api/berita]", error);
    return errorResponse("Gagal membuat berita");
  }
}
