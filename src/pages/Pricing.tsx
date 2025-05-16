
import React, { useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { CircleCheck, CircleDollarSign, ListCheck } from "lucide-react";
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import PricingHeader from '@/components/pricing/PricingHeader';
import PricingCard from '@/components/pricing/PricingCard';
import FeatureComparison from '@/components/pricing/FeatureComparison';
import PricingFAQ from '@/components/pricing/PricingFAQ';

// Define pricing data
interface Feature {
  name: string;
  starter: boolean | string;
  professional: boolean | string;
  enterprise: boolean | string;
}

interface PricingTier {
  name: string;
  monthly: number;
  description: string;
  primaryFeatures: string[];
  secondaryFeatures?: string[];
  cta: string;
  accent: boolean;
  icon: React.ReactNode;
}

const PricingPage = () => {
  const { t } = useLanguage();
  const [billingPeriod, setBillingPeriod] = useState<'monthly' | 'yearly'>('monthly');
  const [showFullComparison, setShowFullComparison] = useState(false);
  
  // Define discount rate for yearly billing
  const yearlyDiscountRate = 0.8; // 20% discount
  
  // Define pricing tiers
  const pricingTiers: PricingTier[] = [
    {
      name: 'Starter',
      monthly: 199,
      description: 'Perfect for small and medium enterprises just getting started.',
      primaryFeatures: [
        'One AI agent',
        'Web app access',
        'Up to 3 integrations',
        'Single user account',
        'Basic support'
      ],
      cta: 'Get Started',
      accent: false,
      icon: <CircleDollarSign className="h-8 w-8 text-primary/80" />
    },
    {
      name: 'Professional',
      monthly: 599,
      description: 'Everything you need for a growing business with multiple needs.',
      primaryFeatures: [
        'Everything in Starter',
        'Native Slack & Teams apps',
        'AI image creation (50/month)',
        'Up to 6 integrations',
        'Three user accounts',
        'Priority support'
      ],
      secondaryFeatures: [
        'Additional images at 0.35€ each',
        'Advanced analytics',
        'Custom workflows'
      ],
      cta: 'Start Free Trial',
      accent: true,
      icon: <ListCheck className="h-8 w-8 text-white" />
    },
    {
      name: 'Enterprise',
      monthly: null,
      description: 'Custom solutions for large organizations with advanced requirements.',
      primaryFeatures: [
        'Everything in Professional',
        'Unlimited integrations',
        'Custom AI image allocation',
        'Unlimited user accounts',
        'Dedicated account manager',
        'Custom onboarding'
      ],
      cta: 'Contact Us',
      accent: false,
      icon: <CircleCheck className="h-8 w-8 text-primary/80" />
    }
  ];
  
  // Define comparison features for the detailed table
  const comparisonFeatures: Feature[] = [
    { name: 'AI Agents', starter: '1', professional: '1', enterprise: 'Custom' },
    { name: 'User Accounts', starter: '1', professional: '3', enterprise: 'Unlimited' },
    { name: 'Integrations', starter: '3', professional: '6', enterprise: 'Unlimited' },
    { name: 'Web App Access', starter: true, professional: true, enterprise: true },
    { name: 'Slack Integration', starter: false, professional: true, enterprise: true },
    { name: 'Teams Integration', starter: false, professional: true, enterprise: true },
    { name: 'AI Image Creation', starter: false, professional: '50/month', enterprise: 'Custom' },
    { name: 'Additional Images Cost', starter: 'N/A', professional: '0.35€', enterprise: 'Custom' },
    { name: 'Custom Workflows', starter: false, professional: true, enterprise: true },
    { name: 'API Access', starter: false, professional: false, enterprise: true },
    { name: 'White Labeling', starter: false, professional: false, enterprise: true },
    { name: 'Advanced Analytics', starter: false, professional: true, enterprise: true },
    { name: 'Priority Support', starter: false, professional: true, enterprise: true },
    { name: 'Dedicated Account Manager', starter: false, professional: false, enterprise: true },
    { name: 'Custom Onboarding', starter: false, professional: false, enterprise: true },
    { name: 'SLA', starter: false, professional: false, enterprise: true },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="container-padding py-12 md:py-24 flex-grow animate-fade-in">
        <PricingHeader 
          billingPeriod={billingPeriod} 
          setBillingPeriod={setBillingPeriod} 
        />
        
        {/* Main pricing cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
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
        <div className="mt-12 text-center">
          <Button 
            variant="outline" 
            onClick={() => setShowFullComparison(!showFullComparison)}
          >
            {showFullComparison ? 'Hide' : 'Show'} Full Feature Comparison
          </Button>
        </div>
        
        {/* Full comparison table */}
        <FeatureComparison 
          comparisonFeatures={comparisonFeatures}
          showFullComparison={showFullComparison}
        />
        
        {/* FAQ teaser */}
        <PricingFAQ />
      </div>
      <Footer />
    </div>
  );
};

export default PricingPage;
