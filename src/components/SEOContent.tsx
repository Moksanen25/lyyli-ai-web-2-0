import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '@/hooks/useLanguage';
import { Button } from '@/components/ui/button';
import { ArrowRight, CheckCircle } from 'lucide-react';

const SEOContent: React.FC = () => {
  const { language } = useLanguage();

  const features = language === 'fi' ? [
    'Automaattinen sisällönluonti tekoälyn avulla',
    'GDPR-yhteensopiva tietosuoja',
    'EU-palvelimet ja suomalainen tuki',
    'Integraatio olemassa oleviin järjestelmiin',
    'Reaaliaikainen yhteistyö ja versionhallinta',
    'Monikanavajakelun automatisointi'
  ] : [
    'Automated content creation with AI',
    'GDPR-compliant data protection',
    'EU servers and Finnish support',
    'Integration with existing systems',
    'Real-time collaboration and version control',
    'Multi-channel distribution automation'
  ];

  const benefits = language === 'fi' ? [
    'Säästä 80% aikaa sisällöntuotannossa',
    'Paranna viestinnän johdonmukaisuutta',
    'Vähennä markkinointikuluja merkittävästi',
    'Nopea käyttöönotto ja käyttäjäystävällinen'
  ] : [
    'Save 80% time in content production',
    'Improve communication consistency',
    'Significantly reduce marketing costs',
    'Quick deployment and user-friendly'
  ];

  const title = language === 'fi' 
    ? 'Miksi valita Lyyli viestintäassistentiksesi?'
    : 'Why choose Lyyli as your communication assistant?';

  const description = language === 'fi'
    ? 'Lyyli muuttaa tapaa, jolla yritykset luovat ja hallitsevat sisältöä. Tekoälyavusteinen alustamme automatisoi rutiinitehtäviä, parantaa sisällön laatua ja varmistaa johdonmukaisen viestinnän kaikissa kanavissa.'
    : 'Lyyli transforms how businesses create and manage content. Our AI-powered platform automates routine tasks, improves content quality, and ensures consistent communication across all channels.';

  const ctaText = language === 'fi' ? 'Aloita maksuton kokeilu' : 'Start free trial';
  const learnMoreText = language === 'fi' ? 'Lue lisää ominaisuuksista' : 'Learn more about features';

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-6 text-foreground">
            {title}
          </h2>
          
          <p className="text-lg text-muted-foreground text-center mb-12 leading-relaxed">
            {description}
          </p>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div>
              <h3 className="text-xl font-semibold mb-4 text-foreground">
                {language === 'fi' ? 'Keskeiset ominaisuudet' : 'Key features'}
              </h3>
              <ul className="space-y-3">
                {features.map((feature, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-4 text-foreground">
                {language === 'fi' ? 'Liiketoimintahyödyt' : 'Business benefits'}
              </h3>
              <ul className="space-y-3">
                {benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="text-center space-y-4">
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-primary hover:bg-primary/90 text-primary-foreground"
                asChild
              >
                <Link to={language === 'fi' ? '/fi/waitlist' : '/waitlist'}>
                  {ctaText}
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </Button>
              
              <Button 
                variant="outline" 
                size="lg"
                asChild
              >
                <Link to={language === 'fi' ? '/fi/features' : '/features'}>
                  {learnMoreText}
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SEOContent;