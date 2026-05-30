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
import { Textarea } from "@/components/ui/textarea";

import useTambahReview from "./useTambahReview";

const GENDER_OPTIONS = [
  { label: "Pria", value: "pria" },
  { label: "Wanita", value: "wanita" },
];

interface Props {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export default function TambahReview({ open, onOpenChange }: Props) {
  const { control, handleSubmit, errors, onSubmit, isPendingCreate } =
    useTambahReview({
      onSuccess: () => onOpenChange(false),
    });

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="font-DMSerif text-xl">
            Tambah Review
          </DialogTitle>
          <DialogDescription>Tambahkan review rumah sakit</DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          {/* NAMA */}
          <Field data-invalid={!!errors.nama}>
            <FieldLabel htmlFor="nama">Nama</FieldLabel>

            <Controller
              name="nama"
              control={control}
              render={({ field }) => (
                <Input
                  {...field}
                  id="nama"
                  placeholder="Nama reviewer"
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

          <div className="grid grid-cols-2 gap-4">
            {/* GENDER */}
            <Field data-invalid={!!errors.gender}>
              <FieldLabel>Gender</FieldLabel>

              <Controller
                name="gender"
                control={control}
                render={({ field }) => (
                  <Select
                    value={field.value}
                    onValueChange={field.onChange}
                    disabled={isPendingCreate}
                  >
                    <SelectTrigger aria-invalid={!!errors.gender}>
                      <SelectValue placeholder="Pilih gender" />
                    </SelectTrigger>

                    <SelectContent>
                      {GENDER_OPTIONS.map((gender) => (
                        <SelectItem key={gender.value} value={gender.value}>
                          {gender.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                )}
              />

              {errors.gender && (
                <FieldDescription className="text-destructive text-xs">
                  {errors.gender.message}
                </FieldDescription>
              )}
            </Field>

            {/* RATING */}
            <Field data-invalid={!!errors.rating}>
              <FieldLabel>Rating</FieldLabel>

              <Controller
                name="rating"
                control={control}
                render={({ field }) => (
                  <Select
                    value={field.value?.toString()}
                    onValueChange={(value) => field.onChange(Number(value))}
                    disabled={isPendingCreate}
                  >
                    <SelectTrigger aria-invalid={!!errors.rating}>
                      <SelectValue placeholder="Pilih rating" />
                    </SelectTrigger>

                    <SelectContent>
                      <SelectItem value="1">⭐ 1</SelectItem>
                      <SelectItem value="2">⭐⭐ 2</SelectItem>
                      <SelectItem value="3">⭐⭐⭐ 3</SelectItem>
                      <SelectItem value="4">⭐⭐⭐⭐ 4</SelectItem>
                      <SelectItem value="5">⭐⭐⭐⭐⭐ 5</SelectItem>
                    </SelectContent>
                  </Select>
                )}
              />

              {errors.rating && (
                <FieldDescription className="text-destructive text-xs">
                  {errors.rating.message}
                </FieldDescription>
              )}
            </Field>
          </div>

          {/* REVIEW */}
          <Field data-invalid={!!errors.review}>
            <FieldLabel htmlFor="review">Review</FieldLabel>

            <Controller
              name="review"
              control={control}
              render={({ field }) => (
                <Textarea
                  {...field}
                  id="review"
                  placeholder="Tulis review layanan..."
                  disabled={isPendingCreate}
                  rows={4}
                  aria-invalid={!!errors.review}
                />
              )}
            />

            {errors.review && (
              <FieldDescription className="text-destructive text-xs">
                {errors.review.message}
              </FieldDescription>
            )}
          </Field>

          {/* TANGGAL */}
          <Field data-invalid={!!errors.tanggal}>
            <FieldLabel htmlFor="tanggal">Tanggal</FieldLabel>

            <Controller
              name="tanggal"
              control={control}
              render={({ field }) => (
                <Input
                  {...field}
                  id="tanggal"
                  type="date"
                  disabled={isPendingCreate}
                  aria-invalid={!!errors.tanggal}
                />
              )}
            />

            {errors.tanggal && (
              <FieldDescription className="text-destructive text-xs">
                {errors.tanggal.message}
              </FieldDescription>
            )}
          </Field>

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
              className="bg-apple-500"
            >
              {isPendingCreate ? (
                <>
                  <Loader2 className="mr-2 size-4 animate-spin" />
                  Menyimpan...
                </>
              ) : (
                "Tambah Review"
              )}
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
}
