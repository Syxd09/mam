import { Link } from "react-router-dom";
import { ArrowRight, Check, ShieldCheck, Zap, Layers, Compass } from "lucide-react";
import SEO from "@/components/SEO";
import ContactCTA from "@/components/home/ContactCTA";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { getBreadcrumbSchema, getServiceSchema, getFAQPageSchema } from "@/lib/seo";

const FAQS = [
  {
    q: "What types of metals can you mark or engrave?",
    a: "We mark and engrave a wide range of metals including Mild Steel (MS), Stainless Steel (SS), Carbon Steel, Brass, Copper, Titanium, Anodized Aluminum, and various industrial plastics (such as ABS or Polycarbonate).",
  },
  {
    q: "What is the difference between laser marking, etching, and deep engraving?",
    a: "Laser marking changes the material surface color with minimal depth (ideal for branding). Laser etching melts the surface slightly to create high contrast. Laser engraving removes metal layers to create deep, abrasion-resistant lettering.",
  },
  {
    q: "Can you generate sequential serial numbers, QR codes, and barcodes automatically?",
    a: "Yes. Our CNC laser marking systems integrate with database software to automatically generate and mark sequential serial numbers, static/dynamic QR codes, Code 128 barcodes, and production datestamps in batches.",
  },
  {
    q: "Is the marking permanent enough to withstand powder coating or galvanization?",
    a: "For parts that require post-coat visibility, we perform deep engraving (cutting deep into the metal base) so that the markings remain fully legible even after receiving standard powder coating or plating layers.",
  },
];

