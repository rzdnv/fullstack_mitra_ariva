import { NextRequest } from "next/server";
import {
  getAllDokter,
  createDokter,
  getDokterByPoli,
  getDokterPaginated,
} from "@/lib/services/dokter.service";
import { createDokterSchema } from "@/lib/validations/dokter.validation";
import { successResponse, errorResponse } from "@/lib/api-response";
import { requireAuth } from "@/lib/auth-guard";

export async function GET(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);
    const page = searchParams.get("page");
    const limit = searchParams.get("limit");
    const search = searchParams.get("search") ?? "";
    const poliId = searchParams.get("poliId");

    if (!page && !limit) {
      if (poliId) {
        const dokter = await getDokterByPoli(Number(poliId));
        return successResponse(dokter, "Data dokter berhasil diambil");
      }

      // Ambil semua
      const dokter = await getAllDokter();
      return successResponse(dokter, "Data dokter berhasil diambil");
    }

    // Kalau ada page & limit → pagination
    const result = await getDokterPaginated({
      page: Number(page ?? 1),
      limit: Number(limit ?? 10),
      search,
      poliId: poliId ? Number(poliId) : undefined,
    });

    return successResponse(result, "Data dokter berhasil diambil");
  } catch (error) {
    console.error("[GET /api/dokter]", error);
    return errorResponse("Gagal mengambil data dokter");
  }
}

export async function POST(req: NextRequest) {
  try {
    const { error } = await requireAuth();
    if (error) return error;

    const body = await req.json();
    const parsed = createDokterSchema.safeParse(body);

    if (!parsed.success) {
      return errorResponse(parsed.error.issues[0].message, 400);
    }

    const dokter = await createDokter(parsed.data);
    return successResponse(dokter, "Dokter berhasil dibuat", 201);
  } catch (error) {
    console.error("[POST /api/dokter]", error);
    return errorResponse("Gagal membuat dokter");
  }
}
