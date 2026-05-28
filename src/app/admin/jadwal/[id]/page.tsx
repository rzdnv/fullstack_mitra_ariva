import type { Metadata } from "next";
import DetailJadwal from "@/components/views/admin/jadwal/DetailJadwal/DetailJadwal";

export const metadata: Metadata = {
  title: "Detail Jadwal Dokter",
};

export default function DetailDokterPage() {
  return <DetailJadwal />;
}
