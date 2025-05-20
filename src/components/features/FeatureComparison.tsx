
import React from 'react';
import { useLanguage } from '@/hooks/useLanguage';
import { Check } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';

const FeatureComparison = () => {
  const { t, safeTr } = useLanguage();
  const navigate = useNavigate();
  
  // Use safeTr to ensure we always have a fallback
  const getFeatureText = (key: string): string => {
    const directTranslation = t(`features.comparison.${key}`);
    
    // If direct translation works, use it
    if (directTranslation && directTranslation !== `features.comparison.${key}`) {
      return directTranslation;
    }
    
    // Try pricing features path as fallback
    const pricingTranslation = t(`pricing.features.${key}`);
    if (pricingTranslation && pricingTranslation !== `pricing.features.${key}`) {
      return pricingTranslation;
    }
    
    // Last resort fallback
    return safeTr(`features.comparison.${key}`, key);
  };
  
  const planFeatures = [
    {
      feature: getFeatureText('aiAgents'),
      starter: '1',
      professional: '1',
      enterprise: getFeatureText('custom'),
    },
    {
      feature: getFeatureText('userAccounts'),
      starter: '1',
      professional: '3',
      enterprise: getFeatureText('unlimited'),
    },
    {
      feature: getFeatureText('integrations'),
      starter: '3',
      professional: '6',
      enterprise: getFeatureText('unlimited'),
    },
    {
      feature: getFeatureText('images'),
      starter: false,
      professional: '50/month',
      enterprise: getFeatureText('custom'),
    },
    {
      feature: getFeatureText('workflows'),
      starter: false,
      professional: true,
      enterprise: true,
    },
  ];
  
  // Get translated titles with fallbacks
  const comparisonTitle = safeTr('features.comparison.title', 'Feature Comparison');
  const comparisonDescription = safeTr('features.comparison.description', 'Compare our features to find the best plan for your needs');
  const featureColumnLabel = safeTr('features.comparison.feature', 'Feature');
  const ctaText = safeTr('features.comparison.cta', 'View Full Pricing');
  
  return (
    <div className="bg-muted py-16 md:py-24 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            {comparisonTitle}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {comparisonDescription}
          </p>
        </div>
        
        <div className="overflow-x-auto pb-4">
          <table className="w-full max-w-4xl mx-auto bg-card rounded-xl shadow-md">
            <thead>
              <tr className="border-b">
                <th className="p-4 text-left">{featureColumnLabel}</th>
                <th className="p-4 text-center">{safeTr('pricing.starter.name', 'Starter')}</th>
                <th className="p-4 text-center">{safeTr('pricing.professional.name', 'Professional')}</th>
                <th className="p-4 text-center">{safeTr('pricing.enterprise.name', 'Enterprise')}</th>
              </tr>
            </thead>
            <tbody>
              {planFeatures.map((item, index) => (
                <tr key={index} className="border-b last:border-0">
                  <td className="p-4 font-medium">{item.feature}</td>
                  <td className="p-4 text-center">
                    {typeof item.starter === 'boolean' ? 
                      (item.starter ? <Check className="h-5 w-5 text-primary mx-auto" /> : '-') : 
                      item.starter}
                  </td>
                  <td className="p-4 text-center">
                    {typeof item.professional === 'boolean' ? 
                      (item.professional ? <Check className="h-5 w-5 text-primary mx-auto" /> : '-') : 
                      item.professional}
                  </td>
                  <td className="p-4 text-center">
                    {typeof item.enterprise === 'boolean' ? 
                      (item.enterprise ? <Check className="h-5 w-5 text-primary mx-auto" /> : '-') : 
                      item.enterprise}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        
        <div className="text-center mt-10">
          <Button 
            size="lg" 
            onClick={() => navigate('/full/pricing')}
            className="animate-fade-in"
          >
            {ctaText}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default FeatureComparison;
