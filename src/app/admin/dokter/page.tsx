import DokterList from "@/components/views/admin/dokter/DokterList/DokterList";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Kelola Dokter",
};

export default function DokterPage() {
  return (
    <main>
      <DokterList />
    </main>
  );
}
