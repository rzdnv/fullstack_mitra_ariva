import { Suspense } from "react";
import type { Metadata } from "next";
import DetailReview from "@/components/views/admin/review/DetailReview/DetailReview";

export const metadata: Metadata = {
  title: "Detail Review",
};

export default function DetailReviewPage() {
  return (
    <Suspense fallback={<div className="p-6 text-gray-400">Memuat...</div>}>
      <DetailReview />
    </Suspense>
  );
}
