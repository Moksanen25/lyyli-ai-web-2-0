
import React, { useState } from 'react';
import { useLanguage } from '@/hooks/useLanguage';
import { Card, CardContent } from '@/components/ui/card';
import { Shield, Users, Database, Layers } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';
import { useIsMobile } from '@/hooks/use-mobile';
import BookDemoDialog from '@/components/BookDemoDialog';
import { useSafeTranslation } from '@/utils/safeTranslation';

const EnterpriseCallout: React.FC = () => {
  const { t } = useLanguage();
  const { featuresT } = useSafeTranslation();
  const navigate = useNavigate();
  const isMobile = useIsMobile();
  const [showDemoDialog, setShowDemoDialog] = useState(false);
  
  const enterpriseFeatures = [
    {
      icon: <Shield className="h-8 w-8 md:h-10 md:w-10 text-primary" />,
      title: featuresT('enterpriseReady'),
      description: featuresT('securityDesc')
    },
    {
      icon: <Users className="h-8 w-8 md:h-10 md:w-10 text-primary" />,
      title: featuresT('supportTitle'),
      description: featuresT('supportDesc')
    },
    {
      icon: <Database className="h-8 w-8 md:h-10 md:w-10 text-primary" />,
      title: featuresT('additionalFeatures.ai.title'),
      description: featuresT('additionalFeatures.ai.description')
    },
    {
      icon: <Layers className="h-8 w-8 md:h-10 md:w-10 text-primary" />,
      title: featuresT('integrationsTitle'),
      description: featuresT('integrationsDesc')
    }
  ];

  // For mobile, only show first 2 features to keep it focused
  const displayedFeatures = isMobile ? enterpriseFeatures.slice(0, 2) : enterpriseFeatures;

  const handleConsultation = () => {
    setShowDemoDialog(true);
  };

  return (
    <section className="py-12 md:py-24 bg-gradient-to-br from-primary/5 to-background">
      <div className="container-padding container mx-auto">
        <div className="text-center mb-10 md:mb-16 animate-fade-in">
          <div className="inline-block bg-primary/10 text-primary text-sm font-semibold py-1 px-3 rounded-full mb-3">
            {featuresT('enterpriseReady')}
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">{featuresT('pageHero.title')}</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            {featuresT('pageHero.description')}
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 animate-fade-in mb-8 md:mb-12">
          {displayedFeatures.map((feature, index) => (
            <Card 
              key={index} 
              className="border-none card-shadow hover:shadow-lg transition-shadow duration-300"
            >
              <CardContent className="pt-6 flex flex-col items-center text-center">
                <div className="mb-4 md:mb-6 p-3 rounded-full bg-primary/10">
                  {feature.icon}
                </div>
                <h3 className="text-lg md:text-xl font-semibold mb-2 md:mb-3">{feature.title}</h3>
                <p className="text-sm md:text-base text-muted-foreground">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center">
          <Button 
            size={isMobile ? "default" : "lg"} 
            className="bg-primary hover:bg-primary/90"
            onClick={handleConsultation}
          >
            {t('common.bookDemo')}
          </Button>
          <p className="mt-4 text-sm text-muted-foreground">
            {t('demo.description')}
          </p>
        </div>
      </div>

      {/* Enterprise Demo Dialog */}
      <BookDemoDialog open={showDemoDialog} onOpenChange={setShowDemoDialog} />
    </section>
  );
};

export default EnterpriseCallout;
