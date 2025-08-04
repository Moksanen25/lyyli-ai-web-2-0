'use client';


import React from 'react';
import { useLanguage } from '@/hooks/useLanguage';
import { Check, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useRouter } from 'next/navigation';

const FeatureComparison = () => {
  const { featuresT, language } = useLanguage();
  
  // Define the feature comparison based on current pricing structure
  const planFeatures = [
    {
      feature: featuresT('comparison.users') || 'Users',
      free: '1',
      starter: '1', 
      growth: '3',
      professional: '10',
      enterprise: featuresT('comparison.custom') || 'Custom',
    },
    {
      feature: featuresT('comparison.conversations') || 'Conversations',
      free: '20/week',
      starter: '50/week',
      growth: '100/week', 
      professional: featuresT('comparison.unlimited') || 'Unlimited',
      enterprise: featuresT('comparison.unlimited') || 'Unlimited',
    },
    {
      feature: featuresT('comparison.posts') || 'Posts',
      free: '5/week',
      starter: '10/week',
      growth: featuresT('comparison.unlimited') || 'Unlimited',
      professional: featuresT('comparison.unlimited') || 'Unlimited',
      enterprise: featuresT('comparison.unlimited') || 'Unlimited',
    },
    {
      feature: featuresT('comparison.integrations') || 'Integrations',
      free: '2',
      starter: '3',
      growth: featuresT('comparison.unlimited') || 'Unlimited',
      professional: featuresT('comparison.unlimited') || 'Unlimited',
      enterprise: featuresT('comparison.unlimited') || 'Unlimited',
    },
    {
      feature: featuresT('comparison.aiAgents') || 'AI Agents',
      free: '1',
      starter: '1',
      growth: '1',
      professional: '3',
      enterprise: featuresT('comparison.custom') || 'Custom',
    },
    {
      feature: featuresT('comparison.slack') || 'Slack Integration',
      free: false,
      starter: false,
      growth: false,
      professional: true,
      enterprise: true,
    },
    {
      feature: featuresT('comparison.teams') || 'Teams Integration',
      free: false,
      starter: false,
      growth: true,
      professional: true,
      enterprise: true,
    },
    {
      feature: featuresT('comparison.customization') || 'Customization',
      free: false,
      starter: true,
      growth: true,
      professional: true,
      enterprise: true,
    },
    {
      feature: featuresT('comparison.support') || 'Support',
      free: false,
      starter: false,
      growth: 'Chat 8-20',
      professional: 'Chat 8-20 + Phone',
      enterprise: featuresT('comparison.custom') || 'Custom',
    },
  ];
  
  // Get translated titles and labels
  const comparisonTitle = featuresT('comparison.title') || 'Compare Plans';
  const comparisonDescription = featuresT('comparison.description') || 'Find the perfect plan for your organization\'s needs.';
  const featureColumnLabel = featuresT('comparison.feature') || 'Feature';
  const ctaText = featuresT('comparison.cta') || 'View Full Pricing';
  
  const renderFeatureValue = (value: string | boolean) => {
    if (typeof value === 'boolean') {
      return value ? (
        <Check className="h-5 w-5 text-green-500 mx-auto" aria-label="Included" />
      ) : (
        <X className="h-5 w-5 text-muted-foreground mx-auto" aria-label="Not included" />
      );
    }
    return value;
  };
  
  return (
    <div className="bg-muted py-16 md:py-24 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold mb-4 hyphens-none">
            {comparisonTitle}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto hyphens-none">
            {comparisonDescription}
          </p>
        </div>
        
        <div className="overflow-x-auto pb-4">
          <table className="w-full max-w-6xl mx-auto bg-card rounded-xl shadow-md">
            <thead>
              <tr className="border-b">
                <th className="p-4 text-left hyphens-none">{featureColumnLabel}</th>
                <th className="p-4 text-center hyphens-none">Free</th>
                <th className="p-4 text-center hyphens-none">Starter</th>
                <th className="p-4 text-center hyphens-none">Growth</th>
                <th className="p-4 text-center hyphens-none">Professional</th>
                <th className="p-4 text-center hyphens-none">Enterprise</th>
              </tr>
            </thead>
            <tbody>
              {planFeatures.map((item, index) => (
                <tr key={index} className="border-b last:border-0">
                  <td className="p-4 font-medium hyphens-none">{item.feature}</td>
                  <td className="p-4 text-center hyphens-none">
                    {renderFeatureValue(item.free)}
                  </td>
                  <td className="p-4 text-center hyphens-none">
                    {renderFeatureValue(item.starter)}
                  </td>
                  <td className="p-4 text-center hyphens-none">
                    {renderFeatureValue(item.growth)}
                  </td>
                  <td className="p-4 text-center hyphens-none">
                    {renderFeatureValue(item.professional)}
                  </td>
                  <td className="p-4 text-center hyphens-none">
                    {renderFeatureValue(item.enterprise)}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        
        <div className="text-center mt-10">
          <Button 
            size="lg" 
            onClick={() => useRouter().push(language === 'fi' ? '/fi/pricing' : '/pricing')}
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
