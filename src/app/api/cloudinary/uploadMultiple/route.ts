import { NextRequest } from "next/server";
import { successResponse, errorResponse } from "@/lib/api-response";
import { requireAuth } from "@/lib/auth-guard";
import cloudinaryService from "@/lib/cloudinary";

// POST /api/cloudinary/upload-multiple
export async function POST(req: NextRequest) {
  const { error } = await requireAuth();
  if (error) return error;

  const formData = await req.formData();
  const files = formData.getAll("files") as File[];

  if (!files || files.length === 0) {
    return errorResponse("File tidak ada", 400);
  }

  try {
    const base64Files = await Promise.all(
      files.map(async (file) => {
        const bytes = await file.arrayBuffer();
        const buffer = Buffer.from(bytes);
        return `data:${file.type};base64,${buffer.toString("base64")}`;
      }),
    );

    const results = await cloudinaryService.uploadMultiple(base64Files);
    return successResponse(results, "Berhasil upload files");
  } catch {
    return errorResponse("Gagal upload files");
  }
}
