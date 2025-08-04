'use client';

import React from 'react';
import { useLanguage } from '@/hooks/useLanguage';

const ProblemSection: React.FC = () => {
  const { language } = useLanguage();

  const problems = [
    {
      title: language === 'fi' ? 'Kalliit markkinointikampanjat' : 'Expensive marketing campaigns',
      description: language === 'fi' 
        ? 'Yritykset käyttävät valtavia summia markkinointiin ilman tietoa siitä, kuka oikeasti ostaa.'
        : 'Companies spend huge amounts on marketing without knowing who actually buys.',
      icon: '💰'
    },
    {
      title: language === 'fi' ? 'Aikaa vievä asiakastutkimus' : 'Time-consuming customer research',
      description: language === 'fi'
        ? 'Asiakkaiden segmentointi ja analysointi vie paljon aikaa ja resursseja.'
        : 'Segmenting and analyzing customers takes a lot of time and resources.',
      icon: '⏰'
    },
    {
      title: language === 'fi' ? 'Epätarkat kohderyhmät' : 'Inaccurate target audiences',
      description: language === 'fi'
        ? 'Markkinointi kohdistuu usein väärille ihmisille, mikä johtaa huonoihin tuloksiin.'
        : 'Marketing often targets the wrong people, leading to poor results.',
      icon: '🎯'
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {language === 'fi' ? 'Yleisiä ongelmia' : 'Common Problems'}
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            {language === 'fi' 
              ? 'Monet yritykset kohtaavat samat haasteet asiakkaidensa ymmärtämisessä'
              : 'Many companies face the same challenges in understanding their customers'
            }
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {problems.map((problem, index) => (
            <div key={index} className="text-center p-6 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors">
              <div className="text-4xl mb-4">{problem.icon}</div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900">{problem.title}</h3>
              <p className="text-gray-600">{problem.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;