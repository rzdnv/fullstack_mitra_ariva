"use client";

import { Controller } from "react-hook-form";
import { Loader2 } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

import InputImage from "@/components/shared/InputImage/InputImage";
import { Field, FieldDescription, FieldLabel } from "@/components/ui/field";
import useTambahLayanan from "./useTambahLayanan";
import { Textarea } from "@/components/ui/textarea";

interface Props {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export default function TambahLayanan({ open, onOpenChange }: Props) {
  const {
    control,
    handleSubmit,
    errors,
    onSubmit,

    // mutation
    isPendingCreate,

    // foto
    fotoUrl,
    isUploadingFoto,
    isDeletingFoto,
    handleUploadFoto,
    handleRemoveFoto,
    handleResetForm,
  } = useTambahLayanan({
    onSuccess: () => {
      onOpenChange(false);
    },
  });

  // HANDLE CLOSE DIALOG
  const handleDialogChange = async (value: boolean) => {
    if (!value) {
      await handleResetForm();
    }

    onOpenChange(value);
  };

  return (
    <Dialog open={open} onOpenChange={handleDialogChange}>
      <DialogContent className="max-h-[90vh] overflow-y-auto sm:max-w-3xl">
        <DialogHeader>
          <DialogTitle className="font-DMSerif text-2xl">
            Tambah Layanan
          </DialogTitle>

          <DialogDescription>Tambahkan data layanan baru</DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
            {/* FOTO */}
            <div className="rounded-xl border bg-white p-6">
              <h3 className="mb-4 font-semibold text-slate-800">
                Foto Layanan
              </h3>

              <InputImage
                name="foto"
                preview={fotoUrl ?? ""}
                isUploading={isUploadingFoto}
                isDeleting={isDeletingFoto}
                isInvalid={!!errors.foto}
                errorMessage={errors.foto?.message}
                onUpload={handleUploadFoto}
                onDelete={handleRemoveFoto}
              />
            </div>

            {/* FORM */}
            <div className="space-y-4 rounded-xl border bg-white p-6">
              <h3 className="mb-4 font-semibold text-slate-800">
                Informasi Layanan
              </h3>

              {/* NAMA */}
              <Field data-invalid={!!errors.namaLayanan}>
                <FieldLabel htmlFor="namaLayanan">Nama Layanan</FieldLabel>

                <Controller
                  name="namaLayanan"
                  control={control}
                  render={({ field }) => (
                    <Input
                      {...field}
                      id="namaLayanan"
                      placeholder="namaLayanan"
                      disabled={isPendingCreate}
                      aria-invalid={!!errors.namaLayanan}
                    />
                  )}
                />

                {errors.namaLayanan && (
                  <FieldDescription className="text-destructive text-xs">
                    {errors.namaLayanan.message}
                  </FieldDescription>
                )}
              </Field>

              {/* DESKRIPSI */}
              <Field data-invalid={!!errors.deskripsi}>
                <FieldLabel htmlFor="deskripsi">Deskripsi</FieldLabel>

                <Controller
                  name="deskripsi"
                  control={control}
                  render={({ field }) => (
                    <Textarea
                      {...field}
                      id="deskripsi"
                      placeholder="Deskripsi Layanan"
                      disabled={isPendingCreate}
                      aria-invalid={!!errors.deskripsi}
                    />
                  )}
                />

                {errors.deskripsi && (
                  <FieldDescription className="text-destructive text-xs">
                    {errors.deskripsi.message}
                  </FieldDescription>
                )}
              </Field>
            </div>
          </div>

          {/* ACTION */}
          <div className="flex items-center justify-end gap-3">
            <Button
              type="submit"
              disabled={isPendingCreate || isUploadingFoto}
              className="bg-apple-500 p-4"
            >
              {isPendingCreate ? (
                <>
                  <Loader2 className="mr-2 size-4 animate-spin" />
                  Menyimpan...
                </>
              ) : (
                "Tambah Layanan"
              )}
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
}
