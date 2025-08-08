'use client';

import React from 'react';
import { useLanguage } from '@/hooks/useLanguage';
import { Button } from '@/components/ui/button';
import { Shield, Users, Database, Layers } from 'lucide-react';
import Link from 'next/link';

const ValuePropositionsSection: React.FC = () => {
  const { language } = useLanguage();

  const getText = (key: string) => {
    const texts = {
      en: {
        title: 'AI for communication and internal communication automation',
        subtitle: 'AI communication assistant for expert organizations – communicate in messaging channels like a professional and ensure important matters are never left uncommunicated.',
        cta: 'Book demo',
        securityTitle: 'Corporate data security',
        securityDescription: 'Enterprise-grade security for all your communication data',
        aiTitle: 'Advanced AI',
        aiDescription: 'State-of-the-art AI technology for professional communication',
        integrationTitle: 'Easy integration',
        integrationDescription: 'Seamless integration with your existing communication tools',
        analyticsTitle: 'Communication analytics',
        analyticsDescription: 'Comprehensive analytics and insights for your communication'
      },
      fi: {
        title: 'Tekoäly viestintään ja sisäisen viestinnän automaatio',
        subtitle: 'Asiantuntijaorganisaatioille tehty AI-viestintäassistentti, jonka avulla viestit pikaviestikanavissa kuin ammattilainen ja varmistat, etteivät tärkeät asiat jaa ikinä viestimättä.',
        cta: 'Varaa demo',
        securityTitle: 'Yritystietoturva',
        securityDescription: 'Yritystason tietoturva kaikille viestintätiedoillesi',
        aiTitle: 'Edistynyt tekoäly',
        aiDescription: 'Huipputason tekoälyteknologia ammattimaiseen viestintään',
        integrationTitle: 'Helppo integraatio',
        integrationDescription: 'Sujuvat integraatiot olemassa oleviin viestintätyökaluihin',
        analyticsTitle: 'Viestintäanalytiikka',
        analyticsDescription: 'Kattava analytiikka ja oivallukset viestintääsi'
      }
    };
    return texts[language as keyof typeof texts]?.[key as keyof typeof texts.en] || texts.en[key as keyof typeof texts.en];
  };

  const features = [
    {
      key: 'security',
      icon: Shield,
      title: getText('securityTitle'),
      description: getText('securityDescription')
    },
    {
      key: 'ai',
      icon: Users,
      title: getText('aiTitle'),
      description: getText('aiDescription')
    },
    {
      key: 'integration',
      icon: Database,
      title: getText('integrationTitle'),
      description: getText('integrationDescription')
    },
    {
      key: 'analytics',
      icon: Layers,
      title: getText('analyticsTitle'),
      description: getText('analyticsDescription')
    }
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
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {features.map((feature, index) => (
            <div key={index} className="bg-white border-2 border-primary/20 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow text-center">
              <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center text-primary">
                <feature.icon className="w-10 h-10" />
              </div>
              <h3 className="text-lg font-semibold text-primary mb-3">{feature.title}</h3>
              <p className="text-muted-foreground text-sm">{feature.description}</p>
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

export default ValuePropositionsSection;