import { z } from "zod";

export const createBeritaSchema = z.object({
  judul: z.string().min(1, "Judul wajib diisi"),
  isi: z.string().min(1, "Isi berita wajib diisi"),
  gambar: z.string().min(1, "Format URL foto tidak valid"),
  tanggal: z.string().refine((val) => !isNaN(Date.parse(val)), {
    message: "Format tanggal tidak valid",
  }),
  userId: z.coerce
    .number()
    .int()
    .positive({ message: "User id wajib dipilih" }),
});

export const updateBeritaSchema = z.object({
  judul: z.string().min(1, "Judul wajib diisi").optional(),
  isi: z.string().min(1, "Isi berita wajib diisi").optional(),
  gambar: z.string().min(1, "Format URL foto tidak valid").optional(),
  tanggal: z
    .string()
    .refine((val) => !isNaN(Date.parse(val)), {
      message: "Format tanggal tidak valid",
    })
    .optional(),
  userId: z.number().int().positive().optional(),
});

export type CreateBeritaInput = z.infer<typeof createBeritaSchema>;
export type UpdateBeritaInput = z.infer<typeof updateBeritaSchema>;
