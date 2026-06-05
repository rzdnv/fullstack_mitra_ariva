"use client";

import dokterServices from "@/services/dokter.service";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "next/navigation"; //

const useDetailDokter = () => {
  const params = useParams();
  const id = Number(params?.id);

  const getDokterById = async () => {
    const { data } = await dokterServices.getById(id);
    return data.data;
  };

  const {
    data: detailDokter,
    isLoading: isLoadingDetailDokter,
    refetch: refetchDetailDokter,
  } = useQuery({
    queryKey: ["dokter", id],
    queryFn: getDokterById,
    enabled: !!id,
  });

  return {
    detailDokter,
    isLoadingDetailDokter,
    refetchDetailDokter,
  };
};

export default useDetailDokter;
