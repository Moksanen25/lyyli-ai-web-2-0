'use client';

import React from 'react';
import { useLanguage } from '@/hooks/useLanguage';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { TrendingUp, Calculator } from 'lucide-react';
import Link from 'next/link';

const HeroROIWidget: React.FC = () => {
  const { language, t } = useLanguage();

  return (
    <Card className="w-full max-w-sm bg-white border-0 shadow-xl rounded-xl overflow-hidden">
      <CardContent className="p-6">
        <div className="flex items-center gap-2 mb-4">
          <Calculator className="h-5 w-5 text-primary" />
          <h3 className="text-lg font-semibold text-primary">{t('roi.title')}</h3>
        </div>
        
        <div className="space-y-4">
          <div className="text-center">
            <div className="text-3xl font-bold text-primary mb-1">{t('roi.subtitle')}</div>
            <div className="flex items-center justify-center gap-1 text-emerald-600">
              <TrendingUp className="h-4 w-4" />
              <span className="text-lg font-semibold">{t('roi.percentage')}</span>
            </div>
          </div>
          
          <div className="space-y-3">
            <Button 
              variant="outline" 
              size="sm" 
              className="w-full border-primary text-primary hover:bg-primary hover:text-primary-foreground"
              asChild
            >
              <Link href={language === 'fi' ? '/fi/pricing' : '/pricing'}>
                {t('roi.calculateROI')}
              </Link>
            </Button>
            <Button 
              size="sm" 
              className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
              asChild
            >
              <Link href={language === 'fi' ? '/fi/contact' : '/contact'}>
                {t('roi.bookDemo')}
              </Link>
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default HeroROIWidget;