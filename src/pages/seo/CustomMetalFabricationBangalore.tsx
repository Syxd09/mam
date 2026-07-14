import { Link } from "react-router-dom";
import { ArrowRight, Check, ShieldCheck, Zap, Layers, Compass } from "lucide-react";
import SEO from "@/components/SEO";
import ContactCTA from "@/components/home/ContactCTA";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { getBreadcrumbSchema, getServiceSchema, getFAQPageSchema } from "@/lib/seo";

const FAQS = [
  {
    q: "What is your end-to-end custom fabrication workflow?",
    a: "We start with drawing ingestion (CAD files/sketches) followed by a DFM engineering check. Once approved, the blank profile is cut on 3kW fiber lasers, shaped on 250T CNC press brakes, welded by certified technicians, surfaced in our powder coating lines, and inspected before final dispatch.",
  },
  {
    q: "Do you offer contract manufacturing and JIT deliveries for OEMs?",
    a: "Yes. We sign quarterly/annual supply contracts with solar, automotive, and panel OEMs. We support scheduled JIT (Just-In-Time) deliveries and maintain a buffer stock in our warehouse to handle supply surges.",
  },
  {
    q: "What file formats should we supply to receive a fabrication quote?",
    a: "We prefer vector formats like .DXF or .DWG for laser nesting and .STEP, .STP, or .IGS files for 3D press-brake folding simulations. Dimensioned engineering PDFs are also required to verify tolerances.",
  },
  {
    q: "How do you manage quality control for high-precision components?",
    a: "Our quality assurance system checks parts at every stage: after laser cutting (profile review), after bending (flange/angle check), after welding (joint testing), and after powder coating (DFT/adhesion testing).",
  },
];

