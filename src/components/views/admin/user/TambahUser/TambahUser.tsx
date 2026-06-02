"use client";

import { Controller } from "react-hook-form";
import { Loader2 } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Field, FieldDescription, FieldLabel } from "@/components/ui/field";
import {
  Dialog,
  DialogContent,
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
import useTambahUser from "./useTambahUser";
import { DialogDescription } from "@radix-ui/react-dialog";

const ROLE_OPTIONS = [
  { label: "Admin", value: "ADMIN" },
  { label: "Editor", value: "EDITOR" },
];

interface Props {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export default function TambahUser({ open, onOpenChange }: Props) {
  const { control, handleSubmit, errors, onSubmit, isPendingCreate } =
    useTambahUser({
      onSuccess: () => onOpenChange(false),
    });

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="font-DMSerif text-xl">
            Tambah User
          </DialogTitle>
          <DialogDescription>Tambahkan User rumah sakit</DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          {/* NAMA */}
          <Field data-invalid={!!errors.username}>
            <FieldLabel htmlFor="username">Username</FieldLabel>

            <Controller
              name="username"
              control={control}
              render={({ field }) => (
                <Input
                  {...field}
                  id="username"
                  placeholder="Username"
                  disabled={isPendingCreate}
                  aria-invalid={!!errors.username}
                />
              )}
            />

            {errors.username && (
              <FieldDescription className="text-destructive text-xs">
                {errors.username.message}
              </FieldDescription>
            )}
          </Field>

          {/* PASSWORD */}
          <Field data-invalid={!!errors.password}>
            <FieldLabel htmlFor="password">Password</FieldLabel>

            <Controller
              name="password"
              control={control}
              render={({ field }) => (
                <Input
                  {...field}
                  id="password"
                  placeholder="password"
                  disabled={isPendingCreate}
                  aria-invalid={!!errors.password}
                />
              )}
            />

            {errors.password && (
              <FieldDescription className="text-destructive text-xs">
                {errors.password.message}
              </FieldDescription>
            )}
          </Field>

          {/* ROLE */}
          <Field data-invalid={!!errors.role}>
            <FieldLabel>Gender</FieldLabel>

            <Controller
              name="role"
              control={control}
              render={({ field }) => (
                <Select
                  value={field.value}
                  onValueChange={field.onChange}
                  disabled={isPendingCreate}
                >
                  <SelectTrigger aria-invalid={!!errors.role}>
                    <SelectValue placeholder="Pilih role" />
                  </SelectTrigger>

                  <SelectContent>
                    {ROLE_OPTIONS.map((role) => (
                      <SelectItem key={role.value} value={role.value}>
                        {role.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              )}
            />

            {errors.role && (
              <FieldDescription className="text-destructive text-xs">
                {errors.role.message}
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
                "Tambah User"
              )}
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
}
