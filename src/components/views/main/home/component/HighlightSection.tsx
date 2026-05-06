import Image from "next/image";

const HighlightSection = () => {
  return (
    <div className="w-full px-10 py-10 md:px-20">
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        <div className="grid grid-cols-2 gap-4">
          <Image
            src="/images/general/highlight/highlight1.webp"
            alt="highlight"
            width={300}
            height={400}
            className="aspect-square w-80 place-self-end rounded-2xl object-cover md:aspect-auto md:h-100"
          />
          <Image
            src="/images/general/highlight/highlight4.webp"
            alt="highlight"
            width={300}
            height={400}
            className="aspect-square w-full self-end rounded-2xl object-cover md:h-70 md:w-70"
          />
          <Image
            src="/images/general/highlight/highlight3.webp"
            alt="highlight"
            width={300}
            height={400}
            className="aspect-square w-full rounded-2xl object-cover md:aspect-video md:h-60"
          />
          <Image
            src="/images/general/highlight/highlight2.webp"
            alt="highlight"
            width={300}
            height={400}
            className="aspect-square w-80 rounded-2xl object-cover md:aspect-auto md:h-100"
          />
        </div>
        <div className="flex flex-col justify-center gap-4">
          <p className="text-havelock-blue-500 text-center tracking-tight md:text-xl">
            ✦ Pemulihan Anda Adalah Fokus Kami
          </p>
          <h1 className="font-DMSerif max-w-4xl text-center text-3xl text-slate-800 md:mb-8 md:text-5xl">
            Di Sini, Kesembuhan anda menjadi prioritas utama
          </h1>
          <p className="px-0 text-justify text-sm text-slate-700 md:px-20 lg:text-base">
            Rumah Sakit Khusus Bedah (RSKB) Mitra Ariva hadir sebagai mitra
            terpercaya yang mengutamakan keamanan dan kenyamanan dalam setiap
            tindakan bedah. Kami memadukan keahlian tim dokter spesialis
            berpengalaman dengan dukungan teknologi medis modern untuk menjamin
            hasil diagnosa dan perawatan yang akurat. <br />
            Kami berkomitmen memberikan pelayanan yang humanis dan dilakukan
            sepenuh hati, mulai dari konsultasi hingga masa pemulihan
            pasca-operasi. Fokus utama kami adalah membantu Anda kembali meraih
            kualitas hidup prima, agar Anda dapat beraktivitas kembali dengan
            sehat dan tenang. Di RSKB Mitra Ariva, kesembuhan Anda adalah
            prioritas tertinggi kami.
          </p>
        </div>
      </div>
    </div>
  );
};

export default HighlightSection;
