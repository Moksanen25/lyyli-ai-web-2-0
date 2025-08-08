'use client';

import React from 'react';
import { useLanguage } from '@/hooks/useLanguage';
import { Button } from '@/components/ui/button';
import { Target, Sparkles, User, Send } from 'lucide-react';
import Link from 'next/link';

const HowItWorks: React.FC = () => {
  const { language } = useLanguage();

  const getText = (key: string) => {
    const texts = {
      en: {
        title: 'How does it work?',
        subtitle: 'Four simple steps to professional communication',
        cta: 'Book demo',
        step1: 'User enters topic',
        step2: 'Lyyli creates message',
        step3: 'User reviews and edits',
        step4: 'Lyyli publishes message'
      },
      fi: {
        title: 'Miten se toimii?',
        subtitle: 'Neljä yksinkertaista vaihetta ammattimaiseen viestintään',
        cta: 'Varaa demo',
        step1: 'Käyttäjä syöttää aiheen',
        step2: 'Lyyli luo viestin',
        step3: 'Käyttäjä tarkistaa ja muokkaa',
        step4: 'Lyyli julkaisee viestin'
      }
    };
    return texts[language as keyof typeof texts]?.[key as keyof typeof texts.en] || texts.en[key as keyof typeof texts.en];
  };

  const steps = [
    {
      number: '1',
      title: getText('step1'),
      icon: Target
    },
    {
      number: '2',
      title: getText('step2'),
      icon: Sparkles
    },
    {
      number: '3',
      title: getText('step3'),
      icon: User
    },
    {
      number: '4',
      title: getText('step4'),
      icon: Send
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
        
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {steps.map((step, index) => (
            <div key={index} className="text-center relative">
              <div className="bg-white border-2 border-primary/20 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                <div className="bg-primary text-primary-foreground rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4 text-lg font-bold">
                  {step.number}
                </div>
                <div className="w-12 h-12 mx-auto mb-4 flex items-center justify-center text-primary">
                  <step.icon className="w-8 h-8" />
                </div>
                <h3 className="text-lg font-semibold text-primary">{step.title}</h3>
              </div>
              
              {/* Arrow connector */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                  <div className="w-8 h-0.5 bg-primary"></div>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="text-center">
          <Button 
            size="lg" 
            className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 text-lg font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
            asChild
          >
            <Link href={language === 'fi' ? '/fi/contact' : '/contact'}>
              {getText('cta')}
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
