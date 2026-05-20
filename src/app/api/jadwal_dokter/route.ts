import { NextRequest } from "next/server";
import { createJadwalSchema } from "@/lib/validations/jadwal.validation";
import {
  getAllJadwal,
  createJadwal,
  getJadwalByDokter,
  getJadwalPaginated,
} from "@/lib/services/jadwal.service";
import { successResponse, errorResponse } from "@/lib/api-response";
import { requireAuth } from "@/lib/auth-guard";

export async function GET(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);
    const page = searchParams.get("page");
    const limit = searchParams.get("limit");
    const search = searchParams.get("search") ?? "";
    const dokterId = searchParams.get("dokterId");

    if (!page && !limit) {
      if (dokterId) {
        const dokter = await getJadwalByDokter(Number(dokterId));
        return successResponse(dokter, "Data dokter berhasil diambil");
      }

      // Ambil semua
      const jadwal = await getAllJadwal();
      return successResponse(jadwal, "Data jadwal dokter berhasil diambil");
    }

    // Kalau ada page & limit → pagination
    const result = await getJadwalPaginated({
      page: Number(page ?? 1),
      limit: Number(limit ?? 10),
      search,
      dokterId: dokterId ? Number(dokterId) : undefined,
    });

    return successResponse(result, "Data jadwal dokter berhasil diambil");
  } catch (error) {
    console.error("[GET /api/jadwal_dokter]", error);
    return errorResponse("Gagal mengambil data jadwal dokter");
  }
}

// POST /api/jadwal
export async function POST(req: NextRequest) {
  try {
    const { error } = await requireAuth();
    if (error) return error;

    const body = await req.json();
    const parsed = createJadwalSchema.safeParse(body);

    if (!parsed.success) {
      return errorResponse(parsed.error.issues[0].message, 400);
    }

    const jadwal = await createJadwal(parsed.data);
    return successResponse(jadwal, "Jadwal berhasil dibuat", 201);
  } catch (error) {
    if (error instanceof Error) {
      return errorResponse(error.message, 400);
    }
    console.error("[POST /api/jadwal]", error);
    return errorResponse("Gagal membuat jadwal");
  }
}
