import { Link } from "react-router-dom";
import { ArrowRight, Check, ShieldCheck, Zap, Layers, Compass } from "lucide-react";
import SEO from "@/components/SEO";
import ContactCTA from "@/components/home/ContactCTA";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { getBreadcrumbSchema, getServiceSchema, getFAQPageSchema } from "@/lib/seo";

const FAQS = [
  {
    q: "What welding processes do you offer in your Bangalore shop?",
    a: "We offer professional gas metal arc welding (MIG / CO₂), gas tungsten arc welding (TIG), resistance spot welding, and advanced handheld fiber laser welding for high-volume assemblies.",
  },
  {
    q: "How do you prevent heat distortion (warpage) on thin sheet metal parts?",
    a: "We utilize custom fabrication fixtures, heat sinks, and stitch-welding techniques. For critical assemblies, our fiber laser welding systems apply minimal heat, preventing warpage.",
  },
  {
    q: "Are your welders qualified to AWS/EN welding standards?",
    a: "Yes. Our structural welding team includes qualified welders certified to AWS (American Welding Society) and European EN standards, ensuring structural integrity for pressure panels and support frames.",
  },
  {
    q: "Do you offer post-weld surface treatment and polishing?",
    a: "Yes. We offer grinding, slag cleanup, and finishing services. For TIG-welded stainless steel assemblies, we offer acid passivation and electropolishing to ensure clean welds.",
  },
];

