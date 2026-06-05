import { Badge } from "@/components/ui/badge";
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

  const generateMediumColor = (stringInput: string) => {
    let hash = 0;
    for (let i = 0; i < stringInput.length; i++) {
      hash = stringInput.charCodeAt(i) + ((hash << 5) - hash);
    }

    // Mengacak jenis warna (0 - 360)
    const hue = Math.abs(hash) % 360;

    // Saturation 75% (warna hidup) & Lightness 60% (pas di tengah, cocok untuk text-white)
    return `hsl(${hue}, 75%, 60%)`;
  };

  const badgeBgColor = generateMediumColor(poli);

  return (
    <div className="group hover:border-havelock-blue-400 hover:shadow-havelock-blue-950/5 relative grid h-full grid-cols-1 gap-4 rounded-2xl border border-slate-100 bg-white p-4 shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl lg:grid-cols-2">
      <div className="relative aspect-3/4 w-full overflow-hidden rounded-xl bg-slate-50 lg:h-full">
        <Image
          src={fotoDokter}
          alt={namaDokter}
          width={300}
          height={400}
          className="h-full w-full object-cover object-center"
        />
      </div>

      <div className="flex flex-col justify-start space-y-4 p-1">
        <div>
          <Badge
            variant="secondary"
            style={{ backgroundColor: badgeBgColor }}
            className="rounded-full border-none px-2.5 py-0.5 text-[11px] font-bold tracking-wider text-white uppercase shadow-sm" // Teks putih
          >
            {poli}
          </Badge>
        </div>

        <div className="space-y-1">
          <h3 className="font-DMSerif group-hover:text-havelock-blue-600 line-clamp-2 text-lg text-slate-800 transition-colors duration-300 lg:text-xl">
            {namaDokter}
          </h3>
          <p className="text-xs font-semibold tracking-wider text-slate-400 uppercase">
            {spesialis}
          </p>
        </div>

        <div className="pt-1">
          <p className="mb-2 text-[10px] font-bold tracking-widest text-slate-400 uppercase">
            Jadwal Praktik
          </p>

          <div className="divide-y divide-slate-100 overflow-hidden rounded-xl border border-slate-100 bg-slate-50/50">
            {Schedules.map((schedule, index) => (
              <div
                key={index}
                className="bg-transparent px-3 py-2 transition-colors duration-200 hover:bg-white"
              >
                <DayTime Day={schedule.Day} Time={schedule.Time} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardDokter;
