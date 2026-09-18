import { useState, useEffect } from "react";
import { Link, Outlet, useLocation, useNavigate } from "react-router-dom";
import { 
  LayoutDashboard, 
  Image, 
  Briefcase, 
  Users, 
  Settings, 
  LogOut, 
  Menu, 
  X, 
  Inbox,
  Star,
  ExternalLink,
  Wrench,
  ChevronRight,
  ShieldCheck,
  Activity
} from "lucide-react";
import { supabase } from "@/lib/supabase";
import { motion, AnimatePresence } from "framer-motion";
import logoCombinedDark from "@/assets/mam-combined-logo-dark.png";

const AdminLayout = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [newLeadsCount, setNewLeadsCount] = useState<number>(0);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    // Fetch count of new enquiries
    const fetchNewLeads = async () => {
      try {
        const { count } = await supabase
          .from("enquiries")
          .select("*", { count: "exact", head: true })
          .eq("status", "New");
        setNewLeadsCount(count || 0);
      } catch (e) {
        // ignore
      }
    };
    fetchNewLeads();
  }, [location.pathname]);

  const handleLogout = async () => {
    await supabase.auth.signOut();
    navigate("/login");
  };

  const navSections = [
    {
      title: "Overview",
      items: [
        { label: "Dashboard", icon: LayoutDashboard, href: "/admin" },
        { 
          label: "Leads", 
          icon: Inbox, 
          href: "/admin/enquiries",
          badge: newLeadsCount > 0 ? String(newLeadsCount) : undefined,
          badgeColor: "bg-accent text-accent-foreground"
        },
      ]
    },
    {
      title: "Content & Portfolio",
      items: [
        { label: "Gallery Projects", icon: Image, href: "/admin/gallery" },
        { label: "Services", icon: Briefcase, href: "/admin/services" },
        { label: "Machinery & Tech", icon: Wrench, href: "/admin/capabilities" },
        { label: "Clients & Logos", icon: Users, href: "/admin/clients" },
        { label: "Customer Reviews", icon: Star, href: "/admin/reviews" },
      ]
    },
    {
      title: "Configuration",
      items: [
        { label: "Site & Stats Bar", icon: Settings, href: "/admin/config" },
      ]
    }
  ];

  // Helper to get current page title
  const getCurrentPageTitle = () => {
    for (const section of navSections) {
      for (const item of section.items) {
        if (item.href === location.pathname) return item.label;
      }
    }
    return "Management Portal";
  };

  return (
    <div className="min-h-screen bg-[#0B0F19] flex">
      {/* Sidebar - Desktop */}
      <aside className="hidden lg:flex flex-col w-64 bg-[#0F172A]/90 border-r border-white/10 sticky top-0 h-screen backdrop-blur-xl z-20 shadow-2xl">
        {/* Brand Header */}
        <div className="p-5 border-b border-white/10 bg-white/[0.02]">
          <Link to="/admin" className="block">
            <img
              src={logoCombinedDark}
              alt="MAM Industries"
              className="h-10 w-auto object-contain"
            />
          </Link>
          <div className="mt-3 flex items-center justify-between text-[11px] text-metallic">
            <span className="font-mono uppercase tracking-widest text-[10px] text-white/60">Control Center</span>
            <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 font-medium text-[10px] border border-emerald-500/20">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              Live
            </span>
          </div>
        </div>

        {/* Navigation Sections */}
        <nav className="flex-1 px-3 py-4 space-y-6 overflow-y-auto custom-scrollbar">
          {navSections.map((section, idx) => (
            <div key={idx} className="space-y-1">
              <div className="px-3 text-[10px] uppercase font-bold tracking-widest text-metallic/60 mb-2">
                {section.title}
              </div>
              {section.items.map((item) => {
                const isActive = location.pathname === item.href;
                return (
                  <Link
                    key={item.href}
                    to={item.href}
                    className={`flex items-center justify-between px-3 py-2.5 rounded-lg transition-all group ${
                      isActive
                        ? "bg-accent/15 text-white border-l-2 border-accent shadow-sm font-semibold"
                        : "text-metallic hover:bg-white/5 hover:text-white"
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <item.icon
                        size={17}
                        className={`transition-colors ${
                          isActive ? "text-accent" : "text-metallic group-hover:text-white"
                        }`}
                      />
                      <span className="text-xs">{item.label}</span>
                    </div>
                    {item.badge && (
                      <span className={`text-[10px] px-2 py-0.5 rounded-full font-bold shadow-sm ${item.badgeColor}`}>
                        {item.badge}
                      </span>
                    )}
                  </Link>
                );
              })}
            </div>
          ))}
        </nav>

        {/* Bottom Profile & Actions */}
        <div className="p-3 border-t border-white/10 bg-white/[0.02] space-y-1.5">
          <a
            href="/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-between px-3 py-2 text-xs text-metallic hover:text-accent hover:bg-white/5 rounded-md transition-colors"
          >
            <div className="flex items-center gap-2">
              <ExternalLink size={14} />
              <span>View Live Website</span>
            </div>
            <span className="text-[10px] text-white/40 font-mono">↗</span>
          </a>

          <div className="pt-2 border-t border-white/5 flex items-center justify-between px-3 py-2 bg-primary/40 rounded-lg">
            <div className="flex items-center gap-2.5 min-w-0">
              <div className="w-8 h-8 rounded-full bg-accent/20 border border-accent/40 flex items-center justify-center text-accent text-xs font-bold shrink-0">
                MAM
              </div>
              <div className="min-w-0">
                <div className="text-xs font-semibold text-white truncate">Administrator</div>
                <div className="text-[10px] text-emerald-400 flex items-center gap-1">
                  <ShieldCheck size={10} /> Authenticated
                </div>
              </div>
            </div>
            <button
              onClick={handleLogout}
              title="Sign Out"
              className="p-1.5 text-metallic hover:text-rose-400 hover:bg-rose-500/10 rounded transition-colors"
            >
              <LogOut size={15} />
            </button>
          </div>
        </div>
      </aside>

      {/* Mobile Top Header */}
      <div className="lg:hidden fixed top-0 inset-x-0 bg-[#0F172A] border-b border-white/10 z-50 px-4 h-16 flex items-center justify-between backdrop-blur-lg">
        <div className="flex items-center gap-3">
          <img
            src={logoCombinedDark}
            alt="MAM Industries"
            className="h-8 w-auto object-contain"
          />
          <span className="text-[10px] uppercase tracking-wider text-accent font-mono font-bold bg-accent/10 px-2 py-0.5 rounded border border-accent/20">
            Admin
          </span>
        </div>
        <button 
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} 
          className="p-2 text-white hover:bg-white/10 rounded-lg transition-colors"
          aria-label="Toggle Menu"
        >
          {isMobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile Menu Drawer */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.2 }}
            className="lg:hidden fixed inset-0 bg-[#0F172A] z-40 pt-20 p-6 flex flex-col justify-between overflow-y-auto"
          >
            <nav className="space-y-6">
              {navSections.map((section, idx) => (
                <div key={idx} className="space-y-1.5">
                  <div className="text-[10px] uppercase tracking-widest text-metallic/60 font-bold px-2">
                    {section.title}
                  </div>
                  {section.items.map((item) => {
                    const isActive = location.pathname === item.href;
                    return (
                      <Link
                        key={item.href}
                        to={item.href}
                        onClick={() => setIsMobileMenuOpen(false)}
                        className={`flex items-center justify-between p-3 rounded-lg text-sm ${
                          isActive
                            ? "bg-accent text-accent-foreground font-bold shadow-md"
                            : "text-white hover:bg-white/5"
                        }`}
                      >
                        <div className="flex items-center gap-3">
                          <item.icon size={18} />
                          <span>{item.label}</span>
                        </div>
                        {item.badge && (
                          <span className="text-xs bg-white/20 px-2 py-0.5 rounded-full font-bold">
                            {item.badge}
                          </span>
                        )}
                      </Link>
                    );
                  })}
                </div>
              ))}
            </nav>

            <div className="pt-6 border-t border-white/10 space-y-3 mt-6">
              <a
                href="/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full py-2.5 rounded-lg border border-white/10 text-xs text-white hover:bg-white/5"
              >
                <ExternalLink size={14} /> View Live Website
              </a>
              <button
                onClick={handleLogout}
                className="flex items-center justify-center gap-2 w-full py-2.5 rounded-lg bg-rose-500/10 text-rose-400 font-semibold text-xs border border-rose-500/20"
              >
                <LogOut size={16} /> Sign Out
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Content Area with Desktop Header */}
      <div className="flex-1 flex flex-col min-w-0 pt-16 lg:pt-0">
        {/* Desktop Top Navbar */}
        <header className="hidden lg:flex items-center justify-between px-8 py-4 border-b border-white/10 bg-[#0F172A]/50 backdrop-blur-md sticky top-0 z-10">
          {/* Breadcrumb path */}
          <div className="flex items-center gap-2 text-xs">
            <span className="text-metallic">Portal</span>
            <ChevronRight size={13} className="text-white/30" />
            <span className="text-white font-semibold">{getCurrentPageTitle()}</span>
          </div>

          {/* Quick Info & System Status */}
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.03] border border-white/10 text-[11px] text-metallic">
              <Activity size={12} className="text-emerald-400" />
              <span>System Health: <strong className="text-emerald-400 font-medium">99.9%</strong></span>
            </div>
            <a
              href="/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold rounded-md bg-white/5 hover:bg-accent hover:text-accent-foreground text-white border border-white/10 transition-all shadow-sm"
            >
              <span>Live Site</span>
              <ExternalLink size={12} />
            </a>
          </div>
        </header>

        {/* Route Outlet */}
        <main className="flex-1 min-w-0 bg-[#0B0F19]">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default AdminLayout;

