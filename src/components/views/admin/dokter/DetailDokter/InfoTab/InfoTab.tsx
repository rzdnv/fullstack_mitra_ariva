"use client";

import { useEffect } from "react";
import { Controller } from "react-hook-form";
import Image from "next/image";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import InputImage from "@/components/shared/InputImage/InputImage";

import { IDokter, IUpdateDokter } from "@/types/dokter";
import { IPoli } from "@/types/poli";

import useInfoTab from "./useInfoTab";
import { Field, FieldDescription, FieldLabel } from "@/components/ui/field";
import { Textarea } from "@/components/ui/textarea";

interface PropTypes {
  dataDokter: IDokter;
  isLoadingDokter: boolean;
  handleUpdateDokter: (data: IUpdateDokter) => void;
  isPendingMutateUpdateDokter: boolean;
  isSuccessMutateUpdateDokter: boolean;
}

const InfoTab = ({
  dataDokter,
  isLoadingDokter,
  handleUpdateDokter,
  isPendingMutateUpdateDokter,
}: PropTypes) => {
  const {
    dataPoli,
    isLoadingPoli,

    control,
    handleSubmit,
    errors,
    reset,
    watch,

    fotoUrl,
    isUploadingFoto,
    isDeletingFoto,
    handleUploadFoto,
    handleRemoveFoto,
  } = useInfoTab();

  useEffect(() => {
    if (dataDokter && dataPoli) {
      reset({
        nama: dataDokter.nama,
        spesialis: dataDokter.spesialis,
        deskripsi: dataDokter.deskripsi,
        poliId: dataDokter.poliId,
        foto: dataDokter.foto,
      });
    }
  }, [dataDokter, dataPoli, reset]);

  const foto = watch("foto");

  if (isLoadingDokter) {
    return (
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle className="font-DMSerif text-2xl">Foto Dokter</CardTitle>
            <CardDescription>Memuat data dokter...</CardDescription>
          </CardHeader>

          <CardContent>
            <div className="bg-muted h-64 w-full animate-pulse rounded-lg" />
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="font-DMSerif text-2xl">
              Informasi Dokter
            </CardTitle>
            <CardDescription>Memuat data dokter...</CardDescription>
          </CardHeader>

          <CardContent className="space-y-4">
            <div className="bg-muted h-10 animate-pulse rounded-md" />
            <div className="bg-muted h-10 animate-pulse rounded-md" />
            <div className="bg-muted h-10 animate-pulse rounded-md" />
            <div className="bg-muted h-10 animate-pulse rounded-md" />
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit(handleUpdateDokter)}
      className="grid grid-cols-1 gap-4 lg:grid-cols-2"
    >
      {/* FOTO */}
      <Card>
        <CardHeader>
          <CardTitle className="font-DMSerif text-2xl">Foto Dokter</CardTitle>

          <CardDescription>Perbarui foto profil dokter</CardDescription>
        </CardHeader>

        <CardContent>
          {foto && (
            <div className="my-2 w-full">
              <Image
                src={foto}
                alt="Foto dokter"
                width={400}
                height={400}
                className="m-auto h-auto w-1/2 rounded-lg object-cover"
              />
            </div>
          )}

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
        </CardContent>
      </Card>

      {/* INFORMASI */}
      <Card>
        <CardHeader>
          <CardTitle className="font-DMSerif text-2xl">
            Informasi Dokter
          </CardTitle>

          <CardDescription>Perbarui informasi dokter</CardDescription>
        </CardHeader>

        <CardContent className="space-y-4">
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
                  disabled={isPendingMutateUpdateDokter}
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
                  disabled={isPendingMutateUpdateDokter}
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
                  disabled={isLoadingPoli || isPendingMutateUpdateDokter}
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
                <Textarea
                  {...field}
                  value={field.value ?? ""}
                  id="deskripsi"
                  placeholder="Deskripsi singkat dokter..."
                  disabled={isPendingMutateUpdateDokter}
                  rows={3}
                />
              )}
            />

            {errors.deskripsi && (
              <FieldDescription className="text-destructive text-xs">
                {errors.deskripsi.message}
              </FieldDescription>
            )}
          </Field>

          {/* BUTTON */}
          <Button
            type="submit"
            disabled={isPendingMutateUpdateDokter}
            className="bg-apple-500 w-full p-4"
          >
            {isPendingMutateUpdateDokter ? "Menyimpan..." : "Simpan Perubahan"}
          </Button>
        </CardContent>
      </Card>
    </form>
  );
};

export default InfoTab;
