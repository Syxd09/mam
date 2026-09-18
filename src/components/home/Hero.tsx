import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Phone, Star, ShieldCheck, Zap } from "lucide-react";
import { SITE } from "@/lib/site";
import { supabase } from "@/lib/supabase";
import AnimatedCounter from "@/components/AnimatedCounter";

const DEFAULT_STATS = [
  { v: 7, suffix: "+", prefix: "", decimals: 0, l: "Years of expertise" },
  { v: 1200, suffix: "+", prefix: "", decimals: 0, l: "Projects delivered" },
  { v: 20, suffix: "+", prefix: "", decimals: 0, l: "Industries served" },
  { v: 0.1, suffix: "mm", prefix: "±", decimals: 1, l: "Cut tolerance" },
];

const Hero = () => {
  const [heroContent, setHeroContent] = useState({
    title: "Precision Metal Fabrication, Laser Cutting & CNC Bending",
    subtitle: "MAM Industries delivers laser cutting, CNC bending, multi-process welding, fabrication and finishing under one roof — built for OEMs, architects, contractors and factories that demand tolerance and turnaround."
  });
  const [stats, setStats] = useState<Array<{ v: number | string; suffix?: string; prefix?: string; decimals?: number; l: string }>>(DEFAULT_STATS);

  useEffect(() => {
    const fetchConfig = async () => {
      const { data } = await supabase.from("site_config").select("key, value");
      if (data) {
        const title = data.find(c => c.key === "hero_title")?.value;
        const subtitle = data.find(c => c.key === "hero_subtitle")?.value;
        if (title || subtitle) {
          setHeroContent({
            title: title || heroContent.title,
            subtitle: subtitle || heroContent.subtitle
          });
        }

        const getVal = (k: string) => data.find(c => c.key === k)?.value;

        const s1_v = getVal("stat1_value");
        const s1_s = getVal("stat1_suffix");
        const s1_l = getVal("stat1_label");

        const s2_v = getVal("stat2_value");
        const s2_s = getVal("stat2_suffix");
        const s2_l = getVal("stat2_label");

        const s3_v = getVal("stat3_value");
        const s3_s = getVal("stat3_suffix");
        const s3_l = getVal("stat3_label");

        const s4_p = getVal("stat4_prefix");
        const s4_v = getVal("stat4_value");
        const s4_s = getVal("stat4_suffix");
        const s4_d = getVal("stat4_decimals");
        const s4_l = getVal("stat4_label");

        setStats([
          {
            v: s1_v !== undefined && s1_v !== "" ? (isNaN(Number(s1_v)) ? s1_v : Number(s1_v)) : 7,
            suffix: s1_s !== undefined ? s1_s : "+",
            prefix: "",
            decimals: 0,
            l: s1_l || "Years of expertise"
          },
          {
            v: s2_v !== undefined && s2_v !== "" ? (isNaN(Number(s2_v)) ? s2_v : Number(s2_v)) : (SITE.projectsCompleted || 1200),
            suffix: s2_s !== undefined ? s2_s : "+",
            prefix: "",
            decimals: 0,
            l: s2_l || "Projects delivered"
          },
          {
            v: s3_v !== undefined && s3_v !== "" ? (isNaN(Number(s3_v)) ? s3_v : Number(s3_v)) : 20,
            suffix: s3_s !== undefined ? s3_s : "+",
            prefix: "",
            decimals: 0,
            l: s3_l || "Industries served"
          },
          {
            v: s4_v !== undefined && s4_v !== "" ? (isNaN(Number(s4_v)) ? s4_v : Number(s4_v)) : 0.1,
            suffix: s4_s !== undefined ? s4_s : "mm",
            prefix: s4_p !== undefined ? s4_p : "±",
            decimals: s4_d !== undefined && s4_d !== "" ? Number(s4_d) : 1,
            l: s4_l || "Cut tolerance"
          }
        ]);
      }
    };
    fetchConfig();
  }, []);

  return (
    <section className="relative isolate overflow-hidden bg-primary text-primary-foreground">
      {/* Background image + overlay */}
      <picture className="absolute inset-0 -z-10 block w-full h-full">
        <source
          media="(max-width: 767px)"
          srcSet="https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?auto=format&fit=crop&w=600&q=50&fm=webp"
        />
        <img
          src="https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?auto=format&fit=crop&w=1400&q=70&fm=webp"
          alt="Precision Metal Fabrication"
          loading="eager"
          className="w-full h-full object-cover"
        />
      </picture>
      <div className="absolute inset-0 -z-10 bg-gradient-hero" />
      {/* Blueprint grid overlay */}
      <div className="absolute inset-0 -z-10 opacity-40 bg-blueprint" />

      {/* Spark accents */}
      <div className="absolute top-1/4 right-[12%] w-2 h-2 bg-accent rounded-full blur-[2px] animate-spark" />
      <div className="absolute top-1/3 right-[20%] w-1 h-1 bg-highlight rounded-full animate-spark" style={{ animationDelay: "0.6s" }} />
      <div className="absolute bottom-1/3 right-[8%] w-1.5 h-1.5 bg-accent rounded-full animate-spark" style={{ animationDelay: "1.2s" }} />

      <div className="container relative pt-20 md:pt-28 pb-20 md:pb-32">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="max-w-3xl"
        >
          <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 backdrop-blur px-3 py-1.5 rounded-full text-xs font-medium text-metallic mb-6">
            <Star size={12} className="fill-accent text-accent" />
            5.0 Rated · 7+ Years in Bengaluru
          </div>

          <h1 className="h-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white mb-6">
            Laser Cutting, CNC Bending & Metal Fabrication in Bangalore
          </h1>

          <p className="text-base md:text-lg text-metallic max-w-2xl leading-relaxed mb-6">
            MAM Industries is a metal fabrication and engineering company in Bangalore specializing in CNC fiber laser cutting, CNC bending, sheet metal fabrication, precision welding and custom metal fabrication.
          </p>
          <p className="text-sm md:text-base text-metallic/90 max-w-2xl leading-relaxed mb-8">
            We manufacture custom metal components, brackets, panels, trays, enclosures, machine parts and fabricated assemblies based on customer drawings, CAD files, dimensions and project requirements.
          </p>

          <div className="flex flex-wrap gap-3">
            <Link
              to="/contact"
              className="group inline-flex items-center gap-2 bg-accent text-accent-foreground px-6 py-3.5 rounded-md font-semibold text-sm shadow-accentglow hover:bg-accent/90 transition-all"
            >
              Request a Quote
              <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
            </Link>
            <a
              href={SITE.phoneHref}
              className="inline-flex items-center gap-2 bg-white/5 border border-white/15 backdrop-blur text-white px-6 py-3.5 rounded-md font-semibold text-sm hover:bg-white/10 transition-all"
            >
              <Phone size={16} className="text-accent" />
              {SITE.phone}
            </a>
          </div>
        </motion.div>

      {/* Trust metrics */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.2 }}
        className="mt-14 md:mt-20 grid grid-cols-2 md:grid-cols-4 gap-px bg-white/10 border border-white/10 rounded-lg overflow-hidden backdrop-blur"
      >
        {stats.map((m, i) => (
          <div key={i} className="bg-primary/80 backdrop-blur px-5 py-6 group hover:bg-primary/60 transition-colors">
            <div className="font-sora font-bold text-2xl md:text-3xl text-white">
              {typeof m.v === "number" ? (
                <AnimatedCounter 
                  key={`${i}-${m.prefix}-${m.v}-${m.suffix}`}
                  to={m.v} 
                  suffix={m.suffix} 
                  prefix={m.prefix} 
                  decimals={m.decimals ?? 0} 
                />
              ) : (
                <span>{m.prefix}{m.v}{m.suffix}</span>
              )}
            </div>
            <div className="text-xs text-metallic uppercase tracking-wider mt-1 group-hover:text-accent transition-colors">{m.l}</div>
          </div>
        ))}
      </motion.div>
    </div>

    {/* Bottom feature strip */}
    <div className="relative bg-secondary border-t border-white/5">
      <div className="container py-5 grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-10">
        {[
          { icon: ShieldCheck, t: "Quality Assured", d: "We deliver quality to our customers." },
          { icon: Zap, t: "Fast turnaround", d: "Prototype to production in days." },
          { icon: Star, t: "5.0 customer rating", d: "Trusted by OEMs & architects." },
        ].map(({ icon: Icon, t, d }, i) => (
          <div key={i} className="flex items-start gap-3">
            <div className="w-10 h-10 grid place-items-center bg-accent/15 text-accent rounded-md shrink-0">
              <Icon size={18} />
            </div>
            <div>
              <div className="font-semibold text-white text-sm">{t}</div>
              <div className="text-xs text-metallic">{d}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
  );
};

export default Hero;
