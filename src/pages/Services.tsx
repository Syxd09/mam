import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Check, Loader2, Image, ExternalLink } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import SEO from "@/components/SEO";
import Breadcrumbs from "@/components/Breadcrumbs";
import { SERVICES } from "@/lib/site";
import { supabase } from "@/lib/supabase";
import { getBreadcrumbSchema } from "@/lib/seo";

const getServiceLandingUrl = (slug: string, title: string) => {
  const lowerSlug = (slug || "").toLowerCase();
  const lowerTitle = (title || "").toLowerCase();

  if (lowerSlug.includes("laser-cutting") || lowerTitle.includes("laser cutting")) {
    return "/laser-cutting-bangalore";
  }
  if (lowerSlug.includes("cnc-bending") || lowerTitle.includes("cnc bending")) {
    return "/cnc-bending-bangalore";
  }
  if (lowerSlug.includes("sheet-metal") || lowerTitle.includes("sheet metal")) {
    return "/sheet-metal-fabrication-bangalore";
  }
  if (lowerSlug.includes("custom") || lowerTitle.includes("custom metal")) {
    return "/custom-metal-fabrication-bangalore";
  }
  if (lowerSlug.includes("welding") || lowerTitle.includes("welding")) {
    return "/welding-services-bangalore";
  }
  if (lowerSlug.includes("powder-coating") || lowerTitle.includes("powder coating") || lowerTitle.includes("finishing")) {
    return "/powder-coating-bangalore";
  }
  if (lowerSlug.includes("laser-marking") || lowerTitle.includes("laser marking")) {
    return "/laser-marking-bangalore";
  }
  return `/contact?service=${encodeURIComponent(title)}`;
};

const initialServices = SERVICES.map((s, i) => ({
  id: i,
  slug: s.slug,
  title: s.title,
  description: s.description,
  image_url: s.image,
  benefits: s.benefits,
  industries: s.industries
}));

