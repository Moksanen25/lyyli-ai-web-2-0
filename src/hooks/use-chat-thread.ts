'use client';


import { useState, useEffect } from 'react';
import {
  createThread,
  getThreadId,
  addMessageToThread,
  runAssistant,
  checkRunStatus,
  getMessages
} from '@/services/openaiService';

interface UseChatThreadProps {
  onError: (errorType: string) => void;
  onMessageReceived: (content: string) => void;
}

export const useChatThread = ({ onError, onMessageReceived }: UseChatThreadProps) => {
  const [threadId, setThreadId] = useState<string | null>(null);

  // Initialize thread
  useEffect(() => {
    const storedThreadId = getThreadId();
    if (storedThreadId) {
      setThreadId(storedThreadId);
    } else {
      initializeThread();
    }
  }, []);

  const initializeThread = async () => {
    try {
      const newThreadId = await createThread();
      setThreadId(newThreadId);
    } catch (error) {
      console.error('Error initializing thread:', error);
      onError('initThread');
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
            onMessageReceived(content);
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

  const sendMessage = async (message: string) => {
    if (!threadId) {
      onError('noThread');
      return;
    }
    
    try {
      // Send message to OpenAI Assistant
      await addMessageToThread(threadId, message);
      
      // Run the assistant
      const runResponse = await runAssistant(threadId);
      
      // Poll for completion and get response
      await pollRunStatus(threadId, runResponse.id);
    } catch (error) {
      console.error('Error sending message:', error);
      onError('sendMessage');
    }
  };

  return {
    threadId,
    sendMessage
  };
};
