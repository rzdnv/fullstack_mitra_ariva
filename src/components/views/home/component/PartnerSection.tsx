import Image from "next/image";

const PARTNERS = [
  { src: "/images/logo/mitra/bpjskesehatan.svg", alt: "BPJS Kesehatan" },
  {
    src: "/images/logo/mitra/bpjsketenagakerjaan.svg",
    alt: "BPJS Ketenagakerjaan",
  },
  { src: "/images/logo/mitra/halodoc.webp", alt: "Halodoc" },
  { src: "/images/logo/mitra/bnilife.webp", alt: "BNI Life" },
  { src: "/images/logo/mitra/brilife.svg", alt: "BRI Life" },
  { src: "/images/logo/mitra/mandiriinhealth.svg", alt: "Mandiri Inhealth" },
];

const PartnerSection = () => {
  const marqueeItems = [...PARTNERS, ...PARTNERS];

  return (
    <div className="flex flex-col gap-10 w-full py-30 px-20 items-center overflow-hidden">
      <div className="flex gap-4 flex-col items-center">
        <p className="text-havelock-blue-500 text-center md:text-xl tracking-tight">
          ✦ Kemudahan Layanan Pasien
        </p>
        <h1 className="font-playfair text-2xl md:text-5xl text-center max-w-4xl text-slate-800 font-bold">
          Melayani Pasien Umum, BPJS, & Asuransi
        </h1>
      </div>

      <div className="flex gap-10 md:gap-20 animate-marquee">
        {marqueeItems.map((partner, i) => (
          <Image
            key={`${partner.alt}-${i}`}
            src={partner.src}
            alt={partner.alt}
            width={400}
            height={300}
            className="h-10 md:h-20"
          />
        ))}
      </div>
    </div>
  );
};

export default PartnerSection;
