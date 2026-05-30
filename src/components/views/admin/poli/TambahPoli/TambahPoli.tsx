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

import { Input } from "@/components/ui/input";
import useTambahPoli from "./useTambahPoli";

interface PropsTypes {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export default function TambahPoli({ open, onOpenChange }: PropsTypes) {
  const { control, handleSubmit, errors, onSubmit, isPendingCreate } =
    useTambahPoli({
      onSuccess: () => onOpenChange(false),
    });

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="font-DMSerif text-xl">
            Tambah Poli
          </DialogTitle>
          <DialogDescription>Tambahkan Poli</DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <Field data-invalid={!!errors.namaPoli}>
            <FieldLabel htmlFor="namaPoli">Nama Poli</FieldLabel>

            <Controller
              name="namaPoli"
              control={control}
              render={({ field }) => (
                <Input
                  {...field}
                  id="namaPoli"
                  disabled={isPendingCreate}
                  aria-invalid={!!errors.namaPoli}
                />
              )}
            />

            {errors.namaPoli && (
              <FieldDescription className="text-destructive text-xs">
                {errors.namaPoli.message}
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
              className="bg-apple-500 p-4"
            >
              {isPendingCreate ? (
                <>
                  <Loader2 className="mr-2 size-4 animate-spin" />
                  Menyimpan...
                </>
              ) : (
                "Tambah Poli"
              )}
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
}
