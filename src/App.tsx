import { lazy, Suspense } from "react";
import { Loader2 } from "lucide-react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollToTop from "@/components/ScrollToTop";
import SiteLayout from "@/components/layout/SiteLayout";
import ProtectedRoute from "./components/auth/ProtectedRoute";

// Public & SEO Pages (Synchronous to match SSG prerender tree & prevent hydration mismatch)
import Home from "./pages/Home";
import Services from "./pages/Services";
import Gallery from "./pages/Gallery";
import Contact from "./pages/Contact";
import LaserCuttingBangalore from "./pages/seo/LaserCuttingBangalore";
import CncBendingBangalore from "./pages/seo/CncBendingBangalore";
import SheetMetalFabricationBangalore from "./pages/seo/SheetMetalFabricationBangalore";
import PowderCoatingBangalore from "./pages/seo/PowderCoatingBangalore";
import LaserMarkingBangalore from "./pages/seo/LaserMarkingBangalore";
import WeldingServicesBangalore from "./pages/seo/WeldingServicesBangalore";
import CustomMetalFabricationBangalore from "./pages/seo/CustomMetalFabricationBangalore";

// Loading component for lazy-loaded Admin / Auth routes
const PageLoader = () => (
  <div className="flex items-center justify-center min-h-[50vh] w-full pt-[120px]">
    <Loader2 className="w-10 h-10 animate-spin text-accent" />
  </div>
);

const NotFound = lazy(() => import("./pages/NotFound"));
const LoginPage = lazy(() => import("./pages/LoginPage"));

// Protected Admin Pages (Lazy Loaded)
const AdminLayout = lazy(() => import("./pages/admin/AdminLayout"));
const Dashboard = lazy(() => import("./pages/admin/Dashboard"));
const GalleryManager = lazy(() => import("./pages/admin/GalleryManager"));
const ClientManager = lazy(() => import("./pages/admin/ClientManager"));
const ReviewManager = lazy(() => import("./pages/admin/ReviewManager"));
const ServiceManager = lazy(() => import("./pages/admin/ServiceManager"));
const ConfigManager = lazy(() => import("./pages/admin/ConfigManager"));
const CapabilityManager = lazy(() => import("./pages/admin/CapabilityManager"));
const EnquiryManager = lazy(() => import("./pages/admin/EnquiryManager"));

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 0,
      retry: 1,
      refetchOnWindowFocus: true,
    },
  },
});

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
        <ScrollToTop />
        <Routes>
          {/* Public Website Routes */}
          <Route element={<SiteLayout />}>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/contact" element={<Contact />} />

            {/* B2B SEO Landing Pages */}
            <Route path="/laser-cutting-bangalore" element={<LaserCuttingBangalore />} />
            <Route path="/cnc-bending-bangalore" element={<CncBendingBangalore />} />
            <Route path="/sheet-metal-fabrication-bangalore" element={<SheetMetalFabricationBangalore />} />
            <Route path="/powder-coating-bangalore" element={<PowderCoatingBangalore />} />
            <Route path="/laser-marking-bangalore" element={<LaserMarkingBangalore />} />
            <Route path="/welding-services-bangalore" element={<WeldingServicesBangalore />} />
            <Route path="/custom-metal-fabrication-bangalore" element={<CustomMetalFabricationBangalore />} />
          </Route>

          {/* Auth Route */}
          <Route
            path="/login"
            element={
              <Suspense fallback={<PageLoader />}>
                <LoginPage />
              </Suspense>
            }
          />

          {/* Protected Admin Routes */}
          <Route path="/admin" element={<ProtectedRoute />}>
            <Route
              element={
                <Suspense fallback={<PageLoader />}>
                  <AdminLayout />
                </Suspense>
              }
            >
              <Route index element={<Dashboard />} />
              <Route path="gallery" element={<GalleryManager />} />
              <Route path="clients" element={<ClientManager />} />
              <Route path="reviews" element={<ReviewManager />} />
              <Route path="services" element={<ServiceManager />} />
              <Route path="enquiries" element={<EnquiryManager />} />
              <Route path="config" element={<ConfigManager />} />
              <Route path="capabilities" element={<CapabilityManager />} />
            </Route>
          </Route>

          <Route
            path="*"
            element={
              <Suspense fallback={<PageLoader />}>
                <NotFound />
              </Suspense>
            }
          />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
