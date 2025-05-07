
import { useToast } from "@/components/ui/use-toast";

// These would be provided by environment variables or user input
let OPENAI_API_KEY: string | null = null;
let OPENAI_ASSISTANT_ID: string | null = null;

interface ChatMessage {
  role: 'user' | 'assistant' | 'system';
  content: string;
}

export const setOpenAICredentials = (apiKey: string, assistantId: string) => {
  OPENAI_API_KEY = apiKey;
  OPENAI_ASSISTANT_ID = assistantId;
  localStorage.setItem('openai_assistant_id', assistantId);
  // Note: We're not storing the API key in localStorage for security reasons
};

export const getOpenAIAssistantId = (): string | null => {
  return OPENAI_ASSISTANT_ID || localStorage.getItem('openai_assistant_id');
};

export const hasOpenAICredentials = (): boolean => {
  return !!OPENAI_API_KEY && !!getOpenAIAssistantId();
};

export const createThread = async () => {
  if (!OPENAI_API_KEY) {
    throw new Error('OpenAI API key not set');
  }
  
  try {
    const response = await fetch('https://api.openai.com/v1/threads', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${OPENAI_API_KEY}`,
        'OpenAI-Beta': 'assistants=v1'
      },
      body: JSON.stringify({})
    });

    if (!response.ok) {
      throw new Error(`Failed to create thread: ${response.statusText}`);
    }

    const data = await response.json();
    localStorage.setItem('openai_thread_id', data.id);
    return data.id;
  } catch (error) {
    console.error('Error creating thread:', error);
    throw error;
  }
};

export const getThreadId = (): string | null => {
  return localStorage.getItem('openai_thread_id');
};

export const addMessageToThread = async (threadId: string, message: string) => {
  if (!OPENAI_API_KEY) {
    throw new Error('OpenAI API key not set');
  }
  
  try {
    const response = await fetch(`https://api.openai.com/v1/threads/${threadId}/messages`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${OPENAI_API_KEY}`,
        'OpenAI-Beta': 'assistants=v1'
      },
      body: JSON.stringify({
        role: 'user',
        content: message
      })
    });

    if (!response.ok) {
      throw new Error(`Failed to add message: ${response.statusText}`);
    }

    return await response.json();
  } catch (error) {
    console.error('Error adding message to thread:', error);
    throw error;
  }
};

export const runAssistant = async (threadId: string) => {
  if (!OPENAI_API_KEY || !OPENAI_ASSISTANT_ID) {
    throw new Error('OpenAI credentials not set');
  }
  
  try {
    const response = await fetch(`https://api.openai.com/v1/threads/${threadId}/runs`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${OPENAI_API_KEY}`,
        'OpenAI-Beta': 'assistants=v1'
      },
      body: JSON.stringify({
        assistant_id: OPENAI_ASSISTANT_ID
      })
    });

    if (!response.ok) {
      throw new Error(`Failed to run assistant: ${response.statusText}`);
    }

    return await response.json();
  } catch (error) {
    console.error('Error running assistant:', error);
    throw error;
  }
};

export const checkRunStatus = async (threadId: string, runId: string) => {
  if (!OPENAI_API_KEY) {
    throw new Error('OpenAI API key not set');
  }
  
  try {
    const response = await fetch(`https://api.openai.com/v1/threads/${threadId}/runs/${runId}`, {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${OPENAI_API_KEY}`,
        'OpenAI-Beta': 'assistants=v1'
      }
    });

    if (!response.ok) {
      throw new Error(`Failed to check run status: ${response.statusText}`);
    }

    return await response.json();
  } catch (error) {
    console.error('Error checking run status:', error);
    throw error;
  }
};

export const getMessages = async (threadId: string) => {
  if (!OPENAI_API_KEY) {
    throw new Error('OpenAI API key not set');
  }
  
  try {
    const response = await fetch(`https://api.openai.com/v1/threads/${threadId}/messages`, {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${OPENAI_API_KEY}`,
        'OpenAI-Beta': 'assistants=v1'
      }
    });

    if (!response.ok) {
      throw new Error(`Failed to retrieve messages: ${response.statusText}`);
    }

    return await response.json();
  } catch (error) {
    console.error('Error getting messages:', error);
    throw error;
  }
};
