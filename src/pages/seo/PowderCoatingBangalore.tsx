import { Link } from "react-router-dom";
import { ArrowRight, Check, ShieldCheck, Zap, Layers, Compass } from "lucide-react";
import SEO from "@/components/SEO";
import ContactCTA from "@/components/home/ContactCTA";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { getBreadcrumbSchema, getServiceSchema, getFAQPageSchema } from "@/lib/seo";

const FAQS = [
  {
    q: "What is your metal pretreatment process before powder coating?",
    a: "We employ a multi-stage chemical pretreatment process (including degreasing, rust removal/acid pickling, and phosphating/chromating) followed by DI water rinses. This cleaning stage ensures maximum powder adhesion and stops under-film corrosion.",
  },
  {
    q: "What types of powders and finishes do you offer?",
    a: "We offer Pure Polyester (for outdoor UV resistance), Epoxy-Polyester Hybrids (for indoor chemical/abrasion resistance), and Pure Epoxy coatings. Finishes include glossy, semi-gloss, matt, texture, structure, and metallic finishes in any RAL color.",
  },
  {
    q: "What are your quality control and coating testing standards?",
    a: "We perform adhesion tests (cross-hatch testing), coating thickness checks (dry film thickness or DFT checks), impact tests, and work with certified labs for salt-spray chamber testing (meeting ASTM B117 standards up to 500-1000 hours).",
  },
  {
    q: "Can you powder coat large structural assemblies and heavy enclosures?",
    a: "Yes, our partner batch curing ovens accommodate large structural fabrications, frames, architectural grilles, and heavy-duty sheet metal enclosures. Contact us with your component dimensions for an exact review.",
  },
];

