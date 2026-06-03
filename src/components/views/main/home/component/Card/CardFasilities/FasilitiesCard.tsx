"use client";

import React from "react";
import {
  Stethoscope,
  Bed,
  Activity,
  ScanLine,
  FlaskConical,
  Pill,
} from "lucide-react";

type LayananCardProps = {
  title: string;
  desc: string;
  icon: React.ElementType;
};

export const LAYANAN_LIST = [
  {
    title: "IGD 24 Jam",
    desc: "Layanan gawat darurat siap melayani 24 jam secara intensif.",
    icon: Activity,
  },
  {
    title: "Rawat Inap",
    desc: "Fasilitas perawatan pasien dengan tingkat kenyamanan maksimal.",
    icon: Bed,
  },
  {
    title: "Kamar Operasi",
    desc: "Ruang operasi dengan standar sterilisasi tinggi dan teknologi modern.",
    icon: Stethoscope,
  },
  {
    title: "Radiologi",
    desc: "Pemeriksaan penunjang akurat seperti X-Ray digital dan ultrasonografi.",
    icon: ScanLine,
  },
  {
    title: "Laboratorium",
    desc: "Pemeriksaan diagnostik klinis terpadu dengan hasil yang cepat.",
    icon: FlaskConical,
  },
  {
    title: "Farmasi",
    desc: "Pelayanan penyediaan obat-obatan yang lengkap, aman, dan terpercaya.",
    icon: Pill,
  },
];

export function FasilitiesCard({ title, desc, icon: Icon }: LayananCardProps) {
  return (
    <div className="group flex h-full w-65 shrink-0 snap-center flex-col justify-between rounded-2xl border border-slate-100 bg-white p-6 shadow-xs transition-all duration-300 sm:w-full">
      <div>
        <div className="mb-5 w-fit rounded-xl border border-slate-100/80 bg-slate-50 p-3.5 transition-colors duration-300">
          <Icon className="h-6 w-6 text-slate-500 transition-colors duration-300" />
        </div>

        <h3 className="font-playfair mb-2 text-base font-bold text-slate-800 transition-colors duration-200 lg:text-lg">
          {title}
        </h3>

        <p className="mb-5 text-xs leading-relaxed text-slate-400 lg:text-sm">
          {desc}
        </p>
      </div>

      <div className="text-havelock-blue-600 mt-auto inline-flex items-center gap-2 border-t border-slate-50 pt-4 text-xs font-semibold">
        <span className="relative flex h-2 w-2">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75"></span>
          <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500"></span>
        </span>
        <span className="text-[11px] font-medium tracking-wide text-slate-400 uppercase transition-colors duration-200">
          Layanan Tersedia
        </span>
      </div>
    </div>
  );
}

export function FasilitiesList() {
  return (
    <>
      {LAYANAN_LIST.map((item, index) => (
        <FasilitiesCard key={index} {...item} />
      ))}
    </>
  );
}
