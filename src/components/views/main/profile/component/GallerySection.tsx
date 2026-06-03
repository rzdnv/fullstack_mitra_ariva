// import Image from "next/image";

// const GALLERY = [
//   { src: "/images/general/gallery/gallery1.webp", alt: "Gallery" },
//   { src: "/images/general/gallery/gallery2.webp", alt: "Gallery" },
//   { src: "/images/general/gallery/gallery3.webp", alt: "Gallery" },
//   { src: "/images/general/gallery/gallery4.webp", alt: "Gallery" },
//   { src: "/images/general/gallery/gallery5.webp", alt: "Gallery" },
//   { src: "/images/general/gallery/gallery6.webp", alt: "Gallery" },
//   { src: "/images/general/gallery/gallery7.webp", alt: "Gallery" },
//   { src: "/images/general/gallery/gallery8.webp", alt: "Gallery" },
//   { src: "/images/general/gallery/gallery9.webp", alt: "Gallery" },
//   { src: "/images/general/gallery/gallery10.webp", alt: "Gallery" },
//   { src: "/images/general/gallery/gallery11.webp", alt: "Gallery" },
//   { src: "/images/general/gallery/gallery12.webp", alt: "Gallery" },
//   { src: "/images/general/gallery/gallery13.webp", alt: "Gallery" },
//   { src: "/images/general/gallery/gallery14.webp", alt: "Gallery" },
// ];

// const GallerySection = () => {
//   return (
//     <section>
//       {/* Header */}
//       <div className="mb-8 flex flex-col gap-4">
//         <p className="text-havelock-blue-500 tracking-tight md:text-xl">
//           ✦ Galeri Kegiatan & Fasilitas
//         </p>
//         <h1 className="font-DMSerif max-w-4xl text-3xl text-slate-800 md:text-5xl">
//           Melihat Lebih Dekat Dedikasi Kami untuk Anda
//         </h1>
//       </div>

//       {/* Masonry */}
//       <div className="columns-1 gap-4 space-y-4 sm:columns-2 lg:columns-4">
//         {GALLERY.map((gallery, i) => (
//           <div key={i} className="break-inside-avoid">
//             <Image
//               src={gallery.src}
//               alt={gallery.alt}
//               width={500}
//               height={500}
//               className="hover:border-havelock-blue-500 h-auto w-full rounded-xl object-cover transition duration-300 hover:scale-105 hover:border-4"
//             />
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// };

// export default GallerySection;

"use client";

import { useState } from "react";
import Image from "next/image";
import { ChevronDown, ChevronUp } from "lucide-react";

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
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <section className="w-full">
      {/* Header */}
      <div className="mb-10 flex flex-col gap-3 text-center md:text-left">
        <p className="text-havelock-blue-500 text-sm font-semibold tracking-wider uppercase md:text-base">
          ✦ Galeri Kegiatan & Fasilitas
        </p>
        <h2 className="font-playfair max-w-4xl text-3xl leading-tight font-bold text-slate-800 md:text-5xl">
          Melihat Lebih Dekat Dedikasi Kami untuk Anda
        </h2>
      </div>

      {/* Masonry Grid */}
      <div className="relative">
        <div className="columns-2 gap-4 space-y-4 sm:columns-3 lg:columns-4">
          {GALLERY.map((gallery, i) => {
            // Logika sembunyikan foto ke-5 ke atas HANYA di mobile (jika belum di-expand)
            const shouldHideOnMobile = i >= 4 && !isExpanded;

            return (
              <div
                key={i}
                className={`group break-inside-avoid overflow-hidden rounded-2xl border border-slate-100 bg-slate-50 shadow-xs transition-all duration-300 hover:-translate-y-1 hover:shadow-md ${shouldHideOnMobile ? "hidden md:block" : "block"} `}
              >
                <div className="relative h-auto w-full overflow-hidden rounded-2xl">
                  <Image
                    src={gallery.src}
                    alt={gallery.alt}
                    width={400}
                    height={500}
                    className="h-auto w-full object-cover transition-transform duration-500 group-hover:scale-103"
                  />
                </div>
              </div>
            );
          })}
        </div>

        {/* Efek Gradasi Pudar (Hanya di Mobile saat kondisi tertutup) */}
        {!isExpanded && (
          <div className="pointer-events-none absolute right-0 bottom-0 left-0 h-20 bg-linear-to-t from-white via-white/20 to-transparent md:hidden" />
        )}
      </div>

      {/* Tombol "Lihat Semua" (Otomatis Tersembunyi di Desktop/Tablet) */}
      <div className="mt-8 flex justify-center md:hidden">
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-6 py-2.5 text-xs font-bold text-slate-700 shadow-xs transition-all hover:bg-slate-50 active:scale-95"
        >
          <span>
            {isExpanded ? "Sembunyikan Foto" : "Lihat Semua Galeri Foto"}
          </span>
          {isExpanded ? (
            <ChevronUp className="text-havelock-blue-500 h-4 w-4" />
          ) : (
            <ChevronDown className="text-havelock-blue-500 h-4 w-4" />
          )}
        </button>
      </div>
    </section>
  );
};

export default GallerySection;
