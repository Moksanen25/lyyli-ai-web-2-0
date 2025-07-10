import { SupportedLanguage } from '@/translations';

export interface StructuredDataProps {
  type: 'Organization' | 'WebSite' | 'SoftwareApplication' | 'Article' | 'FAQ';
  language: SupportedLanguage;
  url?: string;
  title?: string;
  description?: string;
}

export const generateStructuredData = ({ type, language, url, title, description }: StructuredDataProps) => {
  const baseUrl = 'https://lyyli.ai';
  const localizedUrl = url ? `${baseUrl}${language === 'fi' ? '/fi' : ''}${url}` : `${baseUrl}${language === 'fi' ? '/fi' : ''}`;

  switch (type) {
    case 'Organization':
      return {
        '@context': 'https://schema.org',
        '@type': 'Organization',
        name: 'Lyyli.ai',
        url: baseUrl,
        logo: `${baseUrl}/lovable-uploads/23cb99ce-891e-445f-bd85-9a0a93d2a38c.png`,
        description: language === 'fi' 
          ? 'Tekoälyavusteinen viestintäalusta yrityksille. GDPR-yhteensopiva ja EU-palvelimet.'
          : 'AI-powered communication platform for businesses. GDPR compliant with EU servers.',
        sameAs: [
          'https://linkedin.com/company/lyyli-ai',
          'https://twitter.com/lyyli_ai'
        ],
        foundingDate: '2024',
        founders: [{
          '@type': 'Person',
          name: 'Saku Panditharatne'
        }],
        address: {
          '@type': 'PostalAddress',
          addressCountry: 'FI',
          addressRegion: 'North Savo'
        }
      };

    case 'WebSite':
      return {
        '@context': 'https://schema.org',
        '@type': 'WebSite',
        name: 'Lyyli.ai',
        url: localizedUrl,
        description: description || (language === 'fi' 
          ? 'Tekoälyavusteinen viestintäalusta yrityksille'
          : 'AI-powered communication platform for businesses'),
        inLanguage: language,
        potentialAction: {
          '@type': 'SearchAction',
          target: `${localizedUrl}/search?q={search_term_string}`,
          'query-input': 'required name=search_term_string'
        }
      };

    case 'SoftwareApplication':
      return {
        '@context': 'https://schema.org',
        '@type': 'SoftwareApplication',
        name: 'Lyyli.ai',
        url: localizedUrl,
        description: description || (language === 'fi' 
          ? 'Tekoälyavusteinen viestintäalusta yrityksille. Luo, hallitse ja jaa sisältöä tehokkaasti.'
          : 'AI-powered communication platform for businesses. Create, manage and share content efficiently.'),
        applicationCategory: 'BusinessApplication',
        operatingSystem: 'Web Browser',
        offers: {
          '@type': 'Offer',
          price: '0',
          priceCurrency: 'EUR',
          availability: 'https://schema.org/InStock'
        },
        featureList: language === 'fi' ? [
          'Tekoälyavusteinen sisällönluonti',
          'GDPR-yhteensopiva',
          'EU-palvelimet',
          'Yritystason tietoturva'
        ] : [
          'AI-powered content creation',
          'GDPR compliant',
          'EU servers',
          'Enterprise-grade security'
        ]
      };

    case 'Article':
      return {
        '@context': 'https://schema.org',
        '@type': 'Article',
        headline: title,
        description: description,
        url: localizedUrl,
        inLanguage: language,
        author: {
          '@type': 'Organization',
          name: 'Lyyli.ai'
        },
        publisher: {
          '@type': 'Organization',
          name: 'Lyyli.ai',
          logo: {
            '@type': 'ImageObject',
            url: `${baseUrl}/lovable-uploads/23cb99ce-891e-445f-bd85-9a0a93d2a38c.png`
          }
        },
        datePublished: new Date().toISOString(),
        dateModified: new Date().toISOString()
      };

    case 'FAQ':
      return {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: [
          {
            '@type': 'Question',
            name: language === 'fi' ? 'Onko Lyyli.ai GDPR-yhteensopiva?' : 'Is Lyyli.ai GDPR compliant?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: language === 'fi' 
                ? 'Kyllä, Lyyli.ai on täysin GDPR-yhteensopiva ja käyttää EU-palvelimia.'
                : 'Yes, Lyyli.ai is fully GDPR compliant and uses EU servers.'
            }
          },
          {
            '@type': 'Question',
            name: language === 'fi' ? 'Kuinka turvallista on käyttää Lyyli.ai:ta?' : 'How secure is Lyyli.ai?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: language === 'fi' 
                ? 'Käytämme yritystason tietoturvaa, end-to-end salausta ja EU-palvelimia.'
                : 'We use enterprise-grade security, end-to-end encryption, and EU servers.'
            }
          }
        ]
      };

    default:
      return null;
  }
};

export const generateJsonLd = (data: any) => {
  return JSON.stringify(data, null, 2);
};