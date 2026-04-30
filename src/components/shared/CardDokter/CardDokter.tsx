import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import Image from "next/image";

interface PropTypes {
  id?: string;
  fotoDokter: string;
  namaDokter: string;
  Poli: string;
  Spesialis: string;
}

const CardDokter = (props: PropTypes) => {
  const { id, fotoDokter, namaDokter, Poli, Spesialis } = props;

  const poliColorMap: Record<string, string> = {
    "Poli Kandungan": "bg-candlelight-400 text-white",
    "Poli Bedah": "bg-havelock-blue-400 text-white",
    "Poli Penyakit Dalam": "bg-your-pink-400 text-white",
    "Poli Umum": "bg-havelock-blue-400 text-white",
    "Poli Saraf": "bg-your-pink-400 text-white",
    "Poli Gigi": "bg-candlelight-400 text-white",
  };

  return (
    <Card
      key={id}
      className="h-full w-full overflow-hidden rounded-3xl border-0 bg-havelock-blue-500/10 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
    >
      {/* Foto */}
      <Image
        src={fotoDokter}
        alt={namaDokter}
        width={400}
        height={600}
        className="h-auto w-full object-cover rounded-t-3xl"
      />

      {/* Content */}
      <CardContent className="flex flex-col justify-between space-y-4 px-4 lg:p-4">
        <div className="flex justify-center">
          <Badge
            variant="secondary"
            className={cn(
              "text-xs lg:font-semibold lg:p-4 rounded-full",
              poliColorMap[Poli] || "bg-gray-200 text-gray-800",
            )}
          >
            {Poli}
          </Badge>
        </div>

        <CardTitle className="line-clamp-2 text-center text-base lg:text-xl font-bold leading-snug text-havelock-blue-800">
          {namaDokter}
        </CardTitle>

        <p className="line-clamp-2 text-center text-xs lg:text-sm leading-relaxed text-slate-700">
          {Spesialis}
        </p>
      </CardContent>
    </Card>
  );
};

export default CardDokter;
