
import React, { useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { toast } from '@/components/ui/use-toast';

const Waitlist: React.FC = () => {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { t } = useLanguage();

  const handleJoinWaitlist = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email || !email.includes('@')) {
      toast({
        title: "Error",
        description: "Please enter a valid email address",
        variant: "destructive"
      });
      return;
    }
    
    setIsSubmitting(true);
    
    try {
      // Here you would typically integrate with your waitlist system
      // For now, we'll simulate success after a brief delay
      await new Promise(resolve => setTimeout(resolve, 800));
      
      toast({
        title: "Success!",
        description: "You've been added to our waitlist. We'll notify you when we launch!",
      });
      
      setEmail('');
    } catch (error) {
      toast({
        title: "Something went wrong",
        description: "Please try again later",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="py-6 px-4 md:px-6 w-full">
        <div className="container mx-auto">
          <div className="flex justify-between items-center">
            <div className="text-2xl font-bold text-primary">Lyyli</div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-grow flex items-center justify-center py-10 px-4 md:py-20 bg-gradient-to-b from-white to-accent/20">
        <div className="max-w-md w-full mx-auto text-center animate-fade-in">
          <h1 className="text-3xl md:text-5xl font-bold mb-4 text-primary">
            Something big is coming!
          </h1>
          
          <p className="text-lg md:text-xl mb-8 text-foreground/80">
            We're building the next generation AI-powered content management platform. Join our waitlist to be the first to know when we launch.
          </p>
          
          <form onSubmit={handleJoinWaitlist} className="space-y-4">
            <div>
              <Input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="w-full"
              />
            </div>
            
            <Button 
              type="submit" 
              disabled={isSubmitting}
              className="w-full py-6"
            >
              {isSubmitting ? "Adding you..." : "Join Waitlist"}
            </Button>
          </form>
        </div>
      </main>

      {/* Footer */}
      <footer className="py-8 px-4 text-center text-sm text-foreground/70">
        <div className="container mx-auto">
          <p>&copy; {new Date().getFullYear()} Lyyli. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Waitlist;
