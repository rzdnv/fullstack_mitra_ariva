import { NextRequest } from "next/server";
import { successResponse, errorResponse } from "@/lib/api-response";
import { requireAuth } from "@/lib/auth-guard";
import { deleteImage } from "@/lib/image-processor";

export async function DELETE(req: NextRequest) {
  const { error } = await requireAuth();
  if (error) return error;

  try {
    const { fileUrl } = await req.json();

    if (!fileUrl) return errorResponse("fileUrl wajib diisi", 400);

    await deleteImage(fileUrl);
    return successResponse(null, "File berhasil dihapus");
  } catch {
    return errorResponse("Gagal menghapus file");
  }
}
