# Supabase Setup Guide

## Environment Variables

Create a `.env.local` file in the root directory with the following variables:

```env
# Supabase Configuration
NEXT_PUBLIC_SUPABASE_URL=your_supabase_project_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key

# Alternative environment variable names (for server-side only)
SUPABASE_URL=your_supabase_project_url
SUPABASE_ANON_KEY=your_supabase_anon_key
```

## Getting Supabase Credentials

1. Go to [Supabase Dashboard](https://supabase.com/dashboard)
2. Create a new project or select existing one
3. Go to Settings > API
4. Copy the Project URL and anon/public key

## Supabase Edge Function Setup

The application expects a Supabase Edge Function named `ask-agent`. Here's how to create it:

### 1. Install Supabase CLI
```bash
npm install -g supabase
```

### 2. Initialize Supabase in your project
```bash
supabase init
```

### 3. Create the Edge Function
```bash
supabase functions new ask-agent
```

### 4. Edge Function Code Example
```typescript
// supabase/functions/ask-agent/index.ts
import { serve } from "https://deno.land/std@0.168.0/http/server.ts"

serve(async (req) => {
  try {
    const { question, context, agentType } = await req.json()
    
    // Your AI logic here
    const answer = `Vastaus kysymykseen: ${question}`
    
    return new Response(
      JSON.stringify({
        answer,
        sources: [],
        confidence: 0.9,
        timestamp: new Date().toISOString()
      }),
      { headers: { "Content-Type": "application/json" } }
    )
  } catch (error) {
    return new Response(
      JSON.stringify({ error: error.message }),
      { status: 400, headers: { "Content-Type": "application/json" } }
    )
  }
})
```

### 5. Deploy the Function
```bash
supabase functions deploy ask-agent
```

## API Usage

### POST /api/ask
Send a question to the AI agent:

```javascript
const response = await fetch('/api/ask', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    question: 'Mikä on tekoäly?',
    context: 'Optional context',
    agentType: 'general' // Optional: general, writing, analysis, creative
  })
})

const data = await response.json()
console.log(data.data.answer)
```

### Response Format
```json
{
  "success": true,
  "data": {
    "answer": "Vastaus kysymykseesi...",
    "sources": ["source1", "source2"],
    "confidence": 0.9,
    "timestamp": "2024-01-01T12:00:00.000Z"
  }
}
```

## Testing

1. Start the development server: `npm run dev`
2. Test the API endpoint: `GET http://localhost:3000/api/ask`
3. Send a test question: `POST http://localhost:3000/api/ask` 