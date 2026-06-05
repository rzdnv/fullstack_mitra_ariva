"use client";

import { Controller } from "react-hook-form";
import Image from "next/image";
import { Eye, EyeOff, Loader2, Lock } from "lucide-react";
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
    <div className="from-havelock-blue-900 to-havelock-blue-950 relative flex min-h-screen items-center justify-center bg-linear-to-br px-4 py-12">
      <div className="z-10 w-full max-w-md">
        <div className="rounded-3xl border border-slate-100 bg-white p-8 shadow-lg shadow-slate-200/50">
          <div className="mb-8 flex flex-col items-center text-center">
            <div className="relative mb-4 flex h-20 w-20 items-center justify-center rounded-full border border-slate-100/80 bg-slate-50 p-1 shadow-xs">
              <Image
                src="/images/logo/logo.png"
                alt="Logo RSKB Mitra Ariva"
                width={70}
                height={70}
                className="object-contain"
                priority
              />
            </div>
            <h1 className="text-2xl font-bold tracking-tight text-slate-900">
              RSKB Mitra Ariva
            </h1>
            <p className="mt-1.5 text-xs font-medium tracking-wider text-slate-400 uppercase">
              Sistem Informasi Panel Admin
            </p>
          </div>

          {errors.root && (
            <div className="mb-6 flex items-center gap-2 rounded-2xl border border-red-100 bg-red-50/80 px-4 py-3 text-xs font-medium text-red-600 shadow-xs">
              <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-red-500" />
              {errors.root.message}
            </div>
          )}

          <form onSubmit={handleSubmit(handleLogin)} className="space-y-5">
            <Field className="space-y-1.5">
              <FieldLabel
                htmlFor="username"
                className="text-xs font-bold tracking-wider text-slate-500"
              >
                Username<span className="ml-0.5 text-red-500">*</span>
              </FieldLabel>
              <Controller
                name="username"
                control={control}
                render={({ field }) => (
                  <Input
                    {...field}
                    id="username"
                    placeholder="Masukkan nama pengguna"
                    autoComplete="off"
                    className="focus-visible:ring-havelock-blue-500 h-12 rounded-xl border-slate-200 bg-slate-50/50 px-4 text-sm transition-all duration-200 focus-visible:bg-white"
                    disabled={isPendingLogin}
                  />
                )}
              />
              {errors.username && (
                <FieldDescription className="pt-0.5 text-xs font-medium text-red-500">
                  {errors.username.message}
                </FieldDescription>
              )}
            </Field>

            <Field className="space-y-1.5">
              <FieldLabel
                htmlFor="password"
                className="text-xs font-bold tracking-wider text-slate-500"
              >
                Password<span className="ml-0.5 text-red-500">*</span>
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
                      placeholder="••••••••"
                      autoComplete="off"
                      className="focus-visible:ring-havelock-blue-500 h-12 rounded-xl border-slate-200 bg-slate-50/50 pr-11 pl-4 text-sm transition-all duration-200 focus-visible:bg-white"
                      disabled={isPendingLogin}
                    />
                    <button
                      type="button"
                      onClick={togglePassword}
                      className="absolute top-1/2 right-3.5 -translate-y-1/2 rounded-lg p-1 text-slate-400 transition-colors hover:bg-slate-100 hover:text-slate-600"
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
                <FieldDescription className="pt-0.5 text-xs font-medium text-red-500">
                  {errors.password.message}
                </FieldDescription>
              )}
            </Field>

            <Button
              type="submit"
              className="bg-havelock-blue-600 shadow-havelock-blue-200 hover:bg-havelock-blue-700 mt-2 h-12 w-full rounded-xl font-semibold text-white shadow-md transition-all duration-200 active:scale-98 disabled:pointer-events-none disabled:opacity-70"
              disabled={isPendingLogin}
            >
              {isPendingLogin ? (
                <div className="flex items-center justify-center gap-2">
                  <Loader2 className="h-4 w-4 animate-spin" />
                  <span>Mengautentikasi...</span>
                </div>
              ) : (
                <div className="flex items-center justify-center gap-2">
                  <Lock className="h-3.5 w-3.5" />
                  <span>Masuk Ke Dashboard</span>
                </div>
              )}
            </Button>
          </form>
        </div>

        <p className="mt-8 text-center text-xs font-medium tracking-wide text-slate-400">
          &copy; {new Date().getFullYear()} RSKB Mitra Ariva. All Rights
          Reserved.
        </p>
      </div>
    </div>
  );
}
