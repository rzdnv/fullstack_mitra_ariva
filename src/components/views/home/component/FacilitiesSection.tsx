import {
  Stethoscope,
  Bed,
  Activity,
  ScanLine,
  FlaskConical,
  Pill,
} from "lucide-react";

export const LAYANAN_LIST = [
  {
    title: "IGD 24 Jam",
    desc: "Layanan gawat darurat siap melayani 24 jam",
    icon: Activity,
  },
  {
    title: "Rawat Inap",
    desc: "Fasilitas perawatan pasien dengan kenyamanan maksimal",
    icon: Bed,
  },
  {
    title: "Kamar Operasi",
    desc: "Ruang operasi dengan teknologi medis modern",
    icon: Stethoscope,
  },
  {
    title: "Radiologi",
    desc: "Pemeriksaan penunjang seperti X-Ray dan CT Scan",
    icon: ScanLine,
  },
  {
    title: "Laboratorium",
    desc: "Pemeriksaan diagnostik dengan hasil akurat",
    icon: FlaskConical,
  },
  {
    title: "Farmasi",
    desc: "Pelayanan obat lengkap dan terpercaya",
    icon: Pill,
  },
];

type LayananCardProps = {
  title: string;
  desc: string;
  icon: React.ElementType;
};

export function LayananCard({ title, desc, icon: Icon }: LayananCardProps) {
  return (
    <div className="border-havelock-blue-400 rounded-2xl border bg-white p-6 shadow-md">
      {/* Icon */}
      <div className="mb-4 w-fit rounded-xl bg-slate-100 p-4">
        <Icon className="text-havelock-blue-600 h-6 w-6" />
      </div>

      {/* Title */}
      <h3 className="mb-2 font-bold text-slate-800 lg:text-lg">{title}</h3>

      {/* Desc */}
      <p className="mb-4 text-xs leading-relaxed text-slate-500 lg:text-sm">
        {desc}
      </p>

      {/* Info */}
      <div className="text-havelock-blue-600 flex items-center gap-2 text-xs font-medium lg:text-sm">
        <span className="h-2 w-2 rounded-full bg-yellow-500" />
        Layanan Tersedia
      </div>
    </div>
  );
}
// import { LAYANAN_LIST } from "./layanan.data";
// import { LayananCard } from "./LayananCard";

export default function LayananSection() {
  return (
    <section className="flex w-full flex-col gap-4 px-6 py-20 lg:gap-10 lg:px-20">
      <div className="flex flex-col gap-4">
        <p className="text-havelock-blue-500 tracking-tight md:text-xl">
          ✦ Fasilitas Pelayanan
        </p>
        <h1 className="font-DMSerif max-w-4xl text-3xl text-slate-800 md:text-5xl">
          Kenyamanan Anda adalah Prioritas Utama Kami
        </h1>
      </div>
      <div className="grid grid-cols-2 gap-4 lg:grid-cols-3 lg:gap-6">
        {LAYANAN_LIST.map((item, index) => (
          <LayananCard key={index} {...item} />
        ))}
      </div>
    </section>
  );
}
