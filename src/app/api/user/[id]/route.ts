import { NextRequest } from "next/server";
import { updateUserSchema } from "@/lib/validations/user.validation";
import {
  getUserById,
  updateUser,
  deleteUser,
} from "@/lib/services/user.service";
import { successResponse, errorResponse } from "@/lib/api-response";
import { requireAdmin } from "@/lib/auth-guard";

// GET /api/users/:id
export async function GET(
  _req: NextRequest,
  { params }: { params: Promise<{ id: string }> },
) {
  try {
    const { error } = await requireAdmin();
    if (error) return error;

    const { id } = await params;
    const user = await getUserById(Number(id));
    if (!user) return errorResponse("User tidak ditemukan", 404);

    return successResponse(user, "Data user berhasil diambil");
  } catch (error) {
    console.error("[GET /api/users/:id]", error);
    return errorResponse("Gagal mengambil data user");
  }
}

// PUT /api/users/:id
export async function PUT(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> },
) {
  try {
    const { error } = await requireAdmin();
    if (error) return error;

    const { id } = await params;
    const body = await req.json();
    const parsed = updateUserSchema.safeParse(body);

    if (!parsed.success) {
      return errorResponse(parsed.error.issues[0].message, 400);
    }

    const user = await updateUser(Number(id), parsed.data);
    return successResponse(user, "User berhasil diupdate");
  } catch (error) {
    if (error instanceof Error) return errorResponse(error.message, 400);
    console.error("[PUT /api/users/:id]", error);
    return errorResponse("Gagal mengupdate user");
  }
}

// DELETE /api/users/:id
export async function DELETE(
  _req: NextRequest,
  { params }: { params: Promise<{ id: string }> },
) {
  try {
    const { error } = await requireAdmin();
    if (error) return error;

    const { id } = await params;

    // Ambil data dulu sebelum dihapus
    const user = await getUserById(Number(id));
    if (!user) return errorResponse("User tidak ditemukan", 404);

    await deleteUser(Number(id));
    return successResponse(user, "User berhasil dihapus"); // ← kembalikan data user yang dihapus
  } catch (error) {
    console.error("[DELETE /api/users/:id]", error);
    return errorResponse("Gagal menghapus user");
  }
}
