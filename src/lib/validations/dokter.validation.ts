import { z } from "zod";

export const createDokterSchema = z.object({
  nama: z.string().min(1, "Nama dokter wajib diisi"),
  spesialis: z.string().min(1, "Spesialis wajib diisi"),
  foto: z.string().min(1, "Format URL foto tidak valid"),
  poliId: z.coerce.number().int().positive({ message: "Poli wajib dipilih" }),
});

export const updateDokterSchema = z.object({
  nama: z.string().min(1, "Nama dokter wajib diisi").optional(),
  spesialis: z.string().min(1, "Spesialis wajib diisi").optional(),
  foto: z.string().min(1, "Format URL foto tidak valid").optional().nullable(),
  poliId: z.number().int().positive().optional(),
});

export type CreateDokterInput = z.infer<typeof createDokterSchema>;
export type UpdateDokterInput = z.infer<typeof updateDokterSchema>;
