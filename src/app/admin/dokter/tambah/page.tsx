import TambahDokter from "@/components/views/admin/dokter/TambahDokter/TambahDokter";
import type { Metadata } from "next";
import { Suspense } from "react";

export const metadata: Metadata = {
  title: "Tambah Dokter",
};

export default function TambahDokterPage() {
  return (
    <Suspense fallback={<div className="p-6 text-gray-400">Memuat...</div>}>
      <TambahDokter />
    </Suspense>
  );
}
