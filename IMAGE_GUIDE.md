# Image Organization Guide

## Directory Structure

```
public/images/
├── hero/           # Hero section images (1920x1080px recommended)
├── blog/           # Blog post featured images (1200x630px recommended)
├── features/       # Feature showcase images (800x600px recommended)
├── testimonials/   # Customer testimonial images (400x400px recommended)
├── team/           # Team member photos (600x600px recommended)
├── icons/          # Custom icons and logos (SVG preferred)
└── backgrounds/    # Background patterns and textures
```

## Image Guidelines

### Formats
- **Hero Images**: JPG/PNG (1920x1080px)
- **Blog Images**: JPG/PNG (1200x630px)
- **Icons**: SVG (scalable)
- **Team Photos**: JPG (600x600px, square)
- **Backgrounds**: PNG/JPG (1920x1080px)

### Naming Convention
- Use kebab-case: `hero-main-image.jpg`
- Include dimensions: `feature-ai-automation-800x600.jpg`
- Add language suffix: `blog-post-fi.jpg`, `blog-post-en.jpg`

### Optimization
- Compress images before adding
- Use WebP format when possible
- Keep file sizes under 500KB for hero images
- Use descriptive alt text

## Usage in Components

### Next.js Image Component
```tsx
import Image from 'next/image'

<Image
  src="/images/hero/main-hero.jpg"
  alt="Lyyli AI Hero Image"
  width={1920}
  height={1080}
  priority
  className="w-full h-auto"
/>
```

### Background Images
```tsx
<div 
  className="bg-cover bg-center bg-no-repeat"
  style={{ backgroundImage: 'url(/images/backgrounds/pattern.svg)' }}
>
  Content here
</div>
```

## Current Image Placeholders

### Hero Images
- `hero-main.jpg` - Main landing page hero
- `hero-features.jpg` - Features page hero
- `hero-pricing.jpg` - Pricing page hero

### Blog Images
- `blog-investment.jpg` - Investment announcement
- `blog-ai-communication.jpg` - AI communication post
- `blog-automation.jpg` - Automation benefits

### Feature Images
- `feature-ai-assistant.jpg` - AI assistant feature
- `feature-automation.jpg` - Automation feature
- `feature-analytics.jpg` - Analytics feature

### Team Images
- `team-mikko-oksanen.jpg` - CEO photo
- `team-veikko-laitinen.jpg` - CTO photo

## Adding New Images

1. **Place in appropriate directory**
2. **Use correct naming convention**
3. **Optimize file size**
4. **Update this guide**
5. **Add to component imports**

## Image Sources

- **Stock Photos**: Unsplash, Pexels
- **Icons**: Lucide React, Heroicons
- **Custom Graphics**: Figma, Adobe Creative Suite
- **Team Photos**: Professional headshots 