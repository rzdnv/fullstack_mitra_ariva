"use client";

import Image from "next/image";
import { User } from "lucide-react";
import { FaInstagram, FaFacebook, FaYoutube } from "react-icons/fa";

import { formatTanggal } from "@/components/shared/formatted/formated";
import useDetailBerita from "./useDetailBerita";

import { IBerita } from "@/types/berita";
import LoadingState from "@/components/shared/loadingstate/LoadingState";
import CardNews from "@/components/shared/card/CardNews/CardNews";

const DetailBerita = () => {
  const { dataBerita, detailBerita, isLoadingDetailBerita } = useDetailBerita();

  // Loading State
  if (isLoadingDetailBerita) {
    return <LoadingState judul="Memuat Berita" />;
  }

  return (
    <main className="bg-white">
      {/* Hero */}
      <section
        className="relative flex min-h-[40vh] w-full items-end overflow-hidden bg-cover bg-center lg:min-h-[50vh]"
        style={{
          backgroundImage: `url(${detailBerita.gambar})`,
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/40 to-transparent" />

        {/* Content */}
        <div className="relative z-10 flex items-center gap-4 p-6 text-white lg:p-10">
          <Image
            src="/images/logo/logo.png"
            alt="RSKB Mitra Ariva"
            width={400}
            height={400}
            className="h-16 w-16 object-contain lg:h-24 lg:w-24"
          />

          <h1 className="text-3xl font-bold lg:text-5xl">Berita</h1>
        </div>
      </section>

      {/* Main Content */}
      <section className="grid grid-cols-1 gap-10 px-6 py-10 lg:grid-cols-3 lg:px-10">
        {/* Left Content */}
        <div className="space-y-6 lg:col-span-2 lg:space-y-8">
          {/* Title */}
          <h2 className="font-DMSerif text-center text-3xl leading-tight text-slate-900 lg:text-left lg:text-5xl">
            {detailBerita.judul}
          </h2>

          {/* Thumbnail */}
          <div className="space-y-4">
            <div className="aspect-video w-full overflow-hidden rounded-2xl">
              <Image
                src={detailBerita.gambar}
                alt={detailBerita.judul}
                width={1200}
                height={700}
                className="h-full w-full object-cover"
              />
            </div>

            {/* Meta */}
            <div className="flex flex-col gap-4 border-b border-slate-200 pb-4 lg:flex-row lg:items-center lg:justify-between">
              {/* Left */}
              <div className="flex flex-wrap items-center gap-2 text-sm text-slate-500">
                <p>{formatTanggal(detailBerita.tanggal)}</p>

                <span>•</span>

                <div className="flex items-center gap-1">
                  <User className="h-4 w-4" />

                  <p>{detailBerita.user.username}</p>
                </div>
              </div>

              {/* Social Media */}
              <div className="flex items-center gap-4 text-2xl">
                <a
                  href="https://instagram.com/rskbmitraariva"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaInstagram className="cursor-pointer text-[#E4405F] transition-all duration-300 hover:scale-110 hover:opacity-80" />
                </a>

                <a
                  href="https://www.facebook.com/p/RSKB-Mitra-Ariva-100077028291181/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaFacebook className="cursor-pointer text-[#1877F2] transition-all duration-300 hover:scale-110 hover:opacity-80" />
                </a>

                <a
                  href="https://www.youtube.com/channel/UCjG64fMScEg1dIhQHTI4_fg"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaYoutube className="cursor-pointer text-[#FF0000] transition-all duration-300 hover:scale-110 hover:opacity-80" />
                </a>
              </div>
            </div>
          </div>

          {/* Content */}
          <div
            className="article-content"
            dangerouslySetInnerHTML={{
              __html: detailBerita.isi,
            }}
          />
        </div>

        {/* Right Sidebar */}
        <aside className="space-y-4 lg:col-span-1">
          <h2 className="text-2xl font-bold text-slate-900 lg:text-3xl">
            Berita Terkini
          </h2>

          <div className="flex gap-4 overflow-x-auto pb-2 lg:flex-col lg:overflow-visible">
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
        </aside>
      </section>
    </main>
  );
};

export default DetailBerita;
