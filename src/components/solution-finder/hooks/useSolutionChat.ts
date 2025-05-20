
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
      const processedResponses = processAIResponse(content);
      
      // Add each processed response as a separate message
      processedResponses.forEach(processedContent => {
        setMessages(prev => [
          ...prev, 
          { 
            role: 'assistant', 
            content: processedContent, 
            timestamp: new Date() 
          }
        ]);
      });
      
      setIsLoading(false);
    }
  });

  // Process AI response to check for special commands and split into multiple messages
  const processAIResponse = (content: string): string[] => {
    // Check if the response contains a command to open the demo dialog
    if (content.includes("[[OPEN_DEMO]]")) {
      // Only open the dialog if the user explicitly requested it
      if (content.includes("[[USER_CONFIRMED_DEMO]]")) {
        setTimeout(() => setShowDemoDialog(true), 500);
      }
      // Remove the commands from the displayed message
      content = content.replace("[[OPEN_DEMO]]", "").replace("[[USER_CONFIRMED_DEMO]]", "");
    }
    
    // Split the response into separate "speech bubbles" using the [[NEXT_MESSAGE]] delimiter
    if (content.includes("[[NEXT_MESSAGE]]")) {
      return content.split("[[NEXT_MESSAGE]]").map(msg => msg.trim());
    }
    
    return [content];
  };

  // Create an enhanced prompt with context for the AI
  const createEnhancedPrompt = (userMessage: string) => {
    return `
USER CONTEXT: The user is on the Features page looking at industry-specific solutions.

INSTRUCTIONS: 
- You are Lyyli AI, an assistant specialized in helping users find the right solution for their industry.
- Respond in a friendly, helpful voice.
- Your goal is to guide users toward booking a demo or signing up.
- IMPORTANT: Break up your responses into multiple chat bubbles using [[NEXT_MESSAGE]] between each section.
- Use clear headers and short paragraphs to make your responses more readable.
- If they ask about a specific industry (tech, consulting, nonprofit, education, creative, sports), provide relevant challenges and solutions in a structured format.
- When appropriate, refer to relevant case studies or blog posts that might help them.
- Always ask if they'd like to know more or have other questions before suggesting a demo.
- ONLY include [[OPEN_DEMO]] in your response if the user has EXPLICITLY said "yes" to booking a demo AND include [[USER_CONFIRMED_DEMO]] as well.
- Keep each message section concise (1-2 paragraphs).
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
    
    // Add user message to chat immediately
    const userMessage: ChatMessage = {
      role: 'user',
      content: message,
      timestamp: new Date()
    };
    
    setMessages(prev => [...prev, userMessage]);
    setIsLoading(true);
    
    // Create a context-enhanced prompt and send it directly
    const enhancedPrompt = createEnhancedPrompt(message);
    sendMessage(enhancedPrompt);
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
