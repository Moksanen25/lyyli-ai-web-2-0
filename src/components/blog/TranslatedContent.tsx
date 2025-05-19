
import React, { useMemo } from 'react';
import { useLanguage } from '@/hooks/useLanguage';
import { useSafeTranslation } from '@/utils/safeTranslation';
import type { BlogPost } from '@/data/blogData';
import { blogTranslations } from './blogTranslations';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Info } from 'lucide-react';

interface TranslatedContentProps {
  post: BlogPost;
  children: React.ReactNode;
}

const TranslatedContent: React.FC<TranslatedContentProps> = ({ post, children }) => {
  const { language } = useLanguage();
  const { safeT } = useSafeTranslation();
  
  // Memoize the translation lookup
  const translation = useMemo(() => {
    if (language === 'fi') {
      const translationKey = `${post.slug}-${language}`;
      return blogTranslations[translationKey] || null;
    }
    return null;
  }, [post.slug, language]);
  
  // If we're in Finnish mode but there's no translation, display a notice
  const showTranslationNotice = language === 'fi' && !translation;
  
  return (
    <div className={translation ? "translated-content" : "original-content"}>
      {showTranslationNotice && (
        <Alert className="mb-6 bg-primary/5 border-primary/10">
          <Info className="h-4 w-4 text-primary" />
          <AlertTitle>
            {safeT('blog.translationNotice.title', { fallback: 'Automaattinen käännös' })}
          </AlertTitle>
          <AlertDescription>
            {safeT('blog.translationNotice.description', { fallback: 'Tämä sisältö on käännetty automaattisesti englanniksi. Alkuperäinen sisältö on saatavilla vaihtamalla sivuston kieli englanniksi.' })}
          </AlertDescription>
        </Alert>
      )}
      {children}
    </div>
  );
};

export default TranslatedContent;
