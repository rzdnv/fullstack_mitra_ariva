"use client";

import layananServices from "@/services/layanan.service";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "next/navigation"; //

const useDetailLayanan = () => {
  const params = useParams();
  const id = Number(params?.id);

  const getLayananById = async () => {
    const { data } = await layananServices.getById(id);
    return data.data;
  };

  const {
    data: detailLayanan,
    isLoading: isLoadingDetailLayanan,
    refetch: refetchDetailLayanan,
  } = useQuery({
    queryKey: ["layanan", id],
    queryFn: getLayananById,
    enabled: !!id,
  });

  const getLayanan = async () => {
    const result = await layananServices.getAll();
    const { data } = result;
    return data.data;
  };

  const { data: dataLayanan, isLoading: isLoadingLayanan } = useQuery({
    queryKey: ["layanan"],
    queryFn: getLayanan,
    enabled: true,
  });

  return {
    dataLayanan,
    isLoadingLayanan,

    detailLayanan,
    isLoadingDetailLayanan,
    refetchDetailLayanan,
  };
};

export default useDetailLayanan;
