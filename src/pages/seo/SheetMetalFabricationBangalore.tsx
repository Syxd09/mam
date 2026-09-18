import { useState } from "react";
import { Link } from "react-router-dom";
import { CheckCircle2, FileText, Phone, ArrowRight, Layers, Cpu, ShieldCheck } from "lucide-react";
import SEO from "@/components/SEO";
import Breadcrumbs from "@/components/Breadcrumbs";
import ContactCTA from "@/components/home/ContactCTA";
import { getServiceSchema, getBreadcrumbSchema, getFAQPageSchema } from "@/lib/seo";
import { SITE } from "@/lib/site";

const SheetMetalFabricationBangalore = () => {
  const faqs = [
    {
      q: "What sheet metal fabrication services does MAM Industries provide in Bangalore?",
      a: "MAM Industries provides end-to-end custom sheet metal fabrication in Bangalore including CNC fiber laser cutting, CNC press-brake bending, TIG/MIG welding, surface finishing, and hardware insertion for industrial components and sub-assemblies."
    },
    {
      q: "What materials do you fabricate?",
      a: "We work with mild steel (MS), stainless steel (SS 304, 316), aluminium, and galvanised iron (GI) sheets from 0.1 mm to 16 mm thickness depending on material type."
    },
    {
      q: "Can I submit CAD files or technical drawings for custom sheet metal parts?",
      a: "Yes. We accept .DXF, .DWG, .STEP, .STP, and PDF drawings. Our engineering team performs Design for Manufacturability (DFM) reviews to ensure accurate laser cutting, nesting, and bend allowances."
    },
    {
      q: "Do you handle both prototypes and volume production runs?",
      a: "Yes. We manufacture rapid prototype sheet metal parts as well as high-volume production batches with strict batch-to-batch dimensional accuracy."
    }
  ];

  return (
    <>
      <SEO
        title="Sheet Metal Fabrication Bangalore | Custom Sheet Metal Parts | MAM Industries"
        description="Custom sheet metal fabrication in Bangalore including laser cutting, CNC bending, welding and finishing for industrial components and assemblies."
        keywords="sheet metal fabrication bangalore, custom sheet metal parts bengaluru, precision sheet metal manufacturing, ms ss fabrication bangalore, industrial sheet metal enclosures"
        path="/sheet-metal-fabrication-bangalore"
        jsonLd={[
          getServiceSchema("Sheet Metal Fabrication Services", "Custom sheet metal fabrication in Bangalore including laser cutting, CNC bending, welding and finishing for industrial components."),
          getBreadcrumbSchema([
            { name: "Home", url: "/" },
            { name: "Services", url: "/services" },
            { name: "Sheet Metal Fabrication", url: "/sheet-metal-fabrication-bangalore" }
          ]),
          getFAQPageSchema(faqs)
        ]}
      />

      <Breadcrumbs items={[
        { name: "Services", url: "/services" },
        { name: "Sheet Metal Fabrication Bangalore", url: "/sheet-metal-fabrication-bangalore" }
      ]} />

      {/* Hero Header */}
      <section className="bg-primary text-primary-foreground py-16 md:py-24 relative overflow-hidden">
        <div className="absolute inset-0 opacity-30 bg-blueprint" />
        <div className="container relative z-10 max-w-4xl">
          <span className="eyebrow">Precision Sheet Metal Manufacturing</span>
          <h1 className="h-display text-3xl sm:text-4xl md:text-5xl text-white mt-3 mb-6">
            Sheet Metal Fabrication Services in Bangalore
          </h1>
          <p className="text-metallic text-base md:text-lg leading-relaxed mb-8">
            MAM Industries manufactures custom sheet metal components, brackets, mounting plates, electrical enclosures, structural frames, and engineered assemblies in Bangalore. We combine 3kW CNC fiber laser cutting, 250T press brake bending, precision welding, and metal finishing to deliver components built strictly to customer drawings.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 bg-accent text-accent-foreground px-6 py-3 rounded-md font-semibold text-sm hover:bg-accent/90 transition-all shadow-accentglow"
            >
              Request a Quote <ArrowRight size={16} />
            </Link>
            <a
              href={SITE.phoneHref}
              className="inline-flex items-center gap-2 bg-white/5 border border-white/10 px-6 py-3 rounded-md font-semibold text-sm text-white hover:bg-white/10 transition-all"
            >
              <Phone size={16} className="text-accent" /> Call {SITE.phone}
            </a>
          </div>
        </div>
      </section>

      {/* Main Content Body */}
      <section className="py-16 md:py-24 bg-background bg-blueprint-light">
        <div className="container max-w-4xl space-y-16">

          {/* Process Section */}
          <div className="bg-card border border-border rounded-xl p-8 md:p-10">
            <h2 className="text-2xl font-sora font-bold text-primary mb-4">
              Sheet Metal Manufacturing Process
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Our sheet metal fabrication workflow follows a streamlined 4-step manufacturing sequence to preserve design accuracy from raw sheet stock to finished component:
            </p>
            <div className="grid sm:grid-cols-2 gap-6">
              <div className="p-5 bg-secondary/50 border border-white/5 rounded-lg">
                <div className="text-accent font-bold text-lg mb-1">01. Drawing & Nesting</div>
                <p className="text-xs text-muted-foreground">CAD/DXF verification, DFM nesting optimization, and material selection.</p>
              </div>
              <div className="p-5 bg-secondary/50 border border-white/5 rounded-lg">
                <div className="text-accent font-bold text-lg mb-1">02. Fiber Laser Cutting</div>
                <p className="text-xs text-muted-foreground">Clean, distortion-free laser cutting for MS, SS, Al, and GI sheet blanks.</p>
              </div>
              <div className="p-5 bg-secondary/50 border border-white/5 rounded-lg">
                <div className="text-accent font-bold text-lg mb-1">03. CNC Press Brake Bending</div>
                <p className="text-xs text-muted-foreground">250-ton CNC press brake forming with exact angle and radius repeatability.</p>
              </div>
              <div className="p-5 bg-secondary/50 border border-white/5 rounded-lg">
                <div className="text-accent font-bold text-lg mb-1">04. Welding & Finishing</div>
                <p className="text-xs text-muted-foreground">Certified TIG/MIG welding, deburring, hardware insertion, and powder coating.</p>
              </div>
            </div>
          </div>

          {/* Custom Parts Section */}
          <div>
            <h2 className="text-2xl font-sora font-bold text-primary mb-4">
              Custom Sheet Metal Parts
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              We fabricate custom sheet metal parts engineered for diverse industrial applications across Bangalore and Karnataka:
            </p>
            <ul className="grid sm:grid-cols-2 gap-3">
              {[
                "Control panel enclosures & cabinets",
                "Machine guards & protective covers",
                "Structural mounting brackets & busbars",
                "HVAC duct connectors & ventilation frames",
                "Custom chassis & electronic racks",
                "Architectural metalwork & decorative grilles",
                "Automotive sub-assemblies & brackets",
                "Stainless steel tanks & hopper chutes"
              ].map((item, idx) => (
                <li key={idx} className="flex items-center gap-2.5 text-sm text-foreground">
                  <CheckCircle2 size={16} className="text-accent shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Connected Processes Grid */}
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-card border border-border p-6 rounded-xl">
              <h2 className="text-xl font-sora font-bold text-primary mb-3">Laser Cutting</h2>
              <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                3kW CNC fiber laser cutting cells handle bed sizes up to 2m x 4m, producing burr-free cuts with ±0.1 mm precision across mild steel, stainless steel, and aluminium.
              </p>
              <Link to="/laser-cutting-bangalore" className="text-xs font-semibold text-accent hover:underline inline-flex items-center gap-1">
                Explore Laser Cutting Services <ArrowRight size={14} />
              </Link>
            </div>

            <div className="bg-card border border-border p-6 rounded-xl">
              <h2 className="text-xl font-sora font-bold text-primary mb-3">CNC Bending</h2>
              <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                250-ton hydraulic press brake forming handles complex multi-bend geometries up to 2500 mm length with tight angular tolerances.
              </p>
              <Link to="/cnc-bending-bangalore" className="text-xs font-semibold text-accent hover:underline inline-flex items-center gap-1">
                Explore CNC Bending Services <ArrowRight size={14} />
              </Link>
            </div>

            <div className="bg-card border border-border p-6 rounded-xl">
              <h2 className="text-xl font-sora font-bold text-primary mb-3">Welding</h2>
              <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                Specialized TIG welding for stainless steel and MIG/CO₂ welding for structural mild steel assemblies ensure strong, crack-free joints.
              </p>
              <Link to="/welding-services-bangalore" className="text-xs font-semibold text-accent hover:underline inline-flex items-center gap-1">
                Explore Welding Services <ArrowRight size={14} />
              </Link>
            </div>

            <div className="bg-card border border-border p-6 rounded-xl">
              <h2 className="text-xl font-sora font-bold text-primary mb-3">Finishing</h2>
              <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                Coordinated surface preparation, 7-tank pre-treatment, powder coating, electroplating, and permanent laser marking deliver finished assembly readiness.
              </p>
              <Link to="/powder-coating-bangalore" className="text-xs font-semibold text-accent hover:underline inline-flex items-center gap-1">
                Explore Powder Coating Services <ArrowRight size={14} />
              </Link>
            </div>
          </div>

          {/* Industrial Applications & Prototype vs Production */}
          <div>
            <h2 className="text-2xl font-sora font-bold text-primary mb-4">
              Industrial Applications
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              MAM Industries serves OEMs, machinery manufacturers, electrical panel builders, architectural contractors, and interior designers across industrial corridors in Bengaluru (Peenya, Bommasandra, Bidadi, Jigni, Hoskote, Whitefield, and Yelachenahalli).
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-sora font-bold text-primary mb-4">
              Prototype and Production
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Whether you require a single prototype bracket for design validation or 5,000 production panels for an assembly line, our manufacturing unit delivers consistent quality, competitive pricing, and reliable delivery schedules.
            </p>
          </div>

          {/* FAQs */}
          <div className="bg-card border border-border rounded-xl p-8">
            <h2 className="text-2xl font-sora font-bold text-primary mb-6">
              Frequently Asked Questions
            </h2>
            <div className="space-y-6">
              {faqs.map((faq, idx) => (
                <div key={idx} className="border-b border-border/60 pb-5 last:border-b-0 last:pb-0">
                  <h3 className="font-semibold text-foreground text-base mb-2">{faq.q}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Quote Section */}
          <div>
            <h2 className="text-2xl font-sora font-bold text-primary mb-4">
              Request a Quote
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Send your CAD drawings (.DXF, .DWG, .STEP) or technical specifications to MAM Industries for an itemized quotation within 24 hours.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                to="/contact"
                className="bg-accent text-accent-foreground px-6 py-3 rounded-md font-semibold text-sm hover:bg-accent/90 transition-all shadow-accentglow"
              >
                Send Drawing for Quote
              </Link>
              <Link
                to="/custom-metal-fabrication-bangalore"
                className="bg-secondary text-white border border-white/10 px-6 py-3 rounded-md font-semibold text-sm hover:bg-secondary/80 transition-all"
              >
                View Custom Fabrication Page
              </Link>
            </div>
          </div>

        </div>
      </section>

      <ContactCTA />
    </>
  );
};

export default SheetMetalFabricationBangalore;
