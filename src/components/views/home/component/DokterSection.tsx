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
import CardDokter from "@/components/shared/CardDokter/CardDokter";
import { Card, CardContent } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

const DokterSection = () => {
  const { dataDokters, isLoadingDokters } = useHome();
  return (
    <div className="flex flex-col gap-10 md:gap-15 w-full py-10 md:py-20 px-10 md:px-20 items-center">
      <div className="flex gap-4 flex-col items-center">
        <p className="text-havelock-blue-500 text-center md:text-xl tracking-tight">
          ✦ Mitra Kesehatan Anda
        </p>
        <h1 className="font-playfair text-2xl md:text-5xl text-center max-w-4xl text-slate-800 font-bold">
          Ditangani oleh Tenaga Medis Profesional & Berpengalaman
        </h1>
      </div>

      <div className="w-full px-6 ">
        <Carousel
          className="w-full"
          opts={{
            align: "start",
            loop: true,
          }}
        >
          <CarouselContent className="py-4">
            {isLoadingDokters
              ? Array.from({ length: 4 }).map((_, index) => (
                  <CarouselItem
                    key={index}
                    className=" md:pl-4 basis-[85%] sm:basis-1/2 lg:basis-1/4"
                  >
                    <Card className="overflow-hidden rounded-3xl border-0 bg-havelock-blue-500/10">
                      <Skeleton className="h-60 w-full" />

                      <CardContent className="space-y-4 p-6">
                        <Skeleton className="mx-auto h-6 w-28 rounded-full" />
                        <Skeleton className="h-7 w-full rounded-md" />
                        <Skeleton className="mx-auto h-5 w-3/4 rounded-md" />
                      </CardContent>
                    </Card>
                  </CarouselItem>
                ))
              : dataDokters?.map((dokter: IDokter) => (
                  <CarouselItem
                    key={dokter.id}
                    className="pl-2 md:pl-4 basis-[85%] sm:basis-1/2 lg:basis-1/4"
                  >
                    <CardDokter
                      namaDokter={dokter.nama}
                      fotoDokter={`${dokter.foto}`}
                      Poli={dokter.poli.namaPoli}
                      Spesialis={dokter.spesialis}
                    />
                  </CarouselItem>
                ))}
          </CarouselContent>
          <CarouselPrevious className="absolute -left-12 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white shadow-lg border rounded-full h-10 w-10 md:h-14 md:w-14" />
          <CarouselNext className="absolute -right-12 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white shadow-lg border rounded-full h-10 w-10 md:h-14 md:w-14" />
        </Carousel>
      </div>
    </div>
  );
};

export default DokterSection;
