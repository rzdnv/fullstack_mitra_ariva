import Image from "next/image";
import CardSchedule from "../shared/CardSchedule/CardSchedule";

const PoliSection = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 py-10 px-20 mb-10 ">
      {/* KIRI */}
      <div className="grid grid-cols-3">
        <div className="flex flex-col gap-2 aspect-square bg-candlelight-400/50 hover:bg-candlelight-400/70 transition-all duration-300 justify-center items-center">
          <Image
            src="/images/poli/obgyn.webp"
            alt="Poli"
            width={400}
            height={300}
            className="w-15  md:w-20 "
          />
          <p className="text-xl md:text-2xl font-bold text-center text-slate-800">
            Kandungan
          </p>
        </div>
        <div className="flex flex-col gap-2 aspect-square bg-havelock-blue-400/50 hover:bg-havelock-blue-400/70 transition-all duration-300 justify-center items-center">
          <Image
            src="/images/poli/bedah.webp"
            alt="Poli"
            width={400}
            height={300}
            className="w-15  md:w-20 "
          />
          <p className="text-xl md:text-2xl font-bold text-center text-slate-800">
            Bedah
          </p>
        </div>
        <div className="flex flex-col gap-2 aspect-square bg-your-pink-400/50 hover:bg-your-pink-400/70 transition-all duration-300 justify-center items-center">
          <Image
            src="/images/poli/penyakit-dalam.webp"
            alt="Poli"
            width={400}
            height={300}
            className="w-15  md:w-20 "
          />
          <p className="text-xl md:text-2xl font-bold text-center text-slate-800">
            Penyakit Dalam
          </p>
        </div>
        <div className="flex flex-col gap-2 aspect-square bg-havelock-blue-400/50 hover:bg-havelock-blue-400/70 transition-all duration-300 justify-center items-center">
          <Image
            src="/images/poli/umum.webp"
            alt="Poli"
            width={400}
            height={300}
            className="w-15  md:w-20 "
          />
          <p className="text-xl md:text-2xl font-bold text-center text-slate-800">
            Umum
          </p>
        </div>
        <div className="flex flex-col gap-2 aspect-square bg-your-pink-400/50 hover:bg-your-pink-400/70 transition-all duration-300 justify-center items-center">
          <Image
            src="/images/poli/saraf.webp"
            alt="Poli"
            width={400}
            height={300}
            className="w-15  md:w-20 "
          />
          <p className="text-xl md:text-2xl font-bold text-center text-slate-800">
            Saraf
          </p>
        </div>
        <div className="flex flex-col gap-2 aspect-square bg-candlelight-400/50 hover:bg-candlelight-400/70 transition-all duration-300 justify-center items-center">
          <Image
            src="/images/poli/gigi.webp"
            alt="Poli"
            width={400}
            height={300}
            className="w-15  md:w-20 "
          />
          <p className="text-xl md:text-2xl font-bold text-center text-slate-800">
            Gigi
          </p>
        </div>
      </div>

      {/* KANAN */}
      <div className="bg-gray-100 rounded-2xl py-5 px-5 ">
        <h1 className="text-2xl  mb-4 md:text-4xl font-bold text-slate-800 text-center">
          Jadwal Dokter
        </h1>
        <div className="grid grid-cols-1 gap-4 max-h-95 overflow-y-auto pb-5 pt-1 px-5 scrollbar-hide">
          <CardSchedule
            Name="dr. So Zanolo Krisna Payana, Sp.B, FICS"
            Poli="Bedah"
            Schedules={[
              { Day: "Senin", Time: "16:00 - 18:00" },
              { Day: "Selasa", Time: "16:00 - 18:00" },
            ]}
          />

          <CardSchedule
            Name="dr. Handy Darmawan, Sp.B"
            Poli="Bedah"
            Schedules={[
              { Day: "Rabu ", Time: "16.00 - 18.00" },
              { Day: "Jumat", Time: "10:00 - 12:00" },
            ]}
          />

          <CardSchedule
            Name="dr. Fajar Alam Sukma Raharja, Sp.OG, M.Kes"
            Poli="Kandungan"
            Schedules={[
              { Day: "Senin", Time: "13:30 - 15:30" },
              { Day: "Rabu", Time: "11:00 - 13:00" },
              { Day: "Jumat", Time: "14:00 - 16:00" },
            ]}
          />

          <CardSchedule
            Name="dr. Shinta Wulansari, Sp.S"
            Poli="Saraf"
            Schedules={[
              { Day: "Senin", Time: "16.00 - 18.00" },
              { Day: "Selasa", Time: "16.00 - 18.00" },
              { Day: "Rabu", Time: "16.00 - 18.00" },
            ]}
          />
        </div>
      </div>
    </div>
  );
};

export default PoliSection;
