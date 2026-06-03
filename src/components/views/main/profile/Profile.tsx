"use client";

import Image from "next/image";
import JourneySection from "./component/JourneySection";
import VisiMisiSection from "./component/VisiMisiSection";
import { RecapSection } from "./component/RecapSection";
import GallerySection from "./component/GallerySection";
import PartnersSection from "./component/PartnersSection";

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

      <section className="mx-auto max-w-7xl space-y-16 px-6 py-16 sm:px-10 lg:space-y-28 lg:px-20">
        <RecapSection />
        <JourneySection />
        <VisiMisiSection />
        <GallerySection />
        <PartnersSection />
      </section>
    </main>
  );
};

export default Profile;
