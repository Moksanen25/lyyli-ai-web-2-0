
import React from 'react';
import { useSafeTranslation } from '@/utils/safeTranslation';
import { ErrorBoundary } from '@/components/ui/error-boundary';

interface ChatInterfaceProps {
  animationPhase: number;
  chatContainerRef: React.RefObject<HTMLDivElement>;
}

const ChatInterface: React.FC<ChatInterfaceProps> = ({ animationPhase, chatContainerRef }) => {
  const { safeT } = useSafeTranslation();
  
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
          <div className="bg-primary rounded-full w-8 h-8 flex items-center justify-center text-white font-semibold">L</div>
          <span className="ml-2 font-medium">Lyyli Assistant</span>
        </div>
        
        <div className="space-y-3">
          {/* Initial assistant message */}
          {animationPhase >= 1 && (
            <div className="bg-muted p-3 rounded-lg max-w-[80%] animate-fade-in">
              <p>{welcomeMessage}</p>
            </div>
          )}
          
          {/* User response */}
          {animationPhase >= 2 && (
            <div className="flex justify-end animate-fade-in">
              <div className="bg-primary/10 p-3 rounded-lg max-w-[80%]">
                <p>{userPrompt}</p>
              </div>
            </div>
          )}
          
          {/* Assistant typing */}
          {animationPhase >= 3 && animationPhase < 4 && (
            <div className="bg-muted p-3 rounded-lg max-w-[80%] animate-fade-in">
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-primary rounded-full animate-pulse"></div>
                <span>{generatingText}</span>
              </div>
            </div>
          )}
          
          {/* Assistant suggestion */}
          {animationPhase >= 4 && (
            <div className="bg-muted p-3 rounded-lg max-w-[80%] animate-fade-in">
              <p>{aiThinking}</p>
            </div>
          )}
          
          {/* User approval */}
          {animationPhase >= 5 && (
            <div className="flex justify-end animate-fade-in">
              <div className="bg-primary/10 p-3 rounded-lg max-w-[80%]">
                <p>{userAnswer}</p>
              </div>
            </div>
          )}
          
          {/* Preparing to publish */}
          {animationPhase >= 6 && (
            <div className="bg-muted p-3 rounded-lg max-w-[80%] animate-fade-in">
              <p>{aiResponse}</p>
              <div className="mt-3 p-3 bg-white border rounded-md">
                <p className="font-medium">{contentHeader}</p>
                <div className="mt-2 whitespace-pre-line">
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
