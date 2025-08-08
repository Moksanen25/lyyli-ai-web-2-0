import React from 'react'
import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Uutiset ja artikkelit - Lyyli AI',
  description: 'Näkemyksiä, tapaustutkimuksia ja uutisia Lyyliltä.',
}

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-6xl mx-auto">
          {/* Page Title */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-primary mb-4">
              Uutiset ja artikkelit
            </h1>
            <p className="text-lg text-gray-600">
              Näkemyksiä, tapaustutkimuksia ja uutisia Lyyliltä
            </p>
          </div>

          {/* Featured Article */}
          <div className="mb-16">
            <div className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm">
              <div className="relative">
                <img
                  src="/images/blog/featured-article.jpg"
                  alt="Featured article"
                  className="w-full h-64 object-cover"
                />
                <div className="absolute top-4 left-4 flex space-x-2">
                  <span className="bg-white/90 text-gray-700 px-3 py-1 rounded-full text-sm font-medium">
                    Blogi
                  </span>
                  <span className="bg-white/90 text-gray-700 px-3 py-1 rounded-full text-sm font-medium">
                    Johtajuus
                  </span>
                  <span className="bg-primary text-white px-3 py-1 rounded-full text-sm font-medium">
                    Käännetty
                  </span>
                </div>
              </div>
              
              <div className="p-8">
                <div className="flex justify-between items-start mb-4">
                  <div className="flex items-center space-x-4">
                    <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center">
                      <span className="text-white font-bold">M</span>
                    </div>
                    <div>
                      <p className="font-medium text-gray-900">Mikko Oksanen</p>
                      <p className="text-sm text-gray-600">Co-founder & CEO</p>
                    </div>
                  </div>
                  <div className="text-sm text-gray-500">
                    6 months ago • 4 min lukuaika
                  </div>
                </div>
                
                <h2 className="text-2xl font-bold text-primary mb-4">
                  Kenelle Lyyli on tehty: viestinnän näkymätön taakka
                </h2>
                
                <p className="text-gray-700 mb-6">
                  Syvä sukellus siihen, ketkä kantavat viestinnän taakkaa organisaatioissa ja miksi he tarvitsevat tukea.
                </p>
                
                <Link 
                  href="/blog/kenelle-lyyli-on-tehty"
                  className="inline-flex items-center text-primary hover:text-primary/80 font-medium"
                >
                  Lue lisää
                  <span className="ml-2">→</span>
                </Link>
              </div>
            </div>
          </div>

          {/* Filter Section */}
          <div className="mb-12">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <span className="text-sm font-medium text-gray-700">Suodata:</span>
                <div className="flex space-x-2">
                  <button className="bg-primary text-white px-4 py-2 rounded-full text-sm font-medium">
                    Kaikki
                  </button>
                  <button className="bg-gray-100 text-gray-700 px-4 py-2 rounded-full text-sm font-medium hover:bg-gray-200">
                    Tapaustutkimus
                  </button>
                  <button className="bg-gray-100 text-gray-700 px-4 py-2 rounded-full text-sm font-medium hover:bg-gray-200">
                    Konsultointi
                  </button>
                  <button className="bg-gray-100 text-gray-700 px-4 py-2 rounded-full text-sm font-medium hover:bg-gray-200">
                    Uutiset
                  </button>
                  <button className="bg-gray-100 text-gray-700 px-4 py-2 rounded-full text-sm font-medium hover:bg-gray-200">
                    Järjestöt
                  </button>
                  <button className="bg-gray-100 text-gray-700 px-4 py-2 rounded-full text-sm font-medium hover:bg-gray-200">
                    Urheiluseurat
                  </button>
                  <button className="bg-gray-100 text-gray-700 px-4 py-2 rounded-full text-sm font-medium hover:bg-gray-200">
                    Menestystarina
                  </button>
                  <button className="bg-gray-100 text-gray-700 px-4 py-2 rounded-full text-sm font-medium hover:bg-gray-200">
                    Blogi
                  </button>
                  <button className="bg-gray-100 text-gray-700 px-4 py-2 rounded-full text-sm font-medium hover:bg-gray-200">
                    Johtajuus
                  </button>
                </div>
              </div>
              
              <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center">
                <span className="text-gray-600">🔍</span>
              </div>
            </div>
          </div>

          {/* Article Grid */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {/* Article 1 */}
            <div className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm">
              <div className="relative">
                <img
                  src="/images/blog/article-1.jpg"
                  alt="Article 1"
                  className="w-full h-48 object-cover"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-primary text-white px-3 py-1 rounded-full text-sm font-medium">
                    Tapaustutkimus
                  </span>
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex justify-between items-center mb-2">
                  <div className="flex items-center space-x-2">
                    <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center">
                      <span className="text-white text-xs font-bold">L</span>
                    </div>
                    <span className="text-sm text-gray-600">Lyyli-tiimi</span>
                  </div>
                  <span className="text-sm text-gray-500">4 months ago • 7 min lukuaika</span>
                </div>
                
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  Kuinka konsulttiyritykset tehostavat asiantuntijaviestintäänsä tekoälyllä
                </h3>
                
                <p className="text-gray-600 text-sm">
                  Tapaustutkimus siitä, miten konsulttiyritykset käyttävät tekoälyä parantaakseen viestintäänsä.
                </p>
              </div>
            </div>

            {/* Article 2 */}
            <div className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm">
              <div className="relative">
                <img
                  src="/images/blog/article-2.jpg"
                  alt="Article 2"
                  className="w-full h-48 object-cover"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-primary text-white px-3 py-1 rounded-full text-sm font-medium">
                    Menestystarina
                  </span>
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex justify-between items-center mb-2">
                  <div className="flex items-center space-x-2">
                    <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center">
                      <span className="text-white text-xs font-bold">L</span>
                    </div>
                    <span className="text-sm text-gray-600">Lyyli Team</span>
                  </div>
                  <span className="text-sm text-gray-500">3 months ago • 5 min lukuaika</span>
                </div>
                
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  Miten voittoa tavoittelemattomat järjestöt voivat tehostaa jäsenviestintää tekoälyn...
                </h3>
                
                <p className="text-gray-600 text-sm">
                  Opas voittoa tavoittelemattomille järjestöille tekoälyn hyödyntämisessä viestinnässä.
                </p>
              </div>
            </div>

            {/* Article 3 */}
            <div className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm">
              <div className="relative">
                <img
                  src="/images/blog/article-3.jpg"
                  alt="Article 3"
                  className="w-full h-48 object-cover"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-primary text-white px-3 py-1 rounded-full text-sm font-medium">
                    Menestystarina
                  </span>
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex justify-between items-center mb-2">
                  <div className="flex items-center space-x-2">
                    <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center">
                      <span className="text-white text-xs font-bold">L</span>
                    </div>
                    <span className="text-sm text-gray-600">Lyyli Team</span>
                  </div>
                  <span className="text-sm text-gray-500">2 months ago • 6 min lukuaika</span>
                </div>
                
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  Miten urheiluseurat voivat muuttaa faniviestintäänsä tekoälyn avulla
                </h3>
                
                <p className="text-gray-600 text-sm">
                  Näkemyksiä siitä, miten urheiluseurat voivat hyödyntää tekoälyä faniviestinnässään.
                </p>
              </div>
            </div>

            {/* Article 4 */}
            <div className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm">
              <div className="relative">
                <div className="w-full h-48 bg-gray-100 flex items-center justify-center">
                  <span className="text-gray-400">Kuva</span>
                </div>
                <div className="absolute top-4 left-4">
                  <span className="bg-primary text-white px-3 py-1 rounded-full text-sm font-medium">
                    Uutiset
                  </span>
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex justify-between items-center mb-2">
                  <div className="flex items-center space-x-2">
                    <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center">
                      <span className="text-white text-xs font-bold">L</span>
                    </div>
                    <span className="text-sm text-gray-600">Lyyli-tiimi</span>
                  </div>
                  <span className="text-sm text-gray-500">1 month ago • 3 min lukuaika</span>
                </div>
                
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  Lyyli AI Oy on perustettu - Lyyli.ai mullistaa viestinnän automaation...
                </h3>
                
                <p className="text-gray-600 text-sm">
                  Uutinen Lyyli AI Oy:n perustamisesta ja tehtävästä mullistaa viestinnän automaatio.
                </p>
              </div>
            </div>

            {/* Article 5 */}
            <div className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm">
              <div className="relative">
                <div className="w-full h-48 bg-gray-100 flex items-center justify-center">
                  <span className="text-gray-400">Kuva</span>
                </div>
                <div className="absolute top-4 left-4">
                  <span className="bg-primary text-white px-3 py-1 rounded-full text-sm font-medium">
                    Blogi
                  </span>
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex justify-between items-center mb-2">
                  <div className="flex items-center space-x-2">
                    <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center">
                      <span className="text-white text-xs font-bold">M</span>
                    </div>
                    <span className="text-sm text-gray-600">Mikko Oksanen</span>
                  </div>
                  <span className="text-sm text-gray-500">2 weeks ago • 8 min lukuaika</span>
                </div>
                
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  Miksi Lyyli syntyi: tarina viesteistä, jotka jäivät sanomatta
                </h3>
                
                <p className="text-gray-600 text-sm">
                  Henkilökohtainen tarina siitä, miksi Lyyli syntyi ja miten se ratkaisee viestinnän haasteita.
                </p>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="bg-primary/5 rounded-lg p-12 text-center">
            <h2 className="text-3xl font-bold text-primary mb-4">
              Haluatko nähdä kuinka Lyyli voi auttaa organisaatiotasi?
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Varaa demo nähdäksesi kuinka tekoälyviestintäalustamme toimii juuri sinun tarpeisiisi
            </p>
            <button className="bg-primary text-white px-8 py-3 rounded-lg hover:bg-primary/90 transition-colors font-medium">
              Varaa Demo
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}