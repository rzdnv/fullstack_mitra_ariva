import { z } from "zod";

export const createPoliSchema = z.object({
  namaPoli: z.string().min(1, "Nama poli wajib diisi"),
});

export const updatePoliSchema = z.object({
  namaPoli: z.string().min(1, "Nama poli wajib diisi"),
});

export type CreatePoliInput = z.infer<typeof createPoliSchema>;
export type UpdatePoliInput = z.infer<typeof updatePoliSchema>;
