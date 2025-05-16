
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { LanguageSwitcher } from './LanguageSwitcher';
import { useLanguage } from '@/contexts/LanguageContext';
import { Link } from 'react-router-dom';
import { useIsMobile } from '@/hooks/use-mobile';

const Navbar: React.FC = () => {
  const { t } = useLanguage();
  const isMobile = useIsMobile();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [visible, setVisible] = useState(true);

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

  return (
    <nav 
      className={`fixed w-full top-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white card-shadow py-2' : 'bg-transparent py-4'
      } ${visible ? 'translate-y-0' : '-translate-y-full'}`}
      aria-label="Main navigation"
      role="navigation"
    >
      <div className="container-padding container mx-auto flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center" aria-label="Lyyli home page">
          <div className="text-2xl font-playfair font-bold text-primary">Lyyli</div>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center space-x-8">
          <Link to="/features" className="text-primary hover:text-primary/80 transition-colors">
            {t('nav.features')}
          </Link>
          <Link to="/pricing" className="text-primary hover:text-primary/80 transition-colors">
            {t('nav.pricing')}
          </Link>
          <Link to="/about" className="text-primary hover:text-primary/80 transition-colors">
            {t('nav.about')}
          </Link>
          <Link to="/contact" className="text-primary hover:text-primary/80 transition-colors">
            {t('nav.contact')}
          </Link>
          <LanguageSwitcher />
          <a 
            href="https://lyyli.vercel.app/" 
            className="text-primary hover:text-primary/80 transition-colors"
          >
            {t('nav.login')}
          </a>
          <a href="https://lyyli.vercel.app/">
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

      {/* Mobile Menu - Full Screen Overlay */}
      <div 
        id="mobile-menu"
        className={`lg:hidden fixed inset-0 bg-white z-50 overflow-y-auto transition-all duration-300 ${
          isMenuOpen ? 'top-0 opacity-100' : 'top-[-100%] opacity-0'
        }`}
        style={{
          height: isMenuOpen ? '100%' : '0',
          paddingTop: '5rem',
          visibility: isMenuOpen ? 'visible' : 'hidden'
        }}
        aria-hidden={!isMenuOpen}
      >
        <div className="container-padding container mx-auto py-6 flex flex-col space-y-6">
          <Link 
            to="/features" 
            className="text-primary hover:text-primary/80 transition-colors py-3 text-lg border-b border-gray-100"
            onClick={() => setIsMenuOpen(false)}
          >
            {t('nav.features')}
          </Link>
          <Link 
            to="/pricing" 
            className="text-primary hover:text-primary/80 transition-colors py-3 text-lg border-b border-gray-100"
            onClick={() => setIsMenuOpen(false)}
          >
            {t('nav.pricing')}
          </Link>
          <Link 
            to="/about" 
            className="text-primary hover:text-primary/80 transition-colors py-3 text-lg border-b border-gray-100"
            onClick={() => setIsMenuOpen(false)}
          >
            {t('nav.about')}
          </Link>
          <Link 
            to="/contact" 
            className="text-primary hover:text-primary/80 transition-colors py-3 text-lg border-b border-gray-100"
            onClick={() => setIsMenuOpen(false)}
          >
            {t('nav.contact')}
          </Link>
          <div className="py-4">
            <a 
              href="https://lyyli.vercel.app/"
              className="text-primary hover:text-primary/80 transition-colors py-3 text-lg block mb-4"
            >
              {t('nav.login')}
            </a>
            <a href="https://lyyli.vercel.app/">
              <Button className="bg-primary hover:bg-primary/90 text-white w-full py-6 text-lg">
                {t('nav.signup')}
              </Button>
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
