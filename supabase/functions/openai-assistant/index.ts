
import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

// Get OpenAI credentials from environment variables
const OPENAI_API_KEY = Deno.env.get("OPENAI_API_KEY");
const OPENAI_ASSISTANT_ID = Deno.env.get("OPENAI_ASSISTANT_ID");

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

// Logging utility
const log = (level: 'info' | 'warn' | 'error', message: string, data?: any) => {
  const timestamp = new Date().toISOString();
  const logEntry = {
    timestamp,
    level,
    message,
    ...(data && { data })
  };
  console.log(JSON.stringify(logEntry));
};

serve(async (req) => {
  const requestId = crypto.randomUUID();
  log('info', `Request received: ${req.method} ${req.url}`, { requestId });

  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    log('info', 'CORS preflight request handled', { requestId });
    return new Response(null, { headers: corsHeaders });
  }

  try {
    // Validate environment variables
    if (!OPENAI_API_KEY) {
      log('error', 'OPENAI_API_KEY not configured', { requestId });
      throw new Error('OpenAI API key not configured. Please set OPENAI_API_KEY in Supabase secrets.');
    }

    if (!OPENAI_ASSISTANT_ID) {
      log('error', 'OPENAI_ASSISTANT_ID not configured', { requestId });
      throw new Error('OpenAI Assistant ID not configured. Please set OPENAI_ASSISTANT_ID in Supabase secrets.');
    }

    // Parse and validate request body
    let requestBody;
    try {
      requestBody = await req.json();
    } catch (parseError) {
      log('error', 'Invalid JSON in request body', { requestId, error: parseError.message });
      throw new Error('Invalid JSON in request body');
    }

    const { action, data } = requestBody;

    if (!action) {
      log('error', 'Missing action in request', { requestId, requestBody });
      throw new Error('Missing required field: action');
    }

    log('info', `Processing action: ${action}`, { requestId, data });

    let response;
    
    switch (action) {
      case 'createThread':
        response = await createThread(requestId);
        break;
      case 'addMessage':
        response = await addMessageToThread(data?.threadId, data?.message, requestId);
        break;
      case 'runAssistant':
        response = await runAssistant(data?.threadId, requestId);
        break;
      case 'checkRunStatus':
        response = await checkRunStatus(data?.threadId, data?.runId, requestId);
        break;
      case 'getMessages':
        response = await getMessages(data?.threadId, requestId);
        break;
      default:
        log('error', `Unsupported action: ${action}`, { requestId });
        throw new Error(`Unsupported action: ${action}. Supported actions: createThread, addMessage, runAssistant, checkRunStatus, getMessages`);
    }

    log('info', `Action ${action} completed successfully`, { requestId });
    return new Response(JSON.stringify(response), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });

  } catch (error) {
    log('error', `Error in openai-assistant function: ${error.message}`, { 
      requestId, 
      stack: error.stack,
      name: error.name 
    });
    
    return new Response(JSON.stringify({ 
      error: error.message,
      requestId,
      timestamp: new Date().toISOString()
    }), {
      status: error.message.includes('not configured') ? 500 : 400,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  }
});

async function createThread(requestId: string) {
  log('info', 'Creating new thread', { requestId });
  
  try {
    const response = await fetch('https://api.openai.com/v1/threads', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${OPENAI_API_KEY}`,
        'OpenAI-Beta': 'assistants=v2'
      },
      body: JSON.stringify({})
    });

    if (!response.ok) {
      const errorText = await response.text();
      log('error', `OpenAI API error creating thread`, { 
        requestId, 
        status: response.status, 
        statusText: response.statusText,
        error: errorText 
      });
      throw new Error(`Failed to create thread: ${response.status} ${errorText}`);
    }

    const result = await response.json();
    log('info', 'Thread created successfully', { requestId, threadId: result.id });
    return result;

  } catch (error) {
    log('error', `Error in createThread: ${error.message}`, { requestId });
    throw error;
  }
}

async function addMessageToThread(threadId: string, message: string, requestId: string) {
  if (!threadId) {
    throw new Error('Missing required parameter: threadId');
  }
  if (!message) {
    throw new Error('Missing required parameter: message');
  }

  log('info', 'Adding message to thread', { requestId, threadId, messageLength: message.length });

  try {
    const response = await fetch(`https://api.openai.com/v1/threads/${threadId}/messages`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${OPENAI_API_KEY}`,
        'OpenAI-Beta': 'assistants=v2'
      },
      body: JSON.stringify({
        role: 'user',
        content: message
      })
    });

    if (!response.ok) {
      const errorText = await response.text();
      log('error', `OpenAI API error adding message`, { 
        requestId, 
        threadId,
        status: response.status, 
        statusText: response.statusText,
        error: errorText 
      });
      throw new Error(`Failed to add message: ${response.status} ${errorText}`);
    }

    const result = await response.json();
    log('info', 'Message added successfully', { requestId, threadId, messageId: result.id });
    return result;

  } catch (error) {
    log('error', `Error in addMessageToThread: ${error.message}`, { requestId, threadId });
    throw error;
  }
}

