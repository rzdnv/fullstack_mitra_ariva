import { NextRequest } from "next/server";
import { createDokterSchema } from "@/lib/validations/dokter.validation";
import { getAllDokter, createDokter } from "@/lib/services/dokter.service";
import { successResponse, errorResponse } from "@/lib/api-response";
import { requireAuth } from "@/lib/auth-guard";

// GET /api/dokter
export async function GET(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);
    const poliId = searchParams.get("poliId");

    let dokter;
    if (poliId) {
      const { getDokterByPoli } = await import("@/lib/services/dokter.service");
      dokter = await getDokterByPoli(Number(poliId));
    } else {
      dokter = await getAllDokter();
    }

    return successResponse(dokter, "Data dokter berhasil diambil");
  } catch (error) {
    console.error("[GET /api/dokter]", error);
    return errorResponse("Gagal mengambil data dokter");
  }
}

// POST /api/dokter
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
