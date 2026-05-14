import { useState } from "react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { toast } from "sonner";
import dokterServices from "@/services/dokter.service";
import { IDokter } from "@/types/dokter";

interface ErrorResponse {
  message: string;
}

const useDokterList = () => {
  const queryClient = useQueryClient();
  const [selectedId, setSelectedId] = useState<number | null>(null);

  // GET ALL
  const getDokters = async (): Promise<IDokter[]> => {
    const { data } = await dokterServices.getAll();
    return data.data;
  };

  const {
    data: dataDokters,
    isLoading: isLoadingDokters,
    isRefetching: isRefetchingDokters,
  } = useQuery({
    queryKey: ["dokter"],
    queryFn: getDokters,
  });

  // DELETE
  const deleteDokter = async (id: number) => {
    const { data } = await dokterServices.delete(id);
    return data;
  };

  const { mutate: mutateDeleteDokter, isPending: isPendingDeleteDokter } =
    useMutation({
      mutationFn: deleteDokter,
      onSuccess: () => {
        toast.success("Dokter berhasil dihapus", { position: "top-right" });
        queryClient.invalidateQueries({ queryKey: ["dokter"] });
        queryClient.invalidateQueries({ queryKey: ["dashboard"] });
        setSelectedId(null);
      },
      onError: (error: AxiosError<ErrorResponse>) => {
        const message =
          error.response?.data?.message ?? "Gagal menghapus dokter";
        toast.error(message, { position: "top-right" });
      },
    });

  const handleDeleteDokter = (id: number) => mutateDeleteDokter(id);

  return {
    dataDokters,
    isLoadingDokters,
    isRefetchingDokters,
    selectedId,
    setSelectedId,
    handleDeleteDokter,
    isPendingDeleteDokter,
  };
};

export default useDokterList;
