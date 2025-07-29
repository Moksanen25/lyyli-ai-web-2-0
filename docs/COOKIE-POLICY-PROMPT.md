# Cookie Policy Page Prompt for New Lovable SSR Project

## CRITICAL RESTRICTIONS
- **NO HALLUCINATION**: Do not invent cookie types, tracking practices, or third-party services that don't exist
- **NO FAKE VENDORS**: Do not specify actual third-party cookie providers without verification
- **NO INVENTED RETENTION**: Do not specify cookie expiration periods without technical confirmation
- **NO REAL TRACKING CLAIMS**: Do not describe actual analytics or marketing tracking without implementation details
- **TEMPLATE APPROACH**: Create a comprehensive framework requiring technical review and customization

## Current Cookie Policy Analysis

The existing cookie policy (src/pages/CookiePolicy.tsx) contains:
- Basic cookie explanations
- Cookie usage categories (essential, analytics, marketing)
- Management instructions
- Policy change notifications

**Current Implementation:**
- Uses translation keys but hardcoded English/Finnish
- No dedicated translation files
- Basic structure without detailed technical specs
- No interactive cookie management

## Required Translation Keys

### English (src/translations/en/cookies.ts)
```typescript
export const cookies = {
  title: 'Cookie Policy',
  lastUpdated: 'Last updated: [DATE]',
  introduction: {
    title: 'About Cookies',
    content: 'This Cookie Policy explains how [COMPANY] uses cookies and similar technologies when you visit our website.'
  },
  whatAreCookies: {
    title: 'What Are Cookies',
    definition: 'Cookies are small text files stored on your device when you visit a website',
    purpose: 'They help websites remember your preferences and improve your browsing experience',
    types: 'Cookies can be temporary (session) or permanent (persistent)'
  },
  howWeUseCookies: {
    title: 'How We Use Cookies',
    intro: 'We use cookies for the following purposes:',
    essential: 'Essential functionality and security',
    analytics: 'Understanding how you use our website',
    preferences: 'Remembering your settings and preferences',
    marketing: 'Providing relevant content and advertisements'
  },
  cookieCategories: {
    title: 'Types of Cookies We Use',
    essential: {
      title: 'Essential Cookies',
      description: 'These cookies are necessary for the website to function properly',
      examples: 'Login sessions, security tokens, language preferences',
      control: 'These cookies cannot be disabled'
    },
    analytics: {
      title: 'Analytics Cookies',
      description: 'Help us understand how visitors interact with our website',
      examples: 'Page views, time spent on site, bounce rates',
      control: 'You can opt out of these cookies'
    },
    functional: {
      title: 'Functional Cookies',
      description: 'Remember your preferences and personalize your experience',
      examples: 'Theme preferences, font size, region settings',
      control: 'You can manage these in your preferences'
    },
    marketing: {
      title: 'Marketing Cookies',
      description: 'Used to deliver personalized advertisements',
      examples: 'Ad targeting, campaign tracking, social media integration',
      control: 'You can opt out of marketing cookies'
    }
  },
  thirdPartyCookies: {
    title: 'Third-Party Cookies',
    intro: 'We may allow trusted third parties to set cookies:',
    analytics: '[ANALYTICS_PROVIDER] - Website analytics and performance monitoring',
    social: '[SOCIAL_PROVIDERS] - Social media integration and sharing',
    advertising: '[AD_PROVIDERS] - Advertising and marketing campaigns',
    disclaimer: 'We do not control third-party cookies. Please review their privacy policies.'
  },
  cookieManagement: {
    title: 'Managing Your Cookie Preferences',
    consent: {
      title: 'Cookie Consent Manager',
      description: 'Use our cookie preference center to control your settings',
      button: 'Manage Cookie Preferences'
    },
    browser: {
      title: 'Browser Settings',
      description: 'You can control cookies through your browser settings',
      chrome: 'Chrome: Settings > Privacy and security > Cookies',
      firefox: 'Firefox: Options > Privacy & Security > Cookies',
      safari: 'Safari: Preferences > Privacy > Cookies',
      edge: 'Edge: Settings > Cookies and site permissions'
    },
    optOut: {
      title: 'Opt-Out Tools',
      description: 'Use industry tools to opt out of tracking:',
      daa: 'Digital Advertising Alliance opt-out',
      nai: 'Network Advertising Initiative opt-out',
      google: 'Google Ads Settings'
    }
  },
  cookieDetails: {
    title: 'Detailed Cookie Information',
    table: {
      name: 'Cookie Name',
      purpose: 'Purpose',
      type: 'Type',
      duration: 'Duration',
      provider: 'Provider'
    },
    essential: [
      {
        name: '[ESSENTIAL_COOKIE_1]',
        purpose: 'Session management and security',
        type: 'Essential',
        duration: 'Session',
        provider: 'First-party'
      },
      {
        name: '[ESSENTIAL_COOKIE_2]',
        purpose: 'Language preference storage',
        type: 'Essential',
        duration: '1 year',
        provider: 'First-party'
      }
    ],
    analytics: [
      {
        name: '[ANALYTICS_COOKIE]',
        purpose: 'Website usage analytics',
        type: 'Analytics',
        duration: '2 years',
        provider: '[ANALYTICS_PROVIDER]'
      }
    ]
  },
  impact: {
    title: 'Impact of Disabling Cookies',
    essential: 'Disabling essential cookies may prevent the website from functioning properly',
    analytics: 'Disabling analytics cookies will not affect your browsing experience',
    functional: 'Disabling functional cookies may reset your preferences on each visit',
    marketing: 'Disabling marketing cookies will not affect website functionality'
  },
  updates: {
    title: 'Policy Updates',
    notification: 'We may update this Cookie Policy periodically',
    effective: 'Changes take effect when posted on this page',
    notification_method: 'We will notify you of significant changes through our website or email'
  },
  contact: {
    title: 'Contact Information',
    intro: 'For questions about our use of cookies, contact us:',
    email: 'Email: [PRIVACY_EMAIL]',
    address: 'Address: [COMPANY_ADDRESS]',
    dpo: 'Data Protection Officer: [DPO_EMAIL]'
  },
  consent: {
    accept: 'Accept All Cookies',
    reject: 'Reject Non-Essential',
    customize: 'Customize Settings',
    save: 'Save Preferences'
  }
};
```

