import React from 'react';
import { useLanguage } from '@/hooks/useLanguage';
import { Bot, Zap, Shield, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const SolutionIntroSection: React.FC = () => {
  const { language } = useLanguage();

  const capabilities = [
    {
      icon: <Bot className="h-6 w-6" />,
      text: language === 'fi' ? 'AI-avusteinen viestintä' : 'AI-assisted communication'
    },
    {
      icon: <Zap className="h-6 w-6" />,
      text: language === 'fi' ? 'Automaattinen muotoilu' : 'Automatic formatting'
    },
    {
      icon: <Shield className="h-6 w-6" />,
      text: language === 'fi' ? 'Yritystason tietoturva' : 'Enterprise-grade security'
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-primary/5 to-accent/5">
      <div className="container mx-auto container-padding">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
            <CheckCircle className="h-4 w-4" />
            {language === 'fi' ? 'Ratkaisu' : 'The Solution'}
          </div>
          
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-foreground">
            {language === 'fi' 
              ? 'Lyyli.ai mullistaa asiantuntijaviestinnän'
              : 'Lyyli.ai revolutionizes expert communication'
            }
          </h2>
          
          <p className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed">
            {language === 'fi'
              ? 'AI-viestintäassistentti, joka ymmärtää asiantuntijaorganisaatioiden tarpeita. Automaattinen viestien muotoilu, proaktiivinen kommunikointi ja ammattimainen sävy kaikessa viestinnässä.'
              : 'An AI communication assistant that understands expert organizations\' needs. Automatic message formatting, proactive communication, and professional tone in all communications.'
            }
          </p>

          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {capabilities.map((capability, index) => (
              <div key={index} className="flex items-center gap-2 bg-background/80 backdrop-blur-sm px-4 py-2 rounded-full shadow-sm border border-border">
                <div className="text-primary">
                  {capability.icon}
                </div>
                <span className="text-sm font-medium text-foreground">
                  {capability.text}
                </span>
              </div>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-primary to-primary/90 hover:from-primary/90 hover:to-primary text-white px-8 py-6 text-lg rounded-md shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              asChild
            >
              <Link to={language === 'fi' ? '/fi/waitlist' : '/waitlist'}>
                {language === 'fi' ? 'Aloita' : 'Get Started'}
              </Link>
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="border-primary/20 bg-white/80 backdrop-blur-sm text-primary hover:bg-primary hover:text-white px-8 py-6 text-lg shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              asChild
            >
              <Link to={language === 'fi' ? '/fi/features' : '/features'}>
                {language === 'fi' ? 'Tutustu ominaisuuksiin' : 'Explore Features'}
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolutionIntroSection;