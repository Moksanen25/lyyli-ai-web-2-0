
import { useTranslation } from '@/hooks/useTranslation';

/**
 * Hook for translation debugging utilities
 */
export const useDebugTranslation = () => {
  const { t, language } = useTranslation();
  
  // Debug function to help diagnose translation issues
  const debugTranslation = (key: string): void => {
    if (import.meta.env.DEV) {
      try {
        const translated = t(key);
        console.log(`Translation Debug - Key: "${key}", Result: "${translated || 'MISSING'}", Language: ${language}`);
        
        if (translated === key) {
          console.warn(`Translation missing for key "${key}" in language "${language}"`);
        }
      } catch (error) {
        console.error(`Translation error for key "${key}":`, error);
      }
    }
  };
  
  return { debugTranslation };
};
