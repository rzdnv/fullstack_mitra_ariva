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
      <section className="bg-havelock-blue-900 flex flex-col items-center px-6 py-10 xl:px-30 xl:py-16">
        <div className="flex w-full flex-col divide-y divide-white/20 lg:flex-row lg:divide-x lg:divide-y-0">
          {/* Email */}
          <div className="flex w-full flex-col items-center justify-center gap-4 py-8 text-center">
            <Mail className="h-10 w-10 text-white lg:h-16 lg:w-16" />
            <p className="text-lg font-semibold text-white lg:text-xl">
              Kontak Kami
            </p>
            <Link
              href="https://mail.google.com/mail/?view=cm&fs=1&to=rskbmitraariva@gmail.com"
              target="_blank"
              className="text-white transition-all duration-300 hover:underline md:text-lg"
            >
              rskbmitraariva@gmail.com
            </Link>
          </div>

          {/* Phone */}
          <div className="flex w-full flex-col items-center justify-center gap-4 py-8 text-center">
            <Phone className="h-10 w-10 text-white lg:h-16 lg:w-16" />
            <p className="text-lg font-semibold text-white lg:text-xl">
              Hubungi Kami
            </p>
            <Link
              href="tel:0281571328"
              className="text-white transition-all duration-300 hover:underline md:text-lg"
            >
              0281-571328
            </Link>
          </div>

          {/* WhatsApp */}
          <div className="flex w-full flex-col items-center justify-center gap-4 py-8 text-center">
            <FaWhatsapp className="h-10 w-10 text-white lg:h-16 lg:w-16" />
            <p className="text-lg font-semibold text-white lg:text-xl">
              WhatsApp
            </p>
            <Link
              href="https://wa.me/6281245489477?text=Halo%20saya%20ingin%20bertanya"
              target="_blank"
              className="text-white transition-all duration-300 hover:underline md:text-lg"
            >
              0812-4548-9477
            </Link>
          </div>

          {/* Location */}
          <div className="flex w-full flex-col items-center justify-center gap-4 py-8 text-center">
            <MapPin className="h-10 w-10 text-white lg:h-16 lg:w-16" />
            <p className="text-lg font-semibold text-white lg:text-xl">
              Kunjungi Rumah Sakit Kami
            </p>

            <Link
              href="https://maps.app.goo.gl/DEk3FHtgZJ15f8WF7"
              target="_blank"
            >
              <Button className="hover:text-havelock-blue-600 border border-white bg-transparent px-6 py-3 text-white transition hover:bg-white">
                Lihat Peta
              </Button>
            </Link>
          </div>
        </div>

        <div className="mt-10 flex w-full flex-col items-center justify-between gap-10 lg:flex-row">
          <div className="mb-10 flex flex-col items-center gap-6 lg:mb-0 lg:flex-row">
            <Image
              src="/images/logo/logo.png"
              alt="logo"
              width={160}
              height={80}
              className="object-contain"
            />

            <div className="flex h-full flex-col items-center justify-center gap-2">
              <h2 className="text-xl font-bold text-white lg:text-2xl">
                Follow RSKB Mitra Ariva
              </h2>

              <div className="flex w-full justify-center gap-4 lg:justify-start">
                {SOSIAL_ITEMS.map((item) => (
                  <Link
                    key={`sosial-${item.label}`}
                    href={item.href}
                    target="_blank"
                    className="hover:text-havelock-blue-600 rounded-full border p-2 text-xl text-white transition-all duration-300 hover:bg-white lg:text-4xl"
                  >
                    {item.icon}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div className="mb-10 flex flex-col items-end justify-center gap-2 lg:mb-0">
            <h2 className="text-xl font-bold text-white lg:mb-2 lg:text-2xl">
              About RSKB Mitra Ariva
            </h2>
            <div className="flex w-full flex-col justify-center gap-5 text-center lg:flex-row lg:text-lg">
              {NAV_ITEMS.map((item) => (
                <Link
                  key={`footer-nav-${item.label}`}
                  href={item.href}
                  className="cursor-pointer text-white transition-all duration-300 hover:underline"
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
        <p className="w-full py-4 text-center text-xs text-slate-800 lg:text-sm">
          © 2026 Rumah Sakit Khusus Bedah Mitra Ariva. All rights reserved
        </p>
      </section>
    </footer>
  );
};

export default Footer;
