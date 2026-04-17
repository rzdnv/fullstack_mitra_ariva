import HighlightSection from "@/components/home/HighlightSection";
import MainLayout from "../layout";
import HeroSection from "@/components/home/HeroSection";
import PartnerSection from "@/components/home/PartnerSection";
import PoliSection from "@/components/home/PoliSection";
import ReviewSection from "@/components/home/ReviewSection";
import ServiceSection from "@/components/home/ServiceSection";

const HomePage = () => {
  return (
    <MainLayout>
      <HeroSection />
      <HighlightSection />
      <PartnerSection />
      <PoliSection />
      <ServiceSection />
      <ReviewSection />
    </MainLayout>
  );
};

export default HomePage;
