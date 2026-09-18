import { Link } from "react-router-dom";
import { ArrowRight, Check, ShieldCheck, Zap, Layers, Compass } from "lucide-react";
import SEO from "@/components/SEO";
import Breadcrumbs from "@/components/Breadcrumbs";
import ContactCTA from "@/components/home/ContactCTA";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { getBreadcrumbSchema, getServiceSchema, getFAQPageSchema } from "@/lib/seo";
import { SITE } from "@/lib/site";

const FAQS = [
  {
    q: "What custom metal fabrication services does MAM Industries provide in Bangalore?",
    a: "We provide complete end-to-end custom metal fabrication combining 3kW CNC fiber laser cutting, 250T CNC press brake bending, TIG/MIG welding, surface finishing, and hardware assembly."
  },
  {
    q: "Can you manufacture custom components from physical samples or sketches?",
    a: "Yes. Customers can provide CAD drawings (.DXF, .DWG, .STEP), dimensioned PDF blueprints, or physical sample components. Our engineering team converts samples into production-ready CAD files."
  },
  {
    q: "What metal materials do you fabricate?",
    a: "We specialize in stainless steel (SS 304, 316) fabrication, mild steel (MS) structural fabrication, aluminium sheet fabrication, and galvanised iron (GI) assemblies."
  },
  {
    q: "How do I request a custom metal fabrication quote?",
    a: "Submit your technical drawing or component details via our website contact form or email. We review design feasibility and send an itemized quotation within 24 hours."
  }
];

