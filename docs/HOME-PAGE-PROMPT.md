# Lyyli.ai Home Page - Comprehensive Design Prompt

## Overview
Create a modern, professional landing page for Lyyli.ai - an AI-powered communication platform for expert organizations. The page should convert visitors through clear value propositions, social proof, and compelling calls-to-action.

## Target Audience & ICP (Ideal Customer Profile)
- **Primary**: Expert organizations (consulting, legal, healthcare, engineering firms)
- **Secondary**: Enterprise businesses with complex communication needs
- **Key decision makers**: CTOs, Communication Directors, Operations Managers
- **Pain points**: Inefficient internal communication, inconsistent messaging, time wasted on coordination
- **Goals**: Professional communication, time savings, better coordination

## Brand Identity & Visual Design

### Colors (HSL Format)
- **Primary**: `#2F5D50` (hsl(162, 32%, 28%)) - Deep teal/green
- **Secondary**: `#F7EBEB` (hsl(0, 35%, 95%)) - Light warm white
- **Accent**: `#A7D6D1` (hsl(175, 37%, 74%)) - Light teal
- **Background**: `#F5F5F4` (hsl(36, 33%, 97%)) - Warm off-white
- **Foreground**: `#2F5D50` - Same as primary for text

### Typography
- **Headlines**: Playfair Display (serif) - weights 400, 500, 600, 700
- **Body text**: Inter (sans-serif) - weights 300, 400, 500, 600, 700
- **Responsive scaling**: Mobile-first approach with proper line heights

### Visual Style
- **Aesthetic**: Clean, professional, trustworthy
- **Effects**: Subtle gradients, soft shadows, gentle animations
- **Layout**: Spacious, well-organized, mobile-optimized
- **Accessibility**: WCAG 2.1 AA compliant

## Page Sections & Content

### 1. Navigation Bar
**Functionality**: Sticky header with language switcher (FI/EN/SV)
**Links**: Features, Pricing, About, Contact, Blog
**CTA**: Primary "Get Started" button

### 2. Hero Section
**Visual Elements**:
- Gradient background from background to primary/5
- Floating decorative blur elements
- ROI calculation widget on desktop

**Copy (English)**:
- **Title**: "Important communication goes undone because there are no proper tools"
- **Subtitle**: "AI communication assistant for expert organizations – communicate in messaging channels like a professional and ensure important matters are never left uncommunicated."
- **Primary CTA**: "Get started"
- **Secondary CTA**: "Explore features"

**Copy (Finnish)**:
- **Title**: "AI-viestintäassistentti, jonka avulla viestit kuin ammattilainen"
- **Subtitle**: "Asiantuntijaorganisaatioille tehty AI-viestintäassistentti, jonka avulla viestit pikaviestikanavissa kuin ammattilainen ja varmistat, etteivät tärkeät asiat jaa ikinä viestimättä."
- **Primary CTA**: "Aloita"
- **Secondary CTA**: "Tutustu ominaisuuksiin"

### 3. Problem Section
**Purpose**: Create empathy and highlight pain points
**Content**: Focus on communication challenges in expert organizations
**Visual**: Split layout with problem illustration

### 4. Solution Introduction
**Purpose**: Present Lyyli as the solution
**Content**: Brief overview of how AI assistants solve communication problems
**Visual**: Product preview or demo interface

### 5. Value Propositions (3 Key Benefits)
**Structure**: Icon + Capability + Feature + Benefit + Details
**Content**: 
1. Professional communication enhancement
2. Time savings and efficiency
3. Enterprise-grade security and compliance

### 6. How It Works
**Purpose**: Explain the process in simple steps
**Visual**: Step-by-step flow diagram
**Content**: 3-4 clear steps from setup to results

### 7. Compliance Badges
**Content**: GDPR, EU servers, enterprise security
**Visual**: Trust indicators and compliance logos

### 8. Features Section
**Structure**: Grid layout with feature cards
**Content**: 6-8 key features with icons and descriptions
**CTA**: "Book a Demo" button

### 9. Use Cases
**Purpose**: Show practical applications
**Content**: Segment-specific examples (legal, consulting, healthcare)
**Visual**: Tabbed interface or cards

### 10. Enterprise Callout
**Purpose**: Target enterprise customers
**Content**: Enterprise-specific benefits and guarantees
**Visual**: Professional imagery or illustrations

### 11. Testimonials
**Purpose**: Social proof and credibility
**Content**: Customer quotes and case studies
**Visual**: Customer photos/logos when available

### 12. Blog Carousel
**Purpose**: Demonstrate thought leadership
**Content**: Latest blog posts with snippets
**Visual**: Horizontal scrolling cards

### 13. Final CTA Section
**Purpose**: Last conversion opportunity
**Content**: Strong call-to-action with urgency or value proposition
**Visual**: Prominent button and compelling messaging

### 14. Footer
**Content**: Links, contact info, social media, legal pages
**Structure**: Multi-column layout with newsletter signup

## Animation & Interactions

### Entrance Animations
- **Fade-in**: 0.7s ease-out for main content
- **Slide-in-left**: 0.5s ease-out for side content
- **Bounce-gentle**: For CTA buttons (2s infinite)

### Hover Effects
- **Buttons**: Subtle scale (1.05) and shadow changes
- **Cards**: Gentle lift with shadow increase
- **Links**: Underline animation with color transition

