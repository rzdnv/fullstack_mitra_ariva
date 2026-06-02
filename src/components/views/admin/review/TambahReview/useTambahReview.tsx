import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { toast } from "sonner";
import reviewServices from "@/services/review.service";

// Schema
const tambahReviewSchema = z.object({
  nama: z.string().min(1, "Nama wajib diisi"),

  review: z.string().min(1, "Review layanan wajib diisi"),

  rating: z.number().min(1, "Rating wajib diisi"),

  tanggal: z.string().min(1, "Tanggal wajib diisi"),

  gender: z.enum(["pria", "wanita"], {
    message: "Gender wajib dipilih",
  }),
});

export type TambahReviewValues = z.infer<typeof tambahReviewSchema>;

interface ErrorResponse {
  message: string;
}

interface PropsTypes {
  onSuccess?: () => void;
}

const useTambahReview = ({ onSuccess }: PropsTypes = {}) => {
  const queryClient = useQueryClient();

  // FORM
  const {
    control,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<TambahReviewValues>({
    resolver: zodResolver(tambahReviewSchema),

    defaultValues: {
      nama: "",
      rating: 0,
      review: "",
      tanggal: "",
      gender: undefined,
    },
  });

  // CREATE REVIEW
  const { mutate: mutateCreateReview, isPending: isPendingCreate } =
    useMutation({
      mutationFn: reviewServices.create,

      onSuccess: () => {
        toast.success("Review berhasil ditambahkan", {
          position: "top-right",
        });

        queryClient.invalidateQueries({
          queryKey: ["review"],
        });

        queryClient.invalidateQueries({
          queryKey: ["dashboard"],
        });

        reset();

        onSuccess?.();
      },

      onError: (error: AxiosError<ErrorResponse>) => {
        const message =
          error.response?.data?.message ?? "Gagal menambahkan review";

        toast.error(message, {
          position: "top-right",
        });
      },
    });

  // SUBMIT
  const onSubmit = (values: TambahReviewValues) => {
    mutateCreateReview(values);
  };

  return {
    control,
    handleSubmit,
    errors,

    // submit
    onSubmit,
    isPendingCreate,
  };
};

export default useTambahReview;
