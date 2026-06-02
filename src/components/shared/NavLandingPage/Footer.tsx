"use client";

import Image from "next/image";
import Link from "next/link";
import { NAV_ITEMS, SOSIAL_ITEMS } from "../constant/Nav.Constant";
import { Mail, MapPin, Phone } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

const Footer = () => {
  return (
    <footer>
      <section className="from-havelock-blue-900 to-havelock-blue-950 relative overflow-hidden bg-linear-to-b px-6 py-12 xl:px-24 xl:py-20">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {/* Email */}
          <div className="group flex flex-col items-center justify-center gap-3 rounded-2xl border border-white/10 bg-white/5 p-6 text-center backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:bg-white/10">
            <div className="group-hover:text-havelock-blue-900 rounded-xl bg-white/10 p-3 text-white transition-colors duration-300 group-hover:bg-white">
              <Mail className="h-6 w-6 lg:h-8 lg:w-8" />
            </div>
            <p className="text-sm font-semibold tracking-wide text-white/60 uppercase">
              Kontak Kami
            </p>
            <Link
              href="https://mail.google.com/mail/?view=cm&fs=1&to=rskbmitraariva@gmail.com"
              target="_blank"
              className="hover:text-havelock-blue-300 text-base font-medium break-all text-white transition-all duration-300 hover:underline"
            >
              rskbmitraariva@gmail.com
            </Link>
          </div>

          {/* Telepon */}
          <div className="group flex flex-col items-center justify-center gap-3 rounded-2xl border border-white/10 bg-white/5 p-6 text-center backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:bg-white/10">
            <div className="group-hover:text-havelock-blue-900 rounded-xl bg-white/10 p-3 text-white transition-colors duration-300 group-hover:bg-white">
              <Phone className="h-6 w-6 lg:h-8 lg:w-8" />
            </div>
            <p className="text-sm font-semibold tracking-wide text-white/60 uppercase">
              Hubungi Kami
            </p>
            <Link
              href="tel:0281571328"
              className="hover:text-havelock-blue-300 text-lg font-semibold text-white transition-all duration-300 hover:underline"
            >
              0281-571328
            </Link>
          </div>

          {/* WhatsApp */}
          <div className="group flex flex-col items-center justify-center gap-3 rounded-2xl border border-white/10 bg-white/5 p-6 text-center backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:bg-white/10">
            <div className="rounded-xl bg-white/10 p-3 text-white transition-colors duration-300 group-hover:bg-green-500 group-hover:text-white">
              <FaWhatsapp className="h-6 w-6 lg:h-8 lg:w-8" />
            </div>
            <p className="text-sm font-semibold tracking-wide text-white/60 uppercase">
              WhatsApp
            </p>
            <Link
              href="https://wa.me/6281245489477?text=Halo%20saya%20ingin%20bertanya"
              target="_blank"
              className="hover:text-havelock-blue-300 text-lg font-semibold text-white transition-all duration-300 hover:underline"
            >
              0812-4548-9477
            </Link>
          </div>

          {/* Alamat */}
          <div className="group flex flex-col items-center justify-center gap-3 rounded-2xl border border-white/10 bg-white/5 p-6 text-center backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:bg-white/10">
            <div className="group-hover:text-havelock-blue-900 rounded-xl bg-white/10 p-3 text-white transition-colors duration-300 group-hover:bg-white">
              <MapPin className="h-6 w-6 lg:h-8 lg:w-8" />
            </div>
            <p className="text-sm font-semibold tracking-wide text-white/60 uppercase">
              Lokasi Utama
            </p>
            <Link
              href="https://maps.app.goo.gl/DEk3FHtgZJ15f8WF7"
              target="_blank"
              className="hover:text-havelock-blue-300 line-clamp-2 text-base font-medium text-white transition-all duration-300 hover:underline"
            >
              Jl. Raya Ajibarang, Banyumas
            </Link>
          </div>
        </div>

        {/* Garis Pembatas Horizontal */}
        <div className="my-12 h-px w-full bg-linear-to-r from-transparent via-white/20 to-transparent" />

        {/* NAVIGASI & SOSIAL MEDIA */}
        <div className="flex flex-col items-center justify-between gap-10 lg:flex-row">
          {/* Brand & Socials */}
          <div className="flex flex-col items-center gap-6 text-center lg:flex-row lg:text-left">
            <Image
              src="/images/logo/logo.png"
              alt="logo"
              width={160}
              height={80}
              className="object-contain brightness-110 drop-shadow-[0_2px_8px_rgba(250,250,250,0.15)] filter"
            />

            <div className="flex flex-col gap-3">
              <h2 className="text-xl font-bold tracking-tight text-white lg:text-2xl">
                Follow RSKB Mitra Ariva
              </h2>
              <div className="flex justify-center gap-3 lg:justify-start">
                {SOSIAL_ITEMS.map((item) => (
                  <Link
                    key={`sosial-${item.label}`}
                    href={item.href}
                    target="_blank"
                    className="hover:text-havelock-blue-900 rounded-xl border border-white/20 p-2.5 text-lg text-white transition-all duration-300 hover:scale-110 hover:bg-white lg:text-2xl"
                  >
                    {item.icon}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* Menu Navigasi */}
          <div className="flex flex-col items-center gap-4 lg:items-end">
            <h2 className="text-xl font-bold tracking-tight text-white lg:text-2xl">
              About RSKB Mitra Ariva
            </h2>
            <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm font-medium lg:text-base">
              {NAV_ITEMS.map((item) => (
                <Link
                  key={`footer-nav-${item.label}`}
                  href={item.href}
                  className="text-white/80 transition-all duration-300 hover:text-white hover:underline"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ===== COPYRIGHT ===== */}
      <section className="bg-havelock-blue-950 border-t border-white/5">
        <p className="w-full py-5 text-center text-xs tracking-wide text-white/40 lg:text-sm">
          © 2026 Rumah Sakit Khusus Bedah Mitra Ariva. All rights reserved.
        </p>
      </section>
    </footer>
  );
};

export default Footer;
