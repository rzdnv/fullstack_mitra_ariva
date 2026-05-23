import { Card } from "@/components/ui/card";
import Image from "next/image";

interface PropTypes {
  foto: string;
  namaLayanan: string;
}

const CardService = (props: PropTypes) => {
  const { foto, namaLayanan } = props;

  return (
    <Card className="w-65 overflow-hidden rounded-2xl border-0 bg-white shadow-lg md:w-90">
      {/* Foto */}
      <Image
        src={foto}
        alt={namaLayanan}
        width={400}
        height={600}
        className="h-auto w-full object-contain"
      />
    </Card>
  );
};

export default CardService;
