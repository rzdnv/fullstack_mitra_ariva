import { FILE_SIZE, validateFile } from "@/lib/validate-file";
import layananServices from "@/services/layanan.service";
import uploadServices from "@/services/upload.service";
import { IUpdateLayanan } from "@/types/layanan";
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
const updateLayananSchema = z.object({
  namaLayanan: z.string().min(1, "Nama layanan wajib diisi"),

  deskripsi: z.string().min(1, "Deskripsi Layanan wajib diisi"),

  foto: z.string().min(1, "Foto wajib diupload"),
});

export type UpdateLayananValues = z.infer<typeof updateLayananSchema>;

const useDetailLayanan = () => {
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
  } = useForm<UpdateLayananValues>({
    resolver: zodResolver(updateLayananSchema),

    defaultValues: {
      namaLayanan: "",
      deskripsi: "",
      foto: "",
    },
  });

  // UPLOAD FOTO
  const handleUploadFoto = async (file: File) => {
    const validation = validateFile(file, { maxSize: FILE_SIZE.MB_1 });
    if (!validation.valid) {
      toast.error(validation.message, { position: "top-right" });
      return;
    }

    setIsUploadingFoto(true);

    try {
      const formData = new FormData();

      formData.append("file", file);

      const { data } = await uploadServices.uploadSingle(formData, "layanan");

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

  const getLayanan = async () => {
    const { data } = await layananServices.getById(id);
    return data.data;
  };

  const { data: dataLayanan, isLoading: isLoadingLayanan } = useQuery({
    queryKey: ["layanan", id],
    queryFn: getLayanan,
    enabled: !!id,
  });

  //   console.log(dataLayanan);

  const updateLayanan = async (payload: IUpdateLayanan) => {
    const { data } = await layananServices.update(id, payload);
    return data.data;
  };

  const {
    mutate: mutateUpdateLayanan,
    isPending: isPendingMutateUpdateLayanan,
    isSuccess: isSuccessMutateUpdateLayanan,
  } = useMutation({
    mutationFn: (payload: IUpdateLayanan) => updateLayanan(payload),
    onError: (error: AxiosError<ErrorResponse>) => {
      const message =
        error.response?.data?.message ?? "Gagal mengupdate layanan";
      toast.error(message, { position: "top-right" });
    },
    onSuccess: () => {
      // console.log("success PAYLOAD :", payload);
      toast.success("Success Update Layanan", { position: "top-right" });
      queryClient.invalidateQueries({ queryKey: ["layanan"] });
      queryClient.invalidateQueries({ queryKey: ["dashboard"] });

      // ← Tandai sudah submit berhasil agar cleanup tidak hapus foto
      isSubmittedRef.current = true;

      router.replace("/admin/layanan");
    },
  });

  const handleUpdateLayanan = (data: IUpdateLayanan) => {
    // console.log("SUBMIT DATA Layanan:", data);
    mutateUpdateLayanan(data);
  };

  return {
    // data Layanan
    dataLayanan,
    isLoadingLayanan,

    // update
    handleUpdateLayanan,
    isPendingMutateUpdateLayanan,
    isSuccessMutateUpdateLayanan,

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
  };
};

export default useDetailLayanan;
