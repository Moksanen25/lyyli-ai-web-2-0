'use client';

import React, { useState } from 'react';
import { useLanguage } from '@/hooks/useLanguage';
import { Card, CardContent } from '@/components/ui/card';
import { Calendar, Users, BookOpen, Search } from 'lucide-react';
import { Button } from '@/components/ui/button';
import BookDemoDialog from '@/components/BookDemoDialog';

const FeaturesSection: React.FC = () => {
  const { featuresT, safeTr } = useLanguage();
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
    <section className="hidden md:block py-16 md:py-24 bg-gradient-to-br from-white to-secondary/20 relative overflow-hidden" id="features">
      {/* Floating decorative elements */}
      <div className="absolute top-16 right-10 w-28 h-28 bg-gradient-to-br from-primary/15 to-accent/15 rounded-full blur-xl opacity-60"></div>
      <div className="absolute bottom-20 left-16 w-20 h-20 bg-gradient-to-br from-accent/20 to-primary/20 rounded-full blur-lg opacity-50"></div>
      
      <div className="container-padding container mx-auto relative z-10">
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
              className="border-none bg-white/80 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group"
            >
              <CardContent className="pt-6 flex flex-col items-center text-center relative">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="mb-6 p-4 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 relative z-10 group-hover:scale-110 transition-transform duration-300">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3 relative z-10">{feature.title}</h3>
                <p className="text-primary/70 relative z-10">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Button 
            className="bg-gradient-to-r from-primary to-primary/90 hover:from-primary/90 hover:to-primary shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 px-8 py-6 text-lg"
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
