
import React from 'react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';

const SegmentCTA: React.FC = () => {
  const { t } = useLanguage();
  
  return (
    <div className="text-center mt-16">
      <p className="text-lg text-muted-foreground mb-6 max-w-2xl mx-auto">
        {t('customerSegments.closingText')}
      </p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <Button className="bg-primary hover:bg-primary/90">{t('customerSegments.bookDemoButton')}</Button>
        <Button variant="outline" className="border-primary text-primary">
          {t('customerSegments.viewComparisonButton')}
        </Button>
      </div>
    </div>
  );
};

export default SegmentCTA;
