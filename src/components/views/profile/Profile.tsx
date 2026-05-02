import Image from "next/image";

const Profile = () => {
  return (
    <div className=" px-10 lg:px-30 py-20">
      <div className="flex flex-col gap-4">
        <h3 className="text-base lg:text-lg font-bold text-slate-800">
          Tentang Kami
        </h3>
        <h1 className="text-3xl lg:text-5xl font-bold font-playfair">
          RSKB Mitra Ariva
        </h1>

        <div className="h-full w-full overflow-hidden rounded-2xl">
          <Image
            src="/images/general/RSKB.png"
            alt="RSKB Mitra Ariva"
            width={1000}
            height={800}
            className="h-full w-full"
          />
        </div>
      </div>
      {/* <div className="p-10 lg:px-30 lg:py-20">
        <div className="flex flex-col gap-4">
          <h1 className="text-3xl lg:text-5xl font-playfair">TENTANG KAMI</h1>
          <p className="text-sm lg:text-base text-justify">
            Rumah Sakit khusus Bedah Mitra Ariva didirikan pada tanggal 5 April
            2002 dan telah memperoleh Ijin Tetap Operasional Rumah Sakit.
            Didirikan oleh Yayasan Mitra Keluarga Purwokerto, bersifat sosial,
            independen dan tidak berafiliasi pada salah satu organisasi politik,
            suku, agama, kelas sosial dan jenis kelamin tertentu. Pada tahun
            2022 seiring dengan perkembangan peraturan perundang-undangan yang
            berlaku, kepemilikan Rumah Sakit khusus Bedah Mitra Ariva berada
            dibawah kepemilikan PT Mitra Arum Medika.
          </p>
          <p className="text-sm lg:text-base text-justify">
            Awal berdirinya Rumah Sakit Khusus Bedah (RSKB) Mitra Ariva,
            merupakan bagian integral dari pembangunan di bidang kesehatan
            selain bertujuan untuk memberikan layanan kesehatan yang terjangkau
            masyarakat khususnya di wilayah Ajibarang dan sekitarnya juga
            bertujuan menciptakan lingkungan hidup dan perilaku hidup yang
            bersih dan sehat serta menyelenggarakan program fungsi rumah sakit
            yang didasarkan kepada Nilai kemanusiaan, Etika dan profesionalitas,
            Manfaat, Keadilan, Persamaan hak dan anti diskriminasi, Pemerataan,
            Perlindungan dan keselamatan pasien, serta Fungsi sosial.
          </p>
        </div>
      </div> */}
    </div>
  );
};

export default Profile;
