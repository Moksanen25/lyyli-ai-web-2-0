'use client';

import React from 'react';
import { MessageSquare, Clock, Shield, CheckCircle } from 'lucide-react';

const ValuePropositions: React.FC = () => {
  const valueProps = [
    {
      icon: <MessageSquare className="h-12 w-12 text-primary" />,
      capability: "Ammattimainen viestintä",
      feature: "AI-avusteinen sisällön luonti",
      benefit: "Kaikki viestit ovat yhtenäisiä ja ammattimaisia",
      details: [
        "Automaattinen viestien muotoilu ja tyylin yhdenmukaistus",
        "Organisaation äänen ja kulttuurin oppiminen",
        "Ammattimaiset viestipohjat ja mallit",
        "Reaaliaikainen kieliopin ja tyylin tarkistus"
      ]
    },
    {
      icon: <Clock className="h-12 w-12 text-primary" />,
      capability: "Aikaa säästetty",
      feature: "Automaattinen viestintä",
      benefit: "80% vähemmän aikaa viestintään",
      details: [
        "Rutiiniviestintän automatisointi",
        "Älykäs sisällön luonti ja ehdotukset",
        "Monikanavajakelun automatisointi",
        "Aikataulutettu viestintä ja muistutukset"
      ]
    },
    {
      icon: <Shield className="h-12 w-12 text-primary" />,
      capability: "Yritystason tietoturva",
      feature: "GDPR-yhteensopiva alusta",
      benefit: "Tietoturva ja yhteensopivuus taattu",
      details: [
        "EU-palvelimet ja GDPR-yhteensopivuus",
        "End-to-end salaus ja tietoturva",
        "ISO 27001 sertifiointi",
        "Säännölliset tietoturva-auditit"
      ]
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
            Miksi valita Lyyli?
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Lyyli muuttaa tapaa, jolla asiantuntijaorganisaatiot viestivät. Saavuta ammattimainen viestintä, säästä aikaa ja varmista tietoturva.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {valueProps.map((prop, index) => (
            <div key={index} className="bg-white rounded-2xl shadow-lg border border-gray-200 p-8 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              {/* Icon */}
              <div className="flex justify-center mb-6">
                <div className="bg-primary/10 p-4 rounded-full">
                  {prop.icon}
                </div>
              </div>

              {/* Content */}
              <div className="text-center mb-6">
                <h3 className="text-xl font-semibold text-primary mb-2">
                  {prop.capability}
                </h3>
                <p className="text-sm text-gray-500 mb-3">
                  {prop.feature}
                </p>
                <p className="text-lg font-medium text-gray-800">
                  {prop.benefit}
                </p>
              </div>

              {/* Details */}
              <div className="space-y-3">
                {prop.details.map((detail, detailIndex) => (
                  <div key={detailIndex} className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-gray-600">
                      {detail}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Stats */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="text-3xl font-bold text-primary mb-2">80%</div>
            <div className="text-sm text-gray-600">Aikaa säästetty</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-primary mb-2">100%</div>
            <div className="text-sm text-gray-600">GDPR-yhteensopiva</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-primary mb-2">24/7</div>
            <div className="text-sm text-gray-600">Tuki saatavilla</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-primary mb-2">EU</div>
            <div className="text-sm text-gray-600">Palvelimet</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ValuePropositions; 