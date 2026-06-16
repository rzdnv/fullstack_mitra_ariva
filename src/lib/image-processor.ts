import sharp from "sharp";
import path from "path";
import { mkdir, writeFile, unlink } from "fs/promises";

// ─────────────────────────────────────────
// Types
// ─────────────────────────────────────────
interface ImageConfig {
  maxSize: number;
  width: number;
  quality: number;
}

// ─────────────────────────────────────────
// Konfigurasi per tipe
// ─────────────────────────────────────────
const IMAGE_CONFIG: Record<string, ImageConfig> = {
  dokter: {
    maxSize: 1 * 1024 * 1024,
    width: 400,
    quality: 80,
  },
  layanan: {
    maxSize: 1 * 1024 * 1024,
    width: 800,
    quality: 80,
  },
  berita: {
    maxSize: 2 * 1024 * 1024,
    width: 1200,
    quality: 85,
  },
  default: {
    maxSize: 2 * 1024 * 1024,
    width: 1200,
    quality: 80,
  },
};

// ─────────────────────────────────────────
// Constants
// ─────────────────────────────────────────
export const ALLOWED_TYPES: string[] = [
  "image/jpeg",
  "image/jpg",
  "image/png",
  "image/webp",
];

// ─────────────────────────────────────────
// Get config
// ─────────────────────────────────────────
export function getImageConfig(type: string): ImageConfig {
  return IMAGE_CONFIG[type] ?? IMAGE_CONFIG.default;
}

// ─────────────────────────────────────────
// Upload & konversi ke WebP
// ─────────────────────────────────────────
export async function processAndSaveImage(
  file: File,
  type: string,
): Promise<string> {
  const config = getImageConfig(type);

  const bytes = await file.arrayBuffer();
  const buffer = Buffer.from(bytes);

  const processedBuffer = await sharp(buffer)
    .resize({
      width: config.width,
      withoutEnlargement: true,
    })
    .webp({ quality: config.quality })
    .toBuffer();

  const fileName = `${type}-${Date.now()}-${Math.random()
    .toString(36)
    .slice(2)}.webp`;

  const uploadDir = path.join(process.cwd(), "public", "uploads", type);
  await mkdir(uploadDir, { recursive: true });

  await writeFile(path.join(uploadDir, fileName), processedBuffer);

  return `/uploads/${type}/${fileName}`;
}

// ─────────────────────────────────────────
// Hapus file
// ─────────────────────────────────────────
export async function deleteImage(fileUrl: string): Promise<void> {
  try {
    const filePath = path.join(process.cwd(), "public", fileUrl);
    await unlink(filePath);
  } catch {
    throw new Error("Gagal menghapus file");
  }
}
