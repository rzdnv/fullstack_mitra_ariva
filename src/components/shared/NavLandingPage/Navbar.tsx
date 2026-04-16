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
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        "fixed top-0 z-50 w-full transition-all duration-500 ease-in-out px-4 ",
        scrolled
          ? "bg-white shadow-md border-b"
          : "bg-transparent border-transparent",
      )}
    >
      <div className="container mx-auto flex h-20 items-center justify-between px-4">
        <div className="flex gap-7">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 ">
            <Image
              src="/images/logo/logo_MitraAriva.png"
              alt="logo"
              width={200}
              height={200}
              className="cursor-pointer w-18"
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

          {/* Menu */}
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
                      {
                        "text-havelock-blue-500 font-bold":
                          pathname === item.href,
                      },
                    )}
                  >
                    {item.label}
                  </Link>
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        <section className="flex gap-2">
          <div className="relative hidden w-75 lg:flex"></div>
        </section>

        {/* Mobile Menu */}
        <Sheet>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="outline" size="icon">
              <Menu className="h-5 w-5" />
            </Button>
          </SheetTrigger>

          <SheetContent side="right" className="w-65 sm:w-[320px]">
            <SheetHeader>
              <SheetTitle>Navigation</SheetTitle>
            </SheetHeader>
            <div className="flex flex-col gap-3 px-2">
              {NAV_ITEMS.map((item) => (
                <Button
                  key={`nav-side-${item.label}`}
                  className="hover:text-cerise-red-600 w-full"
                  variant="ghost"
                >
                  <Link
                    href={item.href}
                    className={cn(
                      "hover:text-cerise-red-600 w-full text-start font-medium text-gray-500",
                      {
                        "text-cerise-red-600": pathname === item.href,
                      },
                    )}
                  >
                    {item.label}
                  </Link>
                </Button>
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
