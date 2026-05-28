import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { toast } from "sonner";
import jadwalServices from "@/services/jadwal.service";
import { HariType } from "@/types/jadwal"; // ← import HariType

const hariEnum = [
  "SENIN",
  "SELASA",
  "RABU",
  "KAMIS",
  "JUMAT",
  "SABTU",
  "MINGGU",
] as const satisfies readonly HariType[];

const tambahJadwalSchema = z.object({
  hari: z.enum(hariEnum, {
    message: "Hari wajib dipilih",
  }),

  jamMulai: z.string().min(1, "Jam mulai wajib diisi"),
  jamSelesai: z.string().min(1, "Jam selesai wajib diisi"),
});

export type TambahJadwalValues = z.infer<typeof tambahJadwalSchema>;

interface ErrorResponse {
  message: string;
}

interface PropTypes {
  onSuccess?: () => void;
  dokterId: number;
}

const useTambahJadwal = ({ onSuccess, dokterId }: PropTypes) => {
  const queryClient = useQueryClient();

  const {
    control,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<TambahJadwalValues>({
    resolver: zodResolver(tambahJadwalSchema),
    defaultValues: {
      hari: undefined,
      jamMulai: "",
      jamSelesai: "",
    },
  });

  const { mutate: mutateCreateJadwal, isPending: isPendingCreate } =
    useMutation({
      mutationFn: jadwalServices.create,
      onSuccess: () => {
        toast.success("Jadwal berhasil ditambahkan", { position: "top-right" });
        queryClient.invalidateQueries({ queryKey: ["jadwal"] });
        queryClient.invalidateQueries({ queryKey: ["dashboard"] });
        reset();
        onSuccess?.();
      },
      onError: (error: AxiosError<ErrorResponse>) => {
        const message =
          error.response?.data?.message ?? "Gagal menambahkan jadwal";
        toast.error(message, { position: "top-right" });
      },
    });

  const onSubmit = (values: TambahJadwalValues) => {
    mutateCreateJadwal({
      ...values,
      dokterId,
    });
  };

  return {
    control,
    handleSubmit,
    errors,
    onSubmit,
    isPendingCreate,
  };
};

export default useTambahJadwal;
