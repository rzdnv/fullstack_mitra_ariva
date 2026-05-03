import { NextRequest } from "next/server";
import { successResponse, errorResponse } from "@/lib/api-response";
import { requireAuth } from "@/lib/auth-guard";
import cloudinaryService from "@/lib/cloudinary";

// DELETE /api/cloudinary/remove
export async function DELETE(req: NextRequest) {
  const { error } = await requireAuth();
  if (error) return error;

  try {
    const body = await req.json();
    const { fileUrl } = body as { fileUrl: string };

    if (!fileUrl) {
      return errorResponse("fileUrl wajib diisi", 400);
    }

    const result = await cloudinaryService.remove(fileUrl);
    return successResponse(result, "Berhasil menghapus file");
  } catch {
    return errorResponse("Gagal menghapus file");
  }
}
