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
import FAQ, { FAQS } from "@/components/home/FAQ";
import ContactCTA from "@/components/home/ContactCTA";
import {
  getFAQPageSchema,
  getHowToSchema,
  getLocalBusinessSchema,
  getOrganizationSchema,
  getWebPageSchema,
  getWebSiteSchema,
} from "@/lib/seo";

const homeTitle = "MAM Industries | Metal Cutting, Laser Cutting, CNC Bending & Fabrication in Bangalore, Karnataka & India";
const homeDescription = "MAM Industries is a 5.0-rated precision metal fabrication company in Bengaluru offering 3kW CNC fiber laser metal cutting, 250T CNC metal bending, fiber laser metal marking, MIG/TIG/laser welding & powder coating across Bangalore, Karnataka & pan-India.";

const homeJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    getLocalBusinessSchema(),
    getOrganizationSchema(),
    getWebSiteSchema(),
    getWebPageSchema(homeTitle, homeDescription, "/"),
    getHowToSchema(),
    getFAQPageSchema(FAQS),
  ],
};

const Home = () => (
  <>
    <SEO
      title={homeTitle}
      description={homeDescription}
      keywords="metal cutting bangalore, laser cutting bangalore, metal bending bangalore, cnc bending bangalore, metal marking bangalore, laser marking bangalore, metal fabrication bangalore, sheet metal fabrication karnataka, custom metal fabrication india, stainless steel fabrication bangalore, pan india metal fabrication supplier"
      path="/"
      jsonLd={homeJsonLd}
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
