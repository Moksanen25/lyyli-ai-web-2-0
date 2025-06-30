
import React from 'react';
import { Button } from '@/components/ui/button';
import { Shield, Lock, Server } from 'lucide-react';
import { useLanguage } from '@/hooks/useLanguage';
import { Link } from 'react-router-dom';

const SecurityHero = () => {
  const { t, language } = useLanguage();
  
  return (
    <section className="bg-gradient-to-br from-primary/5 via-primary/10 to-secondary/5 py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex justify-center mb-8">
            <div className="bg-primary/10 p-4 rounded-full">
              <Shield className="h-12 w-12 text-primary" />
            </div>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            {language === 'fi' 
              ? 'Tietoturva ja yksityisyydensuoja Lyylissä'
              : 'Security & Privacy Protection at Lyyli'
            }
          </h1>
          
          <p className="text-xl text-gray-600 mb-8 leading-relaxed">
            {language === 'fi'
              ? 'Kun rakennamme AI-työkalua viestinnän tueksi, ymmärrämme täysin vastuumme asiakkaidemme tietojen suojaamisessa. Tietoturva ei ole meille pelkkä tekninen vaatimus, vaan liiketoimintamme kulmakivi.'
              : 'When building AI tools for communication, we fully understand our responsibility in protecting our customers\' data. Security is not just a technical requirement for us, but the cornerstone of our business.'
            }
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button size="lg" asChild>
              <Link to={language === 'fi' ? '/fi/contact' : '/contact'}>
                {language === 'fi' ? 'Ota yhteyttä' : 'Contact Us'}
              </Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link to={language === 'fi' ? '/fi/features' : '/features'}>
                {language === 'fi' ? 'Katso ominaisuudet' : 'View Features'}
              </Link>
            </Button>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 mt-16">
            <div className="text-center">
              <div className="bg-green-100 p-3 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Shield className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="font-semibold text-lg mb-2">
                {language === 'fi' ? 'GDPR-yhteensopiva' : 'GDPR Compliant'}
              </h3>
              <p className="text-gray-600">
                {language === 'fi'
                  ? 'Täysi GDPR-yhteensopivuus alusta asti'
                  : 'Full GDPR compliance from the ground up'
                }
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-blue-100 p-3 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Server className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="font-semibold text-lg mb-2">
                {language === 'fi' ? 'EU-palvelimet' : 'EU Servers'}
              </h3>
              <p className="text-gray-600">
                {language === 'fi'
                  ? 'Kaikki data pysyy EU:n alueella'
                  : 'All data stays within EU borders'
                }
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-purple-100 p-3 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Lock className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="font-semibold text-lg mb-2">
                {language === 'fi' ? 'AES-256 salaus' : 'AES-256 Encryption'}
              </h3>
              <p className="text-gray-600">
                {language === 'fi'
                  ? 'Korkean tason salaus kaikelle datalle'
                  : 'Military-grade encryption for all data'
                }
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SecurityHero;
