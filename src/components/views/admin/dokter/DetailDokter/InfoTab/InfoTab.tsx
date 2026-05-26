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

  // isi form dari data dokter
  useEffect(() => {
    if (dataDokter) {
      reset({
        nama: dataDokter.nama,
        spesialis: dataDokter.spesialis,
        poliId: dataDokter.poliId,
        foto: dataDokter.foto || "",
      });
    }
  }, [dataDokter, reset]);

  const foto = watch("foto");

  if (isLoadingDokter) {
    return (
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Foto Dokter</CardTitle>
            <CardDescription>Memuat data dokter...</CardDescription>
          </CardHeader>

          <CardContent>
            <div className="bg-muted h-64 w-full animate-pulse rounded-lg" />
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Informasi Dokter</CardTitle>
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
          <CardTitle>Foto Dokter</CardTitle>

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
          <CardTitle>Informasi Dokter</CardTitle>

          <CardDescription>Perbarui informasi dokter</CardDescription>
        </CardHeader>

        <CardContent className="space-y-4">
          {/* NAMA */}
          <Controller
            name="nama"
            control={control}
            render={({ field }) => (
              <Input {...field} placeholder="Nama dokter" />
            )}
          />

          {/* SPESIALIS */}
          <Controller
            name="spesialis"
            control={control}
            render={({ field }) => <Input {...field} placeholder="Spesialis" />}
          />

          {/* POLI */}
          <Controller
            name="poliId"
            control={control}
            render={({ field }) => (
              <Select
                value={String(field.value)}
                onValueChange={(value) => field.onChange(Number(value))}
                disabled={isLoadingPoli}
              >
                <SelectTrigger className="w-full">
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

          {/* BUTTON */}
          <Button
            type="submit"
            disabled={isPendingMutateUpdateDokter}
            className="w-full"
          >
            {isPendingMutateUpdateDokter ? "Menyimpan..." : "Simpan Perubahan"}
          </Button>
        </CardContent>
      </Card>
    </form>
  );
};

export default InfoTab;
