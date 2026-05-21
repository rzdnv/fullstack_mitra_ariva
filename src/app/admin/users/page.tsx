import UserList from "@/components/views/admin/user/UserList/UserList";
import type { Metadata } from "next";
import { Suspense } from "react";

export const metadata: Metadata = {
  title: "Kelola Users",
};

export default function UserPage() {
  return (
    <Suspense fallback={<div className="p-6 text-gray-400">Memuat...</div>}>
      <UserList />
    </Suspense>
  );
}
