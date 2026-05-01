"use client";

import Image from "next/image";
import useHome from "../useHome";
import { IBerita } from "@/types/berita";
import { formatTanggal } from "@/components/shared/formatted/formated";
import { Skeleton } from "@/components/ui/skeleton";
import { User } from "lucide-react";

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
                <div key={i} className="min-w-xs h-full rounded-sm border p-2">
                  <Skeleton className="aspect-video w-full rounded-sm" />
                  <div className="flex flex-col gap-2 mt-2">
                    <Skeleton className="h-4 w-3/4" />
                    <Skeleton className="h-4 w-2/3" />
                    <Skeleton className="h-3 w-1/3 mt-1" />
                  </div>
                </div>
              ))
            : dataBerita?.map((berita: IBerita) => (
                <div
                  className="max-w-xs h-full rounded-sm hover:bg-white hover:border transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
                  key={berita.id}
                >
                  <Image
                    src={`${berita.gambar}`}
                    alt={berita.judul}
                    width={400}
                    height={300}
                    className="aspect-video object-cover rounded-sm"
                  />
                  <div className="flex flex-col gap-2 p-2">
                    <h2 className="line-clamp-3  text-sm lg:text-base font-bold text-slate-800">
                      {berita.judul}
                    </h2>
                    <div className="flex gap-2 items-center">
                      <p className="text-xs lg:text-sm text-slate-400">
                        {formatTanggal(berita.tanggal)} |
                      </p>
                      <div className="flex gap-1 items-center">
                        <User className="w-4 h-4 text-slate-400" />
                        <p className="text-xs lg:text-sm text-slate-400">
                          {berita.user.username}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
        </div>
      </div>
    </section>
  );
};

export default NewsSection;
