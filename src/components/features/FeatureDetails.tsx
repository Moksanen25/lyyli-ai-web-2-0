
import React from 'react';
import { useLanguage } from '@/hooks/useLanguage';
import { BookOpen, Users, Calendar, PieChart, Wand, Layers, Network } from 'lucide-react';

const FeatureDetails = () => {
  const { featuresT } = useLanguage();
  
  // Main feature section titles
  const mainFeaturesTitle = featuresT('mainFeatures.title');
  const additionalFeaturesTitle = featuresT('additionalFeatures.title');
  
  const mainFeatures = [
    {
      icon: <BookOpen className="h-10 w-10 text-primary" />,
      title: featuresT('feature1.title'),
      description: featuresT('feature1.description'),
    },
    {
      icon: <Users className="h-10 w-10 text-primary" />,
      title: featuresT('feature2.title'),
      description: featuresT('feature2.description'),
    },
    {
      icon: <Calendar className="h-10 w-10 text-primary" />,
      title: featuresT('feature3.title'),
      description: featuresT('feature3.description'),
    },
    {
      icon: <PieChart className="h-10 w-10 text-primary" />,
      title: featuresT('feature4.title'),
      description: featuresT('feature4.description'),
    },
  ];

  const additionalFeatures = [
    {
      icon: <Wand className="h-8 w-8 text-primary" />,
      title: featuresT('additionalFeaturesAi.title'),
      description: featuresT('additionalFeaturesAi.description'),
    },
    {
      icon: <Layers className="h-8 w-8 text-primary" />,
      title: featuresT('additionalFeatures.workflow.title'),
      description: featuresT('additionalFeatures.workflow.description'),
    },
    {
      icon: <Network className="h-8 w-8 text-primary" />,
      title: featuresT('additionalFeatures.integration.title'),
      description: featuresT('additionalFeatures.integration.description'),
    },
  ];
  
  return (
    <div className="py-16 md:py-24 px-4">
      <div className="container mx-auto">
        {/* Main Features Section */}
        <div className="mb-20">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-12">
            {mainFeaturesTitle}
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {mainFeatures.map((feature, index) => (
              <div 
                key={index}
                className="bg-card rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow duration-300 animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="mb-4 p-3 rounded-full bg-primary/10 inline-block">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
        
        {/* Additional Features Section */}
        <div>
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-12">
            {additionalFeaturesTitle}
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {additionalFeatures.map((feature, index) => (
              <div 
                key={index}
                className="flex flex-col items-center text-center p-6 animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="mb-4 p-3 rounded-full bg-primary/10 inline-block">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeatureDetails;
