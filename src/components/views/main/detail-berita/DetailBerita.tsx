"use client";

import Image from "next/image";
import { User, Calendar } from "lucide-react";
import { FaInstagram, FaFacebook, FaYoutube } from "react-icons/fa";

import { formatTanggal } from "@/components/shared/formatted/formated";
import useDetailBerita from "./useDetailBerita";

import { IBerita } from "@/types/berita";
import LoadingState from "@/components/shared/loadingstate/LoadingState";
import CardNews from "@/components/shared/card/CardNews/CardNews";

const DetailBerita = () => {
  const { dataBerita, detailBerita, isLoadingDetailBerita } = useDetailBerita();

  if (isLoadingDetailBerita) {
    return <LoadingState judul="Memuat Berita" />;
  }

  return (
    <main className="min-h-screen bg-slate-50/50 pb-16">
      <section
        className="relative flex min-h-[35vh] w-full items-end overflow-hidden bg-cover bg-center lg:min-h-[50vh]"
        style={{
          backgroundImage: `url(${detailBerita.gambar})`,
        }}
      >
        <div className="absolute inset-0 bg-linear-to-t from-slate-950/90 via-slate-950/50 to-transparent" />

        {/* Konten Hero */}
        <div className="relative z-10 mx-auto flex w-full max-w-7xl items-center gap-4 p-6 text-white lg:px-10 lg:pb-10">
          <Image
            src="/images/logo/logo.png"
            alt="RSKB Mitra Ariva"
            width={120}
            height={120}
            className="h-14 w-14 object-contain drop-shadow-md lg:h-20 lg:w-20"
            priority
          />
          <div className="space-y-1">
            <span className="text-havelock-blue-300 block text-xs font-bold tracking-widest uppercase">
              Informasi & Kesehatan
            </span>
            <h1 className="font-playfair text-2xl font-extrabold tracking-tight lg:text-4xl">
              Berita RSKB Mitra Ariva
            </h1>
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl grid-cols-1 gap-8 px-4 py-12 lg:grid-cols-3 lg:px-10">
        <div className="space-y-6 rounded-3xl border border-slate-100 bg-white p-5 shadow-xs sm:p-8 lg:col-span-2">
          <h2 className="font-playfair text-2xl leading-tight font-bold text-slate-950 sm:text-3xl lg:text-4xl">
            {detailBerita.judul}
          </h2>

          <div className="flex flex-col gap-4 border-y border-slate-100 py-4 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-xs text-slate-500 sm:text-sm">
              <div className="flex items-center gap-1.5">
                <Calendar className="text-havelock-blue-500 h-4 w-4" />
                <span>{formatTanggal(detailBerita.tanggal)}</span>
              </div>
              <span className="hidden text-slate-300 sm:inline">•</span>
              <div className="flex items-center gap-1.5">
                <div className="rounded-full bg-slate-100 p-1">
                  <User className="h-3.5 w-3.5 text-slate-600" />
                </div>
                <span className="font-medium text-slate-700">
                  {detailBerita.user.username}
                </span>
              </div>
            </div>

            <div className="flex items-center gap-3.5 text-xl">
              <span className="mr-1 text-xs font-semibold tracking-wider text-slate-400 uppercase">
                Ikuti Kami:
              </span>
              <a
                href="https://instagram.com/rskbmitraariva"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#E4405F] transition-transform duration-300 hover:scale-110"
              >
                <FaInstagram />
              </a>
              <a
                href="https://www.facebook.com/p/RSKB-Mitra-Ariva-100077028291181/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#1877F2] transition-transform duration-300 hover:scale-110"
              >
                <FaFacebook />
              </a>
              <a
                href="https://www.youtube.com/channel/UCjG64fMScEg1dIhQHTI4_fg"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#FF0000] transition-transform duration-300 hover:scale-110"
              >
                <FaYoutube />
              </a>
            </div>
          </div>

          <div className="relative aspect-video w-full overflow-hidden rounded-2xl shadow-xs">
            <Image
              src={detailBerita.gambar}
              alt={detailBerita.judul}
              fill
              sizes="(max-width: 1024px) 100vw, 800px"
              className="object-cover"
              priority
            />
          </div>

          <div
            className="prose prose-slate max-w-none space-y-4 text-sm leading-relaxed text-slate-700 sm:text-base [&_ol]:list-decimal [&_ol]:pl-5 [&_p]:text-justify [&_p]:leading-relaxed [&_strong]:font-semibold [&_strong]:text-slate-900 [&_ul]:list-disc [&_ul]:pl-5"
            dangerouslySetInnerHTML={{
              __html: detailBerita.isi,
            }}
          />
        </div>

        <aside className="lg:col-span-1">
          <div className="space-y-5 lg:sticky lg:top-24">
            <div className="border-havelock-blue-500 border-l-4 pl-3">
              <h3 className="font-playfair text-xl font-bold tracking-tight text-slate-900 lg:text-2xl">
                Berita Terkini
              </h3>
            </div>

            <div className="flex gap-4 overflow-x-auto p-2 lg:flex-col lg:overflow-visible">
              {dataBerita?.map((berita: IBerita) => (
                <div key={berita.id} className="min-w-70 lg:min-w-0">
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
        </aside>
      </section>
    </main>
  );
};

export default DetailBerita;
