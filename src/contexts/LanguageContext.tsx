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
      pageHero: {
        title: 'Powerful AI Features for Modern Content Management',
        description: 'Discover how Lyyli transforms your content workflow with cutting-edge AI technology and intuitive tools',
        imageAlt: 'AI-powered content management platform interface',
        primaryCta: 'Start Free Trial',
        secondaryCta: 'Schedule a Demo',
      },
      mainFeatures: {
        title: 'Core Capabilities'
      },
      additionalFeatures: {
        title: 'Advanced Capabilities',
        ai: {
          title: 'Smart AI Assistant',
          description: 'Our AI understands your brand voice and helps create consistent content across all channels'
        },
        workflow: {
          title: 'Custom Workflows',
          description: 'Design approval processes tailored to your team structure and content requirements'
        },
        integration: {
          title: 'Seamless Integrations',
          description: 'Connect with your favorite tools including Slack, Teams, and other platforms'
        }
      },
      integrations: {
        title: 'Seamless Integrations',
        description: 'Connect Lyyli with the tools you already use and love',
        slack: 'Real-time notifications and commands directly within your Slack workspace',
        teams: 'Collaborate and share content directly through Microsoft Teams',
        api: 'Build custom solutions with our robust API and webhooks'
      },
      quotes: {
        title: 'How Our Features Help Customers',
        quote1: 'The AI content generation has cut our production time in half while actually improving quality. It's remarkable how well it adapts to our brand voice.',
        author1: 'Emma Rodriguez',
        role1: 'Content Director, Elevate Media',
        feature1: 'AI Content Generation',
        
        quote2: 'The custom workflows have revolutionized our approval process. What used to take days now happens in hours, with complete visibility for the entire team.',
        author2: 'Michael Chen',
        role2: 'Operations Manager, GreenTech Solutions',
        feature2: 'Custom Workflows'
      },
      faq: {
        title: 'Frequently Asked Questions',
        question1: 'How does the AI content generation work?',
        answer1: 'Our AI is trained on high-quality content specific to your industry. It learns your brand voice from your existing content and can generate new content that matches your style. You have full control to edit, approve, or reject the generated content.',
        
        question2: 'Can I integrate Lyyli with my existing tools?',
        answer2: 'Yes! Lyyli integrates with popular platforms like Slack, Microsoft Teams, WordPress, and more. We also offer a robust API for custom integrations.',
        
        question3: 'Is there a limit to how many users I can add?',
        answer3: 'The Starter plan includes 1 user, Professional includes 3 users, and Enterprise offers unlimited users. You can add additional users to any plan for an extra monthly fee.',
        
        question4: 'How secure is my content within Lyyli?',
        answer4: 'We take security seriously. All data is encrypted both in transit and at rest. We use industry-standard security practices and regularly undergo security audits.'
      },
      comparison: {
        title: 'Compare Plans',
        description: 'Find the plan that works best for your business needs',
        feature: 'Feature',
        aiAgents: 'AI Agents',
        userAccounts: 'User Accounts',
        integrations: 'Integrations',
        images: 'AI Image Creation',
        workflows: 'Custom Workflows',
        unlimited: 'Unlimited',
        custom: 'Custom',
        cta: 'View Full Pricing'
      }
    },
    pricing: {
      title: 'Simple, Transparent Pricing',
      subtitle: 'Choose the plan that works best for your business needs. All plans include our core AI functionality.',
      monthly: 'Monthly',
      yearly: 'Yearly',
      save: 'Save',
      savePerYear: 'Save {amount}€ per year',
      perMonth: '/month',
      perYear: '/year',
      starter: {
        name: 'Starter',
        description: 'Perfect for small and medium enterprises just getting started.',
        cta: 'Get Started',
      },
      professional: {
        name: 'Professional',
        description: 'Everything you need for a growing business with multiple needs.',
        cta: 'Start Free Trial',
      },
      enterprise: {
        name: 'Enterprise',
        description: 'Custom solutions for large organizations with advanced requirements.',
        cta: 'Contact Us',
      },
      features: {
        agents: 'AI Agents',
        users: 'User Accounts',
        integrations: 'Integrations',
        webApp: 'Web App Access',
        slack: 'Slack Integration',
        teams: 'Teams Integration',
        images: 'AI Image Creation',
        additionalImages: 'Additional Images Cost',
        workflows: 'Custom Workflows',
        api: 'API Access',
        whiteLabel: 'White Labeling',
        analytics: 'Advanced Analytics',
        prioritySupport: 'Priority Support',
        accountManager: 'Dedicated Account Manager',
        customOnboarding: 'Custom Onboarding',
        sla: 'SLA',
      },
      showComparison: 'Show Full Feature Comparison',
      hideComparison: 'Hide Full Feature Comparison',
      faqTitle: 'Have Questions?',
      faqText: 'Visit our FAQ page or contact us for more information about our plans.',
      faqButton: 'View FAQ',
      contactButton: 'Contact Sales',
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
    },
    about: {
      hero: {
        title: 'About Lyyli',
        description: 'We\'re creating revolutionary AI-powered content management solutions that transform how businesses handle their content workflows.',
        imageAlt: 'Team collaboration'
      },
      timeline: {
        title: 'Our Journey',
        founded: {
          title: 'Company Founded',
          description: 'Lyyli was founded by Mikko Oksanen and Veikko Laitinen with a vision to transform content workflows through AI.'
        },
        launch: {
          title: 'First Product Launch',
          description: 'We launched our AI-powered content management platform to help businesses streamline their content creation process.'
        },
        partnerships: {
          title: 'First Major Partnerships',
          description: 'Established key partnerships to expand our platform\'s capabilities and reach more customers.'
        },
        future: {
          title: 'Looking Forward',
          description: 'Planning to expand our offerings and team to better serve our growing customer base.'
        }
      },
      mission: {
        title: 'Our Mission',
        vision: {
          title: 'Our Vision',
          description: 'To revolutionize content creation and management through ethical AI, making it accessible to businesses of all sizes.'
        },
        values: {
          title: 'Our Values',
          description: 'We believe in transparency, ethical AI development, customer-driven innovation, and building tools that amplify human creativity.'
        },
        impact: {
          title: 'Our Impact',
          description: 'We\'re helping businesses reduce content creation time by up to 70% while improving quality and maintaining authentic brand voice.'
        }
      },
      team: {
        title: 'Our Team',
        description: 'Meet the passionate people behind Lyyli who are committed to transforming how businesses create and manage content.',
        mikko: {
          role: 'Co-Founder & CEO',
          bio: 'International management professional with extensive experience in business development, sales, product management, and strategy. Driven by innovation and scaling companies to their full potential.'
        },
        veikko: {
          role: 'Co-Founder & CTO',
          bio: 'Software developer focused on creating intuitive and efficient user experiences. With expertise in TypeScript, React, and modern web technologies, Veikko leads our technical vision and development.'
        }
      }
    },
    contact: {
      title: 'Contact Us',
      subtitle: 'Have questions? Our AI assistant is ready to help you or get in touch directly with our team.',
      information: 'Contact Information',
      role: 'Sales and networks',
      call: 'Call',
      email: 'Email'
    },
    chat: {
      title: 'Customer Support',
      welcomeMessage: 'Hello! How can I help you today?',
      inputPlaceholder: 'Type your message...',
      send: 'Send',
      error: {
        title: 'Error',
        initThread: 'Failed to initialize chat. Please try again.',
        sendMessage: 'Failed to send message. Please try again.'
      }
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
      pageHero: {
        title: 'Tehokkaat tekoälyominaisuudet moderniin sisällönhallintaan',
        description: 'Tutustu kuinka Lyyli muuttaa sisältötyönkulkusi edistyksellisellä tekoälyteknologialla ja intuitiivisilla työkaluilla',
        imageAlt: 'Tekoälyllä toimivan sisällönhallintajärjestelmän käyttöliittymä',
        primaryCta: 'Aloita Ilmainen Kokeilu',
        secondaryCta: 'Varaa Esittely',
      },
      mainFeatures: {
        title: 'Ydinominaisuudet'
      },
      additionalFeatures: {
        title: 'Edistyneet ominaisuudet',
        ai: {
          title: 'Älykäs tekoälyavustaja',
          description: 'Tekoälymme ymmärtää brändisi äänen ja auttaa luomaan yhtenäistä sisältöä kaikissa kanavissa'
        },
        workflow: {
          title: 'Mukautetut työnkulut',
          description: 'Suunnittele hyväksyntäprosessit, jotka on räätälöity tiimisi rakenteelle ja sisältövaatimuksille'
        },
        integration: {
          title: 'Saumattomat integraatiot',
          description: 'Yhdistä suosikkityökaluihisi, mukaan lukien Slack, Teams ja muut alustat'
        }
      },
      integrations: {
        title: 'Saumattomat Integraatiot',
        description: 'Yhdistä Lyyli työkaluihin, joita jo käytät ja rakastat',
        slack: 'Reaaliaikaiset ilmoitukset ja komennot suoraan Slack-työtilassasi',
        teams: 'Tee yhteistyötä ja jaa sisältöä suoraan Microsoft Teamsin kautta',
        api: 'Rakenna mukautettuja ratkaisuja vankan API:n ja webhookien avulla'
      },
      quotes: {
        title: 'Kuinka Ominaisuutemme Auttavat Asiakkaita',
        quote1: 'Tekoälysisällön tuotanto on puolittanut tuotantoaikamme ja samalla parantanut laatua. On hämmästyttävää, kuinka hyvin se mukautuu brändiääneeseemme.',
        author1: 'Emma Rodriguez',
        role1: 'Sisältöjohtaja, Elevate Media',
        feature1: 'Tekoälysisällön Luonti',
        
        quote2: 'Mukautetut työnkulut ovat mullistaneet hyväksyntäprosessimme. Mikä ennen vei päiviä, tapahtuu nyt tunneissa, ja koko tiimillä on täysi näkyvyys.',
        author2: 'Michael Chen',
        role2: 'Operatiivinen johtaja, GreenTech Solutions',
        feature2: 'Mukautetut Työnkulut'
      },
      faq: {
        title: 'Usein Kysytyt Kysymykset',
        question1: 'Miten tekoälysisällön luonti toimii?',
        answer1: 'Tekoälymme on koulutettu alallesi ominaisella korkealaatuisella sisällöllä. Se oppii brändisi äänen olemassa olevasta sisällöstäsi ja voi luoda uutta sisältöä, joka vastaa tyyliäsi. Sinulla on täysi hallinta muokata, hyväksyä tai hylätä tuotettu sisältö.',
        
        question2: 'Voiko Lyylin integroida olemassa oleviin työkaluihini?',
        answer2: 'Kyllä! Lyyli integroituu suosittujen alustojen, kuten Slackin, Microsoft Teamsin, WordPressin ja muiden kanssa. Tarjoamme myös vankan API:n mukautettuja integraatioita varten.',
        
        question3: 'Onko käyttäjien lisäämiselle rajoitusta?',
        answer3: 'Aloituspaketti sisältää 1 käyttäjän, Ammattilaisversio sisältää 3 käyttäjää ja Yritysversio tarjoaa rajoittamattoman määrän käyttäjiä. Voit lisätä käyttäjiä mihin tahansa pakettiin lisämaksusta kuukausittain.',
        
        question4: 'Kuinka turvallista sisältöni on Lyylissä?',
        answer4: 'Suhtaudumme turvallisuuteen vakavasti. Kaikki tiedot salataan sekä siirrossa että levossa. Käytämme alan standardoituja turvallisuuskäytäntöjä ja suoritamme säännöllisesti turvallisuusauditointeja.'
      },
      
      comparison: {
        title: 'Vertaile paketteja',
        description: 'Löydä yrityksesi tarpeisiin sopiva paketti',
        feature: 'Ominaisuus',
        aiAgents: 'Tekoäly-agentit',
        userAccounts: 'Käyttäjätilit',
        integrations: 'Integraatiot',
        images: 'Tekoälykuvien luonti',
        workflows: 'Mukautetut työnkulut',
        unlimited: 'Rajoittamaton',
        custom: 'Räätälöity',
        cta: 'Katso täydellinen hinnoittelu'
      }
    },
    pricing: {
      title: 'Selkeä, läpinäkyvä hinnoittelu',
      subtitle: 'Valitse yrityksesi tarpeisiin sopiva paketti. Kaikki paketit sisältävät keskeisen tekoälytoiminnallisuuden.',
      monthly: 'Kuukausittain',
      yearly: 'Vuosittain',
      save: 'Säästä',
      savePerYear: 'Säästä {amount}€ vuodessa',
      perMonth: '/kuukausi',
      perYear: '/vuosi',
      starter: {
        name: 'Aloitus',
        description: 'Täydellinen pienille ja keskisuurille yrityksille, jotka ovat vasta aloittamassa.',
        cta: 'Aloita',
      },
      professional: {
        name: 'Ammattilais',
        description: 'Kaikki mitä tarvitset kasvavalle yritykselle, jolla on useita tarpeita.',
        cta: 'Aloita Ilmainen Kokeilu',
      },
      enterprise: {
        name: 'Yritys',
        description: 'Räätälöidyt ratkaisut suurille organisaatioille, joilla on edistyneet vaatimukset.',
        cta: 'Ota Yhteyttä',
      },
      features: {
        agents: 'Tekoäly-agentit',
        users: 'Käyttäjätilit',
        integrations: 'Integraatiot',
        webApp: 'Web-sovelluksen käyttö',
        slack: 'Slack-integraatio',
        teams: 'Teams-integraatio',
        images: 'Tekoälykuvien luonti',
        additionalImages: 'Lisäkuvien hinta',
        workflows: 'Mukautetut työnkulut',
        api: 'API-käyttö',
        whiteLabel: 'White Label -palvelu',
        analytics: 'Kehittynyt analytiikka',
        prioritySupport: 'Priorisoitu tuki',
        accountManager: 'Oma yhteyshenkilö',
        customOnboarding: 'Räätälöity käyttöönotto',
        sla: 'SLA',
      },
      showComparison: 'Näytä täydellinen ominaisuusvertailu',
      hideComparison: 'Piilota täydellinen ominaisuusvertailu',
      faqTitle: 'Kysymyksiä?',
      faqText: 'Käy UKK-sivullamme tai ota yhteyttä saadaksesi lisätietoja paketeistamme.',
      faqButton: 'Katso UKK',
      contactButton: 'Ota Yhteyttä Myyntiin',
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
    },
    about: {
      hero: {
        title: 'Tietoa Lyylistä',
        description: 'Kehitämme vallankumouksellisia tekoälypohjaisia sisällönhallintaratkaisuja, jotka muuttavat yritysten tapaa käsitellä sisältötyönkulkuja.',
        imageAlt: 'Tiimin yhteistyö'
      },
      timeline: {
        title: 'Matkamme',
        founded: {
          title: 'Yritys Perustettu',
          description: 'Lyyli perustettiin Mikko Oksasen ja Veikko Laitisen toimesta visiolla muuttaa sisältötyönkulkuja tekoälyn avulla.'
        },
        launch: {
          title: 'Ensimmäisen Tuotteen Julkaisu',
          description: 'Lanseerasimme tekoälypohjaisen sisällönhallinta-alustan auttamaan yrityksiä virtaviivaistamaan sisällöntuotantoprosessejaan.'
        },
        partnerships: {
          title: 'Ensimmäiset Merkittävät Kumppanuudet',
          description: 'Solmimme keskeisiä kumppanuuksia laajentaaksemme alustamme ominaisuuksia ja tavoittaaksemme lisää asiakkaita.'
        },
        future: {
          title: 'Tulevaisuuden Näkymät',
          description: 'Suunnittelemme tarjontamme ja tiimimme laajentamista palvellaksemme kasvavaa asiakaskuntaamme entistä paremmin.'
        }
      },
      mission: {
        title: 'Missiomme',
        vision: {
          title: 'Visiomme',
          description: 'Vallankumouksellistaa sisällön luominen ja hallinta eettisen tekoälyn avulla, tehden siitä saavutettavaa kaikenkokoisille yrityksille.'
        },
        values: {
          title: 'Arvomme',
          description: 'Uskomme läpinäkyvyyteen, eettisen tekoälykehitykseen, asiakaslähtöiseen innovaatioon ja työkaluihin, jotka vahvistavat ihmisten luovuutta.'
        },
        impact: {
          title: 'Vaikutuksemme',
          description: 'Autamme yrityksiä vähentämään sisällöntuotantoaikaa jopa 70 prosentilla parantaen samalla laatua ja säilyttäen aidon brändiään.'
        }
      },
      team: {
        title: 'Tiimimme',
        description: 'Tapaa intohimoiset ihmiset Lyylin takana, jotka ovat sitoutuneet muuttamaan yritysten tapaa luoda ja hallita sisältöä.',
        mikko: {
          role: 'Perustaja & Toimitusjohtaja',
          bio: 'Kansainvälinen johtamisen ammattilainen, jolla on laaja kokemus liiketoiminnan kehittämisestä, myynnistä, tuotehallinnasta ja strategiasta. Innovaatiot ja yritysten skaalaaminen täyteen potentiaaliin motivoivat häntä.'
        },
        veikko: {
          role: 'Perustaja & Teknologiajohtaja',
          bio: 'Ohjelmistokehittäjä, joka keskittyy intuitiivisten ja tehokkaiden käyttökokemusten luomiseen. TypeScript-, React- ja modernien web-teknologioiden asiantuntemuksellaan Veikko johtaa teknistä visiotamme ja kehitystämme.'
        }
      }
    },
    contact: {
      title: 'Ota yhteyttä',
      subtitle: 'Onko kysyttävää? Tekoälyavustajamme on valmis auttamaan tai ota suoraan yhteyttä tiimiimme.',
      information: 'Yhteystiedot',
      role: 'Myynti ja verkostot',
      call: 'Soita',
      email: 'Sähköposti'
    },
    chat: {
      title: 'Asiakastuki',
      welcomeMessage: 'Hei! Miten voin auttaa sinua tänään?',
      inputPlaceholder: 'Kirjoita viestisi...',
      send: 'Lähetä',
      error: {
        title: 'Virhe',
        initThread: 'Keskustelun alustaminen epäonnistui. Yritä uudelleen.',
        sendMessage: 'Viestin lähettäminen epäonnistui. Yritä uudelleen.'
      }
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
