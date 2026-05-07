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

// ─────────────────────────────────────────
// ADMIN NAV
// ─────────────────────────────────────────
const ADMIN_NAV_ITEMS = [
  {
    group: "Menu Utama",
    items: [
      {
        label: "Dashboard",
        href: "/admin",
        icon: LayoutDashboard,
        adminOnly: false,
      },
    ],
  },
  {
    group: "Kelola Data",
    items: [
      {
        label: "Dokter",
        href: "/admin/dokter",
        icon: Stethoscope,
        adminOnly: false,
      },
      {
        label: "Jadwal Dokter",
        href: "/admin/jadwal",
        icon: CalendarDays,
        adminOnly: false,
      },
      {
        label: "Poli",
        href: "/admin/poli",
        icon: Building2,
        adminOnly: false,
      },
      {
        label: "Layanan",
        href: "/admin/layanan",
        icon: HeartPulse,
        adminOnly: false,
      },
      {
        label: "Berita",
        href: "/admin/berita",
        icon: Newspaper,
        adminOnly: false,
      },
      {
        label: "Review",
        href: "/admin/review",
        icon: Star,
        adminOnly: false,
      },
    ],
  },
  {
    group: "Pengaturan",
    items: [
      {
        label: "Kelola User",
        href: "/admin/users",
        icon: Users,
        adminOnly: true, // ← hanya ADMIN
      },
    ],
  },
];

export { NAV_ITEMS, SOSIAL_ITEMS, ADMIN_NAV_ITEMS };
