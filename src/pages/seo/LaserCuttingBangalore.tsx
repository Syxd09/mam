import { Link } from "react-router-dom";
import { ArrowRight, Check, ShieldCheck, Zap, Layers, Compass } from "lucide-react";
import SEO from "@/components/SEO";
import ContactCTA from "@/components/home/ContactCTA";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { getBreadcrumbSchema, getServiceSchema, getFAQPageSchema } from "@/lib/seo";

const FAQS = [
  {
    q: "What is your typical turnaround time for laser cutting services in Bangalore?",
    a: "For prototyping and short runs, we generally deliver within 3 to 5 business days. For high-volume production, lead times range between 1 and 2 weeks depending on material availability and processing queue. Urgent/express deliveries can also be scheduled.",
  },
  {
    q: "What CAD formats do you accept for CNC laser cutting designs?",
    a: "We accept vector formats such as .DXF, .DWG, and .STEP files. If you only have hand-drawn sketches or physical parts, our DFM design team can reconstruct them into production-ready CAD drawings for nesting.",
  },
  {
    q: "Can you supply materials, or do you support job-work with client-supplied metal?",
    a: "We offer both turnkey material procurement (sourcing certified MS, SS, and Aluminum from premium mills) and job-work contracts using client-supplied sheet metal. All incoming material is subject to verification checks.",
  },
  {
    q: "What dimensional tolerances does your 3kW CNC fiber laser cutting achieve?",
    a: "Our CNC fiber laser cutting cells maintain a high-precision linear tolerance of ±0.1mm. This ensures consistent fits for downstream processing like CNC bending and automated welding assemblies.",
  },
];

