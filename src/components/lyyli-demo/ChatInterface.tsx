
import React from 'react';
import { useSafeTranslation } from '@/utils/safeTranslation';
import { ErrorBoundary } from '@/components/ui/error-boundary';
import { useIsMobile } from '@/hooks/use-mobile';
import ChatMessage from '@/components/chat/ChatMessage';
import { ImageWithFallback } from '@/components/ui/image-with-fallback';

interface ChatInterfaceProps {
  animationPhase: number;
  chatContainerRef: React.RefObject<HTMLDivElement>;
}

const ChatInterface: React.FC<ChatInterfaceProps> = ({ animationPhase, chatContainerRef }) => {
  const { safeT } = useSafeTranslation();
  const isMobile = useIsMobile();
  
  // Safely get translations with fallbacks
  const welcomeMessage = safeT('demo.chatMessages.welcome', { 
    fallback: 'Hi! How can I help with your communications today?' 
  });
  
  const userPrompt = safeT('demo.chatMessages.userPrompt', { 
    fallback: 'We need an internal announcement about our new sustainability initiative' 
  });
  
  const aiThinking = safeT('demo.chatMessages.aiThinking', { 
    fallback: 'I\'ll create an announcement about a sustainability initiative using your company\'s tone of voice. Would you like a formal email or a more casual Teams message?' 
  });
  
  const userAnswer = safeT('demo.chatMessages.userAnswer', { 
    fallback: 'Teams message that we can share to different departments' 
  });
  
  const aiResponse = safeT('demo.chatMessages.aiResponse', { 
    fallback: 'Here\'s a draft Teams message for your sustainability initiative:' 
  });
  
  const contentHeader = safeT('demo.generatedContent.header', { 
    fallback: '🌱 **NEW SUSTAINABILITY INITIATIVE - ACTIONS START NEXT WEEK**' 
  });
  
  const contentBody = safeT('demo.generatedContent.body', { 
    fallback: 'Hi team,\n\nWe\'re excited to announce our new sustainability initiative launching next Monday...' 
  });
  
  const teamReaction = safeT('demo.generatedContent.teamReaction', { 
    fallback: '15 people reacted to this message 👍' 
  });
  
  const generatingText = safeT('demo.generating', { 
    fallback: 'Generating...' 
  });
  
  return (
    <ErrorBoundary>
      <div 
        ref={chatContainerRef}
        className="bg-card p-4 h-full overflow-y-auto"
      >
        <div className="flex items-center mb-4 border-b pb-2">
          <div className="rounded-full w-8 h-8 flex items-center justify-center overflow-hidden">
            <ImageWithFallback 
              src="/lovable-uploads/13b5a3a7-e059-4fe1-ba7b-8173b2638f6e.png"
              alt="Lyyli avatar"
              width={32}
              height={32}
              className="w-full h-full object-cover"
              fallbackSrc="/placeholder.svg"
            />
          </div>
          <span className="ml-2 font-medium">Lyyli Assistant</span>
        </div>
        
        <div className="space-y-3">
          {/* Initial assistant message */}
          {animationPhase >= 1 && (
            <ChatMessage
              role="assistant"
              content={welcomeMessage}
              timestamp={new Date()}
              isMobile={isMobile}
            />
          )}
          
          {/* User response */}
          {animationPhase >= 2 && (
            <ChatMessage
              role="user"
              content={userPrompt}
              timestamp={new Date()}
              isMobile={isMobile}
            />
          )}
          
          {/* Assistant typing */}
          {animationPhase >= 3 && animationPhase < 4 && (
            <div className="bg-muted p-3 rounded-lg max-w-[85%] animate-fade-in">
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-primary rounded-full animate-pulse"></div>
                <span>{generatingText}</span>
              </div>
            </div>
          )}
          
          {/* Assistant suggestion */}
          {animationPhase >= 4 && (
            <ChatMessage
              role="assistant"
              content={aiThinking}
              timestamp={new Date()}
              isMobile={isMobile}
            />
          )}
          
          {/* User approval */}
          {animationPhase >= 5 && (
            <ChatMessage
              role="user"
              content={userAnswer}
              timestamp={new Date()}
              isMobile={isMobile}
            />
          )}
          
          {/* Preparing to publish */}
          {animationPhase >= 6 && (
            <div className="bg-muted p-3 rounded-lg max-w-[85%] break-words animate-fade-in"
                 style={{ 
                   overflowWrap: 'break-word',
                   wordBreak: 'break-word',
                   hyphens: 'auto'
                 }}>
              <p>{aiResponse}</p>
              <div className="mt-3 p-3 bg-white border rounded-md">
                <p className="font-medium">{contentHeader}</p>
                <div className="mt-2 whitespace-pre-line break-words"
                     style={{ 
                       overflowWrap: 'break-word',
                       wordBreak: 'break-word',
                       hyphens: 'auto'
                     }}>
                  {contentBody}
                </div>
                <p className="mt-2 text-sm text-muted-foreground">{teamReaction}</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </ErrorBoundary>
  );
};

export default ChatInterface;
