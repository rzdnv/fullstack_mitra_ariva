import { NextRequest } from "next/server";
import { createJadwalSchema } from "@/lib/validations/jadwal.validation";
import {
  getAllJadwal,
  createJadwal,
  getJadwalByDokter,
} from "@/lib/services/jadwal.service";
import { successResponse, errorResponse } from "@/lib/api-response";

// GET /api/jadwal
export async function GET(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);
    const dokterId = searchParams.get("dokterId");

    let jadwal;
    if (dokterId) {
      jadwal = await getJadwalByDokter(Number(dokterId));
    } else {
      jadwal = await getAllJadwal();
    }

    return successResponse(jadwal, "Data jadwal berhasil diambil");
  } catch (error) {
    console.error("[GET /api/jadwal]", error);
    return errorResponse("Gagal mengambil data jadwal");
  }
}

// POST /api/jadwal
export async function POST(req: NextRequest) {
  try {
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
