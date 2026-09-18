import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { 
  Image as ImageIcon, 
  Briefcase, 
  Users, 
  Inbox, 
  ArrowUpRight,
  Clock,
  Settings,
  Loader2,
  Sparkles,
  Zap,
  PlusCircle,
  BarChart3,
  CheckCircle2,
  Database,
  HardDrive,
  Lock
} from "lucide-react";
import { Link } from "react-router-dom";
import AssetMigration from "@/components/admin/AssetMigration";
import { supabase } from "@/lib/supabase";

const Dashboard = () => {
  const [stats, setStats] = useState([
    { label: "New Leads", value: "0", subtext: "Awaiting review", icon: Inbox, color: "text-accent", bg: "bg-accent/10 border-accent/20", href: "/admin/enquiries" },
    { label: "Gallery Projects", value: "0", subtext: "Published portfolio", icon: ImageIcon, color: "text-blue-400", bg: "bg-blue-500/10 border-blue-500/20", href: "/admin/gallery" },
    { label: "Active Services", value: "0", subtext: "Offerings live", icon: Briefcase, color: "text-emerald-400", bg: "bg-emerald-500/10 border-emerald-500/20", href: "/admin/services" },
    { label: "Pending Reviews", value: "0", subtext: "Customer feedback", icon: Users, color: "text-amber-400", bg: "bg-amber-500/10 border-amber-500/20", href: "/admin/reviews" },
  ]);
  const [loading, setLoading] = useState(true);

  // Time-aware greeting
  const hour = new Date().getHours();
  const greeting = hour < 12 ? "Good morning" : hour < 17 ? "Good afternoon" : "Good evening";

  useEffect(() => {
    const fetchStats = async () => {
      setLoading(true);
      try {
        const [
          { count: galleryCount },
          { count: serviceCount },
          { count: clientCount },
          { count: reviewCount },
          { count: enquiryCount }
        ] = await Promise.all([
          supabase.from("gallery").select("*", { count: "exact", head: true }),
          supabase.from("services").select("*", { count: "exact", head: true }),
          supabase.from("clients").select("*", { count: "exact", head: true }),
          supabase.from("reviews").select("*", { count: "exact", head: true }).eq("is_approved", false),
          supabase.from("enquiries").select("*", { count: "exact", head: true }).eq("status", "New")
        ]);

        setStats([
          { label: "New Leads", value: String(enquiryCount || 0), subtext: "Awaiting response", icon: Inbox, color: "text-accent", bg: "bg-accent/10 border-accent/20", href: "/admin/enquiries" },
          { label: "Gallery Projects", value: String(galleryCount || 0), subtext: "Portfolio items", icon: ImageIcon, color: "text-blue-400", bg: "bg-blue-500/10 border-blue-500/20", href: "/admin/gallery" },
          { label: "Active Services", value: String(serviceCount || 0), subtext: "Core capabilities", icon: Briefcase, color: "text-emerald-400", bg: "bg-emerald-500/10 border-emerald-500/20", href: "/admin/services" },
          { label: "Pending Reviews", value: String(reviewCount || 0), subtext: "Needs moderation", icon: Users, color: "text-amber-400", bg: "bg-amber-500/10 border-amber-500/20", href: "/admin/reviews" },
        ]);
      } catch (error) {
        console.error("Error fetching stats:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchStats();
  }, []);

  return (
    <div className="p-6 md:p-10 max-w-7xl mx-auto space-y-8">
      {/* Hero Welcome Banner */}
      <motion.div 
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-secondary via-secondary/70 to-accent/10 border border-white/10 p-6 sm:p-8 shadow-xl"
      >
        <div className="absolute top-0 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl pointer-events-none" />
        <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 border border-accent/20 text-accent text-xs font-semibold">
              <Sparkles size={13} />
              <span>Operations Control Center</span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-sora font-bold text-white tracking-tight">
              {greeting}, Administrator
            </h1>
            <p className="text-sm text-metallic max-w-xl leading-relaxed">
              Manage website leads, services, industrial gallery showcases, client logos, and public site configurations from this console.
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-3">
            <Link
              to="/admin/enquiries"
              className="inline-flex items-center gap-2 bg-accent text-accent-foreground px-4 py-2.5 rounded-lg font-bold text-xs hover:bg-accent/90 transition-all shadow-md shadow-accent/20"
            >
              <Inbox size={15} />
              <span>View Enquiries</span>
            </Link>
            <Link
              to="/admin/config"
              className="inline-flex items-center gap-2 bg-white/5 hover:bg-white/10 text-white border border-white/10 px-4 py-2.5 rounded-lg font-semibold text-xs transition-all"
            >
              <Settings size={15} />
              <span>Site Config</span>
            </Link>
          </div>
        </div>
      </motion.div>

      {/* Stats Grid */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {stats.map((stat, i) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.08 }}
          >
            <Link
              to={stat.href}
              className="block bg-secondary/50 hover:bg-secondary/70 border border-white/10 hover:border-accent/40 p-5 rounded-xl transition-all duration-200 group relative overflow-hidden shadow-lg hover:shadow-accent/5 hover:-translate-y-0.5"
            >
              <div className="flex items-center justify-between mb-4">
                <div className={`w-11 h-11 rounded-lg flex items-center justify-center border ${stat.bg} ${stat.color}`}>
                  <stat.icon size={20} />
                </div>
                <div className="w-7 h-7 rounded-full bg-white/[0.03] group-hover:bg-accent group-hover:text-accent-foreground text-metallic flex items-center justify-center transition-colors">
                  <ArrowUpRight size={14} />
                </div>
              </div>
              <div className="text-3xl font-sora font-bold text-white mb-1">
                {loading ? <Loader2 size={24} className="animate-spin text-accent/50" /> : stat.value}
              </div>
              <div className="text-xs font-semibold text-white/90">
                {stat.label}
              </div>
              <div className="text-[11px] text-metallic mt-0.5">
                {stat.subtext}
              </div>
            </Link>
          </motion.div>
        ))}
      </div>

      {/* Quick Action Shortcuts */}
      <div className="bg-secondary/40 border border-white/5 rounded-xl p-5">
        <div className="text-xs uppercase tracking-widest text-metallic font-bold mb-3 flex items-center gap-2">
          <Zap size={14} className="text-accent" />
          Quick Actions
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          <Link
            to="/admin/gallery"
            className="flex items-center gap-2.5 p-3 rounded-lg bg-primary/40 hover:bg-primary/80 border border-white/5 hover:border-accent/30 text-xs text-white transition-all"
          >
            <PlusCircle size={15} className="text-blue-400 shrink-0" />
            <span className="truncate font-medium">Add Gallery Item</span>
          </Link>
          <Link
            to="/admin/services"
            className="flex items-center gap-2.5 p-3 rounded-lg bg-primary/40 hover:bg-primary/80 border border-white/5 hover:border-accent/30 text-xs text-white transition-all"
          >
            <Briefcase size={15} className="text-emerald-400 shrink-0" />
            <span className="truncate font-medium">Manage Services</span>
          </Link>
          <Link
            to="/admin/config"
            className="flex items-center gap-2.5 p-3 rounded-lg bg-primary/40 hover:bg-primary/80 border border-white/5 hover:border-accent/30 text-xs text-white transition-all"
          >
            <BarChart3 size={15} className="text-accent shrink-0" />
            <span className="truncate font-medium">Edit Stats Bar</span>
          </Link>
          <Link
            to="/admin/reviews"
            className="flex items-center gap-2.5 p-3 rounded-lg bg-primary/40 hover:bg-primary/80 border border-white/5 hover:border-accent/30 text-xs text-white transition-all"
          >
            <CheckCircle2 size={15} className="text-amber-400 shrink-0" />
            <span className="truncate font-medium">Moderate Reviews</span>
          </Link>
        </div>
      </div>

      {/* Main Grid: Migration & System Status */}
      <div className="grid lg:grid-cols-3 gap-8">
        {/* Recent Activity & Maintenance */}
        <div className="lg:col-span-2 space-y-8">
          <AssetMigration />
          
          <div className="bg-secondary/50 border border-white/5 rounded-xl p-6 shadow-md">
            <div className="flex items-center justify-between mb-5">
              <h2 className="text-sm font-bold text-white flex items-center gap-2">
                <Clock size={16} className="text-accent" />
                Live Synchronization Status
              </h2>
              <span className="text-[11px] font-mono text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">
                ACTIVE
              </span>
            </div>
            <div className="space-y-4">
              <div className="flex gap-3.5 items-start p-3 rounded-lg bg-primary/30 border border-white/5">
                <div className="w-8 h-8 rounded-full bg-accent/10 border border-accent/20 flex items-center justify-center shrink-0">
                  <Database size={14} className="text-accent" />
                </div>
                <div>
                  <p className="text-xs text-white font-semibold">Supabase PostgreSQL Connected</p>
                  <p className="text-[11px] text-metallic mt-0.5">
                    Live updates sync directly to production clients and SSG prerendering pipelines.
                  </p>
                </div>
              </div>
              <div className="flex gap-3.5 items-start p-3 rounded-lg bg-primary/30 border border-white/5">
                <div className="w-8 h-8 rounded-full bg-blue-500/10 border border-blue-500/20 flex items-center justify-center shrink-0">
                  <BarChart3 size={14} className="text-blue-400" />
                </div>
                <div>
                  <p className="text-xs text-white font-semibold">Homepage Trust Metrics Configurable</p>
                  <p className="text-[11px] text-metallic mt-0.5">
                    Metric 1 through Metric 4 can be updated at any time from Site Configuration.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* System Status */}
        <div className="bg-secondary/50 border border-white/5 rounded-xl p-6 shadow-md space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="text-sm font-bold text-white flex items-center gap-2">
              <Settings size={16} className="text-accent" />
              Cloud Infrastructure
            </h2>
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          </div>

          <div className="space-y-3.5">
            <div className="flex justify-between items-center p-3 rounded-lg bg-primary/30 border border-white/5 text-xs">
              <div className="flex items-center gap-2 text-white/90">
                <Database size={14} className="text-metallic" />
                <span>Postgres DB</span>
              </div>
              <span className="flex items-center gap-1.5 text-emerald-400 font-medium">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                Connected
              </span>
            </div>

            <div className="flex justify-between items-center p-3 rounded-lg bg-primary/30 border border-white/5 text-xs">
              <div className="flex items-center gap-2 text-white/90">
                <HardDrive size={14} className="text-metallic" />
                <span>Object Storage</span>
              </div>
              <span className="flex items-center gap-1.5 text-emerald-400 font-medium">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                Active
              </span>
            </div>

            <div className="flex justify-between items-center p-3 rounded-lg bg-primary/30 border border-white/5 text-xs">
              <div className="flex items-center gap-2 text-white/90">
                <Lock size={14} className="text-metallic" />
                <span>Auth & RLS</span>
              </div>
              <span className="flex items-center gap-1.5 text-emerald-400 font-medium">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                Enforced
              </span>
            </div>
          </div>

          <div className="pt-4 border-t border-white/5">
            <div className="text-[11px] text-metallic leading-relaxed">
              Environment: <strong className="text-white">Production Vercel</strong>
              <br />
              Node Engine: <strong className="text-white">v20+ SSG Enabled</strong>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
