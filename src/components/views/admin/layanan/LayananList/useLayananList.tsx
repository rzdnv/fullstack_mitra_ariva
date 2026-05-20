import useChangeUrl from "@/hooks/useChangeUrl";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { useState } from "react";
import { toast } from "sonner";
import { AxiosError } from "axios";
import layananServices from "@/services/layanan.service";

interface ErrorResponse {
  message: string;
}

const useLayananList = () => {
  const queryClient = useQueryClient();
  const [selectedId, setSelectedId] = useState<number | null>(null);
  const { currentPage, currentLimit, currentSearch, setUrl } = useChangeUrl();

  // GET ALL
  const getLayanans = async () => {
    let params = `limit=${currentLimit}&page=${currentPage}`;
    if (currentSearch) {
      params += `&search=${currentSearch}`;
    }
    const { data } = await layananServices.getAllPaginated(params);
    return data.data;
  };

  const {
    data,
    isLoading: isLoadingLayanans,
    isRefetching: isRefetchingLayanans,
  } = useQuery({
    queryKey: ["layanan", currentPage, currentLimit, currentSearch],
    queryFn: getLayanans,
    enabled: !!currentPage && !!currentLimit,
  });

  // DELETE
  const { mutate: mutateDeleteLayanan, isPending: isPendingDeleteLayanan } =
    useMutation({
      mutationFn: (id: number) => layananServices.delete(id),
      onSuccess: () => {
        toast.success("Layanan berhasil dihapus", { position: "top-right" });
        queryClient.invalidateQueries({ queryKey: ["layanan"] });
        queryClient.invalidateQueries({ queryKey: ["dashboard"] });
        setSelectedId(null);
      },
      onError: (error: AxiosError<ErrorResponse>) => {
        const message =
          error.response?.data?.message ?? "Gagal menghapus layanan";
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
    dataLayanans: data?.data ?? [],
    meta: data?.meta,

    // Loading
    isLoadingLayanans,
    isRefetchingLayanans,

    // Delete
    selectedId,
    setSelectedId,
    handleDeleteLayanan: (id: number) => mutateDeleteLayanan(id),
    isPendingDeleteLayanan,

    // Search & Pagination
    currentSearch,
    currentLimit,
    currentPage,
    handleSearch,
    handleChangePage,
    handleChangeLimit,
  };
};

export default useLayananList;
