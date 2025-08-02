# Analytics Implementation Prompt: GA4, Hotjar, Datafast & HubSpot

## Overview
This prompt provides comprehensive instructions for implementing GA4, Hotjar, Datafast Analytics, and HubSpot tracking services with full GDPR compliance and cookie consent management.

## Target Implementation
- **GA4 (Google Analytics 4)**: Web analytics and user behavior tracking
- **Hotjar**: User session recordings and heatmaps
- **Datafast Analytics**: Privacy-focused analytics alternative
- **HubSpot**: Marketing automation and lead tracking
- **Cookie Consent**: GDPR-compliant consent management

## Technical Requirements

### 1. Google Analytics 4 (GA4)
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

**Configuration:**
- Tracking ID: `G-K8BTK433WQ`
- Enhanced eCommerce: Enabled
- Demographics and Interest Reports: Enabled
- Data retention: 26 months
- Cookie expiration: 24 months

**Events to Track:**
- Page views (automatic)
- Button clicks on CTAs
- Form submissions
- Demo requests
- Pricing page interactions
- Cookie consent choices

### 2. Hotjar Implementation
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

**Configuration:**
- Site ID: `6422436`
- Recording rate: 100% for first 30 days, then optimize
- Heatmap tracking: All key pages
- Polls and surveys: Enabled for user feedback

**Key Pages to Track:**
- Homepage
- Pricing page
- Features page
- Contact page
- Demo interactions

### 3. Datafast Analytics
```html
<!-- Datafast Analytics -->
<script
  defer
  data-website-id="686d148894ee444d9ee76354"
  data-domain="www.lyyli.ai"
  src="https://datafa.st/js/script.js">
</script>
```

**Configuration:**
- Website ID: `686d148894ee444d9ee76354`
- Domain: `www.lyyli.ai`
- Privacy-focused: No personal data collection
- Cookie-free tracking: Enabled
- GDPR compliant by design

### 4. HubSpot Integration
```html
<!-- HubSpot Form Script -->
<script src="https://js-eu1.hsforms.net/forms/embed/146205702.js" defer></script>

<!-- HubSpot Embed Code -->
<script type="text/javascript" id="hs-script-loader" async defer src="//js-eu1.hs-scripts.com/146205702.js"></script>
```

**Configuration:**
- Portal ID: `146205702`
- Region: EU (GDPR compliance)
- Forms: Contact, Demo, Waitlist
- Lead scoring: Enabled
- Marketing automation: Enabled

## Cookie Consent Management

### Cookie Categories
1. **Necessary (Always enabled)**
   - Site functionality
   - Session management
   - Security features

2. **Analytics (User choice)**
   - GA4 tracking
   - Datafast Analytics
   - Performance monitoring

3. **Marketing (User choice)**
   - HubSpot tracking
   - Lead generation
   - Marketing automation

### Cookie Consent Flow
```typescript
interface CookieSettings {
  necessary: boolean; // Always true
  analytics: boolean; // User choice
  marketing: boolean; // User choice
}
```

**Banner Text (English):**
- Title: "We use cookies"
- Description: "This website uses cookies to improve your experience and analyze website usage. We use Datafast Analytics, Google Analytics 4, and HubSpot tracking to optimize our service."
- Buttons: "Accept All", "Accept Selected", "Reject All", "Cookie Settings"

**Banner Text (Finnish):**
- Title: "Käytämme evästeitä"
- Description: "Tämä verkkosivusto käyttää evästeitä parantaakseen käyttökokemustasi ja analysoidakseen sivuston käyttöä. Käytämme Datafast Analytics-, Google Analytics 4- ja HubSpot-seurantaa palvelumme optimoimiseksi."

## Implementation Steps

### 1. HTML Head Integration
Place all tracking scripts in `index.html` within `<head>` section:
- GA4 script with async loading
- Hotjar script with proper initialization
- Datafast script with defer attribute
- HubSpot scripts with async/defer

### 2. Cookie Consent Components
Required components:
- `CookieConsent.tsx` - Main consent manager
- `CookieBanner.tsx` - Consent banner display
- `CookieSettingsDialog.tsx` - Detailed settings
- `cookieUtils.ts` - Utility functions
- `types.ts` - TypeScript interfaces

### 3. Analytics Hook
Create `useAnalytics` hook for custom event tracking:
```typescript
interface AnalyticsEvent {
  name: string;
  properties?: Record<string, any>;
  timestamp: string;
}

export const useAnalytics = () => {
  const track = (eventName: string, properties?: Record<string, any>) => {
    // GA4 tracking
    if (gtag && cookieConsent.analytics) {
      gtag('event', eventName, properties);
    }
    
    // Custom tracking logic
  };
  
  return { track };
};
```

### 4. Cookie Management
Implement cookie clearing functions:
- `clearDatafastCookies()` - Remove Datafast cookies
- `clearHubspotCookies()` - Remove HubSpot cookies
- `saveCookieSettings()` - Save user preferences

### 5. DataLayer Integration
Configure dataLayer for enhanced tracking:
```javascript
window.dataLayer = window.dataLayer || [];
window.dataLayer.push({
  event: 'cookieConsentUpdate',
  cookieConsent: {
    analytics: boolean,
    marketing: boolean,
  },
});
```

## GDPR Compliance Requirements

### Data Processing Consent
- Explicit consent for analytics cookies
- Separate consent for marketing cookies
- Easy withdrawal of consent
- Clear privacy policy links

### Cookie Lifetime Management
- GA4 cookies: 24 months maximum
- HubSpot cookies: Based on user consent
- Datafast: Cookie-free by design
- Session cookies: Session duration only

### Data Subject Rights
- Right to access data
- Right to deletion
- Right to portability
- Right to rectification

## Performance Optimization

### Script Loading
- GA4: Async loading for non-blocking
- Hotjar: Async with proper error handling
- Datafast: Deferred loading
- HubSpot: Async and deferred

### Bundle Size Impact
- Total additional weight: ~45KB
- Gzipped impact: ~12KB
- Loading time impact: <100ms

## Testing & Validation

### GA4 Testing
- Verify Real-Time reports
- Check Goal completions
- Validate Enhanced eCommerce
- Test custom events

### Hotjar Validation
- Confirm recording functionality
- Verify heatmap data collection
- Test on different devices
- Check privacy compliance

### Cookie Consent Testing
- Test all consent combinations
- Verify cookie clearing
- Check localStorage persistence
- Validate cross-device behavior

## Monitoring & Maintenance

### Regular Checks
- Weekly: GA4 data accuracy
- Monthly: Hotjar session quality
- Quarterly: GDPR compliance review
- Annually: Full privacy audit

### Performance Monitoring
- Page load impact measurement
- Script error monitoring
- Cookie consent completion rates
- User experience metrics

## Success Metrics

### Analytics Goals
- GA4 conversion tracking: >95% accuracy
- Hotjar session capture: >90% completion
- Cookie consent rate: >70% acceptance
- Data quality score: >85%

### Compliance Metrics
- GDPR compliance score: 100%
- Cookie consent completion: >95%
- Privacy policy views: Track and optimize
- Data deletion requests: <1% of users

## Security Considerations

### Data Protection
- No PII in tracking parameters
- Encrypted data transmission
- Secure cookie settings
- Regular security audits

### Access Control
- Limited admin access
- Role-based permissions
- Regular access reviews
- Audit trail maintenance

This implementation ensures comprehensive analytics coverage while maintaining full GDPR compliance and optimal user experience.