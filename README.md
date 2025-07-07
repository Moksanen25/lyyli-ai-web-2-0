# Lyyli.ai - AI-Powered Communication Platform

Modern AI communication platform built with React, TypeScript, and Supabase. Features comprehensive SEO optimization, mobile-first design, and enterprise-grade security.

## 🚀 Quick Start

```bash
# Clone and install
git clone <YOUR_GIT_URL>
cd lyyli-ai
npm install

# Start development
npm run dev
# Open http://localhost:5173
```

## 📱 Mobile-Optimized & SEO-Ready

- **Mobile-First Design**: Responsive across all devices with 44px touch targets
- **SEO Optimized**: Comprehensive meta tags, structured data, and performance optimization
- **Core Web Vitals**: Optimized for Google's performance metrics
- **International**: Full Finnish/English localization with proper hreflang tags

## 🛠️ Tech Stack & Features

- **Frontend**: React 18 + TypeScript + Vite
- **Styling**: Tailwind CSS + shadcn/ui design system
- **Backend**: Supabase (Auth, Database, Edge Functions)
- **AI Integration**: OpenAI API with secure edge functions
- **SEO**: React Helmet, meta tags, structured data
- **Mobile**: Responsive design, PWA-ready
- **i18n**: Finnish/English with safe translation utilities
- **Testing**: Vitest + React Testing Library

## 🔧 Configuration

### Supabase Secrets (No .env files needed)
- `OPENAI_API_KEY` - OpenAI API key for AI features
- `OPENAI_ASSISTANT_ID` - OpenAI Assistant ID

### Development Commands
```bash
npm run dev        # Start development server
npm run build      # Production build
npm run test       # Run tests
npm run lint       # Code linting
```

## 📚 Documentation

- **[Development Guide](docs/DEVELOPMENT.md)** - Complete development workflow
- **[Deployment Guide](docs/DEPLOYMENT.md)** - Production deployment strategies  
- **[SEO Guide](docs/SEO-GUIDE.md)** - SEO optimization and best practices
- **[Architecture](docs/architecture.md)** - System architecture overview

## 🌍 Internationalization

- English (default): `https://lyyli.ai/`
- Finnish: `https://lyyli.ai/fi/`
- URL-based language switching with proper SEO implementation

## 🚀 Deployment

### Lovable Platform (Recommended)
1. Click "Publish" in Lovable editor
2. Automatic optimizations and CDN
3. Custom domain support

### Manual Deployment
```bash
npm run build
# Deploy dist/ folder to your hosting provider
```

## 🔗 Resources

- [Lovable Platform](https://docs.lovable.dev/) - Development platform
- [Supabase](https://supabase.com/docs) - Backend services
- [Tailwind CSS](https://tailwindcss.com/) - Styling framework

---

**Built with ❤️ using Lovable Platform**