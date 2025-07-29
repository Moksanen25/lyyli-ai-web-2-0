# Privacy Policy Page Prompt for New Lovable SSR Project

## CRITICAL RESTRICTIONS
- **NO HALLUCINATION**: Do not invent privacy practices, data collection methods, or legal procedures that don't exist
- **NO FAKE COMPLIANCE**: Do not claim compliance with regulations (GDPR, CCPA, etc.) without proper legal review
- **NO INVENTED CONTACT INFO**: Use placeholder contact information that clearly needs to be updated
- **NO REAL DATA PRACTICES**: Do not specify actual data retention periods, sharing practices, or legal bases without legal consultation
- **PLACEHOLDER APPROACH**: Create a comprehensive template that requires legal review and customization

## Current Privacy Policy Analysis

The existing privacy policy (src/pages/PrivacyPolicy.tsx) contains:
- Basic GDPR compliance language
- Data collection and usage sections
- Cookie policy references
- User rights information
- Contact information
- Last updated dates

**Translation Coverage:**
- Currently hardcoded in English and Finnish within the component
- No dedicated translation files
- Mixed language handling approach

## Required Translation Keys

### English (src/translations/en/privacy.ts)
```typescript
export const privacy = {
  title: 'Privacy Policy',
  lastUpdated: 'Last updated: [DATE]',
  introduction: {
    title: 'Introduction',
    content: 'This Privacy Policy describes how [COMPANY] collects, uses, and protects your information when you use our services.'
  },
  dataCollection: {
    title: 'Information We Collect',
    personal: 'Personal Information',
    personalDesc: 'Name, email address, contact information provided voluntarily',
    usage: 'Usage Data',
    usageDesc: 'How you interact with our service, pages visited, features used',
    technical: 'Technical Data',
    technicalDesc: 'IP address, browser type, device information, cookies'
  },
  dataUsage: {
    title: 'How We Use Your Information',
    service: 'To provide and improve our services',
    communication: 'To communicate with you about our services',
    analytics: 'To analyze usage patterns and improve user experience',
    legal: 'To comply with legal obligations'
  },
  legalBasis: {
    title: 'Legal Basis for Processing',
    consent: 'Your explicit consent',
    contract: 'Performance of a contract',
    legitimate: 'Our legitimate business interests',
    legal: 'Compliance with legal obligations'
  },
  dataSharing: {
    title: 'Data Sharing',
    policy: 'We do not sell, trade, or rent your personal information to third parties',
    service: 'We may share data with trusted service providers who assist in our operations',
    legal: 'We may disclose information when required by law'
  },
  retention: {
    title: 'Data Retention',
    policy: 'We retain personal information only as long as necessary for the purposes outlined in this policy',
    deletion: 'You may request deletion of your personal information at any time'
  },
  rights: {
    title: 'Your Rights',
    access: 'Right to access your personal information',
    rectification: 'Right to correct inaccurate information',
    erasure: 'Right to deletion ("right to be forgotten")',
    portability: 'Right to data portability',
    objection: 'Right to object to processing',
    withdraw: 'Right to withdraw consent'
  },
  cookies: {
    title: 'Cookies',
    usage: 'We use cookies to improve your experience',
    link: 'For more information, see our Cookie Policy'
  },
  security: {
    title: 'Data Security',
    measures: 'We implement appropriate security measures to protect your information',
    limitation: 'However, no method of transmission over the internet is 100% secure'
  },
  children: {
    title: 'Children\'s Privacy',
    policy: 'Our services are not intended for children under 13'
  },
  changes: {
    title: 'Changes to This Policy',
    notification: 'We will notify you of any material changes to this Privacy Policy',
    effective: 'Changes become effective when posted on this page'
  },
  contact: {
    title: 'Contact Us',
    intro: 'If you have questions about this Privacy Policy, contact us at:',
    email: 'Email: [PRIVACY_EMAIL]',
    address: 'Address: [COMPANY_ADDRESS]'
  }
};
```

