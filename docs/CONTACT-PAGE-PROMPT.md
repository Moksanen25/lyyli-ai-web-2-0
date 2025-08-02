# Contact Page - Comprehensive Design & Content Prompt

## Target Audience

### Primary Audience
- **Enterprise Decision Makers**: CTOs, IT Directors, Compliance Officers seeking immediate consultation
- **Growth-Stage Companies**: Founders, Operations Managers needing quick implementation support
- **Existing Customers**: Users requiring technical support, account management, or upgrades
- **Partners & Integrators**: Technology partners, consultants seeking collaboration opportunities

### Secondary Audience
- **Potential Investors**: Looking for direct communication channels
- **Media & Press**: Journalists seeking company information and interviews
- **Job Seekers**: Professionals interested in career opportunities

## Brand Identity & Visual Design

### Color Palette (HSL Values)
```css
Primary Colors:
- --primary: 222 47% 11% (Deep navy for trust and professionalism)
- --primary-foreground: 210 40% 98% (Clean white for contrast)
- --secondary: 210 40% 95% (Light gray for subtle backgrounds)

Accent Colors:
- --accent-trust: 142 76% 36% (Trust green for security badges)
- --accent-urgency: 25 95% 53% (Warm orange for immediate response CTAs)
- --accent-professional: 221 83% 53% (Professional blue for business communication)

Interactive Elements:
- --accent-hover: 222 47% 15% (Darker primary for hover states)
- --muted: 210 40% 90% (Form field backgrounds)
- --border: 214 32% 91% (Subtle borders)
```

### Typography System
```css
Headings:
- font-family: 'Inter', sans-serif (Professional, clean)
- H1: 3rem/3.5rem, font-weight: 700 (Main page title)
- H2: 2.25rem/2.75rem, font-weight: 600 (Section headers)
- H3: 1.5rem/2rem, font-weight: 600 (Contact method titles)

Body Text:
- font-family: 'Inter', sans-serif
- Base: 1rem/1.75rem, font-weight: 400
- Large: 1.125rem/1.875rem (Form labels, important info)
- Small: 0.875rem/1.25rem (Helper text, disclaimers)

Special Elements:
- Buttons: font-weight: 500, letter-spacing: 0.025em
- Form Fields: font-weight: 400, line-height: 1.5
```

### Visual Style
- **Clean Minimalism**: Generous white space, clear visual hierarchy
- **Professional Trust**: Security badges, certifications, professional photography
- **Immediate Accessibility**: Multiple contact methods prominently displayed
- **Response Assurance**: Clear SLA messaging, availability indicators

## Page Sections

### 1. Contact Hero Section
```
Layout: Split layout with contact information on left, live chat preview on right

Content Structure:
- Main headline emphasizing immediate response
- Subtitle highlighting support quality and availability
- Primary contact methods (phone, email, chat) with response time promises
- Trust indicators (24/7 support, GDPR compliant, enterprise-ready)

English Copy:
Headline: "Get Expert Help When You Need It"
Subtitle: "Our security and AI specialists are ready to answer your questions. Get immediate responses through live chat or schedule a personalized consultation."

Contact Methods:
- "Live Chat" - "Instant responses during business hours"
- "Phone Support" - "Direct line to our experts: +358 40 123 4567"
- "Email" - "hello@lyyli.ai - Response within 2 hours"

Finnish Copy:
Headline: "Saat asiantuntija-apua juuri kun sitä tarvitset"
Subtitle: "Turvallisuus- ja tekoälyasiantuntijamme ovat valmiita vastaamaan kysymyksiisi. Saat välittömiä vastauksia live-chatin kautta tai voit varata henkilökohtaisen konsultaation."

Contact Methods:
- "Live Chat" - "Välittömiä vastauksia toimistoaikana"
- "Puhelintuki" - "Suora linja asiantuntijoillemme: +358 40 123 4567"
- "Sähköposti" - "hello@lyyli.ai - Vastaus 2 tunnin sisällä"
```

