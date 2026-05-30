import { Suspense } from "react";
import type { Metadata } from "next";
import DetailBerita from "@/components/views/admin/berita/DetailBerita/DetailBerita";

export const metadata: Metadata = {
  title: "Detail Berita",
};

export default function DetailBeritaPage() {
  return (
    <Suspense fallback={<div className="p-6 text-gray-400">Memuat...</div>}>
      <DetailBerita />
    </Suspense>
  );
}