const CustomMetalFabricationBangalore = () => {
  const pageUrl = "/custom-metal-fabrication-bangalore";
  const pageTitle = "Custom Metal Fabrication Company Bangalore | MAM Industries";
  const pageDesc = "MAM Industries is a leading B2B custom metal fabrication company in Bangalore. Turnkey sheet metal fabrication, laser cutting & welding. Get a quote.";
  const pageKeywords = "custom metal fabrication, metal fabrication company, precision sheet metal fabrication, oem sheet metal manufacturer, metal enclosure manufacturer, industrial fabrication bangalore";

  const jsonLd = {
    "@graph": [
      getBreadcrumbSchema([
        { name: "Home", url: "/" },
        { name: "Custom Metal Fabrication Bangalore", url: pageUrl },
      ]),
      getServiceSchema("Custom Metal Fabrication", "Complete end-to-end custom metal fabrication, sheet metal processing, and B2B OEM contract manufacturing in Bangalore."),
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
          <span className="eyebrow">Turnkey B2B Manufacturing</span>
          <h1 className="h-display text-4xl md:text-6xl mt-4 text-white max-w-5xl">
            Custom Metal <span className="text-accent">Fabrication Company</span> in Bangalore
          </h1>
          <p className="text-metallic mt-6 max-w-2xl text-lg leading-relaxed">
            MAM Industries is a full-service B2B contract fabricator. We deliver high-precision sheet metal assemblies, structural frames, and custom enclosures from CAD drawings.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link to="/contact?service=Custom%20Fabrication" className="inline-flex items-center gap-2 bg-accent text-accent-foreground px-6 py-3.5 rounded-md font-semibold text-sm hover:bg-accent/90 transition-colors shadow-accentglow">
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
              <h2 className="text-3xl font-bold tracking-tight text-primary">Precision B2B Sheet Metal & Contract Fabrication in Bengaluru</h2>
              <p className="leading-relaxed text-muted-foreground">
                Successful metal fabrication requires engineering experience, modern CNC machinery, and high quality control. As a leading **custom metal fabrication company in Bangalore**, MAM Industries acts as a turnkey contracting partner for OEMs, industrial facilities, construction developers, and architectural firms. We transform raw steel plates, profiles, and tubes into finished assemblies ready for your production line.
              </p>
              <p className="leading-relaxed text-muted-foreground">
                Our Peenya-adjacent Kanakapura facility provides complete fabrication capabilities under one roof: advanced laser cutting, high-tonnage bending, certified multi-process welding, and industrial surface finishing. This unified workflow reduces lead times and removes the risk of multi-vendor delays.
              </p>
            </div>

            {/* Custom Fabrication Stages */}
            <div className="space-y-4">
              <h3 className="text-2xl font-bold tracking-tight text-primary">Our Unified B2B Fabrication Workflow</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="border border-border p-5 rounded-lg bg-card shadow-sm space-y-2">
                  <span className="text-xs font-bold text-accent uppercase">Stage 01</span>
                  <h3 className="font-semibold text-primary">DFM Engineering Review</h3>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    Our technical team reviews client CAD designs to optimize sheet layout, minimize bending setups, and reduce welding distortion before scheduling runs.
                  </p>
                </div>
                <div className="border border-border p-5 rounded-lg bg-card shadow-sm space-y-2">
                  <span className="text-xs font-bold text-accent uppercase">Stage 02</span>
                  <h3 className="font-semibold text-primary">Precision CNC Profiling</h3>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    3kW CNC fiber lasers cut parts with sub-millimeter precision, creating clean profiles and holes ready for downstream bending.
                  </p>
                </div>
                <div className="border border-border p-5 rounded-lg bg-card shadow-sm space-y-2">
                  <span className="text-xs font-bold text-accent uppercase">Stage 03</span>
                  <h3 className="font-semibold text-primary">CNC Press Bending</h3>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    250-ton hydraulic press brakes bend sections up to 2.5 meters. Gooseneck punches and split dies allow complex enclosure folding sequences.
                  </p>
                </div>
                <div className="border border-border p-5 rounded-lg bg-card shadow-sm space-y-2">
                  <span className="text-xs font-bold text-accent uppercase">Stage 04</span>
                  <h3 className="font-semibold text-primary">Welding & Surface Coating</h3>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    Certified welders join parts using MIG, TIG, and laser welding. Finished weldments are cleaned and treated in our powder coating lines.
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <h2 className="text-2xl font-bold tracking-tight text-primary">Quality Assurance and Traceability</h2>
              <p className="leading-relaxed text-muted-foreground">
                At MAM Industries, quality control is integrated into every stage of production. Measurements are checked against engineering blueprints using calibrated verniers, height gauges, and angular indicators. We ensure complete material traceability by stamping heat codes or serial numbers directly on batch runs, meeting ISO 9001 quality systems.
              </p>
              <div className="grid md:grid-cols-2 gap-4 pt-2">
                <div className="flex gap-3 items-start">
                  <span className="p-2 bg-accent/10 rounded-md text-accent shrink-0">
                    <ShieldCheck size={20} />
                  </span>
                  <div>
                    <h3 className="font-semibold text-primary">Turnkey BOM Sourcing</h3>
                    <p className="text-sm text-muted-foreground">We source certified MS, SS, and Aluminum plates from primary steel mills with test certificates.</p>
                  </div>
                </div>
                <div className="flex gap-3 items-start">
                  <span className="p-2 bg-accent/10 rounded-md text-accent shrink-0">
                    <Zap size={20} />
                  </span>
                  <div>
                    <h3 className="font-semibold text-primary">OEM Scale Capabilities</h3>
                    <p className="text-sm text-muted-foreground">Our workshop operates in double-shifts to process high-volume sheet metal contracts.</p>
                  </div>
                </div>
                <div className="flex gap-3 items-start">
                  <span className="p-2 bg-accent/10 rounded-md text-accent shrink-0">
                    <Layers size={20} />
                  </span>
                  <div>
                    <h3 className="font-semibold text-primary">Anti-Corrosive Painting</h3>
                    <p className="text-sm text-muted-foreground">We offer high-grade zinc-phosphated powder coating to withstand 500-1000 hour salt spray tests.</p>
                  </div>
                </div>
                <div className="flex gap-3 items-start">
                  <span className="p-2 bg-accent/10 rounded-md text-accent shrink-0">
                    <Compass size={20} />
                  </span>
                  <div>
                    <h3 className="font-semibold text-primary">JIT Scheduled Deliveries</h3>
                    <p className="text-sm text-muted-foreground">We support scheduled kanban and just-in-time logistics to feed B2B assembly lines.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <h2 className="text-2xl font-bold tracking-tight text-primary">Products and Components Fabricated</h2>
              <p className="leading-relaxed text-muted-foreground">
                Our custom manufacturing lines frequently produce:
              </p>
              <ul className="grid md:grid-cols-2 gap-2 text-sm text-muted-foreground pl-2">
                <li className="flex items-center gap-2"><Check size={16} className="text-highlight" /> Mild Steel and Stainless Steel Enclosures</li>
                <li className="flex items-center gap-2"><Check size={16} className="text-highlight" /> Industrial Machine Guardings & Hoods</li>
                <li className="flex items-center gap-2"><Check size={16} className="text-highlight" /> Solar Mounting Frames & Brackets</li>
                <li className="flex items-center gap-2"><Check size={16} className="text-highlight" /> Electrical Control Panel Cabinets</li>
                <li className="flex items-center gap-2"><Check size={16} className="text-highlight" /> Warehouse Racking Systems & Material Trays</li>
                <li className="flex items-center gap-2"><Check size={16} className="text-highlight" /> Structural Columns, Lintels & Shed Trusses</li>
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
                <Link to="/laser-marking-bangalore" className="flex items-center justify-between text-sm text-muted-foreground hover:text-accent font-medium py-1 transition-colors">
                  <span>Laser Marking & Engraving</span>
                  <ArrowRight size={14} />
                </Link>
              </nav>
            </div>

            <div className="bg-secondary/10 border border-secondary/20 p-6 rounded-lg space-y-4">
              <h3 className="font-semibold text-primary text-base">B2B Sourcing Support</h3>
              <p className="text-xs text-muted-foreground leading-relaxed">
                Got a custom assembly requirement? Send us the details and drawings. We will evaluate feasibility and provide competitive pricing schedules.
              </p>
              <Link to="/contact" className="w-full inline-flex justify-center items-center gap-2 bg-primary text-primary-foreground py-2.5 rounded-md text-xs font-semibold hover:bg-primary/95 transition-colors">
                Enquire Custom Fabrication
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
              Custom Fabrication <span className="text-accent">Queries</span>
            </h2>
            <p className="text-muted-foreground mt-4 text-sm leading-relaxed">
              Find technical answers about DFM engineering procedures, contract agreements, and quality checking criteria.
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

export default CustomMetalFabricationBangalore;
