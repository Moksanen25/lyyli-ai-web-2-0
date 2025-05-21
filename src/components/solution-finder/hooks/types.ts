
import { SupportedLanguage } from "@/translations";

// Define message type
export interface ChatMessage {
  role: 'user' | 'assistant' | 'system';
  content: string;
  timestamp: Date;
}

// Define the return type for the useSolutionChat hook
export interface UseSolutionChatReturn {
  messages: ChatMessage[];
  inputMessage: string;
  isLoading: boolean;
  isTyping: boolean;
  showDemoDialog: boolean;
  setInputMessage: (message: string) => void;
  setShowDemoDialog: (show: boolean) => void;
  handleSendMessage: (e?: React.FormEvent) => Promise<void>;
  handleIndustrySelection: (industryLabel: string, industryId?: string, language?: SupportedLanguage) => void;
}
