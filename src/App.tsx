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

// Loading component
const PageLoader = () => (
  <div className="flex items-center justify-center min-h-[50vh] w-full pt-[120px]">
    <Loader2 className="w-10 h-10 animate-spin text-accent" />
  </div>
);

// Public Pages (Lazy Loaded)
const Home = lazy(() => import("./pages/Home"));
const Services = lazy(() => import("./pages/Services"));
const Gallery = lazy(() => import("./pages/Gallery"));
const Contact = lazy(() => import("./pages/Contact"));
const NotFound = lazy(() => import("./pages/NotFound"));
const LoginPage = lazy(() => import("./pages/LoginPage"));

// B2B SEO Landing Pages (Lazy Loaded)
const LaserCuttingBangalore = lazy(() => import("./pages/seo/LaserCuttingBangalore"));
const CncBendingBangalore = lazy(() => import("./pages/seo/CncBendingBangalore"));
const PowderCoatingBangalore = lazy(() => import("./pages/seo/PowderCoatingBangalore"));
const LaserMarkingBangalore = lazy(() => import("./pages/seo/LaserMarkingBangalore"));
const WeldingServicesBangalore = lazy(() => import("./pages/seo/WeldingServicesBangalore"));
const CustomMetalFabricationBangalore = lazy(() => import("./pages/seo/CustomMetalFabricationBangalore"));

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

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
        <ScrollToTop />
        <Suspense fallback={<PageLoader />}>
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
              <Route path="/powder-coating-bangalore" element={<PowderCoatingBangalore />} />
              <Route path="/laser-marking-bangalore" element={<LaserMarkingBangalore />} />
              <Route path="/welding-services-bangalore" element={<WeldingServicesBangalore />} />
              <Route path="/custom-metal-fabrication-bangalore" element={<CustomMetalFabricationBangalore />} />
            </Route>

            {/* Auth Route */}
            <Route path="/login" element={<LoginPage />} />

            {/* Protected Admin Routes */}
            <Route path="/admin" element={<ProtectedRoute />}>
              <Route element={<AdminLayout />}>
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

            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;

