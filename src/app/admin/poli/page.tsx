import PoliList from "@/components/views/admin/poli/PoliList/PoliList";
import type { Metadata } from "next";
import { Suspense } from "react";

export const metadata: Metadata = {
  title: "Kelola Poli",
};

export default function PoliPage() {
  return (
    <Suspense fallback={<div className="p-6 text-gray-400">Memuat...</div>}>
      <PoliList />
    </Suspense>
  );
}
