"use client";

import { Card, CardContent, CardTitle } from "@/components/ui/card";
import useHome from "../useHome";
import { ILayanan } from "@/types/layanan";
import Image from "next/image";
import { Skeleton } from "@/components/ui/skeleton";

const ServiceSection = () => {
  const { dataLayanan, isLoadingLayanan } = useHome();

  return (
    <section className="flex flex-col gap-10 w-full py-10 px-10 md:px-20 items-center ">
      <div className="flex gap-4 flex-col items-center">
        <p className="text-havelock-blue-500 text-center md:text-xl tracking-tight">
          ✦ Solusi Medis Terpadu
        </p>
        <h1 className="font-playfair text-2xl md:text-5xl text-center max-w-4xl text-slate-800 font-bold">
          Layanan Profesional untuk Kualitas Hidup Lebih Baik
        </h1>
      </div>
      <div className="w-full overflow-x-auto py-4">
        <div className="flex md:justify-center gap-6 min-w-max px-1">
          {isLoadingLayanan
            ? Array.from({ length: 5 }).map((_, index) => (
                <Card
                  key={index}
                  className="w-[320px] overflow-hidden rounded-2xl border-0 bg-havelock-blue-500/10"
                >
                  {/* Skeleton Foto */}
                  <Skeleton className="h-60 w-full rounded-none" />

                  {/* Skeleton Content */}
                  <CardContent className="space-y-4 p-5">
                    {/* Judul */}
                    <Skeleton className="mx-auto h-7 w-52 rounded-md" />

                    {/* Deskripsi */}
                    <div className="space-y-2">
                      <Skeleton className="h-4 w-full rounded-md" />
                      <Skeleton className="h-4 w-full rounded-md" />
                      <Skeleton className="mx-auto h-4 w-3/4 rounded-md" />
                    </div>
                  </CardContent>
                </Card>
              ))
            : dataLayanan?.map((layanan: ILayanan) => (
                <Card
                  key={layanan.id}
                  className=" w-65 md:w-100 overflow-hidden rounded-2xl border-0 bg-havelock-blue-500/10 shadow-lg"
                >
                  {/* Foto */}
                  <Image
                    src={layanan.foto}
                    alt={layanan.namaLayanan}
                    width={400}
                    height={600}
                    className="h-auto w-full object-contain"
                  />

                  {/* Content */}
                  <CardContent className="space-y-3 p-5">
                    <CardTitle className="text-center text-lg md:text-2xl font-bold leading-snug text-havelock-blue-800">
                      {layanan.namaLayanan}
                    </CardTitle>

                    <p className=" px-6 text-center text-xs md:text-sm leading-relaxed text-slate-700">
                      {layanan.deskripsi}
                    </p>
                  </CardContent>
                </Card>
              ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceSection;
