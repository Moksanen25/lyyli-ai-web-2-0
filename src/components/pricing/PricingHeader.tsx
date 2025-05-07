
import React from 'react';
import PricingToggle from './PricingToggle';

interface PricingHeaderProps {
  billingPeriod: 'monthly' | 'yearly';
  setBillingPeriod: (period: 'monthly' | 'yearly') => void;
}

const PricingHeader: React.FC<PricingHeaderProps> = ({ billingPeriod, setBillingPeriod }) => {
  return (
    <div className="text-center mb-12">
      <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">Simple, Transparent Pricing</h1>
      <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
        Choose the plan that works best for your business needs. All plans include our core AI functionality.
      </p>
      
      <PricingToggle 
        billingPeriod={billingPeriod} 
        setBillingPeriod={setBillingPeriod} 
      />
    </div>
  );
};

export default PricingHeader;
