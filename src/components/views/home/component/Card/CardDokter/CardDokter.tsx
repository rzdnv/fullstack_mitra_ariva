import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import Image from "next/image";
import DayTime from "./DayTime";

interface PropTypes {
  namaDokter: string;
  poli: string;
  spesialis: string;
  fotoDokter: string;
  Schedules: Array<{ Day: string; Time: string }>;
}

const CardDokter = (props: PropTypes) => {
  const { Schedules, namaDokter, spesialis, fotoDokter, poli } = props;

  const poliColorMap: Record<string, string> = {
    "Poli Kandungan": "bg-candlelight-400 text-white",
    "Poli Bedah": "bg-havelock-blue-400 text-white",
    "Poli Penyakit Dalam": "bg-your-pink-400 text-white",
    "Poli Umum": "bg-havelock-blue-400 text-white",
    "Poli Saraf": "bg-your-pink-400 text-white",
    "Poli Gigi": "bg-candlelight-400 text-white",
  };

  return (
    <div className="hover:border-havelock-blue-500 grid grid-cols-1 gap-2 rounded-2xl border bg-white p-4 shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-xl lg:grid-cols-2">
      <div className="h-full w-full overflow-hidden rounded-xl">
        <Image
          src={fotoDokter}
          alt={namaDokter}
          width={300}
          height={400}
          className="h-full w-full"
        />
      </div>
      <div className="space-y-4 p-4">
        <Badge
          variant="secondary"
          className={cn(
            "rounded-full text-xs md:p-4 md:font-semibold",
            poliColorMap[poli] || "bg-gray-200 text-gray-800",
          )}
        >
          {poli}
        </Badge>

        <h1 className="line-clamp-2 leading-tight font-bold text-slate-800 md:text-xl">
          {namaDokter}
        </h1>

        <h2 className="text-havelock-blue-600 text-sm leading-tight font-medium">
          {spesialis}
        </h2>

        <div className="grid grid-cols-1 gap-2">
          {Schedules.map((schedule, index) => (
            <DayTime key={index} Day={schedule.Day} Time={schedule.Time} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CardDokter;
