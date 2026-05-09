"use client";

import Image from "next/image";
import useDokter from "./useDokter";
import { IDokter } from "@/types/dokter";
import { DokterCardSkeleton } from "@/components/shared/card/CardDokter/DokterCardSkeleton";
import CardDokter from "@/components/shared/card/CardDokter/CardDokter";

const Dokter = () => {
  const { dataDokters, isLoadingDokters } = useDokter();

  return (
    <main className="bg-white">
      <section
        className="relative flex min-h-[50vh] w-full items-end overflow-hidden bg-cover bg-center lg:min-h-[75vh]"
        style={{
          backgroundImage: "url('/images/general/RSKB.png')",
        }}
      >
        <div className="relative z-10 flex max-w-2xl items-center gap-4 p-6 text-white lg:p-10">
          <Image
            src="/images/logo/logo.png"
            alt="RSKB Mitra Ariva"
            width={400}
            height={400}
            className="h-1/4 w-1/4 object-contain"
          />

          <h1 className="text-3xl font-bold lg:text-5xl">Dokter Kami</h1>
        </div>

        <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/30 to-transparent" />
      </section>

      {/* content */}
      <section className="grid grid-cols-1 gap-6 px-10 py-10 md:grid-cols-2 lg:px-20">
        {isLoadingDokters
          ? Array.from({ length: 4 }).map((_, i) => (
              <div key={i}>
                <DokterCardSkeleton />
              </div>
            ))
          : dataDokters?.map((dokter: IDokter) => (
              <div key={dokter.id} className="h-full">
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
      </section>
    </main>
  );
};

export default Dokter;
