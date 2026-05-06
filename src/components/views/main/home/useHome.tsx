"use client";

import { useQuery } from "@tanstack/react-query";
import dokterServices from "@/services/dokter.service";
import layananServices from "@/services/layanan.service";
import beritaServices from "@/services/berita.service";
import reviewServices from "@/services/review.service";

const useHome = () => {
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

  const getReviews = async () => {
    const result = await reviewServices.getAll();
    const { data } = result;
    return data.data;
  };

  const { data: dataReview, isLoading: isLoadingReview } = useQuery({
    queryKey: ["review"],
    queryFn: getReviews,
    enabled: true,
  });

  return {
    dataDokters,
    isLoadingDokters,

    dataLayanan,
    isLoadingLayanan,

    dataBerita,
    isLoadingBerita,

    dataReview,
    isLoadingReview,
  };
};

export default useHome;
