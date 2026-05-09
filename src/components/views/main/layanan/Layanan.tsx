"use client";

import Image from "next/image";

import { Skeleton } from "@/components/ui/skeleton";

import useLayanan from "./useLayanan";

import { ILayanan } from "@/types/layanan";

const Layanan = () => {
  const { dataLayanan, isLoadingLayanan } = useLayanan();

  return (
    <main className="bg-white">
      {/* Hero */}
      <section
        className="relative flex min-h-[50vh] w-full items-end overflow-hidden bg-cover bg-center lg:min-h-[75vh]"
        style={{
          backgroundImage: "url('/images/general/RSKB.png')",
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/30 to-transparent" />

        {/* Content */}
        <div className="relative z-10 flex items-center gap-4 p-6 text-white lg:p-10">
          <Image
            src="/images/logo/logo.png"
            alt="RSKB Mitra Ariva"
            width={400}
            height={400}
            className="h-16 w-16 object-contain lg:h-24 lg:w-24"
          />

          <h1 className="text-3xl font-bold lg:text-5xl">Layanan</h1>
        </div>
      </section>

      {/* Content */}
      <section className="grid gap-6 px-6 py-10 md:grid-cols-2 lg:grid-cols-3 lg:gap-10 lg:px-20">
        {isLoadingLayanan
          ? Array.from({ length: 6 }).map((_, index) => (
              <div
                key={index}
                className="space-y-4 overflow-hidden rounded-2xl"
              >
                {/* Image Skeleton */}
                <Skeleton className="aspect-3/4 w-full rounded-2xl" />

                {/* Text Skeleton */}
                <div className="space-y-2">
                  <Skeleton className="h-5 w-3/4" />
                  <Skeleton className="h-4 w-full" />
                  <Skeleton className="h-4 w-5/6" />
                </div>
              </div>
            ))
          : dataLayanan?.map((layanan: ILayanan) => (
              <div
                key={layanan.id}
                className="group overflow-hidden rounded-2xl shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="overflow-hidden">
                  <Image
                    src={layanan.foto}
                    alt={layanan.namaLayanan}
                    width={500}
                    height={700}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
              </div>
            ))}
      </section>
    </main>
  );
};

export default Layanan;
