'use client';

import React, { useEffect } from 'react';
import { useAnalytics } from '@/hooks/use-analytics';
import CookieConsent from '@/components/CookieConsent';

// Proper type definitions for analytics
interface CookieSettings {
  necessary: boolean;
  analytics: boolean;
  marketing: boolean;
}

declare global {
  interface Window {
    dataLayer: unknown[];
    gtag: (...args: unknown[]) => void;
    hj: {
      q: unknown[];
    } & ((...args: unknown[]) => void);
    _hjSettings: {
      hjid: number;
      hjsv: number;
    };
    hs: unknown;
  }
}

const AnalyticsProvider: React.FC = () => {
  const { track } = useAnalytics();

  const trackPageView = (url: string, title: string) => {
    track('page_view', { url, title });
  };

  const trackCookieConsent = (settings: CookieSettings) => {
    track('cookie_consent', settings);
  };

  useEffect(() => {
    // Initialize dataLayer for GA4
    if (typeof window !== 'undefined') {
      window.dataLayer = window.dataLayer || [];
    }

    // Load analytics scripts
    loadAnalyticsScripts();
  }, []);

  useEffect(() => {
    // Track initial page view
    if (typeof window !== 'undefined') {
      trackPageView(window.location.href, document.title);
    }

    // Listen for route changes
    const handleRouteChange = () => {
      trackPageView(window.location.href, document.title);
    };

    window.addEventListener('popstate', handleRouteChange);
    return () => window.removeEventListener('popstate', handleRouteChange);
  }, []);

  const loadAnalyticsScripts = () => {
    if (typeof window === 'undefined') return;

    // Google Analytics 4
    const ga4Script = document.createElement('script');
    ga4Script.async = true;
    ga4Script.src = 'https://www.googletagmanager.com/gtag/js?id=G-K8BTK433WQ';
    document.head.appendChild(ga4Script);

    ga4Script.onload = () => {
      window.gtag = function(...args: unknown[]) {
        if (window.dataLayer) {
          window.dataLayer.push(args);
        }
      };
      window.gtag('js', new Date());
      window.gtag('config', 'G-K8BTK433WQ', {
        page_title: document.title,
        page_location: window.location.href,
        anonymize_ip: true,
        cookie_flags: 'SameSite=None;Secure'
      });
    };

    // Hotjar
    window.hj = window.hj || function(...args: unknown[]) {
      (window.hj.q = window.hj.q || []).push(args);
    };
    window._hjSettings = { hjid: 6422436, hjsv: 6 };

    const hotjarScript = document.createElement('script');
    hotjarScript.async = true;
    hotjarScript.src = `https://static.hotjar.com/c/hotjar-${window._hjSettings.hjid}.js?sv=${window._hjSettings.hjsv}`;
    document.head.appendChild(hotjarScript);

    // Datafast Analytics
    const datafastScript = document.createElement('script');
    datafastScript.defer = true;
    datafastScript.setAttribute('data-website-id', '686d148894ee444d9ee76354');
    datafastScript.setAttribute('data-domain', 'www.lyyli.ai');
    datafastScript.src = 'https://datafa.st/js/script.js';
    document.head.appendChild(datafastScript);

    // HubSpot Forms
    const hubspotFormsScript = document.createElement('script');
    hubspotFormsScript.src = 'https://js-eu1.hsforms.net/forms/embed/146205702.js';
    hubspotFormsScript.defer = true;
    document.head.appendChild(hubspotFormsScript);

    // HubSpot Analytics
    const hubspotAnalyticsScript = document.createElement('script');
    hubspotAnalyticsScript.type = 'text/javascript';
    hubspotAnalyticsScript.id = 'hs-script-loader';
    hubspotAnalyticsScript.async = true;
    hubspotAnalyticsScript.defer = true;
    hubspotAnalyticsScript.src = '//js-eu1.hs-scripts.com/146205702.js';
    document.head.appendChild(hubspotAnalyticsScript);
  };

  const handleCookieConsentChange = (settings: CookieSettings) => {
    trackCookieConsent(settings);
  };

  return <CookieConsent onConsentChange={handleCookieConsentChange} />;
};

export default AnalyticsProvider; 