
import React, { useState, useRef, useEffect } from 'react';
import { Send, Loader2, Link, MessageSquare } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Card } from '@/components/ui/card';
import { useToast } from '@/components/ui/use-toast';
import { useTranslation } from '@/hooks/useTranslation';
import { useSafeTranslation } from '@/utils/safeTranslation';
import { useChatThread } from '@/hooks/use-chat-thread';
import BookDemoDialog from '@/components/BookDemoDialog';
import ChatMessage from '@/components/chat/ChatMessage';
import { useIsMobile } from '@/hooks/use-mobile';

interface Message {
  role: 'user' | 'assistant' | 'system';
  content: string;
  timestamp: Date;
}

// Dummy industry data that will be used for quick selection buttons
const industryOptions = [
  { id: 'tech', label: 'Technology Companies' },
  { id: 'consulting', label: 'Consulting' },
  { id: 'nonprofit', label: 'Nonprofit Organizations' },
  { id: 'education', label: 'Education' },
  { id: 'creative', label: 'Creative Industries' },
  { id: 'sports', label: 'Sports Organizations' }
];

const SolutionFinderChat: React.FC = () => {
  const { t } = useTranslation();
  const { safeT, featuresT, customerSegmentsT } = useSafeTranslation();
  const isMobile = useIsMobile();
  const { toast } = useToast();
  
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputMessage, setInputMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [showDemoDialog, setShowDemoDialog] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isChatOpen, setIsChatOpen] = useState(false);
  
  // Use the existing chat thread logic for OpenAI integration
  const { sendMessage } = useChatThread({
    onError: (errorType) => {
      toast({
        title: t('chat.error.title'),
        description: t(`chat.error.${errorType}`),
        variant: "destructive",
      });
      setIsLoading(false);
    },
    onMessageReceived: (content) => {
      // Parse and look for special commands in the AI's response
      const processedContent = processAIResponse(content);
      
      setMessages(prev => [
        ...prev, 
        { 
          role: 'assistant', 
          content: processedContent, 
          timestamp: new Date() 
        }
      ]);
      setIsLoading(false);
    }
  });

  // Process AI response to check for special commands
  const processAIResponse = (content: string): string => {
    // Check if the response contains a command to open the demo dialog
    if (content.includes("[[OPEN_DEMO]]")) {
      // Schedule the dialog to open after a small delay
      setTimeout(() => setShowDemoDialog(true), 500);
      // Remove the command from the displayed message
      return content.replace("[[OPEN_DEMO]]", "");
    }
    return content;
  };

  // Set initial welcome message
  useEffect(() => {
    const welcomeMessage = featuresT('solutionFinder.welcomeMessage', {
      fallback: "Hi there! I'm Lyyli, your assistant for finding the perfect solution for your industry. What type of organization are you from? You can select one of the options below or tell me about your organization."
    });
    
    setMessages([
      { 
        role: 'assistant', 
        content: welcomeMessage, 
        timestamp: new Date() 
      }
    ]);
  }, [featuresT]);

  // Scroll to bottom of chat when messages change
  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages]);

  const handleSendMessage = async (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    
    if (!inputMessage.trim()) {
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
    
    // Create a context-enhanced prompt
    const enhancedPrompt = createEnhancedPrompt(inputMessage);
    
    // Send message using the extracted logic
    sendMessage(enhancedPrompt);
  };

  // Create an enhanced prompt with context for the AI
  const createEnhancedPrompt = (userMessage: string) => {
    return `
USER CONTEXT: The user is on the Features page looking at industry-specific solutions.

INSTRUCTIONS: 
- You are Lyyli AI, an assistant specialized in helping users find the right solution for their industry.
- Respond in a friendly, helpful voice.
- Your goal is to guide users toward booking a demo or signing up.
- If they ask about a specific industry (tech, consulting, nonprofit, education, creative, sports), provide relevant challenges and solutions.
- If they seem interested or ask about next steps, suggest booking a demo by saying "Would you like to schedule a demo to see how we can help?" and include [[OPEN_DEMO]] in your response.
- Keep responses concise (1-3 paragraphs).
- If they ask questions outside the scope of Lyyli's services, acknowledge their question and steer the conversation back to how Lyyli can help.

USER MESSAGE: ${userMessage}
`;
  };

  const handleIndustrySelection = (industry: string) => {
    const message = `Tell me about solutions for ${industry}`;
    setInputMessage(message);
    handleSendMessage();
  };

  const toggleChat = () => {
    setIsChatOpen(!isChatOpen);
  };

  return (
    <div className="max-w-4xl mx-auto">
      {/* Mobile toggle button */}
      <div className="flex md:hidden justify-center mb-4">
        <Button 
          onClick={toggleChat} 
          variant="outline" 
          className="w-full flex items-center justify-center gap-2"
        >
          <MessageSquare className="h-4 w-4" />
          {isChatOpen 
            ? featuresT('solutionFinder.closeChat', { fallback: "Close industry advisor" })
            : featuresT('solutionFinder.openChat', { fallback: "Open industry advisor" })
          }
        </Button>
      </div>

      <div className={`md:flex ${isChatOpen ? 'block' : 'hidden md:block'}`}>
        <Card className="flex-1 border h-[500px] flex flex-col">
          <div className="p-3 border-b bg-muted/40 flex items-center">
            <div className="bg-primary rounded-full w-8 h-8 flex items-center justify-center text-white font-semibold">L</div>
            <span className="ml-2 font-medium">
              {featuresT('solutionFinder.title', { fallback: "Lyyli Industry Advisor" })}
            </span>
          </div>
          
          <ScrollArea className="flex-grow p-4">
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
          
          <div className="p-3 border-t">
            <div className="flex flex-wrap gap-2 mb-3">
              {industryOptions.map((option) => (
                <Button
                  key={option.id}
                  variant="outline"
                  size="sm"
                  className="text-xs"
                  onClick={() => handleIndustrySelection(option.label)}
                >
                  {option.label}
                </Button>
              ))}
            </div>
            
            <form onSubmit={handleSendMessage} className="flex gap-2">
              <Input
                value={inputMessage}
                onChange={(e) => setInputMessage(e.target.value)}
                placeholder={featuresT('solutionFinder.inputPlaceholder', { fallback: "Ask about your industry..." })}
                disabled={isLoading}
                className="flex-grow"
              />
              <Button type="submit" disabled={isLoading || !inputMessage.trim()}>
                {isLoading ? <Loader2 className="h-4 w-4 animate-spin" /> : <Send className="h-4 w-4" />}
                <span className="sr-only">{t('chat.send')}</span>
              </Button>
            </form>
          </div>
        </Card>
      </div>
      
      {/* Demo Dialog */}
      <BookDemoDialog open={showDemoDialog} onOpenChange={setShowDemoDialog} />
    </div>
  );
};

export default SolutionFinderChat;