### 2. Contact Methods Grid
```
Layout: 3-column grid showcasing different communication channels

Method 1: Live Chat
Icon: MessageCircle (animated with pulse effect)
English:
- Title: "Live Chat Support"
- Description: "Get instant answers from our AI and human experts. Available Monday-Friday, 9 AM - 6 PM CET."
- CTA: "Start Chat Now"
- Availability: "🟢 Online Now"

Finnish:
- Title: "Live Chat -tuki"
- Description: "Saat välittömiä vastauksia tekoäly- ja ihmisasiantuntijoiltamme. Käytettävissä maanantai-perjantai, 9-18 CET."
- CTA: "Aloita Chat"
- Availability: "🟢 Verkossa nyt"

Method 2: Phone Consultation
Icon: Phone (with gentle rotation animation)
English:
- Title: "Phone Consultation"
- Description: "Schedule a 30-minute consultation with our security specialists. Perfect for complex implementation questions."
- CTA: "Book a Call"
- Note: "Free for all prospects"

Finnish:
- Title: "Puhelinkonsultaatio"
- Description: "Varaa 30 minuutin konsultaatio turvallisuusasiantuntijoillemme. Täydellinen monimutkaisiin toteutuskysymyksiin."
- CTA: "Varaa puhelu"
- Note: "Ilmainen kaikille prospekteille"

Method 3: Email Support
Icon: Mail (with subtle bounce animation)
English:
- Title: "Email Support"
- Description: "Detailed questions deserve detailed answers. Send us your requirements and get comprehensive responses."
- CTA: "Send Email"
- Response Time: "< 2 hours during business hours"

Finnish:
- Title: "Sähköpostituki"
- Description: "Yksityiskohtaiset kysymykset ansaitsevat yksityiskohtaisia vastauksia. Lähetä meille vaatimuksesi ja saat kattavia vastauksia."
- CTA: "Lähetä sähköposti"
- Response Time: "< 2 tuntia toimistoaikana"
```

### 3. Contact Form Section
```
Layout: Two-column layout with form on left, additional information on right

Form Fields:
- Name (required)
- Email (required)
- Company (required)
- Phone (optional)
- Subject dropdown (General Inquiry, Technical Support, Sales, Partnership, Other)
- Message (required, textarea)
- Urgency level (Low, Medium, High, Urgent)

English Form Labels:
- "Full Name *"
- "Business Email *"
- "Company Name *"
- "Phone Number"
- "What can we help you with? *"
- "Tell us more about your needs *"
- "How urgent is this?"
- Submit: "Send Message"

Finnish Form Labels:
- "Koko nimi *"
- "Työpaikka sähköposti *"
- "Yrityksen nimi *"
- "Puhelinnumero"
- "Miten voimme auttaa? *"
- "Kerro lisää tarpeistasi *"
- "Kuinka kiireellinen tämä on?"
- Submit: "Lähetä viesti"

Right Side Information:
English:
- "What to expect after contacting us:"
- "✓ Immediate confirmation email"
- "✓ Response within 2 business hours"
- "✓ Personalized solution recommendations"
- "✓ Follow-up meeting if needed"

Finnish:
- "Mitä odottaa yhteydenoton jälkeen:"
- "✓ Välitön vahvistussähköposti"
- "✓ Vastaus 2 arkitunnin sisällä"
- "✓ Henkilökohtaiset ratkaisusuositukset"
- "✓ Jatkotapaaminen tarvittaessa"
```

