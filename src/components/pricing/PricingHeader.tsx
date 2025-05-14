
import React from 'react';
import PricingToggle from './PricingToggle';
import { useLanguage } from '@/contexts/LanguageContext';

interface PricingHeaderProps {
  billingPeriod: 'monthly' | 'yearly';
  setBillingPeriod: (period: 'monthly' | 'yearly') => void;
}

const PricingHeader: React.FC<PricingHeaderProps> = ({ billingPeriod, setBillingPeriod }) => {
  const { t } = useLanguage();
  
  return (
    <div className="text-center mb-12">
      <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">{t('pricing.title')}</h1>
      <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
        {t('pricing.subtitle')}
      </p>
      
      <PricingToggle 
        billingPeriod={billingPeriod} 
        setBillingPeriod={setBillingPeriod} 
      />
    </div>
  );
};

export default PricingHeader;
