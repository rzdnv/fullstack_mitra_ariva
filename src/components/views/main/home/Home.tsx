import ContactSection from "./component/ContactSection";
import DokterSection from "./component/DokterSection";
import FacilitiesSection from "./component/FacilitiesSection";
import HeroSection from "./component/HeroSection";
import HighlightSection from "./component/HighlightSection";
import NewsSection from "./component/NewsSection";
import PartnerSection from "./component/PartnerSection";
import RegistrationSection from "./component/RegistrationSection";
import ReviewSection from "./component/ReviewSection";
import ServiceSection from "./component/ServiceSection";

const Home = () => {
  return (
    <div>
      <HeroSection />
      <ContactSection />
      <HighlightSection />
      <FacilitiesSection />
      <DokterSection />
      <ServiceSection />
      <NewsSection />
      <PartnerSection />
      <RegistrationSection />
      <ReviewSection />
    </div>
  );
};

export default Home;
