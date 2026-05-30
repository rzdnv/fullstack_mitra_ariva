"use client";

import { formatTanggal } from "@/components/shared/formatted/formated";
import { User } from "lucide-react";
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

const CardNews = (props: PropTypes) => {
  const { _id, gambar, judul, isi, tanggal, username } = props;

  const router = useRouter();

  return (
    <div
      onClick={() => router.push(`/berita/${_id}`)}
      className="flex h-full w-full cursor-pointer flex-col rounded-sm transition-all duration-300 hover:shadow-md lg:flex-row"
    >
      <Image
        src={gambar}
        alt={judul}
        width={400}
        height={300}
        className="aspect-video w-full rounded-sm object-cover lg:w-1/2"
      />

      <div className="flex flex-col gap-2 p-4">
        <h2 className="line-clamp-2 text-sm font-bold text-slate-800 lg:text-base">
          {judul}
        </h2>

        <p className="line-clamp-2 text-justify text-xs text-slate-400 lg:line-clamp-3">
          {truncateHtml(isi, 120)}
        </p>

        <div className="flex flex-wrap items-center gap-2 text-xs text-slate-400">
          <p>{formatTanggal(tanggal)}</p>

          <span>•</span>

          <div className="flex items-center gap-1">
            <User className="h-4 w-4" />

            <p>{username}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardNews;
