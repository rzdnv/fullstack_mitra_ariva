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
              Kabar RSKB Mitra Ariva
            </span>
            <h1 className="font-playfair text-3xl font-extrabold tracking-tight lg:text-5xl">
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
