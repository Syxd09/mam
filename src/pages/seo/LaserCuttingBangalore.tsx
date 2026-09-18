import { Link } from "react-router-dom";
import { ArrowRight, Check, ShieldCheck, Zap, Layers, Compass, FileText } from "lucide-react";
import SEO from "@/components/SEO";
import Breadcrumbs from "@/components/Breadcrumbs";
import ContactCTA from "@/components/home/ContactCTA";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { getBreadcrumbSchema, getServiceSchema, getFAQPageSchema } from "@/lib/seo";
import { SITE } from "@/lib/site";

const FAQS = [
  {
    q: "What is your typical turnaround time for laser cutting services in Bangalore?",
    a: "For prototyping and short runs, we generally deliver within 3 to 5 business days. For high-volume production, lead times range between 1 and 2 weeks depending on material availability and processing queue."
  },
  {
    q: "What CAD formats do you accept for CNC laser cutting designs?",
    a: "We accept vector formats such as .DXF, .DWG, and .STEP files. If you only have hand-drawn sketches or physical parts, our engineering team can review them to create production-ready files."
  },
  {
    q: "What materials can be laser cut at MAM Industries?",
    a: "We cut mild steel (MS 0.8mm – 16mm), stainless steel (SS 0.8mm – 8mm), aluminium (0.1mm – 5mm), and galvanised iron (GI 0.8mm – 4mm) on bed sizes up to 2m x 4m."
  },
  {
    q: "Can laser cutting and CNC bending be done together?",
    a: "Yes. We offer complete drawing-to-part manufacturing, combining precision laser cutting with 250T CNC press brake bending and TIG/MIG welding under one roof."
  }
];

