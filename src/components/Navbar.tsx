
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { LanguageSwitcher } from './LanguageSwitcher';
import { useLanguage } from '@/contexts/LanguageContext';
import { Link, useLocation } from 'react-router-dom';
import { useIsMobile } from '@/hooks/use-mobile';

const Navbar: React.FC = () => {
  const { t, language } = useLanguage();
  const isMobile = useIsMobile();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [visible, setVisible] = useState(true);
  const location = useLocation();

  // Handle scroll to add background to navbar when scrolling and hide on scroll down
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Determine navbar visibility (hide when scrolling down, show when scrolling up)
      if (isMobile) {
        if (currentScrollY > lastScrollY && currentScrollY > 200) {
          setVisible(false);
        } else {
          setVisible(true);
        }
      }
      
      setScrolled(currentScrollY > 10);
      setLastScrollY(currentScrollY);
    };
    
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [lastScrollY, isMobile]);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  // When menu is open, prevent body scroll
  useEffect(() => {
    if (isMenuOpen && isMobile) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMenuOpen, isMobile]);

  // Close menu when switching to desktop view
  useEffect(() => {
    if (!isMobile && isMenuOpen) {
      setIsMenuOpen(false);
    }
  }, [isMobile, isMenuOpen]);

  // Get correct paths based on current language
  const getLocalizedPath = (path: string) => {
    // Remove any existing language prefix
    const basePath = path.replace(/^\/(fi\/)?/, '');
    return language === 'fi' ? `/fi/${basePath}` : `/${basePath}`;
  };

  // Check if a link is active
  const isActive = (path: string) => {
    const currentPath = location.pathname;
    const pathToCheck = path.endsWith('/') ? path : path + '/';
    const currentPathCheck = currentPath.endsWith('/') ? currentPath : currentPath + '/';
    
    return currentPathCheck.includes(pathToCheck);
  };

  return (
    <>
      <nav 
        className={`fixed w-full top-0 z-50 transition-all duration-300 ${
          scrolled ? 'bg-white card-shadow py-2' : 'bg-transparent py-4'
        } ${visible ? 'translate-y-0' : '-translate-y-full'}`}
        aria-label="Main navigation"
        role="navigation"
      >
        <div className="container-padding container mx-auto flex items-center justify-between">
          {/* Logo */}
          <Link to={language === 'fi' ? "/fi" : "/"} className="flex items-center" aria-label="Lyyli home page">
            <div className="text-2xl font-playfair font-bold text-primary">Lyyli</div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            <Link 
              to={getLocalizedPath("full/features")} 
              className={`text-primary hover:text-primary/80 transition-colors ${isActive('/full/features') ? 'font-medium' : ''}`}
            >
              {t('nav.features')}
            </Link>
            <Link 
              to={getLocalizedPath("full/pricing")} 
              className={`text-primary hover:text-primary/80 transition-colors ${isActive('/full/pricing') ? 'font-medium' : ''}`}
            >
              {t('nav.pricing')}
            </Link>
            <Link 
              to={getLocalizedPath("full/blog")} 
              className={`text-primary hover:text-primary/80 transition-colors ${isActive('/full/blog') ? 'font-medium' : ''}`}
            >
              {t('nav.blog')}
            </Link>
            <Link 
              to={getLocalizedPath("full/about")} 
              className={`text-primary hover:text-primary/80 transition-colors ${isActive('/full/about') ? 'font-medium' : ''}`}
            >
              {t('nav.about')}
            </Link>
            <Link 
              to={getLocalizedPath("full/contact")} 
              className={`text-primary hover:text-primary/80 transition-colors ${isActive('/full/contact') ? 'font-medium' : ''}`}
            >
              {t('nav.contact')}
            </Link>
            <LanguageSwitcher />
            <a 
              href="https://lyyli.vercel.app/" 
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:text-primary/80 transition-colors"
            >
              {t('nav.login')}
            </a>
            <a 
              href="https://lyyli.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button className="bg-primary hover:bg-primary/90 text-white">
                {t('nav.signup')}
              </Button>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center">
            <LanguageSwitcher />
            <button
              className="ml-4 text-primary p-2 focus:outline-none focus:ring-2 focus:ring-primary rounded"
              onClick={toggleMenu}
              aria-label={isMenuOpen ? t('nav.closeMenu') : t('nav.openMenu')}
              aria-expanded={isMenuOpen}
              aria-controls="mobile-menu"
            >
              {isMenuOpen ? <X size={24} aria-hidden="true" /> : <Menu size={24} aria-hidden="true" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu - Separate from nav to ensure proper stacking */}
      {isMenuOpen && (
        <div 
          id="mobile-menu"
          className="lg:hidden fixed top-0 left-0 right-0 bottom-0 w-full h-full bg-white z-[100] overflow-y-auto"
          style={{
            position: 'fixed',
            display: 'block'
          }}
        >
          <div className="container-padding container mx-auto pt-24 pb-8">
            {/* Close button at the top */}
            <div className="absolute top-4 right-4">
              <button
                className="text-primary p-2 focus:outline-none focus:ring-2 focus:ring-primary rounded"
                onClick={() => setIsMenuOpen(false)}
                aria-label={t('nav.closeMenu')}
              >
                <X size={24} aria-hidden="true" />
              </button>
            </div>

            {/* Mobile Navigation Links */}
            <div className="flex flex-col space-y-3">
              <Link 
                to={getLocalizedPath("full/features")} 
                className={`text-primary hover:text-primary/80 transition-colors py-3 text-lg border-b border-gray-100 ${isActive('/full/features') ? 'font-medium' : ''}`}
                onClick={() => setIsMenuOpen(false)}
              >
                {t('nav.features')}
              </Link>
              <Link 
                to={getLocalizedPath("full/pricing")} 
                className={`text-primary hover:text-primary/80 transition-colors py-3 text-lg border-b border-gray-100 ${isActive('/full/pricing') ? 'font-medium' : ''}`}
                onClick={() => setIsMenuOpen(false)}
              >
                {t('nav.pricing')}
              </Link>
              <Link 
                to={getLocalizedPath("full/blog")} 
                className={`text-primary hover:text-primary/80 transition-colors py-3 text-lg border-b border-gray-100 ${isActive('/full/blog') ? 'font-medium' : ''}`}
                onClick={() => setIsMenuOpen(false)}
              >
                {t('nav.blog')}
              </Link>
              <Link 
                to={getLocalizedPath("full/about")} 
                className={`text-primary hover:text-primary/80 transition-colors py-3 text-lg border-b border-gray-100 ${isActive('/full/about') ? 'font-medium' : ''}`}
                onClick={() => setIsMenuOpen(false)}
              >
                {t('nav.about')}
              </Link>
              <Link 
                to={getLocalizedPath("full/contact")} 
                className={`text-primary hover:text-primary/80 transition-colors py-3 text-lg border-b border-gray-100 ${isActive('/full/contact') ? 'font-medium' : ''}`}
                onClick={() => setIsMenuOpen(false)}
              >
                {t('nav.contact')}
              </Link>
            </div>

            {/* Login and Signup */}
            <div className="py-6 space-y-4">
              <a 
                href="https://lyyli.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:text-primary/80 transition-colors py-2 text-lg block"
                onClick={() => setIsMenuOpen(false)}
              >
                {t('nav.login')}
              </a>
              <a 
                href="https://lyyli.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsMenuOpen(false)}
                className="block"
              >
                <Button className="bg-primary hover:bg-primary/90 text-white w-full py-4 text-lg">
                  {t('nav.signup')}
                </Button>
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
