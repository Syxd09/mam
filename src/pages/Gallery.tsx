import { useMemo, useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Loader2, ExternalLink } from "lucide-react";
import { useSearchParams, Link } from "react-router-dom";
import SEO from "@/components/SEO";
import Breadcrumbs from "@/components/Breadcrumbs";
import { supabase } from "@/lib/supabase";
import { getBreadcrumbSchema } from "@/lib/seo";

type ProjectItem = {
  src: string;
  cat: string;
  title: string;
  material?: string;
  thickness?: string;
  processes?: string;
  application?: string;
  description: string;
};

const PROJECT_SAMPLES: ProjectItem[] = [
  {
    cat: "Fabrication",
    title: "Custom Stainless Steel Component — Prototype to Finished Product",
    material: "Stainless Steel",
    thickness: "2 mm",
    processes: "CNC Laser Cutting, CNC Bending, Welding & Finishing",
    application: "Prototype & Custom Component",
    description: "A customer provided an original component/prototype and MAM Industries manufactured a corresponding stainless-steel component according to the required design and dimensions.",
    src: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=900&q=70&fm=webp"
  },
  {
    cat: "Laser Cutting",
    title: "Custom Mild Steel Laser Cut Component Run",
    material: "Mild Steel (MS)",
    thickness: "3 mm",
    processes: "3kW CNC Fiber Laser Cutting",
    application: "Machine Guard & Panel Enclosures",
    description: "High-precision laser-cut mild steel components manufactured with sub-millimeter edge accuracy directly from customer DXF files.",
    src: "https://images.unsplash.com/photo-1565793298595-6a879b1d9492?auto=format&fit=crop&w=900&q=70&fm=webp"
  },
  {
    cat: "CNC Bending",
    title: "Multi-Bend Precision Sheet Metal Bracket",
    material: "Mild Steel (MS)",
    thickness: "2.5 mm",
    processes: "CNC Fiber Laser Cutting, 250T CNC Press Brake Bending",
    application: "Structural Mounting Bracket",
    description: "Precision sheet metal component cut and accurately formed with tight angular tolerances on our 250-ton hydraulic CNC press brake.",
    src: "https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?auto=format&fit=crop&w=900&q=70&fm=webp"
  },
  {
    cat: "MIG / CO2 Welding",
    title: "Heavy-Duty Structural Frame Assembly",
    material: "Structural Mild Steel",
    thickness: "5 mm – 8 mm",
    processes: "Cutting, CNC Bending, MIG / CO2 Welding",
    application: "Industrial Equipment Base Frame",
    description: "Robust load-bearing steel framework welded using production MIG/CO2 welding for high structural penetration and rigidity.",
    src: "https://images.unsplash.com/photo-1530124566582-a618bc2615dc?auto=format&fit=crop&w=900&q=70&fm=webp"
  },
  {
    cat: "TIG Welding",
    title: "Stainless Steel Clean-Seam Assembly",
    material: "Stainless Steel (SS304)",
    thickness: "2 mm",
    processes: "Laser Cutting, CNC Bending, TIG Welding, Surface Finishing",
    application: "Architectural & Pharma Equipment",
    description: "Precision TIG welding delivering mirror-clean weld lines and zero spatter for visible stainless steel enclosures.",
    src: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&w=900&q=70&fm=webp"
  },
  {
    cat: "Finishing",
    title: "Powder Coated Metal Cabinet & Frame",
    material: "Mild Steel",
    thickness: "2 mm",
    processes: "CNC Bending, Spot Welding, Powder Coating",
    application: "Electrical Control Housing",
    description: "Custom metal enclosure treated with multi-stage pretreatment and finished with durable outdoor-grade powder coating.",
    src: "https://images.unsplash.com/photo-1567789884554-0b844b597180?auto=format&fit=crop&w=900&q=70&fm=webp"
  },
  {
    cat: "Laser Marking",
    title: "Serialized Component Laser Identification",
    material: "Stainless Steel & Anodized Aluminum",
    thickness: "1.5 mm",
    processes: "Fiber Laser Marking & Engraving",
    application: "Part Identification & Traceability",
    description: "Permanent high-contrast QR code, serial number, and brand logo laser marking for industrial part traceability.",
    src: "https://images.unsplash.com/photo-1607400201515-c2c41c07d307?auto=format&fit=crop&w=900&q=70&fm=webp"
  },
  {
    cat: "Gates & Grills",
    title: "Industrial Facility Entrance Gate",
    material: "Mild Steel Sections & Sheets",
    processes: "Cutting, Bending, Welding, Anti-rust Coating",
    application: "Commercial Entrance Security",
    description: "Custom heavy-duty steel security gate designed and fabricated for industrial plant access control.",
    src: "/images/industrial-gate.png"
  },
  {
    cat: "Rolling Shutters",
    title: "Industrial Warehouse Rolling Shutter",
    material: "Galvanized Steel",
    processes: "Cold Roll Forming & Assembly",
    application: "Warehouse & Shop Security",
    description: "Durable motorized and manual rolling shutter door manufactured for industrial godowns and commercial units.",
    src: "/images/rolling-shutter.png"
  },
  {
    cat: "Sheds",
    title: "Industrial Steel Factory Shed Frame",
    material: "Structural Steel Members",
    processes: "Structural Welding, Column Fabrication",
    application: "Factory & Storage Infrastructure",
    description: "Structural metal framework and roof truss fabrication engineered for industrial storage facilities in Bangalore.",
    src: "/images/industrial-shed.png"
  }
];

