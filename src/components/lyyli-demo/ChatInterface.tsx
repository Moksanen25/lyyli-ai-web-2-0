
import React, { useRef } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';

interface ChatInterfaceProps {
  animationPhase: number;
  chatContainerRef: React.RefObject<HTMLDivElement>;
}

const ChatInterface: React.FC<ChatInterfaceProps> = ({ animationPhase, chatContainerRef }) => {
  const { t } = useLanguage();
  
  return (
    <div 
      ref={chatContainerRef}
      className="bg-card p-4 h-full overflow-y-auto"
    >
      <div className="flex items-center mb-4 border-b pb-2">
        <div className="bg-primary rounded-full w-8 h-8 flex items-center justify-center text-white font-semibold">L</div>
        <span className="ml-2 font-medium">Lyyli Assistant</span>
      </div>
      
      <div className="space-y-3">
        {/* Initial assistant message */}
        {animationPhase >= 1 && (
          <div className="bg-muted p-3 rounded-lg max-w-[80%] animate-fade-in">
            <p>{t('demo.chatMessages.welcome')}</p>
          </div>
        )}
        
        {/* User response */}
        {animationPhase >= 2 && (
          <div className="flex justify-end animate-fade-in">
            <div className="bg-primary/10 p-3 rounded-lg max-w-[80%]">
              <p>{t('demo.chatMessages.userPrompt')}</p>
            </div>
          </div>
        )}
        
        {/* Assistant typing */}
        {animationPhase >= 3 && animationPhase < 4 && (
          <div className="bg-muted p-3 rounded-lg max-w-[80%] animate-fade-in">
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-primary rounded-full animate-pulse"></div>
              <span>{t('demo.generating')}</span>
            </div>
          </div>
        )}
        
        {/* Assistant suggestion */}
        {animationPhase >= 4 && (
          <div className="bg-muted p-3 rounded-lg max-w-[80%] animate-fade-in">
            <p>{t('demo.chatMessages.aiThinking')}</p>
          </div>
        )}
        
        {/* User approval */}
        {animationPhase >= 5 && (
          <div className="flex justify-end animate-fade-in">
            <div className="bg-primary/10 p-3 rounded-lg max-w-[80%]">
              <p>{t('demo.chatMessages.userAnswer')}</p>
            </div>
          </div>
        )}
        
        {/* Preparing to publish */}
        {animationPhase >= 6 && (
          <div className="bg-muted p-3 rounded-lg max-w-[80%] animate-fade-in">
            <p>{t('demo.chatMessages.aiResponse')}</p>
            <div className="mt-3 p-3 bg-white border rounded-md">
              <p className="font-medium">{t('demo.generatedContent.header')}</p>
              <div className="mt-2 whitespace-pre-line">
                {t('demo.generatedContent.body')}
              </div>
              <p className="mt-2 text-sm text-muted-foreground">{t('demo.generatedContent.teamReaction')}</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ChatInterface;
