"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { Calendar, ArrowLeft, ArrowRight, ShieldCheck } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa"; // Pastikan react-icons/fa terinstal
import { formatTanggal } from "@/components/shared/formatted/formated";
import LoadingState from "@/components/shared/loadingstate/LoadingState";
import useDetailLayanan from "./useDetailLayanan";
import { ILayanan } from "@/types/layanan";
import CardService from "../home/component/Card/CardService/CardService";

const DetailLayanan = () => {
  const router = useRouter();
  const {
    dataLayanan,
    isLoadingLayanan,
    detailLayanan,
    isLoadingDetailLayanan,
  } = useDetailLayanan();

  const handleWhatsAppRedirect = () => {
    if (!detailLayanan) return;

    const phoneNumber = "6281245489477";

    const message =
      `Halo Admin RSKB Mitra Ariva, saya ingin berkonsultasi / mendaftar untuk layanan medis berikut:\n\n` +
      `*Nama Layanan:* ${detailLayanan.namaLayanan}\n\n` +
      `Mohon informasi mengenai jadwal kuota, estimasi durasi penanganan, dan persyaratan dokumen yang perlu saya siapkan. Terima kasih.`;

    const waUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(waUrl, "_blank", "noopener,noreferrer");
  };

  if (isLoadingDetailLayanan || isLoadingLayanan) {
    return <LoadingState judul="Memuat Detail Layanan" />;
  }

  const layananLainnya = dataLayanan?.filter(
    (item: ILayanan) => item.id !== detailLayanan?.id,
  );

  return (
    <main className="min-h-screen bg-slate-50/50 pb-20">
      <section
        className="relative flex min-h-[35vh] w-full items-end overflow-hidden bg-cover bg-center lg:min-h-[45vh]"
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
              className="h-12 w-12 object-contain lg:h-16 lg:w-16"
              priority
            />
          </div>

          <div className="space-y-1">
            <span className="text-havelock-blue-300 block text-xs font-bold tracking-widest uppercase sm:text-sm">
              ✦ Detail Layanan Medis
            </span>
            <h1 className="font-playfair text-2xl leading-tight font-bold tracking-tight sm:text-3xl lg:text-4xl">
              {detailLayanan?.namaLayanan}
            </h1>
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-6xl px-4 pt-6 sm:px-6 lg:px-8">
        <button
          onClick={() => router.back()}
          className="inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-4 py-2 text-xs font-semibold text-slate-600 shadow-2xs transition-all duration-200 hover:bg-slate-50 hover:text-slate-900 active:scale-98"
        >
          <ArrowLeft className="h-4 w-4" />
          <span>Kembali</span>
        </button>
      </div>

      <section className="mx-auto max-w-6xl px-4 pt-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-start gap-8 overflow-hidden rounded-3xl border border-slate-100 bg-white p-4 shadow-xs sm:p-8 md:grid-cols-12">
          <div className="mx-auto w-full max-w-md space-y-4 md:col-span-5 md:max-w-none lg:col-span-4">
            <div className="relative aspect-3/4 w-full overflow-hidden rounded-2xl border border-slate-100 bg-slate-50 shadow-sm">
              <Image
                src={detailLayanan?.foto}
                alt={detailLayanan?.namaLayanan}
                fill
                sizes="(max-width: 768px) 100vw, 400px"
                className="object-cover object-center"
                priority
              />
            </div>

            <button
              onClick={handleWhatsAppRedirect}
              className="inline-flex w-full items-center justify-center gap-2.5 rounded-2xl bg-emerald-600 py-3.5 text-sm font-bold text-white shadow-md shadow-emerald-100 transition-all duration-200 hover:bg-emerald-700 hover:shadow-lg active:scale-98"
            >
              <FaWhatsapp className="animate-pulse text-xl" />
              <span>Daftar / Hubungi Admin</span>
            </button>
          </div>

          <div className="space-y-6 md:col-span-7 lg:col-span-8">
            <div className="flex flex-wrap items-center gap-2 text-xs font-medium text-slate-400">
              <div className="flex items-center gap-1.5 rounded-lg border border-slate-100 bg-slate-50 px-2.5 py-1 text-slate-500">
                <Calendar className="text-havelock-blue-500 h-3.5 w-3.5" />
                <span>Rilis: {formatTanggal(detailLayanan?.createdAt)}</span>
              </div>
              <span className="text-slate-200">•</span>
              <span className="text-havelock-blue-600 flex items-center gap-1 font-bold tracking-wider uppercase">
                <ShieldCheck className="text-havelock-blue-500 h-3.5 w-3.5" />
                Program Resmi Rumah Sakit
              </span>
            </div>

            <div className="space-y-2">
              <h2 className="font-playfair text-2xl leading-tight font-bold text-slate-900 sm:text-3xl">
                {detailLayanan?.namaLayanan}
              </h2>
              <div className="bg-havelock-blue-500/30 h-0.5 w-16 rounded-full" />
            </div>

            <div
              className="prose prose-slate max-w-none space-y-4 text-sm leading-relaxed text-slate-700 sm:text-base [&_ol]:list-decimal [&_ol]:pl-5 [&_p]:text-justify [&_p]:leading-relaxed [&_strong]:font-semibold [&_strong]:text-slate-900 [&_ul]:list-disc [&_ul]:pl-5"
              dangerouslySetInnerHTML={{
                __html: detailLayanan?.deskripsi,
              }}
            />
          </div>
        </div>
      </section>

      {layananLainnya && layananLainnya.length > 0 && (
        <section className="mx-auto max-w-6xl px-4 pt-14 sm:px-6 lg:px-8">
          <div className="mb-6 flex items-center justify-between">
            <div className="border-havelock-blue-500 border-l-4 pl-3">
              <h2 className="font-playfair text-xl font-bold tracking-tight text-slate-900 sm:text-2xl">
                Layanan Medis Lainnya
              </h2>
            </div>
            <div className="hidden items-center gap-1 text-xs font-semibold tracking-wider text-slate-400 uppercase sm:flex">
              <span>Geser Kanan</span>
              <ArrowRight className="h-3.5 w-3.5" />
            </div>
          </div>

          <div className="scrollbar-none w-full snap-x snap-mandatory overflow-x-auto pt-1 pb-4">
            <div className="flex w-max gap-4 px-1">
              {layananLainnya.map((layanan: ILayanan) => (
                <div
                  key={layanan.id}
                  className="w-70 shrink-0 cursor-pointer snap-center transition-transform duration-300 hover:-translate-y-1"
                >
                  <CardService
                    foto={layanan.foto}
                    _id={layanan.id}
                    namaLayanan={layanan.namaLayanan}
                    deskripsi={layanan.deskripsi}
                  />
                </div>
              ))}
            </div>
          </div>
        </section>
      )}
    </main>
  );
};

export default DetailLayanan;
