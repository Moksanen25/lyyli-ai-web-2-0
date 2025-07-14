
import { en } from './en';
import { fi } from './fi';
import { sv } from './sv';

// Type for supported languages
export type SupportedLanguage = 'en' | 'fi' | 'sv';

// Export the languages object
export const languages = {
  en,
  fi,
  sv
};

// Type for the translations structure
export type TranslationsType = typeof en;
