import TambahLayanan from "@/components/views/admin/layanan/TambahLayanan/TambahLayanan";
import type { Metadata } from "next";
import { Suspense } from "react";

export const metadata: Metadata = {
  title: "Tambah Layanan",
};

export default function TambahLayananPage() {
  return (
    <Suspense fallback={<div className="p-6 text-gray-400">Memuat...</div>}>
      <TambahLayanan />
    </Suspense>
  );
}
