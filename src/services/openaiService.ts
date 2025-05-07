
import { useToast } from "@/components/ui/use-toast";

// Hardcoded OpenAI credentials for all users
const OPENAI_API_KEY = "your_openai_api_key_here"; // Replace with your actual API key
const OPENAI_ASSISTANT_ID = "your_assistant_id_here"; // Replace with your actual Assistant ID

interface ChatMessage {
  role: 'user' | 'assistant' | 'system';
  content: string;
}

export const hasOpenAICredentials = (): boolean => {
  return !!OPENAI_API_KEY && !!OPENAI_ASSISTANT_ID;
};

export const createThread = async () => {
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
