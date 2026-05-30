import reviewServices from "@/services/review.service";
import { IUpdateReview } from "@/types/review";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { useParams, useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import z from "zod";

// Schema
const updateReviewSchema = z.object({
  nama: z.string().min(1, "Nama wajib diisi"),

  review: z.string().min(1, "Review layanan wajib diisi"),

  rating: z.number().min(1, "Rating wajib diisi"),

  tanggal: z.string().min(1, "Tanggal wajib diisi"),

  gender: z.enum(["pria", "wanita"], {
    message: "Gender wajib dipilih",
  }),
});

export type UpdateReviewValues = z.infer<typeof updateReviewSchema>;

interface ErrorResponse {
  message: string;
}

const useDetailReview = () => {
  const params = useParams();
  const id = Number(params.id);
  const queryClient = useQueryClient();
  const router = useRouter();

  // FORM
  const {
    control,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<UpdateReviewValues>({
    resolver: zodResolver(updateReviewSchema),

    defaultValues: {
      nama: "",
      rating: 0,
      review: "",
      tanggal: "",
      gender: undefined,
    },
  });

  const getReview = async () => {
    const { data } = await reviewServices.getById(id);
    return data.data;
  };

  const { data: dataReview, isLoading: isLoadingReview } = useQuery({
    queryKey: ["review", id],
    queryFn: getReview,
    enabled: !!id,
  });

  const updateReview = async (payload: IUpdateReview) => {
    const { data } = await reviewServices.update(id, payload);
    return data.data;
  };

  const {
    mutate: mutateUpdateReview,
    isPending: isPendingMutateUpdateReview,
    isSuccess: isSuccessMutateUpdateReview,
  } = useMutation({
    mutationFn: (payload: IUpdateReview) => updateReview(payload),
    onError: (error: AxiosError<ErrorResponse>) => {
      const message =
        error.response?.data?.message ?? "Gagal mengupdate Review";
      toast.error(message, { position: "top-right" });
    },
    onSuccess: () => {
      // console.log("success PAYLOAD :", payload);
      toast.success("Success Update review", { position: "top-right" });
      queryClient.invalidateQueries({ queryKey: ["review"] });
      queryClient.invalidateQueries({ queryKey: ["dashboard"] });

      router.replace("/admin/review");
    },
  });

  // console.log(dataReview);

  const handleUpdateReview = (data: IUpdateReview) => {
    // console.log("SUBMIT DATA Review:", data);
    mutateUpdateReview(data);
  };

  return {
    // form
    control,
    handleSubmit,
    errors,
    reset,

    // data review
    dataReview,
    isLoadingReview,

    // update
    handleUpdateReview,
    isPendingMutateUpdateReview,
    isSuccessMutateUpdateReview,
  };
};

export default useDetailReview;
