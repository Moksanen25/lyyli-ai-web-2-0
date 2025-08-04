'use client';

import React from 'react';
import { useLanguage } from '@/hooks/useLanguage';

const SolutionIntroSection: React.FC = () => {
  const { language } = useLanguage();

  const capabilities = [
    {
      title: language === 'fi' ? 'Automaattinen segmentointi' : 'Automatic segmentation',
      description: language === 'fi'
        ? 'Lyyli analysoi automaattisesti asiakkaidesi käyttäytymistä ja luo tarkat segmentit.'
        : 'Lyyli automatically analyzes your customers\' behavior and creates precise segments.',
      icon: '🤖'
    },
    {
      title: language === 'fi' ? 'Reaaliaikainen analyysi' : 'Real-time analysis',
      description: language === 'fi'
        ? 'Saat päivittäisiä päivityksiä asiakkaidesi muutoksista ja trendeistä.'
        : 'Get daily updates on changes and trends in your customer base.',
      icon: '⚡'
    },
    {
      title: language === 'fi' ? 'Kohdennetut kampanjat' : 'Targeted campaigns',
      description: language === 'fi'
        ? 'Luo henkilökohtaisia markkinointikampanjoita jokaiselle segmentille.'
        : 'Create personalized marketing campaigns for each segment.',
      icon: '🎯'
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {language === 'fi' ? 'Miten Lyyli ratkaisee ongelmat?' : 'How does Lyyli solve these problems?'}
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            {language === 'fi'
              ? 'Tekoälypohjainen asiakassegmentointi auttaa sinua ymmärtämään asiakkaitasi paremmin'
              : 'AI-powered customer segmentation helps you understand your customers better'
            }
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {capabilities.map((capability, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="text-4xl mb-4">{capability.icon}</div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900">{capability.title}</h3>
              <p className="text-gray-600">{capability.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SolutionIntroSection;