
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ChatInterface from '@/components/chat/ChatInterface';
import { Mail, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';

const Contact = () => {
  const { t } = useLanguage();
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="container-padding py-12 md:py-24 flex-grow animate-fade-in">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-center">{t('contact.title')}</h1>
          <p className="text-lg text-muted-foreground mb-8 text-center">
            {t('contact.subtitle')}
          </p>
          
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-card border rounded-lg p-6 shadow-sm">
              <h2 className="text-2xl font-semibold mb-4">{t('contact.information')}</h2>
              <div className="space-y-6">
                <div>
                  <h3 className="font-medium text-lg">Mikko</h3>
                  <p className="text-muted-foreground">{t('contact.role')}</p>
                </div>
                
                <div className="flex flex-col space-y-3">
                  <a 
                    href="tel:+358409619224" 
                    className="flex items-center gap-2 hover:text-primary transition-colors"
                  >
                    <Phone className="w-5 h-5" />
                    <span>+358 40 961 9224</span>
                  </a>
                  
                  <a 
                    href="mailto:mikko.oksanen@lyyli.ai"
                    className="flex items-center gap-2 hover:text-primary transition-colors"
                  >
                    <Mail className="w-5 h-5" />
                    <span>mikko.oksanen@lyyli.ai</span>
                  </a>
                  
                  <a 
                    href="https://wa.me/358409619224"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 hover:text-primary transition-colors"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
                      <path d="M3 21l1.65-3.8a9 9 0 1 1 3.4 2.9L3 21" />
                      <path d="M9 10a.5.5 0 0 0 1 0V9a.5.5 0 0 0-1 0v1Z" />
                      <path d="M14 10a.5.5 0 0 0 1 0V9a.5.5 0 0 0-1 0v1Z" />
                      <path d="M9.5 13.5c.5 1 1.5 1 2.5 1s2-.5 2.5-1" />
                    </svg>
                    <span>WhatsApp</span>
                  </a>
                </div>
                
                <div className="pt-4 flex flex-wrap gap-3">
                  <Button asChild>
                    <a href="tel:+358409619224">
                      <Phone className="mr-2 h-4 w-4" />
                      {t('contact.call')}
                    </a>
                  </Button>
                  
                  <Button variant="outline" asChild>
                    <a href="mailto:mikko.oksanen@lyyli.ai">
                      <Mail className="mr-2 h-4 w-4" />
                      {t('contact.email')}
                    </a>
                  </Button>
                  
                  <Button variant="secondary" asChild>
                    <a 
                      href="https://wa.me/358409619224"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2 h-4 w-4">
                        <path d="M3 21l1.65-3.8a9 9 0 1 1 3.4 2.9L3 21" />
                        <path d="M9 10a.5.5 0 0 0 1 0V9a.5.5 0 0 0-1 0v1Z" />
                        <path d="M14 10a.5.5 0 0 0 1 0V9a.5.5 0 0 0-1 0v1Z" />
                        <path d="M9.5 13.5c.5 1 1.5 1 2.5 1s2-.5 2.5-1" />
                      </svg>
                      WhatsApp
                    </a>
                  </Button>
                </div>
              </div>
            </div>
            
            <div className="border rounded-lg shadow-sm overflow-hidden h-[600px]">
              <ChatInterface />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Contact;
