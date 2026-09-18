import React from "react";
import ReactDOMServer from "react-dom/server";
import { StaticRouter } from "react-router-dom/server";
import { Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { TooltipProvider } from "@/components/ui/tooltip";
import SiteLayout from "@/components/layout/SiteLayout";

// Direct component imports for synchronous SSR/SSG rendering
import Home from "@/pages/Home";
import Services from "@/pages/Services";
import Gallery from "@/pages/Gallery";
import Contact from "@/pages/Contact";
import LaserCuttingBangalore from "@/pages/seo/LaserCuttingBangalore";
import CncBendingBangalore from "@/pages/seo/CncBendingBangalore";
import SheetMetalFabricationBangalore from "@/pages/seo/SheetMetalFabricationBangalore";
import CustomMetalFabricationBangalore from "@/pages/seo/CustomMetalFabricationBangalore";
import WeldingServicesBangalore from "@/pages/seo/WeldingServicesBangalore";
import PowderCoatingBangalore from "@/pages/seo/PowderCoatingBangalore";
import LaserMarkingBangalore from "@/pages/seo/LaserMarkingBangalore";

export interface RenderResult {
  html: string;
  helmet: {
    title: string;
    meta: string;
    link: string;
    script: string;
  };
}

export function render(url: string): RenderResult {
  const helmetContext: any = {};
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        retry: false,
      },
    },
  });

  const html = ReactDOMServer.renderToString(
    <React.StrictMode>
      <QueryClientProvider client={queryClient}>
        <TooltipProvider>
          <HelmetProvider context={helmetContext}>
            <StaticRouter location={url}>
              <Routes>
                <Route element={<SiteLayout />}>
                  <Route path="/" element={<Home />} />
                  <Route path="/services" element={<Services />} />
                  <Route path="/gallery" element={<Gallery />} />
                  <Route path="/contact" element={<Contact />} />
                  <Route path="/laser-cutting-bangalore" element={<LaserCuttingBangalore />} />
                  <Route path="/cnc-bending-bangalore" element={<CncBendingBangalore />} />
                  <Route path="/sheet-metal-fabrication-bangalore" element={<SheetMetalFabricationBangalore />} />
                  <Route path="/custom-metal-fabrication-bangalore" element={<CustomMetalFabricationBangalore />} />
                  <Route path="/welding-services-bangalore" element={<WeldingServicesBangalore />} />
                  <Route path="/powder-coating-bangalore" element={<PowderCoatingBangalore />} />
                  <Route path="/laser-marking-bangalore" element={<LaserMarkingBangalore />} />
                </Route>
              </Routes>
            </StaticRouter>
          </HelmetProvider>
        </TooltipProvider>
      </QueryClientProvider>
    </React.StrictMode>
  );

  const { helmet } = helmetContext;

  return {
    html,
    helmet: {
      title: helmet?.title ? helmet.title.toString() : "",
      meta: helmet?.meta ? helmet.meta.toString() : "",
      link: helmet?.link ? helmet.link.toString() : "",
      script: helmet?.script ? helmet.script.toString() : "",
    },
  };
}
