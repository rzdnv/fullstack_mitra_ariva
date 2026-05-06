"use client";

import useHome from "../useHome";
import { ILayanan } from "@/types/layanan";
import CardService from "@/components/views/main/home/component/Card/CardService/CardService";
import ServiceCardSkeleton from "@/components/views/main/home/component/Card/CardService/ServiceCardSkeleton";

const ServiceSection = () => {
  const { dataLayanan, isLoadingLayanan } = useHome();

  return (
    <section className="flex w-full flex-col items-center gap-4 px-10 py-10 md:px-20 lg:gap-10">
      <div className="flex flex-col items-center gap-4">
        <p className="text-havelock-blue-500 text-center tracking-tight md:text-xl">
          ✦ Solusi Medis Terpadu
        </p>
        <h1 className="font-DMSerif max-w-4xl text-center text-3xl text-slate-800 md:text-5xl">
          Layanan Profesional untuk Kualitas Hidup Lebih Baik
        </h1>
      </div>
      <div className="w-full overflow-x-auto py-4">
        <div className="flex min-w-max gap-6 px-1 md:justify-center">
          {isLoadingLayanan
            ? Array.from({ length: 5 }).map((_, index) => (
                <ServiceCardSkeleton key={index} />
              ))
            : dataLayanan?.map((layanan: ILayanan) => (
                <CardService
                  key={layanan.id}
                  foto={`${layanan.foto}`}
                  namaLayanan={layanan.namaLayanan}
                  deskripsi={layanan.deskripsi}
                />
              ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceSection;
