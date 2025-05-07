
import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FeatureHero from '@/components/features/FeatureHero';
import FeatureDetails from '@/components/features/FeatureDetails';
import FeatureComparison from '@/components/features/FeatureComparison';
import CTASection from '@/components/CTASection';

const Features = () => {
  const { t } = useLanguage();
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <FeatureHero />
        <FeatureDetails />
        <FeatureComparison />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default Features;
