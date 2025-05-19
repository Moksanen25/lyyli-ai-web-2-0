
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
  
  // Don't show any translation notice - removing this feature entirely as requested
  // Now the component just handles translation replacement without warnings
  
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
