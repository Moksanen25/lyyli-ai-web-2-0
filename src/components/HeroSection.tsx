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
    <section className="pt-24 pb-10 md:pt-40 md:pb-24 bg-gradient-to-br from-secondary/80 to-white">
      <div className="container-padding container mx-auto flex flex-col lg:flex-row items-center">
        <div className="w-full lg:w-1/2 mb-8 lg:mb-0 animate-fade-in text-center lg:text-left">
          {/* Enterprise Ready label removed for mobile, kept for desktop */}
          {!isMobile && (
            <div className="flex items-center justify-center lg:justify-start mb-4 flex-wrap gap-2">
              <span className="bg-primary/10 text-primary text-xs md:text-sm font-semibold py-1 px-3 rounded-full">
                {t('hero.enterpriseReady') || 'Enterprise Ready'}
              </span>
            </div>
          )}
          
          <h1 className="text-3xl md:text-4xl lg:text-6xl font-bold mb-3 md:mb-6 leading-tight">
            {t('hero.title')}
          </h1>
          <p className="text-lg md:text-xl lg:text-2xl mb-5 md:mb-8 text-primary/80">
            {t('hero.subtitle')}
          </p>
          <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4 justify-center lg:justify-start">
            <a href="https://lyyli.vercel.app/">
              <Button className="bg-primary hover:bg-primary/90 text-white h-10 px-4 py-2 w-full sm:w-auto">
                {t('hero.cta')}
              </Button>
            </a>
            <LyyliDemo />
          </div>
          
          {/* Trust indicators - Simplified on mobile */}
          {isMobile ? (
            <div className="mt-6 flex justify-center space-x-4">
              <Shield className="h-5 w-5 text-primary/80" />
              <Database className="h-5 w-5 text-primary/80" />
              <MessageSquare className="h-5 w-5 text-primary/80" />
            </div>
          ) : (
            <div className="mt-8 md:mt-10">
              <TrustIndicators indicators={[
                {
                  icon: <Shield className="h-6 w-6 text-primary" />,
                  label: t('hero.badges.security') || "Enterprise Security"
                }, 
                {
                  icon: <Database className="h-6 w-6 text-primary" />,
                  label: t('hero.badges.uptime') || "99.9% Uptime SLA"
                }, 
                {
                  icon: <MessageSquare className="h-6 w-6 text-primary" />,
                  label: t('hero.badges.support') || "24/7 Support"
                }
              ]} />
            </div>
          )}
        </div>

        {/* Improved mobile chat illustration */}
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
                <input type="text" placeholder="Type your message..." className="flex-1 border border-gray-300 rounded-full px-4 py-2 focus:outline-none focus:ring-1 focus:ring-primary" />
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
        
        {/* Mobile-only improved illustration */}
        <div className="w-full flex justify-center md:hidden animate-fade-in-slow">
          <div className="relative">
            <div className="bg-white rounded-xl card-shadow p-3 w-full max-w-[300px]">
              <div className="flex items-center mb-3">
                <div className="w-7 h-7 rounded-full bg-primary flex items-center justify-center text-white font-bold text-sm mr-2">
                  L
                </div>
                <div className="font-medium text-sm">Lyyli Assistant</div>
              </div>
              <div className="space-y-2">
                <div className="bg-secondary rounded-lg p-2.5 text-sm">
                  I'll help you create that message for your team.
                </div>
                <div className="bg-primary/10 rounded-lg p-2.5 ml-auto text-sm max-w-[85%]">
                  Great! Make it friendly but professional.
                </div>
                <div className="flex items-center space-x-1.5 ml-1 mt-1">
                  <div className="w-2.5 h-2.5 rounded-full bg-primary/40 animate-pulse"></div>
                  <span className="text-xs">Drafting...</span>
                </div>
              </div>
            </div>
            {/* Decorative elements for visual appeal */}
            <div className="absolute -bottom-3 -right-3 w-16 h-16 bg-accent/30 rounded-full -z-10"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
