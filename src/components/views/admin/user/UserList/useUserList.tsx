import useChangeUrl from "@/hooks/useChangeUrl";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { useState } from "react";
import { toast } from "sonner";
import { AxiosError } from "axios";
import userServices from "@/services/user.service";

interface ErrorResponse {
  message: string;
}

const useUserList = () => {
  const queryClient = useQueryClient();
  const [selectedId, setSelectedId] = useState<number | null>(null);
  const { currentPage, currentLimit, currentSearch, setUrl } = useChangeUrl();

  // GET ALL
  const getUsers = async () => {
    let params = `limit=${currentLimit}&page=${currentPage}`;
    if (currentSearch) {
      params += `&search=${currentSearch}`;
    }
    const { data } = await userServices.getAllPaginated(params);
    return data.data;
  };

  const {
    data,
    isLoading: isLoadingUsers,
    isRefetching: isRefetchingUsers,
  } = useQuery({
    queryKey: ["user", currentPage, currentLimit, currentSearch],
    queryFn: getUsers,
    enabled: !!currentPage && !!currentLimit,
  });

  // DELETE
  const { mutate: mutateDeleteUser, isPending: isPendingDeleteUser } =
    useMutation({
      mutationFn: (id: number) => userServices.delete(id),
      onSuccess: () => {
        toast.success("User berhasil dihapus", { position: "top-right" });
        queryClient.invalidateQueries({ queryKey: ["user"] });
        queryClient.invalidateQueries({ queryKey: ["dashboard"] });
        setSelectedId(null);
      },
      onError: (error: AxiosError<ErrorResponse>) => {
        const message = error.response?.data?.message ?? "Gagal menghapus user";
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
    dataUsers: data?.data ?? [],
    meta: data?.meta,

    // Loading
    isLoadingUsers,
    isRefetchingUsers,

    // Delete
    selectedId,
    setSelectedId,
    handleDeleteUser: (id: number) => mutateDeleteUser(id),
    isPendingDeleteUser,

    // Search & Pagination
    currentSearch,
    currentLimit,
    currentPage,
    handleSearch,
    handleChangePage,
    handleChangeLimit,
  };
};

export default useUserList;
