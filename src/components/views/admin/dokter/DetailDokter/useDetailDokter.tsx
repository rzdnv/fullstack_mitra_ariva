import dokterServices from "@/services/dokter.service";
import { IUpdateDokter } from "@/types/dokter";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { useParams, useRouter } from "next/navigation";
import { toast } from "sonner";

interface ErrorResponse {
  message: string;
}

const useDetailDokter = () => {
  const params = useParams();
  const id = Number(params.id);
  const queryClient = useQueryClient();
  const router = useRouter();

  const getDokter = async () => {
    const { data } = await dokterServices.getById(id);
    return data.data;
  };

  const { data: dataDokter, isLoading: isLoadingDokter } = useQuery({
    queryKey: ["dokter", id],
    queryFn: getDokter,
    enabled: !!id,
  });

  //   console.log(dataDokter);

  const updateDokter = async (payload: IUpdateDokter) => {
    const { data } = await dokterServices.update(id, payload);
    return data.data;
  };

  const {
    mutate: mutateUpdateDokter,
    isPending: isPendingMutateUpdateDokter,
    isSuccess: isSuccessMutateUpdateDokter,
  } = useMutation({
    mutationFn: (payload: IUpdateDokter) => updateDokter(payload),
    onError: (error: AxiosError<ErrorResponse>) => {
      const message = error.response?.data?.message ?? "Gagal mengupdate poli";
      toast.error(message, { position: "top-right" });
    },
    onSuccess: () => {
      // console.log("success PAYLOAD :", payload);
      toast.success("Success Update Poli", { position: "top-right" });
      queryClient.invalidateQueries({ queryKey: ["poli"] });
      queryClient.invalidateQueries({ queryKey: ["dashboard"] });
      router.replace("/admin/jadwal");
    },
  });

  const handleUpdateDokter = (data: IUpdateDokter) => {
    // console.log("SUBMIT DATA DOKTER:", data);
    mutateUpdateDokter(data);
  };

  return {
    // data dokter
    dataDokter,
    isLoadingDokter,

    // update
    handleUpdateDokter,
    isPendingMutateUpdateDokter,
    isSuccessMutateUpdateDokter,
  };
};

export default useDetailDokter;
