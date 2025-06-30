
import React from 'react';
import { Shield, Lock, Server, Eye, FileCheck, Users } from 'lucide-react';
import { useLanguage } from '@/hooks/useLanguage';

const SecurityFeatures = () => {
  const { language } = useLanguage();
  
  const features = [
    {
      icon: <Lock className="h-8 w-8" />,
      title: language === 'fi' ? 'End-to-End salaus' : 'End-to-End Encryption',
      description: language === 'fi'
        ? 'AES-256 salaus kaikelle datalle sekä siirrossa että tallennuksessa'
        : 'AES-256 encryption for all data in transit and at rest'
    },
    {
      icon: <Server className="h-8 w-8" />,
      title: language === 'fi' ? 'EU-datacenterit' : 'EU Data Centers',
      description: language === 'fi'
        ? 'Palvelimemme sijaitsevat EU:ssa, tietosi eivät poistu unionin alueelta'
        : 'Our servers are located in the EU, your data never leaves the union'
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: language === 'fi' ? 'Eristetty ympäristö' : 'Isolated Environment',
      description: language === 'fi'
        ? 'Yritysdatasi on täysin eristetty eikä sitä käytetä kielimallien kouluttamiseen'
        : 'Your company data is completely isolated and not used for training language models'
    },
    {
      icon: <Eye className="h-8 w-8" />,
      title: language === 'fi' ? 'Ei kolmansia osapuolia' : 'No Third Parties',
      description: language === 'fi'
        ? 'Tietojasi ei jaeta, myydä tai vuokrata kolmansille osapuolille'
        : 'Your data is never shared, sold, or rented to third parties'
    },
    {
      icon: <FileCheck className="h-8 w-8" />,
      title: language === 'fi' ? 'Säännölliset auditoinnit' : 'Regular Audits',
      description: language === 'fi'
        ? 'Suoritamme säännöllisiä tietoturva-auditointeja ulkopuolisten asiantuntijoiden kanssa'
        : 'We conduct regular security audits with external specialists'
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: language === 'fi' ? 'Käyttöoikeuksien hallinta' : 'Access Management',
      description: language === 'fi'
        ? 'Tarkka käyttöoikeuksien hallinta ja toimintojen lokitus'
        : 'Precise access control and comprehensive activity logging'
    }
  ];
  
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            {language === 'fi' 
              ? 'Kattavat tietoturvaratkaisut'
              : 'Comprehensive Security Solutions'
            }
          </h2>
          <p className="text-xl text-gray-600">
            {language === 'fi'
              ? 'Lyyli käsittelee päivittäin arkaluontoisia viestejä ja luottamuksellisia asiakirjoja. Siksi olemme rakentaneet maailmanluokan tietoturvan.'
              : 'Lyyli processes sensitive messages and confidential documents daily. That\'s why we\'ve built world-class security.'
            }
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-gray-50 p-8 rounded-xl hover:shadow-lg transition-shadow">
              <div className="text-primary mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-600">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SecurityFeatures;
