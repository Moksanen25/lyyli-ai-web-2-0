import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

// Get OpenAI credentials from environment variables (Supabase secrets)
const OPENAI_API_KEY = Deno.env.get("OPENAI_API_KEY");
const OPENAI_ASSISTANT_ID = Deno.env.get("OPENAI_ASSISTANT_ID");

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

// Enhanced logging utility with structured logging
const log = (level: 'info' | 'warn' | 'error', message: string, data?: any) => {
  const timestamp = new Date().toISOString();
  const logEntry = {
    timestamp,
    level: level.toUpperCase(),
    message,
    ...(data && { data })
  };
  console.log(JSON.stringify(logEntry));
};

// Validation utility for environment variables
const validateEnvironment = (requestId: string): void => {
  if (!OPENAI_API_KEY) {
    log('error', 'Missing required environment variable: OPENAI_API_KEY', { requestId });
    throw new Error('OpenAI API key not configured. Please set OPENAI_API_KEY in Supabase secrets.');
  }

  if (!OPENAI_ASSISTANT_ID) {
    log('error', 'Missing required environment variable: OPENAI_ASSISTANT_ID', { requestId });
    throw new Error('OpenAI Assistant ID not configured. Please set OPENAI_ASSISTANT_ID in Supabase secrets.');
  }
};

// Enhanced request validation
const validateRequest = (requestBody: any, requestId: string): { action: string; data?: any } => {
  if (!requestBody || typeof requestBody !== 'object') {
    log('error', 'Invalid request body format', { requestId, receivedType: typeof requestBody });
    throw new Error('Invalid request body: must be a valid JSON object');
  }

  const { action, data } = requestBody;

  if (!action || typeof action !== 'string') {
    log('error', 'Missing or invalid action parameter', { requestId, action, actionType: typeof action });
    throw new Error('Missing required field: action (must be a string)');
  }

  const validActions = ['createThread', 'addMessage', 'runAssistant', 'checkRunStatus', 'getMessages'];
  if (!validActions.includes(action)) {
    log('error', `Unsupported action requested: ${action}`, { requestId, validActions });
    throw new Error(`Unsupported action: ${action}. Supported actions: ${validActions.join(', ')}`);
  }

  log('info', `Request validation successful for action: ${action}`, { requestId, hasData: !!data });
  return { action, data };
};

// Enhanced OpenAI API request wrapper
const makeOpenAIRequest = async (
  url: string, 
  options: RequestInit, 
  requestId: string,
  operationName: string
): Promise<any> => {
  try {
    log('info', `Making OpenAI API request for ${operationName}`, { 
      requestId, 
      url: url.replace(/\/v1.*/, '/v1/...'), // Hide specific endpoint details
      method: options.method 
    });

    const response = await fetch(url, options);

    if (!response.ok) {
      const errorText = await response.text();
      log('error', `OpenAI API error for ${operationName}`, { 
        requestId, 
        status: response.status, 
        statusText: response.statusText,
        errorBody: errorText.substring(0, 500) // Limit error text length
      });
      throw new Error(`OpenAI API failed for ${operationName}: ${response.status} ${response.statusText}`);
    }

    const result = await response.json();
    log('info', `OpenAI API request successful for ${operationName}`, { 
      requestId, 
      responseReceived: true,
      resultKeys: Object.keys(result)
    });

    return result;
  } catch (error) {
    if (error instanceof Error) {
      log('error', `Network or parsing error in ${operationName}`, { 
        requestId, 
        errorMessage: error.message,
        errorName: error.name
      });
    } else {
      log('error', `Unknown error in ${operationName}`, { requestId, error: String(error) });
    }
    throw error;
  }
};

