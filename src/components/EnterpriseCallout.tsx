'use client';


import React, { useState } from 'react';
import { useLanguage } from '@/hooks/useLanguage';
import { Card, CardContent } from '@/components/ui/card';
import { Shield, Users, Database, Layers } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useIsMobile } from '@/hooks/use-mobile';
import BookDemoDialog from '@/components/BookDemoDialog';

const EnterpriseCallout: React.FC = () => {
  const { t, featuresT } = useLanguage();
  const isMobile = useIsMobile();
  const [showDemoDialog, setShowDemoDialog] = useState(false);
  
  const enterpriseFeatures = [
    {
      icon: <Shield className="h-8 w-8 md:h-10 md:w-10 text-primary" />,
      title: t('features.enterpriseReady') || "Enterprise Security",
      description: t('features.securityDesc') || "Built with enterprise-grade security and compliance"
    },
    {
      icon: <Users className="h-8 w-8 md:h-10 md:w-10 text-primary" />,
      title: t('features.supportTitle') || "Dedicated Support",
      description: t('features.supportDesc') || "Get priority support with dedicated account management"
    },
    {
      icon: <Database className="h-8 w-8 md:h-10 md:w-10 text-primary" />,
      title: t('features.additionalFeatures.ai.title') || "Advanced AI",
      description: t('features.additionalFeatures.ai.description') || "Access to our most powerful AI models"
    },
    {
      icon: <Layers className="h-8 w-8 md:h-10 md:w-10 text-primary" />,
      title: t('features.integrationsTitle') || "Custom Integrations",
      description: t('features.integrationsDesc') || "Connect with your existing enterprise tools"
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
            {t('features.enterpriseReady') || "Enterprise Ready"}
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            {featuresT('hero.title') || "Enterprise-Grade Solutions"}
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            {featuresT('hero.description') || "Get the advanced features, security, and support your organization needs"}
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
            {t('demo.description') || "Schedule a consultation with our team to learn how we can help your organization"}
          </p>
        </div>
      </div>

      {/* Enterprise Demo Dialog */}
      <BookDemoDialog open={showDemoDialog} onOpenChange={setShowDemoDialog} />
    </section>
  );
};

export default EnterpriseCallout;
