
import { useTranslation } from '@/hooks/useTranslation';
import { languages } from '@/translations';
import { SafeTranslationOptions } from './types';

/**
 * Base safe translation function with multiple fallback strategies
 */
export const createSafeTranslator = (t: (key: string) => string, language: string) => {
  return (key: string, options: SafeTranslationOptions = {}) => {
    try {
      if (!key) return options.fallback || ''; 
      
      // Allow forcing a specific language for translation
      const currentLanguage = options.forceLanguage || language;
      
      // Get translation or fallback to key
      let translation = t(key) || '';
      
      // If translation is same as key, it probably failed - try fallback
      if (translation === key && options.fallback) {
        translation = options.fallback;
      }
      
      // Handle interpolation for variables like {amount}
      if (options.interpolation && translation) {
        Object.entries(options.interpolation).forEach(([interpKey, value]) => {
          translation = translation.replace(new RegExp(`{${interpKey}}`, 'g'), String(value));
        });
      }
      
      // Debug output in development
      if (options.debug && import.meta.env.DEV) {
        console.log(`[safeT] Key: ${key}, Result: "${translation}", Language: ${currentLanguage}`);
        
        if (translation === key) {
          console.warn(`[safeT] Translation likely missing for: ${key}`);
        }
      }
      
      return translation || options.fallback || key;
    } catch (error) {
      console.error(`[safeT] Error translating key: "${key}"`, error);
      return options.fallback || key;
    }
  };
};

/**
 * Hook to safely access translations with fallbacks
 * to prevent UI crashes due to missing translation keys
 */
export const useSafeTranslationBase = () => {
  const { t, language } = useTranslation();
  const safeT = createSafeTranslator(t, language);
  
  return {
    safeT,
    t,
    language,
    isFinnish: language === 'fi'
  };
};
