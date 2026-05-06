import Image from "next/image";

const GALLERY = [
  { src: "/images/general/hero/hero1.webp", alt: "HERO1" },
  { src: "/images/general/hero/hero1.webp", alt: "HERO1" },
  { src: "/images/general/hero/hero1.webp", alt: "HERO1" },
  { src: "/images/general/hero/hero1.webp", alt: "HERO1" },
  { src: "/images/general/hero/hero1.webp", alt: "HERO1" },
  { src: "/images/general/hero/hero1.webp", alt: "HERO1" },
  { src: "/images/general/hero/hero1.webp", alt: "HERO1" },
];

const GallerySection = () => {
  return (
    <section>
      {/* Header */}
      <div className="mb-8 flex flex-col gap-4">
        <p className="text-havelock-blue-500 tracking-tight md:text-xl">
          ✦ Galeri Kegiatan & Fasilitas
        </p>
        <h1 className="font-DMSerif max-w-4xl text-3xl text-slate-800 md:text-5xl">
          Melihat Lebih Dekat Dedikasi Kami untuk Anda
        </h1>
      </div>

      {/* Masonry */}
      <div className="columns-1 gap-4 space-y-4 sm:columns-2 lg:columns-4">
        {GALLERY.map((gallery, i) => (
          <div key={i} className="break-inside-avoid">
            <Image
              src={gallery.src}
              alt={gallery.alt}
              width={500}
              height={500}
              className="h-auto w-full rounded-xl object-cover transition duration-300 hover:scale-105"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default GallerySection;
