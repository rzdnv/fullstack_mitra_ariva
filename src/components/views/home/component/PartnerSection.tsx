import Image from "next/image";

const PARTNERS = [
  { src: "/images/logo/mitra/bpjskesehatan.svg", alt: "BPJS Kesehatan" },
  {
    src: "/images/logo/mitra/bpjsketenagakerjaan.svg",
    alt: "BPJS Ketenagakerjaan",
  },
  { src: "/images/logo/mitra/halodoc.webp", alt: "Halodoc" },
  { src: "/images/logo/mitra/bcalife.svg", alt: "BCA Life" },
  { src: "/images/logo/mitra/bnilife.webp", alt: "BNI Life" },
  { src: "/images/logo/mitra/brilife.svg", alt: "BRI Life" },
  { src: "/images/logo/mitra/mandiriinhealth.svg", alt: "Mandiri Inhealth" },
  { src: "/images/logo/mitra/megainsurance.png", alt: "Mega Insurance" },
  { src: "/images/logo/mitra/pertamina.png", alt: "Pertamina" },
  { src: "/images/logo/mitra/admedika.png", alt: "AdMedika" },
  { src: "/images/logo/mitra/bumiputera.png", alt: "Bumiputera" },
];

const PartnerSection = () => {
  const marqueeItems = [...PARTNERS, ...PARTNERS];

  return (
    <div className="flex w-full flex-col items-center gap-10 overflow-hidden px-20 py-10 lg:py-30">
      <div className="flex flex-col items-center gap-4">
        <p className="text-havelock-blue-500 text-center tracking-tight md:text-xl">
          ✦ Kemudahan Layanan Pasien
        </p>
        <h1 className="font-DMSerif max-w-4xl text-center text-3xl text-slate-800 md:text-5xl">
          Melayani Pasien Umum, BPJS, & Asuransi
        </h1>
      </div>

      <div className="animate-marquee flex gap-10 md:gap-20">
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
