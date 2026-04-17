import HighlightSection from "@/components/home/HighlightSection";
import MainLayout from "../layout";
import HeroSection from "@/components/home/HeroSection";
import PartnerSection from "@/components/home/PartnerSection";
import PoliSection from "@/components/home/PoliSection";
import ReviewSection from "@/components/home/ReviewSection";

const HomePage = () => {
  return (
    <MainLayout>
      <HeroSection />
      <HighlightSection />
      <PartnerSection />
      <PoliSection />
      <ReviewSection />
    </MainLayout>
  );
};

export default HomePage;
