
import React, { useMemo } from 'react';
import { useLanguage } from '@/hooks/useLanguage';
import type { BlogPost } from '@/data/blogData';
import { blogTranslations } from './blogTranslations';

interface TranslatedContentProps {
  post: BlogPost;
  children: React.ReactNode;
}

const TranslatedContent: React.FC<TranslatedContentProps> = ({ post, children }) => {
  const { language } = useLanguage();
  
  // Memoize the translation lookup
  const translation = useMemo(() => {
    if (language === 'fi') {
      const translationKey = `${post.slug}-${language}`;
      return blogTranslations[translationKey] || null;
    }
    return null;
  }, [post.slug, language]);
  
  // If there's a translation, render the content with the translated content
  if (translation) {
    return (
      <div className="translated-content">
        {children}
      </div>
    );
  }
  
  // If there's no translation, just render the original content
  return (
    <div className="original-content">
      {children}
    </div>
  );
};

export default TranslatedContent;
