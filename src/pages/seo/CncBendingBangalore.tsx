import { Link } from "react-router-dom";
import { ArrowRight, Check, ShieldCheck, Zap, Layers, Compass } from "lucide-react";
import SEO from "@/components/SEO";
import ContactCTA from "@/components/home/ContactCTA";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { getBreadcrumbSchema, getServiceSchema, getFAQPageSchema } from "@/lib/seo";

const FAQS = [
  {
    q: "What is your maximum bending length and tonnage capacity?",
    a: "Our facility is equipped with a high-capacity 250-ton hydraulic CNC press brake with a maximum bed length of 2500mm (2.5 meters). This allows us to bend heavy-gauge plates and long profiles easily.",
  },
  {
    q: "What sheet thicknesses can you form or bend?",
    a: "We form Mild Steel (MS) up to 8mm thickness and Stainless Steel (SS) up to 6mm thickness. For thinner gauges (like 0.8mm to 3mm), we maintain extremely high precision and zero surface marking.",
  },
  {
    q: "How do you ensure repeatable accuracy across large production runs?",
    a: "Our press brakes utilize programmable multi-axis backgauges with auto-crowning systems. Bending programs are simulated in CAD before execution, ensuring angular precision of ±0.05° on every single bend.",
  },
  {
    q: "Can you bend parts that have been laser-cut with complex cutouts?",
    a: "Yes. Our CNC bending cells work directly with laser-cut blanks. We perform DFM reviews to verify that cutouts or holes are not placed too close to the bend line, preventing elongation and deformation during forming.",
  },
];

