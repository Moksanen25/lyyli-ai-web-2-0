
import React from 'react';
import { useLanguage } from '@/hooks/useLanguage';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

interface FeatureHeroProps {
  title?: string;
  subtitle?: string;
  description?: string;
  image?: string;
  primaryCta?: {
    text: string;
    href: string;
  };
  secondaryCta?: {
    text: string;
    href: string;
  };
}

const FeatureHero: React.FC<FeatureHeroProps> = ({
  title,
  subtitle,
  description,
  image = '/images/features-hero.jpg',
  primaryCta,
  secondaryCta,
}) => {
  const { t } = useLanguage();
  
  // Default values from translations
  const defaultTitle = t('features.hero.title');
  const defaultSubtitle = t('features.hero.subtitle');
  const defaultDescription = t('features.hero.description');
  const defaultPrimaryCta = {
    text: t('features.hero.primaryCta'),
    href: '/full/contact',
  };
  const defaultSecondaryCta = {
    text: t('features.hero.secondaryCta'),
    href: '/full/pricing',
  };
  
  // Use provided values or defaults
  const displayTitle = title || defaultTitle;
  const displaySubtitle = subtitle || defaultSubtitle;
  const displayDescription = description || defaultDescription;
  const displayPrimaryCta = primaryCta || defaultPrimaryCta;
  const displaySecondaryCta = secondaryCta || defaultSecondaryCta;
  
  return (
    <div className="relative bg-gradient-to-b from-primary/10 to-background pt-24 pb-16 md:pt-32 md:pb-24">
      <div className="container-padding container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div className="text-center lg:text-left">
            {displaySubtitle && (
              <div className="inline-block bg-primary/10 text-primary text-sm font-semibold py-1 px-3 rounded-full mb-3">
                {displaySubtitle}
              </div>
            )}
            
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6">
              {displayTitle}
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground mb-6 md:mb-8 max-w-xl mx-auto lg:mx-0">
              {displayDescription}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Link to={displayPrimaryCta.href}>
                <Button className="bg-primary hover:bg-primary/90 h-10 px-4 py-2">
                  {displayPrimaryCta.text}
                </Button>
              </Link>
              
              <Link to={displaySecondaryCta.href}>
                <Button variant="outline" className="border-primary text-primary h-10 px-4 py-2">
                  {displaySecondaryCta.text} <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
          
          <div className="hidden lg:block">
            <img 
              src={image} 
              alt={displayTitle}
              className="rounded-lg shadow-lg object-cover w-full max-h-[500px]"
              onError={(e) => {
                console.error("Image failed to load:", e.currentTarget.src);
                e.currentTarget.src = "/placeholder.svg";
              }}
            />
          </div>
        </div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute top-1/4 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-secondary/10 rounded-full blur-3xl -z-10"></div>
    </div>
  );
};

export default FeatureHero;
