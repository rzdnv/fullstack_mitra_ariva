import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import DayTime from "./DayTime";
import { cn } from "@/lib/utils";

interface PropTypes {
  Name: string;
  Poli: string;
  Schedules: Array<{ Day: string; Time: string }>;
}

const CardSchedule = (props: PropTypes) => {
  const { Schedules, Name, Poli } = props;

  const poliColorMap: Record<string, string> = {
    Kandungan: "bg-candlelight-400 text-white",
    Bedah: "bg-havelock-blue-400 text-white",
    "Penyakit Dalam": "bg-your-pink-400 text-white",
    Umum: "bg-havelock-blue-400 text-white",
    Saraf: "bg-your-pink-400 text-white",
    Gigi: "bg-candlelight-400 text-white",
  };

  return (
    <Card className="w-full p-4 md:p-6 border-havelock-blue-200/50">
      <CardHeader className="flex justify-between gap-3">
        <CardTitle className="text-lg md:text-2xl font-bold text-slate-800 leading-tight line-clamp-2">
          {Name}
        </CardTitle>
        <Badge
          variant="secondary"
          className={cn(
            "md:font-semibold p-3 md:p-4 rounded-full",
            poliColorMap[Poli] || "bg-gray-200 text-gray-800",
          )}
        >
          {Poli}
        </Badge>
      </CardHeader>
      <CardContent className="flex flex-col gap-3">
        {Schedules.map((schedule, index) => (
          <DayTime key={index} Day={schedule.Day} Time={schedule.Time} />
        ))}
      </CardContent>
    </Card>
  );
};

export default CardSchedule;
