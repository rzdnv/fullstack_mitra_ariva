import useChangeUrl from "@/hooks/useChangeUrl";
import dokterServices from "@/services/dokter.service";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { useState } from "react";
import { toast } from "sonner";
import { AxiosError } from "axios";

interface ErrorResponse {
  message: string;
}

const useDokterList = () => {
  const queryClient = useQueryClient();
  const [selectedId, setSelectedId] = useState<number | null>(null);
  const { currentPage, currentLimit, currentSearch, setUrl } = useChangeUrl();

  // ─────────────────────────────────────────
  // GET ALL
  // ─────────────────────────────────────────
  const getDokters = async () => {
    let params = `limit=${currentLimit}&page=${currentPage}`;
    if (currentSearch) {
      params += `&search=${currentSearch}`;
    }
    const { data } = await dokterServices.getAll(params);
    return data.data;
  };

  const {
    data,
    isLoading: isLoadingDokters,
    isRefetching: isRefetchingDokters,
  } = useQuery({
    queryKey: ["dokter", currentPage, currentLimit, currentSearch],
    queryFn: getDokters,
    enabled: !!currentPage && !!currentLimit,
  });

  // ─────────────────────────────────────────
  // DELETE
  // ─────────────────────────────────────────
  const { mutate: mutateDeleteDokter, isPending: isPendingDeleteDokter } =
    useMutation({
      mutationFn: (id: number) => dokterServices.delete(id),
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

  // ─────────────────────────────────────────
  // SEARCH & PAGINATION
  // ─────────────────────────────────────────
  const handleSearch = (value: string) => {
    setUrl({ search: value, page: "1" });
  };

  const handleChangePage = (page: number) => {
    setUrl({ page: String(page) });
  };

  const handleChangeLimit = (limit: string) => {
    setUrl({ limit, page: "1" });
  };

  return {
    // Data
    dataDokters: data?.data ?? [],
    meta: data?.meta,

    // Loading
    isLoadingDokters,
    isRefetchingDokters,

    // Delete
    selectedId,
    setSelectedId,
    handleDeleteDokter: (id: number) => mutateDeleteDokter(id),
    isPendingDeleteDokter,

    // Search & Pagination
    currentSearch,
    currentLimit,
    currentPage,
    handleSearch,
    handleChangePage,
    handleChangeLimit,
  };
};

export default useDokterList;
