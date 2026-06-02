import { Suspense } from "react";
import type { Metadata } from "next";
import DetailUser from "@/components/views/admin/user/DetailUser/DetailUser";

export const metadata: Metadata = {
  title: "Detail User",
};

export default function DetailUserPage() {
  return (
    <Suspense fallback={<div className="p-6 text-gray-400">Memuat...</div>}>
      <DetailUser />
    </Suspense>
  );
}
