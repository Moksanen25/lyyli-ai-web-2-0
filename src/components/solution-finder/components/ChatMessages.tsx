
import React, { useRef, useEffect } from 'react';
import { ScrollArea } from '@/components/ui/scroll-area';
import ChatMessage from '@/components/chat/ChatMessage';
import { useIsMobile } from '@/hooks/use-mobile';
import { ChatMessage as ChatMessageType } from '../hooks/useSolutionChat';

interface ChatMessagesProps {
  messages: ChatMessageType[];
  isTyping?: boolean;
}

const ChatMessages: React.FC<ChatMessagesProps> = ({ messages, isTyping = false }) => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const isMobile = useIsMobile();
  const scrollAreaRef = useRef<HTMLDivElement>(null);
  
  // Scroll to bottom of chat when messages change or typing state changes
  useEffect(() => {
    if (scrollRef.current) {
      // Only scroll within the chat area, not the whole page
      setTimeout(() => {
        if (scrollRef.current) {
          scrollRef.current.scrollIntoView({ 
            behavior: 'smooth', 
            block: 'end',
            inline: 'nearest'
          });
        }
      }, 100);
    }
  }, [messages, isTyping]);
  
  // Fix for scroll jamming - prevent scroll events from propagating outside the chat container
  const handleScrollAreaWheel = (e: React.WheelEvent<HTMLDivElement>) => {
    const scrollArea = e.currentTarget;
    const isAtBottom = scrollArea.scrollHeight - scrollArea.scrollTop - scrollArea.clientHeight < 1;
    const isAtTop = scrollArea.scrollTop === 0;
    
    if (
      (isAtTop && e.deltaY < 0) || // At top and scrolling up
      (isAtBottom && e.deltaY > 0) // At bottom and scrolling down
    ) {
      // Let the page scroll
      return;
    }
    
    // For all other cases within the scroll area, prevent propagation
    if (scrollArea.contains(e.target as Node)) {
      e.stopPropagation();
    }
  };
  
  return (
    <ScrollArea 
      ref={scrollAreaRef}
      className="flex-grow p-4 overflow-auto" 
      type="always"
      onWheel={handleScrollAreaWheel}
    >
      <div className="space-y-4">
        {messages.map((message, index) => (
          <ChatMessage
            key={index}
            role={message.role}
            content={message.content}
            timestamp={message.timestamp}
            isMobile={isMobile}
          />
        ))}
        
        {isTyping && (
          <div className="flex justify-start">
            <div className="bg-muted rounded-lg p-3 px-4 flex items-center space-x-1">
              <span className="h-2 w-2 bg-gray-500 rounded-full animate-pulse"></span>
              <span className="h-2 w-2 bg-gray-500 rounded-full animate-pulse delay-150"></span>
              <span className="h-2 w-2 bg-gray-500 rounded-full animate-pulse delay-300"></span>
            </div>
          </div>
        )}
        
        <div ref={scrollRef} className="h-1" />
      </div>
    </ScrollArea>
  );
};

export default ChatMessages;
