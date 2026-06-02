"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";

import "swiper/css";
import "swiper/css/effect-fade";
import Image from "next/image";

const images = [
  "/images/general/hero/hero2.webp",
  "/images/general/hero/hero3.webp",
  "/images/general/hero/hero4.webp",
];

const HeroSection = () => {
  return (
    <section className="relative h-[75vh] w-full overflow-hidden lg:h-screen">
      <Swiper
        modules={[Autoplay, EffectFade]}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        loop
        effect="fade"
        fadeEffect={{ crossFade: true }}
        speed={1200}
        className="h-full w-full"
      >
        {images.map((img, i) => (
          <SwiperSlide key={i} className="overflow-hidden">
            {({ isActive }) => (
              <div className="relative h-full w-full">
                <div
                  className={`absolute inset-0 bg-cover bg-center transition-transform duration-5000 ease-out ${
                    isActive ? "scale-110" : "scale-100"
                  }`}
                  style={{ backgroundImage: `url(${img})` }}
                />

                <div className="from-havelock-blue-950/80 via-havelock-blue-900/50 to-havelock-blue-950/30 absolute inset-0 bg-linear-to-t" />

                {/* Konten Utama */}
                <div className="relative z-10 flex h-full w-full items-center justify-center p-6">
                  <div className="flex flex-col items-center gap-6 rounded-xl text-center lg:flex-row lg:text-left">
                    <Image
                      src="/images/logo/logo.png"
                      alt="logo"
                      width={200}
                      height={200}
                      className={`w-40 transform object-contain brightness-110 drop-shadow-[0_4px_12px_rgba(250,250,250,0.2)]`}
                    />

                    <div
                      className={`hidden h-20 w-px bg-white/30 transition-all delay-300 duration-1000 lg:block`}
                    />

                    <div className="text-white">
                      <h1
                        className={`font-playfair transform text-2xl font-bold tracking-wider transition-all delay-300 duration-1000 lg:text-5xl`}
                      >
                        RSKB
                      </h1>
                      <p
                        className={`mt-1 transform text-5xl font-bold tracking-tight transition-all delay-500 duration-1000 lg:text-8xl`}
                      >
                        MITRA ARIVA
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default HeroSection;
