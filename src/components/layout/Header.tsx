import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { Menu, X, Phone, Mail, MapPin } from "lucide-react";
import { NAV, SITE } from "@/lib/site";
import logoCombinedLight from "@/assets/mam-combined-logo.png";
import logoCombinedDark from "@/assets/mam-combined-logo-dark.png";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => { setOpen(false); }, [location.pathname]);

  return (
    <header className="fixed top-0 inset-x-0 z-50">
      {/* Top utility bar */}
      <div className={`hidden md:block bg-primary text-primary-foreground transition-all duration-300 ${scrolled ? "h-0 overflow-hidden opacity-0" : "h-10 opacity-100"}`}>
        <div className="container h-10 flex items-center justify-between text-xs">
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-1.5 text-metallic"><MapPin size={13} className="text-accent" /> Bengaluru, Karnataka</span>
            <a href={SITE.phoneHref} className="flex items-center gap-1.5 hover:text-accent transition-colors"><Phone size={13} className="text-accent" /> {SITE.phone}</a>
            <a href={`mailto:${SITE.email}`} className="flex items-center gap-1.5 hover:text-accent transition-colors"><Mail size={13} className="text-accent" /> {SITE.email}</a>
          </div>
          <div className="flex items-center gap-3 text-metallic">
            <span className="text-accent">★ 5.0</span>
            <span>Google Rated</span>
            <span className="text-metallic/50">|</span>
            <span>{SITE.hours}</span>
          </div>
        </div>
      </div>

      {/* Main nav */}
      <nav className={`backdrop-blur-md border-b transition-all duration-300 ${scrolled ? "bg-background/95 border-border shadow-sm" : "bg-background/80 border-transparent"}`}>
        <div className="container flex items-center justify-between h-[72px]">
          <Link to="/" className="group flex items-center gap-3">
            <img
              src={logoCombinedLight}
              alt="MAM Industries"
              className="h-12 md:h-16 w-auto object-contain block dark:hidden drop-shadow-[0_2px_8px_hsl(var(--accent)/0.25)]"
            />
            <img
              src={logoCombinedDark}
              alt="MAM Industries"
              className="h-12 md:h-16 w-auto object-contain hidden dark:block drop-shadow-[0_2px_8px_hsl(var(--accent)/0.25)]"
            />
          </Link>

          <ul className="hidden md:flex items-center gap-1">
            <li>
              <NavLink
                to="/"
                end
                className={({ isActive }) =>
                  `px-3 py-2 text-sm font-medium tracking-wide rounded-md transition-colors ${
                    isActive ? "text-accent" : "text-foreground hover:text-accent"
                  }`
                }
              >
                Home
              </NavLink>
            </li>

            {/* Services Dropdown */}
            <li className="relative group">
              <NavLink
                to="/services"
                className={({ isActive }) =>
                  `px-3 py-2 text-sm font-medium tracking-wide rounded-md transition-colors inline-flex items-center gap-1 ${
                    isActive ? "text-accent" : "text-foreground hover:text-accent"
                  }`
                }
              >
                Services
              </NavLink>

              <div className="absolute top-full left-0 hidden group-hover:block w-64 bg-background border border-border rounded-lg shadow-xl p-2 z-50 animate-fade-in">
                <Link to="/laser-cutting-bangalore" className="block px-3 py-2 text-xs font-medium text-foreground hover:bg-white/5 hover:text-accent rounded-md transition-colors">
                  Laser Cutting Bangalore
                </Link>
                <Link to="/cnc-bending-bangalore" className="block px-3 py-2 text-xs font-medium text-foreground hover:bg-white/5 hover:text-accent rounded-md transition-colors">
                  CNC Bending Bangalore
                </Link>
                <Link to="/sheet-metal-fabrication-bangalore" className="block px-3 py-2 text-xs font-medium text-foreground hover:bg-white/5 hover:text-accent rounded-md transition-colors">
                  Sheet Metal Fabrication
                </Link>
                <Link to="/custom-metal-fabrication-bangalore" className="block px-3 py-2 text-xs font-medium text-foreground hover:bg-white/5 hover:text-accent rounded-md transition-colors">
                  Custom Metal Fabrication
                </Link>
                <Link to="/welding-services-bangalore" className="block px-3 py-2 text-xs font-medium text-foreground hover:bg-white/5 hover:text-accent rounded-md transition-colors">
                  Welding & Fabrication
                </Link>
                <Link to="/powder-coating-bangalore" className="block px-3 py-2 text-xs font-medium text-foreground hover:bg-white/5 hover:text-accent rounded-md transition-colors">
                  Powder Coating Services
                </Link>
                <Link to="/laser-marking-bangalore" className="block px-3 py-2 text-xs font-medium text-foreground hover:bg-white/5 hover:text-accent rounded-md transition-colors">
                  Laser Marking Services
                </Link>
              </div>
            </li>

            <li>
              <NavLink
                to="/gallery"
                className={({ isActive }) =>
                  `px-3 py-2 text-sm font-medium tracking-wide rounded-md transition-colors ${
                    isActive ? "text-accent" : "text-foreground hover:text-accent"
                  }`
                }
              >
                Projects
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/contact"
                className={({ isActive }) =>
                  `px-3 py-2 text-sm font-medium tracking-wide rounded-md transition-colors ${
                    isActive ? "text-accent" : "text-foreground hover:text-accent"
                  }`
                }
              >
                Contact
              </NavLink>
            </li>
          </ul>

          <div className="hidden md:flex items-center gap-3">
            <a href={SITE.phoneHref} className="text-sm font-medium text-foreground hover:text-accent transition-colors">{SITE.phone}</a>
            <Link to="/contact" className="bg-accent text-accent-foreground px-5 py-2.5 text-sm font-semibold rounded-md hover:bg-accent/90 transition-colors shadow-accentglow">
              Get a Quote
            </Link>
          </div>

          <button
            className="md:hidden p-2 text-foreground"
            aria-label="Toggle menu"
            onClick={() => setOpen(!open)}
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {open && (
          <div className="md:hidden border-t border-border bg-background animate-fade-in max-h-[80vh] overflow-y-auto">
            <ul className="container py-4 flex flex-col gap-1">
              <li>
                <NavLink to="/" end className="block py-2 px-2 text-sm font-medium border-b border-border/50 text-foreground">Home</NavLink>
              </li>
              <li>
                <NavLink to="/services" className="block py-2 px-2 text-sm font-semibold text-accent border-b border-border/50">Services</NavLink>
                <div className="pl-4 py-1 space-y-1">
                  <Link to="/laser-cutting-bangalore" className="block py-1.5 text-xs text-metallic hover:text-accent">Laser Cutting Bangalore</Link>
                  <Link to="/cnc-bending-bangalore" className="block py-1.5 text-xs text-metallic hover:text-accent">CNC Bending Bangalore</Link>
                  <Link to="/sheet-metal-fabrication-bangalore" className="block py-1.5 text-xs text-metallic hover:text-accent">Sheet Metal Fabrication</Link>
                  <Link to="/custom-metal-fabrication-bangalore" className="block py-1.5 text-xs text-metallic hover:text-accent">Custom Metal Fabrication</Link>
                  <Link to="/welding-services-bangalore" className="block py-1.5 text-xs text-metallic hover:text-accent">Welding Services</Link>
                  <Link to="/powder-coating-bangalore" className="block py-1.5 text-xs text-metallic hover:text-accent">Powder Coating</Link>
                  <Link to="/laser-marking-bangalore" className="block py-1.5 text-xs text-metallic hover:text-accent">Laser Marking</Link>
                </div>
              </li>
              <li>
                <NavLink to="/gallery" className="block py-2 px-2 text-sm font-medium border-b border-border/50 text-foreground">Projects</NavLink>
              </li>
              <li>
                <NavLink to="/contact" className="block py-2 px-2 text-sm font-medium border-b border-border/50 text-foreground">Contact</NavLink>
              </li>
              <li className="pt-3 flex gap-2">
                <a href={SITE.phoneHref} className="flex-1 text-center py-3 border border-border rounded-md text-sm font-medium">Call</a>
                <Link to="/contact" className="flex-1 text-center py-3 bg-accent text-accent-foreground rounded-md text-sm font-semibold">Get Quote</Link>
              </li>
            </ul>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
