import { Card, CardContent, CardTitle } from "@/components/ui/card";
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

  return (
    <Card
      key={id}
      className="h-full w-full overflow-hidden rounded-3xl border-0 bg-havelock-blue-500/10 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
    >
      {/* Foto */}
      <div className="relative w-full overflow-hidden rounded-t-3xl">
        <Image
          src={fotoDokter}
          alt={namaDokter}
          width={400}
          height={600}
          className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
        />
      </div>

      {/* Content */}
      <CardContent className="flex flex-col justify-between space-y-4 p-4">
        <div className="flex justify-center">
          <span className="rounded-full bg-havelock-blue-500 px-4 py-1 text-xs font-semibold text-white">
            {Poli}
          </span>
        </div>

        <CardTitle className="line-clamp-2 text-center text-xl font-bold leading-snug text-havelock-blue-800">
          {namaDokter}
        </CardTitle>

        <p className="line-clamp-2 text-center text-sm leading-relaxed text-slate-700">
          {Spesialis}
        </p>
      </CardContent>
    </Card>
  );
};

export default CardDokter;
