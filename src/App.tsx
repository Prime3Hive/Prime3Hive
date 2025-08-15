import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Projects from "./pages/Projects";
import Admin from "./pages/Admin";
import Contact from "./pages/Contact";
import Services from "./pages/Services";
import Team from "./pages/Team";
import Careers from "./pages/Careers"; 
import Blog from "./pages/Blog";
import Documentation from "./pages/Documentation";
import Support from "./pages/Support";
import NotFound from "./pages/NotFound";
import WebDevelopment from "./pages/services/WebDevelopment";
import UIUXDesign from "./pages/services/UIUXDesign";
import PerformanceOptimization from "./pages/services/PerformanceOptimization";
import SecuritySolutions from "./pages/services/SecuritySolutions";
import DigitalStrategy from "./pages/services/DigitalStrategy";
import AIIntegration from "./pages/services/AIIntegration";

const queryClient = new QueryClient();

console.log('App.tsx: Creating App component...');
const App = () => {
  console.log('App.tsx: App component rendering...');
  return (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/services" element={<Services />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/team" element={<Team />} />
            <Route path="/careers" element={<Careers />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/documentation" element={<Documentation />} />
            <Route path="/support" element={<Support />} />
            <Route path="/admin" element={<Admin />} />
          <Route path="/services/web-development" element={<WebDevelopment />} />
          <Route path="/services/ui-ux-design" element={<UIUXDesign />} />
          <Route path="/services/performance-optimization" element={<PerformanceOptimization />} />
          <Route path="/services/security-solutions" element={<SecuritySolutions />} />
          <Route path="/services/digital-strategy" element={<DigitalStrategy />} />
          <Route path="/services/ai-integration" element={<AIIntegration />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
  );
};

export default App;
