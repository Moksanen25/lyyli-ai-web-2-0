# Contact Page - Current Project Structure Prompt

## Target Audience Analysis

### Primary Audience
- **Enterprise Decision Makers**: CTOs, IT Directors, Security Officers seeking AI compliance solutions
- **Growth-Stage Companies**: Founders, Operations teams needing rapid AI implementation 
- **Existing Customers**: Users requiring technical support, account upgrades, integration help
- **AI Implementation Teams**: Technical leads evaluating AI security solutions

### Secondary Audience  
- **Compliance Officers**: Legal/regulatory teams ensuring GDPR/AI Act compliance
- **Technology Partners**: System integrators, consultants seeking collaboration
- **Investment Community**: VCs, analysts researching AI security market
- **Media & Analysts**: Tech journalists covering AI regulation and security

## Brand Identity & Visual Design System

### Color Palette (Current Project HSL Values)
```css
/* Core Brand Colors */
--primary: 222 47% 11%        /* Deep professional navy */
--primary-foreground: 210 40% 98%  /* Clean contrast white */
--secondary: 210 40% 95%      /* Subtle background gray */
--secondary-foreground: 222 47% 11%  /* Text on secondary */

/* Accent & Action Colors */
--accent: 142 76% 36%         /* Trust green for security elements */
--accent-foreground: 210 40% 98%  /* White text on accent */
--destructive: 0 84% 60%      /* Error/urgent red */
--warning: 38 92% 50%         /* Attention orange */

/* Interactive States */
--muted: 210 40% 90%          /* Form field backgrounds */
--muted-foreground: 215 16% 47%  /* Placeholder text */
--border: 214 32% 91%         /* Subtle borders */
--input: 214 32% 91%          /* Input field borders */
--ring: 222 47% 11%           /* Focus rings */

/* Background System */
--background: 0 0% 100%       /* Main background */
--foreground: 222 47% 11%     /* Main text */
--card: 0 0% 100%             /* Card backgrounds */
--card-foreground: 222 47% 11%  /* Card text */
--popover: 0 0% 100%          /* Popover backgrounds */
--popover-foreground: 222 47% 11%  /* Popover text */
```

### Typography System (Inter Font Family)
```css
/* Heading Hierarchy */
h1: text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight
h2: text-3xl md:text-4xl font-semibold tracking-tight  
h3: text-2xl md:text-3xl font-semibold
h4: text-xl md:text-2xl font-medium
h5: text-lg md:text-xl font-medium
h6: text-base md:text-lg font-medium

/* Body Text System */
body-large: text-lg leading-relaxed
body-base: text-base leading-relaxed  
body-small: text-sm leading-normal
caption: text-xs leading-normal

/* Interactive Elements */
button-text: font-medium tracking-wide
form-label: font-medium text-sm
form-help: text-xs text-muted-foreground
```

## Page Structure & Content

### 1. Contact Hero Section
```
Layout: Centered hero with gradient background and contact overview

Content Structure:
- Main headline emphasizing immediate expert support
- Subtitle highlighting AI security specialization and response commitment
- Primary contact method grid (3 methods)
- Trust indicators bar with compliance badges

English Copy:
Headline: "Get Expert AI Security Support When You Need It"
Subtitle: "Our certified AI and compliance specialists are ready to help you navigate complex regulations and implement secure AI solutions. Immediate responses guaranteed."

Contact Methods Preview:
- "Live AI Chat" - "Instant expert responses"
- "Direct Phone Line" - "Speak with specialists now"  
- "Priority Email" - "Detailed responses within 2 hours"

Trust Bar: "GDPR Compliant • ISO 27001 Certified • AI Act Ready • Enterprise Security"

Finnish Copy:
Headline: "Saat asiantuntevaa tekoälyturvallisuustukea juuri kun sitä tarvitset"
Subtitle: "Sertifioidut tekoäly- ja compliance-asiantuntijamme ovat valmiita auttamaan sinua navigoimaan monimutkaisessa sääntelyssä ja toteuttamaan turvallisia tekoälyratkaisuja. Välittömät vastaukset taattu."

Contact Methods Preview:
- "Live tekoälychat" - "Välittömiä asiantuntijavastauksia"
- "Suora puhelinlinja" - "Puhu asiantuntijoiden kanssa nyt"
- "Prioriteetti sähköposti" - "Yksityiskohtaiset vastaukset 2 tunnin sisällä"

Trust Bar: "GDPR-yhteensopiva • ISO 27001 sertifioitu • AI Act valmis • Yritysturvallisuus"
```

