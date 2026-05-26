import dokterServices from "@/services/dokter.service";
import { IUpdateDokter } from "@/types/dokter";
import { useMutation, useQuery } from "@tanstack/react-query";
import { useParams } from "next/navigation";
import { toast } from "sonner";

const useDetailDokter = () => {
  const params = useParams();
  const id = Number(params.id);

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
    onError: (error) => {
      toast.error(error.message);
    },
    onSuccess: () => {
      // console.log("success PAYLOAD :", payload);
      toast.success("Success Update Dokter");
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
