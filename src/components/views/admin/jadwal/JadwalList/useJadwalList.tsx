import useChangeUrl from "@/hooks/useChangeUrl";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { useState } from "react";
import { toast } from "sonner";
import { AxiosError } from "axios";
import jadwalServices from "@/services/jadwal.service";

interface ErrorResponse {
  message: string;
}

const useJadwalList = () => {
  const queryClient = useQueryClient();
  const [selectedId, setSelectedId] = useState<number | null>(null);
  const { currentPage, currentLimit, currentSearch, setUrl } = useChangeUrl();

  // GET ALL
  const getJadwals = async () => {
    let params = `limit=${currentLimit}&page=${currentPage}`;
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
    queryKey: ["jadwal", currentPage, currentLimit, currentSearch],
    queryFn: getJadwals,
    enabled: !!currentPage && !!currentLimit,
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

export default useJadwalList;
