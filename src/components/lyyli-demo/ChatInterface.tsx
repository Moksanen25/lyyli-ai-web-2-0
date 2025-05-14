
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
            <p>Good morning! 🌞 I notice you have a new feature launching soon. Would you like me to prepare a Slack announcement for the company's public channel?</p>
          </div>
        )}
        
        {/* User response */}
        {animationPhase >= 2 && (
          <div className="flex justify-end animate-fade-in">
            <div className="bg-primary/10 p-3 rounded-lg max-w-[80%]">
              <p>That sounds good. Can you create a draft based on the meeting memo from yesterday's developer meeting?</p>
            </div>
          </div>
        )}
        
        {/* Assistant typing */}
        {animationPhase >= 3 && animationPhase < 4 && (
          <div className="bg-muted p-3 rounded-lg max-w-[80%] animate-fade-in">
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-primary rounded-full animate-pulse"></div>
              <span>Creating draft from meeting memo...</span>
            </div>
          </div>
        )}
        
        {/* Assistant suggestion */}
        {animationPhase >= 4 && (
          <div className="bg-muted p-3 rounded-lg max-w-[80%] animate-fade-in">
            <p>I've drafted a Slack message based on your meeting memo. Here's the suggestion:</p>
            <div className="mt-2 p-3 bg-white border rounded-md">
              <p className="font-medium">✨ Exciting News! 🚀</p>
              <p className="mt-2">Hey team! We're thrilled to announce that our new analytics dashboard will be launching next Tuesday! 📈</p>
              <p className="mt-2">This feature includes:</p>
              <ul className="list-disc ml-6 mt-1">
                <li>Real-time data visualization</li>
                <li>Custom report generation</li>
                <li>Improved export options</li>
              </ul>
              <p className="mt-2">Can't wait for you all to try it out!</p>
            </div>
            <p className="mt-2 text-sm text-muted-foreground">This message follows your company's casual but professional tone of voice. Would you like to add a screenshot of the new feature? 🖼️</p>
          </div>
        )}
        
        {/* User approval */}
        {animationPhase >= 5 && (
          <div className="flex justify-end animate-fade-in">
            <div className="bg-primary/10 p-3 rounded-lg max-w-[80%]">
              <p>This looks perfect! Yes, please add the screenshot and publish it to Slack right away. 👍</p>
            </div>
          </div>
        )}
        
        {/* Preparing to publish */}
        {animationPhase >= 6 && (
          <div className="bg-muted p-3 rounded-lg max-w-[80%] animate-fade-in">
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-primary rounded-full animate-pulse"></div>
              <span>Adding screenshot and publishing to Slack... 🔄</span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ChatInterface;
