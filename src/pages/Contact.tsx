
import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ChatInterface from '@/components/chat/ChatInterface';
import { Mail, Phone, Globe, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { PhoneInput } from '@/components/ui/phone-input';
import { useLanguage } from '@/hooks/useLanguage';
import { useIsMobile } from '@/hooks/use-mobile';

const Contact = () => {
  const { t, language } = useLanguage();
  const isMobile = useIsMobile();
  
  const pageTitle = language === 'fi' ? 'Ota yhteyttä - Lyyli.ai' : 'Contact Us - Lyyli.ai';
  const pageDescription = language === 'fi'
    ? 'Ota yhteyttä Lyyli.aiin tekoälyavusteisen viestinnän automaation asiantuntijoihin. Teemme viestinnästä helppoa, tuottavaa ja mitattavaa.'
    : 'Contact Lyyli.ai\'s AI communication automation experts. We make communication easy, productive, and measurable for your business.';
    
  return (
    <div className="min-h-screen flex flex-col">
      <Helmet>
        <title>{pageTitle}</title>
        <meta name="description" content={pageDescription} />
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={pageDescription} />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={pageTitle} />
        <meta name="twitter:description" content={pageDescription} />
        <link rel="canonical" href={`https://lyyli.ai/${language === 'fi' ? 'fi/' : ''}contact`} />
      </Helmet>
      
      <Navbar />
      
      {/* Added padding-top to prevent content from being cut off */}
      <div className="container-padding pt-32 md:pt-36 pb-12 flex-grow animate-fade-in">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold mb-3 md:mb-6 text-center">{t('contact.title')}</h1>
          <p className="text-base md:text-lg text-muted-foreground mb-6 md:mb-8 text-center px-4">
            {t('contact.subtitle')}
          </p>
          
          <div className="grid md:grid-cols-2 gap-6 md:gap-8 mb-10 px-4 md:px-0">
            <div className="bg-card border rounded-lg p-4 md:p-6 shadow-sm">
              <h2 className="text-xl md:text-2xl font-semibold mb-4">{t('contact.information')}</h2>
              <div className="space-y-6">
                <div>
                  <h3 className="font-medium text-lg">Mikko Oksanen</h3>
                  <p className="text-muted-foreground">{t('contact.role')}</p>
                </div>
                
                <div className="flex flex-col space-y-3">
                  <a 
                    href="tel:+358409619224" 
                    className="flex items-center gap-2 hover:text-primary transition-colors"
                    aria-label={t('contact.phoneAriaLabel')}
                  >
                    <Phone className="w-5 h-5" aria-hidden="true" />
                    <span>+358 40 961 9224</span>
                  </a>
                  
                  <a 
                    href="mailto:mikko@lyyli.ai"
                    className="flex items-center gap-2 hover:text-primary transition-colors"
                    aria-label={t('contact.emailAriaLabel')}
                  >
                    <Mail className="w-5 h-5" aria-hidden="true" />
                    <span>mikko@lyyli.ai</span>
                  </a>
                  
                  <a 
                    href="https://lyyli.ai"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 hover:text-primary transition-colors"
                  >
                    <Globe className="w-5 h-5" aria-hidden="true" />
                    <span>www.lyyli.ai</span>
                  </a>
                  
                  <a 
                    href="mailto:hello@lyyli.ai"
                    className="flex items-center gap-2 hover:text-primary transition-colors"
                  >
                    <Mail className="w-5 h-5" aria-hidden="true" />
                    <span>hello@lyyli.ai</span>
                  </a>
                  
                  <a 
                    href="https://wa.me/358409619224"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 hover:text-primary transition-colors"
                    aria-label={t('contact.whatsappAriaLabel')}
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5" aria-hidden="true">
                      <path d="M3 21l1.65-3.8a9 9 0 1 1 3.4 2.9L3 21" />
                      <path d="M9 10a.5.5 0 0 0 1 0V9a.5.5 0 0 0-1 0v1Z" />
                      <path d="M14 10a.5.5 0 0 0 1 0V9a.5.5 0 0 0-1 0v1Z" />
                      <path d="M9.5 13.5c.5 1 1.5 1 2.5 1s2-.5 2.5-1" />
                    </svg>
                    <span>WhatsApp</span>
                  </a>
                </div>
                
                <div className="pt-4 flex flex-wrap gap-3">
                  <Button asChild className={isMobile ? "flex-1 min-h-[44px] touch-manipulation" : ""}>
                    <a href="tel:+358409619224">
                      <Phone className="mr-2 h-4 w-4" aria-hidden="true" />
                      {isMobile ? "" : t('contact.call')}
                    </a>
                  </Button>
                  
                  <Button variant="outline" asChild className={isMobile ? "flex-1 min-h-[44px] touch-manipulation" : ""}>
                    <a href="mailto:mikko@lyyli.ai">
                      <Mail className="mr-2 h-4 w-4" aria-hidden="true" />
                      {isMobile ? "" : t('contact.email')}
                    </a>
                  </Button>
                  
                  <Button variant="secondary" asChild className={isMobile ? "flex-1 min-h-[44px] touch-manipulation" : ""}>
                    <a 
                      href="https://wa.me/358409619224"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2 h-4 w-4" aria-hidden="true">
                        <path d="M3 21l1.65-3.8a9 9 0 1 1 3.4 2.9L3 21" />
                        <path d="M9 10a.5.5 0 0 0 1 0V9a.5.5 0 0 0-1 0v1Z" />
                        <path d="M14 10a.5.5 0 0 0 1 0V9a.5.5 0 0 0-1 0v1Z" />
                        <path d="M9.5 13.5c.5 1 1.5 1 2.5 1s2-.5 2.5-1" />
                      </svg>
                      {isMobile ? "" : "WhatsApp"}
                    </a>
                  </Button>
                </div>
              </div>
            </div>
            
            <div className="border rounded-lg shadow-sm overflow-hidden h-[350px] md:h-[500px] lg:h-[600px]" aria-label={t('contact.chatAriaLabel')}>
              <div className="h-full flex flex-col">
                <div className="bg-primary text-white p-3 flex items-center">
                  <MessageCircle className="w-5 h-5 mr-2" />
                  <span className="font-medium">{language === 'fi' ? 'Keskustele Lyylin kanssa' : 'Chat with Lyyli'}</span>
                </div>
                <div className="flex-grow">
                  <ChatInterface />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Contact;
