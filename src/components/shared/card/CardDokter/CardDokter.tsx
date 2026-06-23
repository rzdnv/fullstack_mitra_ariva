// "use client";

// import { Badge } from "@/components/ui/badge";
// import Image from "next/image";
// import { useRouter } from "next/navigation";
// import { CalendarDays, Stethoscope } from "lucide-react";

// interface PropTypes {
//   _id: number;
//   namaDokter: string;
//   poli: string;
//   spesialis: string;
//   fotoDokter: string;
//   Schedules: Array<{ Day: string; Time: string }>;
// }

// const CardDokter = (props: PropTypes) => {
//   const { _id, Schedules, namaDokter, spesialis, fotoDokter, poli } = props;
//   const router = useRouter();

//   return (
//     <div
//       onClick={() => router.push(`/dokter/${_id}`)}
//       className="group hover:border-havelock-blue-200 relative grid h-full cursor-pointer grid-cols-1 gap-5 rounded-2xl border border-slate-100 bg-white p-4 shadow-xs ring-1 ring-slate-200 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-slate-100 lg:grid-cols-2"
//     >
//       {/* Area Foto Dokter */}
//       <div className="relative aspect-3/4 w-full overflow-hidden rounded-xl bg-slate-50 lg:h-full">
//         <Image
//           src={fotoDokter}
//           alt={namaDokter}
//           width={300}
//           height={400}
//           className="h-full w-full object-cover object-center transition-transform duration-500"
//         />
//       </div>

//       {/* Area Detail Informasi */}
//       <div className="flex flex-col p-1">
//         <div className="space-y-3.5">
//           {/* Nama & Spesialisasi Dokter */}
//           <div className="space-y-1">
//             <h3 className="font-DMSerif group-hover:text-havelock-blue-600 line-clamp-2 text-base text-slate-800 transition-colors duration-200 lg:text-lg">
//               {namaDokter}
//             </h3>
//             <p className="text-[11px] font-semibold tracking-wider text-slate-400 uppercase">
//               {spesialis}
//             </p>
//           </div>
//           <div>
//             <Badge
//               variant="secondary"
//               className="rounded-full border-none px-2.5 py-1 text-[10px] font-bold tracking-wider uppercase shadow-2xs"
//             >
//               <Stethoscope className="text-havelock-blue-500 h-4 w-4" />
//               {poli}
//             </Badge>
//           </div>
//         </div>

//         <div className="border-t border-slate-100 pt-4">
//           <div className="mb-2 flex items-center gap-1.5 text-[10px] font-bold tracking-widest text-slate-400 uppercase">
//             <CalendarDays className="h-3.5 w-3.5 text-slate-400" />
//             <span>Jadwal Praktik</span>
//           </div>

//           <div className="space-y-1.5">
//             {Schedules.map((schedule, index) => (
//               <div
//                 key={index}
//                 className="flex items-center justify-between rounded-lg bg-slate-50/70 px-2.5 py-1.5 text-xs text-slate-600 transition-colors duration-200 group-hover:bg-slate-50"
//               >
//                 <span className="text-[11px] font-bold text-slate-700 uppercase">
//                   {schedule.Day}
//                 </span>
//                 <span className="text-[11px] font-medium text-slate-500">
//                   {schedule.Time}
//                 </span>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default CardDokter;

"use client";

import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import { useRouter } from "next/navigation";
import {
  CalendarDays,
  Stethoscope,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";

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
      className="group hover:border-havelock-blue-200 relative grid h-full cursor-pointer grid-cols-1 gap-5 rounded-2xl border border-slate-100 bg-white p-4 shadow-xs ring-1 ring-slate-200 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-slate-100 lg:grid-cols-2"
    >
      {/* Area Foto Dokter */}
      <div className="relative aspect-3/4 w-full overflow-hidden rounded-xl bg-slate-50 lg:h-full">
        <Image
          src={fotoDokter}
          alt={namaDokter}
          width={300}
          height={400}
          className="h-full w-full object-cover object-center transition-transform duration-500 group-hover:scale-102"
        />
      </div>

      {/* Area Detail Informasi */}
      <div className="flex flex-col justify-between p-1">
        {/* Atas: Nama, Spesialis, dan Badge Poli */}
        <div className="space-y-3.5">
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
              className="gap-1 rounded-full border-none bg-slate-100 px-2.5 py-1 text-[10px] font-bold tracking-wider text-slate-700 uppercase shadow-2xs"
            >
              <Stethoscope className="text-havelock-blue-500 h-3.5 w-3.5" />
              {poli}
            </Badge>
          </div>
        </div>

        {/* Bawah: Jadwal Praktik, Info Jaminan, & CTA Link */}
        <div className="mt-4 space-y-4 border-t border-slate-100 pt-4">
          <div>
            <div className="mb-2 flex items-center gap-1.5 text-[10px] font-bold tracking-widest text-slate-400 uppercase">
              <CalendarDays className="h-3.5 w-3.5 text-slate-400" />
              <span>Jadwal Praktik</span>
            </div>

            <div className="space-y-1.5">
              {Schedules.map((schedule, index) => (
                <div
                  key={index}
                  className="hover:bg-havelock-blue-50/40 flex items-center justify-between rounded-lg bg-slate-50/70 px-2.5 py-1.5 text-xs text-slate-600 transition-all duration-200 hover:translate-x-0.5"
                >
                  <span className="group-hover:text-havelock-blue-700 text-[11px] font-bold text-slate-700 uppercase transition-colors">
                    {schedule.Day}
                  </span>
                  <span className="text-[11px] font-medium text-slate-500">
                    {schedule.Time}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* 1. Tambahan Informasi Jaminan Kesehatan (BPJS / Umum) */}
          <div className="flex flex-wrap items-center gap-x-3 gap-y-1 border-t border-slate-50 pt-2 text-[10px] font-medium text-slate-400">
            <span className="block w-full text-[9px] font-bold tracking-wider text-slate-400 uppercase sm:w-auto">
              Menerima:
            </span>
            <span className="flex items-center gap-1 rounded-md bg-sky-50 px-1.5 py-0.5 font-semibold text-sky-600">
              <CheckCircle2 className="h-3 w-3" /> BPJS
            </span>
            <span className="flex items-center gap-1 rounded-md bg-sky-50 px-1.5 py-0.5 font-semibold text-sky-600">
              <CheckCircle2 className="h-3 w-3" /> Umum / Swasta
            </span>
          </div>

          {/* 2. Tambahan Petunjuk CTA Halus di Bagian Paling Bawah */}
          <div className="flex justify-end pt-1">
            <span className="group-hover:text-havelock-blue-600 flex items-center gap-1 text-sm text-[10px] font-medium tracking-wider text-slate-400 uppercase transition-colors">
              <span>Lihat Profil & Janji Temu</span>
              <ArrowRight className="h-3 w-3 transition-transform duration-200 group-hover:translate-x-0.5" />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardDokter;
