import React from 'react';
import { useLanguage } from '@/hooks/useLanguage';
import { MessageSquare, Clock, TrendingUp, ArrowRight, Zap, Shield, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const ValuePropositionsSection: React.FC = () => {
  const { language } = useLanguage();

  const valueProps = [
    {
      icon: <MessageSquare className="h-8 w-8 text-primary" />,
      capability: language === 'fi' ? 'Proaktiivinen viestintä' : 'Proactive Communication',
      feature: language === 'fi' ? 'AI tunnistaa viestintätarpeet automaattisesti' : 'AI automatically identifies communication needs',
      benefit: language === 'fi' ? 'Tärkeät asiat eivät jää koskaan viestimättä' : 'Important matters never go uncommunicated',
      details: [
        language === 'fi' ? 'Automaattinen viestintätarpeiden tunnistus' : 'Automatic communication need detection',
        language === 'fi' ? 'Kontekstinhakuinen ehdotukset' : 'Context-aware suggestions',
        language === 'fi' ? 'Integrointi olemassa oleviin työkaluihin' : 'Integration with existing tools'
      ]
    },
    {
      icon: <Clock className="h-8 w-8 text-primary" />,
      capability: language === 'fi' ? 'Tehokas viestien luonti' : 'Efficient Message Creation',
      feature: language === 'fi' ? 'Automaattinen muotoilu ja ammattimainen sävy' : 'Automatic formatting and professional tone',
      benefit: language === 'fi' ? 'Säästä 70% ajasta viestien kirjoittamisessa' : 'Save 70% of time spent writing messages',
      details: [
        language === 'fi' ? 'Automaattinen kielioppi ja tyylikorjaus' : 'Automatic grammar and style correction',
        language === 'fi' ? 'Ammattimainen sävyn optimointi' : 'Professional tone optimization',
        language === 'fi' ? 'Mallipohjainen viestien luonti' : 'Template-based message creation'
      ]
    },
    {
      icon: <TrendingUp className="h-8 w-8 text-primary" />,
      capability: language === 'fi' ? 'Johdonmukainen brändi' : 'Consistent Branding',
      feature: language === 'fi' ? 'Yhtenäinen viestintätyyli koko organisaatiossa' : 'Unified communication style across organization',
      benefit: language === 'fi' ? 'Vahvista ammatillista imagoa ja luottamusta' : 'Strengthen professional image and trust',
      details: [
        language === 'fi' ? 'Organisaatiokohtaiset viestintämallit' : 'Organization-specific communication templates',
        language === 'fi' ? 'Brändin mukainen sävyn hallinta' : 'Brand-aligned tone management',
        language === 'fi' ? 'Laatustandardien automatisointi' : 'Quality standard automation'
      ]
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto container-padding">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">
            {language === 'fi' 
              ? 'Kolme syytä valita Lyyli.ai'
              : 'Three reasons to choose Lyyli.ai'
            }
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            {language === 'fi'
              ? 'Asiantuntijaorganisaatioille suunnitellut ratkaisut, jotka parantavat viestintää ja tehostavat työskentelyä.'
              : 'Solutions designed for expert organizations that improve communication and streamline workflow.'
            }
          </p>
        </div>

        <div className="space-y-16">
          {valueProps.map((prop, index) => (
            <div key={index} className={`grid lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
              <div className={`${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                <div className="flex items-center gap-3 mb-6">
                  <div className="bg-primary/10 p-3 rounded-lg">
                    {prop.icon}
                  </div>
                  <div className="text-sm font-medium text-primary bg-primary/10 px-3 py-1 rounded-full">
                    {language === 'fi' ? `Hyöty ${index + 1}` : `Value ${index + 1}`}
                  </div>
                </div>
                
                <h3 className="text-2xl md:text-3xl font-bold mb-4 text-foreground">
                  {prop.capability}
                </h3>
                
                <div className="mb-6">
                  <p className="text-lg font-medium text-muted-foreground mb-2">
                    <span className="text-primary font-semibold">{language === 'fi' ? 'Ominaisuus:' : 'Feature:'}</span> {prop.feature}
                  </p>
                  <p className="text-lg font-medium text-foreground">
                    <span className="text-primary font-semibold">{language === 'fi' ? 'Hyöty:' : 'Benefit:'}</span> {prop.benefit}
                  </p>
                </div>
                
                <ul className="space-y-3 mb-8">
                  {prop.details.map((detail, detailIndex) => (
                    <li key={detailIndex} className="flex items-center gap-3">
                      <div className="bg-primary/20 p-1 rounded-full">
                        <ArrowRight className="h-4 w-4 text-primary" />
                      </div>
                      <span className="text-muted-foreground">{detail}</span>
                    </li>
                  ))}
                </ul>

                <Button 
                  variant="outline" 
                  className="border-primary/20 bg-white/80 backdrop-blur-sm text-primary hover:bg-primary hover:text-white transition-all duration-300"
                  asChild
                >
                  <Link to={language === 'fi' ? '/fi/features' : '/features'}>
                    {language === 'fi' ? 'Lue lisää' : 'Learn More'}
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
              
              <div className={`${index % 2 === 1 ? 'lg:col-start-1' : ''} relative`}>
                <div className="bg-gradient-to-br from-primary/10 to-accent/10 rounded-2xl p-8 h-80 flex items-center justify-center border border-primary/10">
                  <div className="text-center">
                    <div className="bg-primary/20 p-6 rounded-full mb-4 inline-block">
                      {prop.icon}
                    </div>
                    <p className="text-muted-foreground">
                      {language === 'fi' ? 'Tuotekuva tulossa' : 'Product image coming soon'}
                    </p>
                  </div>
                </div>
                
                {/* Decorative elements */}
                <div className="absolute -top-4 -right-4 w-8 h-8 bg-primary/20 rounded-full blur-sm"></div>
                <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-accent/20 rounded-full blur-sm"></div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <Button 
            size="lg" 
            className="bg-gradient-to-r from-primary to-primary/90 hover:from-primary/90 hover:to-primary text-white px-12 py-6 text-xl rounded-md shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            asChild
          >
            <Link to={language === 'fi' ? '/fi/waitlist' : '/waitlist'}>
              {language === 'fi' ? 'Aloita tänään' : 'Start Today'}
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ValuePropositionsSection;