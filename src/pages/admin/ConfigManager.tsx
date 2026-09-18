import { useState, useEffect } from "react";
import { supabase } from "@/lib/supabase";
import { 
  Settings, 
  Save, 
  Loader2,
  Mail,
  Phone,
  MapPin,
  Clock,
  Info,
  Globe,
  BarChart3
} from "lucide-react";
import { motion } from "framer-motion";
import { toast } from "sonner";

interface ConfigItem {
  key: string;
  value: string;
}

const ConfigManager = () => {
  const [config, setConfig] = useState<Record<string, string>>({});
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    fetchConfig();
  }, []);

  const DEFAULT_CONFIG_KEYS: Record<string, string> = {
    stat1_value: "7",
    stat1_suffix: "+",
    stat1_label: "Years of expertise",
    stat2_value: "1200",
    stat2_suffix: "+",
    stat2_label: "Projects delivered",
    stat3_value: "20",
    stat3_suffix: "+",
    stat3_label: "Industries served",
    stat4_prefix: "±",
    stat4_value: "0.1",
    stat4_suffix: "mm",
    stat4_decimals: "1",
    stat4_label: "Cut tolerance",
  };

  const fetchConfig = async () => {
    setLoading(true);
    const { data, error } = await supabase
      .from("site_config")
      .select("key, value");
    
    if (error) {
      toast.error("Failed to load settings");
    } else {
      const configMap = (data || []).reduce((acc, curr) => ({
        ...acc,
        [curr.key]: curr.value
      }), {});
      setConfig({ ...DEFAULT_CONFIG_KEYS, ...configMap });
    }
    setLoading(false);
  };

  const handleSave = async (e: React.FormEvent) => {
    e.preventDefault();
    setSaving(true);

    try {
      const updates = Object.entries(config).map(([key, value]) => ({
        key,
        value
      }));

      const { error } = await supabase
        .from("site_config")
        .upsert(updates, { onConflict: 'key' });

      if (error) throw error;
      toast.success("Settings saved successfully");
    } catch (error: any) {
      toast.error(error.message || "Failed to save settings");
    } finally {
      setSaving(false);
    }
  };

  const handleChange = (key: string, value: string) => {
    setConfig(prev => ({ ...prev, [key]: value }));
  };

  if (loading) {
    return (
      <div className="h-screen grid place-items-center bg-primary">
        <Loader2 className="w-10 h-10 animate-spin text-accent" />
      </div>
    );
  }

  return (
    <div className="p-6 md:p-10 max-w-4xl mx-auto">
      <header className="flex justify-between items-center mb-10">
        <div>
          <h1 className="text-2xl font-sora font-bold text-white">Site Configuration</h1>
          <p className="text-sm text-metallic">Global settings for the public website.</p>
        </div>
        <button
          onClick={handleSave}
          disabled={saving}
          className="flex items-center gap-2 bg-accent text-accent-foreground px-6 py-2.5 rounded-md font-bold text-sm hover:bg-accent/90 transition-all shadow-lg shadow-accent/20 disabled:opacity-50"
        >
          {saving ? <Loader2 size={18} className="animate-spin" /> : <Save size={18} />}
          Save All Changes
        </button>
      </header>

      <form onSubmit={handleSave} className="space-y-8 pb-20">
        {/* Hero Section */}
        <section className="bg-secondary/50 border border-white/5 rounded-xl p-6">
          <h2 className="text-xs uppercase tracking-[0.2em] text-accent font-bold mb-6 flex items-center gap-2">
            <Globe size={14} />
            Hero Section
          </h2>
          <div className="space-y-6">
            <div>
              <label className="text-xs uppercase tracking-widest text-metallic font-semibold mb-2 block">
                Headline (Hero Title)
              </label>
              <textarea
                value={config.hero_title || ""}
                onChange={(e) => handleChange("hero_title", e.target.value)}
                rows={2}
                className="w-full bg-primary border border-white/10 rounded-md p-3 text-white focus:border-accent outline-none resize-none font-sora text-lg font-bold"
              />
            </div>
            <div>
              <label className="text-xs uppercase tracking-widest text-metallic font-semibold mb-2 block">
                Sub-headline
              </label>
              <textarea
                value={config.hero_subtitle || ""}
                onChange={(e) => handleChange("hero_subtitle", e.target.value)}
                rows={3}
                className="w-full bg-primary border border-white/10 rounded-md p-3 text-white focus:border-accent outline-none resize-none text-sm leading-relaxed"
              />
            </div>
          </div>
        </section>

        {/* Trust Metrics / Hero Stats Bar Section */}
        <section className="bg-secondary/50 border border-white/5 rounded-xl p-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-6">
            <h2 className="text-xs uppercase tracking-[0.2em] text-accent font-bold flex items-center gap-2">
              <BarChart3 size={14} />
              Trust Metrics & Stats Bar
            </h2>
            <span className="text-xs text-metallic">Hero stats bar displayed on the homepage</span>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {/* Stat 1 */}
            <div className="bg-primary/60 border border-white/10 rounded-lg p-4 space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-semibold text-white">Metric 1</span>
                <span className="text-[10px] uppercase tracking-wider bg-accent/20 text-accent px-1.5 py-0.5 rounded font-mono font-bold">
                  {config.stat1_value !== undefined ? config.stat1_value : "7"}{config.stat1_suffix !== undefined ? config.stat1_suffix : "+"}
                </span>
              </div>
              <div>
                <label className="text-[10px] uppercase tracking-wider text-metallic font-semibold block mb-1">
                  Number / Value
                </label>
                <input
                  type="text"
                  value={config.stat1_value !== undefined ? config.stat1_value : "7"}
                  onChange={(e) => handleChange("stat1_value", e.target.value)}
                  placeholder="7"
                  className="w-full bg-primary border border-white/10 rounded p-2 text-white text-sm focus:border-accent outline-none font-sora font-bold"
                />
              </div>
              <div>
                <label className="text-[10px] uppercase tracking-wider text-metallic font-semibold block mb-1">
                  Suffix
                </label>
                <input
                  type="text"
                  value={config.stat1_suffix !== undefined ? config.stat1_suffix : "+"}
                  onChange={(e) => handleChange("stat1_suffix", e.target.value)}
                  placeholder="+"
                  className="w-full bg-primary border border-white/10 rounded p-2 text-white text-sm focus:border-accent outline-none"
                />
              </div>
              <div>
                <label className="text-[10px] uppercase tracking-wider text-metallic font-semibold block mb-1">
                  Label
                </label>
                <input
                  type="text"
                  value={config.stat1_label !== undefined ? config.stat1_label : "Years of expertise"}
                  onChange={(e) => handleChange("stat1_label", e.target.value)}
                  placeholder="Years of expertise"
                  className="w-full bg-primary border border-white/10 rounded p-2 text-white text-sm focus:border-accent outline-none"
                />
              </div>
            </div>

            {/* Stat 2 */}
            <div className="bg-primary/60 border border-white/10 rounded-lg p-4 space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-semibold text-white">Metric 2</span>
                <span className="text-[10px] uppercase tracking-wider bg-accent/20 text-accent px-1.5 py-0.5 rounded font-mono font-bold">
                  {isNaN(Number(config.stat2_value || "1200")) ? (config.stat2_value || "1200") : Number(config.stat2_value || "1200").toLocaleString()}{config.stat2_suffix !== undefined ? config.stat2_suffix : "+"}
                </span>
              </div>
              <div>
                <label className="text-[10px] uppercase tracking-wider text-metallic font-semibold block mb-1">
                  Number / Value
                </label>
                <input
                  type="text"
                  value={config.stat2_value !== undefined ? config.stat2_value : "1200"}
                  onChange={(e) => handleChange("stat2_value", e.target.value)}
                  placeholder="1200"
                  className="w-full bg-primary border border-white/10 rounded p-2 text-white text-sm focus:border-accent outline-none font-sora font-bold"
                />
              </div>
              <div>
                <label className="text-[10px] uppercase tracking-wider text-metallic font-semibold block mb-1">
                  Suffix
                </label>
                <input
                  type="text"
                  value={config.stat2_suffix !== undefined ? config.stat2_suffix : "+"}
                  onChange={(e) => handleChange("stat2_suffix", e.target.value)}
                  placeholder="+"
                  className="w-full bg-primary border border-white/10 rounded p-2 text-white text-sm focus:border-accent outline-none"
                />
              </div>
              <div>
                <label className="text-[10px] uppercase tracking-wider text-metallic font-semibold block mb-1">
                  Label
                </label>
                <input
                  type="text"
                  value={config.stat2_label !== undefined ? config.stat2_label : "Projects delivered"}
                  onChange={(e) => handleChange("stat2_label", e.target.value)}
                  placeholder="Projects delivered"
                  className="w-full bg-primary border border-white/10 rounded p-2 text-white text-sm focus:border-accent outline-none"
                />
              </div>
            </div>

            {/* Stat 3 */}
            <div className="bg-primary/60 border border-white/10 rounded-lg p-4 space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-semibold text-white">Metric 3</span>
                <span className="text-[10px] uppercase tracking-wider bg-accent/20 text-accent px-1.5 py-0.5 rounded font-mono font-bold">
                  {config.stat3_value !== undefined ? config.stat3_value : "20"}{config.stat3_suffix !== undefined ? config.stat3_suffix : "+"}
                </span>
              </div>
              <div>
                <label className="text-[10px] uppercase tracking-wider text-metallic font-semibold block mb-1">
                  Number / Value
                </label>
                <input
                  type="text"
                  value={config.stat3_value !== undefined ? config.stat3_value : "20"}
                  onChange={(e) => handleChange("stat3_value", e.target.value)}
                  placeholder="20"
                  className="w-full bg-primary border border-white/10 rounded p-2 text-white text-sm focus:border-accent outline-none font-sora font-bold"
                />
              </div>
              <div>
                <label className="text-[10px] uppercase tracking-wider text-metallic font-semibold block mb-1">
                  Suffix
                </label>
                <input
                  type="text"
                  value={config.stat3_suffix !== undefined ? config.stat3_suffix : "+"}
                  onChange={(e) => handleChange("stat3_suffix", e.target.value)}
                  placeholder="+"
                  className="w-full bg-primary border border-white/10 rounded p-2 text-white text-sm focus:border-accent outline-none"
                />
              </div>
              <div>
                <label className="text-[10px] uppercase tracking-wider text-metallic font-semibold block mb-1">
                  Label
                </label>
                <input
                  type="text"
                  value={config.stat3_label !== undefined ? config.stat3_label : "Industries served"}
                  onChange={(e) => handleChange("stat3_label", e.target.value)}
                  placeholder="Industries served"
                  className="w-full bg-primary border border-white/10 rounded p-2 text-white text-sm focus:border-accent outline-none"
                />
              </div>
            </div>

            {/* Stat 4 */}
            <div className="bg-primary/60 border border-white/10 rounded-lg p-4 space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-semibold text-white">Metric 4</span>
                <span className="text-[10px] uppercase tracking-wider bg-accent/20 text-accent px-1.5 py-0.5 rounded font-mono font-bold">
                  {config.stat4_prefix !== undefined ? config.stat4_prefix : "±"}{config.stat4_value !== undefined ? config.stat4_value : "0.1"}{config.stat4_suffix !== undefined ? config.stat4_suffix : "mm"}
                </span>
              </div>
              <div className="grid grid-cols-2 gap-2">
                <div>
                  <label className="text-[10px] uppercase tracking-wider text-metallic font-semibold block mb-1">
                    Prefix
                  </label>
                  <input
                    type="text"
                    value={config.stat4_prefix !== undefined ? config.stat4_prefix : "±"}
                    onChange={(e) => handleChange("stat4_prefix", e.target.value)}
                    placeholder="±"
                    className="w-full bg-primary border border-white/10 rounded p-2 text-white text-sm focus:border-accent outline-none"
                  />
                </div>
                <div>
                  <label className="text-[10px] uppercase tracking-wider text-metallic font-semibold block mb-1">
                    Suffix
                  </label>
                  <input
                    type="text"
                    value={config.stat4_suffix !== undefined ? config.stat4_suffix : "mm"}
                    onChange={(e) => handleChange("stat4_suffix", e.target.value)}
                    placeholder="mm"
                    className="w-full bg-primary border border-white/10 rounded p-2 text-white text-sm focus:border-accent outline-none"
                  />
                </div>
              </div>
              <div>
                <label className="text-[10px] uppercase tracking-wider text-metallic font-semibold block mb-1">
                  Number / Value
                </label>
                <input
                  type="text"
                  value={config.stat4_value !== undefined ? config.stat4_value : "0.1"}
                  onChange={(e) => handleChange("stat4_value", e.target.value)}
                  placeholder="0.1"
                  className="w-full bg-primary border border-white/10 rounded p-2 text-white text-sm focus:border-accent outline-none font-sora font-bold"
                />
              </div>
              <div>
                <label className="text-[10px] uppercase tracking-wider text-metallic font-semibold block mb-1">
                  Label
                </label>
                <input
                  type="text"
                  value={config.stat4_label !== undefined ? config.stat4_label : "Cut tolerance"}
                  onChange={(e) => handleChange("stat4_label", e.target.value)}
                  placeholder="Cut tolerance"
                  className="w-full bg-primary border border-white/10 rounded p-2 text-white text-sm focus:border-accent outline-none"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Contact Information */}
        <section className="bg-secondary/50 border border-white/5 rounded-xl p-6">
          <h2 className="text-xs uppercase tracking-[0.2em] text-accent font-bold mb-6 flex items-center gap-2">
            <Info size={14} />
            Business Details
          </h2>
          <div className="grid sm:grid-cols-2 gap-6">
            <div>
              <label className="text-xs uppercase tracking-widest text-metallic font-semibold mb-2 flex items-center gap-2">
                <Mail size={12} /> Contact Email
              </label>
              <input
                type="email"
                value={config.contact_email || ""}
                onChange={(e) => handleChange("contact_email", e.target.value)}
                className="w-full bg-primary border border-white/10 rounded-md p-3 text-white focus:border-accent outline-none text-sm"
              />
            </div>
            <div>
              <label className="text-xs uppercase tracking-widest text-metallic font-semibold mb-2 flex items-center gap-2">
                <Phone size={12} /> Contact Phone
              </label>
              <input
                type="text"
                value={config.contact_phone || ""}
                onChange={(e) => handleChange("contact_phone", e.target.value)}
                className="w-full bg-primary border border-white/10 rounded-md p-3 text-white focus:border-accent outline-none text-sm"
              />
            </div>
            <div className="sm:col-span-2">
              <label className="text-xs uppercase tracking-widest text-metallic font-semibold mb-2 flex items-center gap-2">
                <MapPin size={12} /> Office Address
              </label>
              <input
                type="text"
                value={config.contact_address || ""}
                onChange={(e) => handleChange("contact_address", e.target.value)}
                className="w-full bg-primary border border-white/10 rounded-md p-3 text-white focus:border-accent outline-none text-sm"
              />
            </div>
            <div>
              <label className="text-xs uppercase tracking-widest text-metallic font-semibold mb-2 flex items-center gap-2">
                <Clock size={12} /> Business Hours
              </label>
              <input
                type="text"
                value={config.business_hours || ""}
                onChange={(e) => handleChange("business_hours", e.target.value)}
                className="w-full bg-primary border border-white/10 rounded-md p-3 text-white focus:border-accent outline-none text-sm"
              />
            </div>
          </div>
        </section>

        {/* Social Media Links */}
        <section className="bg-secondary/50 border border-white/5 rounded-xl p-6">
          <h2 className="text-xs uppercase tracking-[0.2em] text-accent font-bold mb-6 flex items-center gap-2">
            <Globe size={14} />
            Social Media Links
          </h2>
          <div className="grid sm:grid-cols-2 gap-6">
            <div>
              <label className="text-xs uppercase tracking-widest text-metallic font-semibold mb-2 flex items-center gap-2">
                Facebook Page URL
              </label>
              <input
                type="url"
                value={config.facebook_url || ""}
                onChange={(e) => handleChange("facebook_url", e.target.value)}
                placeholder="https://facebook.com/yourpage"
                className="w-full bg-primary border border-white/10 rounded-md p-3 text-white focus:border-accent outline-none text-sm"
              />
            </div>
            <div>
              <label className="text-xs uppercase tracking-widest text-metallic font-semibold mb-2 flex items-center gap-2">
                Instagram Profile URL
              </label>
              <input
                type="url"
                value={config.instagram_url || ""}
                onChange={(e) => handleChange("instagram_url", e.target.value)}
                placeholder="https://instagram.com/yourprofile"
                className="w-full bg-primary border border-white/10 rounded-md p-3 text-white focus:border-accent outline-none text-sm"
              />
            </div>
            <div>
              <label className="text-xs uppercase tracking-widest text-metallic font-semibold mb-2 flex items-center gap-2">
                YouTube Channel URL
              </label>
              <input
                type="url"
                value={config.youtube_url || ""}
                onChange={(e) => handleChange("youtube_url", e.target.value)}
                placeholder="https://youtube.com/c/yourchannel"
                className="w-full bg-primary border border-white/10 rounded-md p-3 text-white focus:border-accent outline-none text-sm"
              />
            </div>
            <div>
              <label className="text-xs uppercase tracking-widest text-metallic font-semibold mb-2 flex items-center gap-2">
                LinkedIn Profile URL
              </label>
              <input
                type="url"
                value={config.linkedin_url || ""}
                onChange={(e) => handleChange("linkedin_url", e.target.value)}
                placeholder="https://linkedin.com/company/yourcompany"
                className="w-full bg-primary border border-white/10 rounded-md p-3 text-white focus:border-accent outline-none text-sm"
              />
            </div>
          </div>
        </section>

        <div className="bg-accent/10 border border-accent/20 p-4 rounded-lg flex gap-3 items-start">
          <Info className="text-accent shrink-0 mt-0.5" size={18} />
          <p className="text-xs text-accent leading-relaxed">
            <strong>Note:</strong> Changes made here will instantly update the public website's hero section, footer, and contact pages. Ensure all details are verified before saving.
          </p>
        </div>
      </form>
    </div>
  );
};

export default ConfigManager;
