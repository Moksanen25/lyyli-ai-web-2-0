
import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '@/hooks/useLanguage';
import { Button } from '@/components/ui/button';
import { Shield, Database, MessageSquare } from 'lucide-react';
import TrustIndicators from './TrustIndicators';

const HeroSection: React.FC = () => {
  const { t } = useLanguage();
  
  return (
    <section className="py-20 md:py-32 bg-gradient-to-br from-background to-primary/10">
      <div className="container-padding container mx-auto text-center">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 animate-fade-in">
          {t('hero.title')}
        </h1>
        <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto animate-fade-in">
          {t('hero.subtitle')}
        </p>
        <div className="flex justify-center space-x-4 mb-12 animate-fade-in">
          <Link to="/pricing">
            <Button size="lg">
              {t('hero.cta')}
            </Button>
          </Link>
          <Link to="/contact">
            <Button variant="outline" size="lg">
              {t('hero.secondaryCta')}
            </Button>
          </Link>
        </div>
        
        <TrustIndicators />
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16 max-w-4xl mx-auto animate-fade-in">
          <div className="flex flex-col items-center justify-center bg-secondary/10 rounded-xl p-6">
            <Shield className="h-8 w-8 text-primary mb-3" />
            <h3 className="text-xl font-semibold mb-2">{t('hero.badges.security')}</h3>
            <p className="text-muted-foreground">{t('hero.badges.securityDescription')}</p>
          </div>
          
          <div className="flex flex-col items-center justify-center bg-secondary/10 rounded-xl p-6">
            <Database className="h-8 w-8 text-primary mb-3" />
            <h3 className="text-xl font-semibold mb-2">{t('hero.badges.uptime')}</h3>
            <p className="text-muted-foreground">{t('hero.badges.uptimeDescription')}</p>
          </div>
          
          <div className="flex flex-col items-center justify-center bg-secondary/10 rounded-xl p-6">
            <MessageSquare className="h-8 w-8 text-primary mb-3" />
            <h3 className="text-xl font-semibold mb-2">{t('hero.badges.support')}</h3>
            <p className="text-muted-foreground">{t('hero.badges.supportDescription')}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
