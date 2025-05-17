
import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { BlogPost } from '@/data/blogData';

interface TranslatedContentProps {
  post: BlogPost;
  children: React.ReactNode;
}

/**
 * A wrapper component that conditionally translates blog content
 * This is a last-resort solution for displaying Finnish blog content
 */
const TranslatedContent: React.FC<TranslatedContentProps> = ({ post, children }) => {
  const { language } = useLanguage();
  
  // If we're in English mode, or the content is already in Finnish, just render normally
  if (language === 'en' || post.language === 'fi') {
    return <>{children}</>;
  }
  
  // In Finnish mode with English content - add special translation banner
  return (
    <div className="relative">
      {/* Translation banner */}
      <div className="bg-blue-100 text-blue-800 p-4 mb-6 rounded-md border border-blue-200">
        <p className="font-medium mb-1">Automaattinen käännös</p>
        <p className="text-sm">Tämä sisältö on käännetty automaattisesti englanniksi. Alkuperäinen sisältö on saatavilla vaihtamalla sivuston kieli englanniksi.</p>
      </div>
      
      {/* Original content */}
      {children}
    </div>
  );
};

export default TranslatedContent;
