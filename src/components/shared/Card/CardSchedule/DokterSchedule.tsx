import { Badge } from "@/components/ui/badge";
import DayTime from "./DayTime";
import { cn } from "@/lib/utils";
import Image from "next/image";

interface PropTypes {
  namaDokter: string;
  poli: string;
  fotoDokter: string;
  Schedules: Array<{ Day: string; Time: string }>;
}

const DokterSchedule = (props: PropTypes) => {
  const { Schedules, namaDokter, fotoDokter, poli } = props;

  const poliColorMap: Record<string, string> = {
    "Poli Kandungan": "bg-candlelight-400 text-white",
    "Poli Bedah": "bg-havelock-blue-400 text-white",
    "Poli Penyakit Dalam": "bg-your-pink-400 text-white",
    "Poli Umum": "bg-havelock-blue-400 text-white",
    "Poli Saraf": "bg-your-pink-400 text-white",
    "Poli Gigi": "bg-candlelight-400 text-white",
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-2 p-4 rounded-2xl shadow-lg border bg-white transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:border-havelock-blue-500">
      <div className="w-full h-full rounded-xl overflow-hidden">
        <Image
          src={fotoDokter}
          alt={namaDokter}
          width={300}
          height={400}
          className="w-full h-full"
        />
      </div>
      <div className="p-4 space-y-4">
        <h1 className=" md:text-xl font-bold text-slate-800 leading-tight line-clamp-2">
          {namaDokter}
        </h1>
        <Badge
          variant="secondary"
          className={cn(
            "text-xs md:font-semibold md:p-4 rounded-full",
            poliColorMap[poli] || "bg-gray-200 text-gray-800",
          )}
        >
          {poli}
        </Badge>
        <div className="grid grid-cols-2 lg:grid-cols-1 gap-2">
          {Schedules.map((schedule, index) => (
            <DayTime key={index} Day={schedule.Day} Time={schedule.Time} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default DokterSchedule;
