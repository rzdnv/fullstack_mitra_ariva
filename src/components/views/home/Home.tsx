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
      <PoliSection />
      <ServiceSection />
      <ReviewSection />
      <PartnerSection />
    </div>
  );
};

export default Home;
