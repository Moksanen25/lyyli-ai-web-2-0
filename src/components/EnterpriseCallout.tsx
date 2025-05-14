import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Card, CardContent } from '@/components/ui/card';
import { Shield, Users, Database, Layers } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';
import { useIsMobile } from '@/hooks/use-mobile';

const EnterpriseCallout: React.FC = () => {
  const { t } = useLanguage();
  const navigate = useNavigate();
  const isMobile = useIsMobile();
  
  const enterpriseFeatures = [
    {
      icon: <Shield className="h-8 w-8 md:h-10 md:w-10 text-primary" />,
      title: 'Enterprise Security',
      description: 'ISO 27001 certified with SOC2 compliance and advanced data encryption'
    },
    {
      icon: <Users className="h-8 w-8 md:h-10 md:w-10 text-primary" />,
      title: 'Dedicated Support',
      description: 'White-glove onboarding and 24/7 priority support with SLA guarantees'
    },
    {
      icon: <Database className="h-8 w-8 md:h-10 md:w-10 text-primary" />,
      title: 'Advanced Analytics',
      description: 'Deep insights with custom reporting and executive dashboards'
    },
    {
      icon: <Layers className="h-8 w-8 md:h-10 md:w-10 text-primary" />,
      title: 'Custom Integration',
      description: 'Seamless integration with your existing enterprise tech stack'
    }
  ];

  // For mobile, only show first 2 features to keep it focused
  const displayedFeatures = isMobile ? enterpriseFeatures.slice(0, 2) : enterpriseFeatures;

  return (
    <section className="py-12 md:py-24 bg-gradient-to-br from-primary/5 to-background">
      <div className="container-padding container mx-auto">
        <div className="text-center mb-10 md:mb-16 animate-fade-in">
          <div className="inline-block bg-primary/10 text-primary text-sm font-semibold py-1 px-3 rounded-full mb-3">
            Enterprise Solutions
          </div>
          <h2 className="text-2xl md:text-4xl font-bold mb-4">Built for Enterprise Scale</h2>
          <p className="text-base md:text-xl text-muted-foreground max-w-2xl mx-auto">
            {isMobile 
              ? 'Powerful solutions built for enterprise needs and requirements.'
              : 'Powerful solutions designed specifically for large organizations with complex needs and demanding requirements.'}
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
            onClick={() => navigate('/contact')}
          >
            Schedule Enterprise Consultation
          </Button>
          <p className="mt-4 text-sm text-muted-foreground">
            Learn how we can tailor our solution to your organization's specific needs.
          </p>
        </div>
      </div>
    </section>
  );
};

export default EnterpriseCallout;
