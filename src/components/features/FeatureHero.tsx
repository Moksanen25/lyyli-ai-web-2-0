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
  
  // Customer segment showcase images with descriptions and links
  const showcaseImages = [
    {
      src: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=800",
      alt: "Tech company team meeting and using digital tools",
      segment: "tech-smes",
      title: t('features.customerSegments.segments.tech.title'),
      desc: t('features.customerSegments.segments.tech.tagline')
    },
    {
      src: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&q=80&w=800",
      alt: "Business consultants in a meeting",
      segment: "consulting",
      title: t('features.customerSegments.segments.consulting.title'),
      desc: t('features.customerSegments.segments.consulting.tagline')
    },
    {
      src: "https://images.unsplash.com/photo-1559027615-cd4628902d4a?auto=format&fit=crop&q=80&w=800",
      alt: "Nonprofit organization team collaborating",
      segment: "nonprofit",
      title: t('features.customerSegments.segments.nonprofit.title'),
      desc: t('features.customerSegments.segments.nonprofit.tagline')
    },
    {
      src: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&q=80&w=800",
      alt: "Educational institution and learning environment",
      segment: "education",
      title: t('features.customerSegments.segments.education.title'),
      desc: t('features.customerSegments.segments.education.tagline')
    },
    {
      src: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=800",
      alt: "Creative studio workspace with design elements",
      segment: "creative",
      title: t('features.customerSegments.segments.creative.title'),
      desc: t('features.customerSegments.segments.creative.tagline')
    },
    {
      src: "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?auto=format&fit=crop&q=80&w=800",
      alt: "Sports team and athletic activities",
      segment: "sports",
      title: t('features.customerSegments.segments.sports.title'),
      desc: t('features.customerSegments.segments.sports.tagline')
    }
  ];
  
  // Auto-rotate carousel with improved timing
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((current) => (current + 1) % showcaseImages.length);
    }, 5000);
    
    return () => clearInterval(interval);
  }, [showcaseImages.length]);
  
  // Handle scroll to segment section when clicking on a showcase title
  const scrollToSegment = (segmentId) => {
    if (!segmentId) return;
    
    const element = document.getElementById(segmentId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };
  
  return (
    <div className="bg-gradient-to-b from-primary/10 to-background pt-24 pb-12 md:pb-20 px-4">
      <div className="container mx-auto">
        <div className="flex items-center justify-center mb-4 md:mb-6">
          <div className="bg-primary/10 text-primary text-xs sm:text-sm font-semibold py-1 px-3 rounded-full">{t('features.enterpriseReady')}</div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-10 items-center">
          <div className="text-left animate-fade-in order-2 lg:order-1">
            <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold mb-4 md:mb-6">
              {t('features.pageHero.title')}
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-muted-foreground mb-6 md:mb-8">
              {t('features.pageHero.description')}
            </p>
            
            {/* Enterprise value props */}
            <div className="mb-6 md:mb-8 space-y-3 md:space-y-4">
              <div className="flex items-start">
                <div className="bg-primary/10 p-1.5 md:p-2 rounded-full mr-2 md:mr-3 flex-shrink-0">
                  <Shield className="h-4 w-4 md:h-5 md:w-5 text-primary" aria-hidden="true" />
                </div>
                <div>
                  <h3 className="font-medium text-sm md:text-base">{t('features.securityTitle')}</h3>
                  <p className="text-xs md:text-sm text-muted-foreground">{t('features.securityDesc')}</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-primary/10 p-1.5 md:p-2 rounded-full mr-2 md:mr-3 flex-shrink-0">
                  <Users className="h-4 w-4 md:h-5 md:w-5 text-primary" aria-hidden="true" />
                </div>
                <div>
                  <h3 className="font-medium text-sm md:text-base">{t('features.supportTitle')}</h3>
                  <p className="text-xs md:text-sm text-muted-foreground">{t('features.supportDesc')}</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-primary/10 p-1.5 md:p-2 rounded-full mr-2 md:mr-3 flex-shrink-0">
                  <Layers className="h-4 w-4 md:h-5 md:w-5 text-primary" aria-hidden="true" />
                </div>
                <div>
                  <h3 className="font-medium text-sm md:text-base">{t('features.integrationsTitle')}</h3>
                  <p className="text-xs md:text-sm text-muted-foreground">{t('features.integrationsDesc')}</p>
                </div>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-3 md:gap-4">
              <Button 
                className="bg-primary hover:bg-primary/90 px-3 py-2 text-sm md:text-base"
                onClick={() => navigate('/full/pricing')}
              >
                {t('features.pageHero.primaryCta')}
              </Button>
              <Button 
                variant="outline"
                className="border-primary text-primary px-3 py-2 text-sm md:text-base"
                onClick={() => navigate('/full/contact')}
              >
                {t('features.pageHero.secondaryCta')}
              </Button>
            </div>
          </div>
          
          <div className="relative order-1 lg:order-2 mb-6 lg:mb-0">
            <Carousel className="w-full">
              <CarouselContent>
                {showcaseImages.map((image, index) => (
                  <CarouselItem key={index}>
                    <div className="relative h-[250px] sm:h-[300px] md:h-[400px] lg:h-[450px] rounded-xl overflow-hidden shadow-xl">
                      <img 
                        src={image.src}
                        alt={image.alt}
                        className="w-full h-full object-cover transition-opacity duration-500"
                        loading={index === 0 ? "eager" : "lazy"}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                      
                      {/* Customer segment labels with links */}
                      <div className="absolute bottom-4 left-4 right-4">
                        <div className="bg-white/90 backdrop-blur-sm rounded-lg px-3 py-2 md:px-4 md:py-3">
                          {image.segment ? (
                            <a 
                              href={`#${image.segment}`} 
                              onClick={(e) => {
                                e.preventDefault();
                                scrollToSegment(image.segment);
                              }}
                              className="block"
                            >
                              <h3 className="font-medium text-base md:text-lg hover:text-primary transition-colors">
                                {image.title}
                              </h3>
                              <p className="text-xs md:text-sm text-muted-foreground">
                                {image.desc}
                              </p>
                            </a>
                          ) : (
                            <>
                              <h3 className="font-medium text-base md:text-lg">
                                {image.title}
                              </h3>
                              <p className="text-xs md:text-sm text-muted-foreground">
                                {image.desc}
                              </p>
                            </>
                          )}
                        </div>
                      </div>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <div className="hidden md:block">
                <CarouselPrevious className="left-2" />
                <CarouselNext className="right-2" />
              </div>
            </Carousel>
            
            {/* Image indicators - improved for accessibility */}
            <div className="flex justify-center mt-4" role="tablist" aria-label="Image carousel navigation">
              {showcaseImages.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={`w-2 h-2 rounded-full mx-1 transition-all ${
                    activeIndex === index ? "bg-primary w-4" : "bg-gray-400"
                  }`}
                  aria-label={`View image ${index + 1}`}
                  aria-selected={activeIndex === index}
                  role="tab"
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
