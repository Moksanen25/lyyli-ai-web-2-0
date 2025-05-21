
import { useState } from 'react';
import { useChatThread } from '@/hooks/use-chat-thread';
import { useToast } from '@/hooks/use-toast';
import { useTranslation } from '@/hooks/useTranslation';
import { useSafeTranslation } from '@/utils/safeTranslation';
import { SupportedLanguage } from '@/translations';
import { ChatMessage, UseSolutionChatReturn } from './types';
import { processAIResponse, createEnhancedPrompt } from '../utils/aiResponseUtils';
import { displayMessagesWithDelay } from '../utils/chatDisplayUtils';
import { useLanguage } from '@/hooks/useLanguage';

export function useSolutionChat(): UseSolutionChatReturn {
  const { t } = useTranslation();
  const { customerSegmentsT } = useSafeTranslation();
  const { language } = useLanguage(); // Get the current language
  const { toast } = useToast();
  
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [inputMessage, setInputMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [showDemoDialog, setShowDemoDialog] = useState(false);
  const [isTyping, setIsTyping] = useState(false);

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
      // Check if the response contains a command to open the demo dialog
      if (content.includes("[[OPEN_DEMO]]") && content.includes("[[USER_CONFIRMED_DEMO]]")) {
        setTimeout(() => setShowDemoDialog(true), 1500);
      }
      
      // Parse and look for special commands in the AI's response
      const processedResponses = processAIResponse(content);
      
      // Add a typing indicator before starting the message stream
      setIsTyping(true);
      
      // Show messages gradually with a delay between each one
      displayMessagesWithDelay(
        processedResponses,
        (content) => {
          setMessages(prev => [
            ...prev, 
            { 
              role: 'assistant', 
              content, 
              timestamp: new Date() 
            }
          ]);
        },
        () => {
          setIsTyping(false);
          setIsLoading(false);
        }
      );
    }
  });

  const handleSendMessage = async (e?: React.FormEvent) => {
    if (e) {
      e.preventDefault();
      // Prevent default form submission behavior which can cause page scroll
      e.stopPropagation();
    }
    
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
    
    // Create a context-enhanced prompt, use current language
    const enhancedPrompt = createEnhancedPrompt(inputMessage, language);
    
    // Send message using the extracted logic
    sendMessage(enhancedPrompt);
  };

  const handleIndustrySelection = (
    industryLabel: string, 
    industryId?: string, 
    selectedLanguage: SupportedLanguage = language // Use current language by default
  ) => {
    // If we have an industry ID, use it to get the translated name
    const translatedIndustry = industryId ? 
      customerSegmentsT(`segments.${industryId}.title`, { fallback: industryLabel }) : 
      industryLabel;
    
    // Create the message in the user's language
    const messageText = selectedLanguage === 'fi'
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
    const enhancedPrompt = createEnhancedPrompt(messageText, selectedLanguage);
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

// Fix the re-export to use 'export type' instead of just 'export'
// This is required when the TypeScript 'isolatedModules' option is enabled
export type { ChatMessage } from './types';
