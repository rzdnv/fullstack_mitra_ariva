"use client";

import useHome from "../useHome";
import { IBerita } from "@/types/berita";
import CardNews from "@/components/shared/Card/CardNews/CardNews";
import NewsCardSkeleton from "@/components/shared/Card/CardNews/NewsCardSkeleton";

const NewsSection = () => {
  const { dataBerita, isLoadingBerita } = useHome();

  return (
    <section className=" mx-10 my-20">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 p-10 rounded-2xl w-full bg-white  items-center lg:items-start">
        <div className="flex gap-2 md:gap-4 flex-col items-center lg:items-start">
          <p className="text-havelock-blue-500 text-center lg:text-start md:text-xl tracking-tight">
            ✦ Info Kesehatan
          </p>
          <h1 className="font-DMSerif text-2xl md:text-5xl text-center lg:text-start max-w-4xl text-slate-800">
            Informasi Terkini dari RSKB Mitra Ariva
          </h1>
        </div>

        <div className="w-full overflow-y-auto">
          <div className="flex flex-col h-120 gap-6 p-2">
            {isLoadingBerita
              ? Array.from({ length: 7 }).map((_, i) => (
                  <NewsCardSkeleton key={i} />
                ))
              : dataBerita?.map((berita: IBerita) => (
                  <CardNews
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
