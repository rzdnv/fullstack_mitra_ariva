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

  const BeritaLainnya = dataBerita?.filter(
    (item: IBerita) => item.id !== detailBerita?.id,
  );

  return (
    <main className="min-h-screen bg-slate-50/50 pb-16">
      <section
        className="relative flex min-h-[45vh] w-full items-end overflow-hidden bg-cover bg-center lg:min-h-[55vh]"
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
              ✦ Informasi & Kesehatan
            </span>
            <h1 className="font-DMSerif text-2xl leading-tight tracking-tight sm:text-3xl lg:text-5xl">
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
                <span>{formatTanggal(detailBerita.createdAt)}</span>
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

          {detailBerita.dokter && (
            <div className="group hover:border-havelock-blue-200 relative mt-10 flex flex-col justify-between gap-5 overflow-hidden rounded-2xl border border-slate-100 bg-linear-to-br from-slate-50 to-white p-5 shadow-xs ring-1 ring-slate-200 transition-all duration-300 hover:shadow-md sm:flex-row sm:items-center md:p-6">
              <div className="bg-havelock-blue-500 absolute top-0 left-0 h-full w-1 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

              <div className="flex items-center gap-4 md:gap-5">
                <div className="group-hover:border-havelock-blue-400 relative h-16 w-16 shrink-0 overflow-hidden rounded-full border-2 border-slate-200/80 bg-slate-50 p-0.5 shadow-2xs transition-transform duration-300 lg:h-20 lg:w-20">
                  <div className="relative h-full w-full overflow-hidden rounded-full">
                    <Image
                      src={detailBerita.dokter.foto}
                      alt={detailBerita.dokter.nama}
                      fill
                      className="object-cover object-center"
                      priority
                    />
                  </div>
                </div>

                <div className="space-y-1">
                  <div className="bg-havelock-blue-50 text-havelock-blue-600 inline-flex items-center gap-1.5 rounded-md px-2 py-0.5 text-[10px] font-medium tracking-wider uppercase">
                    <span className="bg-havelock-blue-500 h-1 w-1 animate-pulse rounded-full" />
                    Penulis & Peninjau Medis
                  </div>

                  <h4 className="font-DMSerif group-hover:text-havelock-blue-600 text-base text-slate-800 transition-colors duration-200 lg:text-lg">
                    {detailBerita.dokter.nama}
                  </h4>

                  <div className="flex flex-col gap-0.5 text-xs text-slate-500 lg:text-sm">
                    <p className="font-semibold text-emerald-600">
                      {detailBerita.dokter.spesialis}
                    </p>
                    {detailBerita.dokter.poli && (
                      <p className="flex items-center gap-1">
                        <span>Unit Layanan:</span>
                        <span className="font-medium text-slate-700">
                          {detailBerita.dokter.poli.namaPoli}
                        </span>
                      </p>
                    )}
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        <aside className="lg:col-span-1">
          <div className="space-y-5 lg:sticky lg:top-24">
            <div className="border-havelock-blue-500 border-l-4 pl-3">
              <h3 className="font-playfair text-xl font-bold tracking-tight text-slate-900 lg:text-2xl">
                Berita Terkini
              </h3>
            </div>

            <div className="flex gap-4 overflow-x-auto p-2 lg:flex-col lg:overflow-visible">
              {BeritaLainnya?.map((berita: IBerita) => (
                <div key={berita.id} className="min-w-70 lg:min-w-0">
                  <CardNews
                    _id={berita.id}
                    gambar={`${berita.gambar}`}
                    judul={berita.judul}
                    isi={berita.isi}
                    tanggal={berita.createdAt}
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
