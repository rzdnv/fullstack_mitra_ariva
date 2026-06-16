import { FILE_SIZE, validateFile } from "@/lib/validate-file";
import dokterServices from "@/services/dokter.service";
import poliServices from "@/services/poli.service";
import uploadServices from "@/services/upload.service";
import { IUpdateDokter } from "@/types/dokter";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { useParams, useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";

interface ErrorResponse {
  message: string;
}

import { z } from "zod";

// Schema
const updateDokterSchema = z.object({
  nama: z.string().min(1, "Nama dokter wajib diisi"),

  spesialis: z.string().min(1, "Spesialis wajib diisi"),

  deskripsi: z.string().min(1, "Deskripsi wajib diisi"),

  poliId: z.number().int().positive("Poli wajib dipilih"),

  foto: z.string().min(1, "Foto wajib diupload"),
});

export type UpdateDokterValues = z.infer<typeof updateDokterSchema>;

const useInfoTab = () => {
  const params = useParams();
  const id = Number(params.id);
  const queryClient = useQueryClient();
  const router = useRouter();

  // FOTO STATE
  const [fotoUrl, setFotoUrl] = useState<string | null>(null);

  const [isUploadingFoto, setIsUploadingFoto] = useState(false);

  const [isDeletingFoto, setIsDeletingFoto] = useState(false);

  // ← Ref untuk track fotoUrl terbaru di cleanup
  const fotoUrlRef = useRef<string | null>(null);

  // ← Track apakah form berhasil submit
  const isSubmittedRef = useRef(false);

  // ← Sync fotoUrl ke ref setiap kali berubah
  useEffect(() => {
    fotoUrlRef.current = fotoUrl;
  }, [fotoUrl]);

  // ← Hapus foto otomatis saat keluar halaman (unmount)
  useEffect(() => {
    return () => {
      // Kalau sudah submit berhasil, tidak perlu hapus
      if (isSubmittedRef.current) return;

      // Kalau ada foto yang belum disimpan → hapus
      if (fotoUrlRef.current) {
        uploadServices.removeFile({ fileUrl: fotoUrlRef.current }).catch(() => {
          // Silent error — tidak perlu toast karena user sudah keluar
        });
      }
    };
  }, []); // ← empty dependency, hanya jalan saat unmount

  // FORM
  const {
    control,
    handleSubmit,
    setValue,
    reset,
    watch,
    formState: { errors },
  } = useForm<UpdateDokterValues>({
    resolver: zodResolver(updateDokterSchema),

    defaultValues: {
      nama: "",
      spesialis: "",
      deskripsi: "",
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

  const updateDokter = async (payload: IUpdateDokter) => {
    const { data } = await dokterServices.update(id, payload);
    return data.data;
  };

  const {
    mutate: mutateUpdateDokter,
    isPending: isPendingMutateUpdateDokter,
    isSuccess: isSuccessMutateUpdateDokter,
  } = useMutation({
    mutationFn: (payload: IUpdateDokter) => updateDokter(payload),
    onError: (error: AxiosError<ErrorResponse>) => {
      const message =
        error.response?.data?.message ?? "Gagal mengupdate dokter";
      toast.error(message, { position: "top-right" });
    },
    onSuccess: () => {
      // console.log("success PAYLOAD :", payload);
      toast.success("Success Update Dokter", { position: "top-right" });
      queryClient.invalidateQueries({ queryKey: ["dokter"] });
      queryClient.invalidateQueries({ queryKey: ["dashboard"] });

      // ← Tandai sudah submit berhasil agar cleanup tidak hapus foto
      isSubmittedRef.current = true;

      router.replace("/admin/dokter");
    },
  });

  const handleUpdateDokter = (data: IUpdateDokter) => {
    // console.log("SUBMIT DATA DOKTER:", data);
    mutateUpdateDokter(data);
  };

  // UPLOAD FOTO
  const handleUploadFoto = async (file: File) => {
    const validation = validateFile(file, { maxSize: FILE_SIZE.MB_2 });
    if (!validation.valid) {
      toast.error(validation.message, { position: "top-right" });
      return;
    }

    setIsUploadingFoto(true);

    try {
      const formData = new FormData();

      formData.append("file", file);

      const { data } = await uploadServices.uploadSingle(formData, "dokter");

      const url = data.data.url;

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

  return {
    // Poli
    dataPoli,
    isLoadingPoli,

    // form
    control,
    handleSubmit,
    errors,
    watch,
    reset,

    // image
    fotoUrl,
    isUploadingFoto,
    isDeletingFoto,
    handleUploadFoto,
    handleRemoveFoto,

    // dokter
    handleUpdateDokter,
    isSuccessMutateUpdateDokter,
    isPendingMutateUpdateDokter,
  };
};

export default useInfoTab;
