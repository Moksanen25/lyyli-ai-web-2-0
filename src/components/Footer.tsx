import React from 'react';
import { useLanguage } from '@/hooks/useLanguage';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Settings, Calculator } from 'lucide-react';

const Footer: React.FC = () => {
  const { t, language } = useLanguage();
  const location = useLocation();
  
  // Function to determine if we're on the pricing page
  const isOnPricingPage = location.pathname.includes('/pricing');
  
  // Function to open cookie settings dialog
  const openCookieSettings = () => {
    // Create and dispatch a custom event that the CookieConsent component will listen for
    const event = new CustomEvent('openCookieSettings');
    window.dispatchEvent(event);
  };

  // Function to scroll to ROI calculator if on pricing page, otherwise navigate to pricing page with ROI calculator anchor
  const navigateToCalculator = () => {
    if (isOnPricingPage) {
      const calculator = document.getElementById('roi-calculator');
      if (calculator) {
        calculator.scrollIntoView({ behavior: 'smooth' });
      }
    }
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
            <Link
              to={isOnPricingPage ? "#roi-calculator" : "/full/pricing#roi-calculator"}
              onClick={navigateToCalculator}
              className="flex items-center text-primary hover:text-primary/80 transition-colors mb-2"
            >
              <Calculator className="h-4 w-4 mr-2" />
              {language === 'fi' ? 'ROI Laskuri' : 'ROI Calculator'}
            </Link>
          </div>
          
          {/* Product links */}
          <div>
            <h3 className="font-bold mb-4">{t('footer.product')}</h3>
            <ul className="space-y-2">
              <li>
                <Link to={language === 'fi' ? "/fi/full/features" : "/full/features"} className="text-primary/70 hover:text-primary transition-colors">
                  {t('footer.features')}
                </Link>
              </li>
              <li>
                <Link to={language === 'fi' ? "/fi/full/pricing" : "/full/pricing"} className="text-primary/70 hover:text-primary transition-colors">
                  {t('footer.pricing')}
                </Link>
              </li>
              <li>
                <Link to={language === 'fi' ? "/fi/full/faq" : "/full/faq"} className="text-primary/70 hover:text-primary transition-colors">
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
                <Link to={language === 'fi' ? "/fi/full/about" : "/full/about"} className="text-primary/70 hover:text-primary transition-colors">
                  {t('footer.about')}
                </Link>
              </li>
              <li>
                <Link to={language === 'fi' ? "/fi/full/blog" : "/full/blog"} className="text-primary/70 hover:text-primary transition-colors">
                  {t('footer.blog')}
                </Link>
              </li>
              <li>
                <Link to={language === 'fi' ? "/fi/full/contact" : "/full/contact"} className="text-primary/70 hover:text-primary transition-colors">
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
        
        <div className="border-t border-gray-200 pt-6 flex justify-center">
          <div className="text-primary/70">{t('footer.copyright')}</div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
