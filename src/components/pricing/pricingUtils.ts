
import { useLanguage } from '@/hooks/useLanguage';
import { SafeTranslationOptions } from '@/utils/translation/types';

export const usePricingTranslations = () => {
  const { t, safeT, featuresT } = useLanguage();
  
  // Translate feature keys to their proper names
  const translateFeature = (featureKey: string) => {
    // Try direct pricing translation
    const directTranslation = t(`pricing.features.${featureKey}`);
    if (directTranslation !== `pricing.features.${featureKey}`) {
      return directTranslation;
    }
    
    // Try features pricing namespace as second option
    const featuresPricingTranslation = featuresT(`pricing.features.${featureKey}`);
    if (featuresPricingTranslation !== `features.pricing.features.${featureKey}` && 
        featuresPricingTranslation !== `pricing.features.${featureKey}`) {
      return featuresPricingTranslation;
    }
    
    // Try with features namespace as fallback
    const featureTranslation = featuresT(featureKey);
    if (featureTranslation !== `features.${featureKey}` && 
        featureTranslation !== featureKey) {
      return featureTranslation;
    }
    
    // Last resort fallback to the key itself
    return featureKey;
  };

  return {
    translateFeature
  };
};
