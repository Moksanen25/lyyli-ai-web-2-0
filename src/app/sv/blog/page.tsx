import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Blogg - Lyyli AI',
  description: 'Insikter, fallstudier och nyheter från Lyyli AI.',
};

export default function BlogPageSv() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            Blogg &{' '}
            <span className="text-blue-600">insikter</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Få insikter om AI-kommunikation, expertorganisationer och framtidens 
            kommunikationsteknologier.
          </p>
        </div>
      </section>

      {/* Featured Article */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="grid lg:grid-cols-2">
              <div className="relative">
                <img
                  src="https://images.unsplash.com/photo-1485827404703-89b55fcc595e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                  alt="AI-kommunikation"
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    Utvald
                  </span>
                </div>
              </div>
              <div className="p-8 lg:p-12">
                <div className="flex items-center text-sm text-gray-500 mb-4">
                  <span>AI & Kommunikation</span>
                  <span className="mx-2">•</span>
                  <span>5 min läsning</span>
                  <span className="mx-2">•</span>
                  <span>15 mars 2024</span>
                </div>
                <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">
                  Framtidens kommunikation: Hur AI revolutionerar expertorganisationer
                </h2>
                <p className="text-gray-600 mb-6">
                  Upptäck hur AI-teknologi förändrar hur expertorganisationer kommunicerar 
                  och samarbetar i dagens snabbt föränderliga värld.
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-gray-200 rounded-full mr-3"></div>
                    <div>
                      <div className="font-semibold text-gray-900">Anna Andersson</div>
                      <div className="text-sm text-gray-500">VD & Grundare</div>
                    </div>
                  </div>
                  <Link
                    href="/sv/blog/framtidens-kommunikation"
                    className="bg-blue-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                  >
                    Läs mer
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Filter and Search */}
      <section className="py-10 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div className="flex flex-wrap gap-2">
              <button className="bg-blue-600 text-white px-4 py-2 rounded-lg font-semibold">
                Alla
              </button>
              <button className="bg-white text-gray-700 px-4 py-2 rounded-lg font-semibold hover:bg-gray-50">
                AI & Teknologi
              </button>
              <button className="bg-white text-gray-700 px-4 py-2 rounded-lg font-semibold hover:bg-gray-50">
                Fallstudier
              </button>
              <button className="bg-white text-gray-700 px-4 py-2 rounded-lg font-semibold hover:bg-gray-50">
                Nyheter
              </button>
              <button className="bg-white text-gray-700 px-4 py-2 rounded-lg font-semibold hover:bg-gray-50">
                Tips & Tricks
              </button>
            </div>
            <div className="relative">
              <input
                type="text"
                placeholder="Sök artiklar..."
                className="w-full md:w-64 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              <svg className="absolute right-3 top-2.5 w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
          </div>
        </div>
      </section>

      {/* Article Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Article 1 */}
            <article className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <div className="relative">
                <img
                  src="https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                  alt="Team collaboration"
                  className="w-full h-48 object-cover"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-green-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    Fallstudie
                  </span>
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center text-sm text-gray-500 mb-3">
                  <span>Fallstudier</span>
                  <span className="mx-2">•</span>
                  <span>3 min läsning</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Hur TechCorp förbättrade sin kommunikation med 40%
                </h3>
                <p className="text-gray-600 mb-4">
                  Se hur ett ledande techföretag använde Lyyli AI för att förbättra 
                  sin interna kommunikation och öka produktiviteten.
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <div className="w-8 h-8 bg-gray-200 rounded-full mr-2"></div>
                    <span className="text-sm text-gray-500">Erik Eriksson</span>
                  </div>
                  <span className="text-sm text-gray-500">10 mars 2024</span>
                </div>
              </div>
            </article>

            {/* Article 2 */}
            <article className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <div className="relative">
                <img
                  src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                  alt="AI technology"
                  className="w-full h-48 object-cover"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-purple-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    Teknologi
                  </span>
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center text-sm text-gray-500 mb-3">
                  <span>AI & Teknologi</span>
                  <span className="mx-2">•</span>
                  <span>7 min läsning</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Maskininlärning i kommunikation: Vad du behöver veta
                </h3>
                <p className="text-gray-600 mb-4">
                  En djupdykning i hur maskininlärning förändrar kommunikation 
                  och vad det betyder för framtiden.
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <div className="w-8 h-8 bg-gray-200 rounded-full mr-2"></div>
                    <span className="text-sm text-gray-500">Maria Nilsson</span>
                  </div>
                  <span className="text-sm text-gray-500">8 mars 2024</span>
                </div>
              </div>
            </article>

            {/* Article 3 */}
            <article className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <div className="relative">
                <img
                  src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                  alt="Business meeting"
                  className="w-full h-48 object-cover"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-orange-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    Tips
                  </span>
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center text-sm text-gray-500 mb-3">
                  <span>Tips & Tricks</span>
                  <span className="mx-2">•</span>
                  <span>4 min läsning</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  5 sätt att förbättra din organisations kommunikation
                </h3>
                <p className="text-gray-600 mb-4">
                  Praktiska tips och strategier för att förbättra kommunikation 
                  och samarbete i din organisation.
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <div className="w-8 h-8 bg-gray-200 rounded-full mr-2"></div>
                    <span className="text-sm text-gray-500">Anna Andersson</span>
                  </div>
                  <span className="text-sm text-gray-500">5 mars 2024</span>
                </div>
              </div>
            </article>

            {/* Article 4 */}
            <article className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <div className="relative">
                <img
                  src="https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                  alt="Data analytics"
                  className="w-full h-48 object-cover"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    Analys
                  </span>
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center text-sm text-gray-500 mb-3">
                  <span>Analys</span>
                  <span className="mx-2">•</span>
                  <span>6 min läsning</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Kommunikationstrender 2024: Vad framtiden bär
                </h3>
                <p className="text-gray-600 mb-4">
                  En analys av de viktigaste trenderna inom kommunikation 
                  och hur de påverkar organisationer.
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <div className="w-8 h-8 bg-gray-200 rounded-full mr-2"></div>
                    <span className="text-sm text-gray-500">Erik Eriksson</span>
                  </div>
                  <span className="text-sm text-gray-500">1 mars 2024</span>
                </div>
              </div>
            </article>

            {/* Article 5 */}
            <article className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <div className="relative">
                <img
                  src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                  alt="Productivity"
                  className="w-full h-48 object-cover"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-green-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    Produktivitet
                  </span>
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center text-sm text-gray-500 mb-3">
                  <span>Produktivitet</span>
                  <span className="mx-2">•</span>
                  <span>5 min läsning</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Automatisera din kommunikation: En komplett guide
                </h3>
                <p className="text-gray-600 mb-4">
                  Lär dig hur du kan automatisera kommunikationsprocesser 
                  och spara tid för ditt team.
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <div className="w-8 h-8 bg-gray-200 rounded-full mr-2"></div>
                    <span className="text-sm text-gray-500">Maria Nilsson</span>
                  </div>
                  <span className="text-sm text-gray-500">28 februari 2024</span>
                </div>
              </div>
            </article>

            {/* Article 6 */}
            <article className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <div className="relative">
                <img
                  src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                  alt="Customer success"
                  className="w-full h-48 object-cover"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-purple-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    Kundframgång
                  </span>
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center text-sm text-gray-500 mb-3">
                  <span>Kundframgång</span>
                  <span className="mx-2">•</span>
                  <span>4 min läsning</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Förbättra kundkommunikation med AI
                </h3>
                <p className="text-gray-600 mb-4">
                  Hur AI kan hjälpa dig att leverera bättre kundupplevelser 
                  genom förbättrad kommunikation.
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <div className="w-8 h-8 bg-gray-200 rounded-full mr-2"></div>
                    <span className="text-sm text-gray-500">Anna Andersson</span>
                  </div>
                  <span className="text-sm text-gray-500">25 februari 2024</span>
                </div>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-blue-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Få de senaste insikterna
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Prenumerera på vårt nyhetsbrev och få de senaste artiklarna 
            och insikterna direkt i din inkorg.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Din e-postadress"
              className="flex-1 px-4 py-3 rounded-lg focus:ring-2 focus:ring-white focus:border-transparent"
            />
            <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              Prenumerera
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
