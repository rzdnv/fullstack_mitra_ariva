import { User } from "lucide-react";
import Image from "next/image";
import { formatTanggal } from "../formatted/formated";

interface PropTypes {
  gambar: string;
  judul: string;
  tanggal: string;
  username: string;
}

const CardNews = (props: PropTypes) => {
  const { gambar, judul, tanggal, username } = props;

  return (
    <div className="max-w-xs h-full rounded-sm hover:bg-white hover:border transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
      <Image
        src={gambar}
        alt={judul}
        width={400}
        height={300}
        className="aspect-video object-cover rounded-sm"
      />
      <div className="flex flex-col gap-2 p-2">
        <h2 className="line-clamp-3  text-sm lg:text-base font-bold text-slate-800">
          {judul}
        </h2>
        <div className="flex gap-2 items-center">
          <p className="text-xs lg:text-sm text-slate-400">
            {formatTanggal(tanggal)} |
          </p>
          <div className="flex gap-1 items-center">
            <User className="w-4 h-4 text-slate-400" />
            <p className="text-xs lg:text-sm text-slate-400">{username}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardNews;
