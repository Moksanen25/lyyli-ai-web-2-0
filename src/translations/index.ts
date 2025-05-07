
import { en } from './en';
import { fi } from './fi';

// Type for supported languages
export type SupportedLanguage = 'en' | 'fi';

// Export the languages object
export const languages = {
  en,
  fi
};

// Type for the translations structure
export type TranslationsType = typeof en;
