
import React from 'react';
import { useLanguage } from '@/hooks/useLanguage';
import { Card, CardContent } from '@/components/ui/card';

const CustomerQuotes = () => {
  const { t } = useLanguage();
  
  const quotes = [
    {
      quote: t('features.quotes.quote1'),
      author: t('features.quotes.author1'),
      role: t('features.quotes.role1'),
      feature: t('features.quotes.feature1')
    },
    {
      quote: t('features.quotes.quote2'),
      author: t('features.quotes.author2'),
      role: t('features.quotes.role2'),
      feature: t('features.quotes.feature2')
    }
  ];
  
  return (
    <div className="py-16 px-4 bg-background">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-10">
          {t('features.quotes.title')}
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {quotes.map((quote, index) => (
            <Card key={index} className="border-none shadow hover:shadow-md transition-shadow duration-300">
              <CardContent className="pt-6">
                <div className="text-4xl text-primary mb-3">&ldquo;</div>
                <p className="text-muted-foreground italic mb-4">{quote.quote}</p>
                <p className="font-medium mb-1">{quote.author}</p>
                <p className="text-sm text-muted-foreground mb-3">{quote.role}</p>
                <div className="text-xs uppercase font-semibold text-primary/70 tracking-wider">
                  {quote.feature}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CustomerQuotes;
