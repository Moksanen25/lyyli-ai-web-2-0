
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
import SolutionFinderChat from '@/components/solution-finder/SolutionFinderChat';

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
  
  // Get safe translations with fallbacks for solution finder section
  const solutionsTitle = featuresT('solutionFinder.sectionTitle', { 
    fallback: 'Find the Perfect Solution for Your Industry' 
  });
  
  const solutionsDescription = featuresT('solutionFinder.sectionDescription', { 
    fallback: 'Chat with our AI assistant to discover how Lyyli can help solve your specific industry challenges.' 
  });
  
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
        
        {/* NEW: Solution Finder Chat Section (replacing the Customer Segments section) */}
        <section id="solution-finder" className="py-16 bg-primary/5">
          <div className="container-padding container mx-auto text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">{solutionsTitle}</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">{solutionsDescription}</p>
          </div>
          
          <div className="container-padding container mx-auto">
            <SolutionFinderChat />
          </div>
        </section>
        
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
