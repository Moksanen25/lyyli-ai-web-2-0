import React from 'react'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Tietoa Lyylistä - Lyyli AI',
  description: 'Kehitämme vallankumouksellisia tekoälypohjaisia viestinnän automaatioratkaisuja, jotka muuttavat yritysten tapaa käsitellä viestintää.',
}

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-6xl mx-auto">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold text-primary mb-6">
              Tietoa Lyylistä
            </h1>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              Kehitämme vallankumouksellisia tekoälypohjaisia viestinnän automaatioratkaisuja, jotka muuttavat yritysten tapaa käsitellä viestintää.
            </p>
          </div>

          {/* Mission Section */}
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-primary mb-12">Missiomme</h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              {/* Vision */}
              <div className="bg-white border border-gray-200 rounded-lg p-8 shadow-sm">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-3xl">🎯</span>
                </div>
                <h3 className="text-xl font-bold text-primary mb-4">Visiomme</h3>
                <p className="text-gray-600">
                  Vallankumouksellinen sisällön luonti ja viestintä eettisen tekoälyn avulla, joka tehostaa 
                  organisaatioita ja vapauttaa ihmisten aikaa luovaan työhön.
                </p>
              </div>

              {/* Values */}
              <div className="bg-white border border-gray-200 rounded-lg p-8 shadow-sm">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-3xl">✓</span>
                </div>
                <h3 className="text-xl font-bold text-primary mb-4">Arvomme</h3>
                <p className="text-gray-600">
                  Läpinäkyvyys, eettinen tekoälyn kehitys, asiakaskeskeinen innovaatio ja työkalut, 
                  jotka voimaannuttavat ihmisen luovuutta.
                </p>
              </div>

              {/* Impact */}
              <div className="bg-white border border-gray-200 rounded-lg p-8 shadow-sm">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-3xl">📈</span>
                </div>
                <h3 className="text-xl font-bold text-primary mb-4">Vaikutuksemme</h3>
                <p className="text-gray-600">
                  Autamme yrityksiä vähentämään sisällöntuotantoaikaa jopa 70% samalla kun parannamme 
                  laatua ja säilytämme brändin äänen.
                </p>
              </div>
            </div>
          </div>

          {/* Team Section */}
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-primary mb-6">Tiimimme</h2>
            <p className="text-lg text-gray-600 mb-12 max-w-3xl mx-auto">
              Tapaa intohimoiset ihmiset Lyylin takana, jotka ovat sitoutuneet muuttamaan yritysten tapaa luoda ja hallita sisältöä.
            </p>
            
            <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
              {/* Mikko Oksanen */}
              <div className="text-left">
                <h3 className="text-2xl font-bold text-primary mb-2">Mikko Oksanen</h3>
                <p className="text-lg text-gray-600 mb-4">Perustaja & Toimitusjohtaja</p>
                <p className="text-gray-700 mb-6">
                  Mikolla on kansainvälistä johtamiskokemusta liiketoiminnan kehityksestä, myynnistä, 
                  tuotepäällikkyydestä ja strategiasta. Hän on intohimoinen innovaatiosta ja yritysten 
                  skaalaamisesta, ja hänen motivaationsa on auttaa organisaatioita kehittymään ja kasvamaan.
                </p>
                <div className="flex items-center space-x-2">
                  <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center">
                    <span className="text-primary text-sm">in</span>
                  </div>
                  <span className="text-sm text-gray-600">LinkedIn</span>
                </div>
              </div>

              {/* Veikko Laitinen */}
              <div className="text-left">
                <h3 className="text-2xl font-bold text-primary mb-2">Veikko Laitinen</h3>
                <p className="text-lg text-gray-600 mb-4">Perustaja & Teknologiajohtaja</p>
                <p className="text-gray-700 mb-6">
                  Veikko on ohjelmistokehittäjä, joka keskittyy intuitiivisiin ja tehokkaisiin 
                  käyttökokemuksiin. Hän on asiantuntija TypeScriptissä, Reactissa ja modernissa 
                  web-teknologiassa, ja hän johtaa Lyylin teknisen visioinnin ja kehitystyön.
                </p>
                <div className="flex items-center space-x-2">
                  <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center">
                    <span className="text-primary text-sm">🌐</span>
                  </div>
                  <span className="text-sm text-gray-600">Globe</span>
                </div>
              </div>
            </div>
          </div>

          {/* Journey Section */}
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-primary mb-12">Matkamme</h2>
            
            <div className="max-w-4xl mx-auto">
              <div className="relative">
                {/* Timeline Line */}
                <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-primary/20"></div>
                
                {/* Timeline Items */}
                <div className="space-y-12">
                  {/* 2025 - Company Founded */}
                  <div className="relative flex items-start">
                    <div className="absolute left-6 w-4 h-4 bg-primary rounded-full border-4 border-white shadow-md"></div>
                    <div className="ml-16">
                      <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
                        <div className="flex items-center justify-between mb-2">
                          <h3 className="text-lg font-bold text-primary">04/2025 - Yritys perustettu</h3>
                        </div>
                        <p className="text-gray-700">
                          Lyyli AI Oy (brändinimi "Lyyli.ai") perustettiin Mikon ja Veikon toimesta.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* 2025 - First Investors */}
                  <div className="relative flex items-start">
                    <div className="absolute left-6 w-4 h-4 bg-primary rounded-full border-4 border-white shadow-md"></div>
                    <div className="ml-16">
                      <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
                        <div className="flex items-center justify-between mb-2">
                          <h3 className="text-lg font-bold text-primary">07/2025 - Ensimmäiset sijoittajat</h3>
                        </div>
                        <p className="text-gray-700">
                          Ensimmäiset sijoittajat, suomalainen perheyritys Expion Oy ja North Savo Growth Fund Ky 
                          liittyivät mukaan tarinaan. Expion Oy
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* 2025 - Launch */}
                  <div className="relative flex items-start">
                    <div className="absolute left-6 w-4 h-4 bg-primary rounded-full border-4 border-white shadow-md"></div>
                    <div className="ml-16">
                      <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
                        <div className="flex items-center justify-between mb-2">
                          <h3 className="text-lg font-bold text-primary">08/2025 - Lanseeraus</h3>
                        </div>
                        <p className="text-gray-700">
                          Ensimmäisen kaupallisen version myynti alkaa Suomessa.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* 2025 - World Domination */}
                  <div className="relative flex items-start">
                    <div className="absolute left-6 w-4 h-4 bg-primary rounded-full border-4 border-white shadow-md"></div>
                    <div className="ml-16">
                      <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
                        <div className="flex items-center justify-between mb-2">
                          <h3 className="text-lg font-bold text-primary">12/2025 - Maailmanvalloitus</h3>
                        </div>
                        <p className="text-gray-700">
                          Kansainvälinen myynti Euroopassa käynnistetään.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 