'use client';

import React from 'react';
import { useLanguage } from '@/hooks/useLanguage';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Link from 'next/link';

const BlogInsightsSection: React.FC = () => {
  const { language } = useLanguage();

  const getText = (key: string) => {
    const texts = {
      en: {
        title: 'Insights, case studies and news from Lyyli',
        subtitle: 'Stay updated with the latest insights and case studies from Lyyli',
        cta: 'Read more'
      },
      fi: {
        title: 'Näkemyksiä, tapaustutkimuksia ja uutisia Lyyliltä',
        subtitle: 'Pysy ajan tasalla Lyylin uusimmista oivalluksista ja tapaustutkimuksista',
        cta: 'Lue lisää'
      }
    };
    return texts[language as keyof typeof texts]?.[key as keyof typeof texts.en] || texts.en[key as keyof typeof texts.en];
  };

  const articles = [
    {
      category: language === 'fi' ? 'Uutiset' : 'News',
      title: language === 'fi' ? 'Miten tekoäly muuttaa yritysviestintää' : 'How AI is transforming business communication',
      image: '/placeholder.svg'
    },
    {
      category: language === 'fi' ? 'Tapaustutkimus' : 'Case Study',
      title: language === 'fi' ? 'Nordic Solutions paransi tehokkuutta 300%' : 'Nordic Solutions increased efficiency by 300%',
      image: '/placeholder.svg'
    },
    {
      category: language === 'fi' ? 'Oivallukset' : 'Insights',
      title: language === 'fi' ? 'Ammattimaisen viestinnän tulevaisuus' : 'The future of professional messaging',
      image: '/placeholder.svg'
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
            {getText('title')}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {getText('subtitle')}
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {articles.map((article, index) => (
            <Card key={index} className="bg-white border-2 border-primary/20 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
              <div className="aspect-video bg-gray-100 flex items-center justify-center">
                <img 
                  src={article.image} 
                  alt={article.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <CardContent className="p-6">
                <div className="text-sm text-primary font-semibold mb-2">
                  {article.category}
                </div>
                <h3 className="text-lg font-semibold text-primary mb-4">
                  {article.title}
                </h3>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button 
            variant="outline" 
            size="lg"
            className="border-primary text-primary hover:bg-primary hover:text-primary-foreground px-8 py-4 text-lg font-semibold rounded-lg shadow-md hover:shadow-lg transition-all duration-300"
            asChild
          >
            <Link href={language === 'fi' ? '/fi/blog' : '/blog'}>
              {getText('cta')}
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default BlogInsightsSection;
