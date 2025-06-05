
import React from 'react';
import { useLanguage } from '@/hooks/useLanguage';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { 
  Brain, 
  MessageSquare, 
  Users, 
  Send, 
  ArrowRight,
  Sparkles
} from 'lucide-react';

const HowItWorks: React.FC = () => {
  const { t, language } = useLanguage();

  const steps = [
    {
      icon: Brain,
      titleKey: 'howItWorks.step1.title',
      descriptionKey: 'howItWorks.step1.description',
      color: 'bg-blue-500',
      lightColor: 'bg-blue-50',
    },
    {
      icon: Sparkles,
      titleKey: 'howItWorks.step2.title',
      descriptionKey: 'howItWorks.step2.description',
      color: 'bg-purple-500',
      lightColor: 'bg-purple-50',
    },
    {
      icon: Users,
      titleKey: 'howItWorks.step3.title',
      descriptionKey: 'howItWorks.step3.description',
      color: 'bg-green-500',
      lightColor: 'bg-green-50',
    },
    {
      icon: Send,
      titleKey: 'howItWorks.step4.title',
      descriptionKey: 'howItWorks.step4.description',
      color: 'bg-orange-500',
      lightColor: 'bg-orange-50',
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="container-padding container mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#295045]">
            {t('howItWorks.title')}
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            {t('howItWorks.subtitle')}
          </p>
          
          {/* Lyyli Avatar */}
          <div className="flex justify-center mb-8">
            <div className="w-20 h-20 rounded-full bg-[#295045] flex items-center justify-center">
              <span className="text-white text-2xl font-bold">L</span>
            </div>
          </div>
          
          <p className="text-lg font-medium text-[#295045]">
            {t('howItWorks.tagline')}
          </p>
        </div>

        {/* Steps */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => {
            const IconComponent = step.icon;
            return (
              <div key={index} className="relative">
                <Card className="h-full border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                  <CardContent className="p-8 text-center">
                    {/* Step Number */}
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <div className="w-8 h-8 rounded-full bg-[#295045] text-white flex items-center justify-center text-sm font-bold">
                        {index + 1}
                      </div>
                    </div>
                    
                    {/* Icon */}
                    <div className={`w-16 h-16 rounded-full ${step.lightColor} flex items-center justify-center mx-auto mb-6 mt-4`}>
                      <IconComponent className={`w-8 h-8 text-gray-600`} />
                    </div>
                    
                    {/* Content */}
                    <h3 className="text-xl font-semibold mb-4 text-[#295045]">
                      {t(step.titleKey)}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {t(step.descriptionKey)}
                    </p>
                  </CardContent>
                </Card>
                
                {/* Arrow (desktop only) */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                    <ArrowRight className="w-6 h-6 text-[#295045]/40" />
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <Button 
            size="lg" 
            className="bg-[#295045] hover:bg-[#1f3c34] text-white px-8 py-3"
          >
            {t('howItWorks.cta')}
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
