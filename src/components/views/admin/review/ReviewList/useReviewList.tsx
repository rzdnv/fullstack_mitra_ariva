import useChangeUrl from "@/hooks/useChangeUrl";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { useState } from "react";
import { toast } from "sonner";
import { AxiosError } from "axios";
import reviewServices from "@/services/review.service";

interface ErrorResponse {
  message: string;
}

const useReviewList = () => {
  const queryClient = useQueryClient();
  const [selectedId, setSelectedId] = useState<number | null>(null);
  const { currentPage, currentLimit, currentSearch, setUrl } = useChangeUrl();

  // GET ALL
  const getReviews = async () => {
    let params = `limit=${currentLimit}&page=${currentPage}`;
    if (currentSearch) {
      params += `&search=${currentSearch}`;
    }
    const { data } = await reviewServices.getAllPaginated(params);
    return data.data;
  };

  const {
    data,
    isLoading: isLoadingReviews,
    isRefetching: isRefetchingReviews,
  } = useQuery({
    queryKey: ["review", currentPage, currentLimit, currentSearch],
    queryFn: getReviews,
    enabled: !!currentPage && !!currentLimit,
  });

  // DELETE
  const { mutate: mutateDeleteReview, isPending: isPendingDeleteReview } =
    useMutation({
      mutationFn: (id: number) => reviewServices.delete(id),
      onSuccess: () => {
        toast.success("Review berhasil dihapus", { position: "top-right" });
        queryClient.invalidateQueries({ queryKey: ["review"] });
        queryClient.invalidateQueries({ queryKey: ["dashboard"] });
        setSelectedId(null);
      },
      onError: (error: AxiosError<ErrorResponse>) => {
        const message =
          error.response?.data?.message ?? "Gagal menghapus review";
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
    dataReviews: data?.data ?? [],
    meta: data?.meta,

    // Loading
    isLoadingReviews,
    isRefetchingReviews,

    // Delete
    selectedId,
    setSelectedId,
    handleDeleteReview: (id: number) => mutateDeleteReview(id),
    isPendingDeleteReview,

    // Search & Pagination
    currentSearch,
    currentLimit,
    currentPage,
    handleSearch,
    handleChangePage,
    handleChangeLimit,
  };
};

export default useReviewList;
