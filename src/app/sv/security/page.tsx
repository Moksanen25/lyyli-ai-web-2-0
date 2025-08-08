import React from 'react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Säkerhet - Lyyli AI',
  description: 'Lär dig mer om Lyyli AIs säkerhetsåtgärder och hur vi skyddar din data.',
};

export default function SecurityPageSv() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            Säkerhet &{' '}
            <span className="text-blue-600">integritet</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Din säkerhet är vår högsta prioritet. Vi använder branschledande säkerhetsåtgärder 
            för att skydda din data och kommunikation.
          </p>
        </div>
      </section>

      {/* Security Overview */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Säkerhet i fokus
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Lyyli AI är byggd med säkerhet som grund. Vi förstår att expertorganisationer 
                hanterar känslig information och vi har implementerat robusta säkerhetsåtgärder 
                för att skydda din data.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                Vår plattform uppfyller de högsta säkerhetsstandarderna och vi genomgår 
                regelbundna säkerhetsaudits för att säkerställa att vi alltid levererar 
                den bästa skyddsnivån.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-2">99.9%</div>
                  <div className="text-gray-600">Upptid</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-2">256-bit</div>
                  <div className="text-gray-600">Kryptering</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                alt="Säkerhet"
                className="w-full h-auto rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Security Features */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Våra säkerhetsfunktioner
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Avancerade säkerhetsåtgärder som skyddar din data och kommunikation.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">End-to-end kryptering</h3>
              <p className="text-gray-600">
                All kommunikation krypteras från slutpunkt till slutpunkt med 
                branschledande krypteringsalgoritmer.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">GDPR-efterlevnad</h3>
              <p className="text-gray-600">
                Vi följer GDPR och andra dataskyddsförordningar för att säkerställa 
                att din data hanteras korrekt.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">24/7 övervakning</h3>
              <p className="text-gray-600">
                Våra system övervakas dygnet runt för att upptäcka och 
                hantera säkerhetshot omedelbart.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.879 16.121A3 3 0 1012.015 11L11 14H9c0 .768.293 1.536.879 2.121z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Brandväggar & IDS</h3>
              <p className="text-gray-600">
                Avancerade brandväggar och intrångsdetekteringssystem 
                skyddar mot cyberattacker.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Åtkomstkontroll</h3>
              <p className="text-gray-600">
                Granulär åtkomstkontroll säkerställer att endast behöriga 
                användare kan komma åt känslig data.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Säkerhetskopiering</h3>
              <p className="text-gray-600">
                Automatiska säkerhetskopieringar säkerställer att din data 
                alltid är säker och återställningsbar.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Compliance Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Certifieringar & efterlevnad
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Vi uppfyller de högsta säkerhets- och efterlevnadsstandarderna.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">ISO 27001</h3>
              <p className="text-gray-600">Informationssäkerhetsledning</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">GDPR</h3>
              <p className="text-gray-600">Dataskyddsförordning</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">SOC 2</h3>
              <p className="text-gray-600">Säkerhetskontroller</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">HIPAA</h3>
              <p className="text-gray-600">Hälsodataskydd</p>
            </div>
          </div>
        </div>
      </section>

      {/* Security Process */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Vår säkerhetsprocess
            </h2>
            <p className="text-xl text-gray-600">
              Hur vi säkerställer att din data alltid är säker.
            </p>
          </div>

          <div className="space-y-12">
            <div className="flex items-center">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-xl">
                1
              </div>
              <div className="ml-8">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Kryptering</h3>
                <p className="text-gray-600">
                  All data krypteras både i vila och under överföring med 
                  branschledande krypteringsalgoritmer.
                </p>
              </div>
            </div>

            <div className="flex items-center">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-xl">
                2
              </div>
              <div className="ml-8">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Övervakning</h3>
                <p className="text-gray-600">
                  Kontinuerlig övervakning av system och nätverk för att 
                  upptäcka och hantera säkerhetshot.
                </p>
              </div>
            </div>

            <div className="flex items-center">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-xl">
                3
              </div>
              <div className="ml-8">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Testning</h3>
                <p className="text-gray-600">
                  Regelbundna säkerhetstester och penetrationstester för 
                  att identifiera och åtgärda svagheter.
                </p>
              </div>
            </div>

            <div className="flex items-center">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-xl">
                4
              </div>
              <div className="ml-8">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Uppdateringar</h3>
                <p className="text-gray-600">
                  Automatiska säkerhetsuppdateringar och patch-hantering 
                  för att hålla systemen aktuella.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-blue-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Redo att komma igång?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Börja använda Lyyli AI idag och upplev säker, 
            AI-driven kommunikation för din organisation.
          </p>
          <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
            Kom igång gratis
          </button>
        </div>
      </section>
    </div>
  );
}
