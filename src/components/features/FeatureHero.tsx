import React, { useState, useEffect } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';
import { Shield, Users, Layers } from 'lucide-react';
import { 
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext
} from "@/components/ui/carousel";

const FeatureHero = () => {
  const { t } = useLanguage();
  const navigate = useNavigate();
  const [activeIndex, setActiveIndex] = useState(0);
  
  // Product showcase images
  const showcaseImages = [
    "/images/features-dashboard.jpg", // Original image path
    "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2000&auto=format&fit=crop", // Dashboard analytics
    "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2000&auto=format&fit=crop"  // Business collaboration
  ];
  
  // Auto-rotate carousel
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((current) => (current + 1) % showcaseImages.length);
    }, 5000);
    
    return () => clearInterval(interval);
  }, []);
  
  return (
    <div className="bg-gradient-to-b from-primary/10 to-background pt-24 pb-20 px-4">
      <div className="container mx-auto">
        <div className="flex items-center justify-center mb-6">
          <div className="bg-primary/10 text-primary text-sm font-semibold py-1 px-3 rounded-full">Yritysratkaisut</div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div className="text-left animate-fade-in">
            <h1 className="text-3xl md:text-5xl font-bold mb-6">
              {t('features.pageHero.title')}
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8">
              {t('features.pageHero.description')}
            </p>
            
            {/* Enterprise value props */}
            <div className="mb-8 space-y-4">
              <div className="flex items-start">
                <div className="bg-primary/10 p-2 rounded-full mr-3">
                  <Shield className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-medium">Yritystason tietoturva</h3>
                  <p className="text-sm text-muted-foreground">ISO 27001 -sertifioitu edistyneellä tietosuojalla</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-primary/10 p-2 rounded-full mr-3">
                  <Users className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-medium">Oma yhteyshenkilö</h3>
                  <p className="text-sm text-muted-foreground">Oma tiimisi käyttöönottoa ja tukea varten</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-primary/10 p-2 rounded-full mr-3">
                  <Layers className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-medium">Räätälöidyt integraatiot</h3>
                  <p className="text-sm text-muted-foreground">Saumaton integraatio yritysympäristöösi</p>
                </div>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                className="bg-primary hover:bg-primary/90 h-10 px-4 py-2"
                onClick={() => navigate('/pricing')}
              >
                {t('features.pageHero.primaryCta')}
              </Button>
              <Button 
                variant="outline"
                className="border-primary text-primary h-10 px-4 py-2"
                onClick={() => navigate('/contact')}
              >
                {t('features.pageHero.secondaryCta')}
              </Button>
            </div>
          </div>
          
          <div className="relative">
            <Carousel className="w-full">
              <CarouselContent>
                {showcaseImages.map((image, index) => (
                  <CarouselItem key={index}>
                    <div className="relative min-h-[300px] lg:h-[500px] rounded-xl overflow-hidden shadow-xl">
                      <img 
                        src={image}
                        alt={`${t('features.pageHero.imageAlt')} ${index + 1}`}
                        className="w-full h-full object-cover transition-opacity duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                      
                      {/* Enterprise use case labels */}
                      <div className="absolute bottom-4 left-4 right-4">
                        <div className="bg-white/90 rounded-lg px-4 py-3">
                          <h3 className="font-medium text-lg">{index === 0 ? 'Yrityshallinta' : index === 1 ? 'Kehittynyt analytiikka' : 'Tiimin yhteistyö'}</h3>
                          <p className="text-sm text-muted-foreground">{index === 0 ? 'Mukautettavissa organisaatiollesi' : index === 1 ? 'Datapohjaisia näkemyksiä johdolle' : 'Saumattomat tiimityönkulut'}</p>
                        </div>
                      </div>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="hidden md:flex" />
              <CarouselNext className="hidden md:flex" />
            </Carousel>
            
            {/* Image indicators */}
            <div className="flex justify-center mt-4">
              {showcaseImages.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={`w-2 h-2 rounded-full mx-1 ${
                    activeIndex === index ? "bg-primary" : "bg-gray-400"
                  }`}
                  aria-label={`Go to image ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeatureHero;
