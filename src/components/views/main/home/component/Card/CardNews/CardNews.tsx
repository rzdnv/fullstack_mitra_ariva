import { formatTanggal } from "@/components/shared/formatted/formated";
import { User } from "lucide-react";
import Image from "next/image";

interface PropTypes {
  gambar: string;
  judul: string;
  isi: string;
  tanggal: string;
  username: string;
}

const CardNews = (props: PropTypes) => {
  const { gambar, judul, isi, tanggal, username } = props;

  return (
    <div className="flex h-full w-full flex-col rounded-sm lg:flex-row">
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
        <p className="line-clamp-2 text-justify text-sm text-slate-400 lg:line-clamp-3">
          {isi}
        </p>
        <div className="flex items-center gap-2">
          <p className="text-xs text-slate-400 lg:text-sm">
            {formatTanggal(tanggal)} |
          </p>
          <div className="flex items-center gap-1">
            <User className="h-4 w-4 text-slate-400" />
            <p className="text-xs text-slate-400 lg:text-sm">{username}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardNews;