const Services = () => {
  const [services, setServices] = useState<any[]>(initialServices);
  const [loading, setLoading] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const fetchServices = async () => {
      setLoading(true);
      const { data } = await supabase
        .from("services")
        .select("*")
        .eq("is_active", true)
        .order("display_order", { ascending: true });
      
      if (data && data.length > 0) {
        setServices(data);
      } else {
        // Map static data to DB schema
        setServices(SERVICES.map((s, i) => ({
          id: i,
          slug: s.slug,
          title: s.title,
          description: s.description,
          image_url: s.image,
          benefits: s.benefits,
          industries: s.industries
        })));
      }
      setLoading(false);
    };
    fetchServices();
  }, []);

  useEffect(() => {
    if (!loading && services.length > 0) {
      const hash = location.hash;
      if (hash) {
        const targetId = hash.replace("#", "");
        const element = document.getElementById(targetId);
        if (element) {
          setTimeout(() => {
            const headerOffset = 100;
            const elementPosition = element.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
            
            window.scrollTo({
              top: offsetPosition,
              behavior: "smooth"
            });
          }, 150);
        }
      }
    }
  }, [loading, services, location.hash]);

  return (
    <>
      <SEO
        title="Metal Fabrication Services Bangalore | Laser Cutting & CNC Bending | MAM Industries"
        description="MAM Industries provides complete metal fabrication services in Bangalore including CNC laser cutting, CNC bending, welding, powder coating and laser marking."
        keywords="metal fabrication services bangalore, cnc laser cutting services bangalore, cnc bending bangalore, sheet metal fabrication bangalore, custom metal fabrication, welding services bangalore"
        path="/services"
        jsonLd={getBreadcrumbSchema([
          { name: "Home", url: "/" },
          { name: "Services", url: "/services" }
        ])}
      />

      {/* Page header */}
      <section className="bg-primary text-primary-foreground relative overflow-hidden">
        <div className="absolute inset-0 bg-blueprint opacity-40" />
        <div className="container relative py-16 md:py-24">
          <Breadcrumbs items={[{ label: "Services" }]} />
          <span className="eyebrow mt-2">Precision Metal Fabrication</span>
          <h1 className="h-display text-4xl md:text-6xl mt-3 text-white max-w-3xl">
            Metal Fabrication Services in Bangalore
          </h1>
          <p className="text-metallic mt-5 max-w-2xl leading-relaxed">
            MAM Industries provides complete end-to-end metal fabrication solutions in Bangalore — from CNC fiber laser cutting and 250T CNC press brake bending to TIG/MIG welding, surface finishing, and laser marking for industrial components.
          </p>
        </div>
      </section>

      {/* Alternating service rows */}
      <section className="py-16 md:py-24 bg-background bg-blueprint-light min-h-[50vh]">
        <div className="container space-y-20 md:space-y-28">
          {loading ? (
            <div className="flex justify-center py-20">
              <Loader2 className="w-10 h-10 animate-spin text-accent" />
            </div>
          ) : (
            services.map((s, i) => {
              const landingUrl = getServiceLandingUrl(s.slug, s.title);
              return (
                <motion.article
                  key={s.slug || i}
                  id={s.slug}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6 }}
                  className={`grid lg:grid-cols-2 gap-10 lg:gap-16 items-center ${i % 2 === 1 ? "lg:[&>*:first-child]:order-2" : ""}`}
                >
                  <div className="relative">
                    <div className="absolute -top-3 -left-3 w-20 h-20 stripe-accent opacity-70 -z-10" />
                    <div className="aspect-[4/3] rounded-lg overflow-hidden shadow-elevate bg-secondary">
                      <img src={s.image_url} alt={`${s.title} Services at MAM Industries Bangalore`} loading="lazy" className="w-full h-full object-cover" />
                    </div>
                    <div className="absolute -bottom-4 -right-4 bg-primary text-primary-foreground px-4 py-2 rounded-md font-sora font-bold text-lg shadow-elevate">
                      {String(i + 1).padStart(2, "0")}
                    </div>
                  </div>

                  <div>
                    <span className="eyebrow">{s.industries?.[0] || "Industrial"} & more</span>
                    <h2 className="h-display text-3xl md:text-4xl mt-3 text-primary mb-4">{s.title}</h2>
                    <p className="text-muted-foreground leading-relaxed mb-6">{s.description}</p>

                    <div className="grid grid-cols-2 gap-2.5 mb-6">
                      {s.benefits?.map((b: string) => (
                        <div key={b} className="flex items-start gap-2 text-sm text-foreground">
                          <Check size={16} className="text-highlight mt-0.5 shrink-0" />
                          <span>{b}</span>
                        </div>
                      ))}
                    </div>

                    <div className="flex flex-wrap gap-2 mb-6">
                      {s.industries?.map((ind: string) => (
                        <span key={ind} className="text-xs px-3 py-1 rounded-full bg-secondary/10 text-secondary border border-secondary/20 font-medium">
                          {ind}
                        </span>
                      ))}
                    </div>

                    <div className="flex flex-wrap gap-3">
                      <Link to={landingUrl} className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-5 py-3 rounded-md font-semibold text-sm hover:bg-primary/90 transition-colors">
                        Service Details <ExternalLink size={15} />
                      </Link>
                      <Link to={`/contact?service=${encodeURIComponent(s.title)}`} className="inline-flex items-center gap-2 bg-accent text-accent-foreground px-5 py-3 rounded-md font-semibold text-sm hover:bg-accent/90 transition-colors">
                        Request Quote <ArrowRight size={15} />
                      </Link>
                      <Link 
                        to={`/gallery?filter=${encodeURIComponent(
                          s.title.includes("Fabrication") ? "Fabrication" :
                          s.title.includes("Laser Marking") ? "Laser Marking" :
                          (s.title.includes("Powder Coating") || s.title.includes("Finishing")) ? "Finishing" :
                          s.title.includes("Sheds") ? "Sheds" : s.title
                        )}`} 
                        className="inline-flex items-center gap-2 border border-accent/30 text-accent px-5 py-3 rounded-md font-semibold text-sm hover:bg-accent/10 hover:border-accent transition-colors"
                      >
                        <Image size={15} /> View Projects
                      </Link>
                    </div>
                  </div>
                </motion.article>
              );
            })
          )}
        </div>
      </section>
    </>
  );
};

export default Services;
