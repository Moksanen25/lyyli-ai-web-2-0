'use client';

import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Scale, Stethoscope, Briefcase, Target } from 'lucide-react';
import Link from 'next/link';

const UseCases: React.FC = () => {
  const [activeTab, setActiveTab] = useState(0);

  const useCases = [
    {
      id: 0,
      title: "Konsultointi",
      icon: <Briefcase className="h-8 w-8" />,
      description: "Konsultointiyrityksille tehty ratkaisu",
      benefits: [
        "Asiakasviestintän automatisointi",
        "Projektipäivitysten hallinta",
        "Tiimiyhteistyön parantaminen",
        "Ammattimainen brändi-ilme"
      ],
      example: "Konsultointitalo säästi 70% aikaa viestintään ja paransi asiakastyytyväisyyttä 40%."
    },
    {
      id: 1,
      title: "Lakitoimistot",
      icon: <Scale className="h-8 w-8" />,
      description: "Lakialan erityistarpeet huomioiden",
      benefits: [
        "Asiakasviestintän standardisointi",
        "Lakiasiakirjojen viestintä",
        "Tietosuoja ja salassapito",
        "Ammattimainen viestintä"
      ],
      example: "Lakitoimisto automatisoiti asiakasviestintänsä ja paransi vastausaikoja 80%."
    },
    {
      id: 2,
      title: "Terveydenhuolto",
      icon: <Stethoscope className="h-8 w-8" />,
      description: "Terveydenhuoltoalan vaatimukset täyttävä",
      benefits: [
        "Potilasviestintän hallinta",
        "Henkilökuntaviestintä",
        "Tietoturva ja yhteensopivuus",
        "Kriittisen tiedon välitys"
      ],
      example: "Sairaala paransi potilasviestintänsä ja vähensi virheitä 60%."
    },
    {
      id: 3,
      title: "Teknologiayritykset",
      icon: <Target className="h-8 w-8" />,
      description: "Nopeasti kasvaville tech-yrityksille",
      benefits: [
        "Tuotekehitystiimin viestintä",
        "Asiakastuen automatisointi",
        "Markkinointiviestintä",
        "Skalautuva ratkaisu"
      ],
      example: "Tech-startup kasvoi 300% ilman viestintähenkilöstön lisäystä."
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
            Käyttötapaukset
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Lyyli sopii erinomaisesti eri alojen asiantuntijaorganisaatioille. Tutustu miten eri toimialat hyötyvät tekoälyavusteisesta viestinnästä.
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {useCases.map((useCase, index) => (
            <button
              key={useCase.id}
              onClick={() => setActiveTab(index)}
              className={`flex items-center space-x-2 px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                activeTab === index
                  ? 'bg-primary text-white shadow-lg'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {useCase.icon}
              <span>{useCase.title}</span>
            </button>
          ))}
        </div>

        {/* Active Tab Content */}
        <div className="bg-white rounded-2xl shadow-xl border border-gray-200 overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            {/* Left Side - Content */}
            <div className="p-8">
              <div className="space-y-6">
                <div>
                  <h3 className="text-2xl font-bold text-primary mb-2">
                    {useCases[activeTab].title}
                  </h3>
                  <p className="text-gray-600">
                    {useCases[activeTab].description}
                  </p>
                </div>

                <div>
                  <h4 className="text-lg font-semibold text-primary mb-4">
                    Avainhyödyt
                  </h4>
                  <div className="space-y-3">
                    {useCases[activeTab].benefits.map((benefit, index) => (
                      <div key={index} className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-primary rounded-full"></div>
                        <span className="text-gray-700">{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-primary/5 rounded-lg p-4">
                  <h4 className="font-semibold text-primary mb-2">Esimerkki</h4>
                  <p className="text-gray-700 italic">
                    &ldquo;{useCases[activeTab].example}&rdquo;
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Button 
                    className="bg-primary text-white hover:bg-primary/90"
                    asChild
                  >
                    <Link href="/contact">
                      Pyydä tarjous
                    </Link>
                  </Button>
                  <Button 
                    variant="outline"
                    className="border-primary text-primary hover:bg-primary hover:text-white"
                    asChild
                  >
                    <Link href="/features">
                      Lue lisää
                    </Link>
                  </Button>
                </div>
              </div>
            </div>

            {/* Right Side - Visual */}
            <div className="bg-gradient-to-br from-primary/5 to-accent/10 p-8 flex items-center justify-center">
              <div className="text-center">
                <div className="w-32 h-32 bg-white rounded-full flex items-center justify-center shadow-lg mb-6">
                  <div className="text-primary">
                    {useCases[activeTab].icon}
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-primary mb-2">
                  {useCases[activeTab].title}
                </h3>
                <p className="text-gray-600 text-sm">
                  Asiantuntijaorganisaatio
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Industry Stats */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="text-3xl font-bold text-primary mb-2">70%</div>
            <div className="text-sm text-gray-600">Aikaa säästetty</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-primary mb-2">40%</div>
            <div className="text-sm text-gray-600">Asiakastyytyväisyys parantunut</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-primary mb-2">80%</div>
            <div className="text-sm text-gray-600">Vastausajat nopeutuneet</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-primary mb-2">60%</div>
            <div className="text-sm text-gray-600">Virheiden vähentyminen</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UseCases; 