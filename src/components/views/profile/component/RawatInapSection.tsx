import {
  LucideIcon,
  BedDouble,
  Star,
  ShieldPlus,
  Users,
  Activity,
  Shield,
} from "lucide-react";

type RawatInapItem = {
  title: string;
  bedCount: number;
  icon: LucideIcon;
};

export const RAWAT_INAP_LIST: RawatInapItem[] = [
  { title: "VIP", bedCount: 2, icon: Star },
  { title: "Kelas 1", bedCount: 3, icon: BedDouble },
  { title: "Kelas 2", bedCount: 4, icon: Users },
  { title: "Kelas 3", bedCount: 12, icon: Users },
  { title: "ICU", bedCount: 2, icon: Activity },
  { title: "Ruang Isolasi", bedCount: 2, icon: ShieldPlus },
];

type RawatInapCardProps = {
  title: string;
  bedCount: number;
  icon: LucideIcon;
};

export function RawatInapCard({
  title,
  bedCount,
  icon: Icon,
}: RawatInapCardProps) {
  return (
    <div className="rounded-2xl border bg-white p-6 shadow-sm">
      {/* Icon */}
      <div className="mb-4 w-fit rounded-xl bg-slate-100 p-4">
        <Icon className="text-havelock-blue-600 h-6 w-6" />
      </div>

      {/* Title */}
      <h3 className="mb-2 text-lg font-bold text-slate-800">{title}</h3>

      {/* Info */}
      <p className="mb-4 text-sm text-slate-500">
        Kapasitas tempat tidur tersedia
      </p>

      {/* Bed Count */}
      <div className="text-havelock-blue-600 flex items-center gap-2 text-sm font-semibold">
        <span className="h-2 w-2 rounded-full bg-yellow-500" />
        {bedCount} Tempat Tidur
      </div>
    </div>
  );
}

export default function RawatInapSection() {
  return (
    <section className="w-full px-6 py-10">
      <div className="mb-6">
        <p className="text-havelock-blue-500 tracking-tight md:text-xl">
          ✦ Ruang Rawat Inap
        </p>
        <h1 className="font-DMSerif max-w-4xl text-3xl text-slate-800 md:text-5xl">
          Kenyamanan Layaknya di Rumah untuk Pemulihan Optimal
        </h1>
      </div>

      <div className="grid grid-cols-2 gap-4 lg:grid-cols-3">
        {RAWAT_INAP_LIST.map((item, index) => (
          <RawatInapCard key={index} {...item} />
        ))}
      </div>
    </section>
  );
}
