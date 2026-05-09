"use client";

import {
  Users,
  Stethoscope,
  Building2,
  HeartPulse,
  Newspaper,
  CalendarDays,
  Star,
} from "lucide-react";
import useDashboard from "./useDashboard";
import { IDashboard } from "@/types/dashboard";

interface StatCard {
  title: string;
  key: keyof IDashboard;
  icon: React.ElementType;
  color: string;
  href: string;
}

const STAT_CARDS: StatCard[] = [
  {
    title: "Total User",
    key: "totalUser",
    icon: Users,
    color: "bg-blue-500/80",
    href: "/admin/users",
  },
  {
    title: "Total Dokter",
    key: "totalDokter",
    icon: Stethoscope,
    color: "bg-green-500/80",
    href: "/admin/dokter",
  },
  {
    title: "Total Poli",
    key: "totalPoli",
    icon: Building2,
    color: "bg-yellow-500/80",
    href: "/admin/poli",
  },
  {
    title: "Total Layanan",
    key: "totalLayanan",
    icon: HeartPulse,
    color: "bg-pink-500/80",
    href: "/admin/layanan",
  },
  {
    title: "Total Berita",
    key: "totalBerita",
    icon: Newspaper,
    color: "bg-purple-500/80",
    href: "/admin/berita",
  },
  {
    title: "Total Jadwal",
    key: "totalJadwal",
    icon: CalendarDays,
    color: "bg-orange-500/80",
    href: "/admin/jadwal",
  },
  {
    title: "Total Review",
    key: "totalReview",
    icon: Star,
    color: "bg-red-500/80",
    href: "/admin/review",
  },
];

export default function Dashboard() {
  const { dataStatus, isLoadingStatus } = useDashboard();

  return (
    <div>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {STAT_CARDS.map((card) => (
          <a
            key={card.key}
            href={card.href}
            className="rounded-xl border bg-white p-6 shadow-sm transition-shadow hover:shadow-md"
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-500">{card.title}</p>
                {isLoadingStatus ? (
                  <div className="mt-1 h-8 w-16 animate-pulse rounded bg-gray-200" />
                ) : (
                  <p className="mt-1 text-3xl font-bold text-slate-800">
                    {dataStatus?.[card.key] ?? 0}
                  </p>
                )}
              </div>
              <div
                className={`${card.color} flex h-12 w-12 items-center justify-center rounded-xl`}
              >
                <card.icon className="h-6 w-6 text-white" />
              </div>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}
