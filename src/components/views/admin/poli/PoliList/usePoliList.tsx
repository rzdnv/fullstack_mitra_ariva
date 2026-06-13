import useChangeUrl from "@/hooks/useChangeUrl";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { useState } from "react";
import { toast } from "sonner";
import { AxiosError } from "axios";
import poliServices from "@/services/poli.service";
import { useDebounce } from "@/hooks/useDebounce";

interface ErrorResponse {
  message: string;
}

const usePoliList = () => {
  const queryClient = useQueryClient();
  const [selectedId, setSelectedId] = useState<number | null>(null);
  const { currentPage, currentLimit, currentSearch, setUrl } = useChangeUrl();

  const debouncedSearch = useDebounce(currentSearch, 500);

  // GET ALL
  const getPolis = async () => {
    let params = `limit=${currentLimit}&page=${currentPage}`;
    if (debouncedSearch) {
      params += `&search=${debouncedSearch}`;
    }
    const { data } = await poliServices.getAllPaginated(params);
    return data.data;
  };

  const {
    data,
    isLoading: isLoadingPolis,
    isRefetching: isRefetchingPolis,
  } = useQuery({
    queryKey: ["poli", currentPage, currentLimit, debouncedSearch],
    queryFn: getPolis,
    enabled: !!currentPage && !!currentLimit,
  });

  // DELETE
  const { mutate: mutateDeletePoli, isPending: isPendingDeletePoli } =
    useMutation({
      mutationFn: (id: number) => poliServices.delete(id),
      onSuccess: () => {
        toast.success("Poli berhasil dihapus", { position: "top-right" });
        queryClient.invalidateQueries({ queryKey: ["poli"] });
        queryClient.invalidateQueries({ queryKey: ["dashboard"] });
        setSelectedId(null);
      },
      onError: (error: AxiosError<ErrorResponse>) => {
        const message = error.response?.data?.message ?? "Gagal menghapus poli";
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

  // console.log(data?.data);

  return {
    // Data
    dataPolis: data?.data ?? [],
    meta: data?.meta,

    // Loading
    isLoadingPolis,
    isRefetchingPolis,

    // Delete
    selectedId,
    setSelectedId,
    handleDeletePoli: (id: number) => mutateDeletePoli(id),
    isPendingDeletePoli,

    // Search & Pagination
    currentSearch,
    currentLimit,
    currentPage,
    handleSearch,
    handleChangePage,
    handleChangeLimit,
  };
};

export default usePoliList;
