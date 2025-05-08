
import React from 'react';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import FeaturesSection from '@/components/FeaturesSection';
import CustomerSegments from '@/components/CustomerSegments';
import EnterpriseCallout from '@/components/EnterpriseCallout';
import TestimonialsSection from '@/components/TestimonialsSection';
import CaseStudies from '@/components/CaseStudies';
import ComplianceBadges from '@/components/ComplianceBadges';
import CTASection from '@/components/CTASection';
import Footer from '@/components/Footer';
import CookieConsent from '@/components/CookieConsent';

/**
 * Main landing page component
 * Structure:
 * 1. Hero section (primary message)
 * 2. Trust indicators (compliance badges)
 * 3. Main content (features, customer segments, testimonials)
 * 4. Enterprise-specific content
 * 5. Call to action
 * 6. Footer and cookie consent
 */
const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        {/* Primary messaging */}
        <HeroSection />
        <ComplianceBadges />
        
        {/* Main content sections */}
        <FeaturesSection />
        <CustomerSegments />
        
        {/* Social proof and enterprise focus */}
        <EnterpriseCallout />
        <TestimonialsSection />
        <CaseStudies />
        
        {/* Final conversion point */}
        <CTASection />
      </main>
      <Footer />
      <CookieConsent />
    </div>
  );
};

export default Index;
