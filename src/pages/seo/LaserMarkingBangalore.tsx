import { Link } from "react-router-dom";
import { ArrowRight, Check, ShieldCheck, Zap, Layers, Compass } from "lucide-react";
import SEO from "@/components/SEO";
import Breadcrumbs from "@/components/Breadcrumbs";
import ContactCTA from "@/components/home/ContactCTA";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { getBreadcrumbSchema, getServiceSchema, getFAQPageSchema } from "@/lib/seo";

const FAQS = [
  {
    q: "What metal materials can be laser marked at MAM Industries in Bangalore?",
    a: "We perform fiber laser marking on stainless steel, mild steel, aluminum, brass, copper, and coated sheet metal components.",
  },
  {
    q: "Can you laser mark sequential serial numbers and barcodes?",
    a: "Yes. Our CNC laser marking systems support dynamic batch serialization, sequential serial numbers, 2D Data Matrix codes, QR codes, and custom part numbers.",
  },
  {
    q: "Does laser marking wear off over time?",
    a: "No. Fiber laser marking creates high-contrast permanent marks or deep etchings directly into the metal surface that resist wear, heat, chemical exposure, and handling.",
  },
  {
    q: "How can I request a quote for laser marking services?",
    a: "Send your part drawings, vector graphics (DXF/AI/PDF), marking specifications, and batch quantities to MAM Industries via our quote form or WhatsApp.",
  },
];

