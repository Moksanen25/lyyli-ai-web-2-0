
import React from 'react';
import { useLanguage } from '@/hooks/useLanguage';
import { BookOpen, Users, Calendar, PieChart, Wand, Layers, Network } from 'lucide-react';

const FeatureDetails = () => {
  const { t, safeTr, featuresT } = useLanguage();
  
  // Use enhanced translation helpers for better fallback
  const getFeatureTranslation = (key: string, defaultValue: string): string => {
    // Try multiple paths to get the translation
    const directTranslation = t(`features.${key}`);
    if (directTranslation && directTranslation !== `features.${key}`) {
      return directTranslation;
    }
    
    // Try with featuresT helper
    const featureTranslation = featuresT(key);
    if (featureTranslation && !featureTranslation.includes('features.')) {
      return featureTranslation;
    }
    
    // Last resort fallback
    return safeTr(`features.${key}`, defaultValue);
  };
  
  // Get main feature section title with fallback
  const mainFeaturesTitle = getFeatureTranslation('mainFeatures.title', 'Core Features');
  const additionalFeaturesTitle = getFeatureTranslation('additionalFeatures.title', 'Additional Features');
  
  const mainFeatures = [
    {
      icon: <BookOpen className="h-10 w-10 text-primary" />,
      title: getFeatureTranslation('feature1.title', 'AI Content Generation'),
      description: getFeatureTranslation('feature1.description', 'Create professional content in seconds'),
    },
    {
      icon: <Users className="h-10 w-10 text-primary" />,
      title: getFeatureTranslation('feature2.title', 'Team Collaboration'),
      description: getFeatureTranslation('feature2.description', 'Work seamlessly with your entire team'),
    },
    {
      icon: <Calendar className="h-10 w-10 text-primary" />,
      title: getFeatureTranslation('feature3.title', 'Scheduling & Automation'),
      description: getFeatureTranslation('feature3.description', 'Set it and forget it with smart scheduling'),
    },
    {
      icon: <PieChart className="h-10 w-10 text-primary" />,
      title: getFeatureTranslation('feature4.title', 'Advanced Analytics'),
      description: getFeatureTranslation('feature4.description', 'Measure the impact of your communication'),
    },
  ];

  const additionalFeatures = [
    {
      icon: <Wand className="h-8 w-8 text-primary" />,
      title: getFeatureTranslation('additionalFeatures.ai.title', 'Advanced AI'),
      description: getFeatureTranslation('additionalFeatures.ai.description', 'Access to the most powerful AI models'),
    },
    {
      icon: <Layers className="h-8 w-8 text-primary" />,
      title: getFeatureTranslation('additionalFeatures.workflow.title', 'Workflow Automation'),
      description: getFeatureTranslation('additionalFeatures.workflow.description', 'Automate repetitive tasks'),
    },
    {
      icon: <Network className="h-8 w-8 text-primary" />,
      title: getFeatureTranslation('additionalFeatures.integration.title', 'Custom Integrations'),
      description: getFeatureTranslation('additionalFeatures.integration.description', 'Connect with your existing business tools'),
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