### Finnish (src/translations/fi/cookies.ts)
```typescript
export const cookies = {
  title: 'Evästekäytäntö',
  lastUpdated: 'Viimeksi päivitetty: [DATE]',
  introduction: {
    title: 'Tietoa evästeistä',
    content: 'Tämä evästekäytäntö selittää, miten [COMPANY] käyttää evästeitä ja vastaavia teknologioita, kun vierailet verkkosivuillamme.'
  },
  whatAreCookies: {
    title: 'Mitä evästeet ovat',
    definition: 'Evästeet ovat pieniä tekstitiedostoja, jotka tallennetaan laitteellesi verkkosivuston vierailun aikana',
    purpose: 'Ne auttavat verkkosivustoja muistamaan mieltymyksesi ja parantamaan selauskokemustasi',
    types: 'Evästeet voivat olla väliaikaisia (istunto) tai pysyviä'
  },
  howWeUseCookies: {
    title: 'Miten käytämme evästeitä',
    intro: 'Käytämme evästeitä seuraaviin tarkoituksiin:',
    essential: 'Oleelliset toiminnot ja turvallisuus',
    analytics: 'Ymmärtääksemme miten käytät verkkosivustoamme',
    preferences: 'Muistaaksemme asetuksesi ja mieltymyksesi',
    marketing: 'Tarjotaksemme relevanttia sisältöä ja mainoksia'
  },
  cookieCategories: {
    title: 'Käyttämämme evästetyypit',
    essential: {
      title: 'Välttämättömät evästeet',
      description: 'Nämä evästeet ovat välttämättömiä verkkosivuston asianmukaisen toiminnan kannalta',
      examples: 'Kirjautumisistunnot, turvallisuustunnisteet, kielivalinnat',
      control: 'Näitä evästeitä ei voi poistaa käytöstä'
    },
    analytics: {
      title: 'Analytiikkaevästeet',
      description: 'Auttavat meitä ymmärtämään, miten vierailijat käyttävät verkkosivustoamme',
      examples: 'Sivunäytöt, sivustolla vietetty aika, pomppuprosentit',
      control: 'Voit kieltäytyä näistä evästeistä'
    },
    functional: {
      title: 'Toiminnalliset evästeet',
      description: 'Muistavat mieltymyksesi ja personoivat kokemustasi',
      examples: 'Teeman valinnat, fonttikoko, alueasetukset',
      control: 'Voit hallita näitä asetuksissasi'
    },
    marketing: {
      title: 'Markkinointievästeet',
      description: 'Käytetään personoitujen mainosten toimittamiseen',
      examples: 'Mainosten kohdentaminen, kampanjaseuranta, sosiaalisen median integraatio',
      control: 'Voit kieltäytyä markkinointievästeistä'
    }
  },
  thirdPartyCookies: {
    title: 'Kolmannen osapuolen evästeet',
    intro: 'Saatamme sallia luotettujen kolmansien osapuolten asettaa evästeitä:',
    analytics: '[ANALYTICS_PROVIDER] - Verkkosivuston analytiikka ja suorituskyvyn seuranta',
    social: '[SOCIAL_PROVIDERS] - Sosiaalisen median integraatio ja jakaminen',
    advertising: '[AD_PROVIDERS] - Mainonta ja markkinointikampanjat',
    disclaimer: 'Emme hallitse kolmannen osapuolen evästeitä. Tutki heidän tietosuojakäytäntöjään.'
  },
  cookieManagement: {
    title: 'Evästemieltymysten hallinta',
    consent: {
      title: 'Evästeiden suostumuksenhallinta',
      description: 'Käytä evästemieltymyskeskustamme asetusten hallintaan',
      button: 'Hallitse evästemieltymyksiä'
    },
    browser: {
      title: 'Selaimen asetukset',
      description: 'Voit hallita evästeitä selaimen asetusten kautta',
      chrome: 'Chrome: Asetukset > Tietosuoja ja turvallisuus > Evästeet',
      firefox: 'Firefox: Asetukset > Tietosuoja ja turvallisuus > Evästeet',
      safari: 'Safari: Asetukset > Tietosuoja > Evästeet',
      edge: 'Edge: Asetukset > Evästeet ja sivustoluvat'
    },
    optOut: {
      title: 'Kieltäytymistyökalut',
      description: 'Käytä alan työkaluja kieltäytyäksesi seurannasta:',
      daa: 'Digital Advertising Alliance kieltäytyminen',
      nai: 'Network Advertising Initiative kieltäytyminen',
      google: 'Google Ads -asetukset'
    }
  },
  cookieDetails: {
    title: 'Yksityiskohtaiset evästetiedot',
    table: {
      name: 'Evästeen nimi',
      purpose: 'Tarkoitus',
      type: 'Tyyppi',
      duration: 'Kesto',
      provider: 'Palveluntarjoaja'
    },
    essential: [
      {
        name: '[ESSENTIAL_COOKIE_1]',
        purpose: 'Istunnon hallinta ja turvallisuus',
        type: 'Välttämätön',
        duration: 'Istunto',
        provider: 'Ensimmäinen osapuoli'
      },
      {
        name: '[ESSENTIAL_COOKIE_2]',
        purpose: 'Kielivalinnan tallennus',
        type: 'Välttämätön',
        duration: '1 vuosi',
        provider: 'Ensimmäinen osapuoli'
      }
    ],
    analytics: [
      {
        name: '[ANALYTICS_COOKIE]',
        purpose: 'Verkkosivuston käyttöanalytiikka',
        type: 'Analytiikka',
        duration: '2 vuotta',
        provider: '[ANALYTICS_PROVIDER]'
      }
    ]
  },
  impact: {
    title: 'Evästeiden poistamisen vaikutukset',
    essential: 'Välttämättömien evästeiden poistaminen voi estää verkkosivuston asianmukaisen toiminnan',
    analytics: 'Analytiikkaevästeiden poistaminen ei vaikuta selauskokemukseesi',
    functional: 'Toiminnallisten evästeiden poistaminen voi nollata mieltymyksesi jokaisella vierailulla',
    marketing: 'Markkinointievästeiden poistaminen ei vaikuta verkkosivuston toimivuuteen'
  },
  updates: {
    title: 'Käytännön päivitykset',
    notification: 'Saatamme päivittää tätä evästekäytäntöä ajoittain',
    effective: 'Muutokset tulevat voimaan, kun ne julkaistaan tällä sivulla',
    notification_method: 'Ilmoitamme merkittävistä muutoksista verkkosivustomme tai sähköpostin kautta'
  },
  contact: {
    title: 'Yhteystiedot',
    intro: 'Kysymyksiä evästeiden käytöstämme voit esittää:',
    email: 'Sähköposti: [PRIVACY_EMAIL]',
    address: 'Osoite: [COMPANY_ADDRESS]',
    dpo: 'Tietosuojavastaava: [DPO_EMAIL]'
  },
  consent: {
    accept: 'Hyväksy kaikki evästeet',
    reject: 'Hylkää ei-välttämättömät',
    customize: 'Mukauta asetukset',
    save: 'Tallenna mieltymykset'
  }
};
```

