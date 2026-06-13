import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useState, useEffect, useRef } from "react"; // ← tambahkan useEffect, useRef
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { toast } from "sonner";
import dokterServices from "@/services/dokter.service";
import poliServices from "@/services/poli.service";
import uploadServices from "@/services/upload.service";
import { useRouter } from "next/navigation";
import { FILE_SIZE, validateFile } from "@/lib/validate-file";

const tambahDokterSchema = z.object({
  nama: z.string().min(1, "Nama dokter wajib diisi"),
  spesialis: z.string().min(1, "Spesialis wajib diisi"),
  deskripsi: z.string().min(1, "Deskripsi wajib diisi"),
  poliId: z.number().int().positive("Poli wajib dipilih"),
  foto: z.string().min(1, "Foto wajib diupload"),
});

export type TambahDokterValues = z.infer<typeof tambahDokterSchema>;

interface ErrorResponse {
  message: string;
}

const useTambahDokter = () => {
  const queryClient = useQueryClient();
  const router = useRouter();

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
      deskripsi: "",
      poliId: 0,
      foto: "",
    },
  });

  const { data: dataPoli, isLoading: isLoadingPoli } = useQuery({
    queryKey: ["poli"],
    queryFn: async () => {
      const { data } = await poliServices.getAll();
      return data.data;
    },
  });

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
      const url = data.data.secure_url;
      setFotoUrl(url);
      setValue("foto", url, { shouldValidate: true });
      toast.success("Foto berhasil diupload", { position: "top-right" });
    } catch {
      toast.error("Gagal upload foto", { position: "top-right" });
    } finally {
      setIsUploadingFoto(false);
    }
  };

  const handleRemoveFoto = async () => {
    if (!fotoUrl) return;
    setIsDeletingFoto(true);
    try {
      await uploadServices.removeFile({ fileUrl: fotoUrl });
      setFotoUrl(null);
      setValue("foto", "", { shouldValidate: true });
      toast.success("Foto berhasil dihapus", { position: "top-right" });
    } catch {
      toast.error("Gagal menghapus foto", { position: "top-right" });
    } finally {
      setIsDeletingFoto(false);
    }
  };

  const handleResetForm = async () => {
    if (fotoUrl) {
      try {
        await uploadServices.removeFile({ fileUrl: fotoUrl });
      } catch {}
    }
    reset();
    setFotoUrl(null);
  };

  const { mutate: mutateCreateDokter, isPending: isPendingCreate } =
    useMutation({
      mutationFn: dokterServices.create,
      onSuccess: () => {
        toast.success("Dokter berhasil ditambahkan", { position: "top-right" });
        queryClient.invalidateQueries({ queryKey: ["dokter"] });
        queryClient.invalidateQueries({ queryKey: ["dashboard"] });

        // ← Tandai sudah submit berhasil agar cleanup tidak hapus foto
        isSubmittedRef.current = true;

        reset();
        setFotoUrl(null);
        router.replace("/admin/dokter");
      },
      onError: (error: AxiosError<ErrorResponse>) => {
        const message =
          error.response?.data?.message ?? "Gagal menambahkan dokter";
        toast.error(message, { position: "top-right" });
      },
    });

  const onSubmit = (values: TambahDokterValues) => mutateCreateDokter(values);

  return {
    control,
    handleSubmit,
    errors,
    onSubmit,
    isPendingCreate,
    dataPoli,
    isLoadingPoli,
    fotoUrl,
    isUploadingFoto,
    isDeletingFoto,
    handleUploadFoto,
    handleRemoveFoto,
    handleResetForm,
  };
};

export default useTambahDokter;
