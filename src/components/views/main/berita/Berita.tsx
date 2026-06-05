"use client";

import Image from "next/image";
import { IBerita } from "@/types/berita";
import useBerita from "./useBerita";
import NewsCardSkeleton from "@/components/shared/card/CardNews/NewsCardSkeleton";
import CardNews from "@/components/shared/card/CardNews/CardNews";

const Berita = () => {
  const { dataBerita, isLoadingBerita } = useBerita();

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
              ✦ Kabar RSKB Mitra Ariva
            </span>
            <h1 className="font-DMSerif text-2xl leading-tight tracking-tight sm:text-3xl lg:text-5xl">
              Berita & Artikel
            </h1>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="mb-10 text-center md:text-left">
          <h2 className="text-xl font-bold text-slate-800 md:text-2xl">
            Informasi & Edukasi Kesehatan Terbaru
          </h2>
          <p className="mt-1 text-xs text-slate-400">
            Ikuti pembaruan fasilitas, kegiatan sosial, serta tips kesehatan
            dari tenaga medis profesional kami.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:gap-8">
          {isLoadingBerita
            ? Array.from({ length: 6 }).map((_, i) => (
                <NewsCardSkeleton key={i} />
              ))
            : dataBerita?.map((berita: IBerita) => (
                <CardNews
                  key={berita.id}
                  _id={berita.id}
                  gambar={`${berita.gambar}`}
                  judul={berita.judul}
                  isi={berita.isi}
                  tanggal={berita.tanggal}
                  username={berita.user.username}
                />
              ))}
        </div>
      </section>
    </main>
  );
};

export default Berita;
