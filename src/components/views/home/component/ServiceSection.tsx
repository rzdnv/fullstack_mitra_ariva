"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MoveRight } from "lucide-react";
import useHome from "../useHome";
import { ILayanan } from "@/types/layanan";
import Image from "next/image";

const ServiceSection = () => {
  const { dataLayanan, isLoadingLayanan } = useHome();

  return (
    <div className="flex flex-col gap-10 md:gap-15 w-full py-5 md:py-20 px-10 md:px-20 items-center ">
      <div className="flex gap-4 flex-col items-center">
        <p className="text-havelock-blue-500 text-center md:text-xl tracking-tight">
          ✦ Solusi Medis Terpadu
        </p>
        <h1 className="font-playfair text-2xl md:text-5xl text-center max-w-4xl text-slate-800 font-bold">
          Layanan Profesional untuk Kualitas Hidup Lebih Baik
        </h1>
      </div>
      <div className="w-full overflow-x-auto p-4">
        <div className="flex justify-center gap-6 min-w-max px-1">
          {dataLayanan?.map((layanan: ILayanan) => (
            <Card
              key={layanan.id}
              className="w-[320px] overflow-hidden rounded-2xl border-0 bg-havelock-blue-500/10 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
            >
              {/* Foto full sesuai rasio asli */}
              <Image
                src={layanan.foto}
                alt={layanan.namaLayanan}
                width={400}
                height={600}
                className="h-auto w-full object-contain"
              />

              {/* Content */}
              <CardContent className="space-y-3 p-5">
                {/* Judul */}
                <CardTitle className="text-center text-2xl font-bold leading-snug text-havelock-blue-800">
                  {layanan.namaLayanan}
                </CardTitle>

                {/* Deskripsi */}
                <p className="min-h-18 text-center text-sm leading-relaxed text-slate-700">
                  {layanan.deskripsi}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServiceSection;

// 20 hari kerja - april =  2 - 26.
// 25 efektif hari
// potongan = tgl merah, skd , izin
