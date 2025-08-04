
import { SafeTranslationOptions } from './types';

export const createSafeTrTranslation = (safeT: (key: string, options?: SafeTranslationOptions) => string) => {
  /**
   * Version of safeT that supports string interpolation
   * @param key Translation key
   * @param options Translation options
   * @returns Interpolated string
   */
  const safeTr = (key: string, interpolation?: Record<string, string | number>, options?: SafeTranslationOptions): string => {
    try {
      let translatedText = safeT(key, options);
      
      if (!interpolation) {
        return translatedText;
      }
      
      // Simple string template replacement
      Object.entries(interpolation).forEach(([key, value]) => {
        const placeholder = `{${key}}`;
        translatedText = translatedText.replace(placeholder, String(value));
      });
      
      return translatedText;
    } catch (e) {
      console.error(`Translation error in safeTr for key ${key}:`, e);
      return key;
    }
  };
  
  return { safeTr };
};

/**
 * This is just a placeholder hook to provide type definitions
 * The actual implementation is in useSafeTranslation.ts to avoid circular dependencies
 */
export const useSafeTrTranslation = () => {
  // This will be replaced by the actual implementation in the useSafeTranslation hook
  const safeTr = (key: string): string => {
    console.error('safeTr should not be called directly from useSafeTrTranslation');
    return key;
  };
  
  return { safeTr };
};
