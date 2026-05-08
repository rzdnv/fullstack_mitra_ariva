import { MapPin, Phone } from "lucide-react";
import Link from "next/link";
import { FaWhatsapp } from "react-icons/fa";

const ContactSection = () => {
  return (
    <section className="bg-havelock-blue-900 mb-10 w-full px-10 py-2 text-white lg:px-20">
      <div className="grid grid-cols-1 divide-y divide-white/20 lg:grid-cols-3 lg:divide-x lg:divide-y-0">
        {/* Phone */}
        <div className="flex items-center gap-4 py-4 lg:justify-center">
          <div className="rounded-lg bg-white/10 p-3">
            <Phone className="h-5 w-5 text-yellow-400" />
          </div>
          <div className="flex flex-col">
            <p className="text-xs text-white/70 lg:text-sm">Darurat 24 Jam</p>
            <Link
              href="tel:0281571328"
              className="text-sm font-semibold hover:underline lg:text-base"
            >
              0281-571328
            </Link>
          </div>
        </div>

        {/* WhatsApp */}
        <div className="flex items-center gap-4 py-4 lg:justify-center">
          <div className="rounded-lg bg-white/10 p-3">
            <FaWhatsapp className="h-5 w-5 text-yellow-400" />
          </div>
          <div className="flex flex-col">
            <p className="text-xs text-white/70 lg:text-sm">WhatsApp</p>
            <Link
              href="https://wa.me/6281245489477?text=Halo%20saya%20ingin%20bertanya"
              target="_blank"
              className="text-sm font-semibold hover:underline lg:text-base"
            >
              0812-4548-9477
            </Link>
          </div>
        </div>

        {/* Location */}
        <div className="flex items-center gap-4 py-4 lg:justify-center">
          <div className="rounded-lg bg-white/10 p-3">
            <MapPin className="h-5 w-5 text-yellow-400" />
          </div>
          <div className="flex flex-col">
            <p className="text-xs text-white/70 lg:text-sm">Lokasi</p>
            <Link
              href="https://maps.app.goo.gl/DEk3FHtgZJ15f8WF7"
              target="_blank"
              className="line-clamp-1 text-sm font-semibold hover:underline lg:text-base"
            >
              Jl. Raya Ajibarang, Banyumas
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
