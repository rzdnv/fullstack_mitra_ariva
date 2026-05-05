import Dokter from "@/components/views/dokter/Dokter";
import { Metadata } from "next";

export const metadata: Metadata = { title: "Dokter" };

const DokterPage = () => {
  return <Dokter />;
};

export default DokterPage;
