"use client";

import Link from "next/link";
import Image from "next/image";
import dynamic from "next/dynamic";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { NAV_ITEMS } from "../constant/Nav.Constant";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { useSession } from "next-auth/react";
import { LogIn, LogOut, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useRouter } from "next/navigation";

const MobileMenu = dynamic(() => import("./MobileMenu"), { ssr: false });

const Navbar = () => {
  const pathname = usePathname();
  const router = useRouter();
  const { data: session, status } = useSession(); // ← ambil session
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLogout = async () => {
    await fetch("/api/auth/logout", { method: "POST" });
    router.push("/");
    router.refresh();
  };

  return (
    <nav
      className={cn(
        "fixed top-0 z-50 w-full px-4 transition-all duration-500 ease-in-out",
        scrolled
          ? "border-b bg-white shadow-md"
          : "border-transparent bg-gray-200/30",
      )}
    >
      <div className="container mx-auto flex h-18 items-center justify-between px-4">
        <div className="flex gap-7">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="/images/logo/logo.png"
              alt="logo"
              width={200}
              height={200}
              className="w-16 cursor-pointer"
            />
            <p
              className={cn(
                "font-bold transition-colors lg:text-xl",
                scrolled ? "text-slate-800" : "text-white",
              )}
            >
              RSKB Mitra Ariva
            </p>
          </Link>

          {/* Desktop Menu */}
          <NavigationMenu className="hidden md:flex">
            <NavigationMenuList className="gap-6">
              {NAV_ITEMS.map((item) => (
                <NavigationMenuItem key={`nav-${item.label}`}>
                  <Link
                    href={item.href}
                    className={cn(
                      "font-medium transition-colors",
                      scrolled
                        ? "hover:text-havelock-blue-500 text-gray-700"
                        : "hover:text-havelock-blue-300 text-white",
                      pathname === item.href &&
                        "text-havelock-blue-500 font-bold",
                    )}
                  >
                    {item.label}
                  </Link>
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        <div className="flex items-center gap-3">
          {/* Auth Button — Desktop */}
          <div className="hidden items-center md:flex">
            {status === "loading" ? (
              // Loading skeleton
              <div className="h-9 w-24 animate-pulse rounded-md bg-gray-200" />
            ) : session ? (
              // Sudah login → tampilkan avatar + dropdown
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <button className="flex items-center gap-2 rounded-full px-3 py-1.5 transition-colors hover:bg-gray-100">
                    {/* Avatar */}
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-600 text-sm font-bold text-white">
                      {session.user?.username?.charAt(0).toUpperCase() ?? "U"}
                    </div>
                    <span
                      className={cn(
                        "text-sm font-medium transition-colors",
                        scrolled ? "text-slate-800" : "text-white",
                      )}
                    >
                      {session.user?.username}
                    </span>
                  </button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-48">
                  <DropdownMenuLabel>
                    <div className="flex flex-col">
                      <span className="font-semibold">
                        {session.user?.username}
                      </span>
                      <span className="text-xs font-normal text-gray-400">
                        {session.user?.role}
                      </span>
                    </div>
                  </DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem asChild>
                    <Link href="/admin" className="flex items-center gap-2">
                      <User className="h-4 w-4" />
                      Dashboard
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem
                    onClick={handleLogout}
                    className="flex cursor-pointer items-center gap-2 text-red-500 focus:text-red-500"
                  >
                    <LogOut className="h-4 w-4" />
                    Logout
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            ) : (
              <Button
                asChild
                size="sm"
                className={cn(
                  "transition-colors",
                  scrolled
                    ? "bg-blue-600 text-white hover:bg-blue-700"
                    : "bg-white text-blue-600 hover:bg-blue-50",
                )}
              >
                <Link href="/login" className="flex items-center gap-2">
                  <LogIn className="h-4 w-4" />
                  Login
                </Link>
              </Button>
            )}
          </div>

          {/* Mobile Menu */}
          <MobileMenu pathname={pathname} />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
