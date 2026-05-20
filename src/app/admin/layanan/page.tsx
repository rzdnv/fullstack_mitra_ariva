import LayananList from "@/components/views/admin/layanan/LayananList/LayananList";
import type { Metadata } from "next";
import { Suspense } from "react";

export const metadata: Metadata = {
  title: "Kelola Layanan",
};

export default function LayananPage() {
  return (
    <Suspense fallback={<div className="p-6 text-gray-400">Memuat...</div>}>
      <LayananList />
    </Suspense>
  );
}