### 4. Office Information & Team
```
Layout: Two-column with office details and key team member cards

Office Information:
English:
- "Our Office"
- "Lyyli.ai Headquarters"
- "Mannerheimintie 12A, 00100 Helsinki, Finland"
- "Business Hours: Monday-Friday, 9:00-18:00 CET"
- "After-hours support available for enterprise customers"

Finnish:
- "Toimistomme"
- "Lyyli.ai päätoimisto"
- "Mannerheimintie 12A, 00100 Helsinki"
- "Toimistoajat: Maanantai-perjantai, 9:00-18:00"
- "Ympärivuorokautinen tuki saatavilla yritysasiakkaille"

Key Team Members:
CEO Card:
- Professional headshot photo
- "Mikko Sankala, CEO & Founder"
- "Direct line for enterprise inquiries"
- Email and LinkedIn buttons
- Response commitment: "Responds to all enterprise inquiries personally"

CTO Card:
- Professional headshot photo
- "Technical Director"
- "Expert in AI and security implementation"
- Specialties: "Integration, Custom Solutions, Security Architecture"
```

### 5. FAQ Section
```
Layout: Two-column expandable accordion format

English Questions:
1. "What's the typical response time?"
   - "Live chat: Immediate during business hours"
   - "Email: Within 2 hours during business days"
   - "Phone: Same day callback for scheduled consultations"

2. "Do you offer 24/7 support?"
   - "Yes, for Enterprise customers with SLA agreements"
   - "Standard support: Monday-Friday, 9 AM - 6 PM CET"
   - "Emergency contact available for critical issues"

3. "Can I schedule a product demo?"
   - "Absolutely! We offer personalized 30-minute demos"
   - "Available via video call or in-person in Helsinki"
   - "Book directly through our calendar or contact us"

4. "What languages do you support?"
   - "Full support in Finnish, English, and Swedish"
   - "Additional European languages available upon request"
   - "All documentation available in multiple languages"

5. "How do you handle data privacy?"
   - "GDPR compliant communication channels"
   - "All conversations encrypted and secured"
   - "Data retention policies clearly defined"

Finnish Questions:
1. "Mikä on tyypillinen vastausaika?"
2. "Tarjoatteko ympärivuorokautista tukea?"
3. "Voinko varata tuotedemon?"
4. "Mitä kieliä tuette?"
5. "Miten käsittelette tietosuojaa?"
```

### 6. Trust & Security Section
```
Layout: Horizontal trust indicators with security badges

Trust Elements:
- "GDPR Compliant Communication"
- "ISO 27001 Certified Security"
- "End-to-End Encrypted Channels"
- "SOC 2 Type II Verified"
- "Enterprise-Grade Privacy"

English Copy:
- "Your privacy and security are our top priorities"
- "All communication channels are encrypted and monitored for quality"
- "We never share your information with third parties"

Finnish Copy:
- "Yksityisyytesi ja turvallisuutesi ovat tärkeimmät prioriteettimme"
- "Kaikki viestintäkanavat ovat salattuja ja laadunvalvottuja"
- "Emme koskaan jaa tietojasi kolmansille osapuolille"
```

### 7. Emergency Contact Section
```
Layout: Highlighted callout box with emergency procedures

English:
- "Emergency Support"
- "For critical security issues affecting live systems:"
- "Emergency Hotline: +358 40 987 6543"
- "Available 24/7 for enterprise customers"
- "Response time: < 15 minutes"

Finnish:
- "Hätätuki"
- "Kriittisiin turvallisuusongelmiin, jotka vaikuttavat live-järjestelmiin:"
- "Hätälinja: +358 40 987 6543"
- "Saatavilla 24/7 yritysasiakkaille"
- "Vastausaika: < 15 minuuttia"
```

## Interactive Elements & Animations

### Micro-interactions
- **Contact method cards**: Gentle hover lift (transform: translateY(-4px))
- **Form fields**: Focus state with accent border and subtle glow
- **Submit button**: Loading spinner animation during form submission
- **Live chat indicator**: Pulsing green dot for online status
- **Success messages**: Slide-in from right with checkmark animation