### Finnish (src/translations/fi/privacy.ts)
```typescript
export const privacy = {
  title: 'Tietosuojakäytäntö',
  lastUpdated: 'Viimeksi päivitetty: [DATE]',
  introduction: {
    title: 'Johdanto',
    content: 'Tämä tietosuojakäytäntö kuvaa, miten [COMPANY] kerää, käyttää ja suojaa tietojasi palvelujemme käytön yhteydessä.'
  },
  dataCollection: {
    title: 'Keräämämme tiedot',
    personal: 'Henkilötiedot',
    personalDesc: 'Nimi, sähköpostiosoite, yhteystiedot jotka annat vapaaehtoisesti',
    usage: 'Käyttötiedot',
    usageDesc: 'Miten käytät palveluamme, vieraillut sivut, käytetyt ominaisuudet',
    technical: 'Tekniset tiedot',
    technicalDesc: 'IP-osoite, selaintyyppi, laitetiedot, evästeet'
  },
  dataUsage: {
    title: 'Miten käytämme tietojasi',
    service: 'Palvelujemme tarjoamiseen ja parantamiseen',
    communication: 'Viestintään kanssasi palveluistamme',
    analytics: 'Käyttömallien analysointiin ja käyttäjäkokemuksen parantamiseen',
    legal: 'Lakisääteisten velvoitteiden noudattamiseen'
  },
  legalBasis: {
    title: 'Käsittelyn oikeusperusta',
    consent: 'Nimenomainen suostumuksesi',
    contract: 'Sopimuksen täytäntöönpano',
    legitimate: 'Oikeutetut liiketoiminnalliset etumme',
    legal: 'Lakisääteisten velvoitteiden noudattaminen'
  },
  dataSharing: {
    title: 'Tietojen jakaminen',
    policy: 'Emme myy, vaihda tai vuokraa henkilötietojasi kolmansille osapuolille',
    service: 'Saatamme jakaa tietoja luotettujen palveluntarjoajien kanssa, jotka avustavat toiminnassamme',
    legal: 'Saatamme paljastaa tietoja lain vaatiessa'
  },
  retention: {
    title: 'Tietojen säilyttäminen',
    policy: 'Säilytämme henkilötietoja vain niin kauan kuin on tarpeen tässä käytännössä kuvattujen tarkoitusten toteuttamiseksi',
    deletion: 'Voit pyytää henkilötietojesi poistamista milloin tahansa'
  },
  rights: {
    title: 'Oikeutesi',
    access: 'Oikeus päästä käsiksi henkilötietoihisi',
    rectification: 'Oikeus korjata virheelliset tiedot',
    erasure: 'Oikeus poistamiseen ("oikeus tulla unohdetuksi")',
    portability: 'Oikeus tietojen siirrettävyyteen',
    objection: 'Oikeus vastustaa käsittelyä',
    withdraw: 'Oikeus peruuttaa suostumus'
  },
  cookies: {
    title: 'Evästeet',
    usage: 'Käytämme evästeitä kokemuksesi parantamiseksi',
    link: 'Lisätietoja saat evästekäytännöstämme'
  },
  security: {
    title: 'Tietoturva',
    measures: 'Toteutamme asianmukaiset turvatoimet tietojesi suojaamiseksi',
    limitation: 'Mikään internetin välityksellä tapahtuva tiedonsiirto ei kuitenkaan ole 100% turvallista'
  },
  children: {
    title: 'Lasten yksityisyys',
    policy: 'Palvelumme eivät ole tarkoitettu alle 13-vuotiaille lapsille'
  },
  changes: {
    title: 'Muutokset tähän käytäntöön',
    notification: 'Ilmoitamme sinulle kaikista olennaisista muutoksista tähän tietosuojakäytäntöön',
    effective: 'Muutokset tulevat voimaan, kun ne julkaistaan tällä sivulla'
  },
  contact: {
    title: 'Ota yhteyttä',
    intro: 'Jos sinulla on kysymyksiä tästä tietosuojakäytännöstä, ota yhteyttä:',
    email: 'Sähköposti: [PRIVACY_EMAIL]',
    address: 'Osoite: [COMPANY_ADDRESS]'
  }
};
```

