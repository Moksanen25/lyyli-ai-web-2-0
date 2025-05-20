
export interface SafeTranslationOptions {
  debug?: boolean;
  fallback?: string;
  forceLanguage?: 'en' | 'fi';
  interpolation?: Record<string, string | number>;
  namespace?: string;
}
