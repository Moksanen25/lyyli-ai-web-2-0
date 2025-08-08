'use client';

import { useState, useEffect } from 'react';
import { sendMessage } from '@/services/openaiService';

interface UseChatThreadProps {
  onError: (errorType: string) => void;
  onMessageReceived: (content: string) => void;
}

export const useChatThread = ({ onError, onMessageReceived }: UseChatThreadProps) => {
  const [threadId, setThreadId] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  // Initialize thread on component mount
  useEffect(() => {
    setThreadId('new-session');
  }, []);

  const sendChatMessage = async (message: string) => {
    if (!threadId) {
      onError('noThread');
      return;
    }
    setIsLoading(true);
    try {
      const response = await sendMessage();
      if (response.success && 'content' in response) {
        onMessageReceived((response as { content: string }).content);
      } else {
        onError('sendMessage');
      }
    } catch (error) {
      console.error('Error sending message:', error);
      onError('sendMessage');
    } finally {
      setIsLoading(false);
    }
  };

  return {
    threadId,
    sendMessage: sendChatMessage,
    isLoading
  };
};