const CATS = ["All", "Laser Cutting", "CNC Bending", "MIG / CO2 Welding", "TIG Welding", "Fabrication", "Finishing", "Laser Marking", "Gates & Grills", "Rolling Shutters", "Sheds"];

const Gallery = () => {
  const [searchParams] = useSearchParams();
  const filterParam = searchParams.get("filter");
  const [cat, setCat] = useState("All");
  const [active, setActive] = useState<number | null>(null);
  const [gallery, setGallery] = useState<ProjectItem[]>(PROJECT_SAMPLES);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (filterParam) {
      const matchedCat = CATS.find(c => c.toLowerCase() === filterParam.toLowerCase());
      if (matchedCat) {
        setCat(matchedCat);
      }
    }
  }, [filterParam]);

  useEffect(() => {
    const fetchGallery = async () => {
      try {
        const { data, error } = await supabase
          .from("gallery")
          .select("*")
          .order("display_order", { ascending: true });
        
        if (!error && data && data.length > 0) {
          const dbItems: ProjectItem[] = data.map(item => ({
            src: item.image_url,
            title: item.title,
            cat: item.category,
            description: item.description || `Metal fabrication project for ${item.category} manufactured by MAM Industries Bangalore.`,
            material: item.material,
            thickness: item.thickness,
            processes: item.processes,
            application: item.application
          }));
          setGallery(dbItems);
        }
      } catch (err) {
        console.warn("Using static gallery data as fallback", err);
      } finally {
        setLoading(false);
      }
    };

    fetchGallery();
  }, []);

  const filtered = useMemo(
    () => (cat === "All" ? gallery : gallery.filter(g => g.cat.toLowerCase().includes(cat.toLowerCase()))),
    [cat, gallery]
  );

  return (
    <>
      <SEO
        title="Metal Fabrication Projects Bangalore | Laser Cutting & CNC Bending | MAM Industries"
        description="View MAM Industries metal fabrication projects in Bangalore, including laser-cut components, CNC bent parts, stainless steel fabrication and custom assemblies."
        keywords="metal fabrication projects bangalore, laser cutting portfolio bangalore, cnc bending projects bengaluru, stainless steel fabrication samples"
        path="/gallery"
        jsonLd={getBreadcrumbSchema([
          { name: "Home", url: "/" },
          { name: "Projects Gallery", url: "/gallery" }
        ])}
      />

      <section className="bg-primary text-primary-foreground relative overflow-hidden">
        <div className="absolute inset-0 bg-blueprint opacity-40" />
        <div className="container relative py-16 md:py-24">
          <Breadcrumbs items={[{ label: "Projects Gallery" }]} />
          <span className="eyebrow mt-2">Industrial Work Showcase</span>
          <h1 className="h-display text-4xl md:text-6xl mt-3 text-white max-w-3xl">
            Our Metal Fabrication Projects
          </h1>
          <p className="text-metallic mt-5 max-w-2xl leading-relaxed">
            Explore our portfolio of laser-cut components, CNC bent parts, welded structural frames, stainless steel prototypes, and powder-coated assemblies produced at our Bangalore manufacturing facility.
          </p>
        </div>
      </section>

      <section className="py-12 md:py-16 bg-background">
        <div className="container">
          <div className="flex flex-wrap gap-2 mb-10">
            {CATS.map(c => (
              <button
                key={c}
                onClick={() => setCat(c)}
                className={`px-4 py-2 rounded-full text-sm font-medium border transition-colors ${
                  cat === c
                    ? "bg-primary text-primary-foreground border-primary"
                    : "bg-card text-foreground border-border hover:border-accent hover:text-accent"
                }`}
              >
                {c}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filtered.map((g, i) => (
              <article
                key={`${g.src}-${i}`}
                className="bg-card border border-border rounded-lg overflow-hidden shadow-sm flex flex-col justify-between"
              >
                <div>
                  <button
                    onClick={() => setActive(i)}
                    aria-label={`View full image of ${g.title}`}
                    className="group relative block w-full aspect-[4/3] overflow-hidden bg-secondary"
                  >
                    <img
                      src={g.src}
                      alt={`${g.title} - Metal Fabrication Project by MAM Industries Bangalore`}
                      loading="lazy"
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-white">
                      <span className="bg-primary/90 px-3 py-1.5 rounded text-xs font-semibold flex items-center gap-1.5">
                        <ExternalLink size={14} /> Zoom Image
                      </span>
                    </div>
                  </button>

                  <div className="p-5 space-y-3">
                    <span className="inline-block text-[11px] font-semibold uppercase tracking-wider text-accent bg-accent/10 px-2.5 py-1 rounded">
                      {g.cat}
                    </span>
                    <h2 className="text-lg font-bold text-primary leading-snug">
                      {g.title}
                    </h2>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {g.description}
                    </p>

                    <div className="pt-2 border-t border-border/60 text-xs space-y-1.5 text-foreground/80">
                      {g.material && (
                        <div><strong className="text-primary font-medium">Material:</strong> {g.material}</div>
                      )}
                      {g.thickness && (
                        <div><strong className="text-primary font-medium">Thickness:</strong> {g.thickness}</div>
                      )}
                      {g.processes && (
                        <div><strong className="text-primary font-medium">Processes:</strong> {g.processes}</div>
                      )}
                      {g.application && (
                        <div><strong className="text-primary font-medium">Application:</strong> {g.application}</div>
                      )}
                    </div>
                  </div>
                </div>

                <div className="px-5 pb-5 pt-2">
                  <Link
                    to={`/contact?service=${encodeURIComponent(g.cat)}`}
                    className="w-full inline-flex items-center justify-center gap-2 bg-secondary text-secondary-foreground hover:bg-accent hover:text-accent-foreground px-4 py-2.5 rounded text-xs font-semibold transition-colors"
                  >
                    Request Similar Fabrication
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <AnimatePresence>
        {active !== null && filtered[active] && (
          <motion.div
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="fixed inset-0 bg-primary/95 backdrop-blur-sm z-[80] flex items-center justify-center p-4"
            onClick={() => setActive(null)}
          >
            <button 
              onClick={() => setActive(null)} 
              aria-label="Close image viewer"
              className="absolute top-5 right-5 w-10 h-10 grid place-items-center rounded-full bg-white/10 text-white hover:bg-accent hover:text-accent-foreground transition-colors"
            >
              <X size={18} />
            </button>
            <motion.div
              initial={{ scale: 0.95 }} animate={{ scale: 1 }} exit={{ scale: 0.95 }}
              className="max-w-4xl w-full bg-card border border-border rounded-lg overflow-hidden p-4"
              onClick={(e) => e.stopPropagation()}
            >
              <img src={filtered[active].src} alt={filtered[active].title} className="w-full h-auto rounded-md max-h-[70vh] object-contain" />
              <div className="mt-4 p-2">
                <div className="text-xs uppercase tracking-wider text-accent font-semibold">{filtered[active].cat}</div>
                <div className="text-primary font-sora font-semibold text-xl mt-1">{filtered[active].title}</div>
                <p className="text-muted-foreground text-sm mt-2">{filtered[active].description}</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Gallery;
