import React from 'react';
import { Label } from '@/components/ui/label';
import { Switch } from '@/components/ui/switch';
import { useLanguage } from '@/hooks/useLanguage';

const PricingToggle: React.FC<{ billingPeriod: 'monthly' | 'yearly'; setBillingPeriod: (period: 'monthly' | 'yearly') => void }> = ({ billingPeriod, setBillingPeriod }) => {
  const { t } = useLanguage();
  
  return (
    <div className="flex items-center justify-center space-x-2">
      <span className="text-sm text-muted-foreground">{t('pricing.monthly')}</span>
      <Switch 
        id="billing-period"
        checked={billingPeriod === 'yearly'}
        onCheckedChange={(checked) => setBillingPeriod(checked ? 'yearly' : 'monthly')}
      />
      <Label htmlFor="billing-period" className="text-sm text-muted-foreground">
        {t('pricing.yearly')}
      </Label>
    </div>
  );
};

export default PricingToggle;
