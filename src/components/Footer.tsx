
import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Settings } from 'lucide-react';

const Footer: React.FC = () => {
  const { t, language } = useLanguage();
  
  // Function to open cookie settings dialog
  const openCookieSettings = () => {
    // Create and dispatch a custom event that the CookieConsent component will listen for
    const event = new CustomEvent('openCookieSettings');
    window.dispatchEvent(event);
  };

  return (
    <footer className="bg-white pt-16 pb-8">
      <div className="container-padding container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Logo and description */}
          <div>
            <Link to="/" className="inline-block mb-4">
              <div className="text-2xl font-playfair font-bold text-primary">Lyyli</div>
            </Link>
            <p className="text-primary/70 mb-4">
              AI-powered content management platform that transforms your content workflow.
            </p>
          </div>
          
          {/* Product links */}
          <div>
            <h3 className="font-bold mb-4">{t('footer.product')}</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/features" className="text-primary/70 hover:text-primary transition-colors">
                  {t('footer.features')}
                </Link>
              </li>
              <li>
                <Link to="/pricing" className="text-primary/70 hover:text-primary transition-colors">
                  {t('footer.pricing')}
                </Link>
              </li>
              <li>
                <Link to="/faq" className="text-primary/70 hover:text-primary transition-colors">
                  {t('footer.faq')}
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Company links */}
          <div>
            <h3 className="font-bold mb-4">{t('footer.company')}</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="text-primary/70 hover:text-primary transition-colors">
                  {t('footer.about')}
                </Link>
              </li>
              <li>
                <Link to="/careers" className="text-primary/70 hover:text-primary transition-colors">
                  {t('footer.careers')}
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-primary/70 hover:text-primary transition-colors">
                  {t('footer.contact')}
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Legal links */}
          <div>
            <h3 className="font-bold mb-4">{t('footer.legal')}</h3>
            <ul className="space-y-2">
              <li>
                <Link to={language === 'fi' ? "/fi/privacy" : "/privacy"} className="text-primary/70 hover:text-primary transition-colors">
                  {t('footer.privacy')}
                </Link>
              </li>
              <li>
                <Link to={language === 'fi' ? "/fi/cookies" : "/cookies"} className="text-primary/70 hover:text-primary transition-colors">
                  {t('footer.cookies')}
                </Link>
              </li>
              <li>
                <Button 
                  variant="link"
                  onClick={openCookieSettings}
                  className="p-0 h-auto text-primary/70 hover:text-primary transition-colors"
                >
                  <Settings className="h-3 w-3 mr-1 inline" />
                  {language === 'fi' ? 'Evästeasetukset' : 'Cookie Settings'}
                </Button>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-200 pt-6 flex flex-col md:flex-row justify-between items-center">
          <div className="text-primary/70 mb-4 md:mb-0">{t('footer.copyright')}</div>
          <div className="flex space-x-4">
            <a href="#" className="text-primary/70 hover:text-primary transition-colors" aria-label="Twitter">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
              </svg>
            </a>
            <a href="#" className="text-primary/70 hover:text-primary transition-colors" aria-label="YouTube">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" />
              </svg>
            </a>
            <a href="#" className="text-primary/70 hover:text-primary transition-colors" aria-label="Facebook">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
              </svg>
            </a>
            <a href="#" className="text-primary/70 hover:text-primary transition-colors" aria-label="LinkedIn">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
