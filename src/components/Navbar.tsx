
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { LanguageSwitcher } from './LanguageSwitcher';
import { useLanguage } from '@/contexts/LanguageContext';
import { Link } from 'react-router-dom';

const Navbar: React.FC = () => {
  const { t } = useLanguage();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Handle scroll to add background to navbar when scrolling
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <nav 
      className={`fixed w-full top-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white card-shadow py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="container-padding container mx-auto flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center">
          <div className="text-2xl font-playfair font-bold text-primary">Lyyli</div>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center space-x-8">
          <Link to="/features" className="text-primary hover:text-primary-light transition-colors">
            {t('nav.features')}
          </Link>
          <Link to="/pricing" className="text-primary hover:text-primary-light transition-colors">
            {t('nav.pricing')}
          </Link>
          <Link to="/faq" className="text-primary hover:text-primary-light transition-colors">
            {t('nav.faq')}
          </Link>
          <Link to="/contact" className="text-primary hover:text-primary-light transition-colors">
            {t('nav.contact')}
          </Link>
          <LanguageSwitcher />
          <a 
            href="https://lyyli.vercel.app/" 
            className="text-primary hover:text-primary-light transition-colors"
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
            className="ml-4 text-primary focus:outline-none"
            onClick={toggleMenu}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden bg-white card-shadow absolute w-full">
          <div className="container-padding container mx-auto py-4 flex flex-col space-y-4">
            <Link 
              to="/features" 
              className="text-primary hover:text-primary-light transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              {t('nav.features')}
            </Link>
            <Link 
              to="/pricing" 
              className="text-primary hover:text-primary-light transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              {t('nav.pricing')}
            </Link>
            <Link 
              to="/faq" 
              className="text-primary hover:text-primary-light transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              {t('nav.faq')}
            </Link>
            <Link 
              to="/contact" 
              className="text-primary hover:text-primary-light transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              {t('nav.contact')}
            </Link>
            <hr className="border-gray-200" />
            <a 
              href="https://lyyli.vercel.app/"
              className="text-primary hover:text-primary-light transition-colors py-2"
            >
              {t('nav.login')}
            </a>
            <a href="https://lyyli.vercel.app/" className="py-2">
              <Button className="bg-primary hover:bg-primary/90 text-white w-full">
                {t('nav.signup')}
              </Button>
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
