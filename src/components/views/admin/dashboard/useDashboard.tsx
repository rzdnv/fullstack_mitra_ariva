import { useQuery } from "@tanstack/react-query";
import dashboardServices from "@/services/dashboard.service";
import { IDashboard } from "@/types/dashboard";

const useDashboard = () => {
  const getStatus = async (): Promise<IDashboard> => {
    const { data } = await dashboardServices.getStats();
    return data.data;
  };

  const { data: dataStatus, isLoading: isLoadingStatus } = useQuery({
    queryKey: ["dashboard"],
    queryFn: getStatus,
  });

  return { dataStatus, isLoadingStatus };
};

export default useDashboard;
