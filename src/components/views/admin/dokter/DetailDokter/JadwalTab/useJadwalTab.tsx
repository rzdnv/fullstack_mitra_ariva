import useChangeUrl from "@/hooks/useChangeUrl";
import jadwalServices from "@/services/jadwal.service";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { useParams } from "next/navigation";
import { useState } from "react";
import { toast } from "sonner";

interface ErrorResponse {
  message: string;
}

const useJadwalTab = () => {
  const params = useParams();
  const id = Number(params.id);

  const queryClient = useQueryClient();
  const [selectedId, setSelectedId] = useState<number | null>(null);
  const { currentPage, currentLimit, currentSearch, setUrl } = useChangeUrl();

  // GET ALL
  const getJadwals = async () => {
    let params = `limit=${currentLimit}&page=${currentPage}&dokterId=${id}`;
    if (currentSearch) {
      params += `&search=${currentSearch}`;
    }
    const { data } = await jadwalServices.getAllPaginated(params);
    return data.data;
  };

  const {
    data,
    isLoading: isLoadingJadwals,
    isRefetching: isRefetchingJadwals,
  } = useQuery({
    queryKey: ["jadwal", currentPage, currentLimit, currentSearch, id],
    queryFn: getJadwals,
    enabled: !!currentPage && !!currentLimit && !!id,
  });

  // DELETE
  const { mutate: mutateDeleteJadwal, isPending: isPendingDeleteJadwal } =
    useMutation({
      mutationFn: (id: number) => jadwalServices.delete(id),
      onSuccess: () => {
        toast.success("Jadwal berhasil dihapus", { position: "top-right" });
        queryClient.invalidateQueries({ queryKey: ["jadwal"] });
        queryClient.invalidateQueries({ queryKey: ["dashboard"] });
        setSelectedId(null);
      },
      onError: (error: AxiosError<ErrorResponse>) => {
        const message =
          error.response?.data?.message ?? "Gagal menghapus jadwal";
        toast.error(message, { position: "top-right" });
      },
    });

  // SEARCH & PAGINATION
  const handleSearch = (value: string) => {
    setUrl({ search: value, page: "1" });
  };

  const handleChangePage = (page: number) => {
    setUrl({ page: String(page) });
  };

  const handleChangeLimit = (limit: string) => {
    setUrl({ limit, page: "1" });
  };

  // console.log(data);

  return {
    // Data
    dataJadwals: data?.data ?? [],
    meta: data?.meta,

    // Loading
    isLoadingJadwals,
    isRefetchingJadwals,

    // Delete
    selectedId,
    setSelectedId,
    handleDeleteJadwal: (id: number) => mutateDeleteJadwal(id),
    isPendingDeleteJadwal,

    // Search & Pagination
    currentSearch,
    currentLimit,
    currentPage,
    handleSearch,
    handleChangePage,
    handleChangeLimit,
  };
};

export default useJadwalTab;
