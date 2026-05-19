// src/app/admin/dokter/page.tsx
import { Suspense } from "react";
import DokterList from "@/components/views/admin/dokter/DokterList/DokterList";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Kelola Dokter",
};

export default function DokterPage() {
  return (
    <Suspense fallback={<div className="p-6 text-gray-400">Memuat...</div>}>
      <DokterList />
    </Suspense>
  );
}
