"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import useHome from "../useHome";
import { IDokter } from "@/types/dokter";
import CardDokter from "@/components/shared/Card/CardDokter/CardDokter";
import { DokterCardSkeleton } from "@/components/shared/Card/CardDokter/DokterCardSkeleton";

const DokterSection2 = () => {
  const { dataDokters, isLoadingDokters } = useHome();
  return (
    <div className="flex flex-col gap-4 lg:gap-10 w-full py-10 px-10 items-center bg-white">
      <div className="flex gap-4 flex-col items-center">
        <p className="text-havelock-blue-500 text-center md:text-xl tracking-tight">
          ✦ Mitra Kesehatan Anda
        </p>
        <h1 className="font-DMSerif text-3xl md:text-5xl text-center max-w-4xl text-slate-800">
          Ditangani oleh Tenaga Medis Profesional & Berpengalaman
        </h1>
      </div>

      <div className="w-full px-4 lg:px-10">
        <Carousel
          className="w-full"
          opts={{
            align: "start",
            loop: true,
          }}
        >
          <CarouselContent className="py-4">
            {isLoadingDokters
              ? Array.from({ length: 4 }).map((_, i) => (
                  <CarouselItem key={i} className="lg:basis-1/2">
                    <DokterCardSkeleton />
                  </CarouselItem>
                ))
              : dataDokters?.map((dokter: IDokter) => (
                  <CarouselItem key={dokter.id} className="lg:basis-1/2">
                    <CardDokter
                      namaDokter={dokter.nama}
                      fotoDokter={`${dokter.foto}`}
                      poli={dokter.poli.namaPoli}
                      Schedules={dokter.jadwal.map((j) => ({
                        Day: j.hari,
                        Time: `${j.jamMulai} - ${j.jamSelesai}`,
                      }))}
                    />
                  </CarouselItem>
                ))}
          </CarouselContent>
          <CarouselPrevious className="absolute -left-8 lg:-left-12 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white shadow-lg border rounded-full h-12 w-12 md:h-14 md:w-14" />
          <CarouselNext className="absolute -right-8 lg:-right-12 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white shadow-lg border rounded-full h-12 w-12 md:h-14 md:w-14" />
        </Carousel>
      </div>
    </div>
  );
};

export default DokterSection2;
