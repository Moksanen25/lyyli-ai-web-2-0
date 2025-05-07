
import React, { useState } from 'react';
import { MessageCircle, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import ChatInterface from './ChatInterface';
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';
import { useIsMobile } from '@/hooks/use-mobile';
import { useLanguage } from '@/contexts/LanguageContext';

const FloatingChat = () => {
  const [isOpen, setIsOpen] = useState(false);
  const isMobile = useIsMobile();
  const { t } = useLanguage();

  return (
    <div className="fixed bottom-4 right-4 z-50">
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
          <DialogContent className="sm:max-w-md p-0 h-[80vh]">
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
