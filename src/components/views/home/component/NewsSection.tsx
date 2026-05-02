"use client";

import useHome from "../useHome";
import { IBerita } from "@/types/berita";
import CardNews from "@/components/shared/Card/CardNews/CardNews";
import NewsCardSkeleton from "@/components/shared/Card/CardNews/NewsCardSkeleton";

const NewsSection = () => {
  const { dataBerita, isLoadingBerita } = useHome();

  return (
    <section className="flex flex-col gap-5 md:gap-10 w-full py-10 px-10 items-center lg:items-start">
      <div className="flex gap-2 md:gap-4 flex-col items-center lg:items-start">
        <p className="text-havelock-blue-500 text-center lg:text-start md:text-xl tracking-tight">
          ✦ Info Kesehatan
        </p>
        <h1 className="font-playfair text-2xl md:text-5xl text-center lg:text-start max-w-4xl text-slate-800 font-bold">
          Informasi Terkini dari RSKB Mitra Ariva
        </h1>
      </div>

      <div className="w-full overflow-x-auto scrollbar-hide">
        <div className="flex md:justify-center gap-6 min-w-max p-2">
          {isLoadingBerita
            ? Array.from({ length: 7 }).map((_, i) => (
                <NewsCardSkeleton key={i} />
              ))
            : dataBerita?.map((berita: IBerita) => (
                <CardNews
                  key={berita.id}
                  gambar={`${berita.gambar}`}
                  judul={berita.judul}
                  tanggal={berita.tanggal}
                  username={berita.user.username}
                />
              ))}
        </div>
      </div>
    </section>
  );
};

export default NewsSection;
