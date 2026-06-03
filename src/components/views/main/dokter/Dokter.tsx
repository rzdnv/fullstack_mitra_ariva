"use client";

import Image from "next/image";
import useDokter from "./useDokter";
import { IDokter } from "@/types/dokter";
import { DokterCardSkeleton } from "@/components/shared/card/CardDokter/DokterCardSkeleton";
import CardDokter from "@/components/shared/card/CardDokter/CardDokter";

const Dokter = () => {
  const { dataDokters, isLoadingDokters } = useDokter();

  return (
    <main className="min-h-screen bg-slate-50/50">
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
              Tenaga Medis Profesional
            </span>
            <h1 className="font-playfair text-3xl font-extrabold tracking-tight lg:text-5xl">
              Dokter Kami
            </h1>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="mb-10 text-center md:text-left">
          <h2 className="text-xl font-bold text-slate-800 md:text-2xl">
            Tim Dokter Spesialis & Umum
          </h2>
          <p className="mt-1 text-xs text-slate-400">
            Temukan jadwal praktik dokter profesional kami yang siap melayani
            kesehatan Anda dengan sepenuh hati.
          </p>
        </div>

        <div className="grid grid-cols-1 justify-items-center gap-6 px-8 sm:grid-cols-2 sm:px-0">
          {isLoadingDokters
            ? Array.from({ length: 4 }).map((_, i) => (
                <div key={i} className="w-full">
                  <DokterCardSkeleton />
                </div>
              ))
            : dataDokters?.map((dokter: IDokter) => (
                <div key={dokter.id} className="h-full w-full">
                  <CardDokter
                    namaDokter={dokter.nama}
                    spesialis={dokter.spesialis}
                    fotoDokter={`${dokter.foto}`}
                    poli={dokter.poli.namaPoli}
                    Schedules={dokter.jadwal.map((j) => ({
                      Day: j.hari,
                      Time: `${j.jamMulai} - ${j.jamSelesai}`,
                    }))}
                  />
                </div>
              ))}
        </div>
      </section>
    </main>
  );
};

export default Dokter;
