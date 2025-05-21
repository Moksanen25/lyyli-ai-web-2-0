
import React from "react";
import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { useLanguage } from "@/hooks/useLanguage";
import { Button } from "@/components/ui/button";
import { ImageWithFallback } from "@/components/ui/image-with-fallback";
import { ArrowLeft, Home, Search } from "lucide-react";

const NotFound: React.FC = () => {
  const location = useLocation();
  const { language, t } = useLanguage();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  const homePath = language === 'fi' ? "/fi/full" : "/full";

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-background to-primary/5 px-4 py-12">
      <div className="w-full max-w-4xl flex flex-col items-center text-center">
        <h1 className="text-6xl md:text-8xl font-bold text-primary mb-2">404</h1>
        <h2 className="text-2xl md:text-3xl font-semibold mb-6">
          {t('common.errorTitle', { fallback: 'Page not found' })}
        </h2>
        
        <div className="w-full max-w-md mb-8">
          <ImageWithFallback
            src="/lovable-uploads/a20b0413-a763-4a28-94c5-15ade2819166.png" 
            alt="Lost person illustration"
            className="h-64 w-auto mx-auto"
          />
        </div>
        
        <p className="text-muted-foreground text-lg max-w-xl mb-8">
          {t('common.errorMessage', { fallback: "The page you're looking for doesn't exist or has been moved. Don't worry, we can help you find your way back." })}
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 mb-12">
          <Button asChild className="flex gap-2">
            <Link to={homePath}>
              <Home size={18} /> 
              {t('common.back', { fallback: 'Back to Home' })}
            </Link>
          </Button>
          
          <Button asChild variant="outline" className="flex gap-2">
            <Link to={language === 'fi' ? "/fi/full/contact" : "/full/contact"}>
              <Search size={18} />
              {t('common.contactUs', { fallback: 'Contact Us' })}
            </Link>
          </Button>
          
          <Button 
            variant="ghost" 
            className="flex gap-2"
            onClick={() => window.history.back()}
          >
            <ArrowLeft size={18} />
            {t('common.back', { fallback: 'Go Back' })}
          </Button>
        </div>
        
        <div className="border-t border-border w-full max-w-lg pt-8">
          <h3 className="text-lg font-medium mb-4">
            {t('common.tryAgain', { fallback: 'Looking for something specific?' })}
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-left">
            <Link 
              to={language === 'fi' ? "/fi/full/features" : "/full/features"} 
              className="text-primary hover:underline flex items-center gap-1"
            >
              {t('nav.features', { fallback: 'Features' })}
            </Link>
            <Link 
              to={language === 'fi' ? "/fi/full/pricing" : "/full/pricing"} 
              className="text-primary hover:underline flex items-center gap-1"
            >
              {t('nav.pricing', { fallback: 'Pricing' })}
            </Link>
            <Link 
              to={language === 'fi' ? "/fi/full/blog" : "/full/blog"} 
              className="text-primary hover:underline flex items-center gap-1"
            >
              {t('nav.blog', { fallback: 'Blog' })}
            </Link>
            <Link 
              to={language === 'fi' ? "/fi/full/about" : "/full/about"} 
              className="text-primary hover:underline flex items-center gap-1"
            >
              {t('nav.about', { fallback: 'About' })}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
