import { NextRequest } from "next/server";
import { createPoliSchema } from "@/lib/validations/poli.validation";
import {
  getAllPoli,
  createPoli,
  getPoliPaginated,
} from "@/lib/services/poli.service";
import { successResponse, errorResponse } from "@/lib/api-response";
import { requireAuth } from "@/lib/auth-guard";

export async function GET(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);
    const page = searchParams.get("page");
    const limit = searchParams.get("limit");
    const search = searchParams.get("search") ?? "";

    if (!page && !limit) {
      // Ambil semua
      const poli = await getAllPoli();
      return successResponse(poli, "Data poli berhasil diambil");
    }

    // Kalau ada page & limit → pagination
    const result = await getPoliPaginated({
      page: Number(page ?? 1),
      limit: Number(limit ?? 10),
      search,
    });

    return successResponse(result, "Data poli berhasil diambil");
  } catch (error) {
    console.error("[GET /api/poli]", error);
    return errorResponse("Gagal mengambil data poli");
  }
}

// POST /api/poli
export async function POST(req: NextRequest) {
  try {
    const { error } = await requireAuth();
    if (error) return error;

    const body = await req.json();
    const parsed = createPoliSchema.safeParse(body);

    if (!parsed.success) {
      return errorResponse(parsed.error.issues[0].message, 400);
    }

    const poli = await createPoli(parsed.data);
    return successResponse(poli, "Poli berhasil dibuat", 201);
  } catch (error) {
    console.error("[POST /api/poli]", error);
    return errorResponse("Gagal membuat poli");
  }
}
