
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
import { Helmet } from 'react-helmet';

/**
 * Features page component
 */
const Features = () => {
  const { t, featuresT, language } = useLanguage();
  
  // SEO metadata with proper translations
  const pageTitle = language === 'fi' ? 'Ominaisuudet - Lyyli.ai' : 'Features - Lyyli.ai';
  const pageDescription = language === 'fi'
    ? 'Tutustu Lyyli.ai:n tehokkaisiin ominaisuuksiin, jotka tekevät siitä johtavan tekoälyviestintäalustan yrityksesi tarpeisiin.'
    : 'Discover Lyyli.ai\'s powerful features that make it the leading AI communication platform for your business needs.';
  
  return (
    <div className="min-h-screen flex flex-col">
      <Helmet>
        <title>{pageTitle}</title>
        <meta name="description" content={pageDescription} />
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={pageDescription} />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={pageTitle} />
        <meta name="twitter:description" content={pageDescription} />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
        <link rel="canonical" href={`https://lyyli.ai/${language === 'fi' ? 'fi/' : ''}features`} />
      </Helmet>
      
      <Navbar />
      <main className="flex-grow pt-16">
        {/* Hero Section */}
        <FeatureHero />
        
        {/* Trust Indicators */}
        <ComplianceBadges 
          title={featuresT('compliance.title', { fallback: "Compliance and Security" })}
          description={featuresT('compliance.subtitle', { fallback: "Our platform meets the highest security and compliance standards" })}
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
