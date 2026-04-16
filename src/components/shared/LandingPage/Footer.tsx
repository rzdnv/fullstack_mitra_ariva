"use client";

import Image from "next/image";
import Link from "next/link";
import { NAV_ITEMS, SOSIAL_ITEMS } from "../constant/Nav.Constant";
import { Mail, MapPin, Phone } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { Button } from "@/components/ui/button";

const Footer = () => {
  return (
    <footer>
      <section className="flex flex-col items-center bg-havelock-blue-900 px-6 py-10 xl:py-16 xl:px-30">
        <div className="flex flex-col md:flex-row w-full divide-y md:divide-y-0 md:divide-x divide-white/20">
          {/* Email */}
          <div className="flex flex-col items-center justify-center gap-4 w-full py-8 text-center">
            <Mail className="w-16 h-16 text-white" />
            <p className="text-xl text-white font-semibold">Kontak Kami</p>
            <Link
              href="https://mail.google.com/mail/?view=cm&fs=1&to=rskbmitraariva@gmail.com"
              target="_blank"
              className="text-white text-lg hover:underline"
            >
              rskbmitraariva@gmail.com
            </Link>
          </div>

          {/* Phone */}
          <div className="flex flex-col items-center justify-center gap-4 w-full py-8 text-center">
            <Phone className="w-16 h-16 text-white" />
            <p className="text-xl text-white font-semibold">Hubungi Kami</p>
            <Link
              href="tel:0281571328"
              className="text-white text-lg hover:underline"
            >
              0281-571328
            </Link>
          </div>

          {/* WhatsApp */}
          <div className="flex flex-col items-center justify-center gap-4 w-full py-8 text-center">
            <FaWhatsapp className="w-16 h-16 text-white" />
            <p className="text-xl text-white font-semibold">WhatsApp</p>
            <Link
              href="https://wa.me/6281245489477?text=Halo%20saya%20ingin%20bertanya"
              target="_blank"
              className="text-white text-lg hover:underline"
            >
              0812-4548-9477
            </Link>
          </div>

          {/* Location */}
          <div className="flex flex-col items-center justify-center gap-4 w-full py-8 text-center">
            <MapPin className="w-16 h-16 text-white" />
            <p className="text-xl text-white font-semibold">
              Kunjungi Rumah Sakit Kami
            </p>

            <Link
              href="https://maps.app.goo.gl/DEk3FHtgZJ15f8WF7"
              target="_blank"
            >
              <Button className="px-6 py-3 bg-transparent border border-white text-white hover:bg-white hover:text-havelock-blue-600 transition">
                Lihat Peta
              </Button>
            </Link>
          </div>
        </div>

        <div className="flex flex-col md:flex-row w-full justify-between items-center gap-10 mt-10">
          <div className="flex flex-col md:flex-row items-center gap-6 mb-10 md:mb-0">
            <Image
              src="/images/logo/Logo_MitraAriva.png"
              alt="logo"
              width={160}
              height={80}
              className="object-contain"
            />

            <div className="flex flex-col items-center justify-center h-full  gap-2">
              <h2 className="text-white font-bold text-2xl">
                Follow RSKB Mitra Ariva
              </h2>

              <div className="flex justify-center  md:justify-start w-full gap-4 ">
                {SOSIAL_ITEMS.map((item) => (
                  <Link
                    key={`sosial-${item.label}`}
                    href={item.href}
                    target="_blank"
                    className="text-5xl text-white rounded-full border p-2 hover:bg-white hover:text-havelock-blue-600 "
                  >
                    {item.icon}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div className="mb-10 flex flex-col gap-2 lg:mb-0 items-end justify-center">
            <h2 className="text-2xl text-white font-bold lg:mb-2">
              About RSKB Mitra Ariva
            </h2>
            <div className="flex gap-5 text-xl text-center justify-center w-full flex-col md:flex-row">
              {NAV_ITEMS.map((item) => (
                <Link
                  key={`footer-nav-${item.label}`}
                  href={item.href}
                  className="cursor-pointer hover:underline text-white"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ===== COPYRIGHT ===== */}
      <section className="bg-havelock-blue-400">
        <p className="w-full text-center py-4 text-sm">
          © 2026 Rumah Sakit Khusus Bedah Mitra Ariva. All rights reserved
        </p>
      </section>
    </footer>
  );
};

export default Footer;
