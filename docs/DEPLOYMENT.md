# Deployment Guide - Lyyli.ai

## Overview

This guide covers deployment strategies and configurations for Lyyli.ai across different environments and platforms.

## Table of Contents

- [Prerequisites](#prerequisites)
- [Environment Configuration](#environment-configuration)
- [Build Process](#build-process)
- [Deployment Options](#deployment-options)
- [Domain Configuration](#domain-configuration)
- [Performance Optimization](#performance-optimization)
- [Monitoring](#monitoring)
- [Troubleshooting](#troubleshooting)

## Prerequisites

### Required Tools

- Node.js 18+
- npm/yarn/bun
- Git access to repository
- Vercel account (for deployment)

### Required Secrets

Configure these in your Vercel project:
- `OPENAI_API_KEY`: OpenAI API key for AI features
- `OPENAI_ASSISTANT_ID`: OpenAI Assistant ID

## Environment Configuration

### Vercel Setup

1. **Create Vercel Project**
   ```bash
   # Install Vercel CLI
   npm i -g vercel
   
   # Login to Vercel
   vercel login
   ```

2. **Configure Environment Variables**
   In Vercel Dashboard > Settings > Environment Variables:
   ```
   OPENAI_API_KEY=your_openai_api_key_here
   OPENAI_ASSISTANT_ID=your_assistant_id_here
   ```

3. **Deploy API Routes**
   ```bash
   # Deploy to Vercel
   vercel --prod
   ```

### Environment Variables

Create `.env.local` for local development:
```
OPENAI_API_KEY=your_openai_api_key_here
OPENAI_ASSISTANT_ID=your_assistant_id_here
```

## Build Process

### Development Build

```bash
npm run dev
```

### Production Build

```bash
# Install dependencies
npm install

# Build for production
npm run build

# Preview production build
npm run preview
```

### Build Optimization

Production builds automatically include:
- Code splitting and tree shaking
- Asset compression and minification
- CSS purging and optimization
- Bundle analysis

## Deployment Options

### Option 1: Lovable Platform (Recommended)

**Advantages:**
- Zero configuration
- Automatic optimizations
- Custom domain support
- Built-in CDN
- SSL certificates

**Process:**
1. Click "Publish" in Lovable editor
2. Configure custom domain (optional)
3. Deployment happens automatically

### Option 2: Vercel

**Setup:**
```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel

# Production deployment
vercel --prod
```

**Configuration (`vercel.json`):**
```json
{
  "buildCommand": "npm run build",
  "outputDirectory": "dist",
  "framework": "vite",
  "rewrites": [
    {
      "source": "/(.*)",
      "destination": "/index.html"
    }
  ]
}
```

### Option 3: Netlify

**Setup:**
```bash
# Install Netlify CLI
npm install -g netlify-cli

# Deploy
netlify deploy

# Production deployment
netlify deploy --prod
```

**Configuration (`netlify.toml`):**
```toml
[build]
  command = "npm run build"
  publish = "dist"

[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200
```

### Option 4: Static Hosting (S3, GitHub Pages, etc.)

**Build and Deploy:**
```bash
npm run build
# Upload dist/ folder contents to hosting provider
```

**Requirements:**
- Configure routing for SPA
- Set up proper MIME types
- Configure HTTPS

## Domain Configuration

### Custom Domain Setup

1. **DNS Configuration**
   ```
   Type: CNAME
   Name: www (or subdomain)
   Value: your-deployment-url.com
   
   Type: A (for apex domain)
   Name: @
   Value: Your hosting provider's IP
   ```

2. **SSL Certificate**
   - Most platforms provide automatic SSL
   - Ensure HTTPS redirect is enabled

3. **Subdomain Setup**
   For language-specific subdomains:
   ```
   fi.lyyli.ai -> CNAME -> your-deployment-url.com
   ```

### SEO Considerations

- Set up canonical URLs
- Configure proper redirects
- Ensure meta tags are rendered
- Set up XML sitemap

## Performance Optimization

### Build Optimizations

```bash
# Analyze bundle size
npm run build -- --analyze

# Check build performance
npm run build -- --profile
```

### Runtime Optimizations

1. **Enable Compression**
   - Gzip/Brotli compression
   - Image optimization
   - CDN configuration

2. **Caching Strategy**
   ```
   Static assets: 1 year cache
   HTML files: No cache
   API responses: Appropriate cache headers
   ```

3. **Performance Monitoring**
   - Core Web Vitals tracking
   - Error monitoring
   - Analytics implementation

## Monitoring

### Health Checks

Create monitoring endpoints:
```typescript
// Health check endpoint
export const healthCheck = {
  status: 'healthy',
  timestamp: new Date().toISOString(),
  version: process.env.npm_package_version
};
```

### Error Tracking

Implement error boundaries and monitoring:
```typescript
// Error boundary for production
class ErrorBoundary extends React.Component {
  componentDidCatch(error, errorInfo) {
    // Log to monitoring service
    console.error('Production error:', error, errorInfo);
  }
}
```

### Analytics

- Google Analytics 4 integration
- Custom event tracking
- Performance metrics
- User behavior analysis

## Troubleshooting

### Common Deployment Issues

1. **Build Failures**
   ```bash
   # Check for TypeScript errors
   npm run type-check
   
   # Check for linting issues
   npm run lint
   
   # Clear cache and rebuild
   rm -rf node_modules/.cache
   npm run build
   ```

2. **Routing Issues**
   - Ensure SPA routing is configured
   - Check redirect rules
   - Verify base URL configuration

3. **API Connection Issues**
   - Verify Next.js API routes
   - Check CORS settings
   - Validate environment variables

4. **Performance Issues**
   - Analyze bundle size
   - Check image optimization
   - Verify CDN configuration

### Debug Commands

```bash
# Build analysis
npm run build -- --analyze

# Lighthouse CI
npm install -g @lhci/cli
lhci collect --url=https://your-site.com

# Bundle analyzer
npx webpack-bundle-analyzer dist/static/js/*.js
```

### Production Checklist

- [ ] All meta tags properly configured
- [ ] Mobile responsiveness tested
- [ ] SEO optimization complete
- [ ] Performance metrics acceptable
- [ ] Error boundaries implemented
- [ ] Analytics configured
- [ ] SSL certificate active
- [ ] Custom domain configured
- [ ] Monitoring set up
- [ ] Backup strategy in place

## Rollback Strategy

### Quick Rollback

1. **Lovable Platform**
   - Use built-in version history
   - Click "Revert" on previous version

2. **Git-based Deployments**
   ```bash
   # Revert to previous commit
   git revert HEAD
   git push origin main
   
   # Redeploy
   vercel --prod
   ```

3. **Manual Backup**
   - Keep previous build artifacts
   - Quick swap of static files

## Security Considerations

### Production Security

- HTTPS enforcement
- Security headers configuration
- API key protection
- CORS configuration
- Rate limiting

### Security Headers

```
Content-Security-Policy: default-src 'self'
X-Frame-Options: DENY
X-Content-Type-Options: nosniff
Referrer-Policy: strict-origin-when-cross-origin
```

## Maintenance

### Regular Tasks

- Dependency updates
- Security patches
- Performance monitoring
- Backup verification
- SSL certificate renewal

### Update Process

```bash
# Update dependencies
npm update

# Check for vulnerabilities
npm audit

# Run tests
npm test

# Build and deploy
npm run build
```

---

**Last Updated**: January 2025  
**Documentation Version**: 1.0.0