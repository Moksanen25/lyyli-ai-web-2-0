import React, { useState } from 'react';
import { useLanguage } from '@/hooks/useLanguage';
import { Card, CardContent } from '@/components/ui/card';
import { Calendar, Users, BookOpen, Search } from 'lucide-react';
import { Button } from '@/components/ui/button';
import BookDemoDialog from '@/components/BookDemoDialog';

const FeaturesSection: React.FC = () => {
  const { t, featuresT, safeTr } = useLanguage();
  const [showDemoDialog, setShowDemoDialog] = useState(false);
  
  // Use both featuresT and safeTr for maximum safety
  const featureTitle1 = featuresT('feature1.title', { fallback: 'AI Content Generation' });
  const featureDesc1 = featuresT('feature1.description', { fallback: 'Create professional content in seconds' });
  
  const featureTitle2 = featuresT('feature2.title', { fallback: 'Team Collaboration' });
  const featureDesc2 = featuresT('feature2.description', { fallback: 'Work seamlessly with your entire team' });
  
  const featureTitle3 = featuresT('feature3.title', { fallback: 'Scheduling & Automation' });
  const featureDesc3 = featuresT('feature3.description', { fallback: 'Set it and forget it with smart scheduling' });
  
  const featureTitle4 = featuresT('feature4.title', { fallback: 'Advanced Analytics' });
  const featureDesc4 = featuresT('feature4.description', { fallback: 'Measure the impact of your communication' });
  
  const features = [
    {
      icon: <BookOpen className="h-10 w-10 text-primary" />,
      title: featureTitle1,
      description: featureDesc1,
    },
    {
      icon: <Users className="h-10 w-10 text-primary" />,
      title: featureTitle2,
      description: featureDesc2,
    },
    {
      icon: <Calendar className="h-10 w-10 text-primary" />,
      title: featureTitle3,
      description: featureDesc3,
    },
    {
      icon: <Search className="h-10 w-10 text-primary" />,
      title: featureTitle4,
      description: featureDesc4,
    },
  ];
  
  // Get a features section title with fallback
  const featuresTitle = safeTr('features.title', {}, { fallback: 'Core Features' });
  const featuresSubtitle = safeTr('features.subtitle', {}, { fallback: 'Built to streamline your communication workflows' });

  return (
    <section className="hidden md:block py-16 md:py-24 bg-white" id="features">
      <div className="container-padding container mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">{featuresTitle}</h2>
          <p className="text-xl text-primary/80 max-w-2xl mx-auto">
            {featuresSubtitle}
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 animate-fade-in">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className="border-none card-shadow hover:shadow-lg transition-shadow duration-300"
            >
              <CardContent className="pt-6 flex flex-col items-center text-center">
                <div className="mb-6 p-3 rounded-full bg-accent/20">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                <p className="text-primary/70">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Button 
            className="bg-primary hover:bg-primary/90"
            onClick={() => setShowDemoDialog(true)}
          >
            {safeTr('common.bookDemo', {}, { fallback: 'Book a Demo' })}
          </Button>
        </div>
      </div>
      
      {/* Demo Dialog */}
      <BookDemoDialog open={showDemoDialog} onOpenChange={setShowDemoDialog} />
    </section>
  );
};

export default FeaturesSection;
