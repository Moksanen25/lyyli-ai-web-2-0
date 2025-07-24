
import React, { useEffect } from 'react';
import { Route, Routes, Navigate, useLocation } from 'react-router-dom';
import Index from '@/pages/Index';
import About from '@/pages/About';
import Contact from '@/pages/Contact';
import Features from '@/pages/Features';
import Security from '@/pages/Security';
import Pricing from '@/pages/Pricing';
import CaseStudies from '@/pages/CaseStudies';
import NotFound from '@/pages/NotFound';
import Waitlist from '@/pages/Waitlist';
import JCIMembers from '@/pages/JCIMembers';
import PrivacyPolicy from '@/pages/PrivacyPolicy';
import CookiePolicy from '@/pages/CookiePolicy';
import FloatingChat from '@/components/chat/FloatingChat';
import { Toaster } from '@/components/ui/toaster';
import { LanguageProvider } from '@/contexts/LanguageContext';
import TranslationManager from '@/components/dev/TranslationManager';
import BlogList from '@/pages/BlogList';
import BlogPost from '@/pages/BlogPost';
import ExecutiveSummary from '@/pages/ExecutiveSummary';

function AppRoutes() {
  const location = useLocation();
  
  // Debug routing in development
  useEffect(() => {
    if (import.meta.env.DEV) {
      console.log('Current route:', location.pathname);
    }
  }, [location]);

  // Add scroll to top on route change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <Routes>
      {/* English routes */}
      <Route path="/" element={<Index />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/features" element={<Features />} />
      <Route path="/security" element={<Security />} />
      <Route path="/pricing" element={<Pricing />} />
      <Route path="/case-studies" element={<CaseStudies />} />
      <Route path="/blog" element={<BlogList />} />
      <Route path="/blog/:slug" element={<BlogPost />} />
      <Route path="/privacy" element={<PrivacyPolicy />} />
      <Route path="/cookies" element={<CookiePolicy />} />
      <Route path="/waitlist" element={<Waitlist />} />
      <Route path="/jci-members" element={<JCIMembers />} />
      <Route path="/executive-summary" element={<ExecutiveSummary />} />
      
      {/* Finnish routes */}
      <Route path="/fi" element={<Index />} />
      <Route path="/fi/about" element={<About />} />
      <Route path="/fi/contact" element={<Contact />} />
      <Route path="/fi/features" element={<Features />} />
      <Route path="/fi/security" element={<Security />} />
      <Route path="/fi/pricing" element={<Pricing />} />
      <Route path="/fi/case-studies" element={<CaseStudies />} />
      <Route path="/fi/blog" element={<BlogList />} />
      <Route path="/fi/blog/:slug" element={<BlogPost />} />
      <Route path="/fi/waitlist" element={<Waitlist />} />
      <Route path="/fi/privacy" element={<PrivacyPolicy />} />
      <Route path="/fi/cookies" element={<CookiePolicy />} />
      <Route path="/fi/jci-members" element={<JCIMembers />} />
      <Route path="/fi/executive-summary" element={<ExecutiveSummary />} />
      
      {/* Swedish routes */}
      <Route path="/sv" element={<Index />} />
      <Route path="/sv/about" element={<About />} />
      <Route path="/sv/contact" element={<Contact />} />
      <Route path="/sv/features" element={<Features />} />
      <Route path="/sv/security" element={<Security />} />
      <Route path="/sv/pricing" element={<Pricing />} />
      <Route path="/sv/case-studies" element={<CaseStudies />} />
      <Route path="/sv/blog" element={<BlogList />} />
      <Route path="/sv/blog/:slug" element={<BlogPost />} />
      <Route path="/sv/waitlist" element={<Waitlist />} />
      <Route path="/sv/privacy" element={<PrivacyPolicy />} />
      <Route path="/sv/cookies" element={<CookiePolicy />} />
      <Route path="/sv/jci-members" element={<JCIMembers />} />
      <Route path="/sv/executive-summary" element={<ExecutiveSummary />} />
      
      {/* Catch-all route */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

function App() {
  if (import.meta.env.DEV) {
    console.log('App component rendering');
  }
  
  return (
    <LanguageProvider>
      <AppRoutes />
      <FloatingChat />
      <Toaster />
      {import.meta.env.DEV && <TranslationManager />}
    </LanguageProvider>
  );
}

export default App;
