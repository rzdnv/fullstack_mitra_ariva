import { FasilitiesCard } from "@/components/shared/Card/CardFasilities/FasilitiesCard";
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

const FacilitiesSection = () => {
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
          <FasilitiesCard key={index} {...item} />
        ))}
      </div>
    </section>
  );
};

export default FacilitiesSection;