### Swedish (src/translations/sv/cookies.ts)
```typescript
export const cookies = {
  title: 'Cookie-policy',
  lastUpdated: 'Senast uppdaterad: [DATE]',
  introduction: {
    title: 'Om cookies',
    content: 'Denna cookie-policy förklarar hur [COMPANY] använder cookies och liknande teknologier när du besöker vår webbplats.'
  },
  whatAreCookies: {
    title: 'Vad är cookies',
    definition: 'Cookies är små textfiler som lagras på din enhet när du besöker en webbplats',
    purpose: 'De hjälper webbplatser att komma ihåg dina preferenser och förbättra din surfupplevelse',
    types: 'Cookies kan vara tillfälliga (session) eller permanenta (persistenta)'
  },
  howWeUseCookies: {
    title: 'Hur vi använder cookies',
    intro: 'Vi använder cookies för följande syften:',
    essential: 'Väsentlig funktionalitet och säkerhet',
    analytics: 'För att förstå hur du använder vår webbplats',
    preferences: 'För att komma ihåg dina inställningar och preferenser',
    marketing: 'För att tillhandahålla relevant innehåll och annonser'
  },
  cookieCategories: {
    title: 'Typer av cookies vi använder',
    essential: {
      title: 'Nödvändiga cookies',
      description: 'Dessa cookies är nödvändiga för att webbplatsen ska fungera korrekt',
      examples: 'Inloggningssessioner, säkerhetstokens, språkpreferenser',
      control: 'Dessa cookies kan inte inaktiveras'
    },
    analytics: {
      title: 'Analytiska cookies',
      description: 'Hjälper oss att förstå hur besökare interagerar med vår webbplats',
      examples: 'Sidvisningar, tid på webbplatsen, avvisningsfrekvens',
      control: 'Du kan välja bort dessa cookies'
    },
    functional: {
      title: 'Funktionella cookies',
      description: 'Kommer ihåg dina preferenser och personifierar din upplevelse',
      examples: 'Tempreferenser, teckensnittsstorlek, regioninställningar',
      control: 'Du kan hantera dessa i dina preferenser'
    },
    marketing: {
      title: 'Marknadsföringscookies',
      description: 'Används för att leverera personliga annonser',
      examples: 'Annonsmålning, kampanjspårning, integration med sociala medier',
      control: 'Du kan välja bort marknadsföringscookies'
    }
  },
  thirdPartyCookies: {
    title: 'Tredjepartscookies',
    intro: 'Vi kan tillåta betrodda tredje parter att sätta cookies:',
    analytics: '[ANALYTICS_PROVIDER] - Webbplatsanalys och prestandaövervakning',
    social: '[SOCIAL_PROVIDERS] - Integration och delning av sociala medier',
    advertising: '[AD_PROVIDERS] - Reklam- och marknadsföringskampanjer',
    disclaimer: 'Vi kontrollerar inte tredjepartscookies. Granska deras integritetspolicyer.'
  },
  cookieManagement: {
    title: 'Hantera dina cookie-preferenser',
    consent: {
      title: 'Cookie-samtyckeshanterare',
      description: 'Använd vårt center för cookie-preferenser för att kontrollera dina inställningar',
      button: 'Hantera cookie-preferenser'
    },
    browser: {
      title: 'Webbläsarinställningar',
      description: 'Du kan kontrollera cookies genom dina webbläsarinställningar',
      chrome: 'Chrome: Inställningar > Sekretess och säkerhet > Cookies',
      firefox: 'Firefox: Alternativ > Sekretess och säkerhet > Cookies',
      safari: 'Safari: Preferenser > Sekretess > Cookies',
      edge: 'Edge: Inställningar > Cookies och webbplatstillstånd'
    },
    optOut: {
      title: 'Opt-out-verktyg',
      description: 'Använd branschverktyg för att välja bort spårning:',
      daa: 'Digital Advertising Alliance opt-out',
      nai: 'Network Advertising Initiative opt-out',
      google: 'Google Ads-inställningar'
    }
  },
  cookieDetails: {
    title: 'Detaljerad cookie-information',
    table: {
      name: 'Cookie-namn',
      purpose: 'Syfte',
      type: 'Typ',
      duration: 'Varaktighet',
      provider: 'Leverantör'
    },
    essential: [
      {
        name: '[ESSENTIAL_COOKIE_1]',
        purpose: 'Sessionshantering och säkerhet',
        type: 'Nödvändig',
        duration: 'Session',
        provider: 'Första part'
      },
      {
        name: '[ESSENTIAL_COOKIE_2]',
        purpose: 'Lagring av språkpreferens',
        type: 'Nödvändig',
        duration: '1 år',
        provider: 'Första part'
      }
    ],
    analytics: [
      {
        name: '[ANALYTICS_COOKIE]',
        purpose: 'Webbplatsanvändningsanalys',
        type: 'Analytisk',
        duration: '2 år',
        provider: '[ANALYTICS_PROVIDER]'
      }
    ]
  },
  impact: {
    title: 'Påverkan av att inaktivera cookies',
    essential: 'Att inaktivera nödvändiga cookies kan förhindra att webbplatsen fungerar korrekt',
    analytics: 'Att inaktivera analytiska cookies påverkar inte din surfupplevelse',
    functional: 'Att inaktivera funktionella cookies kan återställa dina preferenser vid varje besök',
    marketing: 'Att inaktivera marknadsföringscookies påverkar inte webbplatsens funktionalitet'
  },
  updates: {
    title: 'Policy-uppdateringar',
    notification: 'Vi kan uppdatera denna cookie-policy periodiskt',
    effective: 'Ändringar träder i kraft när de publiceras på denna sida',
    notification_method: 'Vi kommer att meddela dig om betydande ändringar genom vår webbplats eller e-post'
  },
  contact: {
    title: 'Kontaktinformation',
    intro: 'För frågor om vår användning av cookies, kontakta oss:',
    email: 'E-post: [PRIVACY_EMAIL]',
    address: 'Adress: [COMPANY_ADDRESS]',
    dpo: 'Dataskyddsombud: [DPO_EMAIL]'
  },
  consent: {
    accept: 'Acceptera alla cookies',
    reject: 'Avvisa icke-nödvändiga',
    customize: 'Anpassa inställningar',
    save: 'Spara preferenser'
  }
};
```

