
import React, { useState, useEffect } from 'react';
import { MessageCircle, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import ChatInterface from './ChatInterface';
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';
import { useIsMobile } from '@/hooks/use-mobile';
import { useLanguage } from '@/contexts/LanguageContext';

const FloatingChat = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showButton, setShowButton] = useState(true);
  const isMobile = useIsMobile();
  const { t } = useLanguage();

  // Handle scroll position to hide button when scrolling down on mobile
  useEffect(() => {
    if (!isMobile) return;

    let lastScrollY = window.scrollY;
    
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      // Hide when scrolling down, show when scrolling up or at the top
      setShowButton(currentScrollY <= 100 || currentScrollY < lastScrollY);
      lastScrollY = currentScrollY;
    };
    
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isMobile]);

  return (
    <div className={`fixed z-50 transition-all duration-300 ${
      showButton ? 'bottom-4 opacity-100' : 'bottom-[-80px] opacity-0'
    } right-4`}>
      {isMobile ? (
        <Dialog open={isOpen} onOpenChange={setIsOpen}>
          <DialogTrigger asChild>
            <Button 
              size="icon" 
              className="h-12 w-12 rounded-full shadow-lg"
            >
              <MessageCircle />
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-md p-0 w-[calc(100vw-32px)]" style={{ height: "80vh" }}>
            <div className="h-full flex flex-col">
              <div className="p-4 border-b flex justify-between items-center">
                <h2 className="font-semibold">{t('chat.title')}</h2>
                <Button 
                  variant="ghost" 
                  size="icon" 
                  onClick={() => setIsOpen(false)}
                >
                  <X className="h-4 w-4" />
                </Button>
              </div>
              <div className="flex-grow overflow-hidden">
                <ChatInterface />
              </div>
            </div>
          </DialogContent>
        </Dialog>
      ) : (
        <div className={`transition-all duration-300 ${isOpen 
          ? 'w-96 h-[600px] bg-card rounded-lg shadow-xl border'
          : 'w-12 h-12'
        }`}>
          {isOpen ? (
            <div className="h-full flex flex-col">
              <div className="p-4 border-b flex justify-between items-center">
                <h2 className="font-semibold">{t('chat.title')}</h2>
                <Button 
                  variant="ghost" 
                  size="icon"
                  onClick={() => setIsOpen(false)}
                >
                  <X className="h-4 w-4" />
                </Button>
              </div>
              <div className="flex-grow overflow-hidden">
                <ChatInterface />
              </div>
            </div>
          ) : (
            <Button 
              size="icon" 
              className="h-12 w-12 rounded-full shadow-lg"
              onClick={() => setIsOpen(true)}
            >
              <MessageCircle />
            </Button>
          )}
        </div>
      )}
    </div>
  );
};

export default FloatingChat;
