"use client";

import Image from "next/image";
import CountUp from "react-countup";

const Profile = () => {
  return (
    <main className="bg-white">
      <div
        className="relative w-full min-h-[50vh] lg:min-h-[75vh] overflow-hidden bg-cover bg-center flex items-end"
        style={{
          backgroundImage: "url('/images/general/RSKB.png')",
        }}
      >
        <div className="flex items-center gap-4 relative z-10 p-6 lg:p-10 text-white max-w-2xl">
          <Image
            src="/images/logo/logo.png"
            alt="RSKB Mitra Ariva"
            width={400}
            height={400}
            className="h-1/4 w-1/4 object-contain"
          />

          <h1 className="text-3xl lg:text-5xl font-bold ">RSKB Mitra Ariva</h1>
        </div>

        <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/30 to-transparent" />
      </div>

      {/* content */}
      <div className="space-y-10 lg:space-y-20 px-10 lg:px-20 py-10">
        <section className="space-y-8">
          <h1 className="text-3xl lg:text-5xl font-bold text-slate-900">
            Perjalanan Kami
          </h1>

          <div>
            <div>
              <div className="flex items-center">
                <CountUp
                  start={0}
                  end={20}
                  duration={3}
                  className="text-9xl font-DMSerif text-havelock-blue-500 "
                />
                <span className="text-7xl font-DMSerif text-havelock-blue-500 ">
                  +
                </span>
              </div>
              <p className="text-2xl font-bold">Tahun Melayani</p>
            </div>
          </div>

          <div className="space-y-2">
            <h2 className="text-xl font-DMSerif font-light">
              Dua Dekade Mengabdi untuk Kesembuhan Anda
            </h2>
            <p className="lg:text-lg text-justify">
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

          <div className="space-y-2">
            <h2 className="text-xl font-DMSerif font-light">
              Mengapa Kami Ada?
            </h2>
            <p className="lg:text-lg text-justify">
              Kehadiran kami merupakan bagian integral dari pembangunan
              kesehatan di wilayah <b>Ajibarang dan sekitarnya</b>. Kami percaya
              bahwa layanan bedah berkualitas tidak harus mahal; itulah sebabnya
              kami berkomitmen untuk tetap{" "}
              <b>terjangkau bagi seluruh lapisan masyarakat</b>. Kami tidak
              hanya mengobati, tetapi juga berupaya menciptakan lingkungan dan
              perilaku hidup yang lebih bersih serta sehat bagi komunitas kita.
            </p>
          </div>
        </section>

        <section className="w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 w-full ">
            <div className="flex flex-col gap-4 bg-white p-8 rounded-xl border-2 border-havelock-blue-500 ">
              <h1 className="text-xl font-bold text-havelock-blue-500">
                ✦ VISI
              </h1>
              <h2 className="font-DMSerif text-lg lg:text-2xl text-slate-900">
                Menjadi Rumah Sakit Khusus Bedah swasta yang berkualitas unggul
                serta membangun kepercayaan berkelanjutan melalui integritas dan
                pelayanan medis yang terpercaya.
              </h2>
              <ol className="list-disc list-inside space-y-4 text-justify text-sm lg:text-base">
                <h2 className="text-xl lg:text-2xl font-light italic">
                  WHO ARE WE?
                </h2>
                <li>
                  <b>Patient-Centric</b>: Kami berkomitmen menjadi penyedia
                  layanan kesehatan terpercaya yang memberikan ketenangan
                  pikiran bagi pasien dengan memberikan perawatan berkualitas
                  tinggi secara konsisten dan tepat sasaran.
                </li>
                <li>
                  <b>Filosofi Pelayanan</b>: RSKB Mitra Ariva adalah sebuah
                  dedikasi untuk memberikan standar perawatan bedah yang aman
                  dan profesional, di mana setiap tindakan medis didasarkan pada
                  rasa kemanusiaan dan keahlian yang mendalam untuk meningkatkan
                  kualitas hidup masyarakat.
                </li>
              </ol>
            </div>
            <div className="flex flex-col gap-4 bg-white p-8 rounded-xl border-2 border-havelock-blue-500">
              <h1 className="text-xl font-bold text-havelock-blue-500">
                ✦ MISI
              </h1>
              <h2 className="font-DMSerif text-lg lg:text-2xl text-slate-900">
                Mewujudkan keunggulan klinis melalui pelayanan yang memuaskan,
                inklusivitas tanpa batas, dan tata kelola profesional yang
                sesuai standar kesehatan nasional.
              </h2>
              <ol className="list-decimal list-inside space-y-4 text-justify text-sm lg:text-base">
                <h2 className="text-xl lg:text-2xl font-light italic">
                  Our Core Pillars of Movement
                </h2>
                <li>
                  <b>Layanan Prima yang Terjangkau</b>: Kami percaya bahwa
                  layanan bedah berkualitas harus dapat diakses oleh masyarakat.
                  Kami mengintegrasikan efisiensi operasional dengan keunggulan
                  medis untuk memberikan pelayanan yang memuaskan dengan biaya
                  yang tetap terjangkau.
                </li>
                <li>
                  <b>Kemanusiaan Tanpa Batas</b>: Sesuai dengan nilai
                  inklusivitas kami, RSKB Mitra Ariva memberikan pelayanan tanpa
                  membedakan status sosial, suku, agama, dan budaya. Setiap
                  individu yang datang adalah prioritas kami untuk dirawat
                  dengan hormat dan kesetaraan.
                </li>
                <li>
                  <b>Profesionalisme Berstandar Tinggi</b>: Fondasi kami
                  dibangun di atas kepatuhan terhadap standar pelayanan yang
                  berlaku. Kami memprioritaskan keselamatan pasien melalui
                  prosedur yang disiplin, transparan, dan akuntabel guna
                  memastikan setiap tindakan bedah memenuhi ekspektasi medis
                  yang tertinggi.
                </li>
              </ol>
            </div>
            <div className="flex flex-col bg-white lg:col-span-2 items-center gap-4 p-8 rounded-xl border-2 border-havelock-blue-500">
              <h1 className="text-xl font-bold text-havelock-blue-500">
                ✦ Our Internal Motto
              </h1>
              <h2 className="font-DMSerif text-2xl lg:text-5xl text-slate-900">
                Mitra Anda Menuju Sehat
              </h2>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
};

export default Profile;