### Scroll Animations
- **Stagger**: Sequential animation of list items
- **Parallax**: Subtle background movement
- **Progress**: Visual indicators for long-form content

## Images & Media

### Required Images
- **Hero image**: Professional team or dashboard screenshot
- **Feature illustrations**: Custom icons or illustrations for each feature
- **Product screenshots**: Actual interface examples
- **Team photos**: For testimonials and about section
- **Company logos**: For social proof

### Image Specifications
- **Format**: WebP with JPEG fallback
- **Sizes**: Responsive srcset for optimal loading
- **Alt text**: Descriptive for accessibility
- **Loading**: Lazy loading with proper placeholders

## SEO Optimization

### Meta Information
**English**:
- **Title**: "Lyyli.ai - AI-Powered Communication Platform for Businesses"
- **Description**: "Lyyli.ai is an AI-powered communication platform that revolutionizes business content creation. GDPR compliant, EU servers, and enterprise-grade security."

**Finnish**:
- **Title**: "Lyyli.ai - Tekoälyavusteinen viestintäalusta yrityksille"
- **Description**: "Lyyli.ai on tekoälyavusteinen viestintäalusta, joka mullistaa yritysten sisällönluonnin. GDPR-yhteensopiva, EU-palvelimet ja yritystason tietoturva."

### Keywords
**English**: AI communication, content management, GDPR compliant, EU servers, business communication, automated content creation
**Finnish**: tekoäly viestintä, sisällönhallinta, GDPR yhteensopiva, EU palvelimet, yritysviestintä, automaattinen sisällönluonti

### Structured Data
- **Type**: SoftwareApplication
- **Organization**: Company information
- **LocalBusiness**: Finnish company details

### Social Media
- **Image**: `https://lyyli.ai/images/lyyli-social-share.jpg` (1200x630px)
- **Cards**: Twitter large image, OpenGraph
- **Descriptions**: Localized for each language

## Favicon
- **Current**: `/favicon.ico`
- **Recommendation**: Update to modern PNG format with brand colors
- **Sizes**: 16x16, 32x32, 48x48, 180x180 (Apple touch)

## Performance Optimizations

### Loading Strategy
- **Critical CSS**: Inline above-the-fold styles
- **Fonts**: Preload Inter and Playfair Display
- **Images**: Progressive JPEG/WebP with proper sizing
- **JavaScript**: Code splitting and lazy loading

### Mobile Optimization
- **Touch targets**: Minimum 44px for all interactive elements
- **Viewport**: Properly configured meta viewport
- **Accessibility**: Screen reader compatible, keyboard navigation
- **Performance**: < 3s load time on 3G networks

## Conversion Optimization

### CTA Strategy
- **Primary**: "Get Started" / "Aloita" (green button)
- **Secondary**: "Book Demo" / "Varaa Demo" (outline button)
- **Urgency**: Limited-time offers or early access messaging

### Trust Signals
- **Security badges**: GDPR, ISO certifications
- **Customer logos**: Recognizable Finnish/European companies
- **Testimonials**: Real quotes with photos
- **Guarantees**: Money-back or satisfaction guarantees

### Form Optimization
- **Fields**: Minimize required fields
- **Validation**: Real-time with helpful messages
- **Progress**: Show completion progress for multi-step forms
- **Privacy**: Clear privacy policy links

## Technical Requirements

### Browser Support
- **Modern browsers**: Chrome 90+, Firefox 88+, Safari 14+, Edge 90+
- **Mobile**: iOS Safari 14+, Chrome Mobile 90+
- **Fallbacks**: Graceful degradation for older browsers

### Accessibility
- **WCAG 2.1 AA**: Full compliance
- **Screen readers**: Proper ARIA labels and structure
- **Keyboard navigation**: Tab order and focus management
- **Color contrast**: 4.5:1 minimum ratio

### Analytics
- **Tracking**: Google Analytics 4 with proper consent
- **Events**: CTA clicks, form submissions, page sections
- **Conversion**: Goal tracking for key actions
- **Performance**: Core Web Vitals monitoring

## Content Guidelines

### Tone of Voice
- **Professional**: Expert-level communication
- **Approachable**: Not intimidating or overly technical
- **Confident**: Assertive about capabilities
- **Helpful**: Focus on solving customer problems

### Messaging Framework
- **Problem**: Communication inefficiencies cost time and money
- **Solution**: AI-powered assistance for professional communication
- **Proof**: Customer testimonials and case studies
- **Action**: Clear next steps for prospects

### Localization
- **Finnish**: Natural, professional Finnish (not translated English)
- **Swedish**: Professional Swedish for Nordic market
- **Cultural**: Respect for Nordic business culture and values

## Success Metrics

### Primary KPIs
- **Conversion rate**: Waitlist signups or demo requests
- **Engagement**: Time on page, scroll depth
- **Quality**: Bounce rate, pages per session

### Technical KPIs
- **Performance**: PageSpeed scores >90
- **Accessibility**: 100% automated test compliance
- **SEO**: First page rankings for target keywords

This comprehensive prompt should guide the creation of a high-converting, professional landing page that effectively communicates Lyyli.ai's value proposition to expert organizations while maintaining excellent user experience and technical performance.