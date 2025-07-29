# Third-Party Integrations and Code Snippets - Reuse Guide

This document provides a comprehensive list of all third-party integrations, scripts, and code snippets implemented in the Lyyli.ai project that can be reused in new projects.

## 🎯 Purpose
Use this as a reference when building new projects to quickly implement the same third-party services and integrations that have been successfully implemented in Lyyli.ai.

## 📊 Analytics & Tracking

### Google Analytics 4 (GA4)
**Location**: `index.html` lines 46-54
```html
<!-- Google tag (gtag.js) -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-K8BTK433WQ"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-K8BTK433WQ');
</script>
```

**Cookie Integration**: 
- Cookie consent handling in `src/components/cookies/cookieUtils.ts`
- DataLayer updates for consent: `window.dataLayer.push({event: 'cookieConsentUpdate'})`

### Datafast Analytics
**Location**: `index.html` lines 56-62
```html
<!-- Datafast Analytics -->
<script
  defer
  data-website-id="686d148894ee444d9ee76354"
  data-domain="www.lyyli.ai"
  src="https://datafa.st/js/script.js">
</script>
```

**Cookie Integration**:
- Cookie clearing function in `src/components/cookies/cookieUtils.ts`
- Clears cookies starting with `datafa_`

### Hotjar User Behavior Analytics
**Location**: `index.html` lines 31-41
```html
<!-- Hotjar Tracking Code -->
<script>
    (function(h,o,t,j,a,r){
        h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
        h._hjSettings={hjid:6422436,hjsv:6};
        a=o.getElementsByTagName('head')[0];
        r=o.createElement('script');r.async=1;
        r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
        a.appendChild(r);
    })(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');
</script>
```

## 🎪 HubSpot CRM & Marketing

### HubSpot Main Tracking Script
**Location**: `index.html` lines 69-71
```html
<!-- Start of HubSpot Embed Code -->
<script type="text/javascript" id="hs-script-loader" async defer src="//js-eu1.hs-scripts.com/146205702.js"></script>
<!-- End of HubSpot Embed Code -->
```

### HubSpot Forms Script
**Location**: `index.html` line 44
```html
<!-- HubSpot Form Script -->
<script src="https://js-eu1.hsforms.net/forms/embed/146205702.js" defer></script>
```

### HubSpot Meetings Integration
**Location**: `src/components/BookDemoDialog.tsx`
```typescript
// Load HubSpot meetings script dynamically
useEffect(() => {
  if (open) {
    // Clear any existing script to avoid duplicates
    const existingScript = document.getElementById('hs-meetings-embed');
    if (existingScript) {
      existingScript.remove();
    }
    
    // Create and append the HubSpot script
    const script = document.createElement('script');
    script.id = 'hs-meetings-embed';
    script.type = 'text/javascript';
    script.src = 'https://static.hsappstatic.net/MeetingsEmbed/ex/MeetingsEmbedCode.js';
    script.async = true;
    script.defer = true;
    document.body.appendChild(script);
  }
}, [open]);

// Meetings iframe container
<div 
  className="meetings-iframe-container rounded-md" 
  data-src="https://meetings-eu1.hubspot.com/mikko-oksanen?embed=true"
  style={{ minHeight: isMobile ? '500px' : '600px' }}
>
</div>
```

### HubSpot Forms with Custom Styling
**Locations**: `src/pages/Waitlist.tsx`, `src/pages/JCIMembers.tsx`

**Form Integration**:
```typescript
useEffect(() => {
  // Create script element for HubSpot form
  const script = document.createElement('script');
  script.src = 'https://js-eu1.hsforms.net/forms/embed/146205702.js';
  script.async = true;
  document.body.appendChild(script);
  
  return () => {
    document.body.removeChild(script);
  };
}, []);
```

