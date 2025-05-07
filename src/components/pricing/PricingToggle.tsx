
import React from 'react';
import { Switch } from '@/components/ui/switch';
import { Badge } from '@/components/ui/badge';

interface PricingToggleProps {
  billingPeriod: 'monthly' | 'yearly';
  setBillingPeriod: (period: 'monthly' | 'yearly') => void;
}

const PricingToggle: React.FC<PricingToggleProps> = ({ 
  billingPeriod, 
  setBillingPeriod 
}) => {
  return (
    <div className="flex items-center justify-center mt-8 mb-4 space-x-4">
      <span className={`text-sm font-medium ${billingPeriod === 'monthly' ? 'text-primary' : 'text-muted-foreground'}`}>
        Monthly
      </span>
      <Switch 
        checked={billingPeriod === 'yearly'} 
        onCheckedChange={(checked) => setBillingPeriod(checked ? 'yearly' : 'monthly')}
      />
      <span className="flex items-center text-sm font-medium">
        <span className={billingPeriod === 'yearly' ? 'text-primary' : 'text-muted-foreground'}>Yearly</span>
        {billingPeriod === 'yearly' && (
          <Badge variant="outline" className="ml-2 bg-accent text-accent-foreground">
            Save 20%
          </Badge>
        )}
      </span>
    </div>
  );
};

export default PricingToggle;
