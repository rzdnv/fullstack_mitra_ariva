import TambahBerita from "@/components/views/admin/berita/TambahBerita/TambahBerita";
import type { Metadata } from "next";
import { Suspense } from "react";

export const metadata: Metadata = {
  title: "Tambah Berita",
};

export default function TambahBeritaPage() {
  return (
    <Suspense fallback={<div className="p-6 text-gray-400">Memuat...</div>}>
      <TambahBerita />
    </Suspense>
  );
}
