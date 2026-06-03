"use client";

import ServiceCardSkeleton from "@/components/views/main/home/component/Card/CardService/ServiceCardSkeleton";
import useHome from "../useHome";
import { ILayanan } from "@/types/layanan";
import CardService from "@/components/views/main/home/component/Card/CardService/CardService";

const ServiceSection = () => {
  const { dataLayanan, isLoadingLayanan } = useHome();

  return (
    <section className="flex w-full flex-col items-center gap-6 px-4 py-12 md:px-10 lg:gap-10 lg:py-16">
      <div className="mx-auto flex max-w-3xl flex-col items-center gap-3 px-2">
        <p className="text-havelock-blue-500 text-center tracking-tight md:text-xl">
          ✦ Solusi Medis Terpadu
        </p>
        <h2 className="font-DMSerif text-center text-2xl leading-tight text-slate-800 md:text-4xl lg:text-5xl">
          Layanan Profesional untuk Kualitas Hidup Lebih Baik
        </h2>
      </div>

      <div className="scrollbar-none w-full snap-x snap-mandatory overflow-x-auto pt-2 pb-6">
        <div className="mx-auto flex w-max max-w-7xl gap-6 px-4 md:w-full md:flex-wrap md:justify-center md:px-8">
          {isLoadingLayanan
            ? Array.from({ length: 4 }).map((_, index) => (
                <div key={index} className="w-65 shrink-0 snap-center sm:w-70">
                  <ServiceCardSkeleton />
                </div>
              ))
            : dataLayanan?.map((layanan: ILayanan) => (
                <div
                  key={layanan.id}
                  className="w-65 shrink-0 snap-center transition-transform duration-300 hover:-translate-y-1 sm:w-70"
                >
                  <CardService
                    foto={`${layanan.foto}`}
                    namaLayanan={layanan.namaLayanan}
                    deskripsi={layanan.deskripsi}
                  />
                </div>
              ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceSection;