### 2. Contact Methods Detailed Grid
```
Layout: 3-column responsive grid with detailed contact options

Method 1: Live AI-Powered Chat
Icon: MessageCircle with AI glow effect
English:
- Title: "Live AI-Powered Support Chat"
- Description: "Get instant answers from our AI assistant backed by human experts. Available for technical questions, compliance guidance, and implementation support."
- Features: "✓ Instant AI responses ✓ Human expert escalation ✓ Session transcripts ✓ Multi-language support"
- Availability: "🟢 Online Now - 24/7 AI, Human experts 9-18 CET"
- CTA: "Start Secure Chat"

Finnish:
- Title: "Live tekoälypohjainen tukichat"
- Description: "Saat välittömiä vastauksia tekoälyavustajaltamme, jota tukevat ihmisasiantuntijat. Saatavilla teknisiin kysymyksiin, compliance-ohjaukseen ja toteutustukeen."
- Features: "✓ Välittömiä tekoälyvastauksia ✓ Ihmisasiantuntijan eskalointi ✓ Istunto-kopiot ✓ Monikielinen tuki"
- Availability: "🟢 Verkossa nyt - 24/7 tekoäly, ihmisasiantuntijat 9-18 CET"
- CTA: "Aloita turvallinen chat"

Method 2: Expert Phone Consultation  
Icon: Phone with specialist badge
English:
- Title: "Direct Expert Phone Line"
- Description: "Schedule immediate consultation with our AI security and compliance specialists. Perfect for complex implementation discussions and regulatory guidance."
- Features: "✓ Certified AI specialists ✓ Compliance experts ✓ Technical architects ✓ Implementation planning"
- Phone: "+358 40 123 4567"
- CTA: "Call Now" / "Schedule Callback"
- Note: "Free consultation for qualified prospects"

Finnish:
- Title: "Suora asiantuntijapuhelinlinja"
- Description: "Varaa välitön konsultaatio tekoälyturvallisuus- ja compliance-asiantuntijoillemme. Täydellinen monimutkaisiin toteutuskeskusteluihin ja sääntelyohjaukseen."
- Features: "✓ Sertifioidut tekoälyasiantuntijat ✓ Compliance-asiantuntijat ✓ Tekniset arkkitehdit ✓ Toteutussuunnittelu"
- Phone: "+358 40 123 4567"
- CTA: "Soita nyt" / "Varaa takaisinsoitto"
- Note: "Ilmainen konsultaatio päteville prospekteille"

Method 3: Priority Email Support
Icon: Mail with priority badge
English:
- Title: "Priority Email Support"
- Description: "Send detailed inquiries and receive comprehensive responses from our technical team. Perfect for documentation requests and detailed technical questions."
- Email: "hello@lyyli.ai"
- Features: "✓ Detailed technical responses ✓ Documentation attachments ✓ Implementation guides ✓ Follow-up scheduling"
- Response Time: "< 2 hours during business hours, < 24 hours outside business hours"
- CTA: "Send Priority Email"

Finnish:
- Title: "Prioriteetti sähköpostituki"
- Description: "Lähetä yksityiskohtaisia kyselyjä ja saat kattavia vastauksia tekniseltä tiimiltämme. Täydellinen dokumentaatiopyyntöihin ja yksityiskohtaisiin teknisiin kysymyksiin."
- Email: "hello@lyyli.ai"
- Features: "✓ Yksityiskohtaiset tekniset vastaukset ✓ Dokumentaatioliitteet ✓ Toteutusoppaat ✓ Jatkotapaamisten varaus"
- Response Time: "< 2 tuntia toimistoaikana, < 24 tuntia toimistoaikojen ulkopuolella"
- CTA: "Lähetä prioriteetti sähköposti"
```

