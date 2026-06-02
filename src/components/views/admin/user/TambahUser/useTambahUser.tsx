import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { toast } from "sonner";
import userServices from "@/services/user.service";

// Schema
const tambahUserSchema = z.object({
  username: z.string().min(1, "username wajib diisi"),

  password: z.string().min(1, "Password wajib diisi"),

  role: z.enum(["ADMIN", "EDITOR"], {
    message: "Role wajib dipilih",
  }),
});

export type TambahUserValues = z.infer<typeof tambahUserSchema>;

interface ErrorResponse {
  message: string;
}

interface PropsTypes {
  onSuccess?: () => void;
}

const useTambahUser = ({ onSuccess }: PropsTypes = {}) => {
  const queryClient = useQueryClient();

  // FORM
  const {
    control,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<TambahUserValues>({
    resolver: zodResolver(tambahUserSchema),

    defaultValues: {
      username: "",
      password: "",
      role: undefined,
    },
  });

  // CREATE USER
  const { mutate: mutateCreateUser, isPending: isPendingCreate } = useMutation({
    mutationFn: userServices.create,

    onSuccess: () => {
      toast.success("User berhasil ditambahkan", {
        position: "top-right",
      });

      queryClient.invalidateQueries({
        queryKey: ["user"],
      });

      queryClient.invalidateQueries({
        queryKey: ["dashboard"],
      });

      reset();

      onSuccess?.();
    },

    onError: (error: AxiosError<ErrorResponse>) => {
      const message = error.response?.data?.message ?? "Gagal menambahkan user";

      toast.error(message, {
        position: "top-right",
      });
    },
  });

  // SUBMIT
  const onSubmit = (values: TambahUserValues) => {
    mutateCreateUser(values);
  };

  return {
    control,
    handleSubmit,
    errors,

    // submit
    onSubmit,
    isPendingCreate,
  };
};

export default useTambahUser;
