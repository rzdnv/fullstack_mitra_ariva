"use client";

import useHome from "../useHome";
import { IBerita } from "@/types/berita";
import NewsCardSkeleton from "./Card/CardNews/NewsCardSkeleton";
import CardNews from "./Card/CardNews/CardNews";

const NewsSection = () => {
  const { dataBerita, isLoadingBerita } = useHome();

  return (
    <section className="mx-8 my-20 lg:mx-10">
      <div className="grid w-full grid-cols-1 items-center gap-5 rounded-2xl bg-white px-4 py-10 lg:grid-cols-2 lg:items-start lg:px-10">
        <div className="flex flex-col items-center gap-2 md:gap-4 lg:items-start">
          <p className="text-havelock-blue-500 text-center tracking-tight md:text-xl lg:text-start">
            ✦ Kabar RSKB Mitra Ariva
          </p>
          <h1 className="font-DMSerif max-w-4xl text-center text-2xl text-slate-800 md:text-5xl lg:text-start">
            Lebih dari Sekadar Medis: Informasi untuk Komunitas
          </h1>
          <p className="hidden text-start text-sm/7 text-slate-500 lg:flex">
            Sejak berdiri pada tahun 2002, kami berkomitmen untuk menjadi
            institusi yang transparan dan bermanfaat bagi warga Ajibarang. Di
            sini, Anda dapat menemukan laporan kegiatan sosial kami, pembaruan
            fasilitas rumah sakit, hingga tips kesehatan yang disusun oleh
            tenaga medis profesional kami.
          </p>
        </div>

        <div className="w-full overflow-y-auto">
          <div className="flex h-120 flex-col gap-6">
            {isLoadingBerita
              ? Array.from({ length: 7 }).map((_, i) => (
                  <NewsCardSkeleton key={i} />
                ))
              : dataBerita?.map((berita: IBerita) => (
                  <CardNews
                    _id={berita.id}
                    key={berita.id}
                    gambar={`${berita.gambar}`}
                    judul={berita.judul}
                    isi={berita.isi}
                    tanggal={berita.tanggal}
                    username={berita.user.username}
                  />
                ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsSection;
