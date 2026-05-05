import { User } from "lucide-react";
import Image from "next/image";
import { formatTanggal } from "../../formatted/formated";

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
    <div className="w-full flex flex-col lg:flex-row h-full rounded-sm">
      <Image
        src={gambar}
        alt={judul}
        width={400}
        height={300}
        className="aspect-video w-full lg:w-1/2 object-cover rounded-sm"
      />
      <div className="flex flex-col gap-2 p-4">
        <h2 className="line-clamp-2  text-sm lg:text-base font-bold text-slate-800">
          {judul}
        </h2>
        <p className=" line-clamp-2 lg:line-clamp-3 text-sm text-justify text-slate-400">
          {isi}
        </p>
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
