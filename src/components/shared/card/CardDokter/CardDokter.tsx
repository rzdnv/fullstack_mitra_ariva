"use client";

import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { CalendarDays, Stethoscope } from "lucide-react";

interface PropTypes {
  _id: number;
  namaDokter: string;
  poli: string;
  spesialis: string;
  fotoDokter: string;
  Schedules: Array<{ Day: string; Time: string }>;
}

const CardDokter = (props: PropTypes) => {
  const { _id, Schedules, namaDokter, spesialis, fotoDokter, poli } = props;
  const router = useRouter();

  return (
    <div
      onClick={() => router.push(`/dokter/${_id}`)}
      className="group hover:border-havelock-blue-200 relative grid h-full cursor-pointer grid-cols-1 gap-5 rounded-2xl border border-slate-100 bg-white p-4 shadow-xs transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-slate-100 lg:grid-cols-2"
    >
      {/* Area Foto Dokter */}
      <div className="relative aspect-3/4 w-full overflow-hidden rounded-xl bg-slate-50 lg:h-full">
        <Image
          src={fotoDokter}
          alt={namaDokter}
          width={300}
          height={400}
          className="h-full w-full object-cover object-center transition-transform duration-500"
        />
      </div>

      {/* Area Detail Informasi */}
      <div className="flex flex-col p-1">
        <div className="space-y-3.5">
          {/* Nama & Spesialisasi Dokter */}
          <div className="space-y-1">
            <h3 className="font-DMSerif group-hover:text-havelock-blue-600 line-clamp-2 text-base text-slate-800 transition-colors duration-200 lg:text-lg">
              {namaDokter}
            </h3>
            <p className="text-[11px] font-semibold tracking-wider text-slate-400 uppercase">
              {spesialis}
            </p>
          </div>
          <div>
            <Badge
              variant="secondary"
              className="rounded-full border-none px-2.5 py-1 text-[10px] font-bold tracking-wider uppercase shadow-2xs"
            >
              <Stethoscope className="text-havelock-blue-500 h-4 w-4" />
              {poli}
            </Badge>
          </div>
        </div>

        <div className="border-t border-slate-100 pt-4">
          <div className="mb-2 flex items-center gap-1.5 text-[10px] font-bold tracking-widest text-slate-400 uppercase">
            <CalendarDays className="h-3.5 w-3.5 text-slate-400" />
            <span>Jadwal Praktik</span>
          </div>

          <div className="space-y-1.5">
            {Schedules.map((schedule, index) => (
              <div
                key={index}
                className="flex items-center justify-between rounded-lg bg-slate-50/70 px-2.5 py-1.5 text-xs text-slate-600 transition-colors duration-200 group-hover:bg-slate-50"
              >
                <span className="text-[11px] font-bold text-slate-700 uppercase">
                  {schedule.Day}
                </span>
                <span className="text-[11px] font-medium text-slate-500">
                  {schedule.Time}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardDokter;
