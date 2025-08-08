import React from 'react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Om oss - Lyyli AI',
  description: 'Lär dig mer om Lyyli AI, vårt team och vår mission att revolutionera expertkommunikation.',
};

export default function AboutPageSv() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            Om{' '}
            <span className="text-blue-600">Lyyli AI</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Vi revolutionerar hur expertorganisationer kommunicerar genom 
            AI-driven teknologi och förståelse för komplexa behov.
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Vårt uppdrag
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Lyyli AI grundades med en enkel men kraftfull vision: att göra expertkommunikation 
                mer effektiv, professionell och tillgänglig för alla organisationer.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                Vi förstår att expertorganisationer har unika utmaningar när det gäller kommunikation. 
                Vår AI-plattform är designad specifikt för att hantera dessa komplexiteter och 
                leverera resultat som överträffar förväntningarna.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-2">500+</div>
                  <div className="text-gray-600">Nöjda kunder</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-2">10k+</div>
                  <div className="text-gray-600">Meddelanden formaterade</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <img
                src="/images/about/team.jpg"
                alt="Lyyli AI team"
                className="w-full h-auto rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Våra värderingar
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              De principer som driver oss framåt och formar allt vi gör.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Kvalitet</h3>
              <p className="text-gray-600">
                Vi levererar alltid högsta kvalitet i allt vi gör, från vår teknologi 
                till vår kundservice.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Innovation</h3>
              <p className="text-gray-600">
                Vi ständigt utvecklar vår teknologi för att möta de allt mer 
                komplexa behoven hos våra kunder.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Samarbete</h3>
              <p className="text-gray-600">
                Vi tror på kraften i samarbete och bygger långsiktiga partnerskap 
                med våra kunder.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Vårt team
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Möt de briljanta människorna bakom Lyyli AI som gör allt möjligt.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-32 h-32 bg-gray-200 rounded-full mx-auto mb-6"></div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Anna Andersson</h3>
              <p className="text-blue-600 mb-4">VD & Grundare</p>
              <p className="text-gray-600">
                15 års erfarenhet inom AI och kommunikation. Tidigare på Google och Microsoft.
              </p>
            </div>

            <div className="text-center">
              <div className="w-32 h-32 bg-gray-200 rounded-full mx-auto mb-6"></div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Erik Eriksson</h3>
              <p className="text-blue-600 mb-4">CTO</p>
              <p className="text-gray-600">
                Expert inom maskininlärning och naturlig språkbehandling. PhD från KTH.
              </p>
            </div>

            <div className="text-center">
              <div className="w-32 h-32 bg-gray-200 rounded-full mx-auto mb-6"></div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Maria Nilsson</h3>
              <p className="text-blue-600 mb-4">Head of Product</p>
              <p className="text-gray-600">
                Produktstrateg med fokus på användarupplevelse och marknadsbehov.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Vår resa
            </h2>
            <p className="text-xl text-gray-600">
              Från idé till verklighet - vår utveckling genom åren.
            </p>
          </div>

          <div className="space-y-12">
            <div className="flex items-center">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-xl">
                2020
              </div>
              <div className="ml-8">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Grundande</h3>
                <p className="text-gray-600">
                  Lyyli AI grundades med visionen att revolutionera expertkommunikation.
                </p>
              </div>
            </div>

            <div className="flex items-center">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-xl">
                2021
              </div>
              <div className="ml-8">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Första kunden</h3>
                <p className="text-gray-600">
                  Vi lanserade vår första produkt och fick vår första betalande kund.
                </p>
              </div>
            </div>

            <div className="flex items-center">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-xl">
                2022
              </div>
              <div className="ml-8">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Tillväxt</h3>
                <p className="text-gray-600">
                  Vi växte till 50 kunder och lanserade nya funktioner.
                </p>
              </div>
            </div>

            <div className="flex items-center">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-xl">
                2023
              </div>
              <div className="ml-8">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Expansion</h3>
                <p className="text-gray-600">
                  Vi expanderade internationellt och nådde 500+ kunder.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
