import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { BlogPost } from '@/data/blogData';

interface TranslatedContentProps {
  post: BlogPost;
  children: React.ReactNode;
}

/**
 * A component that conditionally translates blog content from English to Finnish
 */
const TranslatedContent: React.FC<TranslatedContentProps> = ({ post, children }) => {
  const { language } = useLanguage();
  
  // If we're in English mode, or the content is already in Finnish, just render normally
  if (language === 'en' || post.language === 'fi') {
    return <>{children}</>;
  }
  
  // Basic translation mapping for common English words to Finnish
  const translateContent = (content: string): string => {
    if (!content) return content;
    
    // If it's HTML content with dangerouslySetInnerHTML
    if (typeof children === 'object' && React.isValidElement(children) && 
        children.props && children.props.dangerouslySetInnerHTML) {
      const htmlContent = children.props.dangerouslySetInnerHTML.__html;
      
      if (htmlContent) {
        // Simple word-by-word translation of common terms in blog content
        let translatedHtml = htmlContent
          .replace(/\bthe\b/gi, 'se')
          .replace(/\band\b/gi, 'ja')
          .replace(/\bor\b/gi, 'tai')
          .replace(/\bwith\b/gi, 'kanssa')
          .replace(/\bfor\b/gi, 'varten')
          .replace(/\bto\b/gi, '')
          .replace(/\bin\b/gi, '')
          .replace(/\bof\b/gi, '')
          .replace(/\borganization\b/gi, 'organisaatio')
          .replace(/\borganizations\b/gi, 'organisaatiot')
          .replace(/\bcommunication\b/gi, 'viestintä')
          .replace(/\bmember\b/gi, 'jäsen')
          .replace(/\bmembers\b/gi, 'jäsenet')
          .replace(/\bnonprofit\b/gi, 'voittoa tavoittelematon')
          .replace(/\bAI\b/g, 'tekoäly');
                
        return translatedHtml;
      }
    }
    
    // For regular text content
    return content;
  };
  
  // In Finnish mode with English content - add special translation banner and translate content
  return (
    <div className="relative">
      {/* Translation banner */}
      <div className="bg-blue-100 text-blue-800 p-4 mb-6 rounded-md border border-blue-200">
        <p className="font-medium mb-1">Automaattinen käännös</p>
        <p className="text-sm">Tämä sisältö on käännetty automaattisesti englanniksi. Alkuperäinen sisältö on saatavilla vaihtamalla sivuston kieli englanniksi.</p>
      </div>
      
      {/* Attempt to translate content if it's a React element */}
      {React.Children.map(children, child => {
        if (!React.isValidElement(child)) return child;
        
        // For HTML content stored in dangerouslySetInnerHTML
        if (child.props && child.props.dangerouslySetInnerHTML) {
          const html = child.props.dangerouslySetInnerHTML.__html;
          if (html) {
            return React.cloneElement(child, {
              dangerouslySetInnerHTML: {
                __html: translateContent(html)
              }
            });
          }
        }
        
        // For text content in heading elements or paragraphs
        if (typeof child.props.children === 'string') {
          return React.cloneElement(child, {}, translateContent(child.props.children));
        }
        
        // Otherwise return unchanged
        return child;
      })}
    </div>
  );
};

export default TranslatedContent;
