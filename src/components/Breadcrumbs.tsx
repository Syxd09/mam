import { Link } from "react-router-dom";
import { ChevronRight, Home } from "lucide-react";

export type BreadcrumbItem = {
  name: string;
  url: string;
};

interface Props {
  items: BreadcrumbItem[];
}

const Breadcrumbs = ({ items }: Props) => {
  return (
    <nav aria-label="Breadcrumb" className="py-3 px-4 bg-primary/20 border-b border-white/5 text-xs text-metallic">
      <div className="container flex items-center flex-wrap gap-1.5">
        <Link to="/" className="inline-flex items-center gap-1 hover:text-accent transition-colors">
          <Home size={12} className="text-accent" />
          <span>Home</span>
        </Link>
        {items.map((item, index) => {
          const isLast = index === items.length - 1;
          return (
            <div key={item.url} className="flex items-center gap-1.5">
              <ChevronRight size={12} className="text-white/20" />
              {isLast ? (
                <span className="text-white font-medium truncate max-w-[200px] sm:max-w-none">{item.name}</span>
              ) : (
                <Link to={item.url} className="hover:text-accent transition-colors">
                  {item.name}
                </Link>
              )}
            </div>
          );
        })}
      </div>
    </nav>
  );
};

export default Breadcrumbs;
