
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Menu, X } from 'lucide-react';
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

  // Debug the navigation keys
  console.log("Navigation translations:", {
    features: t('nav.features'),
    pricing: t('nav.pricing'),
    about: t('nav.about'),
    blog: t('nav.blog'),
    contact: t('nav.contact')
  });
  
  // Define logo URL and add console log to debug
  const logoUrl = "/lovable-uploads/39c9c229-44c8-40ee-9e43-016269635def.png";
  console.log("Logo URL being used:", logoUrl);
  
  return <header className="bg-white py-4 shadow-sm sticky top-0 z-50">
      <div className="container-padding container mx-auto flex items-center justify-between">
        {/* Logo - Always visible on both mobile and desktop */}
        <Link to={language === 'fi' ? "/fi/full" : "/full"} className="flex items-center">
          <img 
            src={logoUrl}
            alt="Lyyli.ai"
            className="h-8 md:h-10 w-auto"
          />
        </Link>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          <Link to={language === 'fi' ? "/fi/full/features" : "/full/features"} className="text-primary/70 hover:text-primary transition-colors">
            {t('nav.features')}
          </Link>
          <Link to={language === 'fi' ? "/fi/full/pricing" : "/full/pricing"} className="text-primary/70 hover:text-primary transition-colors">
            {t('nav.pricing')}
          </Link>
          <Link to={language === 'fi' ? "/fi/full/about" : "/full/about"} className="text-primary/70 hover:text-primary transition-colors">
            {t('nav.about')}
          </Link>
          <Link to={language === 'fi' ? "/fi/full/blog" : "/full/blog"} className="text-primary/70 hover:text-primary transition-colors">
            {t('nav.blog')}
          </Link>
          <Link to={language === 'fi' ? "/fi/full/contact" : "/full/contact"} className="text-primary/70 hover:text-primary transition-colors">
            {t('nav.contact')}
          </Link>
          <LanguageSwitcher />
        </nav>
        
        {/* Mobile Navigation */}
        <div className="flex md:hidden items-center">
          <Sheet open={isMenuOpen} onOpenChange={setIsMenuOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-full sm:w-64">
              <div className="grid gap-4 py-4">
                <div className="justify-between flex items-center">
                  <Link to={language === 'fi' ? "/fi/full" : "/full"} className="flex items-center" onClick={closeMenu}>
                    <img 
                      src={logoUrl}
                      alt="Lyyli.ai"
                      className="h-8 w-auto"
                    />
                  </Link>
                  <Button variant="ghost" size="icon" onClick={() => setIsMenuOpen(false)}>
                    <X className="h-5 w-5" />
                  </Button>
                </div>
                <Link to={language === 'fi' ? "/fi/full/features" : "/full/features"} className="text-sm font-medium leading-none hover:underline">
                  {t('nav.features')}
                </Link>
                <Link to={language === 'fi' ? "/fi/full/pricing" : "/full/pricing"} className="text-sm font-medium leading-none hover:underline">
                  {t('nav.pricing')}
                </Link>
                <Link to={language === 'fi' ? "/fi/full/about" : "/full/about"} className="text-sm font-medium leading-none hover:underline">
                  {t('nav.about')}
                </Link>
                <Link to={language === 'fi' ? "/fi/full/blog" : "/full/blog"} className="text-sm font-medium leading-none hover:underline">
                  {t('nav.blog')}
                </Link>
                <Link to={language === 'fi' ? "/fi/full/contact" : "/full/contact"} className="text-sm font-medium leading-none hover:underline">
                  {t('nav.contact')}
                </Link>
                <LanguageSwitcher />
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>;
};

export default Navbar;
