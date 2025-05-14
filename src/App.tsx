
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Index from '@/pages/Index';
import About from '@/pages/About';
import Contact from '@/pages/Contact';
import Features from '@/pages/Features';
import Pricing from '@/pages/Pricing';
import CaseStudies from '@/pages/CaseStudies';
import NotFound from '@/pages/NotFound';
import FloatingChat from '@/components/chat/FloatingChat';
import { Toaster } from '@/components/ui/toaster';
import { LanguageProvider } from '@/contexts/LanguageContext';

function App() {
  return (
    <LanguageProvider>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/features" element={<Features />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/case-studies" element={<CaseStudies />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <FloatingChat />
      <Toaster />
    </LanguageProvider>
  );
}

export default App;
