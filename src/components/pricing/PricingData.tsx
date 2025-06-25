
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
  
  // Define comparison features for the detailed table
  const comparisonFeatures: Feature[] = [
    { name: 'price', starter: '0€', professional: '29€', enterprise: '199€' },
    { name: 'users', starter: '1', professional: '1', enterprise: '3' },
    { name: 'conversations', starter: '20/week', professional: '50/week', enterprise: '100/week' },
    { name: 'posts', starter: '5/week', professional: '10/week', enterprise: t('pricing.features.unlimited') },
    { name: 'integrations', starter: '2', professional: '3', enterprise: t('pricing.features.unlimited') },
    { name: 'agents', starter: '1', professional: '1', enterprise: '1' },
    { name: 'webApp', starter: true, professional: true, enterprise: true },
    { name: 'slack', starter: true, professional: true, enterprise: true },
    { name: 'teams', starter: false, professional: false, enterprise: true },
    { name: 'customization', starter: false, professional: true, enterprise: true },
    { name: 'communicationSuggestions', starter: '3x/week', professional: '1x/day', enterprise: t('pricing.features.custom') },
    { name: 'onboarding', starter: '199€', professional: '199€', enterprise: '199€ (free annual)' },
    { name: 'support', starter: false, professional: false, enterprise: 'Chat 8-20' },
    { name: 'phoneSupport', starter: false, professional: false, enterprise: false },
    { name: 'apiAccess', starter: false, professional: false, enterprise: false },
  ];
  
  return {
    pricingTiers,
    comparisonFeatures
  };
};
