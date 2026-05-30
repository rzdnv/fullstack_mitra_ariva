import { Suspense } from "react";
import type { Metadata } from "next";
import DetailLayanan from "@/components/views/admin/layanan/DetailLayanan/DetailLayanan";

export const metadata: Metadata = {
  title: "Detail Layanan",
};

export default function DetailLayananPage() {
  return (
    <Suspense fallback={<div className="p-6 text-gray-400">Memuat...</div>}>
      <DetailLayanan />
    </Suspense>
  );
}
