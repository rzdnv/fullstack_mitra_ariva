import { useQuery } from "@tanstack/react-query";
import dokterServices from "@/services/dokter.service";

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

  console.log(dataDokters);

  return {
    dataDokters,
    isLoadingDokters,
  };
};

export default useHome;
