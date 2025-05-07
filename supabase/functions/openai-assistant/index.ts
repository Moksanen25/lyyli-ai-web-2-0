
import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

// Get OpenAI credentials from environment variables
const OPENAI_API_KEY = Deno.env.get("OPENAI_API_KEY");
const OPENAI_ASSISTANT_ID = Deno.env.get("OPENAI_ASSISTANT_ID");

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { action, data } = await req.json();
    let response;
    
    switch (action) {
      case 'createThread':
        response = await createThread();
        break;
      case 'addMessage':
        response = await addMessageToThread(data.threadId, data.message);
        break;
      case 'runAssistant':
        response = await runAssistant(data.threadId);
        break;
      case 'checkRunStatus':
        response = await checkRunStatus(data.threadId, data.runId);
        break;
      case 'getMessages':
        response = await getMessages(data.threadId);
        break;
      default:
        throw new Error(`Unsupported action: ${action}`);
    }

    return new Response(JSON.stringify(response), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  } catch (error) {
    console.error(`Error in openai-assistant function:`, error);
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  }
});

async function createThread() {
  const response = await fetch('https://api.openai.com/v1/threads', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${OPENAI_API_KEY}`,
      'OpenAI-Beta': 'assistants=v2'  // Updated to v2
    },
    body: JSON.stringify({})
  });

  if (!response.ok) {
    const errorText = await response.text();
    throw new Error(`Failed to create thread: ${response.status} ${errorText}`);
  }

  return await response.json();
}

async function addMessageToThread(threadId, message) {
  const response = await fetch(`https://api.openai.com/v1/threads/${threadId}/messages`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${OPENAI_API_KEY}`,
      'OpenAI-Beta': 'assistants=v2'  // Updated to v2
    },
    body: JSON.stringify({
      role: 'user',
      content: message
    })
  });

  if (!response.ok) {
    const errorText = await response.text();
    throw new Error(`Failed to add message: ${response.status} ${errorText}`);
  }

  return await response.json();
}

async function runAssistant(threadId) {
  const response = await fetch(`https://api.openai.com/v1/threads/${threadId}/runs`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${OPENAI_API_KEY}`,
      'OpenAI-Beta': 'assistants=v2'  // Updated to v2
    },
    body: JSON.stringify({
      assistant_id: OPENAI_ASSISTANT_ID
    })
  });

  if (!response.ok) {
    const errorText = await response.text();
    throw new Error(`Failed to run assistant: ${response.status} ${errorText}`);
  }

  return await response.json();
}

async function checkRunStatus(threadId, runId) {
  const response = await fetch(`https://api.openai.com/v1/threads/${threadId}/runs/${runId}`, {
    method: 'GET',
    headers: {
      'Authorization': `Bearer ${OPENAI_API_KEY}`,
      'OpenAI-Beta': 'assistants=v2'  // Updated to v2
    }
  });

  if (!response.ok) {
    const errorText = await response.text();
    throw new Error(`Failed to check run status: ${response.status} ${errorText}`);
  }

  return await response.json();
}

async function getMessages(threadId) {
  const response = await fetch(`https://api.openai.com/v1/threads/${threadId}/messages`, {
    method: 'GET',
    headers: {
      'Authorization': `Bearer ${OPENAI_API_KEY}`,
      'OpenAI-Beta': 'assistants=v2'  // Updated to v2
    }
  });

  if (!response.ok) {
    const errorText = await response.text();
    throw new Error(`Failed to retrieve messages: ${response.status} ${errorText}`);
  }

  return await response.json();
}
