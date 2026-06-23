"use client";

import ServiceCardSkeleton from "@/components/views/main/home/component/Card/CardService/ServiceCardSkeleton";
import useHome from "../useHome";
import { ILayanan } from "@/types/layanan";
import CardService from "@/components/views/main/home/component/Card/CardService/CardService";

const ServiceSection = () => {
  const { dataLayanan, isLoadingLayanan } = useHome();

  return (
    <section className="flex w-full flex-col items-center gap-6 py-12 lg:gap-10 lg:py-16">
      <div className="mx-auto flex max-w-3xl flex-col items-center gap-3 px-6">
        <p className="text-havelock-blue-500 text-center tracking-tight md:text-xl">
          ✦ Solusi Medis Terpadu
        </p>
        <h2 className="font-DMSerif text-center text-2xl leading-tight text-slate-800 md:text-4xl lg:text-5xl">
          Layanan Profesional untuk Kualitas Hidup Lebih Baik
        </h2>
      </div>

      <div className="scrollbar-none w-full overflow-x-auto pt-2 pb-6">
        <div className="flex w-max gap-6 px-6 md:px-12 lg:px-20">
          {isLoadingLayanan
            ? Array.from({ length: 4 }).map((_, index) => (
                <div key={index} className="w-64 shrink-0 sm:w-72">
                  <ServiceCardSkeleton />
                </div>
              ))
            : dataLayanan?.map((layanan: ILayanan) => (
                <div
                  key={layanan.id}
                  className="w-64 shrink-0 transition-all duration-300 hover:-translate-y-1.5 sm:w-72"
                >
                  <CardService
                    _id={layanan.id}
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
