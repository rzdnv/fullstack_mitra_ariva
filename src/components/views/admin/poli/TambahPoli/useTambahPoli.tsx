import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { toast } from "sonner";
import poliServices from "@/services/poli.service";

const tambahPoliSchema = z.object({
  namaPoli: z.string().min(1, "Nama poli wajib diisi"),
});

export type TambahPoliValues = z.infer<typeof tambahPoliSchema>;

interface ErrorResponse {
  message: string;
}

interface UseTambahPoliProps {
  onSuccess?: () => void;
}

const useTambahPoli = ({ onSuccess }: UseTambahPoliProps) => {
  const queryClient = useQueryClient();

  const {
    control,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<TambahPoliValues>({
    resolver: zodResolver(tambahPoliSchema),
    defaultValues: {
      namaPoli: "",
    },
  });

  const { mutate: mutateCreatePoli, isPending: isPendingCreate } = useMutation({
    mutationFn: poliServices.create,
    onSuccess: () => {
      toast.success("Poli berhasil ditambahkan", { position: "top-right" });
      queryClient.invalidateQueries({ queryKey: ["poli"] });
      queryClient.invalidateQueries({ queryKey: ["dashboard"] });
      reset();
      onSuccess?.();
    },
    onError: (error: AxiosError<ErrorResponse>) => {
      const message = error.response?.data?.message ?? "Gagal menambahkan poli";
      toast.error(message, { position: "top-right" });
    },
  });

  const onSubmit = (values: TambahPoliValues) => {
    mutateCreatePoli(values);
  };

  return {
    control,
    handleSubmit,
    errors,
    onSubmit,
    isPendingCreate,
  };
};

export default useTambahPoli;
