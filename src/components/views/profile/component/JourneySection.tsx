import CountUp from "react-countup";

const JourneySection = () => {
  return (
    <section className="space-y-8">
      <h1 className="text-3xl font-bold text-slate-900 lg:text-5xl">
        Perjalanan Kami
      </h1>

      <div className="flex flex-col gap-4 lg:flex-row">
        <div className="flex items-center">
          <CountUp
            start={0}
            end={20}
            duration={3}
            className="font-DMSerif text-havelock-blue-500 text-9xl"
          />
          <span className="font-DMSerif text-havelock-blue-500 text-7xl">
            +
          </span>
        </div>

        <div className="space-y-2">
          <h2 className="font-DMSerif text-lg font-light lg:text-xl">
            Dua Dekade Mengabdi untuk Kesembuhan Anda
          </h2>
          <p className="text-justify lg:text-lg">
            <b>RSKB Mitra Ariva</b> lahir dari sebuah visi mulia pada{" "}
            <b>5 April 2002</b>. Didirikan oleh{" "}
            <b>Yayasan Mitra Keluarga Purwokerto</b>, institusi ini tumbuh
            sebagai lembaga medis yang bersifat sosial dan independen. Kami
            berdiri tegak tanpa afiliasi politik, serta menjunjung tinggi
            inklusivitas bagi seluruh lapisan masyarakat tanpa memandang suku,
            agama, maupun status sosial. Seiring perkembangan zaman dan
            regulasi, pada tahun 2022, pengelolaan RSKB Mitra Ariva resmi
            bertransformasi di bawah naungan <b>PT Mitra Arum Medika</b> untuk
            menghadirkan manajemen kesehatan yang lebih modern dan progresif.
          </p>
        </div>
      </div>

      <div className="space-y-2">
        <h2 className="font-DMSerif text-lg font-light lg:text-xl">
          Mengapa Kami Ada?
        </h2>
        <p className="text-justify lg:text-lg">
          Kehadiran kami merupakan bagian integral dari pembangunan kesehatan di
          wilayah <b>Ajibarang dan sekitarnya</b>. Kami percaya bahwa layanan
          bedah berkualitas tidak harus mahal; itulah sebabnya kami berkomitmen
          untuk tetap <b>terjangkau bagi seluruh lapisan masyarakat</b>. Kami
          tidak hanya mengobati, tetapi juga berupaya menciptakan lingkungan dan
          perilaku hidup yang lebih bersih serta sehat bagi komunitas kita.
        </p>
      </div>
    </section>
  );
};

export default JourneySection;
