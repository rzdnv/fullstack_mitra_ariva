"use client";

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Separator } from "@/components/ui/separator";
import { SidebarTrigger } from "@/components/ui/sidebar";
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

export default function UserHeader() {
  const pathname = usePathname();
  const title = PAGE_TITLES[pathname];

  return (
    <header className="flex h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-data-[collapsible=icon]/sidebar-wrapper:h-12">
      <div className="flex items-center gap-2 px-4">
        <SidebarTrigger className="-ml-1" />
        <Separator
          orientation="vertical"
          className="mr-2 data-[orientation=vertical]:h-4"
        />
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem className="hidden md:block">
              <BreadcrumbPage>Admin</BreadcrumbPage>{" "}
            </BreadcrumbItem>
            {title && (
              <BreadcrumbItem>
                <BreadcrumbPage>{title}</BreadcrumbPage>
              </BreadcrumbItem>
            )}
            <BreadcrumbSeparator className="hidden md:block" />
          </BreadcrumbList>
        </Breadcrumb>
      </div>
    </header>
  );
}
