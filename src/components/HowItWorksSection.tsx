'use client';

import React from 'react';
import { Button } from '@/components/ui/button';
import { Brain, Zap, Users, Send } from 'lucide-react';

const HowItWorksSection: React.FC = () => {
  const steps = [
    {
      icon: <Brain className="h-8 w-8 text-primary" />,
      title: "Lyyli oppii sinusta",
      description: "Jaa tietosi, yhdistä viestintäkanavasi ja anna Lyylin ymmärtää äänesi, tyylisi ja liiketoimintakontekstisi."
    },
    {
      icon: <Zap className="h-8 w-8 text-primary" />,
      title: "Tekoäly ehdottaa sisältöä",
      description: "Lyyli luo proaktiivisesti relevantteja sisältöehdotuksia - sisäisistä Slack-päivityksistä LinkedIn-julkaisuihin ja asiakasviestintään."
    },
    {
      icon: <Users className="h-8 w-8 text-primary" />,
      title: "Teette yhteistyötä",
      description: "Joskus sisältö on valmis julkaistavaksi, joskus lisäät linkin, kuvan tai säädät sävyä. Sinä hallitset aina lopullista viestiä."
    },
    {
      icon: <Send className="h-8 w-8 text-primary" />,
      title: "Lyyli julkaisee puolestasi",
      description: "Hyväksynnän jälkeen Lyyli hoitaa julkaisemisen valitsemillasi alustoilla, varmistaen johdonmukaisen ja oikea-aikaisen viestinnän."
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary">
            Miten se toimii?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Lyyli oppii, ehdottaa, tekee yhteistyötä ja julkaisee - tehden ammatillisesta viestinnästä vaivatonta
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 text-center relative">
                {/* Step number */}
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center text-sm font-bold">
                  {index + 1}
                </div>
                
                {/* Icon */}
                <div className="mt-4 mb-4 flex justify-center">
                  {step.icon}
                </div>
                
                {/* Title */}
                <h3 className="text-lg font-semibold mb-3 text-primary">
                  {step.title}
                </h3>
                
                {/* Description */}
                <p className="text-gray-600 text-sm leading-relaxed">
                  {step.description}
                </p>
              </div>
              
              {/* Arrow connector (except for last item) */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                  <div className="w-8 h-0.5 bg-primary"></div>
                </div>
              )}
            </div>
          ))}
        </div>
        
        <div className="text-center">
          <Button 
            className="bg-primary text-white px-8 py-3 text-lg rounded-md hover:bg-primary/90 transition-colors"
          >
            Varaa demo
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection; 