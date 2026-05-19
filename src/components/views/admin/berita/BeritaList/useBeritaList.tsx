import useChangeUrl from "@/hooks/useChangeUrl";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { useState } from "react";
import { toast } from "sonner";
import { AxiosError } from "axios";
import beritaServices from "@/services/berita.service";

interface ErrorResponse {
  message: string;
}

const useBeritaList = () => {
  const queryClient = useQueryClient();
  const [selectedId, setSelectedId] = useState<number | null>(null);
  const { currentPage, currentLimit, currentSearch, setUrl } = useChangeUrl();

  // GET ALL
  const getBeritas = async () => {
    let params = `limit=${currentLimit}&page=${currentPage}`;
    if (currentSearch) {
      params += `&search=${currentSearch}`;
    }
    const { data } = await beritaServices.getAllPaginated(params);
    return data.data;
  };

  const {
    data,
    isLoading: isLoadingBeritas,
    isRefetching: isRefetchingBeritas,
  } = useQuery({
    queryKey: ["berita", currentPage, currentLimit, currentSearch],
    queryFn: getBeritas,
    enabled: !!currentPage && !!currentLimit,
  });

  // DELETE
  const { mutate: mutateDeleteBerita, isPending: isPendingDeleteBerita } =
    useMutation({
      mutationFn: (id: number) => beritaServices.delete(id),
      onSuccess: () => {
        toast.success("Berita berhasil dihapus", { position: "top-right" });
        queryClient.invalidateQueries({ queryKey: ["berita"] });
        queryClient.invalidateQueries({ queryKey: ["dashboard"] });
        setSelectedId(null);
      },
      onError: (error: AxiosError<ErrorResponse>) => {
        const message =
          error.response?.data?.message ?? "Gagal menghapus berita";
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
    dataBeritas: data?.data ?? [],
    meta: data?.meta,

    // Loading
    isLoadingBeritas,
    isRefetchingBeritas,

    // Delete
    selectedId,
    setSelectedId,
    handleDeleteBerita: (id: number) => mutateDeleteBerita(id),
    isPendingDeleteBerita,

    // Search & Pagination
    currentSearch,
    currentLimit,
    currentPage,
    handleSearch,
    handleChangePage,
    handleChangeLimit,
  };
};

export default useBeritaList;
