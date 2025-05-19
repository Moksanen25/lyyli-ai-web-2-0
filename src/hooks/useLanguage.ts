
import { useContext } from 'react';
import { LanguageContext } from '@/contexts/LanguageContext';
import { useTranslation } from './useTranslation';
import { useSafeTranslation } from '@/utils/safeTranslation';

// Custom hook to use the language context combined with translation
export const useLanguage = () => {
  const context = useContext(LanguageContext);
  
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  
  // Use the enhanced translation hooks
  const { t, language } = useTranslation();
  const safeTranslations = useSafeTranslation();
  
  return {
    ...context,
    t,
    language,
    ...safeTranslations
  };
};
