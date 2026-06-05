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
        className="relative flex min-h-[45vh] w-full items-end overflow-hidden bg-cover bg-center lg:min-h-[65vh]"
        style={{
          backgroundImage: "url('/images/general/RSKB.png')",
        }}
      >
        <div className="absolute inset-0 bg-linear-to-t from-slate-950/90 via-slate-950/40 to-transparent" />

        <div className="animate-fade-in relative z-10 mx-auto flex w-full max-w-7xl items-center gap-4 p-6 text-white lg:px-10 lg:pb-12">
          <div className="relative shrink-0 rounded-2xl border border-white/10 bg-white/10 p-2.5 shadow-lg drop-shadow-md backdrop-blur-xs">
            <Image
              src="/images/logo/logo.png"
              alt="RSKB Mitra Ariva"
              width={96}
              height={96}
              className="h-14 w-14 object-contain lg:h-20 lg:w-20"
              priority
            />
          </div>

          <div className="space-y-1">
            <span className="text-havelock-blue-300 block text-xs font-bold tracking-widest uppercase sm:text-sm">
              ✦ Profil Rumah Sakit
            </span>
            <h1 className="font-DMSerif text-2xl leading-tight tracking-tight sm:text-3xl lg:text-5xl">
              RSKB Mitra Ariva
            </h1>
          </div>
        </div>
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
