import { NextRequest } from "next/server";
import { updatePoliSchema } from "@/lib/validations/poli.validation";
import {
  getPoliById,
  updatePoli,
  deletePoli,
} from "@/lib/services/poli.service";
import { successResponse, errorResponse } from "@/lib/api-response";
import { requireAuth } from "@/lib/auth-guard";

// GET /api/poli/:id
export async function GET(
  _req: NextRequest,
  { params }: { params: Promise<{ id: string }> },
) {
  try {
    const { id } = await params;
    const poli = await getPoliById(Number(id));

    if (!poli) return errorResponse("Poli tidak ditemukan", 404);

    return successResponse(poli, "Data poli berhasil diambil");
  } catch (error) {
    console.error("[GET /api/poli/:id]", error);
    return errorResponse("Gagal mengambil data poli");
  }
}

// PUT /api/poli/:id
export async function PUT(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> },
) {
  try {
    const { error } = await requireAuth();
    if (error) return error;

    const { id } = await params;
    const body = await req.json();
    const parsed = updatePoliSchema.safeParse(body);

    if (!parsed.success) {
      return errorResponse(parsed.error.issues[0].message, 400);
    }

    const poli = await updatePoli(Number(id), parsed.data);
    return successResponse(poli, "Poli berhasil diupdate");
  } catch (error) {
    console.error("[PUT /api/poli/:id]", error);
    return errorResponse("Gagal mengupdate poli");
  }
}

// DELETE /api/poli/:id
export async function DELETE(
  _req: NextRequest,
  { params }: { params: Promise<{ id: string }> },
) {
  try {
    const { error } = await requireAuth();
    if (error) return error;

    const { id } = await params;
    const poli = await getPoliById(Number(id));

    if (!poli) return errorResponse("Poli tidak ditemukan", 404);

    await deletePoli(Number(id));
    return successResponse(poli, "Poli berhasil dihapus");
  } catch (error) {
    console.error("[DELETE /api/poli/:id]", error);
    return errorResponse("Gagal menghapus poli");
  }
}
