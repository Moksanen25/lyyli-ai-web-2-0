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
        <div className="grid md:grid-cols-3 gap-8">
          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">
              Yhteystiedot
            </h3>
            <div className="space-y-2 text-gray-300">
              <p>{t('footer.contact.address')}</p>
              <p>{t('footer.contact.phone')}</p>
              <p>{t('footer.contact.email')}</p>
            </div>
          </div>

          {/* Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">
              Linkit
            </h3>
            <ul className="space-y-2">
              <li>
                <Link href={language === 'fi' ? "/fi/about" : "/about"} className="text-gray-300 hover:text-white transition-colors">
                  {t('footer.links.about')}
                </Link>
              </li>
              <li>
                <Link href={language === 'fi' ? "/fi/careers" : "/careers"} className="text-gray-300 hover:text-white transition-colors">
                  {t('footer.links.careers')}
                </Link>
              </li>
              <li>
                <Link href={language === 'fi' ? "/fi/blog" : "/blog"} className="text-gray-300 hover:text-white transition-colors">
                  {t('footer.links.blog')}
                </Link>
              </li>
              <li>
                <Link href={language === 'fi' ? "/fi/contact" : "/contact"} className="text-gray-300 hover:text-white transition-colors">
                  {t('footer.links.contact')}
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">
              Oikeudellinen
            </h3>
            <ul className="space-y-2">
              <li>
                <Link href={language === 'fi' ? "/fi/privacy" : "/privacy"} className="text-gray-300 hover:text-white transition-colors">
                  {t('footer.legal.privacy')}
                </Link>
              </li>
              <li>
                <Link href={language === 'fi' ? "/fi/terms" : "/terms"} className="text-gray-300 hover:text-white transition-colors">
                  {t('footer.legal.terms')}
                </Link>
              </li>
              <li>
                <Link href={language === 'fi' ? "/fi/cookies" : "/cookies"} className="text-gray-300 hover:text-white transition-colors">
                  {t('footer.legal.cookies')}
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            {t('footer.copyright')}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
