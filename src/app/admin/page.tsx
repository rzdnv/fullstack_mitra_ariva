import Dashboard from "@/components/views/admin/dashboard/Dashboard";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dashboard",
};

export default function AdminPage() {
  return (
    <div>
      <Dashboard />
    </div>
  );
}
