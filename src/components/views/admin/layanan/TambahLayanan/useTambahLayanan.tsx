import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useEffect, useRef, useState } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { toast } from "sonner";

import layananServices from "@/services/layanan.service";
import { useRouter } from "next/navigation";
import { FILE_SIZE, validateFile } from "@/lib/validate-file";
import uploadServices from "@/services/upload.service";

// Schema
const tambahLayananSchema = z.object({
  namaLayanan: z.string().min(1, "Nama layanan wajib diisi"),

  deskripsi: z.string().min(1, "Deskripsi layanan wajib diisi"),

  foto: z.string().min(1, "Foto wajib diupload"),
});

export type TambahLayananValues = z.infer<typeof tambahLayananSchema>;

interface ErrorResponse {
  message: string;
}

const useTambahLayanan = () => {
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
    formState: { errors },
    reset,
  } = useForm<TambahLayananValues>({
    resolver: zodResolver(tambahLayananSchema),

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

  const handleResetForm = async () => {
    if (fotoUrl) {
      try {
        await uploadServices.removeFile({
          fileUrl: fotoUrl,
        });
      } catch {}
    }

    reset();

    setFotoUrl(null);
  };

  // CREATE LAYANAN
  const { mutate: mutateCreateLayanan, isPending: isPendingCreate } =
    useMutation({
      mutationFn: layananServices.create,

      onSuccess: () => {
        toast.success("Layanan berhasil ditambahkan", {
          position: "top-right",
        });

        queryClient.invalidateQueries({
          queryKey: ["layanan"],
        });

        queryClient.invalidateQueries({
          queryKey: ["dashboard"],
        });

        // ← Tandai sudah submit berhasil agar cleanup tidak hapus foto
        isSubmittedRef.current = true;

        reset();
        router.replace("/admin/layanan");

        setFotoUrl(null);
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
  const onSubmit = (values: TambahLayananValues) => {
    mutateCreateLayanan(values);
  };

  return {
    control,
    handleSubmit,
    errors,

    // submit
    onSubmit,
    isPendingCreate,

    // foto
    fotoUrl,
    isUploadingFoto,
    isDeletingFoto,
    handleUploadFoto,
    handleRemoveFoto,
    handleResetForm,
  };
};

export default useTambahLayanan;
