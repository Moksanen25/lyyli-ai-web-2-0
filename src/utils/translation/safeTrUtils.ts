
import { useTranslation } from '@/hooks/useTranslation';

/**
 * Hook for the safeTr utility function
 */
export const useSafeTrTranslation = () => {
  const { t, language } = useTranslation();
  
  // Safe translate function that never returns undefined or crashes
  const safeTr = (key: string, defaultValue: string = ''): string => {
    if (!key) return defaultValue;
    
    try {
      const translated = t(key);
      // If translation exists and isn't just returning the key itself
      if (translated && translated !== key) {
        return translated;
      }
      
      // Try with features prefix if it's a feature key
      if (!key.startsWith('features.') && key.includes('.')) {
        const featureKey = `features.${key}`;
        const featureTranslated = t(featureKey);
        if (featureTranslated && featureTranslated !== featureKey) {
          return featureTranslated;
        }
      }
      
      // Try with customerSegments prefix
      if (!key.startsWith('customerSegments.')) {
        const segmentKey = `customerSegments.${key}`;
        const segmentTranslated = t(segmentKey);
        if (segmentTranslated && segmentTranslated !== segmentKey) {
          return segmentTranslated;
        }
      }
      
      // Finally return default or key as last resort
      return defaultValue || key;
    } catch (error) {
      console.error(`Error in safeTr for key: ${key}`, error);
      return defaultValue || key;
    }
  };
  
  return { safeTr, language };
};
