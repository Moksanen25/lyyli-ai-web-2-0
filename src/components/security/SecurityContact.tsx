import React from 'react';
import { Button } from '@/components/ui/button';
import { Mail, Phone, MessageCircle } from 'lucide-react';
import { useLanguage } from '@/hooks/useLanguage';
import { Link } from 'react-router-dom';

const SecurityContact = () => {
  const { language } = useLanguage();
  
  return (
    <section className="py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            {language === 'fi' 
              ? 'Yhteistyö ja tuki'
              : language === 'sv'
              ? 'Samarbete och support'
              : 'Cooperation and Support'
            }
          </h2>
          <p className="text-xl text-gray-600 mb-12">
            {language === 'fi'
              ? 'Jos sinulla on kysymyksiä tietoturvasta tai yksityisyydensuojasta, älä epäröi ottaa yhteyttä.'
              : language === 'sv'
              ? 'Om du har frågor om säkerhet eller integritetsskydd, tveka inte att kontakta oss.'
              : 'If you have questions about security or privacy protection, don\'t hesitate to contact us.'
            }
          </p>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="bg-primary/10 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Mail className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                {language === 'fi' ? 'Sähköposti' : language === 'sv' ? 'E-post' : 'Email'}
              </h3>
              <p className="text-gray-600 mb-4">
                {language === 'fi'
                  ? 'Nopea vastaus tietoturvakysymyksiin'
                  : language === 'sv'
                  ? 'Snabbt svar på säkerhetsfrågor'
                  : 'Quick response to security questions'
                }
              </p>
              <Button variant="outline" className="w-full">
                hello@lyyli.ai
              </Button>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="bg-primary/10 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <MessageCircle className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                {language === 'fi' ? 'Chat-tuki' : language === 'sv' ? 'Chattsupport' : 'Chat Support'}
              </h3>
              <p className="text-gray-600 mb-4">
                {language === 'fi'
                  ? 'Välitön apu tietoturvakysymyksiin'
                  : language === 'sv'
                  ? 'Omedelbar hjälp med säkerhetsfrågor'
                  : 'Immediate help with security questions'
                }
              </p>
              <Button variant="outline" className="w-full">
                {language === 'fi' ? 'Aloita chat' : language === 'sv' ? 'Starta chatt' : 'Start Chat'}
              </Button>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="bg-primary/10 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Phone className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                {language === 'fi' ? 'Puhelintuki' : language === 'sv' ? 'Telefonsupport' : 'Phone Support'}
              </h3>
              <p className="text-gray-600 mb-4">
                {language === 'fi'
                  ? 'Henkilökohtainen tuki suurille asiakkaille'
                  : language === 'sv'
                  ? 'Personlig support för företagskunder'
                  : 'Personal support for enterprise customers'
                }
              </p>
              <Button variant="outline" className="w-full" asChild>
                <Link to={language === 'fi' ? '/fi/contact' : language === 'sv' ? '/sv/contact' : '/contact'}>
                  {language === 'fi' ? 'Varaa aika' : language === 'sv' ? 'Boka samtal' : 'Book a Call'}
                </Link>
              </Button>
            </div>
          </div>
          
          <div className="bg-primary/10 p-8 rounded-xl">
            <h3 className="text-xl font-bold text-gray-900 mb-4">
              {language === 'fi' ? 'Tietosuojavastaava' : language === 'sv' ? 'Dataskyddsombud' : 'Data Protection Officer'}
            </h3>
            <p className="text-gray-700 mb-6">
              {language === 'fi'
                ? 'Meillä on nimetty tietosuojavastaava, joka vastaa kaikkiin GDPR ja tietosuojaan liittyviin kysymyksiin. Saat asiantuntevan vastauksen aina 24 tunnin kuluessa.'
                : language === 'sv'
                ? 'Vi har ett utsett dataskyddsombud som svarar på alla GDPR- och dataskyddsrelaterade frågor. Du får ett expertsvar inom 24 timmar.'
                : 'We have a dedicated Data Protection Officer who responds to all GDPR and data protection related questions. You will receive an expert response within 24 hours.'
              }
            </p>
            <Button size="lg" asChild>
              <Link to={language === 'fi' ? '/fi/contact' : language === 'sv' ? '/sv/contact' : '/contact'}>
                {language === 'fi' ? 'Ota yhteyttä tietosuojavastaavaan' : language === 'sv' ? 'Kontakta dataskyddsombudet' : 'Contact Data Protection Officer'}
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SecurityContact;
