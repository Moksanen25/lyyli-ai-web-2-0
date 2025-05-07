
import React from 'react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';

const HeroSection: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section className="pt-24 pb-16 md:pt-32 md:pb-24 bg-gradient-to-br from-secondary to-white">
      <div className="container-padding container mx-auto flex flex-col lg:flex-row items-center">
        <div className="w-full lg:w-1/2 mb-10 lg:mb-0 animate-fade-in">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            {t('hero.title')}
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-primary/80">
            {t('hero.subtitle')}
          </p>
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
            <a href="https://lyyli.vercel.app/">
              <Button className="bg-primary hover:bg-primary/90 text-white px-8 py-6 text-lg">
                {t('hero.cta')}
              </Button>
            </a>
            <Button 
              variant="outline" 
              className="border-primary text-primary hover:bg-primary/10 px-8 py-6 text-lg"
            >
              {t('hero.secondaryCta')}
            </Button>
          </div>
        </div>

        <div className="w-full lg:w-1/2 flex justify-center lg:justify-end animate-fade-in-slow">
          <div className="relative w-full max-w-lg">
            {/* Chat interface mockup */}
            <div className="bg-white rounded-2xl card-shadow p-4 w-full">
              <div className="flex items-center border-b border-gray-200 pb-3 mb-4">
                <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-white font-bold mr-3">
                  L
                </div>
                <div className="font-medium">Lyyli Assistant</div>
              </div>
              
              <div className="space-y-3">
                <div className="flex">
                  <div className="bg-secondary rounded-2xl rounded-tl-none p-3 max-w-[80%]">
                    How can I help you with content creation today?
                  </div>
                </div>
                
                <div className="flex justify-end">
                  <div className="bg-primary/10 rounded-2xl rounded-tr-none p-3 max-w-[80%]">
                    I need a blog post about sustainable marketing
                  </div>
                </div>
                
                <div className="flex">
                  <div className="bg-secondary rounded-2xl rounded-tl-none p-3 max-w-[80%]">
                    I'll create a blog post about sustainable marketing strategies. Would you like me to focus on specific aspects like eco-friendly campaigns or reducing digital waste?
                  </div>
                </div>
                
                <div className="flex justify-end">
                  <div className="bg-primary/10 rounded-2xl rounded-tr-none p-3 max-w-[80%]">
                    Focus on eco-friendly campaigns please
                  </div>
                </div>
                
                <div className="flex">
                  <div className="bg-secondary rounded-2xl rounded-tl-none p-3 max-w-[80%]">
                    <div className="flex items-center space-x-2 mb-2">
                      <div className="w-4 h-4 rounded-full bg-primary/40 animate-pulse"></div>
                      <span>Generating content...</span>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="mt-4 flex items-center border-t border-gray-200 pt-3">
                <input 
                  type="text" 
                  placeholder="Type your message..." 
                  className="flex-1 border border-gray-300 rounded-full px-4 py-2 focus:outline-none focus:ring-1 focus:ring-primary"
                />
                <button className="ml-2 bg-primary text-white rounded-full p-2">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-5 h-5">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                  </svg>
                </button>
              </div>
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-20 h-20 bg-accent/30 rounded-full -z-10"></div>
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-secondary/70 rounded-full -z-10"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