async function runAssistant(threadId: string, requestId: string) {
  if (!threadId) {
    throw new Error('Missing required parameter: threadId');
  }

  log('info', 'Running assistant', { requestId, threadId, assistantId: OPENAI_ASSISTANT_ID });

  try {
    const response = await fetch(`https://api.openai.com/v1/threads/${threadId}/runs`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${OPENAI_API_KEY}`,
        'OpenAI-Beta': 'assistants=v2'
      },
      body: JSON.stringify({
        assistant_id: OPENAI_ASSISTANT_ID
      })
    });

    if (!response.ok) {
      const errorText = await response.text();
      log('error', `OpenAI API error running assistant`, { 
        requestId, 
        threadId,
        status: response.status, 
        statusText: response.statusText,
        error: errorText 
      });
      throw new Error(`Failed to run assistant: ${response.status} ${errorText}`);
    }

    const result = await response.json();
    log('info', 'Assistant run started', { requestId, threadId, runId: result.id, status: result.status });
    return result;

  } catch (error) {
    log('error', `Error in runAssistant: ${error.message}`, { requestId, threadId });
    throw error;
  }
}

async function checkRunStatus(threadId: string, runId: string, requestId: string) {
  if (!threadId) {
    throw new Error('Missing required parameter: threadId');
  }
  if (!runId) {
    throw new Error('Missing required parameter: runId');
  }

  log('info', 'Checking run status', { requestId, threadId, runId });

  try {
    const response = await fetch(`https://api.openai.com/v1/threads/${threadId}/runs/${runId}`, {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${OPENAI_API_KEY}`,
        'OpenAI-Beta': 'assistants=v2'
      }
    });

    if (!response.ok) {
      const errorText = await response.text();
      log('error', `OpenAI API error checking run status`, { 
        requestId, 
        threadId,
        runId,
        status: response.status, 
        statusText: response.statusText,
        error: errorText 
      });
      throw new Error(`Failed to check run status: ${response.status} ${errorText}`);
    }

    const result = await response.json();
    log('info', 'Run status checked', { requestId, threadId, runId, status: result.status });
    return result;

  } catch (error) {
    log('error', `Error in checkRunStatus: ${error.message}`, { requestId, threadId, runId });
    throw error;
  }
}

async function getMessages(threadId: string, requestId: string) {
  if (!threadId) {
    throw new Error('Missing required parameter: threadId');
  }

  log('info', 'Retrieving messages', { requestId, threadId });

  try {
    const response = await fetch(`https://api.openai.com/v1/threads/${threadId}/messages`, {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${OPENAI_API_KEY}`,
        'OpenAI-Beta': 'assistants=v2'
      }
    });

    if (!response.ok) {
      const errorText = await response.text();
      log('error', `OpenAI API error retrieving messages`, { 
        requestId, 
        threadId,
        status: response.status, 
        statusText: response.statusText,
        error: errorText 
      });
      throw new Error(`Failed to retrieve messages: ${response.status} ${errorText}`);
    }

    const result = await response.json();
    log('info', 'Messages retrieved successfully', { 
      requestId, 
      threadId, 
      messageCount: result.data?.length || 0 
    });
    return result;

  } catch (error) {
    log('error', `Error in getMessages: ${error.message}`, { requestId, threadId });
    throw error;
  }
}
