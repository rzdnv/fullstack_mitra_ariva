"use client";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Controller } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Field, FieldDescription, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { useEffect } from "react";
import useDetailPoli from "./useDetailPoli";
import { Loader2 } from "lucide-react";
import { Skeleton } from "@/components/ui/skeleton";

interface PropsTypes {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  poliId: number;
}

const DetailPoli = ({ open, onOpenChange, poliId }: PropsTypes) => {
  const {
    control,
    handleSubmit,
    errors,
    reset,
    dataPoli,
    isLoadingPoli,
    handleUpdatePoli,
    isPendingMutateUpdatePoli,
  } = useDetailPoli({ id: poliId, onSuccess: () => onOpenChange(false) });

  useEffect(() => {
    if (dataPoli) {
      reset({
        namaPoli: dataPoli.namaPoli,
      });
    }
  }, [dataPoli, reset]);

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="font-DMSerif text-xl">
            Tambah Poli
          </DialogTitle>
          <DialogDescription>Tambahkan Poli</DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit(handleUpdatePoli)} className="space-y-4">
          <Field data-invalid={!!errors.namaPoli}>
            <FieldLabel htmlFor="namaPoli">Nama Poli</FieldLabel>

            {isLoadingPoli ? (
              <Skeleton className="h-10 w-full" />
            ) : (
              <Controller
                name="namaPoli"
                control={control}
                render={({ field }) => (
                  <Input
                    {...field}
                    id="namaPoli"
                    disabled={isLoadingPoli || isPendingMutateUpdatePoli}
                    aria-invalid={!!errors.namaPoli}
                  />
                )}
              />
            )}

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
              disabled={isPendingMutateUpdatePoli}
            >
              Batal
            </Button>

            <Button
              type="submit"
              disabled={isLoadingPoli || isPendingMutateUpdatePoli}
              className="bg-apple-500 p-4"
            >
              {isPendingMutateUpdatePoli ? (
                <>
                  <Loader2 className="mr-2 size-4 animate-spin" />
                  Mengupdate...
                </>
              ) : (
                "Update Poli"
              )}
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default DetailPoli;
