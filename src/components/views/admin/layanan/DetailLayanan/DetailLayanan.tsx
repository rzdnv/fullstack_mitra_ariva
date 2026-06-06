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

import InputImage from "@/components/shared/InputImage/InputImage";
import useDetailLayanan from "./useDetailLayanan";
import { Field, FieldDescription, FieldLabel } from "@/components/ui/field";
import TiptapEditor from "@/components/ui/TiptapEditor";

const DetailLayanan = () => {
  const {
    // data Layanan
    dataLayanan,
    isLoadingLayanan,

    // update
    handleUpdateLayanan,
    isPendingMutateUpdateLayanan,

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
  } = useDetailLayanan();

  useEffect(() => {
    if (dataLayanan) {
      reset({
        namaLayanan: dataLayanan.namaLayanan,
        deskripsi: dataLayanan.deskripsi,
        foto: dataLayanan.foto,
      });
    }
  }, [dataLayanan, reset]);

  const foto = watch("foto");

  if (isLoadingLayanan) {
    return (
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle className="font-DMSerif text-2xl">
              Foto Layanan
            </CardTitle>
            <CardDescription>Memuat data layanan...</CardDescription>
          </CardHeader>

          <CardContent>
            <div className="bg-muted h-64 w-full animate-pulse rounded-lg" />
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="font-DMSerif text-2xl">
              Informasi Layanan
            </CardTitle>
            <CardDescription>Memuat data layanan...</CardDescription>
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
      onSubmit={handleSubmit(handleUpdateLayanan)}
      className="grid grid-cols-1 gap-4 lg:grid-cols-2"
    >
      {/* FOTO */}
      <Card>
        <CardHeader>
          <CardTitle className="font-DMSerif text-2xl">Foto Layanan</CardTitle>

          <CardDescription>Perbarui foto Layanan</CardDescription>
        </CardHeader>

        <CardContent>
          {foto && (
            <div className="my-2 w-full">
              <Image
                src={foto}
                alt="Foto Layanan"
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
            Informasi Layanan
          </CardTitle>

          <CardDescription>Perbarui informasi layanan</CardDescription>
        </CardHeader>

        <CardContent className="space-y-4">
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
                  disabled={isPendingMutateUpdateLayanan}
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
                <TiptapEditor
                  {...field}
                  value={field.value}
                  onChange={field.onChange}
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
            disabled={isPendingMutateUpdateLayanan}
            className="bg-apple-500 w-full p-4"
          >
            {isPendingMutateUpdateLayanan ? "Menyimpan..." : "Simpan Perubahan"}
          </Button>
        </CardContent>
      </Card>
    </form>
  );
};

export default DetailLayanan;
