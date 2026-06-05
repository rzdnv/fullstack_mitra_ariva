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
import { DokterCardSkeleton } from "@/components/shared/card/CardDokter/DokterCardSkeleton";
import CardDokter from "@/components/shared/card/CardDokter/CardDokter";

const DokterSection = () => {
  const { dataDokters, isLoadingDokters } = useHome();
  return (
    <div
      className="flex w-full flex-col items-center gap-4 bg-white px-10 py-10 lg:gap-10"
      id="dokterSection"
    >
      <div className="flex flex-col items-center gap-4">
        <p className="text-havelock-blue-500 text-center tracking-tight md:text-xl">
          ✦ Mitra Kesehatan Anda
        </p>
        <h1 className="font-DMSerif max-w-4xl text-center text-3xl text-slate-800 md:text-5xl">
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
          <CarouselContent className="px-2 py-4">
            {isLoadingDokters
              ? Array.from({ length: 4 }).map((_, i) => (
                  <CarouselItem key={i} className="md:basis-1/2">
                    <DokterCardSkeleton />
                  </CarouselItem>
                ))
              : dataDokters?.map((dokter: IDokter) => (
                  <CarouselItem key={dokter.id} className="md:basis-1/2">
                    <CardDokter
                      _id={dokter.id}
                      namaDokter={dokter.nama}
                      spesialis={dokter.spesialis}
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
          <CarouselPrevious className="absolute top-1/2 -left-8 h-12 w-12 -translate-y-1/2 rounded-full border bg-white/90 shadow-lg hover:bg-white md:h-14 md:w-14 lg:-left-12" />
          <CarouselNext className="absolute top-1/2 -right-8 h-12 w-12 -translate-y-1/2 rounded-full border bg-white/90 shadow-lg hover:bg-white md:h-14 md:w-14 lg:-right-12" />
        </Carousel>
      </div>
    </div>
  );
};

export default DokterSection;
