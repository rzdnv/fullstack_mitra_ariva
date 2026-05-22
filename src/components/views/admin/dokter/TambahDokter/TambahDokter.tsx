"use client";

import { Controller } from "react-hook-form";
import { Loader2, Plus } from "lucide-react";

import useTambahDokter from "./useTambahDokter";

import { IPoli } from "@/types/poli";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import InputImage from "@/components/shared/InputImage/InputImage";

export default function TambahDokter() {
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
  } = useTambahDokter();

  return (
    <Dialog>
      {/* TRIGGER */}
      <DialogTrigger asChild>
        <Button>
          <Plus className="mr-2 size-4" />
          Tambah Dokter
        </Button>
      </DialogTrigger>

      {/* CONTENT */}
      <DialogContent className="max-h-[90vh] overflow-y-auto sm:max-w-3xl">
        <DialogHeader>
          <DialogTitle>Tambah Dokter</DialogTitle>

          <DialogDescription>Tambahkan data dokter baru</DialogDescription>
        </DialogHeader>

        {/* FORM */}
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

            {/* FORM INPUT */}
            <div className="space-y-4 rounded-xl border bg-white p-6">
              <h3 className="mb-4 font-semibold text-slate-800">
                Informasi Dokter
              </h3>

              {/* NAMA */}
              <div className="space-y-1.5">
                <Label htmlFor="nama">Nama Dokter</Label>

                <Controller
                  name="nama"
                  control={control}
                  render={({ field }) => (
                    <Input
                      {...field}
                      id="nama"
                      placeholder="dr. Nama Lengkap, Sp.X"
                      disabled={isPendingCreate}
                    />
                  )}
                />

                {errors.nama && (
                  <p className="text-destructive text-xs">
                    {errors.nama.message}
                  </p>
                )}
              </div>

              {/* SPESIALIS */}
              <div className="space-y-1.5">
                <Label htmlFor="spesialis">Spesialis</Label>

                <Controller
                  name="spesialis"
                  control={control}
                  render={({ field }) => (
                    <Input
                      {...field}
                      id="spesialis"
                      placeholder="Dokter Spesialis Bedah"
                      disabled={isPendingCreate}
                    />
                  )}
                />

                {errors.spesialis && (
                  <p className="text-destructive text-xs">
                    {errors.spesialis.message}
                  </p>
                )}
              </div>

              {/* POLI */}
              <div className="space-y-1.5">
                <Label>Poli</Label>

                <Controller
                  name="poliId"
                  control={control}
                  render={({ field }) => (
                    <Select
                      value={field.value ? String(field.value) : undefined}
                      onValueChange={(value) => field.onChange(Number(value))}
                      disabled={isLoadingPoli || isPendingCreate}
                    >
                      <SelectTrigger>
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
                  <p className="text-destructive text-xs">
                    {errors.poliId.message}
                  </p>
                )}
              </div>
            </div>
          </div>

          {/* ACTION */}
          <div className="flex items-center justify-end gap-3">
            <Button type="submit" disabled={isPendingCreate || isUploadingFoto}>
              {isPendingCreate ? (
                <>
                  <Loader2 className="mr-2 size-4 animate-spin" />
                  Menyimpan...
                </>
              ) : (
                "Simpan Dokter"
              )}
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
}
