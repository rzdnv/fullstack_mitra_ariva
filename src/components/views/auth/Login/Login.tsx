"use client";

import { Controller } from "react-hook-form";
import Image from "next/image";
import { Eye, EyeOff, Loader2 } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import useLogin from "./useLogin";
import { Field, FieldDescription, FieldLabel } from "@/components/ui/field";

export default function LoginForm() {
  const {
    showPassword,
    togglePassword,
    control,
    handleSubmit,
    handleLogin,
    isPendingLogin,
    errors,
  } = useLogin();

  return (
    <div className="bg-havelock-blue-800 flex min-h-screen items-center justify-center px-4">
      <div className="w-full max-w-md">
        {/* Card */}
        <div className="rounded-2xl bg-white p-8 shadow-lg">
          {/* Logo & Title */}
          <div className="mb-4 flex flex-col items-center">
            <Image
              src="/images/logo/logo.png"
              alt="logo"
              width={80}
              height={80}
              className="mb-3"
            />
            <h1 className="text-2xl font-bold text-slate-800">
              RSKB Mitra Ariva
            </h1>
            <p className="mt-1 text-sm text-gray-500">Masuk ke panel admin</p>
          </div>

          {/* Root Error */}
          {errors.root && (
            <div className="mb-6 rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-600">
              {errors.root.message}
            </div>
          )}

          {/* Form */}
          <form onSubmit={handleSubmit(handleLogin)} className="space-y-5">
            {/* Username */}
            <Field>
              <FieldLabel
                htmlFor="username"
                className="text-sm font-medium text-slate-700"
              >
                Username<span className="text-destructive">*</span>
              </FieldLabel>
              <Controller
                name="username"
                control={control}
                render={({ field }) => (
                  <Input
                    {...field}
                    id="username"
                    placeholder="Masukkan username"
                    autoComplete="off"
                    className="p-6"
                    disabled={isPendingLogin}
                  />
                )}
              />
              {errors.username && (
                <FieldDescription className="text-xs text-red-500">
                  {errors.username.message}
                </FieldDescription>
              )}
            </Field>

            {/* Password */}
            <Field>
              <FieldLabel
                htmlFor="password"
                className="text-sm font-medium text-slate-700"
              >
                Password<span className="text-destructive">*</span>
              </FieldLabel>
              <Controller
                name="password"
                control={control}
                render={({ field }) => (
                  <div className="relative">
                    <Input
                      {...field}
                      type={showPassword ? "text" : "password"}
                      id="password"
                      placeholder="Masukkan password"
                      autoComplete="off"
                      className="p-6"
                      disabled={isPendingLogin}
                    />
                    <button
                      type="button"
                      onClick={togglePassword}
                      className="absolute top-1/2 right-3 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                    >
                      {showPassword ? (
                        <EyeOff className="h-4 w-4" />
                      ) : (
                        <Eye className="h-4 w-4" />
                      )}
                    </button>
                  </div>
                )}
              />
              {errors.password && (
                <FieldDescription className="text-xs text-red-500">
                  {errors.password.message}
                </FieldDescription>
              )}
            </Field>

            {/* Submit */}
            <Button
              type="submit"
              className="w-full bg-blue-600 p-5 hover:bg-blue-700"
              disabled={isPendingLogin}
            >
              {isPendingLogin ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Memproses...
                </>
              ) : (
                "Masuk"
              )}
            </Button>
          </form>
        </div>

        {/* Footer */}
        <p className="mt-6 text-center text-xs text-gray-400">
          © {new Date().getFullYear()} RSKB Mitra Ariva
        </p>
      </div>
    </div>
  );
}
