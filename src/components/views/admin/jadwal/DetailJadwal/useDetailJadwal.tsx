import jadwalServices from "@/services/jadwal.service";
import { HariType, IUpdateJadwal } from "@/types/jadwal";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { useParams, useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import z from "zod";

const hariEnum = [
  "SENIN",
  "SELASA",
  "RABU",
  "KAMIS",
  "JUMAT",
  "SABTU",
  "MINGGU",
] as const satisfies readonly HariType[];

const updateJadwalSchema = z.object({
  hari: z.enum(hariEnum, {
    message: "Hari wajib dipilih",
  }),

  jamMulai: z.string().min(1, "Jam mulai wajib diisi"),
  jamSelesai: z.string().min(1, "Jam selesai wajib diisi"),
});

export type UpdateJadwalValues = z.infer<typeof updateJadwalSchema>;

interface ErrorResponse {
  message: string;
}

const useDetailJadwal = () => {
  const params = useParams();
  const id = Number(params.id);
  const queryClient = useQueryClient();
  const router = useRouter();

  const {
    control,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<UpdateJadwalValues>({
    resolver: zodResolver(updateJadwalSchema),
    defaultValues: {
      hari: "" as HariType,
      jamMulai: "",
      jamSelesai: "",
    },
  });

  const getJadwal = async () => {
    const { data } = await jadwalServices.getById(id);
    return data.data;
  };

  const { data: dataJadwal, isLoading: isLoadingJadwal } = useQuery({
    queryKey: ["jadwal", id],
    queryFn: getJadwal,
    enabled: !!id,
  });

  const updateJadwal = async (payload: IUpdateJadwal) => {
    const { data } = await jadwalServices.update(id, payload);
    return data.data;
  };

  const {
    mutate: mutateUpdateJadwal,
    isPending: isPendingMutateUpdateJadwal,
    isSuccess: isSuccessMutateUpdateJadwal,
  } = useMutation({
    mutationFn: (payload: IUpdateJadwal) => updateJadwal(payload),
    onError: (error: AxiosError<ErrorResponse>) => {
      const message =
        error.response?.data?.message ?? "Gagal mengupdate jadwal";
      toast.error(message, { position: "top-right" });
    },
    onSuccess: () => {
      // console.log("success PAYLOAD :", payload);
      toast.success("Success Update Jadwal", { position: "top-right" });
      queryClient.invalidateQueries({ queryKey: ["jadwal"] });
      queryClient.invalidateQueries({ queryKey: ["dashboard"] });

      router.replace("/admin/jadwal");
    },
  });

  const dokterId = dataJadwal?.dokter?.id;

  // console.log(dataJadwal);

  const handleUpdateJadwal = (data: IUpdateJadwal) => {
    // console.log("SUBMIT DATA Jadwal:", data);
    mutateUpdateJadwal({
      ...data,
      dokterId,
    });
  };

  return {
    // form
    control,
    handleSubmit,
    errors,
    reset,

    // data jadwal
    dataJadwal,
    isLoadingJadwal,

    // update
    handleUpdateJadwal,
    isPendingMutateUpdateJadwal,
    isSuccessMutateUpdateJadwal,
  };
};

export default useDetailJadwal;
