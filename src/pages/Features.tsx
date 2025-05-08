
import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FeatureHero from '@/components/features/FeatureHero';
import FeatureDetails from '@/components/features/FeatureDetails';
import FeatureComparison from '@/components/features/FeatureComparison';
import IntegrationShowcase from '@/components/features/IntegrationShowcase';
import CustomerQuotes from '@/components/features/CustomerQuotes';
import FeatureFAQ from '@/components/features/FeatureFAQ';
import CTASection from '@/components/CTASection';
import ComplianceBadges from '@/components/ComplianceBadges';

/**
 * Features page component
 * Structure follows a logical flow for enterprise decision-making:
 * 1. Hero section (overview of features)
 * 2. Trust indicators (compliance badges)
 * 3. Detailed feature information
 * 4. Social proof and integrations
 * 5. Comparison and FAQ
 * 6. Call to action
 */
const Features = () => {
  const { t } = useLanguage();
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <FeatureHero />
        <ComplianceBadges 
          title="Enterprise-Ready Technology"
          description="Our platform meets the highest security and compliance standards"
        />
        <FeatureDetails />
        <IntegrationShowcase />
        <CustomerQuotes />
        <FeatureComparison />
        <FeatureFAQ />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default Features;
