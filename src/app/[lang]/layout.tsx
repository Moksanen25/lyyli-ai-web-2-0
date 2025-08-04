import { Inter } from 'next/font/google'
import type { Metadata } from 'next'
import { LanguageProvider } from '@/contexts/LanguageContext'
import { SupportedLanguage } from '@/utils/simpleTranslations'
import FloatingChat from '@/components/chat/FloatingChat'
import { Toaster } from '@/components/ui/toaster'
import TranslationManager from '@/components/dev/TranslationManager'

const inter = Inter({ subsets: ['latin'] })

export async function generateMetadata({ params }: { params: { lang: string } }): Promise<Metadata> {
  const lang = params.lang
  
  const titles = {
    en: 'Lyyli AI - Customer Segmentation Platform',
    fi: 'Lyyli AI - Asiakassegmentointialusta'
  }
  
  const descriptions = {
    en: 'AI-powered customer segmentation platform for businesses',
    fi: 'Tekoälypohjainen asiakassegmentointialusta yrityksille'
  }

  return {
    title: titles[lang as keyof typeof titles] || titles.en,
    description: descriptions[lang as keyof typeof descriptions] || descriptions.en,
    keywords: 'customer segmentation, AI, business intelligence, marketing automation',
    authors: [{ name: 'Lyyli AI' }],
    creator: 'Lyyli AI',
    publisher: 'Lyyli AI',
    formatDetection: {
      email: false,
      address: false,
      telephone: false,
    },
    metadataBase: new URL('https://lyyli.ai'),
    alternates: {
      canonical: `/${lang}`,
      languages: {
        'en': '/',
        'fi': '/fi',
      },
    },
    openGraph: {
      title: titles[lang as keyof typeof titles] || titles.en,
      description: descriptions[lang as keyof typeof descriptions] || descriptions.en,
      url: `https://lyyli.ai/${lang}`,
      siteName: 'Lyyli AI',
      images: [
        {
          url: '/images/lyyli-social-share.jpg',
          width: 1200,
          height: 630,
          alt: 'Lyyli AI Platform',
        },
      ],
      locale: lang === 'fi' ? 'fi_FI' : 'en_US',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: titles[lang as keyof typeof titles] || titles.en,
      description: descriptions[lang as keyof typeof descriptions] || descriptions.en,
      images: ['/images/lyyli-social-share.jpg'],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
  }
}

export default function LangLayout({
  children,
  params,
}: {
  children: React.ReactNode
  params: { lang: string }
}) {
  // Only support 'en' and 'fi' languages
  const supportedLang = (params.lang === 'fi' || params.lang === 'en') ? params.lang as SupportedLanguage : 'en';
  
  return (
    <html lang={supportedLang} suppressHydrationWarning>
      <body className={inter.className}>
        <LanguageProvider initialLanguage={supportedLang}>
          {children}
          <FloatingChat />
          <Toaster />
          {process.env.NODE_ENV === 'development' && <TranslationManager />}
        </LanguageProvider>
      </body>
    </html>
  )
} 