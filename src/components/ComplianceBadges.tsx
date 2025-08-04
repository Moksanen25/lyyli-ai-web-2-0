'use client';

import React from 'react';
import { Shield, Clock, Lock, CheckCircle } from 'lucide-react';
import { useLanguage } from '@/hooks/useLanguage';

interface ComplianceBadgesProps {
  title?: string;
  description?: string;
  className?: string;
}

const ComplianceBadges: React.FC<ComplianceBadgesProps> = ({ title, description, className = "" }) => {
  const { language, t } = useLanguage();

  const badges = [
    {
      name: "GDPR Compliant",
      image: "https://img.shields.io/badge/GDPR-Compliant-green",
      icon: <Shield className="h-5 w-5" />,
      description: language === 'fi' ? "Palvelumme noudattaa EU:n yleistä tietosuoja-asetusta (GDPR)." : "Our service complies with the EU General Data Protection Regulation (GDPR).",
      color: 'green'
    }, {
      name: t('compliance.badges.uptime') || "99.9% Uptime SLA",
      image: "https://img.shields.io/badge/Uptime-99.9%25-brightgreen",
      icon: <Clock className="h-5 w-5" />,
      description: language === 'fi' ? "Lupaamme 99.9% käytettävyyden kaikille asiakkaillemme." : "We guarantee 99.9% uptime for all our customers.",
      color: 'brightgreen'
    }, {
      name: t('compliance.badges.security') || "Enterprise Security",
      image: "https://img.shields.io/badge/Security-Enterprise-blue",
      icon: <Lock className="h-5 w-5" />,
      description: language === 'fi' ? "Yritystason tietoturva ja salaus kaikille tiedoille." : "Enterprise-grade security and encryption for all data.",
      color: 'blue'
    }, {
      name: t('compliance.badges.certified') || "ISO 27001 Certified",
      image: "https://img.shields.io/badge/ISO-27001-orange",
      icon: <CheckCircle className="h-5 w-5" />,
      description: language === 'fi' ? "ISO 27001 sertifioitu tietoturvajärjestelmä." : "ISO 27001 certified information security management system.",
      color: 'orange'
    }
  ];

  return (
    <section className={`py-16 bg-gray-50 ${className}`}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {title || t('compliance.title') || 'Trust & Compliance'}
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            {description || t('compliance.subtitle') || 'Built with enterprise-grade security and compliance standards'}
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {badges.map((badge, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="flex items-center gap-3 mb-4">
                <div className="text-blue-600">
                  {badge.icon}
                </div>
                <h3 className="text-lg font-semibold text-gray-900">{badge.name}</h3>
              </div>
              <p className="text-gray-600 text-sm mb-4">{badge.description}</p>
              <img 
                src={badge.image} 
                alt={badge.name}
                className="w-full h-8 object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ComplianceBadges;