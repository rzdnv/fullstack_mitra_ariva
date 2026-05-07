import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dashboard",
};

export default function AdminPage() {
  return (
    <div>
      <h2 className="mb-6 text-2xl font-bold text-slate-800">Dashboard</h2>
      <p className="text-gray-500">
        Selamat datang di panel admin RSKB Mitra Ariva.
      </p>
    </div>
  );
}
