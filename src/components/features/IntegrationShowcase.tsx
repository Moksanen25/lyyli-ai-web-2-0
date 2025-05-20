
import React from 'react';
import { useLanguage } from '@/hooks/useLanguage';
import { Slack, Globe, MessageSquare } from 'lucide-react';

const IntegrationShowcase = () => {
  const { featuresT } = useLanguage();
  
  // Get translations with improved reliability
  const title = featuresT('integrations.title');
  const description = featuresT('integrations.description');
  
  const integrations = [
    {
      icon: <Slack className="h-12 w-12 text-[#4A154B]" />,
      name: "Slack",
      description: featuresT('integrations.slack')
    },
    {
      icon: <MessageSquare className="h-12 w-12 text-[#6264A7]" />,
      name: "Microsoft Teams",
      description: featuresT('integrations.teams')
    },
    {
      icon: <Globe className="h-12 w-12 text-primary" />,
      name: "API",
      description: featuresT('integrations.api')
    }
  ];
  
  return (
    <div className="py-16 md:py-24 px-4 bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            {title}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {description}
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {integrations.map((integration, index) => (
            <div 
              key={index} 
              className="bg-card p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 flex flex-col items-center text-center"
            >
              <div className="mb-4 p-4 rounded-full bg-muted/50">
                {integration.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2">{integration.name}</h3>
              <p className="text-muted-foreground">{integration.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default IntegrationShowcase;
