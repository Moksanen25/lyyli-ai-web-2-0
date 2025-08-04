
import { supabase } from "@/integrations/supabase/client";

export const hasOpenAICredentials = (): boolean => {
  return true; // Always return true since we're using server-side credentials
};

export const createThread = async () => {
  try {
    const { data, error } = await supabase.functions.invoke('openai-assistant', {
      body: { action: 'createThread' }
    });

    if (error) {
      throw new Error(`Failed to create thread: ${error.message}`);
    }

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
    const { data, error } = await supabase.functions.invoke('openai-assistant', {
      body: { action: 'addMessage', data: { threadId, message } }
    });

    if (error) {
      throw new Error(`Failed to add message: ${error.message}`);
    }

    return data;
  } catch (error) {
    console.error('Error adding message to thread:', error);
    throw error;
  }
};

export const runAssistant = async (threadId: string) => {
  try {
    const { data, error } = await supabase.functions.invoke('openai-assistant', {
      body: { action: 'runAssistant', data: { threadId } }
    });

    if (error) {
      throw new Error(`Failed to run assistant: ${error.message}`);
    }

    return data;
  } catch (error) {
    console.error('Error running assistant:', error);
    throw error;
  }
};

export const checkRunStatus = async (threadId: string, runId: string) => {
  try {
    const { data, error } = await supabase.functions.invoke('openai-assistant', {
      body: { action: 'checkRunStatus', data: { threadId, runId } }
    });

    if (error) {
      throw new Error(`Failed to check run status: ${error.message}`);
    }

    return data;
  } catch (error) {
    console.error('Error checking run status:', error);
    throw error;
  }
};

export const getMessages = async (threadId: string) => {
  try {
    const { data, error } = await supabase.functions.invoke('openai-assistant', {
      body: { action: 'getMessages', data: { threadId } }
    });

    if (error) {
      throw new Error(`Failed to retrieve messages: ${error.message}`);
    }

    return data;
  } catch (error) {
    console.error('Error getting messages:', error);
    throw error;
  }
};