### 3. Comprehensive Contact Form
```
Layout: Two-column layout with form on left, expectations on right

Form Fields (Based on current project structure):
- Name (required) - "Full Name *"
- Email (required) - "Business Email Address *"  
- Company (required) - "Company Name *"
- Phone (optional) - "Phone Number"
- Subject (required dropdown) - "What can we help you with? *"
  Options: 
  - "AI Compliance Assessment"
  - "Technical Implementation Support"  
  - "Enterprise Partnership"
  - "Security Consultation"
  - "General Inquiry"
- Message (required) - "Tell us about your AI security needs *"
- Urgency (required) - "Priority Level"
  Options: "Standard", "High Priority", "Urgent - Same Day Response"

Placeholders:
English:
- Name: "Your full name"
- Email: "your.email@company.com"
- Company: "Your company name"
- Phone: "+358 40 123 4567"
- Message: "Describe your AI security challenges and goals..."

Finnish:
- Name: "Koko nimesi"
- Email: "sinun.sahkoposti@yritys.com"
- Company: "Yrityksesi nimi"
- Phone: "+358 40 123 4567"
- Message: "Kuvaile tekoälyturvallisuushaasteesi ja tavoitteesi..."

Form Validation Messages:
English:
- Success: "Thank you! Our AI security experts will respond within 2 hours during business hours."
- Error: "Something went wrong. Please try again or contact us directly at hello@lyyli.ai"
- Sending: "Sending your secure message..."

Finnish:
- Success: "Kiitos! Tekoälyturvallisuusasiantuntijamme vastaavat 2 tunnin sisällä toimistoaikana."
- Error: "Jotain meni pieleen. Yritä uudelleen tai ota suoraan yhteyttä osoitteeseen hello@lyyli.ai"
- Sending: "Lähetetään turvallista viestiäsi..."

Right Side - What to Expect:
English:
- "What happens after you contact us:"
- "✓ Immediate confirmation email with case number"
- "✓ AI security expert response within 2 business hours"
- "✓ Personalized AI compliance roadmap"
- "✓ Follow-up consultation scheduling if needed"
- "✓ Implementation timeline and next steps"

Finnish:
- "Mitä tapahtuu yhteydenoton jälkeen:"
- "✓ Välitön vahvistussähköposti tapausnumerolla"
- "✓ Tekoälyturvallisuusasiantuntijan vastaus 2 arkitunnin sisällä"
- "✓ Henkilökohtainen tekoäly-compliance tiekartta"
- "✓ Jatkokonsultaation varaus tarvittaessa"
- "✓ Toteutusaikataulu ja seuraavat vaiheet"
```

### 4. Company Information & Leadership
```
Layout: Split layout with office details and key team information

Office Information:
English:
- "Lyyli.ai Headquarters"
- "Mannerheimintie 12A, 00100 Helsinki, Finland"
- "Business Hours: Monday-Friday, 9:00-18:00 CET"
- "24/7 AI support available"
- "Emergency enterprise support: +358 40 987 6543"

Finnish:
- "Lyyli.ai päätoimisto"
- "Mannerheimintie 12A, 00100 Helsinki"
- "Toimistoajat: Maanantai-perjantai, 9:00-18:00 CET"
- "24/7 tekoälytuki saatavilla"
- "Hätätilanteen yritystuki: +358 40 987 6543"

Leadership Team (Based on current project):
CEO Profile:
- Name: "Mikko Sankala"
- Title: "CEO & Founder"
- Expertise: "AI Regulation, Enterprise Security, GDPR Compliance"
- Contact: Direct email and LinkedIn
- Quote: "Every enterprise deserves AI that's both powerful and compliant."

Finnish:
- Title: "Toimitusjohtaja & perustaja"
- Expertise: "Tekoälysääntely, yritysturvallisuus, GDPR-yhteensopivuus"
- Quote: "Jokainen yritys ansaitsee tekoälyä, joka on sekä voimakasta että yhteensopivaa."
```