### Swedish (src/translations/sv/privacy.ts)
```typescript
export const privacy = {
  title: 'Integritetspolicy',
  lastUpdated: 'Senast uppdaterad: [DATE]',
  introduction: {
    title: 'Introduktion',
    content: 'Denna integritetspolicy beskriver hur [COMPANY] samlar in, använder och skyddar din information när du använder våra tjänster.'
  },
  dataCollection: {
    title: 'Information vi samlar in',
    personal: 'Personlig information',
    personalDesc: 'Namn, e-postadress, kontaktinformation som du frivilligt tillhandahåller',
    usage: 'Användningsdata',
    usageDesc: 'Hur du interagerar med vår tjänst, besökta sidor, använda funktioner',
    technical: 'Teknisk data',
    technicalDesc: 'IP-adress, webbläsartyp, enhetsinformation, cookies'
  },
  dataUsage: {
    title: 'Hur vi använder din information',
    service: 'För att tillhandahålla och förbättra våra tjänster',
    communication: 'För att kommunicera med dig om våra tjänster',
    analytics: 'För att analysera användningsmönster och förbättra användarupplevelsen',
    legal: 'För att följa juridiska förpliktelser'
  },
  legalBasis: {
    title: 'Rättslig grund för behandling',
    consent: 'Ditt uttryckliga samtycke',
    contract: 'Utförande av ett kontrakt',
    legitimate: 'Våra berättigade affärsintressen',
    legal: 'Efterlevnad av juridiska förpliktelser'
  },
  dataSharing: {
    title: 'Datadelning',
    policy: 'Vi säljer, handlar eller hyr inte ut din personliga information till tredje parter',
    service: 'Vi kan dela data med betrodda tjänsteleverantörer som hjälper till med vår verksamhet',
    legal: 'Vi kan avslöja information när det krävs enligt lag'
  },
  retention: {
    title: 'Datalagring',
    policy: 'Vi behåller personlig information endast så länge som det är nödvändigt för de syften som beskrivs i denna policy',
    deletion: 'Du kan begära radering av din personliga information när som helst'
  },
  rights: {
    title: 'Dina rättigheter',
    access: 'Rätt att få tillgång till din personliga information',
    rectification: 'Rätt att korrigera felaktig information',
    erasure: 'Rätt till radering ("rätten att bli glömd")',
    portability: 'Rätt till dataportabilitet',
    objection: 'Rätt att invända mot behandling',
    withdraw: 'Rätt att återkalla samtycke'
  },
  cookies: {
    title: 'Cookies',
    usage: 'Vi använder cookies för att förbättra din upplevelse',
    link: 'För mer information, se vår Cookie-policy'
  },
  security: {
    title: 'Datasäkerhet',
    measures: 'Vi implementerar lämpliga säkerhetsåtgärder för att skydda din information',
    limitation: 'Ingen metod för överföring över internet är dock 100% säker'
  },
  children: {
    title: 'Barns integritet',
    policy: 'Våra tjänster är inte avsedda för barn under 13 år'
  },
  changes: {
    title: 'Ändringar av denna policy',
    notification: 'Vi kommer att meddela dig om väsentliga ändringar av denna integritetspolicy',
    effective: 'Ändringar träder i kraft när de publiceras på denna sida'
  },
  contact: {
    title: 'Kontakta oss',
    intro: 'Om du har frågor om denna integritetspolicy, kontakta oss på:',
    email: 'E-post: [PRIVACY_EMAIL]',
    address: 'Adress: [COMPANY_ADDRESS]'
  }
};
```

## Enhancement Guidelines

### Content Requirements
1. **Legal Compliance Template**
   - GDPR-ready structure requiring legal review
   - Placeholder text for legal-specific content
   - Clear indication of what needs legal consultation

2. **User Rights Section**
   - Comprehensive GDPR rights coverage
   - Clear contact information for requests
   - Process descriptions for exercising rights

3. **Data Flow Transparency**
   - Clear data collection descriptions
   - Purpose limitation explanations
   - Retention period frameworks

### Visual Design Enhancements
1. **Structured Layout**
   - Collapsible sections for easy navigation
   - Table of contents with jump links
   - Progress indicator for reading

2. **Interactive Elements**
   - Cookie preference center integration
   - Data request forms
   - Privacy settings dashboard

3. **Trust Indicators**
   - Last updated timestamps
   - Legal review badges (when applicable)
   - Compliance certifications display

### Technical Features
1. **Dynamic Content**
   - Geo-location based legal text
   - Version history tracking
   - Automatic update notifications

2. **Accessibility**
   - Screen reader optimization
   - High contrast mode support
   - Keyboard navigation

### Required Page Sections
1. Introduction and scope
2. Data collection categories
3. Usage purposes and legal basis
4. Data sharing and transfers
5. Retention periods
6. User rights (GDPR compliance)
7. Cookie policy integration
8. Security measures
9. Children's privacy
10. Policy changes process
11. Contact information

### Content Goals
- **Legal Protection**: Comprehensive coverage of data practices
- **User Trust**: Transparent and accessible language
- **Compliance**: GDPR, CCPA readiness with legal review requirement
- **Maintenance**: Easy to update and version control

### Target Audience
- All website visitors (mandatory reading)
- Legal compliance officers
- Data protection authorities
- Privacy-conscious users

### Success Metrics
- Page completion rates
- Time spent reading sections
- Privacy request volumes
- Compliance audit results

### Implementation Priority
1. **Phase 1**: Basic legal template with translations
2. **Phase 2**: Interactive elements and user dashboard
3. **Phase 3**: Advanced features and integrations

### Technical Requirements
- Responsive design for all devices
- Fast loading times
- SEO optimization for transparency
- Analytics tracking for compliance metrics
- Version control and change tracking

### Integration Points
- Cookie consent banner linking
- User account privacy settings
- Data request processing system
- Legal team review workflow
- Compliance monitoring tools