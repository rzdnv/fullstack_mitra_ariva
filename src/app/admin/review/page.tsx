import ReviewList from "@/components/views/admin/review/ReviewList/ReviewList";
import type { Metadata } from "next";
import { Suspense } from "react";

export const metadata: Metadata = {
  title: "Kelola Review",
};

export default function ReviewPage() {
  return (
    <Suspense fallback={<div className="p-6 text-gray-400">Memuat...</div>}>
      <ReviewList />
    </Suspense>
  );
}
