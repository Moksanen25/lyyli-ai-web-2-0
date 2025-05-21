
import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '@/hooks/useLanguage';
import { Button } from '@/components/ui/button';
import { Shield, Database, MessageSquare } from 'lucide-react';

const HeroSection: React.FC = () => {
  const { heroT } = useLanguage();
  
  return (
    <section className="py-20 md:py-32 bg-gradient-to-br from-background to-primary/10">
      <div className="container-padding container mx-auto text-center">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 animate-fade-in">
          {heroT('title')}
        </h1>
        <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto animate-fade-in">
          {heroT('subtitle')}
        </p>
        <div className="flex justify-center space-x-4 mb-12 animate-fade-in">
          <Link to="/pricing">
            <Button size="lg">
              {heroT('cta')}
            </Button>
          </Link>
          <Link to="/contact">
            <Button variant="outline" size="lg">
              {heroT('secondaryCta')}
            </Button>
          </Link>
        </div>
        
        {/* TrustIndicators component removed from here */}
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16 max-w-4xl mx-auto animate-fade-in">
          {/* Trust indicator badges removed from here */}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
