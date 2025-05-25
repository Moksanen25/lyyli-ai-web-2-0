
import { log } from './logger.ts';
import { ValidatedRequest } from './types.ts';

export const validateEnvironment = (requestId: string): void => {
  const OPENAI_API_KEY = Deno.env.get("OPENAI_API_KEY");
  const OPENAI_ASSISTANT_ID = Deno.env.get("OPENAI_ASSISTANT_ID");

  if (!OPENAI_API_KEY) {
    log('error', 'Missing required environment variable: OPENAI_API_KEY', { requestId });
    throw new Error('OpenAI API key not configured. Please set OPENAI_API_KEY in Supabase secrets.');
  }

  if (!OPENAI_ASSISTANT_ID) {
    log('error', 'Missing required environment variable: OPENAI_ASSISTANT_ID', { requestId });
    throw new Error('OpenAI Assistant ID not configured. Please set OPENAI_ASSISTANT_ID in Supabase secrets.');
  }
};

export const validateRequest = (requestBody: any, requestId: string): ValidatedRequest => {
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
