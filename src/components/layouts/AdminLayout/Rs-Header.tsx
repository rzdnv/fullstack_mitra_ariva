"use client";

import * as React from "react";
import {
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import Image from "next/image";
import Link from "next/link"; // ← tambahkan agar bisa klik ke homepage

export function RsHeader() {
  return (
    <SidebarMenu>
      <SidebarMenuItem>
        <SidebarMenuButton
          size="lg"
          className="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground"
          asChild // ← tambahkan
        >
          <Link href="/">
            {" "}
            {/* ← wrap dengan Link */}
            <div className="flex aspect-square size-8 items-center justify-center rounded-lg">
              <Image
                src="/images/logo/logo.svg"
                alt="Logo RSKB Mitra Ariva"
                width={50}
                height={50}
                className="relative z-20"
              />
            </div>
            <div className="ml-2 grid flex-1 gap-1 text-left text-sm leading-tight">
              <span className="truncate font-semibold">RSKB Mitra Ariva</span>
              <span className="truncate text-xs">Panel Admin</span>
            </div>
          </Link>
        </SidebarMenuButton>
      </SidebarMenuItem>
    </SidebarMenu>
  );
}
