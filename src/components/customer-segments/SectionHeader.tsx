
import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';

const SectionHeader: React.FC = () => {
  const { t } = useLanguage();
  
  return (
    <div className="text-center mb-16 animate-fade-in">
      <div className="inline-block bg-primary/10 text-primary text-sm font-semibold py-1 px-3 rounded-full mb-3">
        {t('customerSegments.tailoredSolutions')}
      </div>
      <h2 className="text-3xl md:text-4xl font-bold mb-4">{t('customerSegments.title')}</h2>
      <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
        {t('customerSegments.subtitle')}
      </p>
    </div>
  );
};

export default SectionHeader;
