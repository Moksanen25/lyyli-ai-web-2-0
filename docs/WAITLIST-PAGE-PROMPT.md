# Waitlist Page Setup with HubSpot Form Integration

## Overview
Create a waitlist page that captures early user interest with embedded HubSpot forms for lead generation. This implementation includes custom styling, mobile optimization, and branding removal.

## Page Structure Requirements

### 1. Basic Page Layout
```typescript
// Required imports and setup
import React, { useEffect, useState } from 'react';
import { useLanguage } from '@/hooks/useLanguage';
import { Button } from '@/components/ui/button';
import { Helmet } from 'react-helmet';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

// Optional: Demo dialog integration
import DemoDialog from '@/components/lyyli-demo/DemoDialog';
```

### 2. HubSpot Form Integration

#### Script Loading Pattern:
```typescript
useEffect(() => {
  // Create script element for HubSpot form
  const script = document.createElement('script');
  script.src = 'https://js-eu1.hsforms.net/forms/embed/[PORTAL_ID].js';
  script.defer = true;
  document.body.appendChild(script);

  // Clean up on component unmount
  return () => {
    if (document.body.contains(script)) {
      document.body.removeChild(script);
    }
  };
}, []);
```

#### Form Embedding:
```jsx
<div 
  className="hs-form-frame" 
  data-region="eu1" 
  data-form-id="[YOUR_FORM_ID]" 
  data-portal-id="[YOUR_PORTAL_ID]"
  aria-label="Waitlist signup form"
></div>
```

### 3. Custom Styling for HubSpot Forms

#### Required CSS Customizations:
```css
/* Hide HubSpot branding */
.hubspot-link__container {
  display: none !important;
}

/* Hide any powered by text */
a.submitted-message__powered-by {
  display: none !important;
}

/* Adjust form width and spacing */
.hs-form .hs-form-field {
  max-width: 100% !important;
}

.hs-form .legal-consent-container {
  max-width: 100% !important;
}

/* Make form container wider */
.hs-form-iframe, .hs-form-frame {
  width: 100% !important;
  max-width: 600px !important;
  margin: 0 auto !important;
}

/* Mobile optimizations */
@media (max-width: 768px) {
  .hs-form .hs-form-field input, 
  .hs-form .hs-form-field select,
  .hs-form .hs-form-field textarea {
    min-height: 44px !important;
    font-size: 16px !important; /* Prevent zoom on iOS */
  }
  
  .hs-form .hs-button {
    min-height: 44px !important;
    width: 100% !important;
    font-size: 16px !important;
  }
}
```

## Content Structure

### Hero Section
- **Headline**: Compelling announcement about upcoming product/service
- **Subheadline**: Brief explanation of value proposition and urgency
- **CTA**: Optional demo button or product preview

### Form Section
- **Form Title**: Clear indication this is for early access
- **HubSpot Form**: Embedded using the pattern above
- **Social Proof**: Optional testimonials or user count

## Language Support

### Localized Content Pattern:
```typescript
const pageTitle = language === 'fi' 
  ? 'Lyyli - Liity jonotuslistalle' 
  : 'Lyyli - Join our Waitlist';

const pageDescription = language === 'fi' 
  ? 'Liity Lyylin jonotuslistalle ollaksesi ensimmäinen...' 
  : 'Join the Lyyli waitlist to be the first to know...';
```

### Translation Keys Required:
```typescript
// Add to translation files
waitlist: {
  title: 'Something big is coming!',
  description: 'Join our waitlist to be the first to know when we launch.',
  formLabel: 'Waitlist signup form'
}
```

## SEO Configuration

### Meta Tags Setup:
```jsx
<Helmet>
  <title>{pageTitle}</title>
  <meta name="description" content={pageDescription} />
  <meta property="og:title" content={pageTitle} />
  <meta property="og:description" content={pageDescription} />
  <meta name="twitter:title" content={pageTitle} />
  <meta name="twitter:description" content={pageDescription} />
  
  {/* Optional: Prevent indexing for private waitlists */}
  <meta name="robots" content="noindex, nofollow" />
</Helmet>
```

## Styling Guidelines

### Background and Layout:
```jsx
<main className="flex-grow flex flex-col items-center justify-center py-8 px-4 md:py-16 bg-gradient-to-b from-white to-accent/20 pt-20 md:pt-28">
  <div className="max-w-xl w-full mx-auto text-center animate-fade-in">
    {/* Content */}
  </div>
</main>
```

### Typography Hierarchy:
```jsx
<h1 className="text-2xl sm:text-3xl md:text-5xl font-bold mb-3 md:mb-4 text-primary">
  {/* Main headline */}
</h1>

<p className="text-base sm:text-lg md:text-xl mb-6 md:mb-8 text-foreground/80 px-2">
  {/* Supporting text */}
</p>
```

## Implementation Checklist

### Required Setup:
- [ ] HubSpot account with form created
- [ ] Portal ID and Form ID configured
- [ ] EU region compliance (use eu1 region)
- [ ] Mobile-responsive styling applied
- [ ] Branding removal CSS implemented
- [ ] Multi-language support added
- [ ] SEO meta tags configured
- [ ] Navigation links updated

### Optional Enhancements:
- [ ] Demo integration
- [ ] Social proof elements
- [ ] Progress indicators
- [ ] Thank you page redirect
- [ ] Email confirmation flow
- [ ] Analytics tracking

## Configuration Variables

Replace these placeholders with your actual values:
- `[PORTAL_ID]`: Your HubSpot Portal ID
- `[YOUR_FORM_ID]`: Your specific form ID
- `[YOUR_REGION]`: Form region (eu1, na1, etc.)

## Security Considerations

### Form Security:
- Use HTTPS for all form submissions
- Configure proper CORS settings in HubSpot
- Implement proper data validation
- Consider GDPR compliance for EU users

### Script Loading:
- Load scripts asynchronously (defer attribute)
- Clean up scripts on component unmount
- Handle script loading errors gracefully

## Testing Checklist

### Functionality:
- [ ] Form loads correctly on all devices
- [ ] Form submission works properly
- [ ] Thank you message displays
- [ ] Error handling works
- [ ] Mobile experience is smooth

### Performance:
- [ ] Page loads quickly
- [ ] Scripts don't block rendering
- [ ] Images are optimized
- [ ] Responsive design works

### Accessibility:
- [ ] Form has proper labels
- [ ] Keyboard navigation works
- [ ] Screen readers can access form
- [ ] Color contrast is sufficient

This prompt provides a complete foundation for implementing a professional waitlist page with HubSpot form integration, following the patterns established in the current Lyyli.ai implementation.