const VisiMisiSection = () => {
  return (
    <section className="w-full">
      <div className="grid w-full grid-cols-1 gap-4 lg:grid-cols-2">
        <div className="flex flex-col items-center gap-4 rounded-xl bg-white p-8 lg:col-span-2">
          <h1 className="text-havelock-blue-500 text-xl font-bold">
            ✦ Our Internal Motto
          </h1>
          <h2 className="font-DMSerif text-center text-4xl text-slate-900 lg:text-5xl">
            Mitra Anda Menuju Sehat
          </h2>
        </div>
        <div className="border-havelock-blue-500 flex flex-col gap-4 rounded-xl border-2 bg-white p-8">
          <h1 className="text-havelock-blue-500 text-xl font-bold">✦ VISI</h1>
          <h2 className="font-DMSerif text-lg text-slate-900 lg:text-2xl">
            Menjadi Rumah Sakit Khusus Bedah swasta yang berkualitas unggul
            serta membangun kepercayaan berkelanjutan melalui integritas dan
            pelayanan medis yang terpercaya.
          </h2>
          <ol className="list-inside list-disc space-y-4 text-justify text-sm lg:text-base">
            <h2 className="text-xl font-light italic lg:text-2xl">
              WHO ARE WE?
            </h2>
            <li>
              <b>Patient-Centric</b>: Kami berkomitmen menjadi penyedia layanan
              kesehatan terpercaya yang memberikan ketenangan pikiran bagi
              pasien dengan memberikan perawatan berkualitas tinggi secara
              konsisten dan tepat sasaran.
            </li>
            <li>
              <b>Filosofi Pelayanan</b>: RSKB Mitra Ariva adalah sebuah dedikasi
              untuk memberikan standar perawatan bedah yang aman dan
              profesional, di mana setiap tindakan medis didasarkan pada rasa
              kemanusiaan dan keahlian yang mendalam untuk meningkatkan kualitas
              hidup masyarakat.
            </li>
          </ol>
        </div>
        <div className="border-havelock-blue-500 flex flex-col gap-4 rounded-xl border-2 bg-white p-8">
          <h1 className="text-havelock-blue-500 text-xl font-bold">✦ MISI</h1>
          <h2 className="font-DMSerif text-lg text-slate-900 lg:text-2xl">
            Mewujudkan keunggulan klinis melalui pelayanan yang memuaskan,
            inklusivitas tanpa batas, dan tata kelola profesional yang sesuai
            standar kesehatan nasional.
          </h2>
          <ol className="list-inside list-decimal space-y-4 text-justify text-sm lg:text-base">
            <h2 className="text-xl font-light italic lg:text-2xl">
              Our Core Pillars of Movement
            </h2>
            <li>
              <b>Layanan Prima yang Terjangkau</b>: Kami percaya bahwa layanan
              bedah berkualitas harus dapat diakses oleh masyarakat. Kami
              mengintegrasikan efisiensi operasional dengan keunggulan medis
              untuk memberikan pelayanan yang memuaskan dengan biaya yang tetap
              terjangkau.
            </li>
            <li>
              <b>Kemanusiaan Tanpa Batas</b>: Sesuai dengan nilai inklusivitas
              kami, RSKB Mitra Ariva memberikan pelayanan tanpa membedakan
              status sosial, suku, agama, dan budaya. Setiap individu yang
              datang adalah prioritas kami untuk dirawat dengan hormat dan
              kesetaraan.
            </li>
            <li>
              <b>Profesionalisme Berstandar Tinggi</b>: Fondasi kami dibangun di
              atas kepatuhan terhadap standar pelayanan yang berlaku. Kami
              memprioritaskan keselamatan pasien melalui prosedur yang disiplin,
              transparan, dan akuntabel guna memastikan setiap tindakan bedah
              memenuhi ekspektasi medis yang tertinggi.
            </li>
          </ol>
        </div>
      </div>
    </section>
  );
};

export default VisiMisiSection;
