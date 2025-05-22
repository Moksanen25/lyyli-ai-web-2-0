
import { useLanguage } from '@/hooks/useLanguage';
import { SafeTranslationOptions } from './types';

export const useSafeTrTranslation = () => {
  const { safeT } = useLanguage();
  
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
