"use client";

import { useEffect } from "react";
import { Controller } from "react-hook-form";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { IDokter } from "@/types/dokter";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

import { Field, FieldDescription, FieldLabel } from "@/components/ui/field";

import useDetailBerita from "./useDetailBerita";
import InputImage from "@/components/shared/InputImage/InputImage";
import TiptapEditor from "@/components/ui/TiptapEditor";
import Image from "next/image";

const DetailBerita = () => {
  const {
    dataBerita,
    isLoadingBerita,

    control,
    handleSubmit,
    errors,
    reset,
    watch,

    handleUpdateBerita,
    isPendingMutateUpdateBerita,

    fotoUrl,
    isUploadingFoto,
    isDeletingFoto,
    handleUploadFoto,
    handleRemoveFoto,

    dataDokters,
    isLoadingDokters,
  } = useDetailBerita();

  const gambar = watch("gambar");

  useEffect(() => {
    if (dataBerita) {
      reset({
        judul: dataBerita.judul,
        isi: dataBerita.isi,
        gambar: dataBerita.gambar,
        dokterId: dataBerita.dokterId,
      });
    }
  }, [dataBerita, reset]);

  if (isLoadingBerita) {
    return (
      <div className="flex items-center justify-center py-20">
        Memuat data berita...
      </div>
    );
  }

  return (
    <main>
      <div className="mb-5">
        <h2 className="text-2xl font-bold text-slate-800">Detail Berita</h2>

        <p className="mt-1 text-sm text-slate-500">
          Perbarui informasi berita yang telah dipublikasikan.
        </p>
      </div>

      <form onSubmit={handleSubmit(handleUpdateBerita)}>
        <div className="grid gap-5">
          {/* FOTO */}
          <Card>
            <CardHeader>
              <CardTitle>Gambar Berita</CardTitle>

              <CardDescription>
                Upload atau ganti gambar berita.
              </CardDescription>
            </CardHeader>

            <CardContent>
              {gambar && (
                <div className="my-2 w-full">
                  <Image
                    src={gambar}
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
                isInvalid={!!errors.gambar}
                errorMessage={errors.gambar?.message}
                onUpload={handleUploadFoto}
                onDelete={handleRemoveFoto}
              />
            </CardContent>
          </Card>

          {/* INFORMASI */}
          <Card>
            <CardHeader>
              <CardTitle>Informasi Berita</CardTitle>

              <CardDescription>Perbarui informasi berita.</CardDescription>
            </CardHeader>

            <CardContent className="space-y-5">
              {/* JUDUL */}
              <Field data-invalid={!!errors.judul}>
                <FieldLabel>Judul Berita</FieldLabel>

                <Controller
                  name="judul"
                  control={control}
                  render={({ field }) => (
                    <Input
                      {...field}
                      placeholder="Masukkan judul berita"
                      disabled={isPendingMutateUpdateBerita}
                    />
                  )}
                />

                {errors.judul && (
                  <FieldDescription className="text-destructive text-xs">
                    {errors.judul.message}
                  </FieldDescription>
                )}
              </Field>

              {/* Dokter */}
              <Field data-invalid={!!errors.dokterId}>
                <FieldLabel>Dokter</FieldLabel>

                <Controller
                  name="dokterId"
                  control={control}
                  render={({ field }) => (
                    <Select
                      value={
                        field.value
                          ? String(field.value)
                          : String(dataBerita.dokterId)
                      }
                      onValueChange={(value) => field.onChange(Number(value))}
                      disabled={isPendingMutateUpdateBerita}
                    >
                      <SelectTrigger aria-invalid={!!errors.dokterId}>
                        <SelectValue
                          placeholder={
                            isLoadingDokters
                              ? "Memuat dokter..."
                              : "Pilih dokter"
                          }
                        />
                      </SelectTrigger>

                      <SelectContent>
                        {dataDokters?.map((dokter: IDokter) => (
                          <SelectItem
                            key={dokter.id}
                            value={dokter.id.toString()}
                          >
                            {dokter.nama}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  )}
                />

                <FieldDescription className="mt-1 w-full text-sm text-gray-500 italic">
                  Sematkan nama dokter jika artikel/berita tersebut ditulis oleh
                  atau bersumber dari dokter yang bersangkutan.
                </FieldDescription>
              </Field>

              {/* ISI */}
              <Field data-invalid={!!errors.isi}>
                <FieldLabel>Isi Berita</FieldLabel>

                <Controller
                  name="isi"
                  control={control}
                  render={({ field }) => (
                    <TiptapEditor
                      key={dataBerita?.id}
                      value={field.value}
                      onChange={field.onChange}
                    />
                  )}
                />

                {errors.isi && (
                  <FieldDescription className="text-destructive text-xs">
                    {errors.isi.message}
                  </FieldDescription>
                )}
              </Field>

              {/* BUTTON */}
              <Button
                type="submit"
                className="bg-apple-500 w-full"
                disabled={isPendingMutateUpdateBerita}
              >
                {isPendingMutateUpdateBerita
                  ? "Menyimpan..."
                  : "Simpan Perubahan"}
              </Button>
            </CardContent>
          </Card>
        </div>
      </form>
    </main>
  );
};

export default DetailBerita;
