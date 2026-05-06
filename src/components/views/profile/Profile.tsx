"use client";

import Image from "next/image";
import JourneySection from "./component/JourneySection";
import VisiMisiSection from "./component/VisiMisiSection";
// import RawatInapSection from "./component/RawatInapSection";
import { RecapSection } from "./component/RecapSection";
import GallerySection from "./component/GallerySection";

const Profile = () => {
  return (
    <main className="bg-white">
      <section
        className="relative flex min-h-[50vh] w-full items-end overflow-hidden bg-cover bg-center lg:min-h-[75vh]"
        style={{
          backgroundImage: "url('/images/general/RSKB.png')",
        }}
      >
        <div className="relative z-10 flex max-w-2xl items-center gap-4 p-6 text-white lg:p-10">
          <Image
            src="/images/logo/logo.png"
            alt="RSKB Mitra Ariva"
            width={400}
            height={400}
            className="h-1/4 w-1/4 object-contain"
          />

          <h1 className="text-3xl font-bold lg:text-5xl">RSKB Mitra Ariva</h1>
        </div>

        <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/30 to-transparent" />
      </section>

      {/* content */}
      <section className="space-y-6 px-10 py-10 lg:space-y-20 lg:px-20">
        {/* <h1 className="font-DMSerif text-center text-3xl text-slate-900 lg:text-5xl">
          Perjalanan Kami
        </h1> */}
        <RecapSection />
        <JourneySection />
        <VisiMisiSection />
        <GallerySection />
      </section>
    </main>
  );
};

export default Profile;
