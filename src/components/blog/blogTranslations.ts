
// Store for blog content translations
// Map of [slug]-[language] to translated content
export const blogTranslations: Record<string, { title?: string; excerpt?: string; content?: string }> = {
  // Sample translations
  'getting-started-fi': {
    title: 'Aloita tästä',
    excerpt: 'Kuinka voit aloittaa Lyylin käytön tehokkaasti ja edistää liiketoimintaasi.',
    content: '<p>Tämä on esimerkki käännöksestä.</p>'
  }
};

// Helper function to check if a Finnish translation exists
export const hasFinishTranslation = (slug: string): boolean => {
  const translationKey = `${slug}-fi`;
  return !!blogTranslations[translationKey];
};
