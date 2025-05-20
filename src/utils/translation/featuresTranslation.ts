
import { useSafeTranslationBase } from './safeTranslationBase';
import { SafeTranslationOptions } from './types';

/**
 * Hook for features-specific translation functionality
 */
export const useFeaturesTranslation = () => {
  const { safeT, t, language } = useSafeTranslationBase();
  
  /**
   * Special function for features content with improved namespace handling
   */
  const featuresT = (key: string, options: SafeTranslationOptions = {}) => {
    // If key already has features prefix, don't add it again
    if (key.startsWith('features.')) {
      return safeT(key, options);
    }
    
    // Add features namespace
    return safeT(`features.${key}`, { 
      ...options,
      namespace: 'features'
    });
  };
  
  return { featuresT, t, language };
};
