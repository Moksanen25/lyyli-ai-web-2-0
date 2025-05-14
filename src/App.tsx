
import React from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
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
import TranslationManager from '@/components/dev/TranslationManager';

function App() {
  return (
    <LanguageProvider>
      <Routes>
        {/* Default route to waitlist */}
        <Route path="/" element={<Waitlist />} />
        
        {/* English routes */}
        <Route path="/full" element={<Index />} />
        <Route path="/full/about" element={<About />} />
        <Route path="/full/contact" element={<Contact />} />
        <Route path="/full/features" element={<Features />} />
        <Route path="/full/pricing" element={<Pricing />} />
        <Route path="/full/case-studies" element={<CaseStudies />} />
        
        {/* Finnish routes */}
        <Route path="/fi" element={<Waitlist />} />
        <Route path="/fi/full" element={<Index />} />
        <Route path="/fi/full/about" element={<About />} />
        <Route path="/fi/full/contact" element={<Contact />} />
        <Route path="/fi/full/features" element={<Features />} />
        <Route path="/fi/full/pricing" element={<Pricing />} />
        <Route path="/fi/full/case-studies" element={<CaseStudies />} />
        
        {/* Catch-all route */}
        <Route path="*" element={<NotFound />} />
      </Routes>
      <FloatingChat />
      <Toaster />
      {import.meta.env.DEV && <TranslationManager />}
    </LanguageProvider>
  );
}

export default App;
