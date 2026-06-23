"use client";

import Image from "next/image";
import {
  Stethoscope,
  Calendar,
  Clock,
  ArrowLeft,
  CheckCircle2,
  MessageCircle,
  PhoneCall,
} from "lucide-react";
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
        className="relative flex min-h-[40vh] w-full items-end overflow-hidden bg-cover bg-center lg:min-h-[48vh]"
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
              className="h-13 w-13 object-contain lg:h-18 lg:w-18"
              priority
            />
          </div>

          <div className="space-y-1">
            <span className="text-havelock-blue-300 block text-xs font-bold tracking-widest uppercase sm:text-sm">
              ✦ Profil & Spesialisasi Dokter
            </span>
            <h1 className="font-DMSerif text-2xl leading-tight tracking-tight sm:text-3xl lg:text-4xl">
              {detailDokter.nama}
            </h1>
          </div>
        </div>
      </section>

      {/* Tombol Kembali */}
      <div className="mx-auto max-w-7xl px-4 pt-6 lg:px-10">
        <button
          onClick={() => router.back()}
          className="inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-4 py-2 text-xs font-semibold text-slate-600 shadow-2xs transition-all duration-200 hover:bg-slate-50 hover:text-slate-900 active:scale-98"
        >
          <ArrowLeft className="h-4 w-4" />
          <span>Kembali</span>
        </button>
      </div>

      {/* Konten Utama */}
      <section className="mx-auto max-w-7xl px-4 py-6 lg:px-10">
        <div className="rounded-3xl border border-slate-200 bg-white p-5 shadow-xs sm:p-8">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-5">
            {/* KOLOM KIRI: FOTO, PENDAFTARAN & JADWAL (DESKTOP) */}
            <div className="space-y-6 md:col-span-2">
              <div className="relative aspect-3/4 w-full overflow-hidden rounded-2xl border border-slate-200 shadow-xs">
                <Image
                  src={detailDokter.foto}
                  alt={detailDokter.nama}
                  fill
                  sizes="(max-width: 768px) 100vw, 400px"
                  className="object-cover object-center"
                  priority
                />
              </div>

              {/* Area Pendaftaran (Muncul di bawah foto untuk Desktop, Tersembunyi di Mobile) */}
              <div className="hidden space-y-3 border-t border-slate-200 pt-4 md:block">
                <h4 className="text-xs font-bold tracking-widest text-slate-400 uppercase">
                  Pendaftaran & Janji Temu Online:
                </h4>
                <div className="grid grid-cols-1 gap-2.5">
                  <a
                    href="https://play.google.com/store/apps/details?id=app.bpjs.mobile"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 rounded-xl bg-sky-600 px-4 py-2.5 text-xs font-bold text-white shadow-xs transition-all hover:bg-sky-700 active:scale-98"
                  >
                    <PhoneCall className="h-4 w-4" />
                    <span>Registrasi via Mobile JKN</span>
                  </a>
                  <a
                    href={`https://wa.me/6281245489477?text=${encodeURIComponent(
                      `Halo Admin Customer Care RSKB Mitra Ariva,\n\n` +
                        `Saya ingin berkonsultasi / mendaftar janji temu online dengan dokter spesialis berikut:\n\n` +
                        `*Nama Dokter:* ${detailDokter.nama}\n` +
                        `*Spesialisasi:* ${detailDokter.spesialis}\n` +
                        `*Poliklinik:* ${detailDokter.poli?.namaPoli || "-"}\n\n` +
                        `Mohon informasi mengenai kuota ketersediaan pasien umum/asuransi hari ini, berkas persyaratan yang perlu disiapkan, serta estimasi jam kedatangan. Terima kasih.`,
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 rounded-xl bg-emerald-600 px-4 py-2.5 text-xs font-bold text-white shadow-xs transition-all hover:bg-emerald-700 active:scale-98"
                  >
                    <MessageCircle className="h-4 w-4" />
                    <span>Chat WhatsApp Customer Care</span>
                  </a>
                </div>
              </div>

              {/* Jadwal Praktik Dokter (Muncul di bawah Pendaftaran untuk Desktop, Tersembunyi di Mobile) */}
              <div className="hidden space-y-3.5 border-t border-slate-200 pt-4 md:block">
                <div className="flex items-center gap-2 pb-1">
                  <Calendar className="h-4 w-4 text-slate-400" />
                  <h4 className="font-DMSerif text-lg text-slate-900">
                    Jadwal Praktik Dokter
                  </h4>
                </div>

                <div className="grid grid-cols-1 gap-2">
                  {detailDokter.jadwal && detailDokter.jadwal.length > 0 ? (
                    detailDokter.jadwal.map((jdwl: IJadwal) => (
                      <div
                        key={jdwl.id}
                        className="hover:bg-havelock-blue-50/30 flex items-center justify-between rounded-xl border border-slate-200 bg-slate-50/50 px-3.5 py-2.5 transition-all duration-200 hover:translate-x-0.5"
                      >
                        <span className="text-xs font-bold tracking-wide text-slate-700 uppercase">
                          {jdwl.hari}
                        </span>
                        <div className="shadow-3xs flex items-center gap-1.5 rounded-lg border border-slate-200 bg-white px-2 py-1 text-xs font-semibold text-slate-600">
                          <Clock className="h-3.5 w-3.5 text-slate-400" />
                          <span>
                            {jdwl.jamMulai} - {jdwl.jamSelesai}
                          </span>
                        </div>
                      </div>
                    ))
                  ) : (
                    <p className="py-2 text-xs text-slate-400 italic">
                      Tidak ada jadwal praktik aktif saat ini.
                    </p>
                  )}
                </div>
              </div>
            </div>

            {/* KOLOM KANAN: IDENTITAS, DESKRIPSI & SOSIAL MEDIA */}
            <div className="flex flex-col justify-between space-y-6 md:col-span-3">
              <div className="space-y-5">
                <div className="space-y-1">
                  <h2 className="font-DMSerif text-2xl leading-tight text-slate-950 sm:text-3xl">
                    {detailDokter.nama}
                  </h2>
                  <p className="text-xs font-semibold tracking-wider text-slate-400 uppercase">
                    {detailDokter.spesialis}
                  </p>
                </div>

                {/* Badge Poliklinik & Asuransi */}
                <div className="flex flex-wrap items-center gap-2 border-b border-slate-200 pb-4">
                  <div className="flex items-center gap-1.5 rounded-full bg-slate-100 px-3 py-1 text-xs font-bold text-slate-700 uppercase">
                    <Stethoscope className="text-havelock-blue-500 h-3.5 w-3.5" />
                    <span>{detailDokter.poli?.namaPoli}</span>
                  </div>
                  <div className="flex items-center gap-1 rounded-full border border-sky-100 bg-sky-50 px-2.5 py-1 text-xs font-semibold text-sky-600">
                    <CheckCircle2 className="h-3.5 w-3.5" /> Menerima BPJS
                  </div>
                  <div className="flex items-center gap-1 rounded-full border border-emerald-100 bg-emerald-50 px-2.5 py-1 text-xs font-semibold text-emerald-600">
                    <CheckCircle2 className="h-3.5 w-3.5" /> Umum & Swasta
                  </div>
                </div>

                {/* ALUR KHUSUS MOBILE: Pendaftaran -> Jadwal -> Deskripsi */}
                <div className="block space-y-5 md:hidden">
                  {/* Pendaftaran Mobile */}
                  <div className="space-y-2">
                    <h4 className="text-xs font-bold tracking-widest text-slate-400 uppercase">
                      Pendaftaran & Janji Temu Online:
                    </h4>
                    <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
                      <a
                        href="https://play.google.com/store/apps/details?id=app.bpjs.mobile"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-2 rounded-xl bg-sky-600 px-4 py-2.5 text-xs font-bold text-white"
                      >
                        <PhoneCall className="h-4 w-4" />
                        <span>Registrasi via Mobile JKN</span>
                      </a>
                      <a
                        href={`https://wa.me/6281245489477?text=${encodeURIComponent(
                          `Halo Admin Customer Care RSKB Mitra Ariva,\n\n` +
                            `Saya ingin berkonsultasi / mendaftar janji temu online dengan dokter spesialis berikut:\n\n` +
                            `*Nama Dokter:* ${detailDokter.nama}\n` +
                            `*Spesialisasi:* ${detailDokter.spesialis}\n` +
                            `*Poliklinik:* ${detailDokter.poli?.namaPoli || "-"}\n\n` +
                            `Mohon informasi mengenai kuota ketersediaan pasien umum/asuransi hari ini, berkas persyaratan yang perlu disiapkan, serta estimasi jam kedatangan. Terima kasih.`,
                        )}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-2 rounded-xl bg-emerald-600 px-4 py-2.5 text-xs font-bold text-white"
                      >
                        <MessageCircle className="h-4 w-4" />
                        <span>Chat WhatsApp Customer Care</span>
                      </a>
                    </div>
                  </div>

                  {/* Jadwal Mobile */}
                  <div className="space-y-3 border-t border-slate-200 pt-4">
                    <div className="flex items-center gap-2 pb-1">
                      <Calendar className="h-4 w-4 text-slate-400" />
                      <h4 className="font-DMSerif text-lg text-slate-900">
                        Jadwal Praktik Dokter
                      </h4>
                    </div>
                    <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
                      {detailDokter.jadwal && detailDokter.jadwal.length > 0 ? (
                        detailDokter.jadwal.map((jdwl: IJadwal) => (
                          <div
                            key={jdwl.id}
                            className="flex items-center justify-between rounded-xl border border-slate-200 bg-slate-50/50 px-3 py-2"
                          >
                            <span className="text-xs font-bold text-slate-700 uppercase">
                              {jdwl.hari}
                            </span>
                            <div className="flex items-center gap-1.5 rounded-lg border border-slate-200 bg-white px-2 py-1 text-xs font-semibold text-slate-600">
                              <Clock className="h-3.5 w-3.5 text-slate-400" />
                              <span>
                                {jdwl.jamMulai} - {jdwl.jamSelesai}
                              </span>
                            </div>
                          </div>
                        ))
                      ) : (
                        <p className="py-2 text-xs text-slate-400 italic">
                          Tidak ada jadwal praktik aktif saat ini.
                        </p>
                      )}
                    </div>
                  </div>
                </div>

                {/* Deskripsi Profil HTML Editor */}
                <div className="prose-custom-layanan border-t border-slate-200 pt-4 md:border-none md:pt-0">
                  <div
                    dangerouslySetInnerHTML={{
                      __html: detailDokter.deskripsi,
                    }}
                  />
                </div>
              </div>

              {/* SOSIAL MEDIA RS (Paling Bawah Card Kanan) */}
              <div className="border-t border-slate-200 pt-4">
                <div className="flex items-center gap-3.5 pt-1 text-xl">
                  <span className="text-[11px] font-bold tracking-wider text-slate-400 uppercase">
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
        </div>
      </section>
    </main>
  );
};

export default DetailDokter;
