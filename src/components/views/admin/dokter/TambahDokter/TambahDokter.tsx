"use client";

import { Controller } from "react-hook-form";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

import { Field, FieldDescription, FieldLabel } from "@/components/ui/field";

import InputImage from "@/components/shared/InputImage/InputImage";
import TiptapEditor from "@/components/ui/TiptapEditor";
import { Loader2 } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { IPoli } from "@/types/poli";
import useTambahDokter from "./useTambahDokter";

const TambahDokter = () => {
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
    // handleResetForm,
  } = useTambahDokter();

  return (
    <main>
      <div className="mb-5">
        <h2 className="text-2xl font-bold text-slate-800">Tambah Dokter</h2>

        <p className="mt-1 max-w-lg text-sm text-slate-500">
          Halaman untuk menambahkan Dokter yang akan ditampilkan pada website.
        </p>
      </div>

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

            {/* DESKRIPSI */}
            <Field data-invalid={!!errors.deskripsi}>
              <FieldLabel>Deskripsi</FieldLabel>

              <Controller
                name="deskripsi"
                control={control}
                render={({ field }) => (
                  <TiptapEditor value={field.value} onChange={field.onChange} />
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
              "Tambah Dokter"
            )}
          </Button>
        </div>
      </form>
    </main>
  );
};

export default TambahDokter;
