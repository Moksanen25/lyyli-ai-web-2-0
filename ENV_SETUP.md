# Environment Variables Setup

## Required Environment Variables

Create a `.env.local` file in the root directory with the following variables:

```env
# OpenAI Configuration
OPENAI_API_KEY=your_openai_api_key_here
OPENAI_ASSISTANT_ID=your_openai_assistant_id_here
```

## Getting OpenAI Credentials

1. Go to [OpenAI Platform](https://platform.openai.com/)
2. Navigate to API Keys section
3. Create a new API key
4. Copy the API key to your `.env.local` file

## Example .env.local

```env
# OpenAI Configuration
OPENAI_API_KEY=sk-your-openai-api-key-here
OPENAI_ASSISTANT_ID=asst-your-assistant-id-here

# Optional: Other environment variables
NODE_ENV=development
```

## Testing the API

Once you have set up the environment variables, you can test the API:

```bash
curl -X POST http://localhost:3000/api/openai/thread \
  -H "Content-Type: application/json"
```

Expected response:
```json
{
  "id": "thread_abc123..."
}
```

## Error Handling

If the OpenAI API is not available, the API will return:
```json
{
  "error": "OpenAI API not available"
}
``` 