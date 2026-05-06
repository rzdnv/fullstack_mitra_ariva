import ContactSection from "./component/ContactSection";
import DokterSection2 from "./component/DokterSection";
import FacilitiesSection from "./component/FacilitiesSection";
import HeroSection from "./component/HeroSection";
import HighlightSection from "./component/HighlightSection";
import NewsSection from "./component/NewsSection";
import PartnerSection from "./component/PartnerSection";
import ReviewSection from "./component/ReviewSection";
import ServiceSection from "./component/ServiceSection";

const Home = () => {
  return (
    <div>
      <HeroSection />
      <ContactSection />
      <HighlightSection />
      <FacilitiesSection />
      <PartnerSection />
      <DokterSection2 />
      <ServiceSection />
      <NewsSection />
      <ReviewSection />
    </div>
  );
};

export default Home;