**Custom Styling to Hide HubSpot Branding**:
```typescript
useEffect(() => {
  const style = document.createElement('style');
  style.innerHTML = `
    /* Hide HubSpot branding */
    .hubspot-link__container {
      display: none !important;
    }
    .hs-richtext p {
      margin-bottom: 0 !important;
    }
    .hs-form-booleancheckbox-display input[type="checkbox"] {
      margin-right: 8px;
    }
  `;
  document.head.appendChild(style);
  
  return () => {
    document.head.removeChild(style);
  };
}, []);
```

**Form Embed**:
```html
<div 
  className="hs-form-container" 
  data-portal-id="146205702" 
  data-form-id="YOUR_FORM_ID"
>
</div>
```

### HubSpot Cookie Management
**Location**: `src/components/cookies/cookieUtils.ts`
```typescript
export const clearHubspotCookies = () => {
  const cookies = document.cookie.split(';');
  
  for (let i = 0; i < cookies.length; i++) {
    const cookie = cookies[i];
    const eqPos = cookie.indexOf('=');
    const name = eqPos > -1 ? cookie.substring(0, eqPos).trim() : cookie.trim();
    
    if (name.startsWith('__hs') || name.startsWith('hubspot')) {
      document.cookie = name + '=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
    }
  }
};
```

## 🤖 OpenAI Integration

### Supabase Edge Functions Setup
**Location**: `supabase/functions/openai-assistant/`

**Environment Variables Required**:
- `OPENAI_API_KEY`
- `OPENAI_ASSISTANT_ID`

**Edge Function Structure**:
```typescript
import "https://deno.land/x/xhr@0.1.0/mod.ts";
import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

// OpenAI operations: createThread, addMessage, runAssistant, checkRunStatus, getMessages
```

### Frontend OpenAI Service
**Location**: `src/services/openaiService.ts`
```typescript
import { supabase } from "@/integrations/supabase/client";

export const createThread = async () => {
  const { data, error } = await supabase.functions.invoke('openai-assistant', {
    body: { action: 'createThread' }
  });
  
  if (error) throw new Error(`Failed to create thread: ${error.message}`);
  
  localStorage.setItem('openai_thread_id', data.id);
  return data.id;
};

// Additional functions: addMessageToThread, runAssistant, checkRunStatus, getMessages
```

### Chat Thread Management Hook
**Location**: `src/hooks/use-chat-thread.ts`
```typescript
export const useChatThread = ({ onError, onMessageReceived }: UseChatThreadProps) => {
  const [threadId, setThreadId] = useState<string | null>(null);

  // Thread initialization and message polling logic
  const sendMessage = async (message: string) => {
    await addMessageToThread(threadId, message);
    const runResponse = await runAssistant(threadId);
    await pollRunStatus(threadId, runResponse.id);
  };

  return { threadId, sendMessage };
};
```

## 🍪 Cookie Consent System

### Complete Cookie Consent Implementation
**Main Component**: `src/components/CookieConsent.tsx`
**Banner**: `src/components/cookies/CookieBanner.tsx`
**Settings Dialog**: `src/components/cookies/CookieSettingsDialog.tsx`
**Utilities**: `src/components/cookies/cookieUtils.ts`
**Types**: `src/components/cookies/types.ts`

**Cookie Settings Interface**:
```typescript
export interface CookieSettings {
  necessary: boolean;  // Always true
  analytics: boolean;
  marketing: boolean;
}
```

**Main Features**:
- GDPR compliant cookie banner
- Granular cookie controls
- Automatic cookie cleanup when consent withdrawn
- DataLayer integration for analytics
- LocalStorage persistence
- Custom event system for settings dialog

## 🗄️ Supabase Backend Integration

### Client Setup
**Location**: `src/integrations/supabase/client.ts`
```typescript
import { createClient } from '@supabase/supabase-js';
import type { Database } from './types';

const SUPABASE_URL = "https://zkyqdwmwignohqujlnxf.supabase.co";
const SUPABASE_PUBLISHABLE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...";

export const supabase = createClient<Database>(SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY);
```

### Edge Functions Pattern
```typescript
// All API calls go through Supabase Edge Functions
const { data, error } = await supabase.functions.invoke('function-name', {
  body: { action: 'actionName', data: payload }
});
```

