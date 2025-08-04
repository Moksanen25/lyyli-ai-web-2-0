'use client';

import React from 'react';
import { useLanguage } from '@/hooks/useLanguage';

const ValuePropositionsSection: React.FC = () => {
  const { language } = useLanguage();

  const valueProps = [
    {
      title: language === 'fi' ? 'Säästä aikaa' : 'Save time',
      description: language === 'fi'
        ? 'Automaattinen segmentointi säästää tuntikausia manuaalista työtä.'
        : 'Automatic segmentation saves hours of manual work.',
      icon: '⏱️'
    },
    {
      title: language === 'fi' ? 'Paranna ROI' : 'Improve ROI',
      description: language === 'fi'
        ? 'Kohdennetut kampanjat tuottavat parempia tuloksia ja korkeampaa tuottoa.'
        : 'Targeted campaigns deliver better results and higher returns.',
      icon: '📈'
    },
    {
      title: language === 'fi' ? 'Ymmärrä asiakkaitasi' : 'Understand your customers',
      description: language === 'fi'
        ? 'Saa syvällisiä tietoja asiakkaidesi tarpeista ja käyttäytymisestä.'
        : 'Get deep insights into your customers\' needs and behavior.',
      icon: '🔍'
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {language === 'fi' ? 'Miksi valita Lyyli?' : 'Why choose Lyyli?'}
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            {language === 'fi'
              ? 'Lyyli auttaa sinua rakentamaan parempia suhteita asiakkaitasi kanssa'
              : 'Lyyli helps you build better relationships with your customers'
            }
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {valueProps.map((valueProp, index) => (
            <div key={index} className="text-center p-6 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors">
              <div className="text-4xl mb-4">{valueProp.icon}</div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900">{valueProp.title}</h3>
              <p className="text-gray-600">{valueProp.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ValuePropositionsSection;