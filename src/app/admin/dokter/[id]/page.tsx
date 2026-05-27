import { Suspense } from "react";
import type { Metadata } from "next";
import DetailDokter from "@/components/views/admin/dokter/DetailDokter/DetailDokter";

export const metadata: Metadata = {
  title: "Detail Dokter",
};

export default function DetailDokterPage() {
  return (
    <Suspense fallback={<div className="p-6 text-gray-400">Memuat...</div>}>
      <DetailDokter />
    </Suspense>
  );
}
