'use client';


import React, { useState, useEffect } from 'react';
import { Card } from '@/components/ui/card';
import { useSafeTranslation } from '@/utils/safeTranslation';
import BookDemoDialog from '@/components/BookDemoDialog';
import { useSolutionChat } from './hooks/useSolutionChat';
import { ChatMessage } from './hooks/types';
import ChatHeader from './components/ChatHeader';
import ChatMessages from './components/ChatMessages';
import IndustryButtons from './components/IndustryButtons';
import ChatForm from './components/ChatForm';
import ChatToggle from './components/ChatToggle';
import { useIsMobile } from '@/hooks/use-mobile';
import { useLanguage } from '@/hooks/useLanguage';

const SolutionFinderChat: React.FC = () => {
  const { featuresT } = useSafeTranslation();
  const { language } = useLanguage(); // Get current language
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [showIndustryButtons, setShowIndustryButtons] = useState(true);
  const isMobile = useIsMobile();
  
  const {
    messages,
    inputMessage,
    isLoading,
    isTyping,
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
      const initialMessage: ChatMessage = { 
        role: 'assistant', 
        content: welcomeMessage, 
        timestamp: new Date() 
      };
      
      // We need to directly call the setter from useSolutionChat
      // since we can't add this logic there without creating a circular dependency
      handleReceiveWelcomeMessage(initialMessage);
    }
  }, [featuresT, messages.length]);
  
  const handleReceiveWelcomeMessage = (message: ChatMessage) => {
    // This is just a helper to add the initial message directly
    if (messages.length === 0) {
      messages.push(message);
    }
  };

  const toggleChat = () => {
    setIsChatOpen(!isChatOpen);
  };

  // Modified industry selection handler to immediately start the chat process in correct language
  const handleIndustryButtonClick = (industryId: string) => {
    // Hide the industry buttons immediately
    setShowIndustryButtons(false);
    
    // Directly submit the industry selection to start the chat process in current language
    handleIndustrySelection(industryId, industryId, language);
  };

  return (
    <div className="max-w-4xl mx-auto">
      {/* Mobile toggle button */}
      <ChatToggle 
        isChatOpen={isChatOpen}
        onToggle={toggleChat}
      />

      <div className={`md:flex ${isChatOpen ? 'block' : 'hidden md:block'}`}>
        <Card className={`flex-1 border flex flex-col ${isMobile ? 'h-[70vh]' : 'h-[500px] max-h-[500px]'}`}>
          <ChatHeader />
          
          <ChatMessages 
            messages={messages} 
            isTyping={isTyping} 
          />
          
          <div className="p-3 border-t">
            <IndustryButtons 
              onSelectIndustry={handleIndustryButtonClick} 
              isVisible={showIndustryButtons}
            />
            
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
