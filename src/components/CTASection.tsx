'use client';

import React from 'react';
import { useLanguage } from '@/hooks/useLanguage';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

const CTASection: React.FC = () => {
  const { language } = useLanguage();
  const waitlistPath = language === 'fi' ? '/fi/waitlist' : '/waitlist';

  return (
    <section className="py-20 bg-gradient-to-br from-primary to-primary/90 text-white">
      <div className="container mx-auto px-4 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            {language === 'fi' ? 'Aloita tänään' : 'Start today'}
          </h2>
          <p className="text-xl mb-8 text-white/80">
            {language === 'fi'
              ? 'Liity odotuslistalle ja ole ensimmäisten joukossa kokeilemassa Lyylia'
              : 'Join the waitlist and be among the first to try Lyyli'
            }
          </p>
          <Button 
            className="bg-white text-primary hover:bg-white/90 px-8 py-6 text-lg shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 font-semibold"
            asChild
          >
            <Link href={waitlistPath}>
              {language === 'fi' ? 'Liity odotuslistalle' : 'Join waitlist'}
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
