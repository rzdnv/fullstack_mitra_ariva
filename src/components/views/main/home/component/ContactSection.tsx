import { MapPin, Phone } from "lucide-react";
import Link from "next/link";
import { FaWhatsapp } from "react-icons/fa";

const ContactSection = () => {
  return (
    <section className="relative z-10 mx-auto -mt-8 mb-12 w-full max-w-7xl px-4 sm:px-6 lg:px-8">
      <div className="from-havelock-blue-900 via-havelock-blue-950 to-havelock-blue-900 shadow-havelock-blue-950/20 rounded-2xl border border-white/10 bg-linear-to-r p-2 text-white shadow-xl">
        <div className="grid grid-cols-1 divide-y divide-white/10 md:grid-cols-3 md:divide-x md:divide-y-0">
          {/* Phone / Darurat */}
          <Link
            href="tel:0281571328"
            className="group flex items-center gap-4 rounded-xl px-6 py-4 transition-all duration-300 hover:bg-white/5 md:rounded-none md:first:rounded-l-xl"
          >
            <div className="rounded-xl border border-red-500/20 bg-red-500/10 p-3 text-red-400 transition-all duration-300 group-hover:scale-110 group-hover:bg-red-500 group-hover:text-white">
              <Phone className="h-5 w-5 transition-colors duration-300" />
            </div>
            <div className="flex flex-col">
              <p className="text-xs font-medium tracking-wider text-white/60 uppercase transition-colors duration-300 group-hover:text-white/80">
                Darurat 24 Jam
              </p>
              <span className="text-sm font-medium tracking-wide lg:text-base">
                0281-571328
              </span>
            </div>
          </Link>

          {/* WhatsApp */}
          <Link
            href="https://wa.me/6281245489477?text=Halo%20saya%20ingin%20bertanya"
            target="_blank"
            className="group flex items-center gap-4 rounded-xl px-6 py-4 transition-all duration-300 hover:bg-white/5 md:rounded-none"
          >
            <div className="rounded-xl border border-green-500/20 bg-green-500/10 p-3 text-green-400 transition-all duration-300 group-hover:scale-110 group-hover:bg-green-500 group-hover:text-white">
              <FaWhatsapp className="h-5 w-5 transition-colors duration-300" />
            </div>
            <div className="flex flex-col">
              <p className="text-xs font-medium tracking-wider text-white/60 uppercase transition-colors duration-300 group-hover:text-white/80">
                WhatsApp Online
              </p>
              <span className="text-sm font-medium tracking-wide lg:text-base">
                0812-4548-9477
              </span>
            </div>
          </Link>

          {/* Location */}
          <Link
            href="https://maps.app.goo.gl/DEk3FHtgZJ15f8WF7"
            target="_blank"
            className="group flex items-center gap-4 rounded-xl px-6 py-4 transition-all duration-300 hover:bg-white/5 md:rounded-none md:last:rounded-r-xl"
          >
            <div className="rounded-xl border border-amber-500/20 bg-amber-500/10 p-3 text-amber-400 transition-all duration-300 group-hover:scale-110 group-hover:bg-amber-500 group-hover:text-white">
              <MapPin className="h-5 w-5 transition-colors duration-300" />
            </div>
            <div className="flex min-w-0 flex-col">
              <p className="text-xs font-medium tracking-wider text-white/60 uppercase transition-colors duration-300 group-hover:text-white/80">
                Lokasi Rumah Sakit
              </p>
              <span className="truncate text-sm font-medium tracking-wide lg:text-base">
                Jl. Raya Ajibarang, Banyumas
              </span>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
