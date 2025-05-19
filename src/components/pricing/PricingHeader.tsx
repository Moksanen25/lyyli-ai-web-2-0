
import React from 'react';
import PricingToggle from './PricingToggle';
import { useLanguage } from '@/contexts/LanguageContext';

interface PricingHeaderProps {
  billingPeriod: 'monthly' | 'yearly';
  setBillingPeriod: (period: 'monthly' | 'yearly') => void;
}

const PricingHeader: React.FC<PricingHeaderProps> = ({ billingPeriod, setBillingPeriod }) => {
  const { t } = useLanguage();
  
  // Use pricing.pricingHeader if available (for Finnish), otherwise fallback to regular keys
  const title = t('pricing.pricingHeader.title') !== 'pricing.pricingHeader.title' 
    ? t('pricing.pricingHeader.title') 
    : t('pricing.title');
    
  const subtitle = t('pricing.pricingHeader.subtitle') !== 'pricing.pricingHeader.subtitle' 
    ? t('pricing.pricingHeader.subtitle') 
    : t('pricing.subtitle');
  
  return (
    <div className="text-center mb-12">
      <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4" id="pricing-title">{title}</h1>
      <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-6">
        {subtitle}
      </p>
      
      <PricingToggle 
        billingPeriod={billingPeriod} 
        setBillingPeriod={setBillingPeriod} 
        aria-labelledby="pricing-title"
      />
    </div>
  );
};

export default PricingHeader;
