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
import useDetailUser from "./useDetailUser";

const ROLE_OPTIONS = [
  { label: "Admin", value: "ADMIN" },
  { label: "Editor", value: "EDITOR" },
];

const DetailUser = () => {
  const {
    controlUpdateUser,
    handleSubmitUpdateUser,
    errorsUpdate,
    resetUpdateUser,

    controlUpdatePassword,
    handleSubmitUpdatePassword,
    errorsUpdatePassword,

    // data user
    dataUser,
    isLoadingUser,

    // update
    handleUpdateUser,
    isPendingMutateUpdateUser,

    handleUpdatePassword,
    isPendingMutateUpdatePasswordUser,
  } = useDetailUser();

  useEffect(() => {
    if (dataUser) {
      resetUpdateUser({
        username: dataUser.username,
        role: dataUser.role,
      });
    }
  }, [dataUser, resetUpdateUser]);

  return (
    <main>
      <div className="mb-5">
        <h2 className="text-2xl font-bold text-slate-800">Detail User</h2>

        <p className="mt-1 max-w-lg text-sm text-slate-500">
          Halaman untuk melihat detail informasi serta memperbarui data user
          pelanggan.
        </p>
      </div>

      <div className="grid gap-4 lg:grid-cols-2">
        {isLoadingUser ? (
          <div className="w-full">
            <Card>
              <CardHeader>
                <CardTitle className="font-DMSerif text-2xl">
                  Informasi User
                </CardTitle>

                <CardDescription>Perbarui informasi User</CardDescription>
              </CardHeader>

              <CardContent className="space-y-4">
                {[...Array(2)].map((_, index) => (
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
          <form onSubmit={handleSubmitUpdateUser(handleUpdateUser)}>
            <Card className="w-full">
              <CardHeader>
                <CardTitle className="font-DMSerif text-2xl">
                  Informasi User
                </CardTitle>

                <CardDescription>Perbarui informasi User</CardDescription>
              </CardHeader>

              <CardContent className="space-y-4">
                {/* USERNAME */}
                <Field data-invalid={!!errorsUpdate.username}>
                  <FieldLabel htmlFor="username">Username</FieldLabel>

                  <Controller
                    name="username"
                    control={controlUpdateUser}
                    render={({ field }) => (
                      <Input
                        {...field}
                        id="username"
                        placeholder="Masukkan username"
                        disabled={isPendingMutateUpdateUser}
                        aria-invalid={!!errorsUpdate.username}
                      />
                    )}
                  />

                  {errorsUpdate.username && (
                    <FieldDescription className="text-destructive text-xs">
                      {errorsUpdate.username.message}
                    </FieldDescription>
                  )}
                </Field>

                {/* Role */}
                <Field data-invalid={!!errorsUpdate.role}>
                  <FieldLabel>Role</FieldLabel>

                  <Controller
                    name="role"
                    control={controlUpdateUser}
                    render={({ field }) => (
                      <Select
                        value={field.value || dataUser.role}
                        onValueChange={field.onChange}
                        disabled={isPendingMutateUpdateUser}
                      >
                        <SelectTrigger aria-invalid={!!errorsUpdate.role}>
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

                  {errorsUpdate.role && (
                    <FieldDescription className="text-destructive text-xs">
                      {errorsUpdate.role.message}
                    </FieldDescription>
                  )}
                </Field>

                {/* BUTTON */}
                <Button
                  type="submit"
                  disabled={isPendingMutateUpdateUser}
                  className="bg-apple-500 w-full"
                >
                  {isPendingMutateUpdateUser
                    ? "Menyimpan..."
                    : "Simpan Perubahan"}
                </Button>
              </CardContent>
            </Card>
          </form>
        )}

        {/* Update Password */}
        <form onSubmit={handleSubmitUpdatePassword(handleUpdatePassword)}>
          <Card className="w-full">
            <CardHeader>
              <CardTitle className="font-DMSerif text-2xl">
                Password User
              </CardTitle>

              <CardDescription>Perbarui password user</CardDescription>
            </CardHeader>

            <CardContent className="space-y-4">
              {/* PASSWORD */}
              <Field data-invalid={!!errorsUpdatePassword.password}>
                <FieldLabel htmlFor="password">password</FieldLabel>

                <Controller
                  name="password"
                  control={controlUpdatePassword}
                  render={({ field }) => (
                    <Input
                      {...field}
                      id="password"
                      placeholder="Masukkan password baru user"
                      disabled={isPendingMutateUpdatePasswordUser}
                      aria-invalid={!!errorsUpdatePassword.password}
                    />
                  )}
                />

                {errorsUpdatePassword.password && (
                  <FieldDescription className="text-destructive text-xs">
                    {errorsUpdatePassword.password.message}
                  </FieldDescription>
                )}
              </Field>

              {/* BUTTON */}
              <Button
                type="submit"
                disabled={isPendingMutateUpdatePasswordUser}
                className="bg-apple-500 w-full"
              >
                {isPendingMutateUpdatePasswordUser
                  ? "Menyimpan..."
                  : "Update Password"}
              </Button>
            </CardContent>
          </Card>
        </form>
      </div>
    </main>
  );
};

export default DetailUser;
