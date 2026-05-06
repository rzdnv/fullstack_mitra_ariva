const GallerySection = () => {
  return (
    <section>
      <div className="flex flex-col gap-4">
        <p className="text-havelock-blue-500 tracking-tight md:text-xl">
          ✦ Galeri Kegiatan & Fasilitas
        </p>
        <h1 className="font-DMSerif max-w-4xl text-3xl text-slate-800 md:text-5xl">
          Melihat Lebih Dekat Dedikasi Kami untuk Anda
        </h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4"></div>
    </section>
  );
};

export default GallerySection;