### Animation Timing
```css
Hover transitions: 0.2s ease-out
Form interactions: 0.15s ease-in-out
Success animations: 0.3s cubic-bezier(0.4, 0, 0.2, 1)
Loading states: 1s infinite pulse
```

### Form Validation
- Real-time validation with instant feedback
- Success states with green checkmarks
- Error states with red borders and descriptive messages
- Accessibility-compliant error announcements

## Image Specifications

### Hero Section Images
- **Live chat preview mockup**: 600x400px showing actual chat interface
- **Team photo**: Professional office environment, 800x600px
- **Security badge collection**: SVG format for crisp scaling

### Team Member Photos
- **Dimensions**: 300x300px minimum, square aspect ratio
- **Style**: Professional headshots with neutral backgrounds
- **Format**: WebP with JPEG fallback for browser compatibility
- **Quality**: High resolution for Retina displays

### Office Photos
- **Helsinki office exterior**: 1200x800px establishing shot
- **Office interior**: 1200x800px showing modern, professional workspace
- **Meeting room**: 800x600px for consultation booking visual

### Trust & Security Graphics
- **Certification badges**: SVG format, 200x100px standardized size
- **Security icons**: Matching icon set with consistent line weight
- **Process diagrams**: Simple illustrations showing communication flow

## SEO Optimization

### Meta Information
```html
English:
<title>Contact Lyyli.ai - Expert AI Security Support | Helsinki, Finland</title>
<meta name="description" content="Contact Lyyli.ai for immediate AI security support. Live chat, phone consultations, and email support available. GDPR compliant communication channels.">

Finnish:
<title>Ota yhteyttä Lyyli.ai - Asiantunteva tekoälyturvallisuustuki | Helsinki</title>
<meta name="description" content="Ota yhteyttä Lyyli.ai välittömään tekoälyturvallisuustukeen. Live chat, puhelinkonsultaatiot ja sähköpostituki saatavilla. GDPR-yhteensopivat viestintäkanavat.">
```

### Structured Data
```json
{
  "@context": "https://schema.org",
  "@type": "ContactPage",
  "name": "Contact Lyyli.ai",
  "url": "https://lyyli.ai/contact",
  "mainEntity": {
    "@type": "Organization",
    "name": "Lyyli.ai",
    "contactPoint": [
      {
        "@type": "ContactPoint",
        "telephone": "+358-40-123-4567",
        "contactType": "customer service",
        "availableLanguage": ["Finnish", "English", "Swedish"],
        "hoursAvailable": "Mo-Fr 09:00-18:00"
      },
      {
        "@type": "ContactPoint",
        "email": "hello@lyyli.ai",
        "contactType": "customer service",
        "responseTime": "PT2H"
      }
    ],
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Mannerheimintie 12A",
      "addressLocality": "Helsinki",
      "postalCode": "00100",
      "addressCountry": "FI"
    }
  }
}
```

### Primary Keywords
- "AI security support Finland"
- "Enterprise AI consultation Helsinki"
- "GDPR compliant AI communication"
- "Live chat AI support"
- "Security specialist consultation"
- "tekoälyturvallisuus tuki Suomi" (Finnish)
- "yritys tekoäly konsultaatio Helsinki" (Finnish)

### Long-tail Keywords
- "immediate AI security expert consultation"
- "24/7 enterprise AI support Finland"
- "GDPR compliant AI communication channels"
- "Finnish AI security specialist contact"
- "Helsinki AI implementation support"

## Social Media Optimization

### Open Graph Tags
```html
<meta property="og:title" content="Contact Lyyli.ai - Expert AI Security Support Available 24/7">
<meta property="og:description" content="Get immediate help from our AI security specialists. Live chat, phone support, and email available. GDPR compliant communication.">
<meta property="og:image" content="https://lyyli.ai/images/contact-social-share.jpg">
<meta property="og:type" content="website">
<meta property="og:url" content="https://lyyli.ai/contact">
```

