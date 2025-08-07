import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { HashRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from 'react-helmet-async';
import Index from "./pages/Index";
import ArtworkDetail from "./pages/ArtworkDetail";
import MessageFromCeo from "./pages/MessageFromCeo";
import NotFound from "./pages/NotFound";
import { LanguageProvider } from "./hooks/use-language";
import { FontSizeProvider } from "./hooks/use-font-size";
import ScrollToTop from "./components/ScrollToTop";

const queryClient = new QueryClient();

const App = () => (
  <HelmetProvider>
    <QueryClientProvider client={queryClient}>
      <LanguageProvider>
        <FontSizeProvider>
          <TooltipProvider>
            <Toaster />
            <Sonner />
            <HashRouter>
              <ScrollToTop />
              <Routes>
                <Route path="/" element={<Index />} />
                <Route path="/artwork/:id" element={<ArtworkDetail />} />
                <Route path="/message-from-ceo" element={<MessageFromCeo />} />
                <Route path="/gallery" element={<Index />} /> {/* Redirect old gallery route to home */}
                <Route path="*" element={<NotFound />} />
              </Routes>
            </HashRouter>
          </TooltipProvider>
        </FontSizeProvider>
      </LanguageProvider>
    </QueryClientProvider>
  </HelmetProvider>
);

export default App;
