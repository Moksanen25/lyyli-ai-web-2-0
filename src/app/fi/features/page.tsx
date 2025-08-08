import React from 'react'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Ominaisuudet - Lyyli AI',
  description: 'Tutustu Lyyli AI:n tekoälyavusteisiin ominaisuuksiin ja toimintoihin.',
}

export default function FeaturesPageFi() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Hero Section with Image */}
      <div className="relative bg-gradient-to-r from-primary to-primary/80 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-12">
            {/* Text Content */}
            <div className="flex-1 text-white">
              <h1 className="text-5xl font-bold mb-6">
                Tehoavat ominaisuudet älykkääseen viestintään
              </h1>
              <p className="text-xl text-white/90 mb-8">
                Muunna yrityksesi viestintä tekoälyavusteisilla työkaluilla, jotka oppivat 
                brändisi äänen ja luovat yhtenäistä, laadukasta sisältöä kaikilla kanavilla.
              </p>
              <div className="flex flex-wrap gap-4">
                <div className="bg-white/20 backdrop-blur-sm rounded-lg px-4 py-2">
                  <span className="text-sm font-medium">Tekoälyavustaja</span>
                </div>
                <div className="bg-white/20 backdrop-blur-sm rounded-lg px-4 py-2">
                  <span className="text-sm font-medium">Automatisointi</span>
                </div>
                <div className="bg-white/20 backdrop-blur-sm rounded-lg px-4 py-2">
                  <span className="text-sm font-medium">Analytiikka</span>
                </div>
                <div className="bg-white/20 backdrop-blur-sm rounded-lg px-4 py-2">
                  <span className="text-sm font-medium">Monikielisyys</span>
                </div>
              </div>
            </div>
            
            {/* Hero Image */}
            <div className="flex-1 flex justify-center">
              <div className="relative w-full max-w-md">
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 shadow-2xl">
                  <img
                    src="/images/hero/features-hero.png"
                    alt="Tekoälyavusteisten viestintäominaisuuksien kuva"
                    className="w-full h-auto"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Features Grid */}
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Ydinominaisuudet
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* AI Assistant */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">Tekoälyavustaja</h3>
              <p>Älykäs avustaja, joka auttaa viestinnässä ja sisällön luomisessa.</p>
            </div>

            {/* Automation */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">Automatisointi</h3>
              <p>Automaattinen sisällön luonti ja viestintäprosessien optimointi.</p>
            </div>

            {/* Analytics */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">Analytiikka</h3>
              <p>Yksityiskohtaiset raportit ja suorituskyvyn seuranta.</p>
            </div>

            {/* Multi-language */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">Monikielisyys</h3>
              <p>Tuki useille kielille ja automaattinen käännös.</p>
            </div>

            {/* Integration */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">Integraatiot</h3>
              <p>Helppo integrointi olemassa oleviin järjestelmiin.</p>
            </div>

            {/* Security */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">Tietoturva</h3>
              <p>Korkeatasoinen tietoturva ja tietojen suoja.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}