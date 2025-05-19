import React, { useState, useRef, useEffect } from 'react';
import { Send, Loader2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { ScrollArea } from '@/components/ui/scroll-area';
import { useToast } from '@/components/ui/use-toast';
import { useLanguage } from '@/contexts/LanguageContext';
import { useIsMobile } from '@/hooks/use-mobile';
import {
  createThread,
  getThreadId,
  addMessageToThread,
  runAssistant,
  checkRunStatus,
  getMessages
} from '@/services/openaiService';

interface Message {
  role: 'user' | 'assistant' | 'system';
  content: string;
  timestamp: Date;
}

const ChatInterface = () => {
  const { t } = useLanguage();
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
  const [threadId, setThreadId] = useState<string | null>(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  const { toast } = useToast();
  
  // Set welcome message based on current language
  useEffect(() => {
    setMessages([{ 
      role: 'assistant', 
      content: t('chat.welcomeMessage'), 
      timestamp: new Date() 
    }]);
  }, [t]);

  // Initialize thread
  useEffect(() => {
    const storedThreadId = getThreadId();
    if (storedThreadId) {
      setThreadId(storedThreadId);
    } else {
      initializeThread();
    }
  }, []);

  // Scroll to bottom of chat when messages change
  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages]);

  const initializeThread = async () => {
    try {
      const newThreadId = await createThread();
      setThreadId(newThreadId);
    } catch (error) {
      console.error('Error initializing thread:', error);
      toast({
        title: t('chat.error.title'),
        description: t('chat.error.initThread'),
        variant: "destructive",
      });
    }
  };

  const pollRunStatus = async (threadId: string, runId: string) => {
    let runStatus;
    try {
      runStatus = await checkRunStatus(threadId, runId);
      
      while (runStatus.status !== 'completed' && runStatus.status !== 'failed' && runStatus.status !== 'expired') {
        await new Promise(resolve => setTimeout(resolve, 1000));
        runStatus = await checkRunStatus(threadId, runId);
      }
      
      if (runStatus.status === 'completed') {
        const messagesResponse = await getMessages(threadId);
        
        if (messagesResponse.data && messagesResponse.data.length > 0) {
          const assistantMessage = messagesResponse.data.find(
            (msg: any) => msg.role === 'assistant'
          );
          
          if (assistantMessage) {
            const content = assistantMessage.content[0].text.value;
            
            setMessages(prev => [
              ...prev, 
              { 
                role: 'assistant', 
                content, 
                timestamp: new Date() 
              }
            ]);
          }
        }
      } else {
        throw new Error(`Run ended with status: ${runStatus.status}`);
      }
    } catch (error) {
      console.error('Error polling run status:', error);
      throw error;
    }
  };

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
    
    try {
      // Send message to OpenAI Assistant
      await addMessageToThread(threadId, inputMessage);
      
      // Run the assistant
      const runResponse = await runAssistant(threadId);
      
      // Poll for completion and get response
      await pollRunStatus(threadId, runResponse.id);
      
      setIsLoading(false);
    } catch (error) {
      console.error('Error sending message:', error);
      toast({
        title: t('chat.error.title'),
        description: t('chat.error.sendMessage'),
        variant: "destructive",
      });
      setIsLoading(false);
    }
  };

  const formatMessageContent = (content: string) => {
    // Split long words/URLs to prevent layout breaking
    return content.replace(/(\S{30})/g, '$1\u200B');
  };

  return (
    <div className="h-full flex flex-col">
      <ScrollArea className="flex-grow p-4 h-[calc(100%-80px)]">
        <div className="space-y-4">
          {messages.map((message, index) => (
            <div 
              key={index} 
              className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              <div 
                className={`max-w-[85%] ${isMobile ? 'break-words' : ''} rounded-lg p-3 ${
                  message.role === 'user'
                    ? 'bg-primary text-primary-foreground'
                    : 'bg-muted'
                }`}
                style={{ 
                  overflowWrap: 'break-word', 
                  wordBreak: 'break-word',
                  hyphens: 'auto'
                }}
              >
                <p>{formatMessageContent(message.content)}</p>
                <p className="text-xs opacity-70 mt-1">
                  {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                </p>
              </div>
            </div>
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
