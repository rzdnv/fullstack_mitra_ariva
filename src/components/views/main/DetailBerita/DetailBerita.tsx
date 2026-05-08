"use client";

import Image from "next/image";
import useDetailBerita from "./useDetailBerita";
import { IBerita } from "@/types/berita";
import CardNews from "../home/component/Card/CardNews/CardNews";
import { User } from "lucide-react";
import { formatTanggal } from "@/components/shared/formatted/formated";

const DetailBerita = () => {
  const { dataBerita, isLoadingBerita, detailBerita, isLoadingDetailBerita } =
    useDetailBerita();

  // Loading state
  if (isLoadingDetailBerita) {
    return (
      <main className="flex min-h-screen items-center justify-center">
        <p className="text-gray-400">Memuat berita...</p>
      </main>
    );
  }

  return (
    <main className="bg-white">
      <section
        className="relative flex min-h-[40vh] w-full items-end overflow-hidden bg-cover bg-center lg:min-h-[50vh]"
        style={{
          backgroundImage: `url(${detailBerita.gambar})`,
        }}
      >
        <div className="relative z-10 flex max-w-1/2 items-center gap-4 p-6 text-white lg:p-10">
          <Image
            src="/images/logo/logo.png"
            alt="RSKB Mitra Ariva"
            width={400}
            height={400}
            className="h-1/4 w-1/4 object-contain"
          />
          <h1 className="w-full text-3xl font-bold lg:text-5xl">
            Detail Berita
          </h1>
        </div>
        <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/30 to-transparent" />
      </section>

      {/* Content */}
      <section className="grid grid-cols-1 gap-8 px-8 py-10 lg:grid-cols-3 lg:px-10">
        {/* Kiri */}
        <div className="space-y-4 lg:col-span-2">
          <h2 className="text-3xl font-bold">{detailBerita.judul}</h2>

          <div className="aspect-video w-full overflow-hidden rounded-md">
            <Image
              src={detailBerita.gambar}
              alt={detailBerita.judul}
              width={400}
              height={300}
              className="h-full w-full object-cover"
            />
          </div>
          <div className="flex items-center gap-2">
            <p className="text-sm text-slate-400">
              {formatTanggal(detailBerita.tanggal)} |
            </p>

            <div className="flex items-center gap-1">
              <User className="h-4 w-4 text-slate-400" />
              <p className="text-sm text-slate-400">
                {detailBerita.user.username}
              </p>
            </div>
          </div>

          <p className="">{detailBerita.isi}</p>
        </div>

        {/* Kanan */}
        <div className="lg:col-span-1">
          <div className="flex gap-4 overflow-x-auto pb-2 lg:flex-col lg:overflow-x-hidden lg:overflow-y-auto">
            {dataBerita?.map((berita: IBerita) => (
              <div key={berita.id} className="min-w-60 lg:min-w-0">
                <CardNews
                  _id={berita.id}
                  gambar={`${berita.gambar}`}
                  judul={berita.judul}
                  isi={berita.isi}
                  tanggal={berita.tanggal}
                  username={berita.user.username}
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default DetailBerita;
