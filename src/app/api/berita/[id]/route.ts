import { NextRequest } from "next/server";
import { updateBeritaSchema } from "@/lib/validations/berita.validation";
import {
  getBeritaById,
  updateBerita,
  deleteBerita,
} from "@/lib/services/berita.service";
import { successResponse, errorResponse } from "@/lib/api-response";
import { requireAuth } from "@/lib/auth-guard";

// GET /api/berita/:id
export async function GET(
  _req: NextRequest,
  { params }: { params: Promise<{ id: string }> },
) {
  try {
    const { id } = await params;
    const berita = await getBeritaById(Number(id));

    if (!berita) return errorResponse("Berita tidak ditemukan", 404);

    return successResponse(berita, "Data berita berhasil diambil");
  } catch (error) {
    console.error("[GET /api/berita/:id]", error);
    return errorResponse("Gagal mengambil data berita");
  }
}

// PUT /api/berita/:id
export async function PUT(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> },
) {
  try {
    const { error } = await requireAuth();
    if (error) return error;

    const { id } = await params;
    const body = await req.json();
    const parsed = updateBeritaSchema.safeParse(body);

    if (!parsed.success) {
      return errorResponse(parsed.error.issues[0].message, 400);
    }

    const berita = await updateBerita(Number(id), parsed.data);
    return successResponse(berita, "Berita berhasil diupdate");
  } catch (error) {
    console.error("[PUT /api/berita/:id]", error);
    return errorResponse("Gagal mengupdate berita");
  }
}

// DELETE /api/berita/:id
export async function DELETE(
  _req: NextRequest,
  { params }: { params: Promise<{ id: string }> },
) {
  try {
    const { error } = await requireAuth();
    if (error) return error;

    const { id } = await params;
    const berita = await getBeritaById(Number(id));

    if (!berita) return errorResponse("Berita tidak ditemukan", 404);

    await deleteBerita(Number(id));
    return successResponse(berita, "Berita berhasil dihapus");
  } catch (error) {
    console.error("[DELETE /api/berita/:id]", error);
    return errorResponse("Gagal menghapus berita");
  }
}
