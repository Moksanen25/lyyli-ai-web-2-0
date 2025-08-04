'use client';


import React, { useState, useRef, useEffect } from 'react';
import { Send, Loader2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { ScrollArea } from '@/components/ui/scroll-area';
import { useToast } from '@/components/ui/use-toast';
import { useTranslation } from '@/hooks/useTranslation';
import { useIsMobile } from '@/hooks/use-mobile';
import ChatMessage from './ChatMessage';
import { useChatThread } from '@/hooks/use-chat-thread';

interface Message {
  role: 'user' | 'assistant' | 'system';
  content: string;
  timestamp: Date;
}

const ChatInterface = () => {
  const { t } = useTranslation();
  const isMobile = useIsMobile();
  const [messages, setMessages] = useState<Message[]>([
    { 
      role: 'assistant', 
      content: '', 
      timestamp: new Date() 
    }
  ]);
  const [inputMessage, setInputMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);
  const { toast } = useToast();
  
  // Use the extracted chat thread logic
  const { threadId, sendMessage } = useChatThread({
    onError: (errorType) => {
      toast({
        title: t('chat.error.title'),
        description: t(`chat.error.${errorType}`),
        variant: "destructive",
      });
    },
    onMessageReceived: (content) => {
      setMessages(prev => [
        ...prev, 
        { 
          role: 'assistant', 
          content, 
          timestamp: new Date() 
        }
      ]);
      setIsLoading(false);
    }
  });

  // Set welcome message based on current language
  useEffect(() => {
    setMessages([{ 
      role: 'assistant', 
      content: t('chat.welcomeMessage'), 
      timestamp: new Date() 
    }]);
  }, [t]);

  // Scroll to bottom of chat when messages change
  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages]);

  const handleSendMessage = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!inputMessage.trim() || !threadId) {
      return;
    }
    
    // Add user message to chat
    const userMessage: Message = {
      role: 'user',
      content: inputMessage,
      timestamp: new Date()
    };
    
    setMessages(prev => [...prev, userMessage]);
    setInputMessage('');
    setIsLoading(true);
    
    // Send message using the extracted logic
    sendMessage(inputMessage);
  };

  return (
    <div className="h-full flex flex-col">
      <ScrollArea className="flex-grow p-4 h-[calc(100%-80px)]">
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
          <div ref={scrollRef} />
        </div>
      </ScrollArea>
      
      <form onSubmit={handleSendMessage} className="p-4 border-t flex gap-2">
        <Input
          value={inputMessage}
          onChange={(e) => setInputMessage(e.target.value)}
          placeholder={t('chat.inputPlaceholder')}
          disabled={isLoading}
          className="flex-grow"
        />
        <Button type="submit" disabled={isLoading || !inputMessage.trim()}>
          {isLoading ? <Loader2 className="h-4 w-4 animate-spin" /> : <Send className="h-4 w-4" />}
          <span className="sr-only">{t('chat.send')}</span>
        </Button>
      </form>
    </div>
  );
};

export default ChatInterface;
