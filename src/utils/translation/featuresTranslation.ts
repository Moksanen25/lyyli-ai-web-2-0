
import { useSafeTranslationBase } from './safeTranslationBase';
import { SafeTranslationOptions } from './types';

/**
 * Hook for features translation with namespace handling
 */
export const useFeaturesTranslation = () => {
  const { safeT, t } = useSafeTranslationBase();
  
  /**
   * Special function for features translations
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
  
  return { featuresT, t };
};
