'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import { Menu, X, LogIn, ChevronDown } from 'lucide-react';
import { useLanguage } from '@/hooks/useLanguage';
import { LanguageSwitcher } from './LanguageSwitcher';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const {
    t,
    language
  } = useLanguage();
  const pathname = usePathname();
  const waitlistPath = language === 'fi' ? '/fi/waitlist' : '/waitlist';

  // Function to close the mobile menu
  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  // Close the menu when the language changes
  useEffect(() => {
    closeMenu();
  }, [language]);

  // Close the menu when the route changes
  useEffect(() => {
    closeMenu();
  }, [pathname]);
  
  return (
    <header className="bg-white py-4 shadow-soft sticky top-0 z-50 border-b border-light-gray">
      <div className="container-padding container mx-auto flex items-center justify-between">
        {/* Logo - Shown on both mobile and desktop */}
        <Link href={language === 'fi' ? "/fi" : "/"} className="flex items-center">
          <img 
            src="/Lyyli.ai (1500 x 500 px).svg"
            alt="Lyyli.io"
            className="h-10 w-auto"
          />
        </Link>

        {/* Mobile Navigation - Push to right */}
        <div className="flex md:hidden items-center ml-auto">
          <Sheet open={isMenuOpen} onOpenChange={setIsMenuOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden text-forest-green">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-full sm:w-64 bg-white">
              <div className="grid gap-4 py-4">
                <div className="justify-end flex items-center">
                  <Button variant="ghost" size="icon" onClick={() => setIsMenuOpen(false)} className="text-forest-green">
                    <X className="h-5 w-5" />
                  </Button>
                </div>
                <div className="space-y-1">
                  <div className="text-sm font-inter font-medium text-medium-gray px-2 py-1">
                    {t('nav.features')}
                  </div>
                  <Link href={language === 'fi' ? "/fi/features" : "/features"} className="block px-4 py-2 text-sm font-inter hover:bg-light-gray rounded-lg text-dark-gray">
                    {t('nav.features')}
                  </Link>
                  <Link href={language === 'fi' ? "/fi/security" : "/security"} className="block px-4 py-2 text-sm font-inter hover:bg-light-gray rounded-lg text-dark-gray">
                    {t('nav.security')}
                  </Link>
                </div>
                <Link href={language === 'fi' ? "/fi/pricing" : "/pricing"} className="text-sm font-inter font-medium leading-none hover:underline text-dark-gray">
                  {t('nav.pricing')}
                </Link>
                <Link href={language === 'fi' ? "/fi/about" : "/about"} className="text-sm font-inter font-medium leading-none hover:underline text-dark-gray">
                  {t('nav.about')}
                </Link>
                <Link href={language === 'fi' ? "/fi/blog" : "/blog"} className="text-sm font-inter font-medium leading-none hover:underline text-dark-gray">
                  {t('nav.blog')}
                </Link>
                <Link href={language === 'fi' ? "/fi/contact" : "/contact"} className="text-sm font-inter font-medium leading-none hover:underline text-dark-gray">
                  {t('nav.contact')}
                </Link>
                <LanguageSwitcher />
                <Button 
                  variant="outline" 
                  className="w-full mt-4 btn-secondary"
                  asChild
                >
                  <Link href={waitlistPath}>
                    <LogIn className="h-4 w-4 mr-2" />
                    {t('nav.login')}
                  </Link>
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {/* Features Dropdown */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="flex items-center gap-1 text-dark-gray hover:text-forest-green font-inter font-medium">
                {t('nav.features')}
                <ChevronDown className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="start" className="w-48 bg-white border-light-gray shadow-medium">
              <DropdownMenuItem asChild className="text-dark-gray hover:bg-light-gray font-inter">
                <Link href={language === 'fi' ? "/fi/features" : "/features"}>
                  {t('nav.features')}
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild className="text-dark-gray hover:bg-light-gray font-inter">
                <Link href={language === 'fi' ? "/fi/security" : "/security"}>
                  {t('nav.security')}
                </Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          {/* Other Navigation Links */}
          <Link href={language === 'fi' ? "/fi/pricing" : "/pricing"} className="text-sm font-inter font-medium leading-none hover:underline text-dark-gray hover:text-forest-green">
            {t('nav.pricing')}
          </Link>
          <Link href={language === 'fi' ? "/fi/about" : "/about"} className="text-sm font-inter font-medium leading-none hover:underline text-dark-gray hover:text-forest-green">
            {t('nav.about')}
          </Link>
          <Link href={language === 'fi' ? "/fi/blog" : "/blog"} className="text-sm font-inter font-medium leading-none hover:underline text-dark-gray hover:text-forest-green">
            {t('nav.blog')}
          </Link>
          <Link href={language === 'fi' ? "/fi/contact" : "/contact"} className="text-sm font-inter font-medium leading-none hover:underline text-dark-gray hover:text-forest-green">
            {t('nav.contact')}
          </Link>

          {/* Language Switcher */}
          <LanguageSwitcher />

          {/* Login Button */}
          <Button variant="outline" className="btn-secondary" asChild>
            <Link href={waitlistPath}>
              <LogIn className="h-4 w-4 mr-2" />
              {t('nav.login')}
            </Link>
          </Button>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
