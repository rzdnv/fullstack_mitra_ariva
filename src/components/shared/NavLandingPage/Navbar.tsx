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

// ← Import Sheet secara dynamic agar tidak SSR
const MobileMenu = dynamic(() => import("./MobileMenu"), { ssr: false });

const Navbar = () => {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        "fixed top-0 z-50 w-full transition-all duration-500 ease-in-out px-4",
        scrolled
          ? "bg-white shadow-md border-b"
          : "bg-gray-200/30 border-transparent",
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
              className="cursor-pointer w-16"
            />
            <p
              className={cn(
                "lg:text-xl font-bold transition-colors",
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
                        ? "text-gray-700 hover:text-havelock-blue-500"
                        : "text-white hover:text-havelock-blue-300",
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

        {/* Mobile Menu — dynamic import, no SSR */}
        <MobileMenu pathname={pathname} />
      </div>
    </nav>
  );
};

export default Navbar;
