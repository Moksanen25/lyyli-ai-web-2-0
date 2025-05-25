import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { log } from './logger.ts';
import { validateEnvironment, validateRequest } from './validation.ts';
import { 
  createThread, 
  addMessageToThread, 
  runAssistant, 
  checkRunStatus, 
  getMessages 
} from './openai-operations.ts';

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
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
