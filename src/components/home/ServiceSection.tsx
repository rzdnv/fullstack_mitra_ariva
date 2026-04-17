import CardReview from "../shared/CardReview/CardReview";

const ServiceSection = () => {
  return (
    <div className="flex flex-col gap-10 md:gap-15 w-full py-5 md:py-20 px-10 md:px-20 items-center ">
      <div className="flex gap-4 flex-col items-center">
        <p className="text-havelock-blue-500 text-xl tracking-tight">
          ✦ Solusi Medis Terpadu
        </p>
        <h1 className="font-playfair text-3xl md:text-5xl text-center max-w-4xl text-slate-800 font-bold">
          Layanan Profesional untuk Kualitas Hidup Lebih Baik
        </h1>
      </div>
      <div className="flex gap-4 p-2 w-full overflow-x-auto scrollbar-hide">
        <CardReview
          Name="Marisa Nafi Mughnisa"
          Date="17 februari 2026"
          Review="pelayanan nya ramah, alhamdulilah saya habis tindakan tertusuk
              paku, dengan tenaga profesional di rumah sakit ini lancar dan
              biaya terjangkau, para staf juga sangat membantu dalam prosesnya"
          Rating={5}
          Gender="cewe"
        />
        <CardReview
          Name="Farel zaqie"
          Date="11 oktober 2025"
          Review="rumah sakit langganan pelayanan oke dan memuaskan"
          Rating={5}
          Gender="cowo"
        />
        <CardReview
          Name="Wiwit Lestari"
          Date="3 oktober 2025"
          Review="Pelayanan Ramah,tempatnya nyaman dan dokternya menyenangkan."
          Rating={4}
          Gender="cewe"
        />
        <CardReview
          Name="Nur Rokhman"
          Date="14 november 2025"
          Review="Akses parkirnya enak, tidak perlu jalan kaki jauh jauh"
          Rating={5}
          Gender="cowo"
        />
        <CardReview
          Name="Hanifah Dwimutia"
          Date="20 desember 2025"
          Review="overall baguss sihh, nyaman buat berobat, bersih, pelayanan bagus. akses juga gampang, bener2 dipinggir jalan besar, ke tempat2 penting kaya atm/alfamart juga deket"
          Rating={5}
          Gender="cewe"
        />
        <CardReview
          Name="Karmila Riska"
          Date="8 november 2025"
          Review="Tempatnya nyaman dan ga berisik"
          Rating={5}
          Gender="cewe"
        />
        <CardReview
          Name="Supriyanto"
          Date="17 november 2025"
          Review="RSKB mitra ariva..fasilitas bagus,bersih dan nyaman..pelayanan memuaskan..petugas ramah dan cekatan..maju terus RSKB mitra ariva"
          Rating={5}
          Gender="cowo"
        />
      </div>
    </div>
  );
};

export default ServiceSection;
