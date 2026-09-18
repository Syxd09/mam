import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { SERVICES } from "@/lib/site";
import { supabase } from "@/lib/supabase";

const ServicesOverview = () => {
  const [services, setServices] = useState<any[]>([]);

  useEffect(() => {
    const fetchServices = async () => {
      const { data } = await supabase
        .from("services")
        .select("*")
        .eq("is_active", true)
        .order("display_order", { ascending: true });
      
      if (data && data.length > 0) {
        setServices(data);
      } else {
        // Fallback to static data if DB is empty
        setServices(SERVICES.map(s => ({
          title: s.title,
          short_desc: s.short,
          image_url: s.image,
          slug: s.slug
        })));
      }
    };
    fetchServices();
  }, []);

  return (
    <section id="services" className="py-20 md:py-28 bg-background bg-blueprint-light">
      <div className="container">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
          <div className="max-w-2xl">
            <span className="eyebrow">Precision Metal Fabrication</span>
            <h2 className="h-display text-3xl md:text-5xl mt-3 text-primary">
              CNC Laser Cutting, CNC Bending & <span className="text-accent">Custom Fabrication in Bangalore</span>
            </h2>
          </div>
          <p className="text-muted-foreground max-w-md text-sm md:text-base">
            MAM Industries provides drawing-to-part manufacturing with 3kW CNC fiber laser cutting, 250T CNC press brake bending, precision TIG/MIG welding, and powder coating under one roof in Bangalore.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((s, i) => {
            const pageLink = 
              s.slug === "laser-cutting" ? "/laser-cutting-bangalore" :
              s.slug === "cnc-bending" ? "/cnc-bending-bangalore" :
              s.slug === "fabrication" ? "/custom-metal-fabrication-bangalore" :
              s.slug === "powder-coating" ? "/powder-coating-bangalore" :
              s.slug === "laser-marking" ? "/laser-marking-bangalore" :
              s.slug === "mig-co2-welding" || s.slug === "tig-welding" || s.slug === "laser-welding" ? "/welding-services-bangalore" :
              `/services#${s.slug}`;

            return (
              <motion.div
                key={s.slug}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.5, delay: (i % 3) * 0.05 }}
                className="group relative bg-card border border-border rounded-lg overflow-hidden card-lift flex flex-col h-full"
              >
                <div className="aspect-[16/10] overflow-hidden bg-secondary shrink-0 relative">
                  <img
                    src={s.image_url}
                    alt={`${s.title} in Bangalore — MAM Industries`}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute top-3 left-3 bg-primary/90 text-primary-foreground text-[10px] font-semibold uppercase tracking-wider px-2.5 py-1 rounded backdrop-blur">
                    {String(i + 1).padStart(2, "0")}
                  </div>
                </div>
                <div className="p-5 flex flex-col flex-1 justify-between">
                  <div>
                    <h3 className="font-sora font-semibold text-lg text-primary mb-1.5 group-hover:text-accent transition-colors">{s.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed mb-4 line-clamp-2">{s.short_desc}</p>
                  </div>
                  <div className="pt-2">
                    <Link to={pageLink} className="inline-flex items-center gap-1 text-xs font-semibold text-accent uppercase tracking-wider link-underline">
                      Explore service <ArrowUpRight size={14} />
                    </Link>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServicesOverview;
