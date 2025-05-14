
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Index from '@/pages/Index';
import About from '@/pages/About';
import Contact from '@/pages/Contact';
import Features from '@/pages/Features';
import Pricing from '@/pages/Pricing';
import CaseStudies from '@/pages/CaseStudies';
import NotFound from '@/pages/NotFound';
import Waitlist from '@/pages/Waitlist';
import FloatingChat from '@/components/chat/FloatingChat';
import { Toaster } from '@/components/ui/toaster';
import { LanguageProvider } from '@/contexts/LanguageContext';

function App() {
  return (
    <LanguageProvider>
      <Routes>
        {/* Waitlist is the main landing page now */}
        <Route path="/" element={<Waitlist />} />
        
        {/* Original site moved behind /full path */}
        <Route path="/full" element={<Index />} />
        <Route path="/full/about" element={<About />} />
        <Route path="/full/contact" element={<Contact />} />
        <Route path="/full/features" element={<Features />} />
        <Route path="/full/pricing" element={<Pricing />} />
        <Route path="/full/case-studies" element={<CaseStudies />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <FloatingChat />
      <Toaster />
    </LanguageProvider>
  );
}

export default App;
