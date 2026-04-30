import DokterSection from "./component/DokterSection";
import HeroSection from "./component/HeroSection";
import HighlightSection from "./component/HighlightSection";
import PartnerSection from "./component/PartnerSection";
import PoliSection from "./component/PoliSection";
import ReviewSection from "./component/ReviewSection";
import ServiceSection from "./component/ServiceSection";

const Home = () => {
  return (
    <div>
      <HeroSection />
      <HighlightSection />
      <PartnerSection />
      <PoliSection />
      <ServiceSection />
      <DokterSection />
      <ReviewSection />
    </div>
  );
};

export default Home;
