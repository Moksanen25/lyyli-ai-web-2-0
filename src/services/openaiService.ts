
export const hasOpenAICredentials = (): boolean => {
  return true; // Always return true since we're using server-side credentials
};

export const createThread = async () => {
  try {
    const response = await fetch('/api/openai/thread', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
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
    const response = await fetch('/api/openai/message', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ threadId, message }),
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
    const response = await fetch('/api/openai/run', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ threadId }),
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
    const response = await fetch(`/api/openai/run-status?threadId=${threadId}&runId=${runId}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
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
    const response = await fetch(`/api/openai/messages?threadId=${threadId}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
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
