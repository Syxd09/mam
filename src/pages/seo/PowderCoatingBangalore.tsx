import { Link } from "react-router-dom";
import { ArrowRight, Check, ShieldCheck, Zap, Layers, Compass } from "lucide-react";
import SEO from "@/components/SEO";
import Breadcrumbs from "@/components/Breadcrumbs";
import ContactCTA from "@/components/home/ContactCTA";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { getBreadcrumbSchema, getServiceSchema, getFAQPageSchema } from "@/lib/seo";

const FAQS = [
  {
    q: "What metal finishing services does MAM Industries provide in Bangalore?",
    a: "MAM Industries provides professional powder coating, surface cleaning, and protective finishing for custom fabricated mild steel, stainless steel, and aluminum components.",
  },
  {
    q: "Why choose powder coating for sheet metal components?",
    a: "Powder coating provides a tough, durable, and uniform protective layer that resists corrosion, scratches, chipping, and UV exposure far better than traditional liquid paint.",
  },
  {
    q: "What colors and surface textures are available for powder coating?",
    a: "We support standard RAL shades in glossy, semi-gloss, matt, texture, and structure finishes to meet exact customer aesthetic and functional requirements.",
  },
  {
    q: "Can I combine fabrication, welding, and powder coating in one order?",
    a: "Yes. MAM Industries coordinates the full manufacturing workflow from drawing to laser cutting, CNC bending, welding, and powder coating, delivering finished components ready for assembly.",
  },
];

