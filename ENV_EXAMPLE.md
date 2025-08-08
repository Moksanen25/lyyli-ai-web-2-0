# Environment Variables Configuration

Copy this to your `.env.local` file:

```env
# OpenAI Configuration
OPENAI_API_KEY=your_openai_api_key_here
OPENAI_ASSISTANT_ID=your_openai_assistant_id_here

# Application Configuration
NEXT_PUBLIC_APP_URL=http://localhost:3000
NEXT_PUBLIC_APP_NAME=Lyyli AI

# Analytics (Optional)
NEXT_PUBLIC_GOOGLE_ANALYTICS_ID=your_ga_id_here

# Contact Form (Optional)
NEXT_PUBLIC_CONTACT_EMAIL=contact@lyyli.ai

# Social Media (Optional)
NEXT_PUBLIC_LINKEDIN_URL=https://linkedin.com/company/lyyli-ai
NEXT_PUBLIC_TWITTER_URL=https://twitter.com/lyyli_ai
```

## Getting OpenAI Credentials

1. Go to [OpenAI Platform](https://platform.openai.com/)
2. Navigate to API Keys section
3. Create a new API key
4. Copy the API key to your `.env.local` file

## Vercel Deployment

For Vercel deployment, add these environment variables in your Vercel dashboard:

1. Go to your project settings
2. Navigate to Environment Variables
3. Add each variable from the list above
4. Set the appropriate environment (Production, Preview, Development)

## Security Notes

- Never commit `.env.local` to version control
- Use different API keys for development and production
- Regularly rotate your API keys
- Use Vercel's environment variable encryption for sensitive data 