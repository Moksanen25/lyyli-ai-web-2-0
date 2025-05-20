
import React, { useState, useEffect } from 'react';
import { Card } from '@/components/ui/card';
import { useSafeTranslation } from '@/utils/safeTranslation';
import BookDemoDialog from '@/components/BookDemoDialog';
import { useSolutionChat } from './hooks/useSolutionChat';
import ChatHeader from './components/ChatHeader';
import ChatMessages from './components/ChatMessages';
import IndustryButtons from './components/IndustryButtons';
import ChatForm from './components/ChatForm';
import ChatToggle from './components/ChatToggle';

const SolutionFinderChat: React.FC = () => {
  const { featuresT } = useSafeTranslation();
  const [isChatOpen, setIsChatOpen] = useState(false);
  
  const {
    messages,
    inputMessage,
    isLoading,
    showDemoDialog,
    setInputMessage,
    setShowDemoDialog,
    handleSendMessage,
    handleIndustrySelection
  } = useSolutionChat();
  
  // Set initial welcome message
  useEffect(() => {
    const welcomeMessage = featuresT('solutionFinder.welcomeMessage', {
      fallback: "Hi there! I'm Lyyli, your assistant for finding the perfect solution for your industry. What type of organization are you from? You can select one of the options below or tell me about your organization."
    });
    
    if (messages.length === 0) {
      // Only set initial message if there are no messages yet
      const initialMessage = { 
        role: 'assistant', 
        content: welcomeMessage, 
        timestamp: new Date() 
      };
      
      // We need to directly call the setter from useSolutionChat
      // since we can't add this logic there without creating a circular dependency
      handleReceiveWelcomeMessage(initialMessage);
    }
  }, [featuresT, messages.length]);
  
  const handleReceiveWelcomeMessage = (message: any) => {
    // This is just a helper to add the initial message directly
    if (messages.length === 0) {
      messages.push(message);
    }
  };

  const toggleChat = () => {
    setIsChatOpen(!isChatOpen);
  };

  return (
    <div className="max-w-4xl mx-auto">
      {/* Mobile toggle button */}
      <ChatToggle 
        isChatOpen={isChatOpen}
        onToggle={toggleChat}
      />

      <div className={`md:flex ${isChatOpen ? 'block' : 'hidden md:block'}`}>
        <Card className="flex-1 border h-[500px] max-h-[500px] flex flex-col">
          <ChatHeader />
          
          <ChatMessages messages={messages} />
          
          <div className="p-3 border-t">
            <IndustryButtons onSelectIndustry={handleIndustrySelection} />
            
            <ChatForm
              inputMessage={inputMessage}
              isLoading={isLoading}
              onInputChange={setInputMessage}
              onSubmit={handleSendMessage}
            />
          </div>
        </Card>
      </div>
      
      {/* Demo Dialog */}
      <BookDemoDialog open={showDemoDialog} onOpenChange={setShowDemoDialog} />
    </div>
  );
};

export default SolutionFinderChat;
