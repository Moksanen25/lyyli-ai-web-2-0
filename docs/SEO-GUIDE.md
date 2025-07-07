# SEO Guide - Lyyli.ai

## Overview

This guide covers Search Engine Optimization (SEO) implementation and best practices for Lyyli.ai platform.

## Table of Contents

- [Meta Tags Implementation](#meta-tags-implementation)
- [Page-Specific SEO](#page-specific-seo)
- [Technical SEO](#technical-seo)
- [Content Optimization](#content-optimization)
- [Mobile SEO](#mobile-seo)
- [International SEO](#international-seo)
- [Performance SEO](#performance-seo)
- [Monitoring & Analytics](#monitoring--analytics)

## Meta Tags Implementation

### Required Meta Tags

Every page must include these essential meta tags:

```tsx
import { Helmet } from 'react-helmet';

<Helmet>
  <title>{pageTitle}</title>
  <meta name="description" content={pageDescription} />
  <meta property="og:title" content={pageTitle} />
  <meta property="og:description" content={pageDescription} />
  <meta property="og:type" content="website" />
  <meta property="og:url" content={canonicalUrl} />
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content={pageTitle} />
  <meta name="twitter:description" content={pageDescription} />
  <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
  <link rel="canonical" href={canonicalUrl} />
</Helmet>
```

### Meta Tag Best Practices

1. **Title Tags**
   - Length: 50-60 characters
   - Include primary keyword
   - Brand name at the end
   - Unique per page

2. **Meta Descriptions**
   - Length: 150-160 characters
   - Include call-to-action
   - Match search intent
   - Unique per page

3. **Open Graph Tags**
   - Always include og:title, og:description, og:type
   - Use high-quality images (1200x630px)
   - Include og:url for canonical reference

## Page-Specific SEO

### Homepage (`/`)
```typescript
const pageTitle = language === 'fi' 
  ? 'Lyyli.ai - Tekoälyavusteinen viestintäalusta yrityksille' 
  : 'Lyyli.ai - AI-Powered Communication Platform for Businesses';

const pageDescription = language === 'fi'
  ? 'Lyyli.ai on tekoälyavusteinen viestintäalusta, joka mullistaa yritysten sisällönluonnin. GDPR-yhteensopiva, EU-palvelimet ja yritystason tietoturva.'
  : 'Lyyli.ai is an AI-powered communication platform that revolutionizes business content creation. GDPR compliant, EU servers, and enterprise-grade security.';
```

### Features Page (`/features`)
- Focus on feature-related keywords
- Include benefit-driven descriptions
- Highlight competitive advantages

### Pricing Page (`/pricing`)
- Include pricing-related keywords
- Mention free trials and ROI
- Target cost-conscious searches

### Blog Pages (`/blog`)
- Dynamic titles based on content
- Category and tag optimization
- Related content suggestions

### About Page (`/about`)
- Company story and expertise
- Team and credibility signals
- Mission and values

## Technical SEO

### URL Structure

```
Good:
https://lyyli.ai/features
https://lyyli.ai/fi/features
https://lyyli.ai/blog/ai-communication-tips

Bad:
https://lyyli.ai/page?id=123
https://lyyli.ai/features#section1
```

### Canonical URLs

```tsx
// Always set canonical URLs
<link rel="canonical" href={`https://lyyli.ai${path}`} />

// For international versions
<link rel="canonical" href={`https://lyyli.ai/${language === 'fi' ? 'fi/' : ''}${page}`} />
```

### Structured Data

Implement schema.org markup:

```json
{
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "name": "Lyyli.ai",
  "description": "AI-powered communication platform",
  "url": "https://lyyli.ai",
  "category": "Business Software",
  "operatingSystem": "Web Browser"
}
```

### XML Sitemap

Generate and maintain sitemap.xml:
```xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://lyyli.ai/</loc>
    <lastmod>2025-01-07</lastmod>
    <priority>1.0</priority>
  </url>
  <!-- Additional URLs -->
</urlset>
```

### Robots.txt

```txt
User-agent: *
Allow: /
Disallow: /admin/
Disallow: /private/

Sitemap: https://lyyli.ai/sitemap.xml
```

## Content Optimization

### Keyword Strategy

**Primary Keywords:**
- AI communication platform
- Business automation software
- Content management system
- GDPR compliant AI

**Secondary Keywords:**
- Enterprise communication tools
- AI-powered content creation
- Business productivity software
- Secure AI platform

### Content Structure

1. **Headings Hierarchy**
   ```html
   <h1>Main Page Title</h1>
   <h2>Primary Sections</h2>
   <h3>Subsections</h3>
   ```

2. **Content Length**
   - Homepage: 800-1200 words
   - Feature pages: 1500-2500 words
   - Blog posts: 1000-3000 words

3. **Internal Linking**
   - Link to related pages
   - Use descriptive anchor text
   - Maintain logical site structure

## Mobile SEO

### Mobile-First Indexing

Google uses mobile version for indexing and ranking:

```tsx
// Always include mobile viewport
<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
```

### Mobile Performance

- Page load time < 3 seconds
- Core Web Vitals optimization
- Touch-friendly interface (44px minimum)
- Readable font sizes (16px+)

### Mobile Usability

```css
/* Ensure mobile-friendly design */
@media (max-width: 768px) {
  .mobile-optimized {
    font-size: 16px;
    line-height: 1.5;
    padding: 1rem;
  }
  
  button {
    min-height: 44px;
    min-width: 44px;
  }
}
```

## International SEO

### Hreflang Implementation

```tsx
// For bilingual sites
<link rel="alternate" hrefLang="en" href="https://lyyli.ai/page" />
<link rel="alternate" hrefLang="fi" href="https://lyyli.ai/fi/page" />
<link rel="alternate" hrefLang="x-default" href="https://lyyli.ai/page" />
```

### Language-Specific Content

```typescript
// SEO titles and descriptions for each language
const seoContent = {
  en: {
    title: 'AI Communication Platform - Lyyli.ai',
    description: 'Transform your business communication with AI...'
  },
  fi: {
    title: 'Tekoälyavusteinen viestintäalusta - Lyyli.ai',
    description: 'Muuta liiketoiminnan viestintäsi tekoälyn avulla...'
  }
};
```

### URL Structure for International

```
English: https://lyyli.ai/features
Finnish: https://lyyli.ai/fi/features
```

## Performance SEO

### Core Web Vitals

1. **Largest Contentful Paint (LCP)**
   - Target: < 2.5 seconds
   - Optimize images and fonts
   - Use CDN for assets

2. **First Input Delay (FID)**
   - Target: < 100 milliseconds
   - Minimize JavaScript execution
   - Use code splitting

3. **Cumulative Layout Shift (CLS)**
   - Target: < 0.1
   - Reserve space for images
   - Avoid dynamic content insertion

### Image Optimization

```tsx
// Use optimized images with proper alt text
<img 
  src="/optimized-image.webp" 
  alt="Descriptive alt text for SEO"
  loading="lazy"
  width="800"
  height="600"
/>
```

### CSS and JavaScript Optimization

- Minify and compress assets
- Remove unused CSS
- Implement critical CSS inlining
- Use tree shaking for JavaScript

## Monitoring & Analytics

### Google Search Console

Monitor these metrics:
- Search impressions and clicks
- Average position
- Core Web Vitals
- Mobile usability issues
- Index coverage

### Key SEO Metrics

1. **Organic Traffic**
   - Track month-over-month growth
   - Monitor keyword rankings
   - Analyze traffic sources

2. **Technical Health**
   - Crawl errors
   - Page load speed
   - Mobile-friendliness
   - Security issues

3. **Content Performance**
   - Page engagement metrics
   - Bounce rate
   - Time on page
   - Conversion rates

### SEO Tools

**Free Tools:**
- Google Search Console
- Google Analytics
- Google PageSpeed Insights
- Lighthouse

**Recommended Paid Tools:**
- SEMrush/Ahrefs (keyword research)
- Screaming Frog (technical audits)
- GTMetrix (performance monitoring)

## SEO Checklist

### Pre-Launch
- [ ] All pages have unique titles and descriptions
- [ ] Canonical URLs implemented
- [ ] Mobile responsiveness tested
- [ ] Page speed optimized
- [ ] XML sitemap created
- [ ] Robots.txt configured
- [ ] Analytics and Search Console set up

### Post-Launch
- [ ] Submit sitemap to search engines
- [ ] Monitor crawl errors
- [ ] Track keyword rankings
- [ ] Analyze user behavior
- [ ] Regular content updates
- [ ] Technical SEO audits

### Ongoing Maintenance
- [ ] Monthly performance reviews
- [ ] Content freshness updates
- [ ] New keyword opportunities
- [ ] Competitor analysis
- [ ] Technical issues resolution

## Common SEO Issues

### Duplicate Content
```tsx
// Use canonical tags to prevent duplicate content
<link rel="canonical" href={primaryUrl} />
```

### Missing Meta Tags
```tsx
// Ensure every page has required meta tags
const missingMeta = !pageTitle || !pageDescription;
if (missingMeta) {
  console.warn('Missing required meta tags');
}
```

### Poor Mobile Experience
- Viewport not set correctly
- Text too small to read
- Clickable elements too close
- Content wider than screen

### Slow Loading Speed
- Unoptimized images
- Blocking JavaScript
- Excessive HTTP requests
- No caching strategy

---

**Last Updated**: January 2025  
**SEO Version**: 1.0.0