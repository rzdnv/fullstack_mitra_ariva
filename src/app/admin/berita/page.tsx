import BeritaList from "@/components/views/admin/berita/BeritaList/BeritaList";
import type { Metadata } from "next";
import { Suspense } from "react";

export const metadata: Metadata = {
  title: "Kelola Berita",
};

export default function BeritaPage() {
  return (
    <Suspense fallback={<div className="p-6 text-gray-400">Memuat...</div>}>
      <BeritaList />
    </Suspense>
  );
}
