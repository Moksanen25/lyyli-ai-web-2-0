
import React from 'react';
import { Cloud, Database, Network, Cpu } from 'lucide-react';
import { useLanguage } from '@/hooks/useLanguage';

const TechnicalArchitecture = () => {
  const { language } = useLanguage();
  
  return (
    <section className="py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              {language === 'fi' 
                ? 'Tekninen arkkitehtuuri ja tietojen käsittely'
                : 'Technical Architecture and Data Processing'
              }
            </h2>
            <p className="text-xl text-gray-600">
              {language === 'fi'
                ? 'Lyyli toimii täysin pilvipohjaisena ratkaisuna, jossa kaikki data kulkee salattuna.'
                : 'Lyyli operates as a fully cloud-based solution where all data flows encrypted.'
              }
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                {language === 'fi' ? 'Salaus ja tietoturva' : 'Encryption and Security'}
              </h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="bg-primary/10 p-2 rounded-lg">
                    <Database className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">
                      {language === 'fi' ? 'AES-256 salaus' : 'AES-256 Encryption'}
                    </h4>
                    <p className="text-gray-600">
                      {language === 'fi'
                        ? 'Käytämme AES-256 salausta sekä tietojen siirtoon että tallennukseen'
                        : 'We use AES-256 encryption for both data transmission and storage'
                      }
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <div className="bg-primary/10 p-2 rounded-lg">
                    <Network className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">
                      {language === 'fi' ? 'Turvallinen siirto' : 'Secure Transmission'}
                    </h4>
                    <p className="text-gray-600">
                      {language === 'fi'
                        ? 'Kaikki tiedonsiirto tapahtuu TLS 1.3 -protokollalla suojattuna'
                        : 'All data transmission is protected with TLS 1.3 protocol'
                      }
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <div className="bg-primary/10 p-2 rounded-lg">
                    <Cloud className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">
                      {language === 'fi' ? 'EU-pilvipalvelut' : 'EU Cloud Services'}
                    </h4>
                    <p className="text-gray-600">
                      {language === 'fi'
                        ? 'Palvelumme pyörii EU:n alueella sijaitsevilla palvelimilla'
                        : 'Our services run on servers located within the EU'
                      }
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="text-center">
                <div className="bg-primary/10 p-4 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                  <Cpu className="h-10 w-10 text-primary" />
                </div>
                <h4 className="text-lg font-semibold text-gray-900 mb-3">
                  {language === 'fi' ? 'Infrastruktuurin standardit' : 'Infrastructure Standards'}
                </h4>
                <p className="text-gray-600">
                  {language === 'fi'
                    ? 'Noudatamme alalla yleisiä standardeja. Lähestymme tietoturvaa ISO27001-viitekehyksen mukaisesti ja tulemme sertifioimaan palvelun.'
                    : 'We follow industry-standard practices. We approach security according to the ISO27001 framework and will certify the service.'
                  }
                </p>
              </div>
            </div>
          </div>
          
          <div className="bg-primary/5 p-8 rounded-xl">
            <h3 className="text-xl font-bold text-gray-900 mb-4">
              {language === 'fi' ? 'Tietojen eristäminen' : 'Data Isolation'}
            </h3>
            <p className="text-gray-700 leading-relaxed">
              {language === 'fi'
                ? 'Jokaisen asiakkaan data säilytetään täysin eristettynä omassa ympäristössään. Tietojasi ei koskaan käytetä tekoälymallien kouluttamiseen lukuun ottamatta organisaatiosi omaa ympäristöä. Tämä tarkoittaa, että kilpailijasi eivät voi hyötyä teidän datastanne, ja te ette hyödy heidän datastaan - jokainen organisaatio on täysin itsenäinen.'
                : 'Each customer\'s data is stored completely isolated in its own environment. Your data is never used to train AI models except within your organization\'s own environment. This means that your competitors cannot benefit from your data, and you do not benefit from their data - each organization is completely independent.'
              }
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechnicalArchitecture;
