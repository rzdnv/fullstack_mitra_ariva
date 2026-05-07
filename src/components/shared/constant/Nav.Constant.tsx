import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";
import {
  LayoutDashboard,
  Stethoscope,
  CalendarDays,
  Building2,
  HeartPulse,
  Newspaper,
  Star,
  Users,
} from "lucide-react";

// ─────────────────────────────────────────
// PUBLIC NAV
// ─────────────────────────────────────────
const NAV_ITEMS = [
  { label: "Home", href: "/" },
  { label: "Profile", href: "/profile" },
  { label: "Dokter", href: "/dokter" },
  { label: "Berita", href: "/berita" },
  { label: "Layanan", href: "/layanan" },
];

// ─────────────────────────────────────────
// SOSIAL MEDIA
// ─────────────────────────────────────────
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

const ADMIN_NAV_ITEMS = [
  {
    title: "Dashboard",
    url: "/admin",
    icon: LayoutDashboard,
    adminOnly: false,
  },
  {
    title: "Dokter",
    url: "/admin/dokter",
    icon: Stethoscope,
    adminOnly: false,
  },
  {
    title: "Jadwal Dokter",
    url: "/admin/jadwal",
    icon: CalendarDays,
    adminOnly: false,
  },
  {
    title: "Poli",
    url: "/admin/poli",
    icon: Building2,
    adminOnly: false,
  },
  {
    title: "Layanan",
    url: "/admin/layanan",
    icon: HeartPulse,
    adminOnly: false,
  },
  {
    title: "Berita",
    url: "/admin/berita",
    icon: Newspaper,
    adminOnly: false,
  },
  {
    title: "Review",
    url: "/admin/review",
    icon: Star,
    adminOnly: false,
  },
  {
    title: "Kelola User",
    url: "/admin/users",
    icon: Users,
    adminOnly: true,
  },
];

export { NAV_ITEMS, SOSIAL_ITEMS, ADMIN_NAV_ITEMS };
