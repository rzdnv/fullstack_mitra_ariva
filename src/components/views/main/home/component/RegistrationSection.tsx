"use client";

import { Smartphone, PhoneCall, CheckCircle2, ArrowRight } from "lucide-react";
import Image from "next/image";
import { FaWhatsapp } from "react-icons/fa";

const RegistrationSection = () => {
  const handleMobileJKNRedirect = () => {
    window.open(
      "https://play.google.com/store/apps/details?id=app.bpjs.mobile&gl=US&pli=1",
      "_blank",
      "noopener,noreferrer",
    );
  };

  const handleCustomerCareRedirect = () => {
    const phoneNumber = "6281245489477";
    const message =
      "Halo Customer Care RSKB Mitra Ariva, saya ingin menanyakan informasi mengenai pendaftaran online pasien.";

    const waUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(waUrl, "_blank", "noopener,noreferrer");
  };

  return (
    <section className="w-full px-6 py-16 md:px-20 lg:py-28">
      <div className="flex flex-col items-center gap-4">
        <p className="text-havelock-blue-500 text-center tracking-tight md:text-xl">
          ✦ Sistem Pendaftaran Online
        </p>
        <h2 className="font-DMSerif max-w-4xl text-center text-3xl text-slate-800 md:text-5xl">
          Pilih Jalur Pendaftaran Mudah Sesuai Jaminan Kesehatan Anda
        </h2>
      </div>

      {/* GRID KARTU UTAMA */}
      <div className="mx-auto mt-14 grid w-full max-w-5xl grid-cols-1 gap-8 sm:grid-cols-2">
        <div
          onClick={handleMobileJKNRedirect}
          className="group relative flex cursor-pointer flex-col justify-between overflow-hidden rounded-3xl border border-slate-100 bg-white p-6 shadow-xs transition-all duration-300 hover:-translate-y-1 hover:border-sky-200 hover:shadow-md md:p-8"
        >
          <div className="absolute inset-0 z-0 bg-linear-to-br from-sky-50/0 to-sky-50/60 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

          <div className="relative z-10 space-y-5">
            <div className="flex items-center justify-between">
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl border border-slate-100 bg-slate-50 p-2 shadow-2xs">
                <Image
                  src="/images/logo/mjkn.svg"
                  alt="Logo Mobile JKN"
                  width={32}
                  height={32}
                  className="object-contain"
                />
              </div>
              <span className="rounded-full bg-sky-50 px-3 py-1 text-xs font-semibold text-sky-600">
                Rekomendasi BPJS
              </span>
            </div>

            <div className="space-y-2">
              <h3 className="font-DMSerif text-2xl text-slate-800">
                Mobile JKN
              </h3>
              <p className="text-sm leading-relaxed text-slate-500">
                Solusi terbaik untuk pasien jaminan BPJS Kesehatan. Ambil nomor
                antrean faskes secara mandiri dan pantau pergerakan loket
                langsung secara real-time.
              </p>
            </div>

            <ul className="space-y-2 pt-2 text-xs font-medium text-slate-600">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-sky-500" /> Antrean
                Elektronik Mandiri
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-sky-500" /> Cek
                Ketersediaan Kamar Inap
              </li>
            </ul>
          </div>

          <div className="relative z-10 mt-8 flex items-center justify-between border-t border-slate-100 pt-4">
            <span className="text-xs font-bold tracking-wider text-sky-600 uppercase">
              Unduh Aplikasi Resmi
            </span>
            <ArrowRight className="h-4 w-4 text-slate-400 transition-transform duration-200 group-hover:translate-x-1" />
          </div>
        </div>

        <div
          onClick={handleCustomerCareRedirect}
          className="group relative flex cursor-pointer flex-col justify-between overflow-hidden rounded-3xl border border-slate-100 bg-white p-6 shadow-xs transition-all duration-300 hover:-translate-y-1 hover:border-emerald-200 hover:shadow-md md:p-8"
        >
          <div className="absolute inset-0 z-0 bg-linear-to-br from-emerald-50/0 to-emerald-50/40 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

          <div className="relative z-10 space-y-5">
            <div className="flex items-center justify-between">
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-600 text-white shadow-xs">
                <FaWhatsapp className="h-6 w-6" />
              </div>
              <span className="rounded-full bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-600">
                Respon Cepat Humas
              </span>
            </div>

            <div className="space-y-2">
              <h3 className="font-DMSerif text-2xl text-slate-800">
                Customer Care
              </h3>
              <p className="text-sm leading-relaxed text-slate-500">
                Lebih nyaman berkonsultasi langsung? Tim petugas humas kami siap
                memvalidasi data pendaftaran umum, asuransi swasta, serta jadwal
                dokter pilihan Anda via WhatsApp.
              </p>
            </div>

            <ul className="space-y-2 pt-2 text-xs font-medium text-slate-600">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-emerald-500" /> Bantuan
                Asistensi Petugas
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-emerald-500" /> Validasi
                Berkas & Jadwal Poli
              </li>
            </ul>
          </div>

          <div className="relative z-10 mt-8 flex items-center justify-between border-t border-slate-100 pt-4">
            <span className="text-xs font-bold tracking-wider text-emerald-600 uppercase">
              Mulai Obrolan WhatsApp
            </span>
            <ArrowRight className="h-4 w-4 text-slate-400 transition-transform duration-200 group-hover:translate-x-1" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default RegistrationSection;
