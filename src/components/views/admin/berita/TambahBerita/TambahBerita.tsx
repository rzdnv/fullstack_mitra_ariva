"use client";

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

import useTambahBerita from "./useTambahBerita";
import InputImage from "@/components/shared/InputImage/InputImage";
import TiptapEditor from "@/components/ui/TiptapEditor";

const TambahBerita = () => {
  const {
    control,
    handleSubmit,
    errors,

    onSubmit,
    isPendingCreate,

    fotoUrl,
    isUploadingFoto,
    isDeletingFoto,
    handleUploadFoto,
    handleRemoveFoto,
    handleResetForm,

    dataDokters,
    isLoadingDokters,
  } = useTambahBerita();

  return (
    <main>
      <div className="mb-5">
        <h2 className="text-2xl font-bold text-slate-800">Tambah Berita</h2>

        <p className="mt-1 max-w-lg text-sm text-slate-500">
          Halaman untuk menambahkan berita terbaru yang akan ditampilkan pada
          website.
        </p>
      </div>

      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="grid gap-5">
          {/* FOTO */}
          <Card>
            <CardHeader>
              <CardTitle>Gambar Berita</CardTitle>

              <CardDescription>
                Upload gambar utama untuk berita.
              </CardDescription>
            </CardHeader>

            <CardContent>
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

              <CardDescription>
                Lengkapi informasi berita yang akan dipublikasikan.
              </CardDescription>
            </CardHeader>

            <CardContent className="space-y-4">
              {/* JUDUL */}
              <Field data-invalid={!!errors.judul}>
                <FieldLabel htmlFor="judul">Judul Berita</FieldLabel>

                <Controller
                  name="judul"
                  control={control}
                  render={({ field }) => (
                    <Input
                      {...field}
                      id="judul"
                      placeholder="Masukkan judul berita"
                      disabled={isPendingCreate}
                      aria-invalid={!!errors.judul}
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
                      value={field.value ? String(field.value) : undefined}
                      onValueChange={(value) => field.onChange(Number(value))}
                      disabled={isPendingCreate}
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

              {/* ISI BERITA */}
              <Field data-invalid={!!errors.isi}>
                <FieldLabel htmlFor="isi">Isi Berita</FieldLabel>

                <Controller
                  name="isi"
                  control={control}
                  render={({ field }) => (
                    <TiptapEditor
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
              <div className="flex gap-3">
                <Button
                  type="submit"
                  disabled={isPendingCreate}
                  className="bg-apple-500 flex-1"
                >
                  {isPendingCreate ? "Menyimpan..." : "Tambah Berita"}
                </Button>

                <Button
                  type="button"
                  variant="outline"
                  disabled={isPendingCreate}
                  onClick={handleResetForm}
                >
                  Reset
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </form>
    </main>
  );
};

export default TambahBerita;
