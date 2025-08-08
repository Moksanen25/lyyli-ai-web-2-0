'use client';

import React from 'react';
import { useLanguage } from '@/hooks/useLanguage';
import { Button } from '@/components/ui/button';
import { Check } from 'lucide-react';
import Link from 'next/link';

const ProblemSection: React.FC = () => {
  const { language } = useLanguage();

  const getText = (key: string) => {
    const texts = {
      en: {
        title: 'Why choose Lyyli as your communication assistant?',
        subtitle: 'AI communication assistant for expert organizations – communicate in messaging channels like a professional and ensure important matters are never left uncommunicated.',
        cta: 'Start free trial',
        demoCta: 'Book demo',
        userFriendly: 'User-friendliness',
        efficiency: 'Efficiency benefits',
        autoMessages: 'Automatic message creation',
        saveCosts: 'Save 30-100% on communication costs',
        professionalTone: 'Professional tone in all messages',
        timeSavings: 'Save time on routine communication',
        consistency: 'Consistent communication style',
        analytics: 'Communication analytics and insights'
      },
      fi: {
        title: 'Miksi valita Lyyli viestintäassistentiksesi?',
        subtitle: 'Asiantuntijaorganisaatioille tehty AI-viestintäassistentti, jonka avulla viestit pikaviestikanavissa kuin ammattilainen ja varmistat, etteivät tärkeät asiat jaa ikinä viestimättä.',
        cta: 'Aloita ilmainen kokeilu',
        demoCta: 'Varaa demo',
        userFriendly: 'Käyttäjäystävällisyys',
        efficiency: 'Tehokkuushyödyt',
        autoMessages: 'Automaattinen viestien luonti',
        saveCosts: 'Säästä 30-100% viestintäkuluista',
        professionalTone: 'Ammattimainen sävy kaikissa viesteissä',
        timeSavings: 'Säästä aikaa rutiiniviestinnässä',
        consistency: 'Yhtenäinen viestintätyyli',
        analytics: 'Viestintäanalytiikka ja oivallukset'
      }
    };
    return texts[language as keyof typeof texts]?.[key as keyof typeof texts.en] || texts.en[key as keyof typeof texts.en];
  };

  const features = [
    { category: 'userFriendly', items: ['autoMessages', 'professionalTone', 'consistency'] },
    { category: 'efficiency', items: ['saveCosts', 'timeSavings', 'analytics'] }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
            {getText('title')}
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            {getText('subtitle')}
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 mb-12">
          {features.map((featureGroup, groupIndex) => (
            <div key={groupIndex} className="space-y-6">
              <h3 className="text-xl font-semibold text-primary mb-4">
                {getText(featureGroup.category)}
              </h3>
              <div className="space-y-4">
                {featureGroup.items.map((item, itemIndex) => (
                  <div key={itemIndex} className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-6 h-6 bg-emerald-100 rounded-full flex items-center justify-center mt-0.5">
                      <Check className="h-4 w-4 text-emerald-600" />
                    </div>
                    <p className="text-muted-foreground">
                      {getText(item)}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button 
            size="lg" 
            className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 text-lg font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
            asChild
          >
            <Link href={language === 'fi' ? '/fi/waitlist' : '/waitlist'}>
              {getText('cta')}
            </Link>
          </Button>
          <Button 
            variant="outline" 
            size="lg"
            className="border-primary text-primary hover:bg-primary hover:text-primary-foreground px-8 py-4 text-lg font-semibold rounded-lg shadow-md hover:shadow-lg transition-all duration-300"
            asChild
          >
            <Link href={language === 'fi' ? '/fi/contact' : '/contact'}>
              {getText('demoCta')}
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;