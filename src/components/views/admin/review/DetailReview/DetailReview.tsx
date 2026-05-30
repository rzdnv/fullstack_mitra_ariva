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

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { Field, FieldDescription, FieldLabel } from "@/components/ui/field";

import useDetailReview from "./useDetailReview";
import { Textarea } from "@/components/ui/textarea";

const GENDER_OPTIONS = [
  { label: "Pria", value: "pria" },
  { label: "Wanita", value: "wanita" },
];

const DetailReview = () => {
  const {
    control,
    handleSubmit,
    errors,
    reset,

    dataReview,
    isLoadingReview,

    handleUpdateReview,
    isPendingMutateUpdateReview,
  } = useDetailReview();

  useEffect(() => {
    if (dataReview) {
      reset({
        nama: dataReview.nama,
        review: dataReview.review,
        rating: dataReview.rating,
        tanggal: dataReview.tanggal?.split("T")[0] || "",
        gender: dataReview.gender,
      });
    }
  }, [dataReview, reset]);

  return (
    <main>
      <div className="mb-5">
        <h2 className="text-2xl font-bold text-slate-800">Detail Review</h2>

        <p className="mt-1 max-w-lg text-sm text-slate-500">
          Halaman untuk melihat detail informasi serta memperbarui data review
          pelanggan.
        </p>
      </div>

      {isLoadingReview ? (
        <div className="w-full md:w-1/2">
          <Card>
            <CardHeader>
              <CardTitle className="font-DMSerif text-2xl">
                Informasi Review
              </CardTitle>

              <CardDescription>
                Perbarui informasi review pelanggan
              </CardDescription>
            </CardHeader>

            <CardContent className="space-y-4">
              {[...Array(5)].map((_, index) => (
                <div key={index} className="space-y-2">
                  <div className="bg-muted h-4 w-24 animate-pulse rounded" />
                  <div className="bg-muted h-10 w-full animate-pulse rounded-md" />
                </div>
              ))}

              <div className="bg-muted h-10 w-full animate-pulse rounded-md" />
            </CardContent>
          </Card>
        </div>
      ) : (
        <form onSubmit={handleSubmit(handleUpdateReview)}>
          <Card className="w-full md:w-1/2">
            <CardHeader>
              <CardTitle className="font-DMSerif text-2xl">
                Informasi Review
              </CardTitle>

              <CardDescription>
                Perbarui informasi review pelanggan
              </CardDescription>
            </CardHeader>

            <CardContent className="space-y-4">
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
                      placeholder="Masukkan nama"
                      disabled={isPendingMutateUpdateReview}
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

              {/* GENDER */}
              <Field data-invalid={!!errors.gender}>
                <FieldLabel>Gender</FieldLabel>

                <Controller
                  name="gender"
                  control={control}
                  render={({ field }) => (
                    <Select
                      value={field.value || dataReview.gender}
                      onValueChange={field.onChange}
                      disabled={isPendingMutateUpdateReview}
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
                <FieldLabel htmlFor="rating">Rating</FieldLabel>

                <Controller
                  name="rating"
                  control={control}
                  render={({ field }) => (
                    <Input
                      {...field}
                      id="rating"
                      type="number"
                      min={1}
                      max={5}
                      value={field.value}
                      onChange={(e) => field.onChange(Number(e.target.value))}
                      disabled={isPendingMutateUpdateReview}
                      aria-invalid={!!errors.rating}
                    />
                  )}
                />

                {errors.rating && (
                  <FieldDescription className="text-destructive text-xs">
                    {errors.rating.message}
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
                      disabled={isPendingMutateUpdateReview}
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
                      placeholder="Masukkan review"
                      disabled={isPendingMutateUpdateReview}
                      aria-invalid={!!errors.review}
                      rows={5}
                    />
                  )}
                />

                {errors.review && (
                  <FieldDescription className="text-destructive text-xs">
                    {errors.review.message}
                  </FieldDescription>
                )}
              </Field>

              {/* BUTTON */}
              <Button
                type="submit"
                disabled={isPendingMutateUpdateReview}
                className="bg-apple-500 w-full"
              >
                {isPendingMutateUpdateReview
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

export default DetailReview;
