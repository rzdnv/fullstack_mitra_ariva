import poliServices from "@/services/poli.service";
import uploadServices from "@/services/upload.service";
import { zodResolver } from "@hookform/resolvers/zod";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";

import { z } from "zod";

// Schema
const updateDokterSchema = z.object({
  nama: z.string().min(1, "Nama dokter wajib diisi"),

  spesialis: z.string().min(1, "Spesialis wajib diisi"),

  poliId: z.number().int().positive("Poli wajib dipilih"),

  foto: z.string().min(1, "Foto wajib diupload"),
});

export type UpdateDokterValues = z.infer<typeof updateDokterSchema>;

const useInfoTab = () => {
  // FOTO STATE
  const [fotoUrl, setFotoUrl] = useState<string | null>(null);

  const [isUploadingFoto, setIsUploadingFoto] = useState(false);

  const [isDeletingFoto, setIsDeletingFoto] = useState(false);

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
  };
};

export default useInfoTab;
