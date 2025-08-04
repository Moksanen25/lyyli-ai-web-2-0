'use client';

import React from 'react';
import Link from 'next/link';
import { Home, MessageCircle, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Navbar from '@/components/Navbar';
import { ImageWithFallback } from '@/components/ui/image-with-fallback';
import { useLanguage } from '@/hooks/useLanguage';
import SSRSafeWrapper from '@/components/SSRSafeWrapper';

const NotFound: React.FC = () => {
  return (
    <SSRSafeWrapper>
      <NotFoundContent />
    </SSRSafeWrapper>
  );
};

const NotFoundContent: React.FC = () => {
  const { language, safeT } = useLanguage();
  const homePath = language === 'fi' ? '/fi' : '/';

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />
      
      <main className="flex-grow flex flex-col items-center justify-center bg-gradient-to-b from-background to-primary/5 px-4 py-12">
        <div className="w-full max-w-4xl flex flex-col items-center text-center">
          <h1 className="text-6xl md:text-8xl font-bold text-primary mb-2">404</h1>
          <h2 className="text-2xl md:text-3xl font-semibold mb-6">
            {safeT('common.errorTitle', { fallback: 'Page not found' })}
          </h2>
          
          <div className="w-full max-w-md mb-8">
            <ImageWithFallback
              src="/lovable-uploads/a20b0413-a763-4a28-94c5-15ade2819166.png" 
              alt="Lost person illustration"
              className="h-64 w-auto mx-auto"
            />
          </div>
          
          <p className="text-muted-foreground text-lg max-w-xl mb-8">
            {safeT('common.errorMessage', { fallback: "The page you're looking for doesn't exist or has been moved. But don't worry - while you're here, discover how Lyyli.ai can transform your business communication!" })}
          </p>
          
          {/* Main CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <Button asChild size="lg" className="flex gap-2">
              <Link href={homePath}>
                <Home size={18} /> 
                {safeT('common.backHome', { fallback: 'Back to Home' })}
              </Link>
            </Button>
            
            <Button asChild variant="outline" size="lg" className="flex gap-2">
              <Link href={language === 'fi' ? "/fi/contact" : "/contact"}>
                <MessageCircle size={18} />
                {safeT('common.contactUs', { fallback: 'Contact Us' })}
              </Link>
            </Button>
          </div>

          {/* Value proposition section */}
          <div className="bg-white rounded-xl p-8 shadow-sm border max-w-3xl mb-12">
            <div className="flex items-center justify-center gap-2 mb-4">
              <Zap className="h-6 w-6 text-primary" />
              <h3 className="text-xl font-semibold">
                {language === 'fi' ? 'Löysit Lyyli.ai:n!' : 'You Found Lyyli.ai!'}
              </h3>
            </div>
            <p className="text-muted-foreground mb-6">
              {language === 'fi' 
                ? 'Tekoälypohjainen viestintäalusta, joka muuttaa tapasi luoda sisältöä. Säästä aikaa ja paranna viestintäsi laatua.'
                : 'The AI-powered communication platform that transforms how you create content. Save time and improve your communication quality.'
              }
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
              <div className="text-center p-4 bg-primary/5 rounded-lg">
                <div className="font-medium mb-1">
                  {language === 'fi' ? '10x Nopeampi' : '10x Faster'}
                </div>
                <div className="text-muted-foreground">
                  {language === 'fi' ? 'Sisällöntuotanto' : 'Content Creation'}
                </div>
              </div>
              <div className="text-center p-4 bg-primary/5 rounded-lg">
                <div className="font-medium mb-1">
                  {language === 'fi' ? 'GDPR-yhteensopiva' : 'GDPR Compliant'}
                </div>
                <div className="text-muted-foreground">
                  {language === 'fi' ? 'Tietoturva' : 'Data Security'}
                </div>
              </div>
              <div className="text-center p-4 bg-primary/5 rounded-lg">
                <div className="font-medium mb-1">
                  {language === 'fi' ? '10+ Integraatiota' : '10+ Integrations'}
                </div>
                <div className="text-muted-foreground">
                  {language === 'fi' ? 'Työkalut' : 'Tools'}
                </div>
              </div>
            </div>
          </div>
          
          {/* Navigation help */}
          <div className="border-t border-border w-full max-w-lg pt-8">
            <h3 className="text-lg font-medium mb-4">
              {safeT('common.tryAgain', { fallback: 'Looking for something specific?' })}
            </h3>
            <div className="grid grid-cols-2 gap-3 text-left">
              <Link href={language === 'fi' ? "/fi/features" : "/features"} 
                className="text-primary hover:underline flex items-center gap-1 p-2 rounded hover:bg-primary/5 transition-colors"
              >
                {safeT('nav.features', { fallback: 'Features' })}
              </Link>
              <Link href={language === 'fi' ? "/fi/pricing" : "/pricing"} 
                className="text-primary hover:underline flex items-center gap-1 p-2 rounded hover:bg-primary/5 transition-colors"
              >
                {safeT('nav.pricing', { fallback: 'Pricing' })}
              </Link>
              <Link href={language === 'fi' ? "/fi/blog" : "/blog"} 
                className="text-primary hover:underline flex items-center gap-1 p-2 rounded hover:bg-primary/5 transition-colors"
              >
                {safeT('nav.blog', { fallback: 'Blog' })}
              </Link>
              <Link href={language === 'fi' ? "/fi/contact" : "/contact"} 
                className="text-primary hover:underline flex items-center gap-1 p-2 rounded hover:bg-primary/5 transition-colors"
              >
                {safeT('nav.contact', { fallback: 'Contact' })}
              </Link>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default NotFound;
