
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ChatInterface from '@/components/chat/ChatInterface';

const Contact = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="container-padding py-12 md:py-24 flex-grow animate-fade-in">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-center">Contact Us</h1>
          <p className="text-lg text-muted-foreground mb-8 text-center">
            Have questions? Our AI assistant is ready to help you.
          </p>
          
          <div className="mt-8">
            <ChatInterface />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Contact;
