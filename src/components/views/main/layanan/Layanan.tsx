"use client";

import Image from "next/image";
import useLayanan from "./useLayanan";
import { ILayanan } from "@/types/layanan";
import ServiceCardSkeleton from "../home/component/Card/CardService/ServiceCardSkeleton";
import CardService from "../home/component/Card/CardService/CardService";

const Layanan = () => {
  const { dataLayanan, isLoadingLayanan } = useLayanan();

  return (
    <main className="min-h-screen bg-slate-50/50">
      {/* 1. SECTION HERO */}
      <section
        className="relative flex min-h-[40vh] w-full items-end overflow-hidden bg-cover bg-center lg:min-h-[55vh]"
        style={{
          backgroundImage: "url('/images/general/RSKB.png')",
        }}
      >
        <div className="absolute inset-0 bg-linear-to-t from-slate-950/80 via-slate-950/40 to-transparent" />

        <div className="relative z-10 mx-auto mb-4 flex w-full max-w-7xl items-center gap-4 p-6 text-white lg:p-12">
          <Image
            src="/images/logo/logo.png"
            alt="RSKB Mitra Ariva"
            width={200}
            height={200}
            className="h-14 w-14 object-contain drop-shadow-md lg:h-20 lg:w-20"
          />
          <div className="space-y-1">
            <span className="text-havelock-blue-300 block text-xs font-bold tracking-widest uppercase">
              Fasilitas & Program
            </span>
            <h1 className="font-playfair text-3xl font-extrabold tracking-tight lg:text-5xl">
              Layanan Medis
            </h1>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="mb-10 text-center md:text-left">
          <h2 className="text-xl font-bold text-slate-800 md:text-2xl">
            Paket & Promo Layanan Unggulan
          </h2>
          <p className="mt-1 text-xs text-slate-400">
            Silakan pilih program layanan kesehatan yang sesuai dengan kebutuhan
            Anda dan keluarga.
          </p>
        </div>

        <div className="grid grid-cols-1 justify-items-center gap-6 sm:grid-cols-2 md:gap-8 lg:grid-cols-3">
          {isLoadingLayanan
            ? Array.from({ length: 6 }).map((_, index) => (
                <ServiceCardSkeleton key={index} />
              ))
            : dataLayanan?.map((layanan: ILayanan) => (
                <CardService
                  key={layanan.id}
                  foto={layanan.foto}
                  namaLayanan={layanan.namaLayanan}
                  deskripsi={layanan.deskripsi}
                />
              ))}
        </div>
      </section>
    </main>
  );
};

export default Layanan;
