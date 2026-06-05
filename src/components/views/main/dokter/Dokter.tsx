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
        className="relative flex min-h-[45vh] w-full items-end overflow-hidden bg-cover bg-center lg:min-h-[65vh]"
        style={{
          backgroundImage: "url('/images/general/RSKB.png')",
        }}
      >
        <div className="absolute inset-0 bg-linear-to-t from-slate-950/90 via-slate-950/40 to-transparent" />

        <div className="animate-fade-in relative z-10 mx-auto flex w-full max-w-7xl items-center gap-4 p-6 text-white lg:px-10 lg:pb-12">
          <div className="relative shrink-0 rounded-2xl border border-white/10 bg-white/10 p-2.5 shadow-lg drop-shadow-md backdrop-blur-xs">
            <Image
              src="/images/logo/logo.png"
              alt="RSKB Mitra Ariva"
              width={96}
              height={96}
              className="h-14 w-14 object-contain lg:h-20 lg:w-20"
              priority
            />
          </div>

          <div className="space-y-1">
            <span className="text-havelock-blue-300 block text-xs font-bold tracking-widest uppercase sm:text-sm">
              ✦ Tenaga Medis Profesional
            </span>
            <h1 className="font-DMSerif text-2xl leading-tight tracking-tight sm:text-3xl lg:text-5xl">
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
                </div>
              ))}
        </div>
      </section>
    </main>
  );
};

export default Dokter;
