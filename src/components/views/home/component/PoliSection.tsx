"use client";

import Image from "next/image";
import CardSchedule from "../../../shared/CardSchedule/CardSchedule";
import DoctorScheduleSkeleton from "@/components/shared/CardSchedule/DoctorScheduleSkeleton";
import useHome from "../useHome";
import { IDokter } from "@/types/dokter";

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------

interface PoliItem {
  label: string;
  image: string;
  color: string;
}

// ---------------------------------------------------------------------------
// Constants
// ---------------------------------------------------------------------------

const POLI_LIST: PoliItem[] = [
  {
    label: "Poli Kandungan",
    image: "/images/poli/obgyn.webp",
    color: "bg-candlelight-400/50 hover:bg-candlelight-400/70",
  },
  {
    label: "Poli Bedah",
    image: "/images/poli/bedah.webp",
    color: "bg-havelock-blue-400/50 hover:bg-havelock-blue-400/70",
  },
  {
    label: "Poli Penyakit Dalam",
    image: "/images/poli/penyakit-dalam.webp",
    color: "bg-your-pink-400/50 hover:bg-your-pink-400/70",
  },
  {
    label: "Poli Umum",
    image: "/images/poli/umum.webp",
    color: "bg-havelock-blue-400/50 hover:bg-havelock-blue-400/70",
  },
  {
    label: "Poli Saraf",
    image: "/images/poli/saraf.webp",
    color: "bg-your-pink-400/50 hover:bg-your-pink-400/70",
  },
  {
    label: "Poli Gigi",
    image: "/images/poli/gigi.webp",
    color: "bg-candlelight-400/50 hover:bg-candlelight-400/70",
  },
];

const PoliCard = ({ label, image, color }: PoliItem) => (
  <div
    className={`flex flex-col gap-2 aspect-square w-full h-full justify-center items-center transition-all duration-300 ${color}`}
  >
    <Image
      src={image}
      alt={label}
      width={400}
      height={300}
      className="w-10 lg:w-15 xl:w-20"
    />
    <p className="text-sm lg:text-xl font-bold text-center text-slate-800 px-4">
      {label}
    </p>
  </div>
);

const PoliSection = () => {
  const { dataDokters, isLoadingDokters } = useHome();

  return (
    <section className="flex flex-col gap-10  items-center my-10 mx-10 p-8 lg:p-10 bg-white border rounded-xl">
      <div className="w-full flex gap-4 flex-col items-center lg:items-start">
        <p className="text-havelock-blue-500 text-center lg:text-start md:text-xl tracking-tight">
          ✦ Poliklinik & Jadwal
        </p>
        <h1 className="font-playfair text-2xl md:text-5xl text-center lg:text-start max-w-4xl text-slate-800 font-bold">
          Temukan Jadwal Praktik Dokter Spesialis Kami
        </h1>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 w-full ">
        <div className="grid grid-cols-2 md:grid-cols-3">
          {POLI_LIST.map((poli) => (
            <PoliCard key={poli.label} {...poli} />
          ))}
        </div>

        <div>
          <div className="grid grid-cols-1 gap-4 max-h-110 overflow-y-auto py-4 px-2 md:px-5 scrollbar-hide">
            {isLoadingDokters
              ? Array.from({ length: 4 }).map((_, i) => (
                  <DoctorScheduleSkeleton key={i} />
                ))
              : dataDokters?.map((dokter: IDokter) => (
                  <CardSchedule
                    key={dokter.id}
                    Name={dokter.nama}
                    Poli={dokter.poli.namaPoli}
                    Schedules={dokter.jadwal.map((j) => ({
                      Day: j.hari,
                      Time: `${j.jamMulai} - ${j.jamSelesai}`,
                    }))}
                  />
                ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PoliSection;
