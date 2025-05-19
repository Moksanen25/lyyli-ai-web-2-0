
import React, { useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Helmet } from 'react-helmet';
import { Button } from '@/components/ui/button';
import { CircleCheck, CircleDollarSign, ListCheck } from "lucide-react";
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import PricingHeader from '@/components/pricing/PricingHeader';
import PricingCard from '@/components/pricing/PricingCard';
import FeatureComparison from '@/components/pricing/FeatureComparison';
import PricingFAQ from '@/components/pricing/PricingFAQ';
import ComplianceBadges from '@/components/ComplianceBadges';
import ROICalculator from '@/components/ROICalculator';
import { useIsMobile } from '@/hooks/use-mobile';
import { useSafeTranslation } from '@/utils/safeTranslation';

// Define pricing data
interface Feature {
  name: string;
  starter: boolean | string;
  professional: boolean | string;
  enterprise: boolean | string;
}

interface PricingTier {
  name: string;
  monthly: number | null;
  description: string;
  primaryFeatures: string[];
  secondaryFeatures?: string[];
  cta: string;
  accent: boolean;
  icon: React.ReactNode;
}

const PricingPage = () => {
  const { t, language } = useLanguage();
  const { pricingT } = useSafeTranslation();
  const [billingPeriod, setBillingPeriod] = useState<'monthly' | 'yearly'>('monthly');
  const [showFullComparison, setShowFullComparison] = useState(false);
  const isMobile = useIsMobile();
  
  // Define discount rate for yearly billing
  const yearlyDiscountRate = 0.8; // 20% discount

  // SEO metadata
  const pageTitle = language === 'fi' ? 'Hinnoittelu - Lyyli.ai' : 'Pricing - Lyyli.ai';
  const pageDescription = language === 'fi'
    ? 'Lyyli.ai:n selkeä hinnoittelu yrityksesi tarpeisiin. Kokeile ROI-laskuriamme ja näe kuinka paljon voit säästää tekoälyavusteisella viestinnällä.'
    : 'Clear pricing for Lyyli.ai\'s AI communication platform. Try our ROI calculator and see how much you can save with AI-assisted communication.';
  
  // Get translated features
  const translateFeature = (featureKey: string) => {
    return t(`pricing.features.${featureKey}`) !== `pricing.features.${featureKey}` 
      ? t(`pricing.features.${featureKey}`) 
      : featureKey;
  };
  
  // Define pricing tiers with translations
  const pricingTiers: PricingTier[] = [
    {
      name: 'Starter',
      monthly: 199,
      description: t('pricing.starter.description'),
      primaryFeatures: [
        translateFeature('oneAiAgent'),
        translateFeature('webApp'),
        translateFeature('upToThreeIntegrations'),
        translateFeature('singleUser'),
        translateFeature('basicSupport')
      ],
      cta: t('pricing.starter.cta'),
      accent: false,
      icon: <CircleDollarSign className="h-8 w-8 text-primary/80" />
    },
    {
      name: 'Professional',
      monthly: 599,
      description: t('pricing.professional.description'),
      primaryFeatures: [
        translateFeature('everythingInStarter'),
        translateFeature('slackTeams'),
        translateFeature('aiImageCreation'),
        translateFeature('upToSixIntegrations'),
        translateFeature('threeUsers'),
        translateFeature('prioritySupport')
      ],
      secondaryFeatures: [
        translateFeature('additionalImagesCost'),
        translateFeature('advancedAnalytics'),
        translateFeature('customWorkflows')
      ],
      cta: t('pricing.professional.cta'),
      accent: true,
      icon: <ListCheck className="h-8 w-8 text-white" />
    },
    {
      name: 'Enterprise',
      monthly: null,
      description: t('pricing.enterprise.description'),
      primaryFeatures: [
        translateFeature('everythingInPro'),
        translateFeature('unlimitedIntegrations'),
        translateFeature('customAiImages'),
        translateFeature('unlimitedUsers'),
        translateFeature('dedicatedAccount'),
        translateFeature('customOnboarding')
      ],
      cta: t('pricing.enterprise.cta'),
      accent: false,
      icon: <CircleCheck className="h-8 w-8 text-primary/80" />
    }
  ];
  
  // Define comparison features for the detailed table
  const comparisonFeatures: Feature[] = [
    { name: 'agents', starter: '1', professional: '1', enterprise: t('pricing.features.custom') },
    { name: 'users', starter: '1', professional: '3', enterprise: t('pricing.features.unlimited') },
    { name: 'integrations', starter: '3', professional: '6', enterprise: t('pricing.features.unlimited') },
    { name: 'webApp', starter: true, professional: true, enterprise: true },
    { name: 'slack', starter: false, professional: true, enterprise: true },
    { name: 'teams', starter: false, professional: true, enterprise: true },
    { name: 'images', starter: false, professional: '50/month', enterprise: t('pricing.features.custom') },
    { name: 'additionalImages', starter: 'N/A', professional: '0.35€', enterprise: t('pricing.features.custom') },
    { name: 'workflows', starter: false, professional: true, enterprise: true },
    { name: 'api', starter: false, professional: false, enterprise: true },
    { name: 'whiteLabel', starter: false, professional: false, enterprise: true },
    { name: 'analytics', starter: false, professional: true, enterprise: true },
    { name: 'prioritySupport', starter: false, professional: true, enterprise: true },
    { name: 'accountManager', starter: false, professional: false, enterprise: true },
    { name: 'customOnboarding', starter: false, professional: false, enterprise: true },
    { name: 'sla', starter: false, professional: false, enterprise: true },
  ];

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
        <link rel="canonical" href={`https://lyyli.ai/${language === 'fi' ? 'fi/' : ''}pricing`} />
      </Helmet>
      
      <Navbar />
      <div className="container-padding py-8 md:py-16 lg:py-24 flex-grow animate-fade-in">
        <PricingHeader 
          billingPeriod={billingPeriod} 
          setBillingPeriod={setBillingPeriod} 
        />
        
        {/* Main pricing cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 max-w-6xl mx-auto">
          {pricingTiers.map((tier) => (
            <PricingCard
              key={tier.name}
              {...tier}
              billingPeriod={billingPeriod}
              yearlyDiscountRate={yearlyDiscountRate}
            />
          ))}
        </div>
        
        {/* Toggle for detailed comparison */}
        <div className="mt-8 md:mt-12 text-center">
          <Button 
            variant="outline" 
            onClick={() => setShowFullComparison(!showFullComparison)}
            className="w-full sm:w-auto"
          >
            {showFullComparison ? t('pricing.hideComparison') : t('pricing.showComparison')}
          </Button>
        </div>
        
        {/* Full comparison table */}
        <FeatureComparison 
          comparisonFeatures={comparisonFeatures}
          showFullComparison={showFullComparison}
        />

        {/* ROI Calculator - Added back */}
        <div id="roi-calculator" className="scroll-mt-24">
          <ROICalculator />
        </div>
        
        {/* Compliance badges */}
        <ComplianceBadges className="my-8 md:my-12" />
        
        {/* FAQ teaser */}
        <PricingFAQ />
      </div>
      <Footer />
    </div>
  );
};

export default PricingPage;
