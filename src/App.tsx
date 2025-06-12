
import React, { useEffect } from 'react';
import { Route, Routes, Navigate, useLocation } from 'react-router-dom';
import Index from '@/pages/Index';
import About from '@/pages/About';
import Contact from '@/pages/Contact';
import Features from '@/pages/Features';
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
      {/* Default route redirects to /full */}
      <Route path="/" element={<Navigate to="/full" replace />} />
      
      {/* English routes */}
      <Route path="/full" element={<Index />} />
      <Route path="/full/about" element={<About />} />
      <Route path="/full/contact" element={<Contact />} />
      <Route path="/full/features" element={<Features />} />
      <Route path="/full/pricing" element={<Pricing />} />
      <Route path="/full/case-studies" element={<CaseStudies />} />
      <Route path="/full/blog" element={<BlogList />} />
      <Route path="/full/blog/:slug" element={<BlogPost />} />
      <Route path="/privacy" element={<PrivacyPolicy />} />
      <Route path="/cookies" element={<CookiePolicy />} />
      
      {/* Finnish routes */}
      <Route path="/fi" element={<Navigate to="/fi/full" replace />} />
      <Route path="/fi/full" element={<Index />} />
      <Route path="/fi/full/about" element={<About />} />
      <Route path="/fi/full/contact" element={<Contact />} />
      <Route path="/fi/full/features" element={<Features />} />
      <Route path="/fi/full/pricing" element={<Pricing />} />
      <Route path="/fi/full/case-studies" element={<CaseStudies />} />
      <Route path="/fi/full/blog" element={<BlogList />} />
      <Route path="/fi/full/blog/:slug" element={<BlogPost />} />
      <Route path="/fi/waitlist" element={<Waitlist />} />
      <Route path="/fi/privacy" element={<PrivacyPolicy />} />
      <Route path="/fi/cookies" element={<CookiePolicy />} />
      <Route path="/fi/jci-members" element={<JCIMembers />} />
      
      {/* Hidden pages - not linked in navigation */}
      <Route path="/jci-members" element={<JCIMembers />} />
      
      {/* Explicit waitlist route */}
      <Route path="/waitlist" element={<Waitlist />} />
      
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
