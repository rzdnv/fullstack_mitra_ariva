import { NextRequest } from "next/server";
import { updateLayananDetailSchema } from "@/lib/validations/layanan.validation";
import {
  getLayananDetailById,
  updateLayananDetail,
  deleteLayananDetail,
} from "@/lib/services/layanan.service";
import { successResponse, errorResponse } from "@/lib/api-response";

// GET /api/layanan/detail/:id
export async function GET(
  _req: NextRequest,
  { params }: { params: Promise<{ id: string }> },
) {
  try {
    const { id } = await params;
    const detail = await getLayananDetailById(Number(id));

    if (!detail) return errorResponse("Detail layanan tidak ditemukan", 404);

    return successResponse(detail, "Data detail layanan berhasil diambil");
  } catch (error) {
    console.error("[GET /api/layanan/detail/:id]", error);
    return errorResponse("Gagal mengambil data detail layanan");
  }
}

// PUT /api/layanan/detail/:id
export async function PUT(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> },
) {
  try {
    const { id } = await params;
    const body = await req.json();
    const parsed = updateLayananDetailSchema.safeParse(body);

    if (!parsed.success) {
      return errorResponse(parsed.error.issues[0].message, 400);
    }

    const detail = await updateLayananDetail(Number(id), parsed.data);
    return successResponse(detail, "Detail layanan berhasil diupdate");
  } catch (error) {
    console.error("[PUT /api/layanan/detail/:id]", error);
    return errorResponse("Gagal mengupdate detail layanan");
  }
}

// DELETE /api/layanan/detail/:id
export async function DELETE(
  _req: NextRequest,
  { params }: { params: Promise<{ id: string }> },
) {
  try {
    const { id } = await params;
    await deleteLayananDetail(Number(id));
    return successResponse(null, "Detail layanan berhasil dihapus");
  } catch (error) {
    console.error("[DELETE /api/layanan/detail/:id]", error);
    return errorResponse("Gagal menghapus detail layanan");
  }
}
