import Berita from "@/components/views/main/berita/Berita";
import { Metadata } from "next";

export const metadata: Metadata = { title: "Berita" };

const BeritaPage = () => {
  return <Berita />;
};

export default BeritaPage;
