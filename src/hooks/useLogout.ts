import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { AxiosError } from "axios";
import instance from "@/lib/axios/instance";
import endpoint from "@/services/endpoint.constant";

// ─────────────────────────────────────────
// Service
// ─────────────────────────────────────────
const logoutService = async () => {
  const result = await instance.post(`${endpoint.AUTH}/logout`);
  return result.data;
};

// ─────────────────────────────────────────
// Hook
// ─────────────────────────────────────────
const useLogout = () => {
  const router = useRouter();

  const { mutate: mutateLogout, isPending: isPendingLogout } = useMutation({
    mutationFn: logoutService,
    onSuccess: () => {
      toast.success("Logout berhasil", { position: "top-right" });
      router.push("/");
      router.refresh();
    },
    onError: (error: AxiosError) => {
      console.error("[Logout Error]", error);
      toast.error("Gagal logout, coba lagi", { position: "top-right" });
    },
  });

  const handleLogout = () => mutateLogout();

  return {
    handleLogout,
    isPendingLogout,
  };
};

export default useLogout;
