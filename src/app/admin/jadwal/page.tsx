import JadwalList from "@/components/views/admin/jadwal/JadwalList/JadwalList";
import type { Metadata } from "next";
import { Suspense } from "react";

export const metadata: Metadata = {
  title: "Kelola Jadwal Dokter",
};

export default function JadwalPage() {
  return (
    <Suspense fallback={<div className="p-6 text-gray-400">Memuat...</div>}>
      <JadwalList />
    </Suspense>
  );
}
