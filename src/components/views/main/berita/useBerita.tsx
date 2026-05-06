"use client";

import { useQuery } from "@tanstack/react-query";

import beritaServices from "@/services/berita.service";

const useBerita = () => {
  const getBerita = async () => {
    const result = await beritaServices.getAll();
    const { data } = result;
    return data.data;
  };

  const { data: dataBerita, isLoading: isLoadingBerita } = useQuery({
    queryKey: ["berita"],
    queryFn: getBerita,
    enabled: true,
  });

  return {
    dataBerita,
    isLoadingBerita,
  };
};

export default useBerita;
