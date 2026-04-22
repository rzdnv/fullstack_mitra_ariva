import { z } from "zod";

const HariEnum = z.enum([
  "SENIN",
  "SELASA",
  "RABU",
  "KAMIS",
  "JUMAT",
  "SABTU",
  "MINGGU",
]);

export const createJadwalSchema = z
  .object({
    dokterId: z.coerce
      .number()
      .int()
      .positive({ message: "Dokter wajib dipilih" }),
    hari: HariEnum,
    jamMulai: z
      .string()
      .regex(/^([01]\d|2[0-3]):([0-5]\d)$/, "Format jam harus HH:MM"),
    jamSelesai: z
      .string()
      .regex(/^([01]\d|2[0-3]):([0-5]\d)$/, "Format jam harus HH:MM"),
  })
  .refine((data) => data.jamMulai < data.jamSelesai, {
    message: "Jam mulai harus lebih awal dari jam selesai",
    path: ["jamSelesai"],
  });

export const updateJadwalSchema = z.object({
  dokterId: z.number().int().positive().optional(),
  hari: HariEnum.optional(),
  jamMulai: z
    .string()
    .regex(/^([01]\d|2[0-3]):([0-5]\d)$/, "Format jam harus HH:MM")
    .optional(),
  jamSelesai: z
    .string()
    .regex(/^([01]\d|2[0-3]):([0-5]\d)$/, "Format jam harus HH:MM")
    .optional(),
});

export type CreateJadwalInput = z.infer<typeof createJadwalSchema>;
export type UpdateJadwalInput = z.infer<typeof updateJadwalSchema>;
