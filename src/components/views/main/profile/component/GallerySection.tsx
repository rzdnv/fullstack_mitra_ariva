import Image from "next/image";

const GALLERY = [
  { src: "/images/general/gallery/gallery1.webp", alt: "Gallery" },
  { src: "/images/general/gallery/gallery2.webp", alt: "Gallery" },
  { src: "/images/general/gallery/gallery3.webp", alt: "Gallery" },
  { src: "/images/general/gallery/gallery4.webp", alt: "Gallery" },
  { src: "/images/general/gallery/gallery5.webp", alt: "Gallery" },
  { src: "/images/general/gallery/gallery6.webp", alt: "Gallery" },
  { src: "/images/general/gallery/gallery7.webp", alt: "Gallery" },
  { src: "/images/general/gallery/gallery8.webp", alt: "Gallery" },
  { src: "/images/general/gallery/gallery9.webp", alt: "Gallery" },
  { src: "/images/general/gallery/gallery10.webp", alt: "Gallery" },
  { src: "/images/general/gallery/gallery11.webp", alt: "Gallery" },
  { src: "/images/general/gallery/gallery12.webp", alt: "Gallery" },
  { src: "/images/general/gallery/gallery13.webp", alt: "Gallery" },
  { src: "/images/general/gallery/gallery14.webp", alt: "Gallery" },
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
              className="hover:border-havelock-blue-500 h-auto w-full rounded-xl object-cover transition duration-300 hover:scale-105 hover:border-4"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default GallerySection;
