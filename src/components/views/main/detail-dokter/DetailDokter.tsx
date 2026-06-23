"use client";

import Image from "next/image";
import { Stethoscope, Calendar, Clock, ArrowLeft } from "lucide-react";
import { FaInstagram, FaFacebook, FaYoutube } from "react-icons/fa";

import useDetailDokter from "./useDetailDokter";
import LoadingState from "@/components/shared/loadingstate/LoadingState";
import { IJadwal } from "@/types/jadwal";
import { useRouter } from "next/navigation";

const DetailDokter = () => {
  const { detailDokter, isLoadingDetailDokter } = useDetailDokter();

  const router = useRouter();

  if (isLoadingDetailDokter) {
    return <LoadingState judul="Memuat Profil Dokter" />;
  }

  if (!detailDokter) return null;

  return (
    <main className="min-h-screen bg-slate-50/50 pb-16">
      {/* Hero Section */}
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
              ✦ Profil & Spesialisasi Dokter
            </span>
            <h1 className="font-DMSerif text-2xl leading-tight tracking-tight sm:text-3xl lg:text-5xl">
              {detailDokter.nama}
            </h1>
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-6xl px-4 pt-6 md:px-0">
        <button
          onClick={() => router.back()}
          className="inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-4 py-2 text-xs font-semibold text-slate-600 shadow-2xs transition-all duration-200 hover:bg-slate-50 hover:text-slate-900 active:scale-98"
        >
          <ArrowLeft className="h-4 w-4" />
          <span>Kembali</span>
        </button>
      </div>

      <section className="mx-auto max-w-7xl px-4 py-8 lg:px-10">
        <div className="rounded-3xl border border-slate-100 bg-white p-5 shadow-xs sm:p-8">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-5">
            <div className="md:col-span-2">
              <div className="relative aspect-3/4 w-full overflow-hidden rounded-2xl border border-slate-100 shadow-sm">
                <Image
                  src={detailDokter.foto}
                  alt={detailDokter.nama}
                  fill
                  sizes="(max-width: 768px) 100vw, 400px"
                  className="object-cover object-center"
                  priority
                />
              </div>
              <div className="hidden space-y-3 border-slate-100 pt-5 md:block">
                <h4 className="font-DMSerif text-xl text-slate-900 md:text-2xl">
                  Jadwal Praktik Dokter
                </h4>

                <div className="grid grid-cols-1 gap-3">
                  {detailDokter.jadwal && detailDokter.jadwal.length > 0 ? (
                    detailDokter.jadwal.map((jdwl: IJadwal) => (
                      <div
                        key={jdwl.id}
                        className="flex flex-col justify-between rounded-2xl border border-slate-50 bg-slate-50/50 p-3 ring-1 ring-slate-200 transition-colors hover:bg-slate-50"
                      >
                        <div className="mb-2 flex items-center gap-2">
                          <Calendar className="h-4 w-4 text-slate-500" />
                          <span className="text-sm font-bold tracking-wide text-slate-800">
                            {jdwl.hari}
                          </span>
                        </div>
                        <div className="flex w-fit items-center gap-1.5 rounded-xl border border-slate-100 bg-white px-2.5 py-1.5 text-xs font-semibold text-slate-600">
                          <Clock className="h-3.5 w-3.5 text-slate-400" />
                          <span>
                            {jdwl.jamMulai} - {jdwl.jamSelesai}
                          </span>
                        </div>
                      </div>
                    ))
                  ) : (
                    <p className="py-2 text-sm text-slate-500 sm:col-span-2 lg:col-span-3">
                      Tidak ada jadwal praktik saat ini.
                    </p>
                  )}
                </div>
              </div>
            </div>

            <div className="flex flex-col justify-between space-y-6 md:col-span-3">
              <div className="space-y-5">
                <div className="space-y-1">
                  <h2 className="font-DMSerif text-2xl leading-tight text-slate-950 sm:text-3xl">
                    {detailDokter.nama}
                  </h2>
                  <p className="text-sm font-semibold text-slate-500 lg:text-base">
                    {detailDokter.spesialis}
                  </p>
                </div>

                <div className="flex flex-wrap items-center gap-2">
                  <div className="flex items-center gap-1.5 rounded-full bg-slate-100 px-3 py-1 text-xs sm:text-sm">
                    <Stethoscope className="text-havelock-blue-500 h-4 w-4" />
                    <span className="font-medium text-slate-700">
                      {detailDokter.poli?.namaPoli}
                    </span>
                  </div>
                </div>

                <div className="prose prose-slate max-w-none border-t border-slate-100 pt-4 text-sm leading-relaxed text-slate-600 sm:text-base">
                  {/* <h4 className="font-DMSerif mb-2 text-base text-slate-900">
                    Tentang Dokter
                  </h4> */}
                  <div
                    className="prose prose-slate max-w-none space-y-4 text-sm leading-relaxed text-slate-700 sm:text-base [&_ol]:list-decimal [&_ol]:pl-5 [&_p]:text-justify [&_p]:leading-relaxed [&_strong]:font-semibold [&_strong]:text-slate-900 [&_ul]:list-disc [&_ul]:pl-5"
                    dangerouslySetInnerHTML={{
                      __html: detailDokter.deskripsi,
                    }}
                  />
                </div>

                <div className="block space-y-3 border-t border-slate-100 pt-5 md:hidden">
                  <h4 className="font-DMSerif text-xl text-slate-900 md:text-2xl">
                    Jadwal Praktik Dokter
                  </h4>

                  <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
                    {detailDokter.jadwal && detailDokter.jadwal.length > 0 ? (
                      detailDokter.jadwal.map((jdwl: IJadwal) => (
                        <div
                          key={jdwl.id}
                          className="flex flex-col justify-between rounded-2xl border border-slate-50 bg-slate-50/50 p-3 ring-1 ring-slate-200 transition-colors hover:bg-slate-50"
                        >
                          <div className="mb-2 flex items-center gap-2">
                            <Calendar className="h-4 w-4 text-slate-500" />
                            <span className="text-sm font-bold tracking-wide text-slate-800">
                              {jdwl.hari}
                            </span>
                          </div>
                          <div className="flex w-fit items-center gap-1.5 rounded-xl border border-slate-100 bg-white px-2.5 py-1.5 text-xs font-semibold text-slate-600">
                            <Clock className="h-3.5 w-3.5 text-slate-400" />
                            <span>
                              {jdwl.jamMulai} - {jdwl.jamSelesai}
                            </span>
                          </div>
                        </div>
                      ))
                    ) : (
                      <p className="py-2 text-sm text-slate-500 sm:col-span-2 lg:col-span-3">
                        Tidak ada jadwal praktik saat ini.
                      </p>
                    )}
                  </div>
                </div>
              </div>

              <div className="mt-6 flex items-center gap-3.5 border-t border-slate-100 pt-4 text-xl">
                <span className="text-xs font-semibold tracking-wider text-slate-400 uppercase">
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
          </div>
        </div>
      </section>
    </main>
  );
};

export default DetailDokter;
