
import React, { useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Card, CardContent } from '@/components/ui/card';
import { Calendar, Users, BookOpen, Search } from 'lucide-react';
import { Button } from '@/components/ui/button';
import BookDemoDialog from '@/components/BookDemoDialog';

const FeaturesSection: React.FC = () => {
  const { t } = useLanguage();
  const [showDemoDialog, setShowDemoDialog] = useState(false);
  
  const features = [
    {
      icon: <BookOpen className="h-10 w-10 text-primary" />,
      title: t('features.feature1.title'),
      description: t('features.feature1.description'),
    },
    {
      icon: <Users className="h-10 w-10 text-primary" />,
      title: t('features.feature2.title'),
      description: t('features.feature2.description'),
    },
    {
      icon: <Calendar className="h-10 w-10 text-primary" />,
      title: t('features.feature3.title'),
      description: t('features.feature3.description'),
    },
    {
      icon: <Search className="h-10 w-10 text-primary" />,
      title: t('features.feature4.title'),
      description: t('features.feature4.description'),
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-white" id="features">
      <div className="container-padding container mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">{t('features.title')}</h2>
          <p className="text-xl text-primary/80 max-w-2xl mx-auto">
            {t('features.subtitle')}
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
            {t('common.bookDemo')}
          </Button>
        </div>
      </div>
      
      {/* Demo Dialog */}
      <BookDemoDialog open={showDemoDialog} onOpenChange={setShowDemoDialog} />
    </section>
  );
};

export default FeaturesSection;
