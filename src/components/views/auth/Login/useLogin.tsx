import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { useMutation } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { toast } from "sonner";
import instance from "@/lib/axios/instance";
import endpoint from "@/services/endpoint.constant";

const loginSchema = z.object({
  username: z
    .string()
    .min(6, "Username wajib diisi")
    .regex(
      /^[a-zA-Z0-9]+$/,
      "Username hanya boleh berisi huruf dan angka tanpa spasi atau simbol",
    ),
  password: z
    .string()
    .min(6, "Password minimal 6 karakter")
    .regex(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).+$/,
      "Password harus mengandung huruf besar, huruf kecil, dan angka",
    ),
});

export type LoginFormValues = z.infer<typeof loginSchema>;

interface LoginErrorResponse {
  success: boolean;
  message: string;
  data: null;
}

const loginService = async (payload: LoginFormValues) => {
  const result = await instance.post(`${endpoint.AUTH}/login`, payload);
  return result.data;
};

// ─────────────────────────────────────────
// Hook
// ─────────────────────────────────────────
const useLogin = () => {
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);

  const togglePassword = () => setShowPassword((prev) => !prev);

  const {
    control,
    handleSubmit,
    formState: { errors },
    reset,
    setError,
  } = useForm<LoginFormValues>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      username: "",
      password: "",
    },
  });

  const { mutate: mutateLogin, isPending: isPendingLogin } = useMutation({
    mutationFn: loginService,
    onError: (error: AxiosError<LoginErrorResponse>) => {
      const message =
        error.response?.data?.message ?? "Username atau password salah";

      toast.error(message, { position: "top-right" });

      setError("root", { message });
    },
    onSuccess: () => {
      toast.success("Login berhasil", { position: "top-right" });
      router.push("/admin");
      router.refresh();
      reset();
    },
  });

  const handleLogin = (data: LoginFormValues) => mutateLogin(data);

  return {
    showPassword,
    togglePassword,
    control,
    handleSubmit,
    handleLogin,
    isPendingLogin,
    errors,
  };
};

export default useLogin;
