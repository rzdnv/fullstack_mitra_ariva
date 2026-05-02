import { z } from "zod";

export const createReviewSchema = z.object({
  nama: z.string().min(1, "Nama wajib diisi"),
  tanggal: z.string().refine((val) => !isNaN(Date.parse(val)), {
    message: "Format tanggal tidak valid",
  }),
  review: z.string().min(1, "Review wajib diisi"),
  rating: z.number().min(1, "Rating minimal 1").max(5, "Rating maksimal 5"),
  gender: z.enum(["pria", "wanita"], {
    message: "Gender harus pria atau wanita",
  }),
});

export const updateReviewSchema = z.object({
  nama: z.string().min(1, "Nama wajib diisi").optional(),
  tanggal: z
    .string()
    .refine((val) => !isNaN(Date.parse(val)), {
      message: "Format tanggal tidak valid",
    })
    .optional(),
  review: z.string().min(1, "Review wajib diisi").optional(),
  rating: z.number().min(1).max(5).optional(),
  gender: z.enum(["pria", "wanita"]).optional(),
});

export type CreateReviewInput = z.infer<typeof createReviewSchema>;
export type UpdateReviewInput = z.infer<typeof updateReviewSchema>;
