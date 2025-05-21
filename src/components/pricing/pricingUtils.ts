
import { useLanguage } from '@/hooks/useLanguage';
import { SafeTranslationOptions } from '@/utils/translation/types';

export const usePricingTranslations = () => {
  const { t, safeT } = useLanguage();
  
  // Translate feature keys to their proper names
  const translateFeature = (featureKey: string) => {
    // Try direct pricing translation
    const directTranslation = t(`pricing.features.${featureKey}`);
    if (directTranslation !== `pricing.features.${featureKey}`) {
      return directTranslation;
    }
    
    // Try with features namespace as fallback
    const featureTranslation = t(`features.${featureKey}`);
    if (featureTranslation !== `features.${featureKey}`) {
      return featureTranslation;
    }
    
    // Last resort fallback to the key itself
    return featureKey;
  };

  return {
    translateFeature
  };
};
