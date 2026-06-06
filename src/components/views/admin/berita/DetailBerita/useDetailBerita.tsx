import beritaServices from "@/services/berita.service";
import uploadServices from "@/services/upload.service";
import { IUpdateBerita } from "@/types/berita";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { useParams, useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";

interface ErrorResponse {
  message: string;
}

import { z } from "zod";

// Schema
const updateBeritaSchema = z.object({
  judul: z.string().min(1, "Judul wajib diisi"),

  isi: z.string().min(1, "Isi berita wajib diisi"),

  gambar: z.string().min(1, "gambar wajib diupload"),
});

export type UpdateBeritaValues = z.infer<typeof updateBeritaSchema>;

const useDetailBerita = () => {
  const params = useParams();
  const id = Number(params.id);
  const queryClient = useQueryClient();
  const router = useRouter();

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
  } = useForm<UpdateBeritaValues>({
    resolver: zodResolver(updateBeritaSchema),

    defaultValues: {
      judul: "",
      isi: "",
      gambar: "",
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

      setValue("gambar", url, {
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

      setValue("gambar", "", {
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

  const getBerita = async () => {
    const { data } = await beritaServices.getById(id);
    return data.data;
  };

  const { data: dataBerita, isLoading: isLoadingBerita } = useQuery({
    queryKey: ["berita", id],
    queryFn: getBerita,
    enabled: !!id,
  });

  //   console.log(dataBerita);

  const updateBerita = async (payload: IUpdateBerita) => {
    const { data } = await beritaServices.update(id, payload);
    return data.data;
  };

  const {
    mutate: mutateUpdateBerita,
    isPending: isPendingMutateUpdateBerita,
    isSuccess: isSuccessMutateUpdateBerita,
  } = useMutation({
    mutationFn: (payload: IUpdateBerita) => updateBerita(payload),
    onError: (error: AxiosError<ErrorResponse>) => {
      const message =
        error.response?.data?.message ?? "Gagal mengupdate berita";
      toast.error(message, { position: "top-right" });
    },
    onSuccess: () => {
      // console.log("success PAYLOAD :", payload);
      toast.success("Success Update Berita", { position: "top-right" });
      queryClient.invalidateQueries({ queryKey: ["berita"] });
      queryClient.invalidateQueries({ queryKey: ["dashboard"] });
      router.replace("/admin/berita");
    },
  });

  const handleUpdateBerita = (data: IUpdateBerita) => {
    // console.log("SUBMIT DATA Berita:", data);
    mutateUpdateBerita(data);
  };

  return {
    // data Berita
    dataBerita,
    isLoadingBerita,

    // update
    handleUpdateBerita,
    isPendingMutateUpdateBerita,
    isSuccessMutateUpdateBerita,

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

export default useDetailBerita;
