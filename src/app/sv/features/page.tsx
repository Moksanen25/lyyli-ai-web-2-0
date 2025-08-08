import React from 'react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Funktioner - Lyyli AI',
  description: 'Utforska Lyyli AIs kraftfulla funktioner för expertkommunikation och organisationseffektivitet.',
};

export default function FeaturesPageSv() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
                Kraftfulla funktioner för{' '}
                <span className="text-blue-600">expertkommunikation</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Lyyli AI erbjuder avancerade verktyg för att förbättra kommunikation, 
                automatisera processer och öka produktiviteten i din organisation.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                  Kom igång
                </button>
                <button className="border border-blue-600 text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors">
                  Se demo
                </button>
              </div>
            </div>
            <div className="relative">
              <img
                src="/images/hero/features-hero.png"
                alt="Lyyli AI funktioner"
                className="w-full h-auto rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Allt du behöver för framgångsrik kommunikation
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Våra funktioner är designade för att hantera de komplexa utmaningarna 
              som expertorganisationer möter dagligen.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Automatisk formatering</h3>
              <p className="text-gray-600">
                AI-formaterar alla meddelanden enligt din organisations riktlinjer och stil.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Proaktiv kommunikation</h3>
              <p className="text-gray-600">
                Föreslår och schemalägger kommunikation baserat på viktiga händelser och deadlines.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Kvalitetskontroll</h3>
              <p className="text-gray-600">
                Säkerställer att all kommunikation uppfyller högsta kvalitetsstandarder.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-blue-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Redo att förbättra din kommunikation?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Börja använda Lyyli AI idag och upplev skillnaden i din organisations kommunikation.
          </p>
          <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
            Kom igång gratis
          </button>
        </div>
      </section>
    </div>
  );
}
