import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { toast } from "sonner";
import jadwalServices from "@/services/jadwal.service";
import { HariType } from "@/types/jadwal";
import dokterServices from "@/services/dokter.service";
import { da } from "zod/v4/locales";

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
  dokterId: z.number().int().positive("Dokter wajib dipilih"),
});

export type TambahJadwalValues = z.infer<typeof tambahJadwalSchema>;

interface ErrorResponse {
  message: string;
}

interface UseTambahJadwalProps {
  onSuccess?: () => void;
}

const useTambahJadwal = ({ onSuccess }: UseTambahJadwalProps) => {
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
      dokterId: 0,
    },
  });

  const getDokters = async () => {
    const { data } = await dokterServices.getAll();
    return data.data;
  };

  const { data: dataDokters, isLoading: isLoadingDokters } = useQuery({
    queryKey: ["dokter"],
    queryFn: getDokters,
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
    mutateCreateJadwal(values);
  };

  return {
    control,
    handleSubmit,
    errors,
    onSubmit,
    isPendingCreate,

    // dokter
    dataDokters,
    isLoadingDokters,
  };
};

export default useTambahJadwal;
