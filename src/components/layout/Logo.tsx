import logoUrl from "@/assets/mam-logo.png";

const Logo = ({ className = "", invert = false }: { className?: string; invert?: boolean }) => (
  <img
    src={logoUrl}
    alt="MAM Industries"
    loading="eager"
    decoding="async"
    className={`object-contain transition-transform duration-300 group-hover:scale-105 ${
      invert ? "brightness-0 invert" : ""
    } ${className}`}
  />
);
export default Logo;
