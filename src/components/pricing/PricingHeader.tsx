import React from 'react';
import { Badge } from '@/components/ui/badge';
import { useLanguage } from '@/hooks/useLanguage';
import PricingToggle from './PricingToggle';

const PricingHeader = ({ billingPeriod, setBillingPeriod }: { billingPeriod: 'monthly' | 'yearly', setBillingPeriod: (period: 'monthly' | 'yearly') => void }) => {
  const { t } = useLanguage();
  
  return (
    <div className="text-center mb-10 md:mb-16">
      <Badge className="bg-secondary/80 border-none text-white">{t('pricing.tagline')}</Badge>
      <h2 className="text-3xl md:text-5xl font-bold mb-4">{t('pricing.title')}</h2>
      <p className="text-lg md:text-xl text-primary/80 max-w-3xl mx-auto">
        {t('pricing.subtitle')}
      </p>
      <PricingToggle billingPeriod={billingPeriod} setBillingPeriod={setBillingPeriod} />
    </div>
  );
};

export default PricingHeader;
