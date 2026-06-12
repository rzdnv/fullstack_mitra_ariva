import dokterServices from "@/services/dokter.service";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "next/navigation";

const useDetailDokter = () => {
  const params = useParams();
  const id = Number(params.id);

  const getDokter = async () => {
    const { data } = await dokterServices.getById(id);
    return data.data;
  };

  const { data: dataDokter, isLoading: isLoadingDokter } = useQuery({
    queryKey: ["dokter", id],
    queryFn: getDokter,
    enabled: !!id,
  });

  //   console.log(dataDokter);

  return {
    // data dokter
    dataDokter,
    isLoadingDokter,
  };
};

export default useDetailDokter;
