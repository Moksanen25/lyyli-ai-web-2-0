
import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Check } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';

const FeatureComparison = () => {
  const { t } = useLanguage();
  const navigate = useNavigate();
  
  const planFeatures = [
    {
      feature: t('features.comparison.aiAgents'),
      starter: '1',
      professional: '1',
      enterprise: t('features.comparison.custom'),
    },
    {
      feature: t('features.comparison.userAccounts'),
      starter: '1',
      professional: '3',
      enterprise: t('features.comparison.unlimited'),
    },
    {
      feature: t('features.comparison.integrations'),
      starter: '3',
      professional: '6',
      enterprise: t('features.comparison.unlimited'),
    },
    {
      feature: t('features.comparison.images'),
      starter: false,
      professional: '50/month',
      enterprise: t('features.comparison.custom'),
    },
    {
      feature: t('features.comparison.workflows'),
      starter: false,
      professional: true,
      enterprise: true,
    },
  ];
  
  return (
    <div className="bg-muted py-16 md:py-24 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            {t('features.comparison.title')}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {t('features.comparison.description')}
          </p>
        </div>
        
        <div className="overflow-x-auto pb-4">
          <table className="w-full max-w-4xl mx-auto bg-card rounded-xl shadow-md">
            <thead>
              <tr className="border-b">
                <th className="p-4 text-left">{t('features.comparison.feature')}</th>
                <th className="p-4 text-center">{t('pricing.starter.name')}</th>
                <th className="p-4 text-center">{t('pricing.professional.name')}</th>
                <th className="p-4 text-center">{t('pricing.enterprise.name')}</th>
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
            {t('features.comparison.cta')}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default FeatureComparison;
