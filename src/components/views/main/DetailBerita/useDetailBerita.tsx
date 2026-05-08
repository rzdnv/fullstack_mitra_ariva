"use client";

import beritaServices from "@/services/berita.service";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "next/navigation"; //

const useDetailBerita = () => {
  const params = useParams();
  const id = Number(params?.id);

  const getBeritaById = async () => {
    const { data } = await beritaServices.getById(id);
    return data.data;
  };

  const {
    data: detailBerita,
    isLoading: isLoadingDetailBerita,
    refetch: refetchDetailBerita,
  } = useQuery({
    queryKey: ["BeritaId", id],
    queryFn: getBeritaById,
    enabled: !!id,
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

  return {
    dataBerita,
    isLoadingBerita,

    detailBerita,
    isLoadingDetailBerita,
    refetchDetailBerita,
  };
};

export default useDetailBerita;
