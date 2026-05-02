"use client";

import useHome from "../useHome";
import { ILayanan } from "@/types/layanan";
import CardService from "@/components/shared/CardService/CardService";
import ServiceCardSkeleton from "@/components/shared/CardService/ServiceCardSkeleton";

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
