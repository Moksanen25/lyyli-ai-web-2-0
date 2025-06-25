
import React from 'react';
import { CircleCheck, CircleDollarSign, ListCheck, Zap, TrendingUp } from "lucide-react";
import { PricingTier, Feature } from './types';
import { useLanguage } from '@/hooks/useLanguage';
import { usePricingTranslations } from './pricingUtils';

export const usePricingData = () => {
  const { t, featuresT } = useLanguage();
  const { translateFeature } = usePricingTranslations();
  
  // Define pricing tiers with new structure
  const pricingTiers: PricingTier[] = [
    {
      name: t('pricing.free.name'),
      monthly: 0,
      description: t('pricing.free.description'),
      primaryFeatures: [
        translateFeature('maxOneUser'),
        translateFeature('maxTwentyConversations'),
        translateFeature('maxFivePosts'),
        translateFeature('webInterface'),
        translateFeature('maxTwoIntegrations'),
        translateFeature('maxOneAgent')
      ],
      secondaryFeatures: [
        translateFeature('limitedCustomization'),
        translateFeature('communicationSuggestions3x'),
        translateFeature('guidedOnboarding199'),
        translateFeature('userGuides')
      ],
      cta: t('pricing.free.cta'),
      accent: false,
      icon: <Zap className="h-8 w-8 text-primary/80" />
    },
    {
      name: t('pricing.starter.name'),
      monthly: 29,
      description: t('pricing.starter.description'),
      primaryFeatures: [
        translateFeature('maxOneUser'),
        translateFeature('maxFiftyConversations'),
        translateFeature('maxTenPosts'),
        translateFeature('webInterface'),
        translateFeature('maxThreeIntegrations'),
        translateFeature('maxOneAgent')
      ],
      secondaryFeatures: [
        translateFeature('extensiveCustomization'),
        translateFeature('communicationSuggestions1x'),
        translateFeature('guidedOnboarding199'),
        translateFeature('userGuides')
      ],
      cta: t('pricing.starter.cta'),
      accent: false,
      icon: <CircleDollarSign className="h-8 w-8 text-primary/80" />
    },
    {
      name: t('pricing.growth.name'),
      monthly: 199,
      description: t('pricing.growth.description'),
      primaryFeatures: [
        translateFeature('userManagement3'),
        translateFeature('additionalUsers100'),
        translateFeature('maxHundredConversations'),
        translateFeature('unlimitedPosts'),
        translateFeature('allIntegrations'),
        translateFeature('maxOneAgent')
      ],
      secondaryFeatures: [
        translateFeature('additionalAgents50'),
        translateFeature('customCommunicationSuggestions'),
        translateFeature('chatSupport8to20'),
        translateFeature('guidedOnboardingFreeAnnual')
      ],
      cta: t('pricing.growth.cta'),
      accent: true,
      icon: <TrendingUp className="h-8 w-8 text-white" />
    },
    {
      name: t('pricing.professional.name'),
      monthly: 599,
      description: t('pricing.professional.description'),
      primaryFeatures: [
        translateFeature('userManagement10'),
        translateFeature('additionalUsers100'),
        translateFeature('unlimitedConversations'),
        translateFeature('unlimitedPosts'),
        translateFeature('webSlackTeamsApps'),
        translateFeature('allIntegrations'),
        translateFeature('maxThreeAgents')
      ],
      secondaryFeatures: [
        translateFeature('additionalAgents50'),
        translateFeature('customCommunicationSuggestions'),
        translateFeature('phoneSupport9to15'),
        translateFeature('chatSupport8to20'),
        translateFeature('guidedOnboardingIncluded')
      ],
      cta: t('pricing.professional.cta'),
      accent: false,
      icon: <ListCheck className="h-8 w-8 text-primary/80" />
    },
    {
      name: t('pricing.enterprise.name'),
      monthly: null,
      description: t('pricing.enterprise.description'),
      primaryFeatures: [
        translateFeature('customInstallation'),
        translateFeature('projectSpecificPricing'),
        translateFeature('allIntegrationsWithAPI'),
        translateFeature('customFeatures'),
        translateFeature('dedicatedSupport'),
        translateFeature('customOnboarding')
      ],
      cta: t('pricing.enterprise.cta'),
      accent: false,
      icon: <CircleCheck className="h-8 w-8 text-primary/80" />
    }
  ];
  
  // Define comparison features for the detailed table with all 5 tiers
  const comparisonFeatures: Feature[] = [
    { name: 'price', free: '0€', starter: '29€', growth: '199€', professional: '599€', enterprise: t('pricing.features.custom') },
    { name: 'users', free: '1', starter: '1', growth: '3', professional: '10', enterprise: t('pricing.features.custom') },
    { name: 'conversations', free: '20/week', starter: '50/week', growth: '100/week', professional: t('pricing.features.unlimited'), enterprise: t('pricing.features.unlimited') },
    { name: 'posts', free: '5/week', starter: '10/week', growth: t('pricing.features.unlimited'), professional: t('pricing.features.unlimited'), enterprise: t('pricing.features.unlimited') },
    { name: 'integrations', free: '2', starter: '3', growth: t('pricing.features.unlimited'), professional: t('pricing.features.unlimited'), enterprise: t('pricing.features.unlimited') },
    { name: 'agents', free: '1', starter: '1', growth: '1', professional: '3', enterprise: t('pricing.features.custom') },
    { name: 'webApp', free: true, starter: true, growth: true, professional: true, enterprise: true },
    { name: 'slack', free: false, starter: false, growth: false, professional: true, enterprise: true },
    { name: 'teams', free: false, starter: false, growth: true, professional: true, enterprise: true },
    { name: 'customization', free: false, starter: true, growth: true, professional: true, enterprise: true },
    { name: 'communicationSuggestions', free: '3x/week', starter: '1x/day', growth: t('pricing.features.custom'), professional: t('pricing.features.custom'), enterprise: t('pricing.features.custom') },
    { name: 'onboarding', free: '199€', starter: '199€', growth: '199€ (free annual)', professional: t('pricing.features.included'), enterprise: t('pricing.features.custom') },
    { name: 'support', free: false, starter: false, growth: 'Chat 8-20', professional: 'Chat 8-20', enterprise: t('pricing.features.custom') },
    { name: 'phoneSupport', free: false, starter: false, growth: false, professional: '9-15', enterprise: true },
    { name: 'apiAccess', free: false, starter: false, growth: false, professional: false, enterprise: true },
  ];
  
  return {
    pricingTiers,
    comparisonFeatures
  };
};
