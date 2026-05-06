"use client";

import { useQuery } from "@tanstack/react-query";
import dokterServices from "@/services/dokter.service";

const useDokter = () => {
  const getDokters = async () => {
    const result = await dokterServices.getAll();
    const { data } = result;
    return data.data;
  };

  const { data: dataDokters, isLoading: isLoadingDokters } = useQuery({
    queryKey: ["dokter"],
    queryFn: getDokters,
    enabled: true,
  });

  return {
    dataDokters,
    isLoadingDokters,
  };
};

export default useDokter;
