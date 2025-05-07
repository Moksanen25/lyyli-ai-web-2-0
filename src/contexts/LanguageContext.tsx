
import React, { createContext, useContext, useState, useEffect } from 'react';

// Define the languages and their translations
export const languages = {
  en: {
    nav: {
      features: 'Features',
      pricing: 'Pricing',
      faq: 'FAQ',
      contact: 'Contact',
      login: 'Log In',
      signup: 'Sign Up',
    },
    hero: {
      title: 'AI-powered content management platform',
      subtitle: 'Streamline your content creation process with Lyyli',
      cta: 'Get Started',
      secondaryCta: 'See How It Works',
    },
    features: {
      title: 'Features',
      subtitle: 'Everything you need for effortless content management',
      feature1: {
        title: 'AI Content Generation',
        description: 'Create high-quality content in seconds with our advanced AI tools',
      },
      feature2: {
        title: 'Collaboration Tools',
        description: 'Work with your team in real-time with seamless collaboration features',
      },
      feature3: {
        title: 'Content Calendar',
        description: 'Plan and schedule your content with our intuitive calendar interface',
      },
      feature4: {
        title: 'Analytics Dashboard',
        description: 'Track performance and gain insights with comprehensive analytics',
      },
    },
    testimonials: {
      title: 'What our customers say',
      testimonial1: {
        text: 'Lyyli has transformed our content workflow. We\'re creating better content in half the time.',
        author: 'Maria Anderson',
        role: 'Marketing Director, TechFlow',
      },
      testimonial2: {
        text: 'The AI tools are incredible. It\'s like having an extra team member who works 24/7.',
        author: 'James Wilson',
        role: 'Content Manager, Greensoft',
      },
      testimonial3: {
        text: 'The ROI calculator proved it - Lyyli pays for itself within the first month of use.',
        author: 'Sarah Johnson',
        role: 'CEO, Digital Heights',
      },
    },
    calculator: {
      title: 'Calculate your ROI',
      subtitle: 'See how much you can save with Lyyli',
      companySize: 'Company Size',
      specialistSalary: 'Average Specialist Salary',
      replacementRatio: 'Replacement Ratio',
      monthlySavings: 'Monthly Savings',
      annualSavings: 'Annual Savings',
      roi: 'Return on Investment',
      calculate: 'Calculate',
      small: 'Small',
      medium: 'Medium',
      large: 'Large',
    },
    cta: {
      title: 'Ready to transform your content workflow?',
      subtitle: 'Join thousands of satisfied customers today.',
      button: 'Start Free Trial',
    },
    footer: {
      product: 'Product',
      company: 'Company',
      legal: 'Legal',
      features: 'Features',
      pricing: 'Pricing',
      faq: 'FAQ',
      about: 'About Us',
      careers: 'Careers',
      contact: 'Contact',
      privacy: 'Privacy Policy',
      terms: 'Terms of Service',
      cookies: 'Cookie Policy',
      copyright: '© 2025 Lyyli. All rights reserved.',
    },
    cookieBanner: {
      title: 'We use cookies',
      description: 'This website uses cookies to improve your experience.',
      accept: 'Accept All',
      essential: 'Essential Only',
      settings: 'Cookie Settings',
    }
  },
  fi: {
    nav: {
      features: 'Ominaisuudet',
      pricing: 'Hinnoittelu',
      faq: 'UKK',
      contact: 'Yhteystiedot',
      login: 'Kirjaudu',
      signup: 'Rekisteröidy',
    },
    hero: {
      title: 'Tekoälyllä toimiva sisällönhallintajärjestelmä',
      subtitle: 'Virtaviivaista sisällöntuotantoprosessisi Lyylin avulla',
      cta: 'Aloita Nyt',
      secondaryCta: 'Katso Miten Se Toimii',
    },
    features: {
      title: 'Ominaisuudet',
      subtitle: 'Kaikki mitä tarvitset vaivattomaan sisällönhallintaan',
      feature1: {
        title: 'Tekoälysisällön Luonti',
        description: 'Luo laadukasta sisältöä sekunneissa kehittyneillä tekoälytyökaluilla',
      },
      feature2: {
        title: 'Yhteistyökalut',
        description: 'Työskentele tiimisi kanssa reaaliajassa saumattomilla yhteistyöominaisuuksilla',
      },
      feature3: {
        title: 'Sisältökalenteri',
        description: 'Suunnittele ja aikatauluta sisältösi intuitiivisella kalenteriliittymällä',
      },
      feature4: {
        title: 'Analytiikkatyökalut',
        description: 'Seuraa suorituskykyä ja saa näkemyksiä kattavalla analytiikalla',
      },
    },
    testimonials: {
      title: 'Mitä asiakkaamme sanovat',
      testimonial1: {
        text: 'Lyyli on muuttanut sisällöntuotantoprosessimme. Luomme parempaa sisältöä puolessa ajassa.',
        author: 'Maria Anderson',
        role: 'Markkinointijohtaja, TechFlow',
      },
      testimonial2: {
        text: 'Tekoälytyökalut ovat uskomattomia. On kuin meillä olisi ylimääräinen tiimin jäsen, joka työskentelee 24/7.',
        author: 'James Wilson',
        role: 'Sisältöpäällikkö, Greensoft',
      },
      testimonial3: {
        text: 'ROI-laskuri todisti sen - Lyyli maksaa itsensä takaisin jo ensimmäisen käyttökuukauden aikana.',
        author: 'Sarah Johnson',
        role: 'Toimitusjohtaja, Digital Heights',
      },
    },
    calculator: {
      title: 'Laske ROI',
      subtitle: 'Katso, kuinka paljon voit säästää Lyylin avulla',
      companySize: 'Yrityskoko',
      specialistSalary: 'Keskimääräinen asiantuntijapalkka',
      replacementRatio: 'Korvaussuhde',
      monthlySavings: 'Kuukausisäästöt',
      annualSavings: 'Vuosisäästöt',
      roi: 'Sijoitetun pääoman tuotto',
      calculate: 'Laske',
      small: 'Pieni',
      medium: 'Keskikokoinen',
      large: 'Suuri',
    },
    cta: {
      title: 'Valmis muuttamaan sisällöntuotantoprosessisi?',
      subtitle: 'Liity tuhansien tyytyväisten asiakkaiden joukkoon tänään.',
      button: 'Aloita Ilmainen Kokeilu',
    },
    footer: {
      product: 'Tuote',
      company: 'Yritys',
      legal: 'Lakiasiat',
      features: 'Ominaisuudet',
      pricing: 'Hinnoittelu',
      faq: 'UKK',
      about: 'Tietoa Meistä',
      careers: 'Urat',
      contact: 'Yhteystiedot',
      privacy: 'Tietosuojakäytäntö',
      terms: 'Käyttöehdot',
      cookies: 'Evästekäytäntö',
      copyright: '© 2025 Lyyli. Kaikki oikeudet pidätetään.',
    },
    cookieBanner: {
      title: 'Käytämme evästeitä',
      description: 'Tämä sivusto käyttää evästeitä parantaakseen käyttökokemustasi.',
      accept: 'Hyväksy Kaikki',
      essential: 'Vain Välttämättömät',
      settings: 'Evästeasetukset',
    }
  }
};

// Type for our context
type LanguageContextType = {
  language: 'en' | 'fi';
  setLanguage: (language: 'en' | 'fi') => void;
  t: (key: string) => string;
};

// Create the context
export const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

// Provider component
export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  // Try to get the saved language from localStorage, default to 'en'
  const savedLanguage = typeof window !== 'undefined' ? localStorage.getItem('language') as 'en' | 'fi' : null;
  const [language, setLanguage] = useState<'en' | 'fi'>(savedLanguage || 'en');

  // Save language preference to localStorage when it changes
  useEffect(() => {
    localStorage.setItem('language', language);
  }, [language]);

  // Translation function
  const t = (key: string): string => {
    // Split the key by dots to navigate the nested object
    const keys = key.split('.');
    // Start with the selected language object
    let value: any = languages[language];
    
    // Navigate through the nested object
    for (const k of keys) {
      if (value && value[k] !== undefined) {
        value = value[k];
      } else {
        // If the key doesn't exist, return the key itself
        return key;
      }
    }
    
    // If the value is not a string, convert it to string
    return typeof value === 'string' ? value : String(value);
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

// Custom hook to use the language context
export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
