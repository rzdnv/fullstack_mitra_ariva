"use client";

import { useQuery } from "@tanstack/react-query";
import layananServices from "@/services/layanan.service";

const useLayanan = () => {
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
  };
};

export default useLayanan;
