'use client';

import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ChevronDown, ArrowRight } from 'lucide-react';

const Header: React.FC = () => {
  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <img 
              src="/images/lyyli-logo.png" 
              alt="Lyyli.ai" 
              className="h-8 w-auto"
            />
          </Link>

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="/features" className="text-gray-700 hover:text-primary transition-colors">
              Ominaisuudet
            </Link>
            <Link href="/pricing" className="text-gray-700 hover:text-primary transition-colors">
              Hinnoittelu
            </Link>
            <Link href="/about" className="text-gray-700 hover:text-primary transition-colors">
              Tietoa meistä
            </Link>
            <Link href="/blog" className="text-gray-700 hover:text-primary transition-colors">
              Blogi
            </Link>
            <Link href="/contact" className="text-gray-700 hover:text-primary transition-colors">
              Yhteystiedot
            </Link>
          </nav>

          {/* Right side */}
          <div className="flex items-center space-x-4">
            {/* Language selector */}
            <div className="flex items-center space-x-1 text-gray-700 cursor-pointer">
              <span>FI</span>
              <ChevronDown className="h-4 w-4" />
            </div>

            {/* Login button */}
            <Button 
              variant="outline" 
              className="border-gray-300 text-gray-700 hover:bg-gray-50"
            >
              Kirjaudu
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>

            {/* Try for free button */}
            <Button className="bg-primary text-white hover:bg-primary/90">
              Kokeile ilmaiseksi
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header; 