const LaserCuttingBangalore = () => {
  const pageUrl = "/laser-cutting-bangalore";
  const pageTitle = "Laser Cutting Bangalore | CNC Fiber Laser Cutting Services | MAM Industries";
  const pageDesc = "CNC laser cutting services in Bangalore for mild steel, stainless steel and aluminium sheet metal. Send your drawing to MAM Industries for a laser cutting quote.";
  const pageKeywords = "laser cutting bangalore, cnc fiber laser cutting services, sheet metal laser cutting bengaluru, ms ss aluminium laser cutting bangalore";

  const jsonLd = {
    "@graph": [
      getBreadcrumbSchema([
        { name: "Home", url: "/" },
        { name: "Services", url: "/services" },
        { name: "Laser Cutting Bangalore", url: pageUrl },
      ]),
      getServiceSchema("CNC Fiber Laser Cutting", "CNC laser cutting services in Bangalore for mild steel, stainless steel and aluminium sheet metal."),
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
        { name: "Laser Cutting Services in Bangalore", url: pageUrl }
      ]} />

      {/* Hero Section */}
      <section className="bg-primary text-primary-foreground relative overflow-hidden">
        <div className="absolute inset-0 bg-blueprint opacity-40" />
        <div className="container relative py-16 md:py-24 flex flex-col justify-center min-h-[45vh]">
          <span className="eyebrow">Precision Metal Processing</span>
          <h1 className="h-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl mt-3 text-white max-w-4xl">
            Laser Cutting Services in Bangalore
          </h1>
          <p className="text-metallic mt-5 max-w-2xl text-base md:text-lg leading-relaxed">
            MAM Industries provides CNC fiber laser cutting services in Bangalore for mild steel, stainless steel, aluminium, and GI sheet metal based on customer drawings, CAD files, and technical specifications.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link to="/contact" className="inline-flex items-center gap-2 bg-accent text-accent-foreground px-6 py-3.5 rounded-md font-semibold text-sm hover:bg-accent/90 transition-colors shadow-accentglow">
              Request a Laser Cutting Quote <ArrowRight size={16} />
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
            
            {/* H2: CNC Fiber Laser Cutting in Bangalore */}
            <div className="space-y-4">
              <h2 className="text-2xl md:text-3xl font-sora font-bold tracking-tight text-primary">
                CNC Fiber Laser Cutting in Bangalore
              </h2>
              <p className="leading-relaxed text-muted-foreground">
                At MAM Industries, our 3kW CNC fiber laser cutting cells deliver sub-millimetre edge precision and clean, distortion-free cuts across mild steel, stainless steel, aluminium, and GI sheets. Our bed capacity handles large sheet stock up to 2m x 4m, enabling rapid production for brackets, mounting plates, machinery components, and architectural panels.
              </p>
              <p className="leading-relaxed text-muted-foreground">
                We work directly with customer-supplied CAD files (.DXF, .DWG, .STEP) or technical drawings, using automated dynamic nesting software to optimize raw sheet utilization and minimize scrap material.
              </p>
            </div>

            {/* H2: Materials We Laser Cut */}
            <div className="space-y-4">
              <h2 className="text-2xl md:text-3xl font-sora font-bold tracking-tight text-primary">
                Materials We Laser Cut
              </h2>
              <div className="border border-border rounded-lg overflow-hidden bg-card shadow-sm">
                <div className="overflow-x-auto">
                  <table className="w-full text-left border-collapse text-sm">
                    <thead>
                      <tr className="bg-secondary/10 border-b border-border">
                        <th className="px-6 py-3 font-semibold text-primary">Material</th>
                        <th className="px-6 py-3 font-semibold text-primary">Thickness Capability</th>
                        <th className="px-6 py-3 font-semibold text-primary">Bed Size</th>
                        <th className="px-6 py-3 font-semibold text-primary">Tolerance</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-border text-muted-foreground">
                      <tr>
                        <td className="px-6 py-3 font-medium text-foreground">Mild Steel (MS)</td>
                        <td className="px-6 py-3">0.8 mm – 16 mm</td>
                        <td className="px-6 py-3">2000 mm x 4000 mm</td>
                        <td className="px-6 py-3">±0.1 mm</td>
                      </tr>
                      <tr>
                        <td className="px-6 py-3 font-medium text-foreground">Stainless Steel (SS)</td>
                        <td className="px-6 py-3">0.8 mm – 8 mm</td>
                        <td className="px-6 py-3">2000 mm x 4000 mm</td>
                        <td className="px-6 py-3">±0.1 mm</td>
                      </tr>
                      <tr>
                        <td className="px-6 py-3 font-medium text-foreground">Aluminium (Al)</td>
                        <td className="px-6 py-3">0.1 mm – 5 mm</td>
                        <td className="px-6 py-3">2000 mm x 4000 mm</td>
                        <td className="px-6 py-3">±0.1 mm</td>
                      </tr>
                      <tr>
                        <td className="px-6 py-3 font-medium text-foreground">Galvanised Iron (GI)</td>
                        <td className="px-6 py-3">0.8 mm – 4 mm</td>
                        <td className="px-6 py-3">2000 mm x 4000 mm</td>
                        <td className="px-6 py-3">±0.1 mm</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

            {/* H2: Custom Laser-Cut Components */}
            <div className="space-y-4">
              <h2 className="text-2xl md:text-3xl font-sora font-bold tracking-tight text-primary">
                Custom Laser-Cut Components
              </h2>
              <p className="leading-relaxed text-muted-foreground">
                We manufacture a broad range of custom laser-cut sheet metal parts for industrial manufacturers, contractors, OEMs, and electrical panel builders in Bangalore:
              </p>
              <ul className="grid sm:grid-cols-2 gap-3 pt-2">
                {[
                  "Electrical panel covers & base plates",
                  "Automotive mounting brackets & shims",
                  "Machinery guards & side panels",
                  "Custom architectural grilles & screens",
                  "HVAC connector plates & flanges",
                  "Chassis parts & structural gussets"
                ].map((item, idx) => (
                  <li key={idx} className="flex items-center gap-2 text-sm text-foreground">
                    <Check size={16} className="text-accent shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* H2: Laser Cutting for Prototypes and Production */}
            <div className="space-y-4">
              <h2 className="text-2xl md:text-3xl font-sora font-bold tracking-tight text-primary">
                Laser Cutting for Prototypes and Production
              </h2>
              <p className="leading-relaxed text-muted-foreground">
                MAM Industries caters to both single-unit prototyping requirements and volume production orders. For prototype orders, our rapid turnaround allows product designers to test fitment and dimensions before committing to large production runs. For batch orders, our automated nesting and fast cut speeds guarantee repeatable quality.
              </p>
            </div>

            {/* H2: Laser Cutting + CNC Bending */}
            <div className="space-y-4 bg-secondary/30 p-6 rounded-xl border border-white/5">
              <h2 className="text-2xl font-sora font-bold tracking-tight text-primary">
                Laser Cutting + CNC Bending
              </h2>
              <p className="leading-relaxed text-muted-foreground">
                Flat laser-cut blanks can be seamlessly routed directly to our 250-ton CNC press brake bending line. By combining laser cutting and CNC bending under one roof, we eliminate intermediate vendor handling and ensure that hole locations match bend lines accurately.
              </p>
              <Link to="/cnc-bending-bangalore" className="inline-flex items-center gap-1 text-xs font-semibold text-accent uppercase tracking-wider hover:underline">
                View CNC Bending Services in Bangalore <ArrowRight size={14} />
              </Link>
            </div>

            {/* H2: Laser Cutting Cost in Bangalore */}
            <div className="space-y-4">
              <h2 className="text-2xl md:text-3xl font-sora font-bold tracking-tight text-primary">
                Laser Cutting Cost in Bangalore
              </h2>
              <p className="leading-relaxed text-muted-foreground">
                Laser cutting costs are determined by several key factors:
              </p>
              <ul className="space-y-2 text-sm text-muted-foreground pl-4 list-disc">
                <li><strong className="text-foreground">Material Type and Thickness:</strong> Thicker stainless steel or mild steel requires slower laser head speed and higher assist gas consumption.</li>
                <li><strong className="text-foreground">Total Cut Perimeter and Pierces:</strong> Complex geometries with multiple cutouts require more pierce points and machine run time.</li>
                <li><strong className="text-foreground">Quantity and Sheet Nesting:</strong> Higher order quantities allow more efficient nesting per sheet, lowering the per-unit cost.</li>
                <li><strong className="text-foreground">Secondary Operations:</strong> Optional bending, welding, tapping, or powder coating additions.</li>
              </ul>
            </div>

            {/* H2: How to Request a Laser Cutting Quote */}
            <div className="space-y-4">
              <h2 className="text-2xl md:text-3xl font-sora font-bold tracking-tight text-primary">
                How to Request a Laser Cutting Quote
              </h2>
              <p className="leading-relaxed text-muted-foreground">
                Requesting a quotation from MAM Industries is quick and straightforward:
              </p>
              <ol className="space-y-3 text-sm text-muted-foreground pl-4 list-decimal">
                <li>Send your CAD drawing (.DXF, .DWG, .STEP) or PDF dimensional blueprint to <a href={`mailto:${SITE.email}`} className="text-accent hover:underline">{SITE.email}</a> or via our contact page.</li>
                <li>Specify the material type (MS, SS, Al, GI), thickness in mm, and required quantity.</li>
                <li>Our engineering team will review your drawing and send an itemized quotation within 24 hours.</li>
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
                <Link to="/cnc-bending-bangalore" className="flex items-center justify-between text-sm text-muted-foreground hover:text-accent font-medium py-1 transition-colors">
                  <span>CNC Bending Bangalore</span>
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
                Upload your .DXF or .DWG files for itemized pricing within 24 hours.
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

export default LaserCuttingBangalore;
