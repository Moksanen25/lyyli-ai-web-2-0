
import { log } from './logger.ts';

const OPENAI_API_KEY = Deno.env.get("OPENAI_API_KEY");

export const makeOpenAIRequest = async (
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

export const getAuthHeaders = () => {
  return {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${OPENAI_API_KEY}`,
    'OpenAI-Beta': 'assistants=v2'
  };
};
