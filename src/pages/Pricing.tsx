'use client';


import React, { useState } from 'react';
import { useLanguage } from '@/hooks/useLanguage';
import { Button } from '@/components/ui/button';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import PricingHeader from '@/components/pricing/PricingHeader';
import PricingCard from '@/components/pricing/PricingCard';
import FeatureComparison from '@/components/pricing/FeatureComparison';
import PricingFAQ from '@/components/pricing/PricingFAQ';
import ComplianceBadges from '@/components/ComplianceBadges';
import ROICalculator from '@/components/ROICalculator';
import { usePricingData } from '@/components/pricing/PricingData';

const PricingPage = () => {
  const { t } = useLanguage();
  const [billingPeriod, setBillingPeriod] = useState<'monthly' | 'yearly'>('monthly');
  const [showFullComparison, setShowFullComparison] = useState(false);
  
  // Get pricing data from the custom hook
  const { pricingTiers, comparisonFeatures } = usePricingData();
  
  // Define discount rate for yearly billing
  const yearlyDiscountRate = 0.8; // 20% discount

  // Enhanced SEO metadata with more descriptive content
  // const pageDescription = language === 'fi'
  //   ? 'Lyyli.ai:n selkeä hinnoittelu yrityksesi tarpeisiin. Kokeile ROI-laskuriamme ja näe kuinka paljon voit säästää tekoälyavusteisella viestinnällä.'
  //   : 'Clear pricing for Lyyli.ai\'s AI communication platform. Try our ROI calculator and see how much you can save with AI-assisted communication.';

  return (
    <div className="min-h-screen flex flex-col">

      <Navbar />
      <div className="container-padding py-8 md:py-16 lg:py-24 flex-grow animate-fade-in">
        <PricingHeader 
          billingPeriod={billingPeriod} 
          setBillingPeriod={setBillingPeriod} 
        />
        
        {/* Main pricing cards - improved layout for 5 cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 md:gap-6 max-w-8xl mx-auto">
          {pricingTiers.map((tier) => (
            <div key={tier.name} className={`${tier.accent ? 'xl:col-span-1 lg:col-span-1 sm:col-span-2' : ''}`}>
              <PricingCard
                {...tier}
                billingPeriod={billingPeriod}
                yearlyDiscountRate={yearlyDiscountRate}
              />
            </div>
          ))}
        </div>
        
        {/* Toggle for detailed comparison */}
        <div className="mt-8 md:mt-12 text-center px-2 sm:px-0">
          <Button 
            variant="outline" 
            onClick={() => setShowFullComparison(!showFullComparison)}
            className="w-full sm:w-auto min-h-[44px] touch-manipulation"
          >
            {showFullComparison ? t('pricing.hideComparison') : t('pricing.showComparison')}
          </Button>
        </div>
        
        {/* Full comparison table */}
        <FeatureComparison 
          comparisonFeatures={comparisonFeatures}
          showFullComparison={showFullComparison}
        />

        {/* ROI Calculator with proper scroll margin for anchor links */}
        <div id="roi-calculator" className="scroll-mt-24 pt-4 md:pt-0">
          <ROICalculator />
        </div>
        
        {/* Compliance badges */}
        <ComplianceBadges className="my-8 md:my-12" />
        
        {/* FAQ section */}
        <PricingFAQ />
      </div>
      <Footer />
    </div>
  );
};

export default PricingPage;
