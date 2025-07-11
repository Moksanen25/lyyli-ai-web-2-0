import React from 'react';
import { Helmet } from 'react-helmet';
import { useLanguage } from '@/hooks/useLanguage';
import { generateStructuredData, generateJsonLd, StructuredDataProps } from '@/utils/structuredData';

interface SEOHeadProps {
  title: string;
  description: string;
  url?: string;
  image?: string;
  type?: 'website' | 'article';
  structuredDataType?: StructuredDataProps['type'];
  keywords?: string[];
  author?: string;
  publishedTime?: string;
  modifiedTime?: string;
}

export const SEOHead: React.FC<SEOHeadProps> = ({
  title,
  description,
  url = '',
  image = 'https://lyyli.ai/images/lyyli-social-share.jpg',
  type = 'website',
  structuredDataType = 'WebSite',
  keywords = [],
  author,
  publishedTime,
  modifiedTime
}) => {
  const { language } = useLanguage();
  const baseUrl = 'https://lyyli.ai';
  const fullUrl = `${baseUrl}${language === 'fi' ? '/fi' : ''}${url}`;
  const canonicalUrl = `${baseUrl}${language === 'fi' ? '/fi' : ''}${url}`;
  const alternateUrl = `${baseUrl}${language === 'fi' ? '' : '/fi'}${url}`;

  // Generate structured data
  const structuredData = generateStructuredData({
    type: structuredDataType,
    language,
    url,
    title,
    description
  });

  // Enhanced keywords with language-specific terms
  const enhancedKeywords = [
    ...keywords,
    ...(language === 'fi' ? [
      'tekoäly',
      'sisällönhallinta',
      'viestintäalusta',
      'GDPR',
      'EU-palvelimet',
      'yritysratkaisu'
    ] : [
      'artificial intelligence',
      'content management',
      'communication platform',
      'GDPR',
      'EU servers',
      'enterprise solution'
    ])
  ];

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={enhancedKeywords.join(', ')} />
      <meta name="author" content={author || 'Lyyli.ai'} />
      <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
      
      {/* Language and Location */}
      <html lang={language} />
      <meta name="language" content={language} />
      <meta name="geo.region" content="FI" />
      <meta name="geo.country" content="Finland" />
      
      {/* Canonical and Alternate URLs */}
      <link rel="canonical" href={canonicalUrl} />
      <link rel="alternate" hrefLang="en" href={canonicalUrl} />
      <link rel="alternate" hrefLang="fi" href={alternateUrl} />
      <link rel="alternate" hrefLang="x-default" href={canonicalUrl} />
      
      {/* Open Graph */}
      <meta property="og:type" content={type} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={fullUrl} />
      <meta property="og:image" content={image} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:locale" content={language === 'fi' ? 'fi_FI' : 'en_US'} />
      <meta property="og:site_name" content="Lyyli.ai" />
      
      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      <meta name="twitter:site" content="@lyyli_ai" />
      
      {/* Article specific meta tags */}
      {type === 'article' && (
        <>
          {publishedTime && <meta property="article:published_time" content={publishedTime} />}
          {modifiedTime && <meta property="article:modified_time" content={modifiedTime} />}
          {author && <meta property="article:author" content={author} />}
          <meta property="article:section" content="Technology" />
          <meta property="article:tag" content={keywords.join(', ')} />
        </>
      )}
      
      {/* Performance and Mobile */}
      <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
      <meta name="theme-color" content="#2F5D50" />
      <meta name="mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="default" />
      
      {/* Structured Data */}
      {structuredData && (
        <script type="application/ld+json">
          {generateJsonLd(structuredData)}
        </script>
      )}
      
      {/* Additional Organization Schema */}
      <script type="application/ld+json">
        {generateJsonLd(generateStructuredData({ type: 'Organization', language }))}
      </script>
    </Helmet>
  );
};