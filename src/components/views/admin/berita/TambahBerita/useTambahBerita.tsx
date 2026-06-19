import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useEffect, useRef, useState } from "react";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { toast } from "sonner";

import uploadServices from "@/services/upload.service";
import beritaServices from "@/services/berita.service";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";
import { FILE_SIZE, validateFile } from "@/lib/validate-file";
import dokterServices from "@/services/dokter.service";

// Schema
const tambahBeritaSchema = z.object({
  judul: z.string().min(1, "Judul wajib diisi"),

  isi: z.string().min(1, "Isi berita wajib diisi"),

  gambar: z.string().min(1, "gambar wajib diupload"),

  dokterId: z.number().int().positive().optional(),
});

export type TambahBeritaValues = z.infer<typeof tambahBeritaSchema>;

interface ErrorResponse {
  message: string;
}

const useTambahBerita = () => {
  const queryClient = useQueryClient();
  const router = useRouter();
  const { data: session } = useSession();

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
  } = useForm<TambahBeritaValues>({
    resolver: zodResolver(tambahBeritaSchema),

    defaultValues: {
      judul: "",
      isi: "",
      gambar: "",
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

      const { data } = await uploadServices.uploadSingle(formData, "berita");

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

  // CREATE BERITA
  const { mutate: mutateCreateBerita, isPending: isPendingCreate } =
    useMutation({
      mutationFn: beritaServices.create,

      onSuccess: () => {
        toast.success("Berita berhasil ditambahkan", {
          position: "top-right",
        });

        queryClient.invalidateQueries({
          queryKey: ["berita"],
        });

        queryClient.invalidateQueries({
          queryKey: ["dashboard"],
        });

        // ← Tandai sudah submit berhasil agar cleanup tidak hapus foto
        isSubmittedRef.current = true;

        reset();
        setFotoUrl(null);
        router.replace("/admin/berita");
      },

      onError: (error: AxiosError<ErrorResponse>) => {
        const message =
          error.response?.data?.message ?? "Gagal menambahkan berita";

        toast.error(message, {
          position: "top-right",
        });
      },
    });

  const userId = Number(session?.user?.id);

  // SUBMIT
  const onSubmit = (values: TambahBeritaValues) => {
    mutateCreateBerita({
      ...values,
      userId,
    });
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

    // dokter
    dataDokters,
    isLoadingDokters,
  };
};

export default useTambahBerita;
