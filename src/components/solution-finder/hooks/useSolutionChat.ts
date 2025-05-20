
import { useState } from 'react';
import { useChatThread } from '@/hooks/use-chat-thread';
import { useToast } from '@/hooks/use-toast';
import { useTranslation } from '@/hooks/useTranslation';

// Define message type
export interface ChatMessage {
  role: 'user' | 'assistant' | 'system';
  content: string;
  timestamp: Date;
}

export function useSolutionChat() {
  const { t } = useTranslation();
  const { toast } = useToast();
  
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [inputMessage, setInputMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [showDemoDialog, setShowDemoDialog] = useState(false);

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

  const handleSendMessage = async (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    
    if (!inputMessage.trim()) {
      return;
    }
    
    // Add user message to chat
    const userMessage: ChatMessage = {
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

  const handleIndustrySelection = (industry: string) => {
    const message = `Tell me about solutions for ${industry}`;
    setInputMessage(message);
    handleSendMessage();
  };

  return {
    messages,
    inputMessage,
    isLoading,
    showDemoDialog,
    setInputMessage,
    setShowDemoDialog,
    handleSendMessage,
    handleIndustrySelection
  };
}