## 🌐 Translation System

### Safe Translation Hook
**Location**: `src/utils/safeTranslation.ts`
```typescript
export const useSafeTranslation = () => {
  const { safeT, blogT, featuresT, customerSegmentsT, pricingT, heroT, calculatorT } = 
    // Specialized translation functions with fallbacks
  
  return { safeT, t, language, isFinnish: language === 'fi' };
};
```

**Features**:
- Fallback handling for missing translations
- Namespace-specific translation functions
- Interpolation support
- Debug mode for development
- Multi-language support (EN, FI, SV)

## 🎨 UI Component Library

### shadcn/ui Components
**Complete implementation** with customized variants and design system integration:
- All components use semantic design tokens
- HSL color system
- Dark/light mode support
- Mobile-first responsive design

## 📱 Mobile & Responsive Features

### Mobile Detection Hook
**Location**: `src/hooks/use-mobile.tsx`
```typescript
export function useIsMobile() {
  const [isMobile, setIsMobile] = useState(false);
  
  useEffect(() => {
    const mql = window.matchMedia("(max-width: 768px)");
    const onChange = () => setIsMobile(window.innerWidth < 768);
    // Handle changes and cleanup
  }, []);
  
  return isMobile;
}
```

## 🛡️ Security & Performance

### Error Boundary Implementation
**Location**: `src/components/ui/error-boundary.tsx`
- React error boundary with fallback UI
- Error logging and monitoring
- Graceful error handling

### SEO Optimization
**Location**: `src/components/SEOHead.tsx`
- Dynamic meta tags
- Structured data
- Open Graph tags
- Twitter cards
- Multi-language support

## 🚀 Deployment Configuration

### Required Environment Variables
**Supabase Secrets Configuration**:
```
OPENAI_API_KEY=your_openai_api_key
OPENAI_ASSISTANT_ID=your_assistant_id
```

### Build Configuration
- Vite + React + TypeScript
- Tailwind CSS with custom design system
- ESLint + Vitest for testing
- Mobile-first responsive design

## 📄 Legal Pages Integration

### Privacy Policy & Cookie Policy
- GDPR compliant content
- Multi-language support
- HubSpot data processing disclosure
- Cookie usage transparency
- Supabase data handling information

## ⚡ Performance Optimizations

### Script Loading Strategies
- Deferred loading for analytics scripts
- Async loading for non-critical scripts
- Dynamic script injection for conditional features
- Script cleanup on component unmount

### Image Optimization
- WebP format support
- Lazy loading implementation
- Responsive image sizing
- Fallback handling

## 🔧 Development Tools

### Testing Setup
- Vitest configuration
- React Testing Library
- Component testing patterns
- Mock implementations for third-party services

### Development Utilities
- Translation debugging hooks
- Console logging for development
- Error monitoring and reporting
- Performance monitoring hooks

---

## 📋 Implementation Checklist

When reusing these integrations in a new project:

### Analytics Setup
- [ ] Replace tracking IDs with new project IDs
- [ ] Configure cookie consent system
- [ ] Set up dataLayer integration
- [ ] Test analytics firing

### HubSpot Setup
- [ ] Update portal ID and form IDs
- [ ] Configure meetings booking URL
- [ ] Customize form styling
- [ ] Set up cookie consent integration

### OpenAI Setup
- [ ] Deploy Supabase edge functions
- [ ] Configure API keys in Supabase secrets
- [ ] Set up assistant ID
- [ ] Test chat functionality

### Supabase Setup
- [ ] Create new project
- [ ] Update client configuration
- [ ] Deploy edge functions
- [ ] Configure RLS policies

### Design System
- [ ] Customize color tokens in `index.css`
- [ ] Update `tailwind.config.ts`
- [ ] Modify component variants
- [ ] Test dark/light modes

This comprehensive guide provides all the third-party integrations and code snippets needed to recreate the Lyyli.ai functionality in a new project.