### Social Share Image
- **Dimensions**: 1200x630px (Facebook/LinkedIn optimal)
- **Content**: Contact information overlay on professional background
- **Text**: "Contact Lyyli.ai - Expert AI Support" with contact methods
- **Branding**: Lyyli.ai logo and consistent color scheme

## Favicon Strategy
- **Primary**: Modern "L" lettermark in primary brand color
- **Sizes**: 16x16, 32x32, 48x48, 64x64, 128x128, 256x256
- **Format**: ICO file with PNG fallbacks
- **Design**: Clean, geometric interpretation of "L" with subtle AI-inspired elements

## Performance Requirements

### Page Load Targets
- **First Contentful Paint**: < 1.5 seconds
- **Largest Contentful Paint**: < 2.5 seconds
- **Cumulative Layout Shift**: < 0.1
- **First Input Delay**: < 100ms

### Optimization Strategies
- Lazy loading for team photos and office images
- Critical CSS inlining for above-the-fold content
- Progressive enhancement for form validation
- WebP image format with JPEG fallbacks
- Optimized font loading with font-display: swap

## Conversion Optimization

### Primary Conversion Goals
1. **Live chat initiation**: 15% of page visitors
2. **Contact form submission**: 8% of page visitors
3. **Phone consultation booking**: 3% of page visitors
4. **Email contact**: 5% of page visitors

### A/B Testing Elements
- Hero headline variations (urgency vs. expertise focus)
- Contact method ordering (chat-first vs. phone-first)
- Form field requirements (minimal vs. comprehensive)
- CTA button colors and text
- Response time promises (conservative vs. aggressive)

### Trust Signal Placement
- Security badges prominently displayed in hero section
- Team photos with credentials and response commitments
- Customer testimonials about support quality
- Real-time availability indicators for live chat

## Accessibility Compliance

### WCAG 2.1 AA Standards
- Color contrast ratios ≥ 4.5:1 for normal text
- Color contrast ratios ≥ 3:1 for large text
- Keyboard navigation for all interactive elements
- Screen reader compatibility for form labels and errors
- Focus indicators on all focusable elements

### Inclusive Design Features
- Multiple contact method options for different preferences
- Clear visual hierarchy for easy scanning
- Simple language avoiding technical jargon in user-facing content
- Error messages in plain language with correction suggestions

## Multilingual Considerations

### Language Switching
- Prominent language selector maintaining contact context
- URL structure: /contact (English), /fi/yhteystieto (Finnish), /sv/kontakt (Swedish)
- Consistent contact information across all language versions
- Localized phone numbers and business hours where applicable

### Cultural Adaptations
- **Finnish version**: Emphasis on personal service and local presence
- **English version**: Focus on international expertise and global standards
- **Swedish version**: Professional Nordic business approach

## Integration Requirements

### CRM Integration
- Form submissions automatically create leads in CRM
- Chat conversations logged with contact context
- Email inquiries tracked with response time metrics
- Phone consultations scheduled through integrated calendar

### Marketing Automation
- Form completion triggers welcome email sequence
- Chat engagement triggers nurture campaigns
- High-urgency inquiries trigger immediate sales alerts
- Geographic data enables localized follow-up

## Success Metrics

### Engagement Metrics
- Page time on site: > 2 minutes average
- Bounce rate: < 40%
- Contact method usage distribution tracking
- Form completion rate: > 60%

### Quality Metrics
- Response time adherence: > 95%
- Customer satisfaction scores: > 4.5/5
- Resolution rate for first contact: > 80%
- Follow-up meeting conversion: > 25%

### Business Impact
- Lead quality score improvement
- Sales cycle acceleration from better qualification
- Customer support ticket reduction
- Enterprise deal pipeline contribution tracking

This comprehensive contact page prompt ensures a professional, trustworthy, and highly functional contact experience that serves both immediate support needs and long-term relationship building with prospects and customers.