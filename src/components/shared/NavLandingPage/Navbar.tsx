"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import {
  Sheet,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import Image from "next/image";
import { NAV_ITEMS } from "../constant/Nav.Constant";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

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
                "text-xl font-bold transition-colors",
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

        {/* Mobile Menu */}
        <Sheet>
          <SheetTrigger className="md:hidden inline-flex items-center justify-center rounded-md border border-input bg-background p-2 hover:bg-accent transition-colors">
            <Menu className="h-5 w-5" />
            <span className="sr-only">Open menu</span>
          </SheetTrigger>

          <SheetContent side="right" className="w-65 sm:w-[320px]">
            <SheetHeader>
              <SheetTitle>Navigation</SheetTitle>
            </SheetHeader>
            <div className="flex flex-col gap-3 px-2">
              {NAV_ITEMS.map((item) => (
                <Link
                  key={`nav-side-${item.label}`}
                  href={item.href}
                  className={cn(
                    "w-full px-3 py-2 rounded-md text-start font-medium text-gray-500 hover:text-cerise-red-600 hover:bg-gray-100 transition-colors",
                    pathname === item.href &&
                      "text-cerise-red-600 bg-gray-100 font-semibold",
                  )}
                >
                  {item.label}
                </Link>
              ))}
            </div>
            <SheetFooter></SheetFooter>
          </SheetContent>
        </Sheet>
      </div>
    </nav>
  );
};

export default Navbar;
