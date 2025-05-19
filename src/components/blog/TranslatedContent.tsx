
import React, { useMemo, useEffect } from 'react';
import { useLanguage } from '@/hooks/useLanguage';
import { useSafeTranslation } from '@/utils/safeTranslation';
import type { BlogPost } from '@/data/blogData';
import { blogTranslations } from './blogTranslations';

interface TranslatedContentProps {
  post: BlogPost;
  children: React.ReactNode;
}

const TranslatedContent: React.FC<TranslatedContentProps> = ({ post, children }) => {
  const { language } = useLanguage();
  const { safeT } = useSafeTranslation();
  
  // Debug the translation lookup
  useEffect(() => {
    if (language === 'fi') {
      const translationKey = `${post.slug}-${language}`;
      console.log('Looking for translation with key:', translationKey);
      console.log('Translation available:', !!blogTranslations[translationKey]);
      
      // Special debug for nonprofit post
      if (post.id === "3") {
        console.log('Nonprofit post translation check:', {
          id: post.id,
          slug: post.slug,
          title: post.title,
          hasTranslation: !!blogTranslations[translationKey],
          translationTitle: blogTranslations[translationKey]?.title || 'No translation'
        });
      }
    }
  }, [post.id, post.slug, language]);
  
  // Memoize the translation lookup
  const translation = useMemo(() => {
    if (language === 'fi') {
      const translationKey = `${post.slug}-${language}`;
      return blogTranslations[translationKey] || null;
    }
    return null;
  }, [post.slug, language]);
  
  // Modify the children to replace content with translations when available
  const modifiedChildren = useMemo(() => {
    if (language === 'fi' && translation) {
      // Clone the children and modify specific elements
      return React.Children.map(children, child => {
        if (!React.isValidElement(child)) return child;
        
        // Replace the title if translation exists
        if (child.type === 'h1' && translation.title) {
          return React.cloneElement(child, {}, translation.title);
        }
        
        // Replace content if translation exists
        if (child.props?.dangerouslySetInnerHTML && translation.content) {
          // Properly type the element for dangerouslySetInnerHTML
          return React.cloneElement(child as React.ReactElement<React.HTMLAttributes<HTMLDivElement>>, {
            dangerouslySetInnerHTML: { __html: translation.content }
          });
        }
        
        return child;
      });
    }
    
    return children;
  }, [children, language, translation]);
  
  return (
    <div className={translation ? "translated-content" : "original-content"}>
      {modifiedChildren}
    </div>
  );
};

export default TranslatedContent;
