"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";

import "swiper/css";
import "swiper/css/effect-fade";
import Image from "next/image";
import { Button } from "@/components/ui/button";

const images = [
  "/images/general/hero1.webp",
  "/images/general/hero2.webp",
  "/images/general/hero3.webp",
  "/images/general/hero4.webp",
];

const HeroSection = () => {
  return (
    <section className="w-full h-screen mb-10">
      <Swiper
        modules={[Autoplay, EffectFade]}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        loop
        effect="fade"
        fadeEffect={{ crossFade: true }}
        speed={1200}
        className="w-full h-full"
      >
        {images.map((img, i) => (
          <SwiperSlide key={i}>
            <div
              className="w-full h-full bg-cover bg-center transition-transform duration-5000"
              style={{ backgroundImage: `url(${img})` }}
            >
              <div className="w-full h-full flex items-center justify-center md:justify-start md:items-end">
                <div className="p-6 md:p-8 bg-havelock-blue-800/70 m-20 rounded-xl flex gap-4 items-center flex-col md:flex-row">
                  <Image
                    src="/images/logo/logo_MitraAriva.png"
                    alt="logo"
                    width={200}
                    height={200}
                    className="w-50 md:w-25"
                  />
                  <div className="text-center md:text-start">
                    <h1 className="text-2xl md:text-3xl text-white font-bold ">
                      RSKB Mitra Ariva
                    </h1>
                    <p className="text-3xl font-bold text-white md:text-4xl">
                      Mitra anda menuju sehat
                    </p>
                  </div>
                  <Button
                    variant="secondary"
                    className="p-4 w-full md:w-fit text-havelock-blue-700 md:p-8 md:text-lg md:font-bold"
                  >
                    Daftar Online
                  </Button>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default HeroSection;
