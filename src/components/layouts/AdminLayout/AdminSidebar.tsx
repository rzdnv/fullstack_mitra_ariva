"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarSeparator,
} from "@/components/ui/sidebar";
import { LogOut, Loader2 } from "lucide-react";
import { cn } from "@/lib/utils";
import { useSession } from "next-auth/react";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import useLogout from "@/hooks/useLogout";
import { ADMIN_NAV_ITEMS } from "@/components/shared/constant/Nav.Constant";

export default function AdminSidebar() {
  const pathname = usePathname();
  const { data: session } = useSession();
  const { handleLogout, isPendingLogout } = useLogout();

  const isAdmin = session?.user?.role === "ADMIN";

  return (
    <Sidebar>
      {/* Header */}
      <SidebarHeader className="px-4 py-5">
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/images/logo/logo.png"
            alt="logo"
            width={40}
            height={40}
            className="rounded-lg"
          />
          <div>
            <p className="text-sm font-bold text-slate-800">RSKB Mitra Ariva</p>
            <p className="text-xs text-gray-400">Panel Admin</p>
          </div>
        </Link>
      </SidebarHeader>

      <SidebarSeparator />

      {/* Content */}
      <SidebarContent>
        {ADMIN_NAV_ITEMS.map((group) => {
          const filteredItems = group.items.filter(
            (item) => !item.adminOnly || isAdmin,
          );

          if (filteredItems.length === 0) return null;

          return (
            <SidebarGroup key={group.group}>
              <SidebarGroupLabel>{group.group}</SidebarGroupLabel>
              <SidebarMenu>
                {filteredItems.map((item) => {
                  const isActive = pathname === item.href;
                  return (
                    <SidebarMenuItem key={item.href}>
                      <SidebarMenuButton
                        asChild
                        isActive={isActive}
                        tooltip={item.label}
                      >
                        <Link
                          href={item.href}
                          className={cn(
                            "flex items-center gap-3",
                            isActive && "font-semibold",
                          )}
                        >
                          <item.icon className="h-4 w-4" />
                          <span>{item.label}</span>
                        </Link>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                  );
                })}
              </SidebarMenu>
            </SidebarGroup>
          );
        })}
      </SidebarContent>

      <SidebarSeparator />

      {/* Footer */}
      <SidebarFooter className="px-4 py-4">
        <div className="mb-3 flex items-center gap-3">
          <Avatar className="h-9 w-9">
            <AvatarFallback className="bg-blue-600 text-sm font-bold text-white">
              {session?.user?.username?.charAt(0).toUpperCase() ?? "U"}
            </AvatarFallback>
          </Avatar>
          <div className="min-w-0 flex-1">
            <p className="truncate text-sm font-semibold text-slate-800">
              {session?.user?.username ?? "User"}
            </p>
            <Badge variant="secondary" className="mt-0.5 text-xs">
              {session?.user?.role ?? "EDITOR"}
            </Badge>
          </div>
        </div>

        <button
          onClick={handleLogout}
          disabled={isPendingLogout}
          className="flex w-full items-center gap-3 rounded-md px-3 py-2 text-sm text-red-500 transition-colors hover:bg-red-50 disabled:opacity-50"
        >
          {isPendingLogout ? (
            <Loader2 className="h-4 w-4 animate-spin" />
          ) : (
            <LogOut className="h-4 w-4" />
          )}
          Logout
        </button>
      </SidebarFooter>
    </Sidebar>
  );
}
