import { NextRequest } from "next/server";
import { successResponse, errorResponse } from "@/lib/api-response";
import { requireAuth } from "@/lib/auth-guard";
import {
  processAndSaveImage,
  ALLOWED_TYPES,
  getImageConfig,
} from "@/lib/image-processor";

export async function POST(req: NextRequest) {
  const { error } = await requireAuth();
  if (error) return error;

  const formData = await req.formData();
  const file = formData.get("file") as File | null;
  const { searchParams } = new URL(req.url);
  const type = searchParams.get("type") ?? "default";

  if (!file) return errorResponse("File tidak ada", 400);

  // Validasi tipe
  if (!ALLOWED_TYPES.includes(file.type)) {
    return errorResponse(
      "Format tidak didukung. Gunakan JPG, PNG, atau WEBP",
      400,
    );
  }

  // Validasi ukuran
  const config = getImageConfig(type);
  if (file.size > config.maxSize) {
    const maxMB = Math.round(config.maxSize / (1024 * 1024));
    return errorResponse(`Ukuran file maksimal ${maxMB} MB`, 400);
  }

  try {
    const fileUrl = await processAndSaveImage(file, type);
    return successResponse({ url: fileUrl }, "Berhasil upload file", 201);
  } catch {
    return errorResponse("Gagal upload file");
  }
}
