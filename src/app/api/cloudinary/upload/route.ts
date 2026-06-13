// import { NextRequest } from "next/server";
// import { successResponse, errorResponse } from "@/lib/api-response";
// import { requireAuth } from "@/lib/auth-guard";
// import cloudinaryService from "@/lib/cloudinary";

// // POST /api/cloudinary/upload/single
// export async function POST(req: NextRequest) {
//   const { error } = await requireAuth();
//   if (error) return error;

//   const formData = await req.formData();
//   const file = formData.get("file") as File | null;

//   if (!file) {
//     return errorResponse("File tidak ada", 400);
//   }

//   try {
//     const bytes = await file.arrayBuffer();
//     const buffer = Buffer.from(bytes);
//     const base64 = `data:${file.type};base64,${buffer.toString("base64")}`;

//     const result = await cloudinaryService.uploadSingle(base64);
//     return successResponse(result, "Berhasil upload file");
//   } catch {
//     return errorResponse("Gagal upload file");
//   }
// }

import { NextRequest } from "next/server";
import { successResponse, errorResponse } from "@/lib/api-response";
import { requireAuth } from "@/lib/auth-guard";
import cloudinaryService from "@/lib/cloudinary";

// Konfigurasi batas ukuran file per tipe
const MAX_FILE_SIZE: Record<string, number> = {
  dokter: 2 * 1024 * 1024, // 2 MB
  berita: 2 * 1024 * 1024, // 2 MB
  layanan: 1 * 1024 * 1024, // 1 MB
  default: 2 * 1024 * 1024, // 2 MB default
};

const MAX_FILE_SIZE_LABEL: Record<string, string> = {
  dokter: "2 MB",
  berita: "2 MB",
  layanan: "1 MB",
  default: "2 MB",
};

export async function POST(req: NextRequest) {
  const { error } = await requireAuth();
  if (error) return error;

  const formData = await req.formData();
  const file = formData.get("file") as File | null;

  // ← Ambil tipe upload dari query param
  const { searchParams } = new URL(req.url);
  const type = searchParams.get("type") ?? "default";

  if (!file) {
    return errorResponse("File tidak ada", 400);
  }

  // ← Cek ukuran file
  const maxSize = MAX_FILE_SIZE[type] ?? MAX_FILE_SIZE.default;
  const maxLabel = MAX_FILE_SIZE_LABEL[type] ?? MAX_FILE_SIZE_LABEL.default;

  if (file.size > maxSize) {
    return errorResponse(
      `Ukuran file terlalu besar. Maksimal ${maxLabel}`,
      400,
    );
  }

  // ← Cek tipe file
  const allowedTypes = ["image/jpeg", "image/jpg", "image/png", "image/webp"];
  if (!allowedTypes.includes(file.type)) {
    return errorResponse(
      "Format file tidak didukung. Gunakan JPG, PNG, atau WEBP",
      400,
    );
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
