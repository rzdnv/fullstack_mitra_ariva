import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useState } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { toast } from "sonner";

import uploadServices from "@/services/upload.service";
import layananServices from "@/services/layanan.service";

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

interface PropsTypes {
  onSuccess?: () => void;
}

const useTambahLayanan = ({ onSuccess }: PropsTypes = {}) => {
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

        reset();

        setFotoUrl(null);
        onSuccess?.();
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
