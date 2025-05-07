
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ChatInterface from '@/components/chat/ChatInterface';
import { mail, phone, whatsapp } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Contact = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="container-padding py-12 md:py-24 flex-grow animate-fade-in">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-center">Contact Us</h1>
          <p className="text-lg text-muted-foreground mb-8 text-center">
            Have questions? Our AI assistant is ready to help you or get in touch directly with our team.
          </p>
          
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-card border rounded-lg p-6 shadow-sm">
              <h2 className="text-2xl font-semibold mb-4">Contact Information</h2>
              <div className="space-y-6">
                <div>
                  <h3 className="font-medium text-lg">Mikko</h3>
                  <p className="text-muted-foreground">Sales and networks</p>
                </div>
                
                <div className="flex flex-col space-y-3">
                  <a 
                    href="tel:+358409619224" 
                    className="flex items-center gap-2 hover:text-primary transition-colors"
                  >
                    <phone className="w-5 h-5" />
                    <span>+358 40 961 9224</span>
                  </a>
                  
                  <a 
                    href="mailto:mikko.oksanen@lyyli.ai"
                    className="flex items-center gap-2 hover:text-primary transition-colors"
                  >
                    <mail className="w-5 h-5" />
                    <span>mikko.oksanen@lyyli.ai</span>
                  </a>
                  
                  <a 
                    href="https://wa.me/358409619224"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 hover:text-primary transition-colors"
                  >
                    <whatsapp className="w-5 h-5" />
                    <span>WhatsApp</span>
                  </a>
                </div>
                
                <div className="pt-4 flex flex-wrap gap-3">
                  <Button asChild>
                    <a href="tel:+358409619224">
                      <phone className="mr-2 h-4 w-4" />
                      Call
                    </a>
                  </Button>
                  
                  <Button variant="outline" asChild>
                    <a href="mailto:mikko.oksanen@lyyli.ai">
                      <mail className="mr-2 h-4 w-4" />
                      Email
                    </a>
                  </Button>
                  
                  <Button variant="secondary" asChild>
                    <a 
                      href="https://wa.me/358409619224"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <whatsapp className="mr-2 h-4 w-4" />
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