const WeldingServicesBangalore = () => {
  const pageUrl = "/welding-services-bangalore";
  const pageTitle = "MIG, TIG & Laser Welding Services Bangalore | MAM Industries";
  const pageDesc = "MAM Industries offers professional B2B welding services in Bangalore. Certified MIG, CO2, TIG, and precision laser welding for MS & SS. Get a quote.";
  const pageKeywords = "welding services bangalore, mig co2 welding bangalore, precision tig welding bangalore, laser welding, sheet metal welding bengaluru";

  const jsonLd = {
    "@graph": [
      getBreadcrumbSchema([
        { name: "Home", url: "/" },
        { name: "Welding Services Bangalore", url: pageUrl },
      ]),
      getServiceSchema("MIG, TIG & Laser Welding Services", "Precision industrial MIG, CO2, TIG, and handheld laser welding services for metal structural assemblies in Bangalore."),
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
          <span className="eyebrow">Certified Metal Joining</span>
          <h1 className="h-display text-4xl md:text-6xl mt-4 text-white max-w-4xl">
            MIG, TIG & Laser <span className="text-accent">Welding Services</span> in Bangalore
          </h1>
          <p className="text-metallic mt-6 max-w-2xl text-lg leading-relaxed">
            Ensure high structural strength and clean weld lines. MAM Industries provides certified MIG/CO2 welding, clean-finish TIG welding, and high-tech handheld laser welding.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link to="/contact?service=Welding" className="inline-flex items-center gap-2 bg-accent text-accent-foreground px-6 py-3.5 rounded-md font-semibold text-sm hover:bg-accent/90 transition-colors shadow-accentglow">
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
              <h2 className="text-3xl font-bold tracking-tight text-primary">Industrial-Grade Welding & Joining Solutions in Bengaluru</h2>
              <p className="leading-relaxed text-muted-foreground">
                A metal structure is only as strong as its weakest joint. At MAM Industries, we offer high-durability **welding services in Bangalore** utilizing three key methods: MIG (GMAW), TIG (GTAW), and advanced handheld fiber laser welding. Our technicians are skilled in handling structural steel, thin-gauge sheet metal, stainless steel profiles, and aluminum weldments, meeting strict structural tolerances.
              </p>
              <p className="leading-relaxed text-muted-foreground">
                We design and fabricate custom positioning jigs and fixtures in-house. This ensures that every assembly remains aligned during thermal expansion, keeping tight linear tolerances and removing the risk of post-weld shrinkage.
              </p>
            </div>

            {/* Spec Sheet Table */}
            <div className="border border-border rounded-lg overflow-hidden bg-card shadow-sm">
              <div className="bg-primary/5 px-6 py-4 border-b border-border">
                <h3 className="font-sora font-semibold text-primary">Welding Capability & Application Guide</h3>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse text-sm">
                  <thead>
                    <tr className="bg-secondary/10 border-b border-border">
                      <th className="px-6 py-3 font-semibold text-primary">Welding Method</th>
                      <th className="px-6 py-3 font-semibold text-primary">Material Capability</th>
                      <th className="px-6 py-3 font-semibold text-primary">Key Advantages</th>
                      <th className="px-6 py-3 font-semibold text-primary">Primary B2B Use Case</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-border">
                    <tr>
                      <td className="px-6 py-3.5 font-medium">MIG / CO₂ Welding</td>
                      <td className="px-6 py-3.5">Mild Steel, Heavy Carbon Steel</td>
                      <td className="px-6 py-3.5">Deep penetration, high deposition rate</td>
                      <td className="px-6 py-3.5">Structural frames, warehouse fixtures, baseplates</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-3.5 font-medium">TIG Welding</td>
                      <td className="px-6 py-3.5">Stainless Steel, Aluminium, Thin MS</td>
                      <td className="px-6 py-3.5">Clean seams, no spatter, precise heat input</td>
                      <td className="px-6 py-3.5">Food-grade equipment, architectural railings, medical casings</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-3.5 font-medium">Fiber Laser Welding</td>
                      <td className="px-6 py-3.5">SS, MS, Galvanized sheets, Alloys</td>
                      <td className="px-6 py-3.5">4x faster than TIG, minimal heat distortion</td>
                      <td className="px-6 py-3.5">Precision B2B sheet panels, electronic boxes, high volume</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-3.5 font-medium">Resistance Spot Welding</td>
                      <td className="px-6 py-3.5">Thin Steel sheets, overlap parts</td>
                      <td className="px-6 py-3.5">No filler material required, fast cycles</td>
                      <td className="px-6 py-3.5">Cabinet enclosures, drawer assemblies, flanges</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div className="space-y-4">
              <h2 className="text-2xl font-bold tracking-tight text-primary">Advanced Handheld Laser Welding</h2>
              <p className="leading-relaxed text-muted-foreground">
                In addition to standard MIG and TIG methods, we offer handheld fiber laser welding. Working with high-power concentrated light, this technique joins metals with high speed and clean finishes. The heat-affected zone (HAZ) is reduced by up to 80% compared to traditional arc processes, eliminating the need for post-weld straightening on thin-walled sheets.
              </p>
              <div className="grid md:grid-cols-2 gap-4 pt-2">
                <div className="flex gap-3 items-start">
                  <span className="p-2 bg-accent/10 rounded-md text-accent shrink-0">
                    <ShieldCheck size={20} />
                  </span>
                  <div>
                    <h4 className="font-semibold text-primary">AWS Certified Welders</h4>
                    <p className="text-sm text-muted-foreground">Welding procedures follow strict ASME Section IX and AWS guidelines.</p>
                  </div>
                </div>
                <div className="flex gap-3 items-start">
                  <span className="p-2 bg-accent/10 rounded-md text-accent shrink-0">
                    <Zap size={20} />
                  </span>
                  <div>
                    <h4 className="font-semibold text-primary">Laser Weld Processing</h4>
                    <p className="text-sm text-muted-foreground">Laser welds create hermetic joins, perfect for industrial tanks and pressure enclosures.</p>
                  </div>
                </div>
                <div className="flex gap-3 items-start">
                  <span className="p-2 bg-accent/10 rounded-md text-accent shrink-0">
                    <Layers size={20} />
                  </span>
                  <div>
                    <h4 className="font-semibold text-primary">Stainless Pickling & Passivation</h4>
                    <p className="text-sm text-muted-foreground">Post-weld chemical cleaning ensures stainless steel components retain corrosion resistance.</p>
                  </div>
                </div>
                <div className="flex gap-3 items-start">
                  <span className="p-2 bg-accent/10 rounded-md text-accent shrink-0">
                    <Compass size={20} />
                  </span>
                  <div>
                    <h4 className="font-semibold text-primary">Dye Penetrant Inspection</h4>
                    <p className="text-sm text-muted-foreground">Non-destructive test checks for micro-fissures and leaks in load-bearing welds.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <h2 className="text-2xl font-bold tracking-tight text-primary">Industries and Products Supported</h2>
              <p className="leading-relaxed text-muted-foreground">
                Our welding division routinely processes:
              </p>
              <ul className="grid md:grid-cols-2 gap-2 text-sm text-muted-foreground pl-2">
                <li className="flex items-center gap-2"><Check size={16} className="text-highlight" /> Industrial structural support frames and columns</li>
                <li className="flex items-center gap-2"><Check size={16} className="text-highlight" /> Heavy machinery cabinets and control consoles</li>
                <li className="flex items-center gap-2"><Check size={16} className="text-highlight" /> Clean-room furniture and pharmaceutical cabinets (TIG)</li>
                <li className="flex items-center gap-2"><Check size={16} className="text-highlight" /> Custom architectural gates, grids, and barriers</li>
                <li className="flex items-center gap-2"><Check size={16} className="text-highlight" /> Solar mount structures and wind turbine brackets</li>
                <li className="flex items-center gap-2"><Check size={16} className="text-highlight" /> OEM chassis frames and suspension linkages</li>
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
              <h4 className="font-semibold text-primary text-base">AWS Feasibility Studies</h4>
              <p className="text-xs text-muted-foreground leading-relaxed">
                Send your weldment specifications and drawings. We will review weld geometry and preparation to provide competitive pricing options.
              </p>
              <Link to="/contact" className="w-full inline-flex justify-center items-center gap-2 bg-primary text-primary-foreground py-2.5 rounded-md text-xs font-semibold hover:bg-primary/95 transition-colors">
                Enquire Welding Capacity
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
              Welding <span className="text-accent">Queries</span>
            </h2>
            <p className="text-muted-foreground mt-4 text-sm leading-relaxed">
              Find technical answers about welding thicknesses, gas shielding, laser speeds, and certified welding procedures.
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
