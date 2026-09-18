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
    q: "What is your maximum bending length and tonnage capacity in Bangalore?",
    a: "Our Bangalore plant operates a 250-ton CNC press brake with a 2500mm bed length for forming sheet metal up to 8mm MS and 6mm SS."
  },
  {
    q: "What materials do you bend at MAM Industries?",
    a: "We bend Mild Steel (MS 0.8mm – 8mm), Stainless Steel (SS 0.8mm – 6mm), Aluminium (1mm – 6mm), and Galvanised Iron (GI 0.8mm – 4mm)."
  },
  {
    q: "Can you bend parts that have complex laser-cut features?",
    a: "Yes. Flat blanks laser-cut on our 3kW CNC fiber laser are routed to our press brake cells. We verify hole locations relative to bend lines during DFM review."
  },
  {
    q: "How do I request a CNC bending quote?",
    a: "Send your 2D/3D CAD drawing (.STEP, .DXF, .DWG, PDF) to MAM Industries via our contact page or email. We send an itemized quote within 24 hours."
  }
];

const CncBendingBangalore = () => {
  const pageUrl = "/cnc-bending-bangalore";
  const pageTitle = "CNC Bending Bangalore | Precision Sheet Metal Bending | MAM Industries";
  const pageDesc = "CNC press brake and sheet metal bending services in Bangalore for MS, stainless steel and aluminium components. Custom bending from customer drawings.";
  const pageKeywords = "cnc bending bangalore, precision sheet metal bending, press brake bending bangalore, custom sheet metal forming bengaluru, ms ss bending bangalore";

  const jsonLd = {
    "@graph": [
      getBreadcrumbSchema([
        { name: "Home", url: "/" },
        { name: "Services", url: "/services" },
        { name: "CNC Bending Bangalore", url: pageUrl },
      ]),
      getServiceSchema("CNC Bending Services", "CNC press brake and sheet metal bending services in Bangalore for MS, stainless steel and aluminium components."),
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
        { name: "CNC Bending Services in Bangalore", url: pageUrl }
      ]} />

      {/* Hero Section */}
      <section className="bg-primary text-primary-foreground relative overflow-hidden">
        <div className="absolute inset-0 bg-blueprint opacity-40" />
        <div className="container relative py-16 md:py-24 flex flex-col justify-center min-h-[45vh]">
          <span className="eyebrow">Precision Sheet Metal Forming</span>
          <h1 className="h-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl mt-3 text-white max-w-4xl">
            CNC Bending Services in Bangalore
          </h1>
          <p className="text-metallic mt-5 max-w-2xl text-base md:text-lg leading-relaxed">
            MAM Industries provides CNC press brake and precision sheet metal bending services in Bangalore for mild steel, stainless steel, and aluminium components based on customer drawings and engineering specs.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link to="/contact" className="inline-flex items-center gap-2 bg-accent text-accent-foreground px-6 py-3.5 rounded-md font-semibold text-sm hover:bg-accent/90 transition-colors shadow-accentglow">
              Request a Bending Quote <ArrowRight size={16} />
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
            
            {/* H2: Precision Sheet Metal Bending */}
            <div className="space-y-4">
              <h2 className="text-2xl md:text-3xl font-sora font-bold tracking-tight text-primary">
                Precision Sheet Metal Bending
              </h2>
              <p className="leading-relaxed text-muted-foreground">
                MAM Industries operates 250-ton hydraulic CNC press brakes with programmable multi-axis backgauges and a fixed bed length of 2500 mm. Our CNC bending capabilities deliver consistent bend angles, tight dimensional tolerances, and smooth radii across simple brackets and complex multi-bend enclosures.
              </p>
              <p className="leading-relaxed text-muted-foreground">
                By importing CAD models directly into machine control units, we simulate folding sequences prior to physical execution, eliminating collision risks and compensating for material springback.
              </p>
            </div>

            {/* H2: Materials We Bend */}
            <div className="space-y-4">
              <h2 className="text-2xl md:text-3xl font-sora font-bold tracking-tight text-primary">
                Materials We Bend
              </h2>
              <div className="border border-border rounded-lg overflow-hidden bg-card shadow-sm">
                <div className="overflow-x-auto">
                  <table className="w-full text-left border-collapse text-sm">
                    <thead>
                      <tr className="bg-secondary/10 border-b border-border">
                        <th className="px-6 py-3 font-semibold text-primary">Material</th>
                        <th className="px-6 py-3 font-semibold text-primary">Thickness Range</th>
                        <th className="px-6 py-3 font-semibold text-primary">Max Bed Length</th>
                        <th className="px-6 py-3 font-semibold text-primary">Angular Tolerance</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-border text-muted-foreground">
                      <tr>
                        <td className="px-6 py-3 font-medium text-foreground">Mild Steel (MS)</td>
                        <td className="px-6 py-3">0.8 mm – 8.0 mm</td>
                        <td className="px-6 py-3">2500 mm</td>
                        <td className="px-6 py-3">±0.05°</td>
                      </tr>
                      <tr>
                        <td className="px-6 py-3 font-medium text-foreground">Stainless Steel (SS)</td>
                        <td className="px-6 py-3">0.8 mm – 6.0 mm</td>
                        <td className="px-6 py-3">2500 mm</td>
                        <td className="px-6 py-3">±0.05°</td>
                      </tr>
                      <tr>
                        <td className="px-6 py-3 font-medium text-foreground">Aluminium (Al)</td>
                        <td className="px-6 py-3">1.0 mm – 6.0 mm</td>
                        <td className="px-6 py-3">2500 mm</td>
                        <td className="px-6 py-3">±0.05°</td>
                      </tr>
                      <tr>
                        <td className="px-6 py-3 font-medium text-foreground">Galvanised Iron (GI)</td>
                        <td className="px-6 py-3">0.8 mm – 4.0 mm</td>
                        <td className="px-6 py-3">2500 mm</td>
                        <td className="px-6 py-3">±0.05°</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

            {/* H2: CNC Laser Cutting and Bending */}
            <div className="space-y-4 bg-secondary/30 p-6 rounded-xl border border-white/5">
              <h2 className="text-2xl font-sora font-bold tracking-tight text-primary">
                CNC Laser Cutting and Bending
              </h2>
              <p className="leading-relaxed text-muted-foreground">
                Sheet metal components rarely consist of bends alone. Flat blanks cut on our 3kW CNC fiber laser pass immediately to our CNC bending section. This single-vendor workflow guarantees that cutouts, mounting slots, and hole patterns line up accurately with formed bend lines.
              </p>
              <Link to="/laser-cutting-bangalore" className="inline-flex items-center gap-1 text-xs font-semibold text-accent uppercase tracking-wider hover:underline">
                Explore Laser Cutting Services in Bangalore <ArrowRight size={14} />
              </Link>
            </div>

            {/* H2: Custom Bent Sheet Metal Components */}
            <div className="space-y-4">
              <h2 className="text-2xl md:text-3xl font-sora font-bold tracking-tight text-primary">
                Custom Bent Sheet Metal Components
              </h2>
              <p className="leading-relaxed text-muted-foreground">
                We manufacture custom formed sheet metal parts for industrial manufacturers, OEM suppliers, and equipment fabricators across Bangalore:
              </p>
              <ul className="grid sm:grid-cols-2 gap-3 pt-2">
                {[
                  "Electrical control panel boxes & doors",
                  "Structural U-channels & Z-profiles",
                  "Machine enclosures & protective covers",
                  "Heavy-duty mounting brackets & gussets",
                  "HVAC duct connectors & transition pieces",
                  "Custom metal chassis & tray assemblies"
                ].map((item, idx) => (
                  <li key={idx} className="flex items-center gap-2 text-sm text-foreground">
                    <Check size={16} className="text-accent shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* H2: Prototype and Production */}
            <div className="space-y-4">
              <h2 className="text-2xl md:text-3xl font-sora font-bold tracking-tight text-primary">
                Prototype and Production
              </h2>
              <p className="leading-relaxed text-muted-foreground">
                Whether you need a single prototype enclosure for engineering testing or high-volume batches of formed brackets, our press brake tooling library and automated CNC backgauging provide rapid setup and repeatable quality.
              </p>
            </div>

            {/* H2: How to Request a CNC Bending Quote */}
            <div className="space-y-4">
              <h2 className="text-2xl md:text-3xl font-sora font-bold tracking-tight text-primary">
                How to Request a CNC Bending Quote
              </h2>
              <p className="leading-relaxed text-muted-foreground">
                Requesting a CNC bending quote from MAM Industries:
              </p>
              <ol className="space-y-3 text-sm text-muted-foreground pl-4 list-decimal">
                <li>Submit your 2D/3D drawing (.DXF, .DWG, .STEP, PDF) showing bend radii and overall dimensions.</li>
                <li>Indicate material grade (MS, SS, Al, GI), sheet gauge, and required batch quantity.</li>
                <li>Our team will perform a DFM review and send an itemized quotation within 24 hours.</li>
              </ol>
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
                <Link to="/sheet-metal-fabrication-bangalore" className="flex items-center justify-between text-sm text-muted-foreground hover:text-accent font-medium py-1 transition-colors">
                  <span>Sheet Metal Fabrication</span>
                  <ArrowRight size={14} />
                </Link>
                <Link to="/custom-metal-fabrication-bangalore" className="flex items-center justify-between text-sm text-muted-foreground hover:text-accent font-medium py-1 transition-colors">
                  <span>Custom Fabrication Bangalore</span>
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
                Upload your 3D or 2D files for press brake feasibility review and quotation within 24 hours.
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

export default CncBendingBangalore;
