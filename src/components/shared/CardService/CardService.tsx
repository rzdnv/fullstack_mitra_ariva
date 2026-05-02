import { Card, CardContent, CardTitle } from "@/components/ui/card";
import Image from "next/image";

interface PropTypes {
  foto: string;
  namaLayanan: string;
  deskripsi: string;
}

const CardService = (props: PropTypes) => {
  const { foto, namaLayanan, deskripsi } = props;

  return (
    <Card className=" w-65 md:w-90 overflow-hidden rounded-2xl border-0 bg-white shadow-lg">
      {/* Foto */}
      <Image
        src={foto}
        alt={namaLayanan}
        width={400}
        height={600}
        className="h-auto w-full object-contain"
      />

      {/* Content */}
      <CardContent className="space-y-3 px-5">
        <CardTitle className="text-center md:text-xl font-bold leading-snug text-havelock-blue-800">
          {namaLayanan}
        </CardTitle>

        <p className=" px-6 text-center text-xs md:text-sm leading-relaxed text-slate-700">
          {deskripsi}
        </p>
      </CardContent>
    </Card>
  );
};

export default CardService;