const CncBendingBangalore = () => {
  const pageUrl = "/cnc-bending-bangalore";
  const pageTitle = "CNC Bending & Press Brake Services Bangalore | MAM Industries";
  const pageDesc = "MAM Industries provides precision B2B 250T CNC bending and press-brake forming services in Bangalore. Exact angular tolerances for MS & SS. Get a quote.";
  const pageKeywords = "cnc bending services, press-brake forming bangalore, custom metal bending, sheet metal folding bangalore, precision sheet metal forming";

  const jsonLd = {
    "@graph": [
      getBreadcrumbSchema([
        { name: "Home", url: "/" },
        { name: "CNC Bending Bangalore", url: pageUrl },
      ]),
      getServiceSchema("CNC Bending & Press Brake Services", "250-ton CNC press brake forming and sheet metal bending services in Bangalore."),
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
          <span className="eyebrow">Precision Metal Forming</span>
          <h1 className="h-display text-4xl md:text-6xl mt-4 text-white max-w-4xl">
            Precision CNC <span className="text-accent">Bending Services</span> in Bangalore
          </h1>
          <p className="text-metallic mt-6 max-w-2xl text-lg leading-relaxed">
            From simple angles to complex multi-bend enclosures, MAM Industries operates high-tonnage CNC press brakes delivering repeatable forming for industrial OEMs across Karnataka.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link to="/contact?service=CNC%20Bending" className="inline-flex items-center gap-2 bg-accent text-accent-foreground px-6 py-3.5 rounded-md font-semibold text-sm hover:bg-accent/90 transition-colors shadow-accentglow">
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
              <h2 className="text-3xl font-bold tracking-tight text-primary">High-Tonnage CNC Press Brake Bending in Bengaluru</h2>
              <p className="leading-relaxed text-muted-foreground">
                In metal fabrication, a precise cut is only as good as the subsequent bend. MAM Industries is a leading sheet metal forming provider in Bangalore, offering **250-ton hydraulic CNC press-brake bending**. With programmable multi-axis backgauges and a fixed bed length of 2500mm, we perform highly complex folding sequences on mild steel, stainless steel, and aluminum plates.
              </p>
              <p className="leading-relaxed text-muted-foreground">
                Our advanced control units allow operators to import 3D CAD files directly, simulating the bend process to prevent part collisions and spring-back variances. This digital workflow guarantees that your production batches match the first prototype exactly.
              </p>
            </div>

            {/* Bending Capability Guide */}
            <div className="border border-border rounded-lg overflow-hidden bg-card shadow-sm">
              <div className="bg-primary/5 px-6 py-4 border-b border-border">
                <h3 className="font-sora font-semibold text-primary">CNC Bending Capacity Details</h3>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse text-sm">
                  <thead>
                    <tr className="bg-secondary/10 border-b border-border">
                      <th className="px-6 py-3 font-semibold text-primary">Material</th>
                      <th className="px-6 py-3 font-semibold text-primary">Thickness Range</th>
                      <th className="px-6 py-3 font-semibold text-primary">Max Length</th>
                      <th className="px-6 py-3 font-semibold text-primary">Angular Tolerance</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-border">
                    <tr>
                      <td className="px-6 py-3.5 font-medium">Mild Steel (MS)</td>
                      <td className="px-6 py-3.5">0.8 mm – 8.0 mm</td>
                      <td className="px-6 py-3.5">2500 mm</td>
                      <td className="px-6 py-3.5">±0.5° (Repeatable)</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-3.5 font-medium">Stainless Steel (SS)</td>
                      <td className="px-6 py-3.5">0.8 mm – 6.0 mm</td>
                      <td className="px-6 py-3.5">2500 mm</td>
                      <td className="px-6 py-3.5">±0.5° (Repeatable)</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-3.5 font-medium">Aluminium (Al)</td>
                      <td className="px-6 py-3.5">1.0 mm – 6.0 mm</td>
                      <td className="px-6 py-3.5">2500 mm</td>
                      <td className="px-6 py-3.5">±1.0°</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-3.5 font-medium">Galvanized (GI)</td>
                      <td className="px-6 py-3.5">0.8 mm – 4.0 mm</td>
                      <td className="px-6 py-3.5">2500 mm</td>
                      <td className="px-6 py-3.5">±0.5°</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div className="space-y-4">
              <h2 className="text-2xl font-bold tracking-tight text-primary">Design for Bending (DFM) Support</h2>
              <p className="leading-relaxed text-muted-foreground">
                Bending sheet metal requires careful calculation of bend allowances, material elongation, and tool clearances. Our engineering team reviews your design files beforehand to ensure compatibility. If a hole or cutout is located inside a bend radius deformation zone, we suggest minor adjustments to preserve the structural stability of the final piece.
              </p>
              <div className="grid md:grid-cols-2 gap-4 pt-2">
                <div className="flex gap-3 items-start">
                  <span className="p-2 bg-accent/10 rounded-md text-accent shrink-0">
                    <ShieldCheck size={20} />
                  </span>
                  <div>
                    <h4 className="font-semibold text-primary">Multi-Axis backgauging</h4>
                    <p className="text-sm text-muted-foreground">Precision alignment of multi-stage bends for complicated brackets and enclosures.</p>
                  </div>
                </div>
                <div className="flex gap-3 items-start">
                  <span className="p-2 bg-accent/10 rounded-md text-accent shrink-0">
                    <Zap size={20} />
                  </span>
                  <div>
                    <h4 className="font-semibold text-primary">Auto-Crowning Systems</h4>
                    <p className="text-sm text-muted-foreground">Maintains constant angular accuracy across the entire length of the bed.</p>
                  </div>
                </div>
                <div className="flex gap-3 items-start">
                  <span className="p-2 bg-accent/10 rounded-md text-accent shrink-0">
                    <Layers size={20} />
                  </span>
                  <div>
                    <h4 className="font-semibold text-primary">Enclosure Bending Tooling</h4>
                    <p className="text-sm text-muted-foreground">Gooseneck punch and split dies allow deep box forming without panel collision.</p>
                  </div>
                </div>
                <div className="flex gap-3 items-start">
                  <span className="p-2 bg-accent/10 rounded-md text-accent shrink-0">
                    <Compass size={20} />
                  </span>
                  <div>
                    <h4 className="font-semibold text-primary">Springback Calibration</h4>
                    <p className="text-sm text-muted-foreground">Calculations account for specific metal hardness and grain directions.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <h2 className="text-2xl font-bold tracking-tight text-primary">Industrial Applications</h2>
              <p className="leading-relaxed text-muted-foreground">
                We handle CNC press brake bending for:
              </p>
              <ul className="grid md:grid-cols-2 gap-2 text-sm text-muted-foreground pl-2">
                <li className="flex items-center gap-2"><Check size={16} className="text-highlight" /> Custom Sheet Metal Enclosures & Cases</li>
                <li className="flex items-center gap-2"><Check size={16} className="text-highlight" /> U-Channels, Z-Profiles & Custom Angles</li>
                <li className="flex items-center gap-2"><Check size={16} className="text-highlight" /> Industrial Cabinets & Control Desks</li>
                <li className="flex items-center gap-2"><Check size={16} className="text-highlight" /> Heavy-duty Brackets & Structural Flanges</li>
                <li className="flex items-center gap-2"><Check size={16} className="text-highlight" /> HVAC Ducting Profiles & Cable Trays</li>
                <li className="flex items-center gap-2"><Check size={16} className="text-highlight" /> Retail Fixtures & Metal Shelving Parts</li>
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
              <h4 className="font-semibold text-primary text-base">Press Brake Tooling Setup</h4>
              <p className="text-xs text-muted-foreground leading-relaxed">
                We maintain a comprehensive library of punch and die sets to accommodate custom radius requirements. No custom tooling charges for standard radius bends.
              </p>
              <Link to="/contact" className="w-full inline-flex justify-center items-center gap-2 bg-primary text-primary-foreground py-2.5 rounded-md text-xs font-semibold hover:bg-primary/95 transition-colors">
                Enquire Bending Capacity
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
              CNC Bending <span className="text-accent">Queries</span>
            </h2>
            <p className="text-muted-foreground mt-4 text-sm leading-relaxed">
              Find technical answers about press brake capacities, angular tolerances, and material forming guidelines.
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

export default CncBendingBangalore;