const LaserMarkingBangalore = () => {
  const pageUrl = "/laser-marking-bangalore";
  const pageTitle = "Laser Marking Bangalore | Metal Laser Marking Services | MAM Industries";
  const pageDesc = "MAM Industries provides permanent metal laser marking services in Bangalore. High-contrast serial numbers, part numbers, logos, and QR codes for components.";
  const pageKeywords = "laser marking bangalore, metal laser marking services bangalore, fiber laser marking bangalore, part serialization bangalore";

  const jsonLd = {
    "@graph": [
      getBreadcrumbSchema([
        { name: "Home", url: "/" },
        { name: "Services", url: "/services" },
        { name: "Laser Marking Bangalore", url: pageUrl },
      ]),
      getServiceSchema("Laser Marking Services in Bangalore", "High-speed permanent fiber laser marking and deep engraving services for metal components in Bangalore."),
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

      {/* Hero Section */}
      <section className="bg-primary text-primary-foreground relative overflow-hidden">
        <div className="absolute inset-0 bg-blueprint opacity-40" />
        <div className="container relative py-16 md:py-24 flex flex-col justify-center min-h-[45vh]">
          <Breadcrumbs items={[{ label: "Services", url: "/services" }, { label: "Laser Marking" }]} />
          <span className="eyebrow mt-2">Part Identification & Branding</span>
          <h1 className="h-display text-4xl md:text-6xl mt-4 text-white max-w-4xl">
            Laser Marking Services in Bangalore
          </h1>
          <p className="text-metallic mt-6 max-w-2xl text-lg leading-relaxed">
            MAM Industries provides high-precision fiber laser marking services in Bangalore for permanent component identification, serial numbers, barcodes, logos, and traceability.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link to="/contact?service=Laser%20Marking" className="inline-flex items-center gap-2 bg-accent text-accent-foreground px-6 py-3.5 rounded-md font-semibold text-sm hover:bg-accent/90 transition-colors shadow-accentglow">
              Request a Quote <ArrowRight size={15} />
            </Link>
            <a href="https://wa.me/917892303386?text=Hi%20MAM%20Industries%2C%20I%20have%20a%20laser%20marking%20enquiry." target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 border border-white/20 text-white px-6 py-3.5 rounded-md font-semibold text-sm hover:bg-white/10 transition-colors">
              WhatsApp Sales Desk
            </a>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container grid lg:grid-cols-12 gap-12 items-start">
          {/* Main Content */}
          <article className="lg:col-span-8 space-y-10 text-foreground/90">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold tracking-tight text-primary">Metal Component Laser Marking</h2>
              <p className="leading-relaxed text-muted-foreground">
                In modern industrial manufacturing, component traceability and clear product identification are critical. At MAM Industries in Bangalore, we provide fiber laser marking on sheet metal fabrications, machined parts, enclosures, nameplates, and custom hardware.
              </p>
              <p className="leading-relaxed text-muted-foreground">
                Our high-speed fiber laser marking systems deliver high-contrast, permanent surface markings without physical contact or tool wear, preserving component structural integrity while ensuring crisp legibility.
              </p>
            </div>

            <div className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-card border border-border p-5 rounded-lg space-y-2">
                  <h2 className="text-xl font-bold text-primary">Serial Numbers</h2>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    We mark sequential serial numbers, lot numbers, and manufacture batch codes for full lifecycle tracking across production runs.
                  </p>
                </div>
                <div className="bg-card border border-border p-5 rounded-lg space-y-2">
                  <h2 className="text-xl font-bold text-primary">Part Numbers</h2>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Legible part numbers and drawing codes marked onto individual components streamline assembly and spare-part management.
                  </p>
                </div>
                <div className="bg-card border border-border p-5 rounded-lg space-y-2">
                  <h2 className="text-xl font-bold text-primary">Logos</h2>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    High-resolution crisp company logos, brand marks, and technical symbols directly engraved onto metal panels and product housings.
                  </p>
                </div>
                <div className="bg-card border border-border p-5 rounded-lg space-y-2">
                  <h2 className="text-xl font-bold text-primary">Product Identification</h2>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Voltage ratings, operating instructions, compliance icons, and warning labels laser-etched onto stainless steel nameplates.
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <h2 className="text-2xl font-bold tracking-tight text-primary">Traceability</h2>
              <p className="leading-relaxed text-muted-foreground">
                Laser marking provides permanent, tamper-proof part traceability for quality control and ISO compliance. 2D Data Matrix codes and QR codes can be etched onto small or large metal surfaces for instant optical scanner reading.
              </p>
            </div>

            <div className="space-y-4">
              <h2 className="text-2xl font-bold tracking-tight text-primary">Custom Marking Requirements</h2>
              <p className="leading-relaxed text-muted-foreground">
                Whether you need a single prototype marked or thousands of production parts serialized, MAM Industries handles custom marking specifications with quick turnaround times in Bangalore.
              </p>
            </div>

            <div className="space-y-4 bg-secondary/10 border border-secondary/20 p-6 rounded-lg">
              <h2 className="text-2xl font-bold tracking-tight text-primary">Request a Quote</h2>
              <p className="leading-relaxed text-muted-foreground">
                Need permanent laser marking for your metal parts in Bangalore? Contact MAM Industries with your graphics files or text requirements to receive a fast quote.
              </p>
              <div className="flex flex-wrap gap-4 pt-2">
                <Link to="/contact?service=Laser%20Marking" className="inline-flex items-center gap-2 bg-accent text-accent-foreground px-5 py-3 rounded-md font-semibold text-sm hover:bg-accent/90 transition-colors">
                  Send Marking Requirement <ArrowRight size={15} />
                </Link>
                <Link to="/gallery" className="inline-flex items-center gap-2 border border-primary/30 text-primary px-5 py-3 rounded-md font-semibold text-sm hover:bg-primary/5 transition-colors">
                  View Laser Marked Parts
                </Link>
              </div>
            </div>
          </article>

          {/* Sidebar */}
          <aside className="lg:col-span-4 space-y-6">
            <div className="bg-card border border-border p-6 rounded-lg shadow-sm space-y-6">
              <h3 className="font-sora font-semibold text-lg text-primary border-b border-border pb-3">Metal Fabrication Services</h3>
              <nav className="flex flex-col gap-2.5">
                <Link to="/laser-cutting-bangalore" className="flex items-center justify-between text-sm text-muted-foreground hover:text-accent font-medium py-1 transition-colors">
                  <span>CNC Fiber Laser Cutting</span>
                  <ArrowRight size={14} />
                </Link>
                <Link to="/cnc-bending-bangalore" className="flex items-center justify-between text-sm text-muted-foreground hover:text-accent font-medium py-1 transition-colors">
                  <span>CNC Press Brake Bending</span>
                  <ArrowRight size={14} />
                </Link>
                <Link to="/sheet-metal-fabrication-bangalore" className="flex items-center justify-between text-sm text-muted-foreground hover:text-accent font-medium py-1 transition-colors">
                  <span>Sheet Metal Fabrication</span>
                  <ArrowRight size={14} />
                </Link>
                <Link to="/custom-metal-fabrication-bangalore" className="flex items-center justify-between text-sm text-muted-foreground hover:text-accent font-medium py-1 transition-colors">
                  <span>Custom Metal Fabrication</span>
                  <ArrowRight size={14} />
                </Link>
                <Link to="/welding-services-bangalore" className="flex items-center justify-between text-sm text-muted-foreground hover:text-accent font-medium py-1 transition-colors">
                  <span>Welding Services</span>
                  <ArrowRight size={14} />
                </Link>
                <Link to="/powder-coating-bangalore" className="flex items-center justify-between text-sm text-muted-foreground hover:text-accent font-medium py-1 transition-colors">
                  <span>Powder Coating Services</span>
                  <ArrowRight size={14} />
                </Link>
              </nav>
            </div>

            <div className="bg-card border border-border p-6 rounded-lg space-y-3">
              <h3 className="font-semibold text-primary text-base">Bangalore Unit Location</h3>
              <p className="text-xs text-muted-foreground leading-relaxed">
                MAM Industries<br />
                7th Mile, 113, Kanakapura Main Road,<br />
                Yelachenahalli, Naidu Layout,<br />
                Bengaluru, Karnataka 560062, India
              </p>
              <p className="text-xs text-muted-foreground pt-1">
                Phone: +91 78923 03386 / +91 98450 63230<br />
                Email: info@mamindustries.in
              </p>
            </div>
          </aside>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 md:py-24 bg-card border-y border-border">
        <div className="container grid lg:grid-cols-12 gap-10">
          <div className="lg:col-span-4">
            <span className="eyebrow">FAQ Helpdesk</span>
            <h2 className="h-display text-2xl md:text-4xl mt-3 text-primary">
              Frequently Asked <span className="text-accent">Questions</span>
            </h2>
            <p className="text-muted-foreground mt-4 text-sm leading-relaxed">
              Find technical answers about laser marking options, serialization, and barcode requirements in Bangalore.
            </p>
          </div>
          <div className="lg:col-span-8">
            <Accordion type="single" collapsible className="space-y-3">
              {FAQS.map((faq, idx) => (
                <AccordionItem
                  key={idx}
                  value={`faq-${idx}`}
                  className="bg-background border border-border rounded-lg px-5 data-[state=open]:border-accent/40 transition-all"
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
        </div>
      </section>

      {/* Contact CTA */}
      <ContactCTA />
    </>
  );
};

export default LaserMarkingBangalore;
