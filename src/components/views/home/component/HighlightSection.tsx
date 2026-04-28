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
          <p className="text-havelock-blue-500 text-xl tracking-tight">
            ✦ Pemulihan Anda Adalah Fokus Kami
          </p>
          <h1 className="text-5xl font-playfair tracking-tight font-bold text-slate-800">
            Di Sini, Kesembuhan anda menjadi prioritas utama
          </h1>
          <p className=" text-lg text-slate-700 text-justify">
            Rumah Sakit Khusus Bedah Mitra Ariva hadir untuk memberikan
            pelayanan bedah yang aman dan terpercaya. Dengan dokter ahli yang
            berpengalaman dan alat medis yang modern, kami siap merawat Anda
            dengan sepenuh hati agar Anda bisa kembali beraktivitas dengan sehat
            dan tenang.
          </p>
        </div>
      </div>
    </div>
  );
};

export default HighlightSection;
