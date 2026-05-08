"use client";

import Image from "next/image";
import { IBerita } from "@/types/berita";
import NewsCardSkeleton from "../home/component/Card/CardNews/NewsCardSkeleton";
import CardNews from "../home/component/Card/CardNews/CardNews";
import useBerita from "./useBerita";

const Berita = () => {
  const { dataBerita, isLoadingBerita } = useBerita();

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

          <h1 className="text-3xl font-bold lg:text-5xl">Berita</h1>
        </div>

        <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/30 to-transparent" />
      </section>

      {/* content */}
      <section className="grid grid-cols-1 gap-6 px-10 py-10 md:grid-cols-2 lg:px-20">
        {isLoadingBerita
          ? Array.from({ length: 7 }).map((_, i) => (
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
      </section>
    </main>
  );
};

export default Berita;
