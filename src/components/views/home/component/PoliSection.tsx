"use client";

import Image from "next/image";
import CardSchedule from "../../../shared/CardSchedule/CardSchedule";
import useHome from "../useHome";
import { IDokter } from "@/types/dokter";
import DoctorScheduleSkeleton from "@/components/shared/CardSchedule/DoctorScheduleSkeleton";

const PoliSection = () => {
  const { dataDokters, isLoadingDokters } = useHome();

  return (
    <section className="flex flex-col gap-10 w-full py-10 px-10 items-center">
      <div className="w-full flex gap-4 flex-col items-center lg:items-start">
        <p className="text-havelock-blue-500 text-center lg:text-start md:text-xl tracking-tight">
          ✦ Jadwal & Layanan
        </p>
        <h1 className="font-playfair text-2xl md:text-5xl text-center lg:text-start max-w-4xl text-slate-800 font-bold">
          Temukan Layanan Spesialis yang Tepat untuk Anda
        </h1>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 w-full">
        {/* KIRI */}
        <div className=" grid grid-cols-2 md:grid-cols-3">
          <div className="flex flex-col gap-2 aspect-square h-full w-full bg-candlelight-400/50 hover:bg-candlelight-400/70 transition-all duration-300 justify-center items-center">
            <Image
              src="/images/poli/obgyn.webp"
              alt="Poli"
              width={400}
              height={300}
              className="w-10 lg:w-15 xl:w-20 "
            />
            <p className=" md:text-xl font-bold text-center text-slate-800">
              Kandungan
            </p>
          </div>
          <div className="flex flex-col gap-2 aspect-square h-full w-full bg-havelock-blue-400/50 hover:bg-havelock-blue-400/70 transition-all duration-300 justify-center items-center">
            <Image
              src="/images/poli/bedah.webp"
              alt="Poli"
              width={400}
              height={300}
              className="w-10 lg:w-15 xl:w-20 "
            />
            <p className=" md:text-xl font-bold text-center text-slate-800">
              Bedah
            </p>
          </div>
          <div className="flex flex-col gap-2 aspect-square h-full w-full bg-your-pink-400/50 hover:bg-your-pink-400/70 transition-all duration-300 justify-center items-center">
            <Image
              src="/images/poli/penyakit-dalam.webp"
              alt="Poli"
              width={400}
              height={300}
              className="w-10 lg:w-15 xl:w-20 "
            />
            <p className=" md:text-xl font-bold text-center text-slate-800">
              Penyakit Dalam
            </p>
          </div>
          <div className="flex flex-col gap-2 aspect-square h-full w-full bg-havelock-blue-400/50 hover:bg-havelock-blue-400/70 transition-all duration-300 justify-center items-center">
            <Image
              src="/images/poli/umum.webp"
              alt="Poli"
              width={400}
              height={300}
              className="w-10 lg:w-15 xl:w-20 "
            />
            <p className=" md:text-xl font-bold text-center text-slate-800">
              Umum
            </p>
          </div>
          <div className="flex flex-col gap-2 aspect-square h-full w-full bg-your-pink-400/50 hover:bg-your-pink-400/70 transition-all duration-300 justify-center items-center">
            <Image
              src="/images/poli/saraf.webp"
              alt="Poli"
              width={400}
              height={300}
              className="w-10 lg:w-15 xl:w-20 "
            />
            <p className=" md:text-xl font-bold text-center text-slate-800">
              Saraf
            </p>
          </div>
          <div className="flex flex-col gap-2 aspect-square h-full w-full bg-candlelight-400/50 hover:bg-candlelight-400/70 transition-all duration-300 justify-center items-center">
            <Image
              src="/images/poli/gigi.webp"
              alt="Poli"
              width={400}
              height={300}
              className="w-10 lg:w-15 xl:w-20 "
            />
            <p className=" md:text-xl font-bold text-center text-slate-800">
              Gigi
            </p>
          </div>
        </div>

        {/* KANAN */}
        <div className="bg-gray-100 rounded-2xl py-5 px-5 ">
          <h1 className="text-2xl  mb-4 md:text-4xl font-bold text-slate-800 text-center">
            Jadwal Dokter
          </h1>
          <div className="grid grid-cols-1 gap-4 max-h-85 overflow-y-auto pb-5 pt-1 px-1 md:px-5 scrollbar-hide">
            {isLoadingDokters
              ? Array.from({ length: 4 }).map((_, index) => (
                  <DoctorScheduleSkeleton key={index} />
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
