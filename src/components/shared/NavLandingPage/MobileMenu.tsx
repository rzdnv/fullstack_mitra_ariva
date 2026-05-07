"use client";

import Link from "next/link";
import { LogIn, LogOut, Menu, User } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { NAV_ITEMS } from "../constant/Nav.Constant";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

interface Props {
  pathname: string;
}

const MobileMenu = ({ pathname }: Props) => {
  const { data: session, status } = useSession();
  const router = useRouter();

  const handleLogout = async () => {
    await fetch("/api/auth/logout", {
      method: "POST",
    });

    router.push("/");
    router.refresh();
  };

  return (
    <Sheet>
      <SheetTrigger className="inline-flex items-center justify-center rounded-full border border-white/20 bg-white/80 p-2 shadow-sm backdrop-blur-md transition hover:bg-white md:hidden">
        <Menu className="h-5 w-5 text-gray-700" />
        <span className="sr-only">Open menu</span>
      </SheetTrigger>

      <SheetContent
        side="right"
        className="flex w-75 flex-col border-l bg-white p-0"
      >
        {/* HEADER */}
        <SheetHeader className="border-b px-6 py-5">
          <SheetTitle className="text-left text-xl">Menu</SheetTitle>
        </SheetHeader>

        {/* NAVIGATION */}
        <div className="flex flex-1 flex-col gap-2 px-4 py-5">
          {NAV_ITEMS.map((item) => (
            <Link
              key={`nav-side-${item.label}`}
              href={item.href}
              className={cn(
                "hover:bg-havelock-blue-50 hover:text-havelock-blue-500 rounded-xl px-4 py-3 text-sm font-medium text-gray-600 transition-all",
                pathname === item.href &&
                  "bg-havelock-blue-50 text-havelock-blue-500 font-semibold",
              )}
            >
              {item.label}
            </Link>
          ))}
        </div>

        {/* FOOTER */}
        <SheetFooter className="border-t p-4">
          {status === "loading" ? (
            <div className="h-12 w-full animate-pulse rounded-xl bg-gray-200" />
          ) : session ? (
            <div className="flex w-full flex-col gap-3">
              {/* USER INFO */}
              <div className="flex items-center gap-3 rounded-2xl border p-3">
                <div className="bg-havelock-blue-500 flex h-11 w-11 items-center justify-center rounded-full font-bold text-white">
                  {session.user?.username?.charAt(0).toUpperCase() ?? "U"}
                </div>

                <div className="flex flex-col">
                  <span className="font-semibold text-gray-800">
                    {session.user?.username}
                  </span>

                  <span className="text-xs text-gray-500">
                    {session.user?.role}
                  </span>
                </div>
              </div>

              {/* DASHBOARD */}
              <Button
                asChild
                variant="outline"
                className="h-11 justify-start rounded-xl"
              >
                <Link href="/admin" className="flex items-center gap-2">
                  <User className="h-4 w-4" />
                  Dashboard
                </Link>
              </Button>

              {/* LOGOUT */}
              <Button
                onClick={handleLogout}
                variant="destructive"
                className="h-11 rounded-xl"
              >
                <LogOut className="mr-2 h-4 w-4" />
                Logout
              </Button>
            </div>
          ) : (
            <Button
              asChild
              className="bg-havelock-blue-500 hover:bg-havelock-blue-600 h-12 w-full rounded-xl"
            >
              <Link href="/login" className="flex items-center gap-2">
                <LogIn className="h-4 w-4" />
                Login
              </Link>
            </Button>
          )}
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
};

export default MobileMenu;
