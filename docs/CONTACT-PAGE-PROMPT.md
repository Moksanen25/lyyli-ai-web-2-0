# Contact Page Prompt for New Lovable Project

## Instructions
Create a professional Contact page for Lyyli.ai with the following specifications:

### CRITICAL RESTRICTIONS
- **DO NOT HALLUCINATE CONTACT INFO**: Use ONLY the real contact information provided below
- **NO FICTIONAL DATA**: All contact details must be accurate and verified
- **NO FAKE ADDRESSES**: Only use actual business information
- **NO PLACEHOLDER CONTENT**: All information must be real and functional

### REAL CONTACT INFORMATION TO USE
```
CEO: Mikko Oksanen
Email: mikko@lyyli.ai
General Email: hello@lyyli.ai
Phone: +358 40 961 9224
WhatsApp: +358 40 961 9224
Website: www.lyyli.ai
VAT Number: 3537519-5 (Finnish format: Y-tunnus)
```

### CURRENT PAGE STRUCTURE
The existing Contact page includes:

#### Layout Components
- Responsive navbar
- Hero section with title and subtitle
- Two-column grid layout (mobile stacks)
- Contact information card
- Live chat interface
- Footer

#### Contact Information Section
- Executive contact details (Mikko Oksanen, CEO)
- Multiple contact methods (phone, email, website, WhatsApp)
- Action buttons for direct contact
- VAT/business registration number
- Mobile-optimized touch targets

#### Chat Interface Section
- Embedded live chat with Lyyli AI
- Chat header with branding
- Full-height responsive container
- Real-time communication capability

### TRANSLATION KEYS STRUCTURE

#### English (contact.ts)
```typescript
export const contact = {
  title: 'Contact us',
  subtitle: 'Have questions? Our AI assistant is ready to help you or get in touch directly with our team.',
  information: 'Contact information',
  role: 'CEO',
  call: 'Call',
  email: 'Email',
  phoneAriaLabel: 'Call Mikko',
  emailAriaLabel: 'Email Mikko',
  whatsappAriaLabel: 'Contact Mikko on WhatsApp',
  chatAriaLabel: 'Live chat interface',
  vatNumber: 'VAT: FI35375195'
};
```

#### Finnish (contact.ts)
```typescript
export const contact = {
  title: 'Ota yhteyttä',
  subtitle: 'Onko kysyttävää? Tekoälyavustajamme on valmis auttamaan tai ota suoraan yhteyttä tiimiimme.',
  information: 'Yhteystiedot',
  role: 'Toimitusjohtaja',
  call: 'Soita',
  email: 'Sähköposti',
  phoneAriaLabel: 'Soita Mikolle',
  emailAriaLabel: 'Lähetä sähköpostia Mikolle',
  whatsappAriaLabel: 'Ota yhteyttä Mikkoon WhatsAppilla',
  chatAriaLabel: 'Live-chatin käyttöliittymä',
  vatNumber: 'Y-tunnus: 3537519-5'
};
```

#### Swedish (contact.ts) - Enhanced Version
```typescript
export const contact = {
  title: 'Kontakta oss',
  subtitle: 'Har du frågor? Vår AI-assistent är redo att hjälpa dig eller kontakta vårt team direkt.',
  information: 'Kontaktinformation',
  role: 'VD',
  call: 'Ring',
  email: 'E-post',
  phoneAriaLabel: 'Ring Mikko',
  emailAriaLabel: 'Skicka e-post till Mikko',
  whatsappAriaLabel: 'Kontakta Mikko via WhatsApp',
  chatAriaLabel: 'Live-chat gränssnitt',
  vatNumber: 'Organisationsnummer: 3537519-5',
  
  // Enhanced contact form and sections
  form: {
    name: 'Namn',
    email: 'E-postadress',
    company: 'Företag',
    message: 'Meddelande',
    subject: 'Ämne',
    phone: 'Telefonnummer',
    placeholders: {
      name: 'Ditt fullständiga namn',
      email: 'din@email.com',
      company: 'Ditt företagsnamn',
      message: 'Berätta hur vi kan hjälpa dig...',
      subject: 'Vad gäller din förfrågan?',
      phone: '+46 70 123 45 67'
    },
    submit: 'Skicka meddelande',
    sending: 'Skickar...',
    success: 'Tack! Vi återkommer inom 24 timmar.',
    error: 'Något gick fel. Försök igen eller kontakta oss direkt.'
  },
  info: {
    title: 'Kontaktinformation',
    email: 'hello@lyyli.ai',
    phone: '+358 40 961 9224',
    address: 'Finland',
    hours: 'Mån-Fre 9:00-17:00 EET'
  },
  reasons: {
    title: 'Vanliga anledningar att kontakta oss',
    items: [
      {
        title: 'Produktdemo',
        description: 'Boka en personlig demo av Lyyli.ai'
      },
      {
        title: 'Partnerskap',
        description: 'Utforska partnerskapsmöjligheter'
      },
      {
        title: 'Support',
        description: 'Få hjälp med implementation'
      },
      {
        title: 'Media',
        description: 'Press- och mediaförfrågningar'
      }
    ]
  },
  chat: {
    title: 'Live-chat',
    subtitle: 'Få svar direkt från vår AI-assistent',
    startChat: 'Starta chatt',
    online: 'Online nu',
    offline: 'Offline - vi svarar via e-post'
  }
};
```