## Enhancement Guidelines

### Content Requirements
1. **Technical Accuracy**
   - Accurate cookie type classifications
   - Proper retention period descriptions
   - Vendor-specific implementations requiring review

2. **Interactive Cookie Management**
   - Real-time preference updates
   - Granular category controls
   - Clear consent withdrawal options

3. **Compliance Features**
   - GDPR consent requirements
   - Clear opt-out mechanisms
   - Vendor transparency listings

### Visual Design Enhancements
1. **Cookie Preference Center**
   - Toggle switches for each category
   - Real-time impact preview
   - Vendor information display

2. **Interactive Elements**
   - Cookie audit table with sorting
   - Impact simulator showing functionality changes
   - Browser instruction guides with screenshots

3. **Trust Indicators**
   - Cookie usage transparency
   - Vendor certification displays
   - Compliance status indicators

### Technical Features
1. **Dynamic Management**
   - Real-time cookie scanning
   - Automatic vendor detection
   - Consent state persistence

2. **Integration Points**
   - Cookie banner synchronization
   - Analytics platform connections
   - Marketing tool integrations

### Required Page Sections
1. Cookie explanation and definitions
2. Category-based usage descriptions
3. Third-party vendor listings
4. Interactive preference management
5. Browser control instructions
6. Impact of disabling cookies
7. Policy update procedures
8. Contact information for queries

### Content Goals
- **User Control**: Comprehensive management options
- **Transparency**: Clear vendor and purpose disclosure
- **Compliance**: GDPR/ePrivacy directive alignment
- **Usability**: Accessible preference management

### Target Audience
- All website visitors requiring cookie transparency
- Privacy-conscious users seeking control
- Compliance officers reviewing policies
- Technical teams implementing consent

### Success Metrics
- Consent completion rates
- Preference customization usage
- Policy page engagement time
- User satisfaction with controls

### Implementation Priority
1. **Phase 1**: Basic policy with category explanations
2. **Phase 2**: Interactive preference center
3. **Phase 3**: Advanced vendor management and real-time scanning

### Technical Requirements
- Mobile-responsive preference interface
- Fast loading cookie management
- Cross-browser compatibility
- Accessibility compliance (WCAG 2.1)
- Integration with consent management platform

### Integration Points
- Cookie consent banner coordination
- Privacy dashboard connectivity
- Analytics and marketing tool synchronization
- Legal compliance monitoring
- User preference persistence across sessions