"use client";

import Link from "next/link";
import { Menu } from "lucide-react";
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

interface Props {
  pathname: string;
}

const MobileMenu = ({ pathname }: Props) => {
  return (
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
                "w-full px-3 py-2 rounded-md text-start font-medium text-gray-500 hover:havelock-blue-500 hover:bg-gray-100 transition-colors",
                pathname === item.href &&
                  "text-havelock-blue-500 bg-gray-100 font-semibold",
              )}
            >
              {item.label}
            </Link>
          ))}
        </div>
        <SheetFooter></SheetFooter>
      </SheetContent>
    </Sheet>
  );
};

export default MobileMenu;
