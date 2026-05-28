"use client";

import { Controller } from "react-hook-form";
import { Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Field, FieldDescription, FieldLabel } from "@/components/ui/field";
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
import { Input } from "@/components/ui/input";
import useTambahJadwal from "./useTambahJadwal";
import { IDokter } from "@/types/dokter";

const HARI_OPTIONS = [
  { label: "Senin", value: "SENIN" },
  { label: "Selasa", value: "SELASA" },
  { label: "Rabu", value: "RABU" },
  { label: "Kamis", value: "KAMIS" },
  { label: "Jumat", value: "JUMAT" },
  { label: "Sabtu", value: "SABTU" },
  { label: "Minggu", value: "MINGGU" },
];

interface Props {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export default function TambahJadwal({ open, onOpenChange }: Props) {
  const {
    control,
    handleSubmit,
    errors,
    onSubmit,
    isPendingCreate,
    dataDokters,
    isLoadingDokters,
  } = useTambahJadwal({
    onSuccess: () => onOpenChange(false),
  });

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="font-DMSerif text-xl">
            Tambah Jadwal
          </DialogTitle>
          <DialogDescription>Tambahkan jadwal praktik dokter</DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
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
                        isLoadingDokters ? "Memuat dokter..." : "Pilih dokter"
                      }
                    />
                  </SelectTrigger>

                  <SelectContent>
                    {dataDokters?.map((dokter: IDokter) => (
                      <SelectItem key={dokter.id} value={dokter.id.toString()}>
                        {dokter.nama}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              )}
            />

            {errors.dokterId && (
              <FieldDescription className="text-destructive text-xs">
                {errors.dokterId.message}
              </FieldDescription>
            )}
          </Field>

          {/* HARI */}
          <Field data-invalid={!!errors.hari}>
            <FieldLabel>Hari</FieldLabel>

            <Controller
              name="hari"
              control={control}
              render={({ field }) => (
                <Select
                  value={field.value}
                  onValueChange={field.onChange}
                  disabled={isPendingCreate}
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
                    disabled={isPendingCreate}
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
                    disabled={isPendingCreate}
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

          {/* ACTION */}
          <div className="flex items-center justify-end gap-3 pt-2">
            <Button
              type="button"
              variant="outline"
              onClick={() => onOpenChange(false)}
              disabled={isPendingCreate}
            >
              Batal
            </Button>

            <Button
              type="submit"
              disabled={isPendingCreate}
              className="bg-apple-500 p-4"
            >
              {isPendingCreate ? (
                <>
                  <Loader2 className="mr-2 size-4 animate-spin" />
                  Menyimpan...
                </>
              ) : (
                "Tambah Jadwal"
              )}
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
}
