import HighlightSection from "@/components/home/HighlightSection";
import MainLayout from "../layout";
import HeroSection from "@/components/home/HeroSection";
import PartnerSection from "@/components/home/PartnerSection";

const HomePage = () => {
  return (
    <MainLayout>
      <HeroSection />
      <HighlightSection />
      <PartnerSection />
    </MainLayout>
  );
};

export default HomePage;
