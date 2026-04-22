import { NextRequest } from "next/server";
import { updateJadwalSchema } from "@/lib/validations/jadwal.validation";
import {
  getJadwalById,
  updateJadwal,
  deleteJadwal,
} from "@/lib/services/jadwal.service";
import { successResponse, errorResponse } from "@/lib/api-response";

// GET /api/jadwal/:id
export async function GET(
  _req: NextRequest,
  { params }: { params: Promise<{ id: string }> },
) {
  try {
    const { id } = await params;
    const jadwal = await getJadwalById(Number(id));

    if (!jadwal) return errorResponse("Jadwal tidak ditemukan", 404);

    return successResponse(jadwal, "Data jadwal berhasil diambil");
  } catch (error) {
    console.error("[GET /api/jadwal/:id]", error);
    return errorResponse("Gagal mengambil data jadwal");
  }
}

// PUT /api/jadwal/:id
export async function PUT(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> },
) {
  try {
    const { id } = await params;
    const body = await req.json();
    const parsed = updateJadwalSchema.safeParse(body);

    if (!parsed.success) {
      return errorResponse(parsed.error.issues[0].message, 400);
    }

    const jadwal = await updateJadwal(Number(id), parsed.data);
    return successResponse(jadwal, "Jadwal berhasil diupdate");
  } catch (error) {
    console.error("[PUT /api/jadwal/:id]", error);
    return errorResponse("Gagal mengupdate jadwal");
  }
}

// DELETE /api/jadwal/:id
export async function DELETE(
  _req: NextRequest,
  { params }: { params: Promise<{ id: string }> },
) {
  try {
    const { id } = await params;
    await deleteJadwal(Number(id));
    return successResponse(null, "Jadwal berhasil dihapus");
  } catch (error) {
    console.error("[DELETE /api/jadwal/:id]", error);
    return errorResponse("Gagal menghapus jadwal");
  }
}