### 5. Frequently Asked Questions
```
Layout: Two-column expandable accordion format

English Questions:
1. "What's your typical response time for different contact methods?"
   Answer: Details about chat (immediate), phone (same day), email (2 hours business, 24h outside)

2. "Do you provide 24/7 support for enterprise customers?"
   Answer: Yes for enterprise SLA customers, AI support 24/7, human escalation during business hours

3. "Can you help with AI Act compliance preparation?"
   Answer: Yes, specialized team for EU AI Act, assessment services, implementation roadmaps

4. "What languages do your support teams speak?"
   Answer: Finnish, English, Swedish native speakers, additional European languages available

5. "Do you offer on-site consultations?"
   Answer: Yes in Helsinki area, remote for international, hybrid approach available

6. "How do you ensure data privacy during consultations?"
   Answer: GDPR compliant processes, encrypted communications, NDA availability

Finnish Questions: (Same structure, translated)
1. "Mikä on tyypillinen vastausaikanne eri yhteydenottotavoille?"
2. "Tarjoatteko ympärivuorokautista tukea yritysasiakkaille?"
3. "Voitteko auttaa AI Act -yhteensopivuuden valmistelussa?"
4. "Mitä kieliä tukitiimienne jäsenet puhuvat?"
5. "Tarjoatteko paikan päällä konsultaatioita?"
6. "Miten varmistatte tietosuojan konsultaatioiden aikana?"
```

### 6. Trust & Security Credentials
```
Layout: Horizontal security badge display with detailed credentials

Security Certifications:
- "GDPR Compliant Communication Channels"
- "ISO 27001:2013 Certified Information Security"
- "SOC 2 Type II Verified Security Controls"
- "EU AI Act Compliance Specialists"
- "Enterprise-Grade End-to-End Encryption"

English Trust Statement:
"Your privacy and security are fundamental to everything we do. All communication channels use enterprise-grade encryption, our team operates under strict confidentiality agreements, and we never share client information with third parties."

Finnish Trust Statement:
"Yksityisyytesi ja turvallisuutesi ovat perustavanlaatuisia kaikessa toiminnassamme. Kaikki viestintäkanavat käyttävät yritystason salausta, tiimimme toimii tiukkojen salassapitosopimuksien alaisena, emmekä koskaan jaa asiakastietoja kolmansille osapuolille."
```

### 7. Emergency & Urgent Support
```
Layout: Highlighted callout section with emergency procedures

English:
- "Emergency AI Security Support"
- "For critical AI security incidents affecting live systems:"
- "Emergency Hotline: +358 40 987 6543"
- "Available 24/7 for enterprise SLA customers"
- "Response commitment: < 15 minutes"
- "Incident escalation procedures available"

Finnish:
- "Hätätilanteen tekoälyturvallisuustuki"
- "Kriittisiin tekoälyturvallisuusongelmiin, jotka vaikuttavat live-järjestelmiin:"
- "Hätälinja: +358 40 987 6543"
- "Saatavilla 24/7 enterprise SLA -asiakkaille"
- "Vastaussitoumus: < 15 minuuttia"
- "Tapauksen eskalaatiomenettelyt saatavilla"
```

## Animation & Interaction Design

### Micro-interactions
```css
/* Contact method cards */
.contact-method-card {
  @apply transition-all duration-300 hover:scale-105 hover:shadow-lg;
}

/* Form field focus states */
.form-field:focus {
  @apply ring-2 ring-primary ring-offset-2 border-primary;
}

/* Success state animations */
.success-message {
  @apply animate-slide-in-right;
}

/* Live chat indicator */
.chat-status-online {
  @apply animate-pulse;
}

/* Emergency contact highlight */
.emergency-contact {
  @apply animate-fade-in border-l-4 border-destructive;
}
```

