
import React from 'react';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import FeaturesSection from '@/components/FeaturesSection';
import EnterpriseCallout from '@/components/EnterpriseCallout';
import TestimonialsSection from '@/components/TestimonialsSection';
import CaseStudies from '@/components/CaseStudies';
import ROICalculator from '@/components/ROICalculator';
import ComplianceBadges from '@/components/ComplianceBadges';
import CTASection from '@/components/CTASection';
import Footer from '@/components/Footer';
import CookieConsent from '@/components/CookieConsent';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <HeroSection />
        <ComplianceBadges />
        <FeaturesSection />
        <EnterpriseCallout />
        <TestimonialsSection />
        <CaseStudies />
        <ROICalculator />
        <CTASection />
      </main>
      <Footer />
      <CookieConsent />
    </div>
  );
};

export default Index;
