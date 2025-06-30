
import React from 'react';
import { FileCheck, UserCheck, Download, Trash2 } from 'lucide-react';
import { useLanguage } from '@/hooks/useLanguage';

const GDPRCompliance = () => {
  const { language } = useLanguage();
  
  const gdprFeatures = [
    {
      icon: <UserCheck className="h-6 w-6" />,
      title: language === 'fi' ? 'Tietojen minimointi' : 'Data Minimization',
      description: language === 'fi'
        ? 'Käsittelemme vain välttämättömiä tietoja palvelun toiminnalle'
        : 'We only process data that is necessary for service operation'
    },
    {
      icon: <FileCheck className="h-6 w-6" />,
      title: language === 'fi' ? 'Käyttötarkoituksen rajaus' : 'Purpose Limitation',
      description: language === 'fi'
        ? 'Tietojasi käytetään vain viestinnän parantamiseen ja palvelun toimittamiseen'
        : 'Your data is used only for improving communication and service delivery'
    },
    {
      icon: <Trash2 className="h-6 w-6" />,
      title: language === 'fi' ? 'Oikeus poistamiseen' : 'Right to Deletion',
      description: language === 'fi'
        ? 'Voit pyytää tietojesi poistamista 30 päivän kuluessa'
        : 'You can request data deletion within 30 days'
    },
    {
      icon: <Download className="h-6 w-6" />,
      title: language === 'fi' ? 'Tietojen siirrettävyys' : 'Data Portability',
      description: language === 'fi'
        ? 'Kaikki datasi toimitetaan koneluettavassa muodossa'
        : 'All your data can be delivered in machine-readable format'
    }
  ];
  
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              {language === 'fi' 
                ? 'GDPR-yhteensopivuus käytännössä'
                : 'GDPR Compliance in Practice'
              }
            </h2>
            <p className="text-xl text-gray-600">
              {language === 'fi'
                ? 'Olemme rakentaneet Lyylin GDPR:n vaatimusten mukaisesti alusta asti.'
                : 'We have built Lyyli according to GDPR requirements from the ground up.'
              }
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {gdprFeatures.map((feature, index) => (
              <div key={index} className="flex items-start space-x-4 p-6 bg-gray-50 rounded-xl">
                <div className="bg-primary/10 p-3 rounded-lg text-primary flex-shrink-0">
                  {feature.icon}
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
          
          <div className="bg-gradient-to-r from-primary/10 to-secondary/10 p-8 rounded-xl">
            <h3 className="text-xl font-bold text-gray-900 mb-4">
              {language === 'fi' ? 'Nimetty tietosuojavastaava' : 'Dedicated Data Protection Officer'}
            </h3>
            <p className="text-gray-700 mb-4">
              {language === 'fi'
                ? 'Meillä on nimetty tietosuojavastaava, joka vastaa kaikkiin tietosuojaan liittyviin kysymyksiin nopeasti ja kattavasti. Uskomme, että avoimuus on paras tapa rakentaa luottamusta.'
                : 'We have a dedicated Data Protection Officer who responds to all data protection related questions quickly and comprehensively. We believe that transparency is the best way to build trust.'
              }
            </p>
            <div className="flex flex-wrap gap-4">
              <span className="bg-white px-4 py-2 rounded-full text-sm font-medium text-gray-700">
                {language === 'fi' ? 'Nopea vastausaika' : 'Quick Response Time'}
              </span>
              <span className="bg-white px-4 py-2 rounded-full text-sm font-medium text-gray-700">
                {language === 'fi' ? 'Asiantunteva tuki' : 'Expert Support'}
              </span>
              <span className="bg-white px-4 py-2 rounded-full text-sm font-medium text-gray-700">
                {language === 'fi' ? 'Täysi avoimuus' : 'Full Transparency'}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GDPRCompliance;
