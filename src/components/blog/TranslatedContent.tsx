
import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { BlogPost } from '@/data/blogData';

interface TranslatedContentProps {
  post: BlogPost;
  children: React.ReactNode;
}

/**
 * A component that displays the Finnish translation for blog content
 * when available, otherwise shows the English content with a notice
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
      
      {/* For now, just show the original content. You'll provide specific translations later */}
      {children}
      
      {/* Add instructions for users at the bottom */}
      <div className="mt-8 p-4 bg-gray-100 rounded-md">
        <p className="text-sm text-gray-600">
          Huom: Täydellinen suomenkielinen käännös on tulossa pian. Toistaiseksi käytä englanninkielistä versiota kattavinta sisältöä varten.
        </p>
      </div>
    </div>
  );
};

export default TranslatedContent;
