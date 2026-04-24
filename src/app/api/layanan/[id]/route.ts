import { NextRequest } from "next/server";
import { updateLayananSchema } from "@/lib/validations/layanan.validation";
import {
  getLayananById,
  updateLayanan,
  deleteLayanan,
} from "@/lib/services/layanan.service";
import { successResponse, errorResponse } from "@/lib/api-response";

// GET /api/layanan/:id
export async function GET(
  _req: NextRequest,
  { params }: { params: Promise<{ id: string }> },
) {
  try {
    const { id } = await params;
    const layanan = await getLayananById(Number(id));

    if (!layanan) return errorResponse("Layanan tidak ditemukan", 404);

    return successResponse(layanan, "Data layanan berhasil diambil");
  } catch (error) {
    console.error("[GET /api/layanan/:id]", error);
    return errorResponse("Gagal mengambil data layanan");
  }
}

// PUT /api/layanan/:id
export async function PUT(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> },
) {
  try {
    const { id } = await params;
    const body = await req.json();
    const parsed = updateLayananSchema.safeParse(body);

    if (!parsed.success) {
      return errorResponse(parsed.error.issues[0].message, 400);
    }

    const layanan = await updateLayanan(Number(id), parsed.data);
    return successResponse(layanan, "Layanan berhasil diupdate");
  } catch (error) {
    console.error("[PUT /api/layanan/:id]", error);
    return errorResponse("Gagal mengupdate layanan");
  }
}

// DELETE /api/layanan/:id
export async function DELETE(
  _req: NextRequest,
  { params }: { params: Promise<{ id: string }> },
) {
  try {
    const { id } = await params;
    const layanan = await getLayananById(Number(id));

    if (!layanan) return errorResponse("Layanan tidak ditemukan", 404);

    await deleteLayanan(Number(id));
    return successResponse(layanan, "Layanan berhasil dihapus");
  } catch (error) {
    console.error("[DELETE /api/layanan/:id]", error);
    return errorResponse("Gagal menghapus layanan");
  }
}
