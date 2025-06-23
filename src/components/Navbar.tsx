
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Menu, X, LogIn } from 'lucide-react';
import { useLanguage } from '@/hooks/useLanguage';
import { LanguageSwitcher } from './LanguageSwitcher';
import { useIsMobile } from '@/hooks/use-mobile';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const {
    t,
    language
  } = useLanguage();
  const location = useLocation();
  const isMobile = useIsMobile();
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
  }, [location.pathname]);
  
  return (
    <header className="bg-white py-4 shadow-sm sticky top-0 z-50">
      <div className="container-padding container mx-auto flex items-center justify-between">
        {/* Logo - Shown on both mobile and desktop */}
        <Link to={language === 'fi' ? "/fi" : "/"} className="flex items-center">
          <img 
            src="/lovable-uploads/39c9c229-44c8-40ee-9e43-016269635def.png"
            alt="Lyyli.ai"
            className="h-10 w-auto"
          />
        </Link>

        {/* Mobile Navigation - Push to right */}
        <div className="flex md:hidden items-center ml-auto">
          <Sheet open={isMenuOpen} onOpenChange={setIsMenuOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-full sm:w-64">
              <div className="grid gap-4 py-4">
                <div className="justify-end flex items-center">
                  <Button variant="ghost" size="icon" onClick={() => setIsMenuOpen(false)}>
                    <X className="h-5 w-5" />
                  </Button>
                </div>
                <Link to={language === 'fi' ? "/fi/features" : "/features"} className="text-sm font-medium leading-none hover:underline">
                  {t('nav.features')}
                </Link>
                <Link to={language === 'fi' ? "/fi/pricing" : "/pricing"} className="text-sm font-medium leading-none hover:underline">
                  {t('nav.pricing')}
                </Link>
                <Link to={language === 'fi' ? "/fi/about" : "/about"} className="text-sm font-medium leading-none hover:underline">
                  {t('nav.about')}
                </Link>
                <Link to={language === 'fi' ? "/fi/blog" : "/blog"} className="text-sm font-medium leading-none hover:underline">
                  {t('nav.blog')}
                </Link>
                <Link to={language === 'fi' ? "/fi/contact" : "/contact"} className="text-sm font-medium leading-none hover:underline">
                  {t('nav.contact')}
                </Link>
                <LanguageSwitcher />
                <Button 
                  variant="outline" 
                  className="w-full mt-4 border-primary text-primary hover:bg-primary hover:text-white"
                  asChild
                >
                  <Link to={waitlistPath}>
                    <LogIn className="h-4 w-4 mr-2" />
                    {t('nav.login')}
                  </Link>
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
        
        {/* Desktop Navigation - hidden on mobile */}
        <nav className="hidden md:flex items-center space-x-6 ml-auto">
          <Link to={language === 'fi' ? "/fi/features" : "/features"} className="text-primary/70 hover:text-primary transition-colors">
            {t('nav.features')}
          </Link>
          <Link to={language === 'fi' ? "/fi/pricing" : "/pricing"} className="text-primary/70 hover:text-primary transition-colors">
            {t('nav.pricing')}
          </Link>
          <Link to={language === 'fi' ? "/fi/about" : "/about"} className="text-primary/70 hover:text-primary transition-colors">
            {t('nav.about')}
          </Link>
          <Link to={language === 'fi' ? "/fi/blog" : "/blog"} className="text-primary/70 hover:text-primary transition-colors">
            {t('nav.blog')}
          </Link>
          <Link to={language === 'fi' ? "/fi/contact" : "/contact"} className="text-primary/70 hover:text-primary transition-colors">
            {t('nav.contact')}
          </Link>
          <LanguageSwitcher />
          <Button 
            variant="outline" 
            className="border-primary text-primary hover:bg-primary hover:text-white"
            asChild
          >
            <Link to={waitlistPath}>
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
