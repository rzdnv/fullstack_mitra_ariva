import { useQuery } from "@tanstack/react-query";
import dokterServices from "@/services/dokter.service";
import layananServices from "@/services/layanan.service";

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

  return {
    dataDokters,
    isLoadingDokters,

    dataLayanan,
    isLoadingLayanan,
  };
};

export default useHome;
