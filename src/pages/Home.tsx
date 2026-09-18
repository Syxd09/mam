import SEO from "@/components/SEO";
import Hero from "@/components/home/Hero";
import TrustedBy from "@/components/home/TrustedBy";
import ServicesOverview from "@/components/home/ServicesOverview";
import WhyChoose from "@/components/home/WhyChoose";
import Industries from "@/components/home/Industries";
import Capabilities from "@/components/home/Capabilities";
import Process from "@/components/home/Process";
import GalleryPreview from "@/components/home/GalleryPreview";
import Testimonials from "@/components/home/Testimonials";
import FAQ from "@/components/home/FAQ";
import ContactCTA from "@/components/home/ContactCTA";
import { getLocalBusinessSchema } from "@/lib/seo";

const Home = () => (
  <>
    <SEO
      title="MAM Industries | Laser Cutting, CNC Bending & Metal Fabrication in Bangalore"
      description="MAM Industries provides CNC laser cutting, CNC bending, sheet metal fabrication and custom metal fabrication services in Bangalore for prototypes and production parts."
      keywords="laser cutting bangalore, cnc bending bangalore, metal fabrication bangalore, sheet metal fabrication bangalore, custom metal fabrication bangalore, stainless steel fabrication bangalore"
      path="/"
      jsonLd={getLocalBusinessSchema()}
    />
    <Hero />
    <TrustedBy />
    <ServicesOverview />
    <WhyChoose />
    <Capabilities />
    <Industries />
    <Process />
    <GalleryPreview />
    <Testimonials />
    <FAQ />
    <ContactCTA />
  </>
);
export default Home;
