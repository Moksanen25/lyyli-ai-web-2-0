
import React from 'react';

const ComplianceBadges: React.FC = () => {
  const badges = [
    { name: "ISO 27001", image: "https://img.shields.io/badge/ISO-27001-blue" },
    { name: "GDPR Compliant", image: "https://img.shields.io/badge/GDPR-Compliant-green" },
    { name: "SOC2 Type II", image: "https://img.shields.io/badge/SOC2-TypeII-purple" },
    { name: "HIPAA Compliant", image: "https://img.shields.io/badge/HIPAA-Compliant-red" },
    { name: "99.9% Uptime SLA", image: "https://img.shields.io/badge/99.9%25-Uptime_SLA-blue" }
  ];

  return (
    <section className="py-6 bg-white border-t border-gray-100">
      <div className="container mx-auto px-4">
        <div className="text-center mb-4">
          <p className="text-sm text-muted-foreground">Enterprise-Grade Security & Compliance</p>
        </div>
        <div className="flex flex-wrap justify-center items-center gap-6">
          {badges.map((badge, index) => (
            <div key={index} className="flex flex-col items-center">
              <img src={badge.image} alt={badge.name} className="h-6" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ComplianceBadges;
