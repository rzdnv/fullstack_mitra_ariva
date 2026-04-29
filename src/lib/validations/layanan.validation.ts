import { z } from "zod";

export const createLayananSchema = z.object({
  namaLayanan: z.string().min(1, "Nama layanan wajib diisi"),
  deskripsi: z.string().min(1, "Deskripsi Layanan wajib diisi"),
  foto: z.string().min(1, "Format URL foto tidak valid"),
});

export const updateLayananSchema = z.object({
  namaLayanan: z.string().min(1, "Nama layanan wajib diisi").optional(),
  deskripsi: z.string().min(1, "Deskripsi Layanan wajib diisi").optional(),
  foto: z.string().min(1, "Format URL foto tidak valid").optional(),
});

export const createLayananDetailSchema = z.object({
  layananId: z.coerce
    .number()
    .int()
    .positive({ message: "Layanan id wajib dipilih" }),
  namaPaket: z.string().min(1, "Nama paket wajib diisi"),
  harga: z.coerce
    .number()
    .min(1, { message: "Harga wajib diisi" })
    .positive({ message: "Harga harus lebih dari 0" }),
  deskripsi: z.string().min(1, "Deskripsi detail layanan wajib diisi"),
});

export const updateLayananDetailSchema = z.object({
  namaPaket: z.string().min(1, "Nama paket wajib diisi").optional(),
  harga: z.number().positive("Harga harus lebih dari 0").optional(),
  deskripsi: z
    .string()
    .min(1, "Deskripsi detail layanan wajib diisi")
    .optional(),
});

export type CreateLayananInput = z.infer<typeof createLayananSchema>;
export type UpdateLayananInput = z.infer<typeof updateLayananSchema>;
export type CreateLayananDetailInput = z.infer<
  typeof createLayananDetailSchema
>;
export type UpdateLayananDetailInput = z.infer<
  typeof updateLayananDetailSchema
>;
