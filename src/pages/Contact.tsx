import { useState, useRef, useEffect } from "react";
import { z } from "zod";
import { motion, AnimatePresence } from "framer-motion";
import { Phone, Mail, MapPin, Clock, MessageCircle, Send, ChevronDown, CheckCircle2, Upload } from "lucide-react";
import { useSearchParams } from "react-router-dom";
import SEO from "@/components/SEO";
import Breadcrumbs from "@/components/Breadcrumbs";
import { SITE, SERVICES } from "@/lib/site";
import { toast } from "@/hooks/use-toast";
import { getBreadcrumbSchema } from "@/lib/seo";
import { supabase } from "@/lib/supabase";

const schema = z.object({
  name: z.string().trim().min(2, "Name is too short").max(80),
  company: z.string().trim().max(100).optional(),
  email: z.string().trim().email("Enter a valid email").max(120),
  phone: z.string().trim().min(7, "Enter a valid phone").max(20),
  material: z.string().trim().optional(),
  thickness: z.string().trim().optional(),
  quantity: z.string().trim().optional(),
  service: z.string().trim().min(1, "Select a service"),
  message: z.string().trim().min(5, "Please provide project details").max(1000),
});

const Contact = () => {
  const [searchParams] = useSearchParams();
  const preSelectedService = searchParams.get("service");
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  
  // Custom Dropdown State
  const [selectedService, setSelectedService] = useState(preSelectedService || "");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const formRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (formRef.current) {
        formRef.current.scrollIntoView({ behavior: "smooth", block: "center" });
      }
    }, 900);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formElement = e.currentTarget;
    const fd = new FormData(formElement);
    const data = Object.fromEntries(fd.entries());
    // Ensure the custom service is included
    data.service = selectedService;
    
    const parsed = schema.safeParse(data);

    if (!parsed.success) {
      const errs: Record<string, string> = {};
      parsed.error.issues.forEach(i => { errs[i.path[0] as string] = i.message; });
      setErrors(errs);
      return;
    }
    
    setErrors({});
    setSubmitting(true);

    try {
      // 1. Save to Supabase (Real-time Lead Tracking)
      const { error: dbError } = await supabase.from("enquiries").insert([
        {
          name: parsed.data.name,
          email: parsed.data.email,
          phone: parsed.data.phone,
          service: parsed.data.service,
          message: `Company: ${parsed.data.company || "N/A"} | Material: ${parsed.data.material || "N/A"} | Thickness: ${parsed.data.thickness || "N/A"} | Quantity: ${parsed.data.quantity || "N/A"} \n\n${parsed.data.message}`,
          status: 'New'
        }
      ]);

      if (dbError) {
        console.error("Database error:", dbError);
      }

      // 1.5 Sync to CRM Backend
      const crmApiUrl = (import.meta.env.VITE_CRM_API_URL || "http://localhost:5001") + "/api/integration/website-enquiry";
      const crmApiKey = import.meta.env.VITE_CRM_API_KEY || "mam_secure_sync_secret_123";
      
      fetch(crmApiUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "x-api-key": crmApiKey
        },
        body: JSON.stringify({
          name: parsed.data.name,
          company: parsed.data.company || "Direct Web Inquiry",
          email: parsed.data.email,
          phone: parsed.data.phone,
          city: "Bengaluru",
          service: parsed.data.service,
          message: parsed.data.message
        })
      }).catch(err => {
        console.error("CRM Sync failed in background:", err);
      });

      // 2. Send via Web3Forms
      const formData = new FormData(formElement);
      formData.append("access_key", "5e6757af-ab7d-4b52-8b5d-8608896bbdde");
      formData.append("subject", `New Quote Request: ${data.service} from ${data.name}`);
      formData.append("from_name", "MAM Industries Website");
      
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });

      const result = await response.json();

      if (result.success) {
        setSubmitted(true);
        formElement.reset();
        setSelectedService("");
      } else {
        throw new Error(result.message || "Form submission failed");
      }
    } catch (error) {
      console.error("Submission error:", error);
      toast({ 
        variant: "destructive",
        title: "Submission Error", 
        description: "We couldn't send the email. Please use the WhatsApp button below for a direct enquiry." 
      });
    } finally {
      setSubmitting(false);
    }
  };

  const handleWhatsAppClick = (e: React.MouseEvent) => {
    const form = (e.currentTarget.closest("form") as HTMLFormElement);
    const fd = new FormData(form);
    const data = Object.fromEntries(fd.entries());
    data.service = selectedService;
    
    if (!data.name || !data.phone) {
      toast({ title: "Please enter your name and phone", description: "Fill in your details to start WhatsApp chat." });
      return;
    }

    const message = `Hello MAM Industries, I'm ${data.name} ${data.company ? `from ${data.company}` : ''}.%0A%0A*Project Quotation Request:*%0A- *Service:* ${data.service || 'General Enquiry'}%0A- *Material:* ${data.material || 'N/A'}%0A- *Thickness:* ${data.thickness || 'N/A'}%0A- *Quantity:* ${data.quantity || 'N/A'}%0A- *Phone:* ${data.phone}%0A- *Email:* ${data.email}%0A- *Details:* ${data.message || 'N/A'}`;
    window.open(`${SITE.whatsapp}?text=${message}`, "_blank");
  };

  return (
    <>
      <SEO
        title="Contact MAM Industries | Laser Cutting & Metal Fabrication Bangalore"
        description="Contact MAM Industries in Bangalore for CNC laser cutting, CNC bending, sheet metal fabrication and custom metal fabrication. Send your drawing for a quote."
        keywords="contact mam industries, laser cutting bangalore contact, metal fabrication quotation bengaluru, sheet metal job work price bangalore, cnc bending factory address"
        path="/contact"
        jsonLd={getBreadcrumbSchema([
          { name: "Home", url: "/" },
          { name: "Contact", url: "/contact" }
        ])}
      />

      <section className="bg-primary text-primary-foreground relative overflow-hidden">
        <div className="absolute inset-0 bg-blueprint opacity-40" />
        <div className="container relative py-16 md:py-24">
          <Breadcrumbs items={[{ label: "Contact Us" }]} />
          <span className="eyebrow mt-2">Get in Touch</span>
          <h1 className="h-display text-4xl md:text-6xl mt-3 text-white max-w-3xl">
            Contact MAM Industries in Bangalore
          </h1>
          <p className="text-metallic mt-5 max-w-2xl leading-relaxed">
            Send your CAD drawings, part dimensions, or project specifications for CNC laser cutting, CNC press brake bending, welding, powder coating, and custom sheet metal fabrication in Bangalore.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-background">
        <div className="container grid lg:grid-cols-12 gap-10">
          {/* Form */}
          <motion.div
            ref={formRef}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-7 bg-card border border-border rounded-lg p-6 md:p-9 shadow-sm"
          >
            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4 }}
                className="flex flex-col items-center justify-center text-center py-12 px-4 min-h-[400px]"
              >
                <div className="w-16 h-16 bg-emerald-500/10 text-emerald-500 rounded-full flex items-center justify-center mb-6 ring-8 ring-emerald-500/5">
                  <CheckCircle2 size={36} className="text-emerald-500" />
                </div>
                <h2 className="font-sora font-bold text-2xl text-primary mb-3">Quote Request Received!</h2>
                <p className="text-sm text-muted-foreground max-w-md mx-auto mb-8 leading-relaxed">
                  Thank you for contacting MAM Industries. Our engineering team in Bangalore will review your requirements and follow up with a quotation within 24 hours.
                </p>
                <button
                  type="button"
                  onClick={() => setSubmitted(false)}
                  className="inline-flex items-center gap-2 bg-accent text-accent-foreground px-6 py-3 rounded-md font-bold text-xs uppercase tracking-widest hover:bg-accent/90 transition-all shadow-md"
                >
                  Send another request
                </button>
              </motion.div>
            ) : (
              <>
                <h2 className="font-sora font-bold text-2xl text-primary mb-1">Request a Fast Fabrication Quote</h2>
                <p className="text-sm text-muted-foreground mb-6">Fill in your requirements below. Fields marked with * are required.</p>

                <form onSubmit={onSubmit} className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="text-[10px] font-bold text-muted-foreground uppercase tracking-[0.2em]">Name *</label>
                    <input
                      id="name"
                      name="name" type="text" placeholder="Your name" maxLength={80}
                      className="mt-1.5 w-full bg-background border border-border rounded-md px-4 py-3 text-base focus:outline-none focus:border-accent transition-all placeholder:text-muted-foreground/50 font-medium md:text-sm"
                    />
                    {errors.name && <p className="text-[10px] text-destructive mt-1 font-bold uppercase tracking-wider">{errors.name}</p>}
                  </div>

                  <div>
                    <label htmlFor="company" className="text-[10px] font-bold text-muted-foreground uppercase tracking-[0.2em]">Company</label>
                    <input
                      id="company"
                      name="company" type="text" placeholder="Company / Business Name" maxLength={100}
                      className="mt-1.5 w-full bg-background border border-border rounded-md px-4 py-3 text-base focus:outline-none focus:border-accent transition-all placeholder:text-muted-foreground/50 font-medium md:text-sm"
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="text-[10px] font-bold text-muted-foreground uppercase tracking-[0.2em]">Phone *</label>
                    <input
                      id="phone"
                      name="phone" type="tel" placeholder="+91 Phone number" maxLength={20}
                      className="mt-1.5 w-full bg-background border border-border rounded-md px-4 py-3 text-base focus:outline-none focus:border-accent transition-all placeholder:text-muted-foreground/50 font-medium md:text-sm"
                    />
                    {errors.phone && <p className="text-[10px] text-destructive mt-1 font-bold uppercase tracking-wider">{errors.phone}</p>}
                  </div>

                  <div>
                    <label htmlFor="email" className="text-[10px] font-bold text-muted-foreground uppercase tracking-[0.2em]">Email *</label>
                    <input
                      id="email"
                      name="email" type="email" placeholder="you@company.com" maxLength={120}
                      className="mt-1.5 w-full bg-background border border-border rounded-md px-4 py-3 text-base focus:outline-none focus:border-accent transition-all placeholder:text-muted-foreground/50 font-medium md:text-sm"
                    />
                    {errors.email && <p className="text-[10px] text-destructive mt-1 font-bold uppercase tracking-wider">{errors.email}</p>}
                  </div>

                  <div>
                    <label htmlFor="material" className="text-[10px] font-bold text-muted-foreground uppercase tracking-[0.2em]">Material</label>
                    <input
                      id="material"
                      name="material" type="text" placeholder="e.g. Mild Steel (MS), SS304, Aluminium" maxLength={80}
                      className="mt-1.5 w-full bg-background border border-border rounded-md px-4 py-3 text-base focus:outline-none focus:border-accent transition-all placeholder:text-muted-foreground/50 font-medium md:text-sm"
                    />
                  </div>

                  <div>
                    <label htmlFor="thickness" className="text-[10px] font-bold text-muted-foreground uppercase tracking-[0.2em]">Thickness & Quantity</label>
                    <div className="grid grid-cols-2 gap-2 mt-1.5">
                      <input
                        id="thickness"
                        name="thickness" type="text" placeholder="e.g. 2mm" maxLength={40}
                        className="w-full bg-background border border-border rounded-md px-3 py-3 text-base focus:outline-none focus:border-accent transition-all placeholder:text-muted-foreground/50 font-medium md:text-sm"
                      />
                      <input
                        id="quantity"
                        name="quantity" type="text" placeholder="e.g. 50 pcs" maxLength={40}
                        className="w-full bg-background border border-border rounded-md px-3 py-3 text-base focus:outline-none focus:border-accent transition-all placeholder:text-muted-foreground/50 font-medium md:text-sm"
                      />
                    </div>
                  </div>

                  <div className="sm:col-span-2 relative" ref={dropdownRef}>
                    <label className="text-[10px] font-bold text-muted-foreground uppercase tracking-[0.2em]">Required Service *</label>
                    <button
                      type="button"
                      onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                      className={`mt-1.5 w-full flex items-center justify-between bg-background border rounded-md px-4 py-3 text-sm transition-all text-left ${isDropdownOpen ? "border-accent ring-1 ring-accent" : "border-border"}`}
                    >
                      <span className={selectedService ? "text-primary font-medium" : "text-muted-foreground/50 font-medium"}>
                        {selectedService || "Select Required Service"}
                      </span>
                      <ChevronDown size={16} className={`text-muted-foreground transition-transform duration-300 ${isDropdownOpen ? "rotate-180" : ""}`} />
                    </button>
                    
                    <AnimatePresence>
                      {isDropdownOpen && (
                        <motion.div
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 10 }}
                          className="absolute z-20 top-full left-0 right-0 mt-2 bg-background border border-border rounded-lg shadow-xl overflow-hidden max-h-64 overflow-y-auto"
                        >
                          <div className="p-1">
                            {[
                              "CNC Fiber Laser Cutting",
                              "CNC Bending",
                              "Sheet Metal Fabrication",
                              "Custom Metal Fabrication",
                              "Welding & Fabrication",
                              "Powder Coating",
                              "Laser Marking",
                              "Other / Multiple Services"
                            ].map((svcTitle) => (
                              <button
                                key={svcTitle}
                                type="button"
                                onClick={() => {
                                  setSelectedService(svcTitle);
                                  setIsDropdownOpen(false);
                                }}
                                className={`w-full text-left px-3 py-2.5 text-sm rounded-md transition-colors ${selectedService === svcTitle ? "bg-accent text-white" : "hover:bg-accent/10 text-primary"}`}
                              >
                                {svcTitle}
                              </button>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                    {errors.service && <p className="text-[10px] text-destructive mt-1 font-bold uppercase tracking-wider">{errors.service}</p>}
                  </div>

                  <div className="sm:col-span-2">
                    <label htmlFor="message" className="text-[10px] font-bold text-muted-foreground uppercase tracking-[0.2em]">Drawing / File Upload Details & Message *</label>
                    <textarea
                      id="message"
                      name="message" rows={4} maxLength={1000}
                      placeholder="Describe your project, drawing specifications, dimensions, tolerances or CAD file link (DXF, DWG, STEP, PDF)."
                      className="mt-1.5 w-full bg-background border border-border rounded-md px-4 py-3 text-base focus:outline-none focus:border-accent transition-all placeholder:text-muted-foreground/50 font-medium resize-none md:text-sm"
                    />
                    {errors.message && <p className="text-[10px] text-destructive mt-1 font-bold uppercase tracking-wider">{errors.message}</p>}
                  </div>

                  <div className="sm:col-span-2 flex flex-wrap items-center gap-3 pt-2">
                    <button
                      type="submit"
                      disabled={submitting}
                      className="inline-flex items-center gap-2 bg-accent text-accent-foreground px-8 py-3.5 rounded-md font-bold text-xs uppercase tracking-widest shadow-accentglow hover:bg-accent/90 transition-all disabled:opacity-60"
                    >
                      {submitting ? "Submitting..." : <>Request Quote <Send size={14} /></>}
                    </button>
                    <button
                      type="button"
                      onClick={handleWhatsAppClick}
                      className="inline-flex items-center gap-2 bg-highlight text-highlight-foreground px-8 py-3.5 rounded-md font-bold text-xs uppercase tracking-widest hover:bg-highlight/90 transition-all"
                    >
                      <MessageCircle size={15} /> WhatsApp Drawing
                    </button>
                  </div>
                </form>
              </>
            )}
          </motion.div>

          {/* Details & Map */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-card border border-border rounded-lg p-6 space-y-5 shadow-sm">
              <h3 className="font-sora font-semibold text-lg text-primary border-b border-border pb-3">Bangalore Unit Contact Information</h3>
              
              <div className="flex gap-4 items-start">
                <div className="w-10 h-10 grid place-items-center rounded-md bg-primary text-accent shrink-0 border border-white/5">
                  <MapPin size={18} />
                </div>
                <div>
                  <div className="text-[10px] font-bold text-muted-foreground uppercase tracking-[0.2em] mb-1">Factory & Registered Address</div>
                  <div className="text-sm font-semibold text-primary leading-relaxed">
                    MAM Industries<br />
                    7th Mile, 113, Kanakapura Main Road,<br />
                    Yelachenahalli, Naidu Layout,<br />
                    Bengaluru, Karnataka 560062, India
                  </div>
                </div>
              </div>

              <div className="flex gap-4 items-center">
                <div className="w-10 h-10 grid place-items-center rounded-md bg-primary text-accent shrink-0 border border-white/5">
                  <Phone size={18} />
                </div>
                <div>
                  <div className="text-[10px] font-bold text-muted-foreground uppercase tracking-[0.2em] mb-0.5">Phone & WhatsApp</div>
                  <a href="tel:+917892303386" className="text-sm font-bold text-primary hover:text-accent transition-colors block">
                    +91 78923 03386 / +91 98450 63230
                  </a>
                </div>
              </div>

              <div className="flex gap-4 items-center">
                <div className="w-10 h-10 grid place-items-center rounded-md bg-primary text-accent shrink-0 border border-white/5">
                  <Mail size={18} />
                </div>
                <div>
                  <div className="text-[10px] font-bold text-muted-foreground uppercase tracking-[0.2em] mb-0.5">Official Email</div>
                  <a href="mailto:info@mamindustries.in" className="text-sm font-bold text-primary hover:text-accent transition-colors block">
                    info@mamindustries.in
                  </a>
                </div>
              </div>

              <div className="flex gap-4 items-center">
                <div className="w-10 h-10 grid place-items-center rounded-md bg-primary text-accent shrink-0 border border-white/5">
                  <Clock size={18} />
                </div>
                <div>
                  <div className="text-[10px] font-bold text-muted-foreground uppercase tracking-[0.2em] mb-0.5">Shop Working Hours</div>
                  <div className="text-sm font-medium text-muted-foreground">Monday – Saturday: 9:00 AM – 7:30 PM</div>
                </div>
              </div>
            </div>

            <div className="rounded-lg overflow-hidden border border-border h-72 shadow-sm">
              <iframe
                title="MAM Industries Location Map"
                src={SITE.mapEmbed}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full border-0"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
