import { useState } from 'react';
import { useChatThread } from '@/hooks/use-chat-thread';
import { useToast } from '@/hooks/use-toast';
import { useTranslation } from '@/hooks/useTranslation';
import { useSafeTranslation } from '@/utils/safeTranslation';
import { SupportedLanguage } from '@/translations';

// Define message type
export interface ChatMessage {
  role: 'user' | 'assistant' | 'system';
  content: string;
  timestamp: Date;
}

export function useSolutionChat() {
  const { t } = useTranslation();
  const { customerSegmentsT } = useSafeTranslation();
  const { toast } = useToast();
  
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [inputMessage, setInputMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [showDemoDialog, setShowDemoDialog] = useState(false);
  const [isTyping, setIsTyping] = useState(false); // New state to track typing animation

  // Use the existing chat thread logic for OpenAI integration
  const { sendMessage } = useChatThread({
    onError: (errorType) => {
      toast({
        title: t('chat.error.title'),
        description: t(`chat.error.${errorType}`),
        variant: "destructive",
      });
      setIsLoading(false);
      setIsTyping(false);
    },
    onMessageReceived: (content) => {
      // Parse and look for special commands in the AI's response
      const processedResponses = processAIResponse(content);
      
      // Add a typing indicator before starting the message stream
      setIsTyping(true);
      
      // Show messages gradually with a delay between each one
      displayMessagesWithDelay(processedResponses);
    }
  });

  // Process AI response to check for special commands and split into multiple messages
  const processAIResponse = (content: string): string[] => {
    // Check if the response contains a command to open the demo dialog
    if (content.includes("[[OPEN_DEMO]]")) {
      // Only open the dialog if the user explicitly requested it
      if (content.includes("[[USER_CONFIRMED_DEMO]]")) {
        setTimeout(() => setShowDemoDialog(true), 1500);
      }
      // Remove the commands from the displayed message
      content = content.replace("[[OPEN_DEMO]]", "").replace("[[USER_CONFIRMED_DEMO]]", "");
    }
    
    let messages: string[] = [];
    
    // Split the response into separate "speech bubbles" using the [[NEXT_MESSAGE]] delimiter
    if (content.includes("[[NEXT_MESSAGE]]")) {
      // Split by delimiter and filter out empty messages
      messages = content
        .split("[[NEXT_MESSAGE]]")
        .map(msg => msg.trim())
        .filter(msg => msg.length > 0);
    } else {
      // If no delimiter, try to split by paragraphs for better readability
      // First check if the content is long enough to be worth splitting
      if (content.length > 150) {
        // Split by double line breaks which often indicate paragraph breaks
        const paragraphs = content.split(/\n\s*\n/);
        
        if (paragraphs.length > 1) {
          // Group paragraphs into reasonable chunks (1-2 paragraphs per message)
          let currentChunk = '';
          
          paragraphs.forEach((paragraph, index) => {
            // If the current chunk plus this paragraph would be too long, start a new chunk
            if (currentChunk.length + paragraph.length > 200 && currentChunk.length > 0) {
              messages.push(currentChunk);
              currentChunk = paragraph;
            } else {
              // Otherwise add this paragraph to the current chunk
              currentChunk += (currentChunk.length ? '\n\n' : '') + paragraph;
            }
            
            // Push the last chunk if we're at the end
            if (index === paragraphs.length - 1 && currentChunk.length > 0) {
              messages.push(currentChunk);
            }
          });
        } else {
          messages = [content];
        }
      } else {
        messages = [content];
      }
    }
    
    return messages;
  };

  // New function to display messages with a delay
  const displayMessagesWithDelay = (messageContents: string[]) => {
    // Base delay between messages in milliseconds (increased from previous value)
    const baseDelay = 1500; 
    // Additional delay per character (simulates typing speed)
    const charDelay = 0.05;
    
    let cumulativeDelay = 0;
    
    messageContents.forEach((content, index) => {
      // Calculate delay based on previous message length
      const prevContentLength = index > 0 ? messageContents[index-1].length : 0;
      const typingDelay = prevContentLength * charDelay;
      
      // Add increasing delay for each message: base delay + typing simulation
      // Increasing the minimum delay between messages
      cumulativeDelay += baseDelay + Math.min(typingDelay, 2500); // Cap typing delay at 2.5s max
      
      setTimeout(() => {
        setMessages(prev => [
          ...prev, 
          { 
            role: 'assistant', 
            content: content, 
            timestamp: new Date() 
          }
        ]);
        
        // If this is the last message, set typing to false
        if (index === messageContents.length - 1) {
          setIsTyping(false);
          setIsLoading(false);
        }
      }, cumulativeDelay);
    });
  };

  // Create an enhanced prompt with context for the AI
  const createEnhancedPrompt = (userMessage: string, languageCode: SupportedLanguage = 'en') => {
    return `
USER CONTEXT: The user is on the Features page looking at industry-specific solutions.
USER LANGUAGE: ${languageCode.toUpperCase()} (${languageCode === 'fi' ? 'Finnish' : 'English'})

INSTRUCTIONS: 
- You are Lyyli AI, an assistant specialized in helping users find the right solution for their industry.
- IMPORTANT: RESPOND IN ${languageCode === 'fi' ? 'FINNISH' : 'ENGLISH'} LANGUAGE.
- Respond in a friendly, helpful voice.
- Your goal is to guide users toward booking a demo or signing up.
- IMPORTANT: Break up your responses into multiple chat bubbles using [[NEXT_MESSAGE]] between each section. 
- Short replies (1-2 sentences) should be in a single bubble, longer content should be split.
- Keep each chat bubble concise - about 1-2 short paragraphs maximum.
- Use clear headers and short paragraphs to make your responses more readable.
- If they ask about a specific industry (tech, consulting, nonprofit, education, creative, sports), provide relevant challenges and solutions in a structured format.
- When appropriate, refer to relevant case studies or blog posts that might help them.
- Always ask if they'd like to know more or have other questions before suggesting a demo.
- ONLY include [[OPEN_DEMO]] in your response if the user has EXPLICITLY said "yes" to booking a demo AND include [[USER_CONFIRMED_DEMO]] as well.
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
    setIsTyping(true); // Show typing indicator immediately
    
    // Create a context-enhanced prompt, use default language (English)
    const enhancedPrompt = createEnhancedPrompt(inputMessage);
    
    // Send message using the extracted logic
    sendMessage(enhancedPrompt);
  };

  const handleIndustrySelection = (industryLabel: string, industryId?: string, language: SupportedLanguage = 'en') => {
    // If we have an industry ID, use it to get the translated name
    const translatedIndustry = industryId ? 
      customerSegmentsT(`segments.${industryId}.title`, { fallback: industryLabel }) : 
      industryLabel;
    
    // Create the message in the user's language
    const messageText = language === 'fi'
      ? `Kerro ratkaisuista ${translatedIndustry} alalle`
      : `Tell me about solutions for ${translatedIndustry}`;
    
    // Add user message to chat immediately
    const userMessage: ChatMessage = {
      role: 'user',
      content: messageText,
      timestamp: new Date()
    };
    
    setMessages(prev => [...prev, userMessage]);
    setIsLoading(true);
    setIsTyping(true); // Show typing indicator immediately
    
    // Create a context-enhanced prompt with the specified language and send it directly
    const enhancedPrompt = createEnhancedPrompt(messageText, language);
    sendMessage(enhancedPrompt);
  };

  return {
    messages,
    inputMessage,
    isLoading,
    isTyping,
    showDemoDialog,
    setInputMessage,
    setShowDemoDialog,
    handleSendMessage,
    handleIndustrySelection
  };
}
