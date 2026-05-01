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
    "Poli Kandungan": "bg-candlelight-400 text-white",
    "Poli Bedah": "bg-havelock-blue-400 text-white",
    "Poli Penyakit Dalam": "bg-your-pink-400 text-white",
    "Poli Umum": "bg-havelock-blue-400 text-white",
    "Poli Saraf": "bg-your-pink-400 text-white",
    "Poli Gigi": "bg-candlelight-400 text-white",
  };

  return (
    <Card className="w-full p-4 md:p-6 bg-gray-50 border-havelock-blue-200/50">
      <CardHeader className="flex flex-col md:flex-row md:justify-between gap-3">
        <CardTitle className=" md:text-xl font-bold text-slate-800 leading-tight line-clamp-2">
          {Name}
        </CardTitle>
        <Badge
          variant="secondary"
          className={cn(
            "text-xs md:font-semibold md:p-4 rounded-full",
            poliColorMap[Poli] || "bg-gray-200 text-gray-800",
          )}
        >
          {Poli}
        </Badge>
      </CardHeader>
      <CardContent className="grid  grid-cols-1 lg:grid-cols-2 gap-3">
        {Schedules.map((schedule, index) => (
          <DayTime key={index} Day={schedule.Day} Time={schedule.Time} />
        ))}
      </CardContent>
    </Card>
  );
};

export default CardSchedule;
