
import { makeOpenAIRequest, getAuthHeaders } from './openai-client.ts';
import { log } from './logger.ts';

const OPENAI_ASSISTANT_ID = Deno.env.get("OPENAI_ASSISTANT_ID");

export async function createThread(requestId: string) {
  log('info', 'Initiating thread creation', { requestId });
  
  try {
    const result = await makeOpenAIRequest(
      'https://api.openai.com/v1/threads',
      {
        method: 'POST',
        headers: getAuthHeaders(),
        body: JSON.stringify({})
      },
      requestId,
      'createThread'
    );

    log('info', 'Thread created successfully', { 
      requestId, 
      threadId: result.id,
      createdAt: result.created_at
    });
    
    return result;
  } catch (error) {
    log('error', `Thread creation failed`, { 
      requestId, 
      error: error instanceof Error ? error.message : String(error)
    });
    throw error;
  }
}

export async function addMessageToThread(threadId: string, message: string, requestId: string) {
  try {
    // Parameter validation
    if (!threadId || typeof threadId !== 'string') {
      log('error', 'Invalid threadId parameter', { requestId, threadId, threadIdType: typeof threadId });
      throw new Error('Missing or invalid required parameter: threadId (must be a non-empty string)');
    }
    
    if (!message || typeof message !== 'string') {
      log('error', 'Invalid message parameter', { requestId, message: message?.substring(0, 50), messageType: typeof message });
      throw new Error('Missing or invalid required parameter: message (must be a non-empty string)');
    }

    log('info', 'Adding message to thread', { 
      requestId, 
      threadId, 
      messageLength: message.length,
      messagePreview: message.substring(0, 100) + (message.length > 100 ? '...' : '')
    });

    const result = await makeOpenAIRequest(
      `https://api.openai.com/v1/threads/${threadId}/messages`,
      {
        method: 'POST',
        headers: getAuthHeaders(),
        body: JSON.stringify({
          role: 'user',
          content: message
        })
      },
      requestId,
      'addMessage'
    );

    log('info', 'Message added successfully', { 
      requestId, 
      threadId, 
      messageId: result.id,
      createdAt: result.created_at
    });
    
    return result;
  } catch (error) {
    log('error', `Failed to add message to thread`, { 
      requestId, 
      threadId,
      error: error instanceof Error ? error.message : String(error)
    });
    throw error;
  }
}

export async function runAssistant(threadId: string, requestId: string) {
  try {
    // Parameter validation
    if (!threadId || typeof threadId !== 'string') {
      log('error', 'Invalid threadId parameter for assistant run', { requestId, threadId, threadIdType: typeof threadId });
      throw new Error('Missing or invalid required parameter: threadId (must be a non-empty string)');
    }

    log('info', 'Starting assistant run', { 
      requestId, 
      threadId, 
      assistantId: OPENAI_ASSISTANT_ID?.substring(0, 10) + '...' // Partially mask the ID
    });

    const result = await makeOpenAIRequest(
      `https://api.openai.com/v1/threads/${threadId}/runs`,
      {
        method: 'POST',
        headers: getAuthHeaders(),
        body: JSON.stringify({
          assistant_id: OPENAI_ASSISTANT_ID
        })
      },
      requestId,
      'runAssistant'
    );

    log('info', 'Assistant run initiated successfully', { 
      requestId, 
      threadId, 
      runId: result.id, 
      status: result.status,
      createdAt: result.created_at
    });
    
    return result;
  } catch (error) {
    log('error', `Failed to run assistant`, { 
      requestId, 
      threadId,
      error: error instanceof Error ? error.message : String(error)
    });
    throw error;
  }
}

export async function checkRunStatus(threadId: string, runId: string, requestId: string) {
  try {
    // Parameter validation
    if (!threadId || typeof threadId !== 'string') {
      log('error', 'Invalid threadId parameter for status check', { requestId, threadId, threadIdType: typeof threadId });
      throw new Error('Missing or invalid required parameter: threadId (must be a non-empty string)');
    }
    
    if (!runId || typeof runId !== 'string') {
      log('error', 'Invalid runId parameter for status check', { requestId, runId, runIdType: typeof runId });
      throw new Error('Missing or invalid required parameter: runId (must be a non-empty string)');
    }

    log('info', 'Checking run status', { requestId, threadId, runId });

    const result = await makeOpenAIRequest(
      `https://api.openai.com/v1/threads/${threadId}/runs/${runId}`,
      {
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${Deno.env.get("OPENAI_API_KEY")}`,
          'OpenAI-Beta': 'assistants=v2'
        }
      },
      requestId,
      'checkRunStatus'
    );

    log('info', 'Run status retrieved successfully', { 
      requestId, 
      threadId, 
      runId, 
      status: result.status,
      completedAt: result.completed_at,
      failedAt: result.failed_at
    });
    
    return result;
  } catch (error) {
    log('error', `Failed to check run status`, { 
      requestId, 
      threadId, 
      runId,
      error: error instanceof Error ? error.message : String(error)
    });
    throw error;
  }
}

export async function getMessages(threadId: string, requestId: string) {
  try {
    // Parameter validation
    if (!threadId || typeof threadId !== 'string') {
      log('error', 'Invalid threadId parameter for message retrieval', { requestId, threadId, threadIdType: typeof threadId });
      throw new Error('Missing or invalid required parameter: threadId (must be a non-empty string)');
    }

    log('info', 'Retrieving messages from thread', { requestId, threadId });

    const result = await makeOpenAIRequest(
      `https://api.openai.com/v1/threads/${threadId}/messages`,
      {
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${Deno.env.get("OPENAI_API_KEY")}`,
          'OpenAI-Beta': 'assistants=v2'
        }
      },
      requestId,
      'getMessages'
    );

    const messageCount = result.data?.length || 0;
    log('info', 'Messages retrieved successfully', { 
      requestId, 
      threadId, 
      messageCount,
      hasMore: result.has_more,
      firstId: result.first_id,
      lastId: result.last_id
    });
    
    return result;
  } catch (error) {
    log('error', `Failed to retrieve messages`, { 
      requestId, 
      threadId,
      error: error instanceof Error ? error.message : String(error)
    });
    throw error;
  }
}
