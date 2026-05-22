import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { toast } from "sonner";

import dokterServices from "@/services/dokter.service";
import poliServices from "@/services/poli.service";
import uploadServices from "@/services/upload.service";

// Schema
const tambahDokterSchema = z.object({
  nama: z.string().min(1, "Nama dokter wajib diisi"),

  spesialis: z.string().min(1, "Spesialis wajib diisi"),

  poliId: z.number().int().positive("Poli wajib dipilih"),

  foto: z.string().min(1, "Foto wajib diupload"),
});

export type TambahDokterValues = z.infer<typeof tambahDokterSchema>;

interface ErrorResponse {
  message: string;
}

// Hook
const useTambahDokter = () => {
  const router = useRouter();

  const queryClient = useQueryClient();

  // FOTO STATE
  const [fotoUrl, setFotoUrl] = useState<string | null>(null);

  const [isUploadingFoto, setIsUploadingFoto] = useState(false);

  const [isDeletingFoto, setIsDeletingFoto] = useState(false);

  // FORM
  const {
    control,
    handleSubmit,
    setValue,
    formState: { errors },
    reset,
  } = useForm<TambahDokterValues>({
    resolver: zodResolver(tambahDokterSchema),

    defaultValues: {
      nama: "",
      spesialis: "",
      poliId: 0,
      foto: "",
    },
  });

  // GET POLI
  const { data: dataPoli, isLoading: isLoadingPoli } = useQuery({
    queryKey: ["poli"],

    queryFn: async () => {
      const { data } = await poliServices.getAll();

      return data.data;
    },
  });

  // UPLOAD FOTO
  const handleUploadFoto = async (file: File) => {
    setIsUploadingFoto(true);

    try {
      const formData = new FormData();

      formData.append("file", file);

      const { data } = await uploadServices.uploadSingle(formData);

      const url = data.data.secure_url;

      setFotoUrl(url);

      setValue("foto", url, {
        shouldValidate: true,
      });

      toast.success("Foto berhasil diupload", {
        position: "top-right",
      });
    } catch {
      toast.error("Gagal upload foto", {
        position: "top-right",
      });
    } finally {
      setIsUploadingFoto(false);
    }
  };

  // REMOVE FOTO
  const handleRemoveFoto = async () => {
    if (!fotoUrl) return;

    setIsDeletingFoto(true);

    try {
      await uploadServices.removeFile({
        fileUrl: fotoUrl,
      });

      setFotoUrl(null);

      setValue("foto", "", {
        shouldValidate: true,
      });

      toast.success("Foto berhasil dihapus", {
        position: "top-right",
      });
    } catch {
      toast.error("Gagal menghapus foto", {
        position: "top-right",
      });
    } finally {
      setIsDeletingFoto(false);
    }
  };

  // CREATE DOKTER
  const { mutate: mutateCreateDokter, isPending: isPendingCreate } =
    useMutation({
      mutationFn: dokterServices.create,

      onSuccess: () => {
        toast.success("Dokter berhasil ditambahkan", {
          position: "top-right",
        });

        queryClient.invalidateQueries({
          queryKey: ["dokter"],
        });

        queryClient.invalidateQueries({
          queryKey: ["dashboard"],
        });

        reset();

        setFotoUrl(null);

        router.push("/admin/dokter");
      },

      onError: (error: AxiosError<ErrorResponse>) => {
        const message =
          error.response?.data?.message ?? "Gagal menambahkan dokter";

        toast.error(message, {
          position: "top-right",
        });
      },
    });

  // SUBMIT
  const onSubmit = (values: TambahDokterValues) => {
    mutateCreateDokter(values);
  };

  return {
    control,
    handleSubmit,
    errors,

    // submit
    onSubmit,
    isPendingCreate,

    // poli
    dataPoli,
    isLoadingPoli,

    // foto
    fotoUrl,
    isUploadingFoto,
    isDeletingFoto,
    handleUploadFoto,
    handleRemoveFoto,
  };
};

export default useTambahDokter;
