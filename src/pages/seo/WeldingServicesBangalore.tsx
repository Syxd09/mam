import { Link } from "react-router-dom";
import { ArrowRight, Check, ShieldCheck, Zap, Layers, Compass } from "lucide-react";
import SEO from "@/components/SEO";
import Breadcrumbs from "@/components/Breadcrumbs";
import ContactCTA from "@/components/home/ContactCTA";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { getBreadcrumbSchema, getServiceSchema, getFAQPageSchema } from "@/lib/seo";

const FAQS = [
  {
    q: "What welding processes does MAM Industries offer in Bangalore?",
    a: "We provide high-integrity MIG / CO₂ welding, clean TIG welding for stainless steel, resistance spot welding, and advanced handheld fiber laser welding for custom metal components and structural assemblies.",
  },
  {
    q: "How do you control heat distortion and warpage during welding?",
    a: "We utilize custom fabrication fixtures, heat sinks, and controlled stitch-welding techniques. For thin sheet metal parts, our laser welding system minimizes heat input and thermal distortion.",
  },
  {
    q: "Can laser cutting, CNC bending, and welding be combined for complete projects?",
    a: "Yes. MAM Industries specializes in full-stream metal fabrication, taking projects from initial laser cutting and precision CNC bending directly into assembly, welding, and surface finishing.",
  },
  {
    q: "How can I request a quote for custom welding services?",
    a: "Simply send your CAD drawings, 2D drawings, or project specifications via our online quote form or WhatsApp. Our engineering team reviews part geometries and provides detailed quotations.",
  },
];