const LaserMarkingBangalore = () => {
  const pageUrl = "/laser-marking-bangalore";
  const pageTitle = "Laser Marking & Metal Engraving Services Bangalore | MAM Industries";
  const pageDesc = "MAM Industries provides high-speed B2B fiber laser marking & metal engraving services in Bangalore. Permanent QR, barcode & serialization. Get a quote.";
  const pageKeywords = "laser marking services, metal engraving bangalore, industrial marking, fiber laser engraving, metal serialization bangalore";

  const jsonLd = {
    "@graph": [
      getBreadcrumbSchema([
        { name: "Home", url: "/" },
        { name: "Laser Marking Bangalore", url: pageUrl },
      ]),
      getServiceSchema("Laser Marking & Engraving", "High-speed permanent fiber laser marking and deep engraving services for B2B industrial assemblies in Bangalore."),
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
        <div className="container relative py-20 md:py-28 flex flex-col justify-center min-h-[50vh]">
          <span className="eyebrow">Traceability & Branding</span>
          <h1 className="h-display text-4xl md:text-6xl mt-4 text-white max-w-4xl">
            Fiber Laser <span className="text-accent">Marking Services</span> in Bangalore
          </h1>
          <p className="text-metallic mt-6 max-w-2xl text-lg leading-relaxed">
            Ensure long-term part traceability and professional branding. MAM Industries delivers permanent fiber laser marking and deep metal engraving for OEMs and toolmakers across Bangalore.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link to="/contact?service=Laser%20Marking" className="inline-flex items-center gap-2 bg-accent text-accent-foreground px-6 py-3.5 rounded-md font-semibold text-sm hover:bg-accent/90 transition-colors shadow-accentglow">
              Get Fast Quote <ArrowRight size={15} />
            </Link>
            <a href="tel:+917892303386" className="inline-flex items-center gap-2 border border-white/20 text-white px-6 py-3.5 rounded-md font-semibold text-sm hover:bg-white/10 transition-colors">
              Call Sales Desk
            </a>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container grid lg:grid-cols-12 gap-12 items-start">
          {/* Main Content */}
          <article className="lg:col-span-8 space-y-8 text-foreground/90">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold tracking-tight text-primary">Permanent Traceability & Precision Marking Solutions in Bengaluru</h2>
              <p className="leading-relaxed text-muted-foreground">
                In modern industrial sectors like aerospace, automotive, electronics, and medical device manufacturing, product traceability is a strict regulatory requirement. At MAM Industries, we offer high-speed, high-resolution **fiber laser marking and engraving services in Bangalore**. Utilizing advanced solid-state fiber laser heads, we create crisp, high-contrast markings on metal and composite surfaces without causing heat damage or stress fractures.
              </p>
              <p className="leading-relaxed text-muted-foreground">
                Unlike chemical etching or ink jetting, fiber laser markings do not wear off, peel, or fade over time. They remain permanent through harsh industrial cleaning, abrasive environments, and thermal cycles, ensuring lifetime part identification.
              </p>
            </div>

            {/* Spec Sheet Table */}
            <div className="border border-border rounded-lg overflow-hidden bg-card shadow-sm">
              <div className="bg-primary/5 px-6 py-4 border-b border-border">
                <h3 className="font-sora font-semibold text-primary">Laser Marking System Specifications</h3>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse text-sm">
                  <thead>
                    <tr className="bg-secondary/10 border-b border-border">
                      <th className="px-6 py-3 font-semibold text-primary">Process Type</th>
                      <th className="px-6 py-3 font-semibold text-primary">Depth Range</th>
                      <th className="px-6 py-3 font-semibold text-primary">Suitable Materials</th>
                      <th className="px-6 py-3 font-semibold text-primary">Key Attributes</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-border">
                    <tr>
                      <td className="px-6 py-3.5 font-medium">Laser Marking</td>
                      <td className="px-6 py-3.5">Surface-level (&lt;5 microns)</td>
                      <td className="px-6 py-3.5">Stainless Steel, Titanium, Anodized Al</td>
                      <td className="px-6 py-3.5">High-contrast surface color change, no depth</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-3.5 font-medium">Laser Etching</td>
                      <td className="px-6 py-3.5">5 – 25 microns</td>
                      <td className="px-6 py-3.5">Mild Steel, Die-cast metals, Alloys</td>
                      <td className="px-6 py-3.5">Fast processing, ideal for QR/Barcodes</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-3.5 font-medium">Laser Engraving</td>
                      <td className="px-6 py-3.5">25 – 100+ microns</td>
                      <td className="px-6 py-3.5">All metals, brass, copper, carbon steel</td>
                      <td className="px-6 py-3.5">Deep carving, survives painting/powder coating</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div className="space-y-4">
              <h2 className="text-2xl font-bold tracking-tight text-primary">B2B Traceability: Serial Numbers, QR Codes & Logos</h2>
              <p className="leading-relaxed text-muted-foreground">
                We handle high-volume serialization batches. Our lasers process multi-variable data fields including serial strings, data matrices, QR codes, and compliance logos (CE, UL, ISI). By importing vector files (.DXF, .AI) directly, we mark high-definition brand logos and scale lines onto control knobs, bezels, dials, and casing components.
              </p>
              <div className="grid md:grid-cols-2 gap-4 pt-2">
                <div className="flex gap-3 items-start">
                  <span className="p-2 bg-accent/10 rounded-md text-accent shrink-0">
                    <ShieldCheck size={20} />
                  </span>
                  <div>
                    <h4 className="font-semibold text-primary">Permanent Contrast</h4>
                    <p className="text-sm text-muted-foreground">Produces crisp dark or light marks on SS and anodized surfaces for camera scanners.</p>
                  </div>
                </div>
                <div className="flex gap-3 items-start">
                  <span className="p-2 bg-accent/10 rounded-md text-accent shrink-0">
                    <Zap size={20} />
                  </span>
                  <div>
                    <h4 className="font-semibold text-primary">High-Speed Execution</h4>
                    <p className="text-sm text-muted-foreground">Galvo scanning heads mark small parts in milliseconds, enabling rapid volume throughput.</p>
                  </div>
                </div>
                <div className="flex gap-3 items-start">
                  <span className="p-2 bg-accent/10 rounded-md text-accent shrink-0">
                    <Layers size={20} />
                  </span>
                  <div>
                    <h4 className="font-semibold text-primary">Non-Contact Process</h4>
                    <p className="text-sm text-muted-foreground">No tool wear or physical force is applied, preventing bending of thin-walled parts.</p>
                  </div>
                </div>
                <div className="flex gap-3 items-start">
                  <span className="p-2 bg-accent/10 rounded-md text-accent shrink-0">
                    <Compass size={20} />
                  </span>
                  <div>
                    <h4 className="font-semibold text-primary">Deep Mark Option</h4>
                    <p className="text-sm text-muted-foreground">Maintains visibility under subsequent sandblasting, plating, or zinc coating.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <h2 className="text-2xl font-bold tracking-tight text-primary">B2B Segments Supported</h2>
              <p className="leading-relaxed text-muted-foreground">
                Our laser marking services are frequently utilized by:
              </p>
              <ul className="grid md:grid-cols-2 gap-2 text-sm text-muted-foreground pl-2">
                <li className="flex items-center gap-2"><Check size={16} className="text-highlight" /> Automotive part manufacturers (marking gear, engine components)</li>
                <li className="flex items-center gap-2"><Check size={16} className="text-highlight" /> Electrical panel builders (marking nameplates, legend plates)</li>
                <li className="flex items-center gap-2"><Check size={16} className="text-highlight" /> Tooling and die makers (engraving measurements, custom logos)</li>
                <li className="flex items-center gap-2"><Check size={16} className="text-highlight" /> Medical and surgical instrument producers (UDI compliance)</li>
                <li className="flex items-center gap-2"><Check size={16} className="text-highlight" /> Industrial hardware distributors (branding tools, fasteners)</li>
                <li className="flex items-center gap-2"><Check size={16} className="text-highlight" /> Promotional product companies (branding custom metal gifts)</li>
              </ul>
            </div>
          </article>

          {/* Sidebar */}
          <aside className="lg:col-span-4 space-y-6">
            <div className="bg-card border border-border p-6 rounded-lg shadow-sm space-y-6">
              <h3 className="font-sora font-semibold text-lg text-primary border-b border-border pb-3">Related Services</h3>
              <nav className="flex flex-col gap-2.5">
                <Link to="/laser-cutting-bangalore" className="flex items-center justify-between text-sm text-muted-foreground hover:text-accent font-medium py-1 transition-colors">
                  <span>CNC Laser Cutting</span>
                  <ArrowRight size={14} />
                </Link>
                <Link to="/cnc-bending-bangalore" className="flex items-center justify-between text-sm text-muted-foreground hover:text-accent font-medium py-1 transition-colors">
                  <span>CNC Press-Brake Bending</span>
                  <ArrowRight size={14} />
                </Link>
                <Link to="/welding-services-bangalore" className="flex items-center justify-between text-sm text-muted-foreground hover:text-accent font-medium py-1 transition-colors">
                  <span>MIG/TIG/Laser Welding</span>
                  <ArrowRight size={14} />
                </Link>
                <Link to="/powder-coating-bangalore" className="flex items-center justify-between text-sm text-muted-foreground hover:text-accent font-medium py-1 transition-colors">
                  <span>Industrial Powder Coating</span>
                  <ArrowRight size={14} />
                </Link>
                <Link to="/custom-metal-fabrication-bangalore" className="flex items-center justify-between text-sm text-muted-foreground hover:text-accent font-medium py-1 transition-colors">
                  <span>Custom Turnkey Fabrication</span>
                  <ArrowRight size={14} />
                </Link>
              </nav>
            </div>

            <div className="bg-secondary/10 border border-secondary/20 p-6 rounded-lg space-y-4">
              <h4 className="font-semibold text-primary text-base">Traceability Standards</h4>
              <p className="text-xs text-muted-foreground leading-relaxed">
                We assist with B2B compliance needs (including unique serial patterns, GS1 QR format, and ISO 9001 logging requirements).
              </p>
              <Link to="/contact" className="w-full inline-flex justify-center items-center gap-2 bg-primary text-primary-foreground py-2.5 rounded-md text-xs font-semibold hover:bg-primary/95 transition-colors">
                Enquire Marking Capacity
              </Link>
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
              Laser Marking <span className="text-accent">Queries</span>
            </h2>
            <p className="text-muted-foreground mt-4 text-sm leading-relaxed">
              Find technical answers about laser wavelengths, marking depths, and batch serialization.
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
