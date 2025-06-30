
import React from 'react';
import { RefreshCw, Search, GraduationCap, AlertTriangle } from 'lucide-react';
import { useLanguage } from '@/hooks/useLanguage';

const ContinuousImprovement = () => {
  const { language } = useLanguage();
  
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              {language === 'fi' 
                ? 'Jatkuva kehitystyö'
                : 'Continuous Development'
              }
            </h2>
            <p className="text-xl text-gray-600">
              {language === 'fi'
                ? 'Tietoturva ei ole meille kertaluontoinen projekti, vaan jatkuva prosessi.'
                : 'Security is not a one-time project for us, but a continuous process.'
              }
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="flex items-start space-x-4 p-6 bg-blue-50 rounded-xl">
                <div className="bg-blue-100 p-2 rounded-lg">
                  <RefreshCw className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {language === 'fi' ? 'Säännölliset päivitykset' : 'Regular Updates'}
                  </h3>
                  <p className="text-gray-700">
                    {language === 'fi'
                      ? 'Päivitämme järjestelmiämme säännöllisesti ja seuraamme tietoturvauhkia aktiivisesti'
                      : 'We regularly update our systems and actively monitor security threats'
                    }
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4 p-6 bg-green-50 rounded-xl">
                <div className="bg-green-100 p-2 rounded-lg">
                  <Search className="h-6 w-6 text-green-600" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {language === 'fi' ? 'Ulkopuoliset auditoinnit' : 'External Audits'}
                  </h3>
                  <p className="text-gray-700">
                    {language === 'fi'
                      ? 'Teemme säännöllisiä tietoturva-auditointeja ja testaamme järjestelmiämme ulkopuolisten asiantuntijoiden kanssa'
                      : 'We conduct regular security audits and test our systems with external specialists'
                    }
                  </p>
                </div>
              </div>
            </div>
            
            <div className="space-y-6">
              <div className="flex items-start space-x-4 p-6 bg-purple-50 rounded-xl">
                <div className="bg-purple-100 p-2 rounded-lg">
                  <GraduationCap className="h-6 w-6 text-purple-600" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {language === 'fi' ? 'Henkilöstön koulutus' : 'Staff Training'}
                  </h3>
                  <p className="text-gray-700">
                    {language === 'fi'
                      ? 'Henkilökuntamme koulutetaan jatkuvasti tietoturva-asioissa, koska turvallisuus on ketjun heikoimman lenkin varassa'
                      : 'Our staff is continuously trained in security matters, as security depends on the weakest link in the chain'
                    }
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4 p-6 bg-red-50 rounded-xl">
                <div className="bg-red-100 p-2 rounded-lg">
                  <AlertTriangle className="h-6 w-6 text-red-600" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {language === 'fi' ? 'Uhkien seuranta' : 'Threat Monitoring'}
                  </h3>
                  <p className="text-gray-700">
                    {language === 'fi'
                      ? 'Kehitämme suojauksiamme aina vain paremmiksi ja reagoimme nopeasti uusiin uhkiin'
                      : 'We continuously improve our protections and respond quickly to new threats'
                    }
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-12 bg-gradient-to-r from-gray-900 to-gray-800 text-white p-8 rounded-xl">
            <h3 className="text-xl font-bold mb-4">
              {language === 'fi' ? 'Sitoutumisemme tietoturvaan' : 'Our Commitment to Security'}
            </h3>
            <p className="text-gray-300 leading-relaxed">
              {language === 'fi'
                ? 'Loppujen lopuksi tietoturva on luottamuskysymys. Me luotamme sinuun jakamalla parhaat käytäntömme, ja toivomme, että sinä luotat meihin antamalla Lyylin auttaa viestinnässäsi. Olemme sitoutuneet ylläpitämään korkeinta mahdollista tietoturvan tasoa ja kehittämään sitä jatkuvasti.'
                : 'Ultimately, security is a matter of trust. We trust you by sharing our best practices, and we hope you trust us by letting Lyyli help with your communication. We are committed to maintaining the highest possible level of security and continuously developing it.'
              }
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContinuousImprovement;