const PowderCoatingBangalore = () => {
  const pageUrl = "/powder-coating-bangalore";
  const pageTitle = "Industrial Powder Coating Services Bangalore | MAM Industries";
  const pageDesc = "MAM Industries offers premium B2B powder coating services in Bangalore. Durable, anti-corrosive finishes for MS, SS & Aluminum. Get a quote.";
  const pageKeywords = "powder coating services, industrial surface finishing bangalore, metal coating bangalore, architectural powder coating, anti corrosive metal finishing";

  const jsonLd = {
    "@graph": [
      getBreadcrumbSchema([
        { name: "Home", url: "/" },
        { name: "Powder Coating Bangalore", url: pageUrl },
      ]),
      getServiceSchema("Industrial Powder Coating", "Durable electrostatic powder coating and surface finishing services for metal components in Bangalore."),
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
          <span className="eyebrow">Durable Surface Finishing</span>
          <h1 className="h-display text-4xl md:text-6xl mt-4 text-white max-w-4xl">
            Industrial Metal <span className="text-accent">Powder Coating</span> in Bangalore
          </h1>
          <p className="text-metallic mt-6 max-w-2xl text-lg leading-relaxed">
            MAM Industries provides B2B-grade electrostatic powder coating and surface finishing. Protect your mild steel, stainless steel, and aluminum fabrications against rust and wear.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link to="/contact?service=Powder%20Coating" className="inline-flex items-center gap-2 bg-accent text-accent-foreground px-6 py-3.5 rounded-md font-semibold text-sm hover:bg-accent/90 transition-colors shadow-accentglow">
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
              <h2 className="text-3xl font-bold tracking-tight text-primary">High-Performance Protective Surface Coatings in Bengaluru</h2>
              <p className="leading-relaxed text-muted-foreground">
                In harsh industrial and outdoor environments, raw metal is vulnerable to corrosion, chemical wear, and impact. At MAM Industries, we offer high-grade **powder coating and metal finishing services in Bangalore** designed to prolong the lifecycle of your parts. Powder coating is an advanced dry finishing process where electrostatically charged pigment particles are sprayed onto grounded metal surfaces and melted/cured under high temperatures.
              </p>
              <p className="leading-relaxed text-muted-foreground">
                Unlike liquid paints, powder coating forms a thick, cross-linked protective barrier that is highly resistant to chipping, scratching, UV degradation, and fading. It is also environmentally friendly, emitting zero Volatile Organic Compounds (VOCs).
              </p>
            </div>

            {/* Spec Sheet Table */}
            <div className="border border-border rounded-lg overflow-hidden bg-card shadow-sm">
              <div className="bg-primary/5 px-6 py-4 border-b border-border">
                <h3 className="font-sora font-semibold text-primary">Powder Coating System Capability</h3>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse text-sm">
                  <thead>
                    <tr className="bg-secondary/10 border-b border-border">
                      <th className="px-6 py-3 font-semibold text-primary">Powder Chemistry</th>
                      <th className="px-6 py-3 font-semibold text-primary">Best Used For</th>
                      <th className="px-6 py-3 font-semibold text-primary">Coat Thickness (DFT)</th>
                      <th className="px-6 py-3 font-semibold text-primary">Salt Spray Rating</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-border">
                    <tr>
                      <td className="px-6 py-3.5 font-medium">Epoxies (Pure Epoxy)</td>
                      <td className="px-6 py-3.5">Indoor machinery, electrical boxes, chemical resistance</td>
                      <td className="px-6 py-3.5">60 – 90 microns</td>
                      <td className="px-6 py-3.5">Up to 500 hours</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-3.5 font-medium">Polyesters (Pure Polyester)</td>
                      <td className="px-6 py-3.5">Outdoor furniture, solar structures, automotive trim</td>
                      <td className="px-6 py-3.5">70 – 100 microns</td>
                      <td className="px-6 py-3.5">Up to 1000 hours (with primer)</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-3.5 font-medium">Epoxy-Polyester Hybrids</td>
                      <td className="px-6 py-3.5">General appliances, office panels, brackets</td>
                      <td className="px-6 py-3.5">60 – 80 microns</td>
                      <td className="px-6 py-3.5">Up to 300 hours</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-3.5 font-medium">Polyurethanes</td>
                      <td className="px-6 py-3.5">High wear components, dynamic equipment</td>
                      <td className="px-6 py-3.5">50 – 75 microns</td>
                      <td className="px-6 py-3.5">Up to 750 hours</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div className="space-y-4">
              <h2 className="text-2xl font-bold tracking-tight text-primary">The Cleaning & Pretreatment Difference</h2>
              <p className="leading-relaxed text-muted-foreground">
                90% of powder coating failures (peeling, bubbling, and premature rusting) originate from poor surface preparation. We manage strict pretreatment workflows: metal surfaces are stripped of oil, grease, scale, and surface contaminants through alkaline degreasing and pickling baths before receiving a micro-crystalline phosphate conversion coating. This chemical bonding agent acts as an anchor for the powder layer.
              </p>
              <div className="grid md:grid-cols-2 gap-4 pt-2">
                <div className="flex gap-3 items-start">
                  <span className="p-2 bg-accent/10 rounded-md text-accent shrink-0">
                    <ShieldCheck size={20} />
                  </span>
                  <div>
                    <h3 className="font-semibold text-primary">7-Tank Pretreatment</h3>
                    <p className="text-sm text-muted-foreground">Comprehensive multi-tank chemical washes ensure optimal corrosion resistance.</p>
                  </div>
                </div>
                <div className="flex gap-3 items-start">
                  <span className="p-2 bg-accent/10 rounded-md text-accent shrink-0">
                    <Zap size={20} />
                  </span>
                  <div>
                    <h3 className="font-semibold text-primary">Electrostatic Uniformity</h3>
                    <p className="text-sm text-muted-foreground">Charged corona gun spray provides wrapping and uniform coating on complex geometries.</p>
                  </div>
                </div>
                <div className="flex gap-3 items-start">
                  <span className="p-2 bg-accent/10 rounded-md text-accent shrink-0">
                    <Layers size={20} />
                  </span>
                  <div>
                    <h3 className="font-semibold text-primary">Micro-Curing Profiling</h3>
                    <p className="text-sm text-muted-foreground">Oven temperatures are logged and calibrated to ensure full cross-linking without brittleness.</p>
                  </div>
                </div>
                <div className="flex gap-3 items-start">
                  <span className="p-2 bg-accent/10 rounded-md text-accent shrink-0">
                    <Compass size={20} />
                  </span>
                  <div>
                    <h3 className="font-semibold text-primary">Cross-Hatch Adhesion Checks</h3>
                    <p className="text-sm text-muted-foreground">Destructive cross-cut tests verify coating adhesion indexes on reference sample panels.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <h2 className="text-2xl font-bold tracking-tight text-primary">Applications & Parts Processed</h2>
              <p className="leading-relaxed text-muted-foreground">
                We provide powder coating services for:
              </p>
              <ul className="grid md:grid-cols-2 gap-2 text-sm text-muted-foreground pl-2">
                <li className="flex items-center gap-2"><Check size={16} className="text-highlight" /> Industrial Cabinets & Electrical Panel boards</li>
                <li className="flex items-center gap-2"><Check size={16} className="text-highlight" /> Architectural Metal Gates, Grills, & Railings</li>
                <li className="flex items-center gap-2"><Check size={16} className="text-highlight" /> Automotive Chassis Components & Brackets</li>
                <li className="flex items-center gap-2"><Check size={16} className="text-highlight" /> Retail Supermarket Racks & Shelving units</li>
                <li className="flex items-center gap-2"><Check size={16} className="text-highlight" /> Heavy machinery casings & weldments</li>
                <li className="flex items-center gap-2"><Check size={16} className="text-highlight" /> Solar panel mounting structures</li>
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
                <Link to="/laser-marking-bangalore" className="flex items-center justify-between text-sm text-muted-foreground hover:text-accent font-medium py-1 transition-colors">
                  <span>Laser Marking & Engraving</span>
                  <ArrowRight size={14} />
                </Link>
                <Link to="/custom-metal-fabrication-bangalore" className="flex items-center justify-between text-sm text-muted-foreground hover:text-accent font-medium py-1 transition-colors">
                  <span>Custom Turnkey Fabrication</span>
                  <ArrowRight size={14} />
                </Link>
              </nav>
            </div>

            <div className="bg-secondary/10 border border-secondary/20 p-6 rounded-lg space-y-4">
              <h3 className="font-semibold text-primary text-base">RAL Color Codes</h3>
              <p className="text-xs text-muted-foreground leading-relaxed">
                We support the entire RAL Classic color library. Custom shades can be formulated for bulk B2B agreements matching corporate brand standards.
              </p>
              <Link to="/contact" className="w-full inline-flex justify-center items-center gap-2 bg-primary text-primary-foreground py-2.5 rounded-md text-xs font-semibold hover:bg-primary/95 transition-colors">
                Enquire Finishing Options
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
              Powder Coating <span className="text-accent">Queries</span>
            </h2>
            <p className="text-muted-foreground mt-4 text-sm leading-relaxed">
              Find technical answers about pre-treatment baths, curing ovens, powder types, and thickness measurements.
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

export default PowderCoatingBangalore;
