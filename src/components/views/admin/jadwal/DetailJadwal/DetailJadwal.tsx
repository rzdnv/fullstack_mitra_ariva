"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import useDetailJadwal from "./useDetailJadwal";
import { Controller } from "react-hook-form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import {
  Field,
  FieldDescription,
  FieldLabel,
  FieldTitle,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { useEffect } from "react";

const HARI_OPTIONS = [
  { label: "Senin", value: "SENIN" },
  { label: "Selasa", value: "SELASA" },
  { label: "Rabu", value: "RABU" },
  { label: "Kamis", value: "KAMIS" },
  { label: "Jumat", value: "JUMAT" },
  { label: "Sabtu", value: "SABTU" },
  { label: "Minggu", value: "MINGGU" },
];

const DetailJadwal = () => {
  const {
    control,
    handleSubmit,
    errors,
    reset,
    dataJadwal,
    isLoadingJadwal,
    handleUpdateJadwal,
    isPendingMutateUpdateJadwal,
  } = useDetailJadwal();

  useEffect(() => {
    if (dataJadwal) {
      reset({
        hari: dataJadwal.hari,
        jamMulai: dataJadwal.jamMulai,
        jamSelesai: dataJadwal.jamSelesai,
      });
    }
  }, [dataJadwal, reset]);

  return (
    <main>
      <div className="mb-5">
        <h2 className="text-2xl font-bold text-slate-800">
          Detail Jadwal Dokter
        </h2>
        <p className="mt-1 max-w-lg text-sm text-slate-500">
          Halaman untuk melihat detail informasi serta memperbarui data Jadwal
          dokter.
        </p>
      </div>

      {isLoadingJadwal ? (
        <div className="w-full md:w-1/2">
          <Card>
            <CardHeader>
              <CardTitle className="font-DMSerif text-2xl">
                Informasi Jadwal Dokter
              </CardTitle>

              <CardDescription>Perbarui informasi dokter</CardDescription>
            </CardHeader>

            <CardContent className="space-y-4">
              {/* Dokter */}
              <div className="space-y-2">
                <div className="bg-muted h-4 w-24 animate-pulse rounded" />
                <div className="bg-muted h-10 w-full animate-pulse rounded-md" />
              </div>

              {/* Hari */}
              <div className="space-y-2">
                <div className="bg-muted h-4 w-16 animate-pulse rounded" />
                <div className="bg-muted h-10 w-full animate-pulse rounded-md" />
              </div>

              {/* Jam */}
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <div className="bg-muted h-4 w-20 animate-pulse rounded" />
                  <div className="bg-muted h-10 w-full animate-pulse rounded-md" />
                </div>

                <div className="space-y-2">
                  <div className="bg-muted h-4 w-20 animate-pulse rounded" />
                  <div className="bg-muted h-10 w-full animate-pulse rounded-md" />
                </div>
              </div>

              {/* Button */}
              <div className="bg-muted h-10 w-full animate-pulse rounded-md" />
            </CardContent>
          </Card>
        </div>
      ) : (
        <form onSubmit={handleSubmit(handleUpdateJadwal)}>
          {/* INFORMASI */}
          <Card className="w-1/2">
            <CardHeader>
              <CardTitle className="font-DMSerif text-2xl">
                Informasi Jadwal Dokter
              </CardTitle>

              <CardDescription>Perbarui informasi dokter</CardDescription>
            </CardHeader>

            <CardContent className="space-y-4">
              <Field>
                <FieldLabel>Dokter</FieldLabel>
                <FieldTitle>{dataJadwal?.dokter?.nama}</FieldTitle>
              </Field>

              {/* HARI */}
              <Field data-invalid={!!errors.hari}>
                <FieldLabel>Hari</FieldLabel>

                <Controller
                  name="hari"
                  control={control}
                  render={({ field }) => (
                    <Select
                      value={field.value || dataJadwal.hari}
                      onValueChange={field.onChange}
                      disabled={isPendingMutateUpdateJadwal}
                    >
                      <SelectTrigger aria-invalid={!!errors.hari}>
                        <SelectValue placeholder="Pilih hari" />
                      </SelectTrigger>

                      <SelectContent>
                        {HARI_OPTIONS.map((hari) => (
                          <SelectItem key={hari.value} value={hari.value}>
                            {hari.label}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  )}
                />

                {errors.hari && (
                  <FieldDescription className="text-destructive text-xs">
                    {errors.hari.message}
                  </FieldDescription>
                )}
              </Field>

              {/* JAM MULAI & JAM SELESAI */}
              <div className="grid grid-cols-2 gap-4">
                <Field data-invalid={!!errors.jamMulai}>
                  <FieldLabel htmlFor="jamMulai">Jam Mulai</FieldLabel>

                  <Controller
                    name="jamMulai"
                    control={control}
                    render={({ field }) => (
                      <Input
                        {...field}
                        id="jamMulai"
                        type="time"
                        disabled={isPendingMutateUpdateJadwal}
                        aria-invalid={!!errors.jamMulai}
                      />
                    )}
                  />

                  {errors.jamMulai && (
                    <FieldDescription className="text-destructive text-xs">
                      {errors.jamMulai.message}
                    </FieldDescription>
                  )}
                </Field>

                <Field data-invalid={!!errors.jamSelesai}>
                  <FieldLabel htmlFor="jamSelesai">Jam Selesai</FieldLabel>

                  <Controller
                    name="jamSelesai"
                    control={control}
                    render={({ field }) => (
                      <Input
                        {...field}
                        id="jamSelesai"
                        type="time"
                        disabled={isPendingMutateUpdateJadwal}
                        aria-invalid={!!errors.jamSelesai}
                      />
                    )}
                  />

                  {errors.jamSelesai && (
                    <FieldDescription className="text-destructive text-xs">
                      {errors.jamSelesai.message}
                    </FieldDescription>
                  )}
                </Field>
              </div>

              {/* BUTTON */}
              <Button
                type="submit"
                disabled={isPendingMutateUpdateJadwal}
                className="bg-apple-500 w-full p-4"
              >
                {isPendingMutateUpdateJadwal
                  ? "Menyimpan..."
                  : "Simpan Perubahan"}
              </Button>
            </CardContent>
          </Card>
        </form>
      )}
    </main>
  );
};

export default DetailJadwal;
