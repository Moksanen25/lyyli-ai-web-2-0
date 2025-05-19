
import { useContext } from 'react';
import { LanguageContext } from '@/contexts/LanguageContext';
import { useTranslation } from './useTranslation';

// Custom hook to use the language context combined with translation
export const useLanguage = () => {
  const context = useContext(LanguageContext);
  const { t, language } = useTranslation();
  
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  
  return {
    ...context,
    t,
    language
  };
};
