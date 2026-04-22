import { NextRequest } from "next/server";
import { updateDokterSchema } from "@/lib/validations/dokter.validation";
import {
  getDokterById,
  updateDokter,
  deleteDokter,
} from "@/lib/services/dokter.service";
import { successResponse, errorResponse } from "@/lib/api-response";

// GET /api/dokter/:id
export async function GET(
  _req: NextRequest,
  { params }: { params: Promise<{ id: string }> },
) {
  try {
    const { id } = await params;
    const dokter = await getDokterById(Number(id));

    if (!dokter) return errorResponse("Dokter tidak ditemukan", 404);

    return successResponse(dokter, "Data dokter berhasil diambil");
  } catch (error) {
    console.error("[GET /api/dokter/:id]", error);
    return errorResponse("Gagal mengambil data dokter");
  }
}

// PUT /api/dokter/:id
export async function PUT(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> },
) {
  try {
    const { id } = await params;
    const body = await req.json();
    const parsed = updateDokterSchema.safeParse(body);

    if (!parsed.success) {
      return errorResponse(parsed.error.issues[0].message, 400);
    }

    const dokter = await updateDokter(Number(id), parsed.data);
    return successResponse(dokter, "Dokter berhasil diupdate");
  } catch (error) {
    console.error("[PUT /api/dokter/:id]", error);
    return errorResponse("Gagal mengupdate dokter");
  }
}

// DELETE /api/dokter/:id
export async function DELETE(
  _req: NextRequest,
  { params }: { params: Promise<{ id: string }> },
) {
  try {
    const { id } = await params;
    await deleteDokter(Number(id));
    return successResponse(null, "Dokter berhasil dihapus");
  } catch (error) {
    console.error("[DELETE /api/dokter/:id]", error);
    return errorResponse("Gagal menghapus dokter");
  }
}
