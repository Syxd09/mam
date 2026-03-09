import PageLoader from "@/components/PageLoader";
import Navbar from "@/components/Navbar";
import HeroSlider from "@/components/HeroSlider";
import FeatureBoxes from "@/components/FeatureBoxes";
import AboutSection from "@/components/AboutSection";
import ServicesSection from "@/components/ServicesSection";
import IndustriesSection from "@/components/IndustriesSection";
import ContactSection from "@/components/ContactSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <PageLoader />
      <Navbar />
      <HeroSlider />
      <FeatureBoxes />
      <AboutSection />
      <ServicesSection />
      <IndustriesSection />
      <ContactSection />
    </div>
  );
};

export default Index;