### Animation Timing
- Hover effects: 200ms ease-out
- Form interactions: 150ms ease-in-out  
- Success states: 300ms cubic-bezier(0.4, 0, 0.2, 1)
- Loading states: 1s infinite pulse

## Image Specifications

### Hero Section Images
- **AI consultation mockup**: 800x600px showing video call interface
- **Security dashboard preview**: 1000x600px showing compliance metrics
- **Team collaboration photo**: 1200x800px professional office environment

### Team Photography
- **Leadership headshots**: 400x400px, professional style, consistent lighting
- **Office photos**: 1200x800px showing modern Helsinki workspace
- **Team collaboration**: 1000x600px showing diverse, professional team

### Trust & Security Graphics
- **Certification badges**: SVG format, 150x100px standardized
- **Security visualization**: Custom illustrations showing data protection
- **Process diagrams**: Simple flowcharts showing support escalation

## SEO Optimization

### Meta Tags
```html
English:
<title>Contact Lyyli.ai - Expert AI Security & Compliance Support | Helsinki</title>
<meta name="description" content="Get immediate AI security and compliance support from certified experts. Live chat, phone consultations, and priority email support. GDPR compliant communication.">

Finnish:
<title>Ota yhteyttä Lyyli.ai - Asiantunteva tekoälyturvallisuus- ja compliance-tuki | Helsinki</title>
<meta name="description" content="Saat välitöntä tekoälyturvallisuus- ja compliance-tukea sertifioiduilta asiantuntijoilta. Live chat, puhelinkonsultaatiot ja prioriteetti sähköpostituki. GDPR-yhteensopiva viestintä.">
```

### Structured Data
```json
{
  "@context": "https://schema.org",
  "@type": "ContactPage",
  "name": "Contact Lyyli.ai",
  "description": "Expert AI security and compliance support",
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
        "hoursAvailable": "Mo-Fr 09:00-18:00",
        "areaServed": "EU"
      }
    ]
  }
}
```

### Social Media Optimization
```html
<meta property="og:title" content="Contact Lyyli.ai - Expert AI Security Support">
<meta property="og:description" content="Get immediate help from certified AI security specialists. Multiple contact methods, guaranteed response times.">
<meta property="og:image" content="https://lyyli.ai/images/contact-social-share.jpg">
<meta property="og:type" content="website">
```

## Current Translation Structure Integration

Based on the existing translation files, ensure consistency with:
- `contact.title` and `contact.subtitle` from current translations
- `contact.information`, `contact.role`, `contact.call`, `contact.email` labels
- `contact.phoneAriaLabel`, `contact.emailAriaLabel`, `contact.whatsappAriaLabel`, `contact.chatAriaLabel` for accessibility
- `contact.vatNumber` for business registration display

## Performance & Accessibility

### Performance Targets
- First Contentful Paint: < 1.2 seconds
- Largest Contentful Paint: < 2.0 seconds
- Form interaction responsiveness: < 50ms

### Accessibility Requirements
- WCAG 2.1 AA compliance
- Keyboard navigation for all interactive elements
- Screen reader optimization for form labels and error messages
- High contrast mode support
- Focus indicators on all interactive elements

## Success Metrics & Conversion Goals

### Primary Conversions
1. Live chat initiation: Target 20% of visitors
2. Contact form completion: Target 12% of visitors  
3. Phone consultation booking: Target 5% of visitors
4. Emergency contact usage: Monitor for enterprise customers

### Quality Metrics
- Response time adherence: > 98%
- Customer satisfaction: > 4.7/5
- Lead qualification rate: > 85%
- Follow-up meeting conversion: > 40%

This prompt reflects the current project structure while providing comprehensive guidance for a professional, conversion-optimized contact page that serves both immediate support needs and long-term relationship building.