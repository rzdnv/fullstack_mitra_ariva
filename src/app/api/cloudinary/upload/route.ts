import { NextRequest } from "next/server";
import { successResponse, errorResponse } from "@/lib/api-response";
import { requireAuth } from "@/lib/auth-guard";
import cloudinaryService from "@/lib/cloudinary";

// POST /api/cloudinary/upload/single
export async function POST(req: NextRequest) {
  const { error } = await requireAuth();
  if (error) return error;

  const formData = await req.formData();
  const file = formData.get("file") as File | null;

  if (!file) {
    return errorResponse("File tidak ada", 400);
  }

  try {
    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);
    const base64 = `data:${file.type};base64,${buffer.toString("base64")}`;

    const result = await cloudinaryService.uploadSingle(base64);
    return successResponse(result, "Berhasil upload file");
  } catch {
    return errorResponse("Gagal upload file");
  }
}
