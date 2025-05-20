
import React, { useState, useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { useLanguage } from '@/hooks/useLanguage';
import FeatureHero from '@/components/features/FeatureHero';
import ComplianceBadges from '@/components/ComplianceBadges';
import FeatureDetails from '@/components/features/FeatureDetails';
import IntegrationShowcase from '@/components/features/IntegrationShowcase';
import CustomerQuotes from '@/components/features/CustomerQuotes';
import FeatureComparison from '@/components/features/FeatureComparison';
import FeatureFAQ from '@/components/features/FeatureFAQ';
import CTASection from '@/components/CTASection';

/**
 * Features page component
 */
const Features = () => {
  const { t, safeTr, featuresT, customerSegmentsT, language, verifyLanguageCompleteness } = useLanguage();
  
  // Check translations on mount
  useEffect(() => {
    if (import.meta.env.DEV) {
      console.log('Features page mounted, language:', language);
      verifyLanguageCompleteness?.();
    }
  }, [language, verifyLanguageCompleteness]);
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-16">
        {/* Hero Section */}
        <FeatureHero />
        
        {/* Trust Indicators */}
        <ComplianceBadges 
          title={safeTr('compliance.title', "Compliance and Security")}
          description={safeTr('compliance.subtitle', "Our platform meets the highest security and compliance standards")}
        />
        
        {/* General Features */}
        <FeatureDetails />
        <IntegrationShowcase />
        
        {/* Customer Quotes */}
        <CustomerQuotes />
        
        {/* Feature Comparison */}
        <FeatureComparison />
        
        {/* FAQ */}
        <FeatureFAQ />
        
        {/* CTA */}
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default Features;
