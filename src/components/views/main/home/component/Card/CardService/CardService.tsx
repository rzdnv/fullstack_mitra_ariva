"use client";

import { truncateHtml } from "@/components/shared/truncatHtml/truncatHtml";
import { Card } from "@/components/ui/card";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";

interface PropTypes {
  foto: string;
  _id: number;
  namaLayanan: string;
  deskripsi?: string;
}

const CardService = (props: PropTypes) => {
  const { foto, namaLayanan, deskripsi, _id } = props;

  const router = useRouter();

  const handleDetail = () => router.push(`/layanan/${_id}`);

  return (
    <Card
      onClick={handleDetail}
      className="group hover:border-havelock-blue-300 hover:shadow-havelock-blue-950/10 relative aspect-3/4 w-full max-w-85 cursor-pointer overflow-hidden rounded-2xl border border-slate-100 bg-white p-0 shadow-md transition-all duration-500 hover:-translate-y-2 hover:shadow-xl"
    >
      <div className="absolute inset-0 h-full w-full">
        <Image
          src={foto}
          alt={namaLayanan}
          fill
          sizes="(max-width: 768px) 100vw, 340px"
          className="object-cover object-center transition-transform duration-700 ease-out"
          priority
        />
        <div className="absolute inset-0 bg-linear-to-t from-slate-900/90 via-slate-900/40 to-transparent transition-opacity duration-300 group-hover:via-slate-950/50" />
      </div>

      <div className="group-hover:bg-havelock-blue-600 group-hover:border-havelock-blue-500 absolute top-4 right-4 z-10 flex h-9 w-9 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white shadow-sm backdrop-blur-md transition-all duration-300 group-hover:scale-110">
        <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:rotate-45" />
      </div>

      <div className="absolute inset-x-0 bottom-0 z-10 flex flex-col p-5 text-white transition-all duration-300">
        <div className="space-y-1">
          <span className="text-havelock-blue-300 inline-block text-[10px] font-bold tracking-widest uppercase">
            Program Layanan
          </span>

          <h3 className="font-DMSerif group-hover:text-havelock-blue-200 text-base leading-tight tracking-wide transition-colors duration-300 sm:text-lg">
            {namaLayanan}
          </h3>

          {deskripsi && (
            <p className="line-clamp-2 max-h-0 text-xs leading-relaxed text-slate-200/90 transition-all duration-500 ease-in-out group-hover:mt-1.5 group-hover:max-h-12">
              {truncateHtml(deskripsi, 50)}
            </p>
          )}
        </div>
      </div>
    </Card>
  );
};

export default CardService;
