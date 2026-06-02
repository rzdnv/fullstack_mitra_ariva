"use client";

import { formatTanggal } from "@/components/shared/formatted/formated";
import { Calendar, User } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { truncateHtml } from "../../truncatHtml/truncatHtml";

interface PropTypes {
  _id: number;
  gambar: string;
  judul: string;
  isi: string;
  tanggal: string;
  username: string;
}

export default function CardNews({
  _id,
  gambar,
  judul,
  isi,
  tanggal,
  username,
}: PropTypes) {
  const router = useRouter();

  return (
    <div
      onClick={() => router.push(`/berita/${_id}`)}
      className="group hover:border-havelock-blue-300 hover:shadow-havelock-blue-950/5 grid h-36 w-full shrink-0 cursor-pointer grid-cols-5 overflow-hidden rounded-2xl border border-slate-100 bg-white transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
    >
      <div className="relative col-span-2 h-full w-full overflow-hidden">
        <Image
          src={gambar}
          alt={judul}
          fill
          sizes="(max-width: 768px) 40vw, 150px"
          className="object-cover object-center"
          priority
        />
      </div>

      <div className="col-span-3 flex flex-col justify-between p-3">
        <div className="space-y-1">
          <h2 className="group-hover:text-havelock-blue-600 line-clamp-2 text-xs leading-snug font-bold text-slate-800 transition-colors duration-300 md:text-sm">
            {judul}
          </h2>

          <p className="line-clamp-2 text-[11px] leading-relaxed text-slate-400">
            {truncateHtml(isi, 80)}
          </p>
        </div>

        <div className="mt-2 flex flex-wrap items-center gap-x-2 gap-y-0.5 border-t border-slate-50 pt-1.5 text-[10px] text-slate-400">
          <div className="flex items-center gap-1">
            <Calendar className="h-3 w-3 text-slate-400" />
            <span className="max-w-17.5 truncate">
              {formatTanggal(tanggal)}
            </span>
          </div>
          <span className="text-slate-200">•</span>
          <div className="flex items-center gap-1">
            <User className="h-3 w-3 text-slate-400" />
            <span className="max-w-15 truncate font-medium text-slate-500">
              {username}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
