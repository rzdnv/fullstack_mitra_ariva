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
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useSession } from "next-auth/react";
import { LogOut, User, UserRound } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const MobileMenu = dynamic(() => import("./MobileMenu"), { ssr: false });

const Navbar = () => {
  const pathname = usePathname();
  const router = useRouter();
  const { data: session, status } = useSession();

  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLogout = async () => {
    await fetch("/api/auth/logout", { method: "POST" });

    router.push("/");
    router.refresh();
  };

  return (
    <nav className="fixed top-0 z-50 w-full px-4 pt-5">
      <div
        className={cn(
          "container mx-auto flex h-20 items-center justify-between rounded-full border px-8 transition-all duration-300",
          scrolled
            ? "border-gray-200 bg-white shadow-xl"
            : "border-white/20 bg-white/80 backdrop-blur-md",
        )}
      >
        {/* LEFT */}
        <div className="flex items-center gap-10">
          {/* LOGO */}
          <Link href="/" className="flex items-center gap-3">
            <Image
              src="/images/logo/logo.png"
              alt="logo"
              width={100}
              height={100}
              className="w-14"
            />

            <div className="leading-tight">
              <h1 className="text-lg font-bold text-slate-800">
                RSKB Mitra Ariva
              </h1>
            </div>
          </Link>

          {/* DESKTOP MENU */}
          <NavigationMenu className="hidden lg:flex">
            <NavigationMenuList className="gap-8">
              {NAV_ITEMS.map((item) => (
                <NavigationMenuItem key={item.label}>
                  <Link
                    href={item.href}
                    className={cn(
                      "hover:text-havelock-blue-500 relative text-sm font-medium text-gray-700 transition-colors",
                      pathname === item.href && "text-havelock-blue-500",
                    )}
                  >
                    {item.label}

                    {pathname === item.href && (
                      <span className="bg-havelock-blue-500 absolute -bottom-2 left-0 h-0.5 w-full rounded-full" />
                    )}
                  </Link>
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        {/* RIGHT */}
        <div className="flex items-center gap-3">
          <div className="hidden md:flex">
            {status === "loading" ? (
              <div className="h-11 w-32 animate-pulse rounded-full bg-gray-200" />
            ) : session ? (
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <button className="flex items-center gap-2 rounded-full border border-gray-200 bg-white px-4 py-2 shadow-sm transition hover:shadow-md">
                    <div className="bg-havelock-blue-500 flex h-9 w-9 items-center justify-center rounded-full font-bold text-white">
                      {session.user?.username?.charAt(0).toUpperCase() ?? "U"}
                    </div>

                    <div className="text-left">
                      <p className="text-sm font-semibold text-gray-800">
                        {session.user?.username}
                      </p>
                      <p className="text-xs text-gray-500">
                        {session.user?.role}
                      </p>
                    </div>
                  </button>
                </DropdownMenuTrigger>

                <DropdownMenuContent align="end" className="w-52">
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
                    className="cursor-pointer text-red-500 focus:text-red-500"
                  >
                    <LogOut className="mr-2 h-4 w-4" />
                    Logout
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            ) : (
              <Button
                asChild
                className="bg-havelock-blue-500 hover:bg-havelock-blue-600 h-12 rounded-full text-white shadow-lg"
              >
                <Link href="/login" className="flex items-center gap-3">
                  <div className="text-havelock-blue-500 flex h-7 w-7 items-center justify-center rounded-full bg-white">
                    <UserRound className="h-4 w-4" />
                  </div>
                </Link>
              </Button>
            )}
          </div>

          {/* MOBILE */}
          <MobileMenu pathname={pathname} />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
