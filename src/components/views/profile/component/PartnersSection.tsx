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
  { src: "/images/logo/mitra/chubb.png", alt: "CHUBB" },
  { src: "/images/logo/mitra/fwd.png", alt: "FWD" },
  { src: "/images/logo/mitra/prudential.png", alt: "Prudential" },
  { src: "/images/logo/mitra/zurich.png", alt: "Zurich" },
];

const PartnersSection = () => {
  return (
    <section className="w-full space-y-8">
      <div className="flex flex-col items-center gap-4">
        <p className="text-havelock-blue-500 text-center tracking-tight md:text-xl">
          ✦ Jaringan Kemitraan Kami
        </p>
        <h1 className="font-DMSerif max-w-4xl text-center text-3xl text-slate-800 md:text-5xl">
          Bersinergi dengan Mitra Terkemuka untuk Akses Kesehatan Anda
        </h1>
      </div>
      <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-5 lg:px-20">
        {PARTNERS.map((partner, i) => (
          <div
            key={i}
            className="flex aspect-video items-center justify-center"
          >
            <Image
              src={partner.src}
              alt={partner.alt}
              width={300}
              height={400}
              className="w-35 md:w-50"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default PartnersSection;
