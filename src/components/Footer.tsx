'use client';

import React from 'react';
import Link from 'next/link';
import { useLanguage } from '@/hooks/useLanguage';

const Footer: React.FC = () => {
  const { language, t } = useLanguage();

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Logo and description */}
          <div>
            <Link href={language === 'fi' ? "/fi" : "/"} className="inline-block mb-4">
              <img alt="Lyyli.ai" className="h-10 mb-3" src="/logo.svg" />
            </Link>
            <p className="text-primary/70 mb-4">
              {t('footer.description') || 'AI-powered customer segmentation platform for businesses'}
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <span className="sr-only">Twitter</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <span className="sr-only">LinkedIn</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Product */}
          <div>
            <h3 className="text-lg font-semibold mb-4">
              {t('footer.product') || 'Product'}
            </h3>
            <ul className="space-y-2">
              <li>
                <Link href={language === 'fi' ? "/fi/features" : "/features"} className="text-gray-400 hover:text-white transition-colors">
                  {t('footer.features') || 'Features'}
                </Link>
              </li>
              <li>
                <Link href={language === 'fi' ? "/fi/pricing" : "/pricing"} className="text-gray-400 hover:text-white transition-colors">
                  {t('footer.pricing') || 'Pricing'}
                </Link>
              </li>
              <li>
                <Link href={language === 'fi' ? "/fi/about" : "/about"} className="text-gray-400 hover:text-white transition-colors">
                  {t('footer.about') || 'About'}
                </Link>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-lg font-semibold mb-4">
              {t('footer.support') || 'Support'}
            </h3>
            <ul className="space-y-2">
              <li>
                <Link href={language === 'fi' ? "/fi/help" : "/help"} className="text-gray-400 hover:text-white transition-colors">
                  {t('footer.help') || 'Help Center'}
                </Link>
              </li>
              <li>
                <Link href={language === 'fi' ? "/fi/contact" : "/contact"} className="text-gray-400 hover:text-white transition-colors">
                  {t('footer.contact') || 'Contact'}
                </Link>
              </li>
              <li>
                <Link href={language === 'fi' ? "/fi/privacy" : "/privacy"} className="text-gray-400 hover:text-white transition-colors">
                  {t('footer.privacy') || 'Privacy Policy'}
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-lg font-semibold mb-4">
              {t('footer.company') || 'Company'}
            </h3>
            <ul className="space-y-2">
              <li>
                <Link href={language === 'fi' ? "/fi/blog" : "/blog"} className="text-gray-400 hover:text-white transition-colors">
                  {t('footer.blog') || 'Blog'}
                </Link>
              </li>
              <li>
                <Link href={language === 'fi' ? "/fi/careers" : "/careers"} className="text-gray-400 hover:text-white transition-colors">
                  {t('footer.careers') || 'Careers'}
                </Link>
              </li>
              <li>
                <Link href={language === 'fi' ? "/fi/terms" : "/terms"} className="text-gray-400 hover:text-white transition-colors">
                  {t('footer.terms') || 'Terms of Service'}
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            © {currentYear} Lyyli AI. {t('footer.rights') || 'All rights reserved.'}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
