
import { describe, it, expect } from 'vitest';
import { getLanguageFromPath, buildLocalizedPath } from '../languageUtils';

describe('Translation Utils', () => {
  describe('getLanguageFromPath', () => {
    it('returns "fi" for Finnish paths', () => {
      expect(getLanguageFromPath('/fi/full/pricing')).toBe('fi');
      expect(getLanguageFromPath('/fi/')).toBe('fi');
      expect(getLanguageFromPath('/fi')).toBe('fi');
    });

    it('returns "en" for English paths', () => {
      expect(getLanguageFromPath('/full/pricing')).toBe('en');
      expect(getLanguageFromPath('/pricing')).toBe('en');
      expect(getLanguageFromPath('/')).toBe('en');
      expect(getLanguageFromPath('')).toBe('en');
    });

    it('handles edge cases', () => {
      expect(getLanguageFromPath('/fi/test/path')).toBe('fi');
      expect(getLanguageFromPath('/en/test/path')).toBe('en');
      expect(getLanguageFromPath('/other/path')).toBe('en');
    });
  });

  describe('buildLocalizedPath', () => {
    it('builds Finnish paths correctly', () => {
      expect(buildLocalizedPath('/full/pricing', 'fi')).toBe('/fi/full/pricing');
      expect(buildLocalizedPath('/pricing', 'fi')).toBe('/fi/pricing');
      expect(buildLocalizedPath('/', 'fi')).toBe('/fi/');
    });

    it('builds English paths correctly', () => {
      expect(buildLocalizedPath('/full/pricing', 'en')).toBe('/full/pricing');
      expect(buildLocalizedPath('/pricing', 'en')).toBe('/pricing');
      expect(buildLocalizedPath('/', 'en')).toBe('/');
    });

    it('handles paths that already have language prefixes', () => {
      expect(buildLocalizedPath('/fi/full/pricing', 'en')).toBe('/full/pricing');
      expect(buildLocalizedPath('/full/pricing', 'fi')).toBe('/fi/full/pricing');
    });
  });
});
