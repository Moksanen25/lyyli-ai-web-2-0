# Environment Variables Setup

## Required Environment Variables

Create a `.env.local` file in the root directory with the following variable:

```env
# Supabase Agent Endpoint
SUPABASE_AGENT_ENDPOINT=https://your-project.supabase.co/functions/v1/ask-agent
```

## Getting the Supabase Endpoint

1. Go to your Supabase project dashboard
2. Navigate to Edge Functions
3. Find your `ask-agent` function
4. Copy the function URL (should look like: `https://your-project.supabase.co/functions/v1/ask-agent`)

## Example .env.local

```env
# Supabase Configuration
SUPABASE_AGENT_ENDPOINT=https://your-project.supabase.co/functions/v1/ask-agent

# Optional: Other environment variables
NODE_ENV=development
```

## Testing the API

Once you have set up the environment variable, you can test the API:

```bash
curl -X POST http://localhost:3001/api/ask \
  -H "Content-Type: application/json" \
  -d '{"prompt": "Mikä on tekoäly?"}'
```

Expected response:
```json
{
  "result": "Vastaus kysymykseesi..."
}
```

## Error Handling

If the Supabase endpoint is not available, the API will return:
```json
{
  "result": "Ei vastausta."
}
``` 