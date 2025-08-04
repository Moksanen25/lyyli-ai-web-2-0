'use client';

import React from 'react';
import { useLanguage } from '@/hooks/useLanguage';

const HowItWorks: React.FC = () => {
  const { language } = useLanguage();

  const steps = [
    {
      number: '1',
      title: language === 'fi' ? 'Yhdistä tietosi' : 'Connect your data',
      description: language === 'fi'
        ? 'Lyyli yhdistää automaattisesti asiakastietosi eri lähteistä.'
        : 'Lyyli automatically connects your customer data from various sources.',
      icon: '🔗'
    },
    {
      number: '2',
      title: language === 'fi' ? 'Analysoi käyttäytymistä' : 'Analyze behavior',
      description: language === 'fi'
        ? 'AI analysoi asiakkaidesi käyttäytymistä ja luo segmentit.'
        : 'AI analyzes your customers\' behavior and creates segments.',
      icon: '🧠'
    },
    {
      number: '3',
      title: language === 'fi' ? 'Luo kampanjat' : 'Create campaigns',
      description: language === 'fi'
        ? 'Luo henkilökohtaisia markkinointikampanjoita jokaiselle segmentille.'
        : 'Create personalized marketing campaigns for each segment.',
      icon: '📢'
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {language === 'fi' ? 'Miten se toimii?' : 'How it works'}
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            {language === 'fi'
              ? 'Kolme yksinkertaista vaihetta parempaan asiakassegmentointiin'
              : 'Three simple steps to better customer segmentation'
            }
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="text-center">
              <div className="bg-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 shadow-md">
                <span className="text-2xl">{step.icon}</span>
              </div>
              <div className="bg-primary text-white rounded-full w-8 h-8 flex items-center justify-center mx-auto mb-4 text-sm font-bold">
                {step.number}
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900">{step.title}</h3>
              <p className="text-gray-600">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
