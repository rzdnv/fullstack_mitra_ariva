import Image from "next/image";

const PartnerSection = () => {
  return (
    <div className="flex flex-col gap-10 md:gap-20 w-full py-10 md:py-30 px-20 items-center overflow-hidden">
      <div className="flex gap-4 flex-col items-center">
        <p className="text-havelock-blue-500 text-xl tracking-tight">
          ✦ Kemudahan Layanan Pasien
        </p>
        <h1 className="font-playfair text-3xl md:text-5xl text-center max-w-4xl text-slate-800 font-bold">
          Melayani Pasien Umum, BPJS, & Asuransi
        </h1>
      </div>
      <div className="flex gap-10 md:gap-20 animate-marquee ">
        <Image
          src="/images/mitra/BPJSkesehatanlogo.svg"
          alt="partner"
          width={400}
          height={300}
          className="h-15 md:h-20"
        />
        <Image
          src="/images/mitra/BPJSketenagakerjaanlogo.svg"
          alt="partner"
          width={400}
          height={300}
          className="h-15 md:h-20"
        />
        <Image
          src="/images/mitra/LogoHalodoc.webp"
          alt="partner"
          width={400}
          height={300}
          className="h-15 md:h-20"
        />
        <Image
          src="/images/mitra/BNILife.webp"
          alt="partner"
          width={400}
          height={300}
          className="h-15 md:h-20"
        />
        <Image
          src="/images/mitra/BRILifelogo.svg"
          alt="partner"
          width={400}
          height={300}
          className="h-15 md:h-20"
        />
        <Image
          src="/images/mitra/LogoMandiriInhealth.svg"
          alt="partner"
          width={400}
          height={300}
          className="h-15 md:h-20"
        />

        {/* duplicate biar loop smooth */}
        <Image
          src="/images/mitra/BPJSkesehatanlogo.svg"
          alt="partner"
          width={400}
          height={300}
          className="h-15 md:h-20"
        />
        <Image
          src="/images/mitra/BPJSketenagakerjaanlogo.svg"
          alt="partner"
          width={400}
          height={300}
          className="h-15 md:h-20"
        />
        <Image
          src="/images/mitra/LogoHalodoc.webp"
          alt="partner"
          width={400}
          height={300}
          className="h-15 md:h-20"
        />
        <Image
          src="/images/mitra/BNILife.webp"
          alt="partner"
          width={400}
          height={300}
          className="h-15 md:h-20"
        />
        <Image
          src="/images/mitra/BRILifelogo.svg"
          alt="partner"
          width={400}
          height={300}
          className="h-15 md:h-20"
        />
        <Image
          src="/images/mitra/LogoMandiriInhealth.svg"
          alt="partner"
          width={400}
          height={300}
          className="h-15 md:h-20"
        />
      </div>
    </div>
  );
};

export default PartnerSection;
