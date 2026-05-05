import Image from "next/image";

const HighlightSection = () => {
  return (
    <div className="w-full py-10 px-10 md:px-20">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="grid grid-cols-2 gap-4">
          <Image
            src="/images/general/highlight1.webp"
            alt="highlight"
            width={300}
            height={400}
            className="rounded-2xl w-80 aspect-square place-self-end md:aspect-auto md:h-100 object-cover"
          />
          <Image
            src="/images/general/highlight4.webp"
            alt="highlight"
            width={300}
            height={400}
            className="rounded-2xl aspect-square w-full md:w-70 md:h-70 self-end object-cover"
          />
          <Image
            src="/images/general/highlight3.webp"
            alt="highlight"
            width={300}
            height={400}
            className="rounded-2xl w-full aspect-square md:aspect-video md:h-60 object-cover"
          />
          <Image
            src="/images/general/highlight2.webp"
            alt="highlight"
            width={300}
            height={400}
            className="rounded-2xl w-80 aspect-square md:aspect-auto md:h-100 object-cover"
          />
        </div>
        <div className="flex gap-4 flex-col justify-center">
          <p className="text-havelock-blue-500 text-center md:text-xl tracking-tight">
            ✦ Pemulihan Anda Adalah Fokus Kami
          </p>
          <h1 className="font-DMSerif text-3xl md:text-5xl text-center max-w-4xl text-slate-800  md:mb-8">
            Di Sini, Kesembuhan anda menjadi prioritas utama
          </h1>
          <p className=" text-sm lg:text-base text-slate-700 text-justify px-0 md:px-20">
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
