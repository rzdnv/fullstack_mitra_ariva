"use client";

import * as React from "react";
import dynamic from "next/dynamic";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
} from "@/components/ui/sidebar";
import { NavMain } from "./nav-main";
import { RsHeader } from "./Rs-Header";
import { ADMIN_NAV_ITEMS } from "@/components/shared/constant/Nav.Constant";
import { useSession } from "next-auth/react";

const NavUser = dynamic(() => import("./nav-user").then((mod) => mod.NavUser), {
  ssr: false,
});

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  const { data: session } = useSession();
  const isAdmin = session?.user?.role === "ADMIN";

  const filteredItems = ADMIN_NAV_ITEMS.filter(
    (item) => !item.adminOnly || isAdmin,
  );

  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <RsHeader />
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={filteredItems} />
      </SidebarContent>
      <SidebarFooter>
        <NavUser />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  );
}
