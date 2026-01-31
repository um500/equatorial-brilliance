import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Navbar from "@/components/Navbar";
import WhatsAppButton from "@/components/WhatsAppButton";
import CallButton from "@/components/CallButton";
import ScrollToTop from "@/components/ScrollToTop";
import LandingPage from "@/pages/LandingPage";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <div className="min-h-screen">
        <Navbar />
        <LandingPage />
        <WhatsAppButton />
        <CallButton />
        <ScrollToTop />
      </div>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
