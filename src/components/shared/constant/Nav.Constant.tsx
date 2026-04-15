import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";

const NAV_ITEMS = [
  { label: "Home", href: "/" },
  { label: "Dokter", href: "/dokter" },
  { label: "Jadwal Dokter", href: "/jadwaldokter" },
  { label: "Layanan", href: "/layanan" },
];

const NAV_PROFILE = [
  { label: "Visi Misi", href: "/visimisi" },
  { label: "Tentang Kami", href: "/tentangkami" },
];

const BUTTON_ITEMS = [
  {
    label: "Login",
    href: "/auth/login",
    classname: "bg-cerise-red-600 hover:bg-cerise-red-500/70",
    variant: "default" as const,
  },
  {
    label: "Register",
    href: "/auth/register",
    classname:
      "border-cerise-red-600 text-cerise-red-600 hover:border-cerise-red-500/70 hover:text-cerise-red-500/70",
    variant: "outline" as const,
  },
];

const SOSIAL_ITEMS = [
  {
    label: "Facebook",
    href: "https://www.facebook.com/p/RSKB-Mitra-Ariva-100077028291181/",
    icon: <FaFacebook />,
  },
  {
    label: "Instagram",
    href: "https://instagram.com/rskbmitraariva",
    icon: <FaInstagram />,
  },
  {
    label: "Youtube",
    href: "https://www.youtube.com/channel/UCjG64fMScEg1dIhQHTI4_fg",
    icon: <FaYoutube />,
  },
];

export { NAV_ITEMS, NAV_PROFILE, BUTTON_ITEMS, SOSIAL_ITEMS };
