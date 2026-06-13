export interface ValidateFileOptions {
  maxSize: number; // dalam bytes
  allowedTypes?: string[];
}

export interface ValidateFileResult {
  valid: boolean;
  message?: string;
}

export const FILE_SIZE = {
  MB_1: 1 * 1024 * 1024,
  MB_2: 2 * 1024 * 1024,
  MB_5: 5 * 1024 * 1024,
};

export const ALLOWED_IMAGE_TYPES = [
  "image/jpeg",
  "image/jpg",
  "image/png",
  "image/webp",
];

export function validateFile(
  file: File,
  options: ValidateFileOptions,
): ValidateFileResult {
  const { maxSize, allowedTypes = ALLOWED_IMAGE_TYPES } = options;

  // Cek tipe file
  if (!allowedTypes.includes(file.type)) {
    return {
      valid: false,
      message: "Format file tidak didukung. Gunakan JPG, PNG, atau WEBP",
    };
  }

  // Cek ukuran file
  if (file.size > maxSize) {
    const maxMB = Math.round(maxSize / (1024 * 1024));
    return {
      valid: false,
      message: `Ukuran file terlalu besar. Maksimal ${maxMB} MB`,
    };
  }

  return { valid: true };
}
