
import { useLanguage } from '@/hooks/useLanguage';

export const usePricingTranslations = () => {
  const { t } = useLanguage();
  
  // Translate feature keys to their proper names
  const translateFeature = (featureKey: string) => {
    return t(`pricing.features.${featureKey}`) !== `pricing.features.${featureKey}` 
      ? t(`pricing.features.${featureKey}`) 
      : featureKey;
  };

  return {
    translateFeature
  };
};
