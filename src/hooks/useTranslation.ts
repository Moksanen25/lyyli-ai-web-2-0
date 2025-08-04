'use client';

import { useContext } from 'react';
import { LanguageContext } from '@/contexts/LanguageContext';
import { languages, SupportedLanguage } from '@/translations';

export const useTranslation = (): { t: (key: string) => string; language: string } => {
  const context = useContext(LanguageContext);
  
  if (context === undefined) {
    throw new Error('useTranslation must be used within a LanguageProvider');
  }
  
  const { language } = context;
  
  const t = (key: string): string => {
    try {
      // Simple translation lookup
      const keys = key.split('.');
      let result: any = languages[language as SupportedLanguage] || languages.en;
      
      for (const k of keys) {
        if (result && typeof result === 'object' && k in result) {
          result = result[k];
        } else {
          // Fallback to English
          result = languages.en;
          for (const fallbackKey of keys) {
            if (result && typeof result === 'object' && fallbackKey in result) {
              result = result[fallbackKey];
            } else {
              return key; // Return key if translation not found
            }
          }
          break;
        }
      }
      
      return typeof result === 'string' ? result : key;
    } catch (error) {
      console.error('Translation error:', error);
      return key;
    }
  };

  return { t, language };
};
