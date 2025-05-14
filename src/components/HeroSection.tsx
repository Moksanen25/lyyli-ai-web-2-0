
import React from 'react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';
import { Shield, Database, MessageSquare } from 'lucide-react';
import TrustIndicators from '@/components/TrustIndicators';
import LyyliDemo from '@/components/LyyliDemo';
import { useIsMobile } from '@/hooks/use-mobile';

const HeroSection: React.FC = () => {
  const { t } = useLanguage();
  const isMobile = useIsMobile();

  return (
    <section className="pt-16 pb-10 md:pt-32 md:pb-24 bg-gradient-to-br from-secondary/80 to-white">
      <div className="container-padding container mx-auto flex flex-col lg:flex-row items-center">
        <div className="w-full lg:w-1/2 mb-10 lg:mb-0 animate-fade-in text-center lg:text-left">
          <div className="flex items-center justify-center lg:justify-start mb-4 flex-wrap gap-2">
            <span className="bg-primary/10 text-primary text-xs md:text-sm font-semibold py-1 px-3 rounded-full">Enterprise Ready</span>
            <span className="text-xs md:text-sm text-muted-foreground">Trusted by Fortune 500 companies</span>
          </div>
          <h1 className="text-3xl md:text-4xl lg:text-6xl font-bold mb-4 md:mb-6 leading-tight">
            {t('hero.title')}
          </h1>
          <p className="text-lg md:text-xl lg:text-2xl mb-6 md:mb-8 text-primary/80">
            {t('hero.subtitle')}
          </p>
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 justify-center lg:justify-start">
            <a href="https://lyyli.vercel.app/">
              <Button className="bg-primary hover:bg-primary/90 text-white px-6 py-5 text-base md:text-lg w-full sm:w-auto capitalize">
                {t('hero.cta')}
              </Button>
            </a>
            <LyyliDemo />
          </div>
          
          {/* Enterprise Trust Indicators - Hide on small mobile screens */}
          <div className="mt-8 md:mt-10">
            <TrustIndicators className={isMobile ? "scale-90 origin-center" : ""} />
          </div>
        </div>

        {/* Only show chat mockup on tablet and larger screens */}
        <div className="w-full lg:w-1/2 flex justify-center lg:justify-end animate-fade-in-slow hidden md:flex">
          <div className="relative w-full max-w-lg">
            {/* Chat interface mockup */}
            <div className="bg-white rounded-2xl card-shadow p-4 w-full">
              <div className="flex items-center border-b border-gray-200 pb-3 mb-4">
                <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-white font-bold mr-3">
                  L
                </div>
                <div className="font-medium">Lyyli Assistant</div>
                <div className="ml-auto bg-green-100 text-green-800 text-xs px-2 py-0.5 rounded-full">Enterprise</div>
              </div>
              
              <div className="space-y-3">
                <div className="flex">
                  <div className="bg-secondary rounded-2xl rounded-tl-none p-3 max-w-[80%]">
                    How can I help with your communication needs today?
                  </div>
                </div>
                
                <div className="flex justify-end">
                  <div className="bg-primary/10 rounded-2xl rounded-tr-none p-3 max-w-[80%]">
                    We need to create an internal announcement about our new sustainability initiative
                  </div>
                </div>
                
                <div className="flex">
                  <div className="bg-secondary rounded-2xl rounded-tl-none p-3 max-w-[80%]">
                    I'll draft an internal announcement about your sustainability initiative using your company's tone of voice. Would you prefer a formal email format or a more conversational Teams message?
                  </div>
                </div>
                
                <div className="flex justify-end">
                  <div className="bg-primary/10 rounded-2xl rounded-tr-none p-3 max-w-[80%]">
                    A Teams message that we can share across departments
                  </div>
                </div>
                
                <div className="flex">
                  <div className="bg-secondary rounded-2xl rounded-tl-none p-3 max-w-[80%]">
                    <div className="flex items-center space-x-2 mb-2">
                      <div className="w-4 h-4 rounded-full bg-primary/40 animate-pulse"></div>
                      <span>Drafting Teams message in your brand voice...</span>
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
        
        {/* Mobile-only simpler illustration */}
        <div className="w-full flex justify-center md:hidden animate-fade-in-slow mt-6">
          <div className="bg-white rounded-xl card-shadow p-3 w-full max-w-[280px]">
            <div className="flex items-center mb-3">
              <div className="w-6 h-6 rounded-full bg-primary flex items-center justify-center text-white font-bold text-xs mr-2">
                L
              </div>
              <div className="font-medium text-sm">Lyyli Assistant</div>
            </div>
            <div className="space-y-2">
              <div className="bg-secondary rounded-lg p-2 text-sm">
                I'll draft that Teams message for you right away.
              </div>
              <div className="flex items-center space-x-1 ml-1">
                <div className="w-3 h-3 rounded-full bg-primary/40 animate-pulse"></div>
                <span className="text-xs">Drafting...</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
