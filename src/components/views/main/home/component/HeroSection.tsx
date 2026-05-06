"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";

import "swiper/css";
import "swiper/css/effect-fade";
import Image from "next/image";

const images = [
  "/images/general/hero/hero1.webp",
  "/images/general/hero/hero2.webp",
  "/images/general/hero/hero3.webp",
  "/images/general/hero/hero4.webp",
];

const HeroSection = () => {
  return (
    <section className="h-[75vh] w-full lg:h-screen">
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
          <SwiperSlide key={i}>
            <div
              className="relative h-full w-full bg-cover bg-center transition-transform duration-5000"
              style={{ backgroundImage: `url(${img})` }}
            >
              <div className="flex h-full w-full items-center justify-center">
                <div className="z-10 flex flex-col items-center gap-4 rounded-xl p-6 lg:flex-row">
                  <Image
                    src="/images/logo/logo.png"
                    alt="logo"
                    width={200}
                    height={200}
                    className="w-40"
                  />
                  <div className="text-center md:text-start">
                    <h1 className="font-playfair text-2xl font-bold text-white lg:text-5xl">
                      RSKB
                    </h1>
                    <p className="text-5xl font-bold text-white lg:text-8xl">
                      MITRA ARIVA
                    </p>
                  </div>
                </div>
              </div>
              <div className="bg-havelock-blue-800/50 absolute inset-0" />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default HeroSection;