### ENHANCEMENT GUIDELINES

#### Content Improvements
1. **Contact Methods Hierarchy**
   - Primary: Live chat with AI assistant
   - Secondary: Direct email/phone to CEO
   - Tertiary: WhatsApp for instant messaging
   - Include business hours and response times

2. **Trust Building Elements**
   - Real business registration information
   - Professional executive contact
   - Multiple verified contact channels
   - Clear availability and response expectations

3. **User Experience**
   - Mobile-first responsive design
   - Large touch targets for mobile
   - Progressive disclosure of information
   - Accessible form labels and ARIA attributes

#### Visual Design
1. **Modern Layout**
   - Clean two-column desktop layout
   - Mobile-stacked responsive design
   - Consistent spacing and typography
   - Professional color scheme

2. **Interactive Elements**
   - Hover states for contact links
   - Focus indicators for accessibility
   - Loading states for form submissions
   - Visual feedback for user actions

3. **Iconography**
   - Consistent icon style (Lucide React)
   - Appropriate icons for each contact method
   - Proper icon sizing and spacing
   - Screen reader considerations

#### Technical Features
1. **Live Chat Integration**
   - Real-time AI assistant
   - Contextual conversation starter
   - Chat history persistence
   - Fallback to human support

2. **Contact Form** (Optional Enhancement)
   - React Hook Form with validation
   - Dropdown for inquiry types
   - File attachment capability
   - Spam protection

3. **SEO Optimization**
   - Structured data for business contact
   - Local business schema markup
   - Multi-language meta tags
   - Canonical URL management

### PAGE SECTIONS TO IMPLEMENT

#### 1. Hero Section
- Page title with compelling headline
- Subtitle explaining contact options
- Visual hierarchy with proper spacing

#### 2. Contact Information Card
- Executive details with photo (optional)
- All contact methods with icons
- Click-to-call and click-to-email functionality
- Business registration information

#### 3. Live Chat Interface
- Embedded AI assistant
- Professional chat header
- Full responsive height
- Context-aware conversation

#### 4. Contact Form (Enhancement)
- Name, email, company fields
- Subject/inquiry type dropdown
- Message textarea
- Phone number with country code

#### 5. Additional Information (Enhancement)
- Business hours
- Response time expectations
- FAQ section for common inquiries
- Alternative support channels

### CONTENT GOALS
1. **Accessibility**: Make it easy for prospects to reach Lyyli.ai
2. **Trust**: Demonstrate professionalism and responsiveness
3. **Efficiency**: Provide immediate AI assistance while offering human contact
4. **Conversion**: Guide visitors toward meaningful engagement

### TONE AND MESSAGING
- **Professional yet approachable**
- **Confident but not pushy**
- **Helpful and solution-oriented**
- **Clear about availability and response times**

### TARGET AUDIENCE
- **Primary**: B2B decision-makers seeking AI communication solutions
- **Secondary**: IT managers evaluating integration requirements
- **Tertiary**: Media and potential partners

### MULTILINGUAL REQUIREMENTS
- **Complete translation coverage** for EN, FI, SV
- **Cultural adaptation** of contact preferences
- **Region-specific** business information format
- **Consistent messaging** across all languages

### SUCCESS METRICS
- Contact form submission rate
- Live chat engagement rate
- Direct contact conversion (calls/emails)
- Time to first response
- User satisfaction with contact experience

### IMPLEMENTATION PRIORITY
1. **Core contact functionality** (MVP)
2. **Live chat integration** (High)
3. **Enhanced contact form** (Medium)
4. **Additional trust elements** (Low)
5. **Advanced features** (Future)

### TECHNICAL REQUIREMENTS
- Responsive design (mobile-first)
- Accessibility compliance (WCAG 2.1)
- Fast loading times
- Cross-browser compatibility
- SEO optimization
- Analytics tracking
- Error handling and validation

### INTEGRATION POINTS
- Chat system integration
- Email service for form submissions
- Analytics tracking
- CRM integration (optional)
- Marketing automation (future)

---

**Remember**: This Contact page serves as a critical conversion point. Focus on removing friction from the contact process while building trust through professional presentation and multiple engagement options. The AI chat should be the primary contact method, with human contact as a clear escalation path.