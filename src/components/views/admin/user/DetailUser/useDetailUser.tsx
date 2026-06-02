import userServices from "@/services/user.service";
import { IUpdateUser } from "@/types/user";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { useParams, useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import z from "zod";

// Schema
const updateUserSchema = z.object({
  username: z
    .string()
    .min(6, "Username wajib diisi")
    .regex(
      /^[a-zA-Z0-9]+$/,
      "Username hanya boleh berisi huruf dan angka tanpa spasi atau simbol",
    ),

  role: z.enum(["ADMIN", "EDITOR"], {
    message: "Role wajib dipilih",
  }),
});

export type UpdateUserValues = z.infer<typeof updateUserSchema>;

const updatePasswordUserSchema = z.object({
  password: z
    .string()
    .min(6, "Password minimal 6 karakter")
    .regex(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).+$/,
      "Password harus mengandung huruf besar, huruf kecil, dan angka",
    ),
});

export type UpdatePasswordUserValues = z.infer<typeof updatePasswordUserSchema>;

interface ErrorResponse {
  message: string;
}

const useDetailUser = () => {
  const params = useParams();
  const id = Number(params.id);
  const queryClient = useQueryClient();
  const router = useRouter();

  // FORM
  const {
    control: controlUpdateUser,
    handleSubmit: handleSubmitUpdateUser,
    formState: { errors: errorsUpdate },
    reset: resetUpdateUser,
  } = useForm<UpdateUserValues>({
    resolver: zodResolver(updateUserSchema),

    defaultValues: {
      username: "",
      role: undefined,
    },
  });

  const {
    control: controlUpdatePassword,
    handleSubmit: handleSubmitUpdatePassword,
    formState: { errors: errorsUpdatePassword },
  } = useForm<UpdatePasswordUserValues>({
    resolver: zodResolver(updatePasswordUserSchema),

    defaultValues: {
      password: "",
    },
  });

  const getUser = async () => {
    const { data } = await userServices.getById(id);
    return data.data;
  };

  const { data: dataUser, isLoading: isLoadingUser } = useQuery({
    queryKey: ["user", id],
    queryFn: getUser,
    enabled: !!id,
  });

  // UPDATE

  const updateUser = async (payload: IUpdateUser) => {
    const { data } = await userServices.update(id, payload);
    return data.data;
  };

  const { mutate: mutateUpdateUser, isPending: isPendingMutateUpdateUser } =
    useMutation({
      mutationFn: (payload: IUpdateUser) => updateUser(payload),
      onError: (error: AxiosError<ErrorResponse>) => {
        const message =
          error.response?.data?.message ?? "Gagal mengupdate User";
        toast.error(message, { position: "top-right" });
      },
      onSuccess: () => {
        // console.log("success PAYLOAD :", payload);
        toast.success("Success Update user", { position: "top-right" });
        queryClient.invalidateQueries({ queryKey: ["user"] });
        queryClient.invalidateQueries({ queryKey: ["dashboard"] });

        router.replace("/admin/users");
      },
    });

  // RESET PASSWORD
  const updatePasswordUser = async (payload: IUpdateUser) => {
    const { data } = await userServices.resetPassword(id, payload);
    return data.data;
  };

  const {
    mutate: mutateUpdatePasswordUser,
    isPending: isPendingMutateUpdatePasswordUser,
  } = useMutation({
    mutationFn: (payload: IUpdateUser) => updatePasswordUser(payload),
    onError: (error: AxiosError<ErrorResponse>) => {
      const message =
        error.response?.data?.message ?? "Gagal mengupdate password User";
      toast.error(message, { position: "top-right" });
    },
    onSuccess: () => {
      // console.log("success PAYLOAD :", payload);
      toast.success("Success Update Password user", { position: "top-right" });
      queryClient.invalidateQueries({ queryKey: ["user"] });
      queryClient.invalidateQueries({ queryKey: ["dashboard"] });
    },
  });

  const handleUpdateUser = (data: IUpdateUser) => {
    // console.log("SUBMIT DATA User:", data);
    mutateUpdateUser(data);
  };

  const handleUpdatePassword = (data: IUpdateUser) => {
    // console.log("SUBMIT DATA User:", data);
    mutateUpdatePasswordUser(data);
  };

  return {
    // form
    controlUpdateUser,
    handleSubmitUpdateUser,
    errorsUpdate,
    resetUpdateUser,

    controlUpdatePassword,
    handleSubmitUpdatePassword,
    errorsUpdatePassword,

    // data user
    dataUser,
    isLoadingUser,

    // update
    handleUpdateUser,
    isPendingMutateUpdateUser,

    handleUpdatePassword,
    isPendingMutateUpdatePasswordUser,
  };
};

export default useDetailUser;
