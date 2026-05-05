"use client";

import Image from "next/image";

interface PoliItem {
  label: string;
  image: string;
  color: string;
}

const POLI_LIST: PoliItem[] = [
  {
    label: "Poli Kandungan",
    image: "/images/poli/obgyn.webp",
    color: "border-candlelight-400/50 ",
  },
  {
    label: "Poli Bedah",
    image: "/images/poli/bedah.webp",
    color: "border-havelock-blue-400/50 ",
  },
  {
    label: "Poli Penyakit Dalam",
    image: "/images/poli/penyakit-dalam.webp",
    color: "border-your-pink-400/50 ",
  },
  {
    label: "Poli Umum",
    image: "/images/poli/umum.webp",
    color: "border-havelock-blue-400/50 ",
  },
  {
    label: "Poli Saraf",
    image: "/images/poli/saraf.webp",
    color: "border-your-pink-400/50 ",
  },
  {
    label: "Poli Gigi",
    image: "/images/poli/gigi.webp",
    color: "border-candlelight-400/50",
  },
];

const PoliCard = ({ label, image, color }: PoliItem) => (
  <div
    className={`flex aspect-video px-2 border-5 w-full h-full justify-center rounded-2xl items-center ${color}`}
  >
    <Image src={image} alt={label} width={400} height={300} className="w-10" />
    <p className="text-sm lg:text-base font-bold text-slate-800">{label}</p>
  </div>
);

const PoliSection = () => {
  return (
    <section className="flex flex-col gap-8 items-center my-10 p-10">
      <div className="w-full flex gap-4 flex-col px-10 items-center lg:items-start">
        <p className="text-havelock-blue-500 text-center lg:text-start md:text-xl tracking-tight">
          ✦ Poliklinik Spesialis
        </p>
        <h1 className="font-DMSerif text-3xl md:text-5xl text-center lg:text-start max-w-4xl text-slate-800">
          Pilihan Layanan Medis Terpadu untuk Anda
        </h1>
      </div>

      <div className=" w-full ">
        <div className="grid grid-cols-2 gap-2 lg:grid-cols-6 items-center">
          {POLI_LIST.map((poli) => (
            <PoliCard key={poli.label} {...poli} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PoliSection;