const CustomMetalFabricationBangalore = () => {
  const pageUrl = "/custom-metal-fabrication-bangalore";
  const pageTitle = "Metal Fabrication Bangalore | Custom Sheet Metal Fabrication | MAM Industries";
  const pageDesc = "Custom metal fabrication in Bangalore including laser cutting, CNC bending, welding and finishing for industrial components, prototypes and production parts.";
  const pageKeywords = "metal fabrication bangalore, custom sheet metal fabrication bengaluru, custom metal components, ms ss fabrication bangalore, industrial sheet metal fabrication";

  const jsonLd = {
    "@graph": [
      getBreadcrumbSchema([
        { name: "Home", url: "/" },
        { name: "Services", url: "/services" },
        { name: "Custom Metal Fabrication Bangalore", url: pageUrl },
      ]),
      getServiceSchema("Custom Metal Fabrication Services", "Custom metal fabrication in Bangalore including laser cutting, CNC bending, welding and finishing."),
      getFAQPageSchema(FAQS),
    ],
  };

  return (
    <>
      <SEO
        title={pageTitle}
        description={pageDesc}
        keywords={pageKeywords}
        path={pageUrl}
        jsonLd={jsonLd}
      />

      <Breadcrumbs items={[
        { name: "Services", url: "/services" },
        { name: "Custom Metal Fabrication Services in Bangalore", url: pageUrl }
      ]} />

      {/* Hero Section */}
      <section className="bg-primary text-primary-foreground relative overflow-hidden">
        <div className="absolute inset-0 bg-blueprint opacity-40" />
        <div className="container relative py-16 md:py-24 flex flex-col justify-center min-h-[45vh]">
          <span className="eyebrow">Turnkey Metal Manufacturing</span>
          <h1 className="h-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl mt-3 text-white max-w-5xl">
            Custom Metal Fabrication Services in Bangalore
          </h1>
          <p className="text-metallic mt-5 max-w-2xl text-base md:text-lg leading-relaxed">
            MAM Industries provides turnkey custom metal fabrication in Bangalore, integrating CNC laser cutting, press brake bending, welding, powder coating, and assembly for industrial components and OEM parts.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link to="/contact" className="inline-flex items-center gap-2 bg-accent text-accent-foreground px-6 py-3.5 rounded-md font-semibold text-sm hover:bg-accent/90 transition-colors shadow-accentglow">
              Request a Fabrication Quote <ArrowRight size={16} />
            </Link>
            <a href={SITE.phoneHref} className="inline-flex items-center gap-2 border border-white/20 text-white px-6 py-3.5 rounded-md font-semibold text-sm hover:bg-white/10 transition-colors">
              Call {SITE.phone}
            </a>
          </div>
        </div>
      </section>

      {/* Main Content Body */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container grid lg:grid-cols-12 gap-12 items-start max-w-6xl">
          
          <article className="lg:col-span-8 space-y-12 text-foreground/90">
            
            {/* H2: Complete Sheet Metal Fabrication */}
            <div className="space-y-4">
              <h2 className="text-2xl md:text-3xl font-sora font-bold tracking-tight text-primary">
                Complete Sheet Metal Fabrication
              </h2>
              <p className="leading-relaxed text-muted-foreground">
                Custom metal fabrication at MAM Industries combines all essential metalworking processes under one roof in Bangalore. By managing design review, raw material sourcing, CNC fiber laser profiling, 250T press brake bending, specialized welding, and powder coating internally, we ensure strict tolerance adherence and reliable project delivery schedules.
              </p>
            </div>

            {/* H2: Stainless Steel Fabrication */}
            <div className="space-y-4">
              <h2 className="text-2xl md:text-3xl font-sora font-bold tracking-tight text-primary">
                Stainless Steel Fabrication
              </h2>
              <p className="leading-relaxed text-muted-foreground">
                We fabricate stainless steel components (SS 304, SS 316) from 0.8 mm up to 8 mm thickness. Our TIG welding and surface finishing deliver corrosion-resistant, architectural-grade, and hygienic parts ideal for food processing, pharmaceutical, interior, and cleanroom applications.
              </p>
            </div>

            {/* H2: Mild Steel Fabrication */}
            <div className="space-y-4">
              <h2 className="text-2xl md:text-3xl font-sora font-bold tracking-tight text-primary">
                Mild Steel Fabrication
              </h2>
              <p className="leading-relaxed text-muted-foreground">
                For structural assemblies, heavy machinery frames, mounting brackets, and electrical cabinets, our mild steel fabrication handles MS sheets up to 16 mm thickness for laser cutting and 8 mm for press brake bending, supported by production MIG/CO₂ welding.
              </p>
            </div>

            {/* H2: Fabrication From Drawing or Sample */}
            <div className="space-y-4">
              <h2 className="text-2xl md:text-3xl font-sora font-bold tracking-tight text-primary">
                Fabrication From Drawing or Sample
              </h2>
              <p className="leading-relaxed text-muted-foreground">
                Customers can provide fully dimensioned 2D/3D CAD models (.DXF, .DWG, .STEP), PDF engineering blueprints, or physical sample components. Our engineering team reviews file geometry and DFM requirements to manufacture exact replacements or production runs.
              </p>
            </div>

            {/* H2: Prototype and Production Fabrication */}
            <div className="space-y-4">
              <h2 className="text-2xl md:text-3xl font-sora font-bold tracking-tight text-primary">
                Prototype and Production Fabrication
              </h2>
              <p className="leading-relaxed text-muted-foreground">
                We support initial prototype fabrication for design validation and fitment checks, as well as recurring scheduled production contracts for OEM equipment manufacturers and industrial suppliers across Bangalore.
              </p>
            </div>

            {/* H2: Custom Fabrication Applications */}
            <div className="space-y-4">
              <h2 className="text-2xl md:text-3xl font-sora font-bold tracking-tight text-primary">
                Custom Fabrication Applications
              </h2>
              <p className="leading-relaxed text-muted-foreground">
                Our custom fabrication unit manufactures a wide variety of engineered components:
              </p>
              <ul className="grid sm:grid-cols-2 gap-3 pt-2">
                {[
                  "Industrial electrical enclosures & control boxes",
                  "Machinery guards, frames & structural chassis",
                  "Architectural main gates, grilles & railings",
                  "Heavy-duty solar mounting structures",
                  "Warehouse storage racks & material handling trays",
                  "Automotive bracketry & mounting plates"
                ].map((item, idx) => (
                  <li key={idx} className="flex items-center gap-2 text-sm text-foreground">
                    <Check size={16} className="text-accent shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* H2: Request a Fabrication Quote */}
            <div className="space-y-4">
              <h2 className="text-2xl md:text-3xl font-sora font-bold tracking-tight text-primary">
                Request a Fabrication Quote
              </h2>
              <p className="leading-relaxed text-muted-foreground">
                Send your CAD files, drawings, or component details to MAM Industries. Our engineering team will review feasibility and provide an itemized quote within 24 hours.
              </p>
              <div className="flex flex-wrap gap-4 pt-2">
                <Link
                  to="/contact"
                  className="bg-accent text-accent-foreground px-6 py-3 rounded-md font-semibold text-sm hover:bg-accent/90 transition-all shadow-accentglow"
                >
                  Send Drawing for Quote
                </Link>
                <Link
                  to="/sheet-metal-fabrication-bangalore"
                  className="bg-secondary text-white border border-white/10 px-6 py-3 rounded-md font-semibold text-sm hover:bg-secondary/80 transition-all"
                >
                  View Sheet Metal Fabrication Page
                </Link>
              </div>
            </div>

            {/* H2: Frequently Asked Questions */}
            <div className="space-y-6 pt-4">
              <h2 className="text-2xl md:text-3xl font-sora font-bold tracking-tight text-primary">
                Frequently Asked Questions
              </h2>
              <Accordion type="single" collapsible className="space-y-3">
                {FAQS.map((faq, idx) => (
                  <AccordionItem
                    key={idx}
                    value={`faq-${idx}`}
                    className="bg-card border border-border rounded-lg px-5 data-[state=open]:border-accent/40 transition-all"
                  >
                    <AccordionTrigger className="text-left font-sora font-semibold text-primary hover:text-accent hover:no-underline py-4 text-sm md:text-base">
                      {faq.q}
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground leading-relaxed pb-4 text-sm">
                      {faq.a}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>

          </article>

          {/* Sidebar */}
          <aside className="lg:col-span-4 space-y-6">
            <div className="bg-card border border-border p-6 rounded-lg shadow-sm space-y-6">
              <h3 className="font-sora font-semibold text-lg text-primary border-b border-border pb-3">Metal Fabrication Services</h3>
              <nav className="flex flex-col gap-2.5">
                <Link to="/laser-cutting-bangalore" className="flex items-center justify-between text-sm text-muted-foreground hover:text-accent font-medium py-1 transition-colors">
                  <span>Laser Cutting Bangalore</span>
                  <ArrowRight size={14} />
                </Link>
                <Link to="/cnc-bending-bangalore" className="flex items-center justify-between text-sm text-muted-foreground hover:text-accent font-medium py-1 transition-colors">
                  <span>CNC Bending Bangalore</span>
                  <ArrowRight size={14} />
                </Link>
                <Link to="/sheet-metal-fabrication-bangalore" className="flex items-center justify-between text-sm text-muted-foreground hover:text-accent font-medium py-1 transition-colors">
                  <span>Sheet Metal Fabrication</span>
                  <ArrowRight size={14} />
                </Link>
                <Link to="/welding-services-bangalore" className="flex items-center justify-between text-sm text-muted-foreground hover:text-accent font-medium py-1 transition-colors">
                  <span>Welding Services Bangalore</span>
                  <ArrowRight size={14} />
                </Link>
                <Link to="/powder-coating-bangalore" className="flex items-center justify-between text-sm text-muted-foreground hover:text-accent font-medium py-1 transition-colors">
                  <span>Powder Coating Bangalore</span>
                  <ArrowRight size={14} />
                </Link>
              </nav>
            </div>

            <div className="bg-secondary/20 border border-white/10 p-6 rounded-lg space-y-4">
              <h3 className="font-semibold text-primary text-base">Send CAD Drawing for Quote</h3>
              <p className="text-xs text-muted-foreground leading-relaxed">
                Upload your drawings or sample specs for instant engineering review and itemized pricing.
              </p>
              <Link to="/contact" className="w-full inline-flex justify-center items-center gap-2 bg-accent text-accent-foreground py-2.5 rounded-md text-xs font-semibold hover:bg-accent/90 transition-colors">
                Request Quote Now
              </Link>
            </div>
          </aside>

        </div>
      </section>

      <ContactCTA />
    </>
  );
};

export default CustomMetalFabricationBangalore;
