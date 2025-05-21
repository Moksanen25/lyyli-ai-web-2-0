
import React from 'react';
import { CircleCheck, CircleDollarSign, ListCheck } from "lucide-react";
import { PricingTier, Feature } from './types';
import { useLanguage } from '@/hooks/useLanguage';
import { usePricingTranslations } from './pricingUtils';

export const usePricingData = () => {
  const { t, featuresT } = useLanguage();
  const { translateFeature } = usePricingTranslations();
  
  // Define pricing tiers with translations
  const pricingTiers: PricingTier[] = [
    {
      name: t('pricing.starter.name'),
      monthly: 199,
      description: t('pricing.starter.description'),
      primaryFeatures: [
        translateFeature('oneAiAgent'),
        translateFeature('webAppAccess'),
        translateFeature('upToThreeIntegrations'),
        translateFeature('singleUser'),
        translateFeature('basicSupport')
      ],
      cta: t('pricing.starter.cta'),
      accent: false,
      icon: <CircleDollarSign className="h-8 w-8 text-primary/80" />
    },
    {
      name: t('pricing.professional.name'),
      monthly: 599,
      description: t('pricing.professional.description'),
      primaryFeatures: [
        translateFeature('everythingInStarter'),
        translateFeature('slackTeams'),
        translateFeature('aiImageCreation'),
        translateFeature('upToSixIntegrations'),
        translateFeature('threeUsers'),
        translateFeature('prioritySupport')
      ],
      secondaryFeatures: [
        translateFeature('additionalImagesCost'),
        translateFeature('advancedAnalytics'),
        translateFeature('customWorkflows')
      ],
      cta: t('pricing.professional.cta'),
      accent: true,
      icon: <ListCheck className="h-8 w-8 text-white" />
    },
    {
      name: t('pricing.enterprise.name'),
      monthly: null,
      description: t('pricing.enterprise.description'),
      primaryFeatures: [
        translateFeature('everythingInPro'),
        translateFeature('unlimitedIntegrations'),
        translateFeature('customAiImages'),
        translateFeature('unlimitedUsers'),
        translateFeature('dedicatedAccount'),
        translateFeature('customOnboarding')
      ],
      cta: t('pricing.enterprise.cta'),
      accent: false,
      icon: <CircleCheck className="h-8 w-8 text-primary/80" />
    }
  ];
  
  // Define comparison features for the detailed table
  const comparisonFeatures: Feature[] = [
    { name: 'agents', starter: '1', professional: '1', enterprise: t('pricing.features.custom') },
    { name: 'users', starter: '1', professional: '3', enterprise: t('pricing.features.unlimited') },
    { name: 'integrations', starter: '3', professional: '6', enterprise: t('pricing.features.unlimited') },
    { name: 'webApp', starter: true, professional: true, enterprise: true },
    { name: 'slack', starter: false, professional: true, enterprise: true },
    { name: 'teams', starter: false, professional: true, enterprise: true },
    { name: 'images', starter: false, professional: featuresT('comparison.imagesPerMonth'), enterprise: t('pricing.features.custom') },
    { name: 'additionalImages', starter: 'N/A', professional: '0.35€', enterprise: t('pricing.features.custom') },
    { name: 'workflows', starter: false, professional: true, enterprise: true },
    { name: 'api', starter: false, professional: false, enterprise: true },
    { name: 'whiteLabel', starter: false, professional: false, enterprise: true },
    { name: 'analytics', starter: false, professional: true, enterprise: true },
    { name: 'prioritySupport', starter: false, professional: true, enterprise: true },
    { name: 'accountManager', starter: false, professional: false, enterprise: true },
    { name: 'customOnboarding', starter: false, professional: false, enterprise: true },
    { name: 'sla', starter: false, professional: false, enterprise: true },
  ];
  
  return {
    pricingTiers,
    comparisonFeatures
  };
};