const WeldingServicesBangalore = () => {
  const pageUrl = "/welding-services-bangalore";
  const pageTitle = "Welding Services Bangalore | Metal Welding & Fabrication | MAM Industries";
  const pageDesc = "MAM Industries provides professional welding and fabrication services in Bangalore including MIG, TIG, spot, and laser welding for custom sheet metal parts and structural assemblies.";
  const pageKeywords = "welding services bangalore, mig welding bangalore, tig welding bangalore, laser welding bangalore, metal fabrication bangalore";

  const jsonLd = {
    "@graph": [
      getBreadcrumbSchema([
        { name: "Home", url: "/" },
        { name: "Services", url: "/services" },
        { name: "Welding Services Bangalore", url: pageUrl },
      ]),
      getServiceSchema("Welding & Fabrication Services in Bangalore", "Precision industrial MIG, CO2, TIG, and handheld laser welding services for metal structural assemblies in Bangalore."),
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
          <Breadcrumbs items={[{ label: "Services", url: "/services" }, { label: "Welding Services" }]} />
          <span className="eyebrow mt-2">Precision Metal Joining</span>
          <h1 className="h-display text-4xl md:text-6xl mt-4 text-white max-w-4xl">
            Welding & Fabrication Services in Bangalore
          </h1>
          <p className="text-metallic mt-6 max-w-2xl text-lg leading-relaxed">
            MAM Industries provides professional MIG/CO2, TIG, spot, and laser welding services in Bangalore for custom sheet metal components, frames, enclosures, and structural fabrications.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link to="/contact?service=Welding" className="inline-flex items-center gap-2 bg-accent text-accent-foreground px-6 py-3.5 rounded-md font-semibold text-sm hover:bg-accent/90 transition-colors shadow-accentglow">
              Request a Welding Quote <ArrowRight size={15} />
            </Link>
            <a href="https://wa.me/917892303386?text=Hi%20MAM%20Industries%2C%20I%20have%20a%20welding%20project%20enquiry." target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 border border-white/20 text-white px-6 py-3.5 rounded-md font-semibold text-sm hover:bg-white/10 transition-colors">
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
              <h2 className="text-3xl font-bold tracking-tight text-primary">Welding for Custom Fabrication</h2>
              <p className="leading-relaxed text-muted-foreground">
                At MAM Industries in Bangalore, welding forms a core stage of our custom sheet metal fabrication workflow. Our experienced technicians execute high-strength structural joins and smooth visual seams using MIG (GMAW), TIG (GTAW), resistance spot welding, and handheld fiber laser welding.
              </p>
              <p className="leading-relaxed text-muted-foreground">
                We manufacture and assemble custom welded components according to customer drawings, 3D CAD models, and physical samples. Custom assembly jigs and alignment fixtures are engineered in-house to maintain strict geometric tolerances and prevent post-weld distortion across batch production runs.
              </p>
            </div>

            <div className="space-y-4">
              <h2 className="text-2xl font-bold tracking-tight text-primary">Laser Cutting + Bending + Welding</h2>
              <p className="leading-relaxed text-muted-foreground">
                MAM Industries delivers unified fabrication pipelines by integrating 3kW CNC fiber laser cutting, 250T CNC press brake bending, and dedicated welding stations under one roof in Yelachenahalli, Bangalore.
              </p>
              <p className="leading-relaxed text-muted-foreground">
                Flat sheet components are cut with sub-millimeter precision, formed to exact angles on our press brake, and accurately welded into rigid 3D enclosures, frames, and machine assemblies without third-party vendor hand-offs.
              </p>
            </div>

            {/* Capability Table */}
            <div className="border border-border rounded-lg overflow-hidden bg-card shadow-sm">
              <div className="bg-primary/5 px-6 py-4 border-b border-border">
                <h3 className="font-sora font-semibold text-primary">Welding Capability & Application Guide</h3>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse text-sm">
                  <thead>
                    <tr className="bg-secondary/10 border-b border-border">
                      <th className="px-6 py-3 font-semibold text-primary">Welding Process</th>
                      <th className="px-6 py-3 font-semibold text-primary">Material Compatibility</th>
                      <th className="px-6 py-3 font-semibold text-primary">Key Advantage</th>
                      <th className="px-6 py-3 font-semibold text-primary">Target Application</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-border">
                    <tr>
                      <td className="px-6 py-3.5 font-medium">MIG / CO₂ Welding</td>
                      <td className="px-6 py-3.5">Mild Steel, Heavy MS Plates</td>
                      <td className="px-6 py-3.5">High deposition & structural strength</td>
                      <td className="px-6 py-3.5">Industrial frames, machine bases, brackets</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-3.5 font-medium">TIG Welding</td>
                      <td className="px-6 py-3.5">Stainless Steel, Aluminium, Thin MS</td>
                      <td className="px-6 py-3.5">Clean aesthetic weld lines, zero spatter</td>
                      <td className="px-6 py-3.5">Pharma equipment, railings, visible panels</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-3.5 font-medium">Fiber Laser Welding</td>
                      <td className="px-6 py-3.5">SS, MS, Galvanized Steel</td>
                      <td className="px-6 py-3.5">Low heat input, minimal distortion</td>
                      <td className="px-6 py-3.5">Precision sheet enclosures & fine boxes</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-3.5 font-medium">Spot Welding</td>
                      <td className="px-6 py-3.5">Sheet Metal Flanges, Enclosure Panels</td>
                      <td className="px-6 py-3.5">Fast repeatable joining, no filler rod</td>
                      <td className="px-6 py-3.5">Control panels, cabinets, metal boxes</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div className="space-y-4">
              <h2 className="text-2xl font-bold tracking-tight text-primary">Custom Welding Projects</h2>
              <p className="leading-relaxed text-muted-foreground">
                We handle a broad range of custom welding and assembly requirements for industrial clients across Bengaluru:
              </p>
              <ul className="grid md:grid-cols-2 gap-2 text-sm text-muted-foreground pl-2">
                <li className="flex items-center gap-2"><Check size={16} className="text-highlight" /> Industrial structural support frames and bases</li>
                <li className="flex items-center gap-2"><Check size={16} className="text-highlight" /> Sheet metal cabinets and electrical control boxes</li>
                <li className="flex items-center gap-2"><Check size={16} className="text-highlight" /> Stainless steel prototypes and food-grade assemblies</li>
                <li className="flex items-center gap-2"><Check size={16} className="text-highlight" /> Custom architectural grilles and metalwork</li>
                <li className="flex items-center gap-2"><Check size={16} className="text-highlight" /> Heavy machinery guards and conveyor frames</li>
                <li className="flex items-center gap-2"><Check size={16} className="text-highlight" /> Custom brackets, trays, and mounting assemblies</li>
              </ul>
            </div>

            <div className="space-y-4 bg-secondary/10 border border-secondary/20 p-6 rounded-lg">
              <h2 className="text-2xl font-bold tracking-tight text-primary">Request a Welding Quote</h2>
              <p className="leading-relaxed text-muted-foreground">
                Ready to manufacture your welded components in Bangalore? Contact MAM Industries with your project drawings (DXF, DWG, STEP, PDF) or visit our unit on Kanakapura Main Road, Yelachenahalli.
              </p>
              <div className="flex flex-wrap gap-4 pt-2">
                <Link to="/contact?service=Welding" className="inline-flex items-center gap-2 bg-accent text-accent-foreground px-5 py-3 rounded-md font-semibold text-sm hover:bg-accent/90 transition-colors">
                  Send Your Drawing for Quote <ArrowRight size={15} />
                </Link>
                <Link to="/gallery" className="inline-flex items-center gap-2 border border-primary/30 text-primary px-5 py-3 rounded-md font-semibold text-sm hover:bg-primary/5 transition-colors">
                  View Welding Projects
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
                <Link to="/powder-coating-bangalore" className="flex items-center justify-between text-sm text-muted-foreground hover:text-accent font-medium py-1 transition-colors">
                  <span>Powder Coating Services</span>
                  <ArrowRight size={14} />
                </Link>
                <Link to="/laser-marking-bangalore" className="flex items-center justify-between text-sm text-muted-foreground hover:text-accent font-medium py-1 transition-colors">
                  <span>Laser Marking Services</span>
                  <ArrowRight size={14} />
                </Link>
              </nav>
            </div>

            <div className="bg-card border border-border p-6 rounded-lg space-y-3">
              <h3 className="font-semibold text-primary text-base">Bangalore Facility Address</h3>
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
              Common inquiries regarding our welding capabilities, material options, and fabrication workflow in Bangalore.
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

export default WeldingServicesBangalore;