const LaserCuttingBangalore = () => {
  const pageUrl = "/laser-cutting-bangalore";
  const pageTitle = "Laser Cutting Services in Bangalore | MAM Industries";
  const pageDesc = "MAM Industries offers premium B2B 3kW fiber CNC laser cutting services in Bangalore. High-accuracy cutting for MS, SS, Aluminum & GI sheet metal. Get a quote.";
  const pageKeywords = "laser cutting bangalore, laser cutting services bangalore, cnc laser cutting, sheet metal fabrication bangalore, fiber laser cutting bengaluru";

  const jsonLd = {
    "@graph": [
      getBreadcrumbSchema([
        { name: "Home", url: "/" },
        { name: "Laser Cutting Bangalore", url: pageUrl },
      ]),
      getServiceSchema("CNC Laser Cutting", "Precision CNC fiber laser cutting services for mild steel, stainless steel, aluminum, and GI sheets in Bangalore."),
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
          <span className="eyebrow">High-Precision Metal Processing</span>
          <h1 className="h-display text-4xl md:text-6xl mt-4 text-white max-w-4xl">
            Precision CNC <span className="text-accent">Laser Cutting Services</span> in Bangalore
          </h1>
          <p className="text-metallic mt-6 max-w-2xl text-lg leading-relaxed">
            MAM Industries provides state-of-the-art 3kW fiber laser cutting solutions tailored for B2B OEMs, heavy industry, structural fabricators, and architectural applications across Bangalore. 
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link to="/contact?service=Laser%20Cutting" className="inline-flex items-center gap-2 bg-accent text-accent-foreground px-6 py-3.5 rounded-md font-semibold text-sm hover:bg-accent/90 transition-colors shadow-accentglow">
              Get Fast Quote <ArrowRight size={15} />
            </Link>
            <a href="tel:+917892303386" className="inline-flex items-center gap-2 border border-white/20 text-white px-6 py-3.5 rounded-md font-semibold text-sm hover:bg-white/10 transition-colors">
              Call Sales Desk
            </a>
          </div>
        </div>
      </section>

      {/* Overview Article */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container grid lg:grid-cols-12 gap-12 items-start">
          {/* Main Content */}
          <article className="lg:col-span-8 space-y-8 text-foreground/90">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold tracking-tight text-primary">Advanced 3kW Fiber Laser Technology in Bengaluru</h2>
              <p className="leading-relaxed text-muted-foreground">
                In modern industrial manufacturing, speed and precision are non-negotiable. At MAM Industries, we employ advanced **3kW CNC fiber laser cutting cells** to slice through a diverse range of metal alloys with micro-millimeter tolerance. Unlike conventional CO₂ lasers or plasma cutting systems, our fiber laser technology delivers clean cuts, zero edge distortion, and a minimal heat-affected zone (HAZ), making it the gold standard for sheet metal fabrication.
              </p>
              <p className="leading-relaxed text-muted-foreground">
                Whether you need low-volume prototyping or high-capacity serial fabrication runs, our automated nesting software optimizes sheet layout to decrease raw material waste, passing the cost savings directly to our B2B customers.
              </p>
            </div>

            {/* Spec Sheet Table */}
            <div className="border border-border rounded-lg overflow-hidden bg-card shadow-sm">
              <div className="bg-primary/5 px-6 py-4 border-b border-border">
                <h3 className="font-sora font-semibold text-primary">CNC Laser Cutting Capability Guide</h3>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse text-sm">
                  <thead>
                    <tr className="bg-secondary/10 border-b border-border">
                      <th className="px-6 py-3 font-semibold text-primary">Material Type</th>
                      <th className="px-6 py-3 font-semibold text-primary">Thickness Range</th>
                      <th className="px-6 py-3 font-semibold text-primary">Max Bed Size</th>
                      <th className="px-6 py-3 font-semibold text-primary">Standard Tolerance</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-border">
                    <tr>
                      <td className="px-6 py-3.5 font-medium">Mild Steel (MS)</td>
                      <td className="px-6 py-3.5">0.8 mm – 16 mm</td>
                      <td className="px-6 py-3.5">2000 mm x 4000 mm</td>
                      <td className="px-6 py-3.5">±0.1 mm</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-3.5 font-medium">Stainless Steel (SS)</td>
                      <td className="px-6 py-3.5">0.8 mm – 8 mm</td>
                      <td className="px-6 py-3.5">2000 mm x 4000 mm</td>
                      <td className="px-6 py-3.5">±0.1 mm</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-3.5 font-medium">Aluminium (Al)</td>
                      <td className="px-6 py-3.5">0.1 mm – 5 mm</td>
                      <td className="px-6 py-3.5">2000 mm x 4000 mm</td>
                      <td className="px-6 py-3.5">±0.15 mm</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-3.5 font-medium">Galvanized Iron (GI)</td>
                      <td className="px-6 py-3.5">0.8 mm – 4 mm</td>
                      <td className="px-6 py-3.5">2000 mm x 4000 mm</td>
                      <td className="px-6 py-3.5">±0.1 mm</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div className="space-y-4">
              <h2 className="text-2xl font-bold tracking-tight text-primary">Why Outsource to MAM Industries?</h2>
              <p className="leading-relaxed text-muted-foreground">
                Our workshop is located strategically in Kanakapura Road, Bangalore, providing efficient logistics connections to major industrial hubs including Peenya, Electronic City, Bidadi, Jigani, and Bommasandra. We don't just cut metal; we provide comprehensive DFM (Design for Manufacturability) support, ensuring that your CAD designs are optimized for sheet utilization, bend allowances, and structural integrity.
              </p>
              <div className="grid md:grid-cols-2 gap-4 pt-2">
                <div className="flex gap-3 items-start">
                  <span className="p-2 bg-accent/10 rounded-md text-accent shrink-0">
                    <ShieldCheck size={20} />
                  </span>
                  <div>
                    <h4 className="font-semibold text-primary">Quality Certification</h4>
                    <p className="text-sm text-muted-foreground">Rigorous QA checks check part profiles and hole geometries against drawings.</p>
                  </div>
                </div>
                <div className="flex gap-3 items-start">
                  <span className="p-2 bg-accent/10 rounded-md text-accent shrink-0">
                    <Zap size={20} />
                  </span>
                  <div>
                    <h4 className="font-semibold text-primary">SigmaNEST Optimization</h4>
                    <p className="text-sm text-muted-foreground">Advanced dynamic nesting reduces scrap rate by up to 15%, reducing batch costs.</p>
                  </div>
                </div>
                <div className="flex gap-3 items-start">
                  <span className="p-2 bg-accent/10 rounded-md text-accent shrink-0">
                    <Layers size={20} />
                  </span>
                  <div>
                    <h4 className="font-semibold text-primary">Secondary Edge De-burring</h4>
                    <p className="text-sm text-muted-foreground">Post-cut inspection handles sharp edges, preparing parts for bending or painting.</p>
                  </div>
                </div>
                <div className="flex gap-3 items-start">
                  <span className="p-2 bg-accent/10 rounded-md text-accent shrink-0">
                    <Compass size={20} />
                  </span>
                  <div>
                    <h4 className="font-semibold text-primary">High-Speed Processing</h4>
                    <p className="text-sm text-muted-foreground">3kW fiber power enables clean cuts on complex geometries with short delivery windows.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <h2 className="text-2xl font-bold tracking-tight text-primary">Serving Diverse B2B Verticals</h2>
              <p className="leading-relaxed text-muted-foreground">
                MAM Industries has established itself as a premier sub-contracting partner for:
              </p>
              <ul className="grid md:grid-cols-2 gap-2 text-sm text-muted-foreground pl-2">
                <li className="flex items-center gap-2"><Check size={16} className="text-highlight" /> Electrical Panel Enclosures & Cabinets</li>
                <li className="flex items-center gap-2"><Check size={16} className="text-highlight" /> Automotive Brackets & Body Panels</li>
                <li className="flex items-center gap-2"><Check size={16} className="text-highlight" /> Architectural Facades & Custom Screens</li>
                <li className="flex items-center gap-2"><Check size={16} className="text-highlight" /> Solar Structure Mounts & Brackets</li>
                <li className="flex items-center gap-2"><Check size={16} className="text-highlight" /> Material Handling Trays & Conveyor Frames</li>
                <li className="flex items-center gap-2"><Check size={16} className="text-highlight" /> OEM Equipment Chassis & Panels</li>
              </ul>
            </div>
          </article>

          {/* Sidebar */}
          <aside className="lg:col-span-4 space-y-6">
            <div className="bg-card border border-border p-6 rounded-lg shadow-sm space-y-6">
              <h3 className="font-sora font-semibold text-lg text-primary border-b border-border pb-3">Related Services</h3>
              <nav className="flex flex-col gap-2.5">
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
                <Link to="/custom-metal-fabrication-bangalore" className="flex items-center justify-between text-sm text-muted-foreground hover:text-accent font-medium py-1 transition-colors">
                  <span>Custom Turnkey Fabrication</span>
                  <ArrowRight size={14} />
                </Link>
              </nav>
            </div>

            <div className="bg-secondary/10 border border-secondary/20 p-6 rounded-lg space-y-4">
              <h4 className="font-semibold text-primary text-base">Instant Technical Review</h4>
              <p className="text-xs text-muted-foreground leading-relaxed">
                Got drawings? Upload them in our quote portal. Our production engineers will check the parameters and respond within 24 hours.
              </p>
              <Link to="/contact" className="w-full inline-flex justify-center items-center gap-2 bg-primary text-primary-foreground py-2.5 rounded-md text-xs font-semibold hover:bg-primary/95 transition-colors">
                Request RFQ Review
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
              Laser Cutting <span className="text-accent">Queries</span>
            </h2>
            <p className="text-muted-foreground mt-4 text-sm leading-relaxed">
              Find technical answers about laser-cutting sheet thickness capabilities, CAD blueprints, and turnaround times in Bangalore.
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

export default LaserCuttingBangalore;