const PowderCoatingBangalore = () => {
  const pageUrl = "/powder-coating-bangalore";
  const pageTitle = "Powder Coating Bangalore | Metal Finishing Services | MAM Industries";
  const pageDesc = "Powder coating and metal finishing services in Bangalore for suitable fabricated metal components. Contact MAM Industries for custom fabrication and finishing.";
  const pageKeywords = "powder coating bangalore, metal finishing services bangalore, industrial powder coating, sheet metal coating bangalore";

  const jsonLd = {
    "@graph": [
      getBreadcrumbSchema([
        { name: "Home", url: "/" },
        { name: "Services", url: "/services" },
        { name: "Powder Coating Bangalore", url: pageUrl },
      ]),
      getServiceSchema("Powder Coating Services in Bangalore", "Durable electrostatic powder coating and surface finishing services for metal components in Bangalore."),
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
          <Breadcrumbs items={[{ label: "Services", url: "/services" }, { label: "Powder Coating" }]} />
          <span className="eyebrow mt-2">Durable Surface Protection</span>
          <h1 className="h-display text-4xl md:text-6xl mt-4 text-white max-w-4xl">
            Powder Coating Services in Bangalore
          </h1>
          <p className="text-metallic mt-6 max-w-2xl text-lg leading-relaxed">
            MAM Industries offers professional powder coating and surface metal finishing services in Bangalore for fabricated components, enclosures, frames, and custom parts.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link to="/contact?service=Powder%20Coating" className="inline-flex items-center gap-2 bg-accent text-accent-foreground px-6 py-3.5 rounded-md font-semibold text-sm hover:bg-accent/90 transition-colors shadow-accentglow">
              Request a Quote <ArrowRight size={15} />
            </Link>
            <a href="https://wa.me/917892303386?text=Hi%20MAM%20Industries%2C%20I%20have%20a%20powder%20coating%20enquiry." target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 border border-white/20 text-white px-6 py-3.5 rounded-md font-semibold text-sm hover:bg-white/10 transition-colors">
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
              <h2 className="text-3xl font-bold tracking-tight text-primary">Powder Coating for Fabricated Components</h2>
              <p className="leading-relaxed text-muted-foreground">
                Surface protection is vital for sheet metal parts and structural weldments exposed to industrial environments or weather. At MAM Industries in Bangalore, we ensure that your fabricated components receive high-durability powder coating finishes engineered for long-term corrosion resistance.
              </p>
              <p className="leading-relaxed text-muted-foreground">
                Electrostatically charged powder particles are applied onto cleaned metal surfaces and thermally cured in curing ovens, forming a tough, cross-linked protective shell that resists impact, abrasion, moisture, and chemical exposure.
              </p>
            </div>

            <div className="space-y-4">
              <h2 className="text-2xl font-bold tracking-tight text-primary">Metal Finishing</h2>
              <p className="leading-relaxed text-muted-foreground">
                Before applying powder, thorough surface cleaning and pretreatment are performed to remove oils, scale, and surface contaminants. Proper pre-treatment ensures maximum adhesion and long-lasting coating performance without peeling or flaking.
              </p>
              <div className="grid md:grid-cols-2 gap-4 pt-2">
                <div className="flex gap-3 items-start">
                  <span className="p-2 bg-accent/10 rounded-md text-accent shrink-0">
                    <ShieldCheck size={20} />
                  </span>
                  <div>
                    <h3 className="font-semibold text-primary">Corrosion Resistance</h3>
                    <p className="text-sm text-muted-foreground">Protects mild steel and aluminum parts against rust, moisture, and chemical atmosphere.</p>
                  </div>
                </div>
                <div className="flex gap-3 items-start">
                  <span className="p-2 bg-accent/10 rounded-md text-accent shrink-0">
                    <Zap size={20} />
                  </span>
                  <div>
                    <h3 className="font-semibold text-primary">Uniform Coating Thickness</h3>
                    <p className="text-sm text-muted-foreground">Electrostatic spray delivers smooth, consistent coat coverage over edges and complex shapes.</p>
                  </div>
                </div>
                <div className="flex gap-3 items-start">
                  <span className="p-2 bg-accent/10 rounded-md text-accent shrink-0">
                    <Layers size={20} />
                  </span>
                  <div>
                    <h3 className="font-semibold text-primary">Multiple Textures & RAL Colors</h3>
                    <p className="text-sm text-muted-foreground">Choose from glossy, semi-gloss, matt, and sand-texture finishes in standard RAL shades.</p>
                  </div>
                </div>
                <div className="flex gap-3 items-start">
                  <span className="p-2 bg-accent/10 rounded-md text-accent shrink-0">
                    <Compass size={20} />
                  </span>
                  <div>
                    <h3 className="font-semibold text-primary">Quality Pre-treatment</h3>
                    <p className="text-sm text-muted-foreground">Proper degreasing and cleaning before coating ensures reliable bond strength.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <h2 className="text-2xl font-bold tracking-tight text-primary">Applications</h2>
              <p className="leading-relaxed text-muted-foreground">
                We manage powder coating and finishing solutions for a wide variety of industrial components:
              </p>
              <ul className="grid md:grid-cols-2 gap-2 text-sm text-muted-foreground pl-2">
                <li className="flex items-center gap-2"><Check size={16} className="text-highlight" /> Electrical control panel boxes & cabinet enclosures</li>
                <li className="flex items-center gap-2"><Check size={16} className="text-highlight" /> Sheet metal machine covers & safety guards</li>
                <li className="flex items-center gap-2"><Check size={16} className="text-highlight" /> Architectural metal grilles, frames, & brackets</li>
                <li className="flex items-center gap-2"><Check size={16} className="text-highlight" /> Industrial racking, storage trays, & shelving</li>
                <li className="flex items-center gap-2"><Check size={16} className="text-highlight" /> OEM machine components & mounting plates</li>
                <li className="flex items-center gap-2"><Check size={16} className="text-highlight" /> Outdoor equipment enclosures & mounting frames</li>
              </ul>
            </div>

            <div className="space-y-4">
              <h2 className="text-2xl font-bold tracking-tight text-primary">Custom Fabrication and Finishing</h2>
              <p className="leading-relaxed text-muted-foreground">
                By integrating powder coating directly with our laser cutting, CNC bending, and welding services, MAM Industries provides hassle-free turnkey component manufacturing. You receive fully finished parts ready for final assembly without coordinating multiple vendors across Bengaluru.
              </p>
            </div>

            <div className="space-y-4 bg-secondary/10 border border-secondary/20 p-6 rounded-lg">
              <h2 className="text-2xl font-bold tracking-tight text-primary">Request a Quote</h2>
              <p className="leading-relaxed text-muted-foreground">
                Need powder coating for your metal components in Bangalore? Contact MAM Industries with your part drawings and batch quantities. Our team will recommend the right coating specification and provide a quick quotation.
              </p>
              <div className="flex flex-wrap gap-4 pt-2">
                <Link to="/contact?service=Powder%20Coating" className="inline-flex items-center gap-2 bg-accent text-accent-foreground px-5 py-3 rounded-md font-semibold text-sm hover:bg-accent/90 transition-colors">
                  Send Your Drawing for Quote <ArrowRight size={15} />
                </Link>
                <Link to="/gallery" className="inline-flex items-center gap-2 border border-primary/30 text-primary px-5 py-3 rounded-md font-semibold text-sm hover:bg-primary/5 transition-colors">
                  View Finished Projects
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
                  <span>Welding & Fabrication</span>
                  <ArrowRight size={14} />
                </Link>
                <Link to="/laser-marking-bangalore" className="flex items-center justify-between text-sm text-muted-foreground hover:text-accent font-medium py-1 transition-colors">
                  <span>Laser Marking Services</span>
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
              Find technical details regarding our powder coating options, textures, and surface finishing workflows in Bangalore.
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
