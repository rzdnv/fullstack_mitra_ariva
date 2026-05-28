"use client";

import { Controller } from "react-hook-form";
import { Loader2 } from "lucide-react";

import useTambahDokter from "./useTambahDokter";

import { IPoli } from "@/types/poli";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import InputImage from "@/components/shared/InputImage/InputImage";
import { Field, FieldDescription, FieldLabel } from "@/components/ui/field";

interface Props {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export default function TambahDokter({ open, onOpenChange }: Props) {
  const {
    control,
    handleSubmit,
    errors,
    onSubmit,

    // mutation
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
    handleResetForm,
  } = useTambahDokter({
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
            Tambah Dokter
          </DialogTitle>

          <DialogDescription>Tambahkan data dokter baru</DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
            {/* FOTO */}
            <div className="rounded-xl border bg-white p-6">
              <h3 className="mb-4 font-semibold text-slate-800">Foto Dokter</h3>

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
                Informasi Dokter
              </h3>

              {/* NAMA */}
              <Field data-invalid={!!errors.nama}>
                <FieldLabel htmlFor="nama">Nama Dokter</FieldLabel>

                <Controller
                  name="nama"
                  control={control}
                  render={({ field }) => (
                    <Input
                      {...field}
                      id="nama"
                      placeholder="nama"
                      disabled={isPendingCreate}
                      aria-invalid={!!errors.nama}
                    />
                  )}
                />

                {errors.nama && (
                  <FieldDescription className="text-destructive text-xs">
                    {errors.nama.message}
                  </FieldDescription>
                )}
              </Field>

              {/* SPESIALIS */}
              <Field data-invalid={!!errors.spesialis}>
                <FieldLabel htmlFor="spesialis">Spesialis</FieldLabel>

                <Controller
                  name="spesialis"
                  control={control}
                  render={({ field }) => (
                    <Input
                      {...field}
                      id="spesialis"
                      placeholder="Dokter Spesialis Bedah"
                      disabled={isPendingCreate}
                      aria-invalid={!!errors.spesialis}
                    />
                  )}
                />

                {errors.spesialis && (
                  <FieldDescription className="text-destructive text-xs">
                    {errors.spesialis.message}
                  </FieldDescription>
                )}
              </Field>

              {/* POLI */}
              <Field data-invalid={!!errors.poliId}>
                <FieldLabel>Poli</FieldLabel>

                <Controller
                  name="poliId"
                  control={control}
                  render={({ field }) => (
                    <Select
                      value={field.value ? String(field.value) : undefined}
                      onValueChange={(value) => field.onChange(Number(value))}
                      disabled={isLoadingPoli || isPendingCreate}
                    >
                      <SelectTrigger aria-invalid={!!errors.poliId}>
                        <SelectValue
                          placeholder={
                            isLoadingPoli ? "Memuat poli..." : "Pilih poli"
                          }
                        />
                      </SelectTrigger>

                      <SelectContent>
                        {dataPoli?.map((poli: IPoli) => (
                          <SelectItem key={poli.id} value={String(poli.id)}>
                            {poli.namaPoli}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  )}
                />

                {errors.poliId && (
                  <FieldDescription className="text-destructive text-xs">
                    {errors.poliId.message}
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
                "Tambah Dokter"
              )}
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
}
