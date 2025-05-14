
import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';

export const LanguageSwitcher: React.FC = () => {
  const { language, setLanguage } = useLanguage();

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'fi' : 'en');
  };

  return (
    <button 
      onClick={toggleLanguage}
      className="flex items-center px-3 py-1 rounded-full bg-primary/10 text-primary hover:bg-primary/20 transition-colors"
    >
      <span className={`${language === 'en' ? 'font-semibold' : ''} mr-1`}>EN</span>
      <span className="mx-1">|</span>
      <span className={`${language === 'fi' ? 'font-semibold' : ''} ml-1`}>FI</span>
    </button>
  );
};
