"use client";

import { SidebarTrigger } from "@/components/ui/sidebar";
import { Separator } from "@/components/ui/separator";
import { usePathname } from "next/navigation";

const PAGE_TITLES: Record<string, string> = {
  "/admin": "Dashboard",
  "/admin/dokter": "Kelola Dokter",
  "/admin/jadwal": "Kelola Jadwal Dokter",
  "/admin/poli": "Kelola Poli",
  "/admin/layanan": "Kelola Layanan",
  "/admin/berita": "Kelola Berita",
  "/admin/review": "Kelola Review",
  "/admin/users": "Kelola User",
};

export default function AdminHeader() {
  const pathname = usePathname();
  const title = PAGE_TITLES[pathname] ?? "Admin";

  return (
    <header className="flex h-16 items-center gap-4 border-b bg-white px-6">
      <SidebarTrigger />
      <Separator orientation="vertical" className="h-6" />
      <h1 className="text-lg font-semibold text-slate-800">{title}</h1>
    </header>
  );
}