serve(async (req) => {
  const requestId = crypto.randomUUID();
  
  try {
    log('info', `Incoming request: ${req.method} ${req.url}`, { 
      requestId, 
      userAgent: req.headers.get('user-agent')?.substring(0, 100),
      origin: req.headers.get('origin')
    });

    // Handle CORS preflight requests
    if (req.method === 'OPTIONS') {
      log('info', 'Processing CORS preflight request', { requestId });
      return new Response(null, { headers: corsHeaders });
    }

    // Validate environment configuration
    try {
      validateEnvironment(requestId);
      log('info', 'Environment validation successful', { requestId });
    } catch (envError) {
      return new Response(JSON.stringify({ 
        error: envError instanceof Error ? envError.message : 'Environment configuration error',
        requestId,
        timestamp: new Date().toISOString()
      }), {
        status: 500,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      });
    }

    // Parse and validate request body
    let requestBody;
    try {
      const rawBody = await req.text();
      log('info', 'Request body received', { requestId, bodyLength: rawBody.length });
      
      if (!rawBody.trim()) {
        throw new Error('Request body is empty');
      }
      
      requestBody = JSON.parse(rawBody);
    } catch (parseError) {
      const errorMessage = parseError instanceof Error ? parseError.message : 'Unknown parsing error';
      log('error', 'Request body parsing failed', { requestId, error: errorMessage });
      return new Response(JSON.stringify({ 
        error: `Invalid JSON in request body: ${errorMessage}`,
        requestId,
        timestamp: new Date().toISOString()
      }), {
        status: 400,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      });
    }

    // Validate request structure
    let validatedRequest;
    try {
      validatedRequest = validateRequest(requestBody, requestId);
    } catch (validationError) {
      return new Response(JSON.stringify({ 
        error: validationError instanceof Error ? validationError.message : 'Request validation failed',
        requestId,
        timestamp: new Date().toISOString()
      }), {
        status: 400,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      });
    }

    const { action, data } = validatedRequest;
    
    log('info', `Processing action: ${action}`, { 
      requestId, 
      dataProvided: !!data,
      dataKeys: data ? Object.keys(data) : []
    });

    let response;
    
    try {
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
          // This should never happen due to validation, but keeping for safety
          throw new Error(`Action ${action} is not implemented`);
      }

      log('info', `Action ${action} completed successfully`, { 
        requestId, 
        responseGenerated: true,
        responseKeys: response ? Object.keys(response) : []
      });

      return new Response(JSON.stringify(response), {
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      });

    } catch (actionError) {
      const errorMessage = actionError instanceof Error ? actionError.message : 'Unknown action error';
      log('error', `Action ${action} failed`, { 
        requestId, 
        error: errorMessage,
        stack: actionError instanceof Error ? actionError.stack : undefined
      });
      
      return new Response(JSON.stringify({ 
        error: `Failed to execute ${action}: ${errorMessage}`,
        requestId,
        timestamp: new Date().toISOString()
      }), {
        status: 500,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      });
    }

  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : 'Unknown server error';
    log('error', `Unhandled error in request processing`, { 
      requestId, 
      error: errorMessage,
      stack: error instanceof Error ? error.stack : undefined
    });
    
    return new Response(JSON.stringify({ 
      error: 'Internal server error occurred',
      requestId,
      timestamp: new Date().toISOString()
    }), {
      status: 500,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  }
});

async function createThread(requestId: string) {
  log('info', 'Initiating thread creation', { requestId });
  
  try {
    const result = await makeOpenAIRequest(
      'https://api.openai.com/v1/threads',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${OPENAI_API_KEY}`,
          'OpenAI-Beta': 'assistants=v2'
        },
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

async function addMessageToThread(threadId: string, message: string, requestId: string) {
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
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${OPENAI_API_KEY}`,
          'OpenAI-Beta': 'assistants=v2'
        },
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

async function runAssistant(threadId: string, requestId: string) {
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
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${OPENAI_API_KEY}`,
          'OpenAI-Beta': 'assistants=v2'
        },
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

async function checkRunStatus(threadId: string, runId: string, requestId: string) {
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
          'Authorization': `Bearer ${OPENAI_API_KEY}`,
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

async function getMessages(threadId: string, requestId: string) {
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
          'Authorization': `Bearer ${OPENAI_API_KEY}`,
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
