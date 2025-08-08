import React from 'react'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Selkeä, läpinäkyvä hinnoittelu - Lyyli AI',
  description: 'Valitse yrityksesi tarpeisiin sopiva paketti. Kaikki paketit sisältävät keskeisen tekoälytoiminnallisuuden.',
}

export default function PricingPageFi() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-6xl mx-auto">
          {/* Main Heading */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-primary mb-4">
              Selkeä, läpinäkyvä hinnoittelu
            </h1>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Valitse yrityksesi tarpeisiin sopiva paketti. Kaikki paketit sisältävät keskeisen tekoälytoiminnallisuuden.
            </p>
            {/* Pricing Toggle */}
            <div className="mt-6">
              <div className="inline-flex items-center bg-gray-100 rounded-lg p-1">
                <button className="px-4 py-2 text-sm font-medium text-gray-600 rounded-md">
                  Kuukausittain
                </button>
                <button className="px-4 py-2 text-sm font-medium bg-primary text-white rounded-md">
                  Vuosittain
                </button>
              </div>
            </div>
          </div>

          {/* Pricing Tiers */}
          <div className="grid md:grid-cols-5 gap-6 mb-16">
            {/* Free Tier */}
            <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
              <div className="text-center mb-6">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">⚡</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Ilmainen</h3>
                <p className="text-3xl font-bold text-primary">0€</p>
                <p className="text-sm text-gray-500">Vuosittain</p>
              </div>
              <ul className="space-y-3 mb-6">
                <li className="flex items-center text-sm">
                  <span className="text-green-500 mr-2">✓</span>
                  Max 1 käyttäjä
                </li>
                <li className="flex items-center text-sm">
                  <span className="text-green-500 mr-2">✓</span>
                  20 viestintäkeskustelua/kk
                </li>
                <li className="flex items-center text-sm">
                  <span className="text-green-500 mr-2">✓</span>
                  5 julkaisua
                </li>
                <li className="flex items-center text-sm">
                  <span className="text-green-500 mr-2">✓</span>
                  Web UI
                </li>
                <li className="flex items-center text-sm">
                  <span className="text-green-500 mr-2">✓</span>
                  2 integraatiota
                </li>
                <li className="flex items-center text-sm">
                  <span className="text-green-500 mr-2">✓</span>
                  1 agentti
                </li>
              </ul>
              <button className="w-full bg-gray-100 text-gray-700 py-2 px-4 rounded-md hover:bg-gray-200 transition-colors">
                Aloita ilmainen
              </button>
            </div>

            {/* Starter Tier */}
            <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
              <div className="text-center mb-6">
                <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <span className="text-xl font-bold text-gray-700">S</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Starter</h3>
                <p className="text-3xl font-bold text-primary">29€</p>
                <p className="text-sm text-gray-500">Vuosittain</p>
              </div>
              <ul className="space-y-3 mb-6">
                <li className="flex items-center text-sm">
                  <span className="text-green-500 mr-2">✓</span>
                  Max 1 käyttäjä
                </li>
                <li className="flex items-center text-sm">
                  <span className="text-green-500 mr-2">✓</span>
                  50 viestintäkeskustelua/kk
                </li>
                <li className="flex items-center text-sm">
                  <span className="text-green-500 mr-2">✓</span>
                  10 julkaisua
                </li>
                <li className="flex items-center text-sm">
                  <span className="text-green-500 mr-2">✓</span>
                  Web UI
                </li>
                <li className="flex items-center text-sm">
                  <span className="text-green-500 mr-2">✓</span>
                  3 integraatiota
                </li>
                <li className="flex items-center text-sm">
                  <span className="text-green-500 mr-2">✓</span>
                  1 agentti
                </li>
              </ul>
              <button className="w-full bg-gray-100 text-gray-700 py-2 px-4 rounded-md hover:bg-gray-200 transition-colors">
                Aloita Starter
              </button>
            </div>

            {/* Growth Tier - Highlighted */}
            <div className="bg-primary text-white border border-primary rounded-lg p-6 shadow-lg relative">
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                <span className="bg-primary text-white px-3 py-1 rounded-full text-xs font-medium">
                  Suosittu
                </span>
              </div>
              <div className="text-center mb-6">
                <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">📈</span>
                </div>
                <h3 className="text-xl font-bold mb-2">Growth</h3>
                <p className="text-3xl font-bold">199€</p>
                <p className="text-sm text-white/80">Vuosittain</p>
              </div>
              <ul className="space-y-3 mb-6">
                <li className="flex items-center text-sm">
                  <span className="text-white mr-2">✓</span>
                  Rajoittamattomat käyttäjät
                </li>
                <li className="flex items-center text-sm">
                  <span className="text-white mr-2">✓</span>
                  100 viestintäkeskustelua/kk
                </li>
                <li className="flex items-center text-sm">
                  <span className="text-white mr-2">✓</span>
                  Rajoittamattomat julkaisut
                </li>
                <li className="flex items-center text-sm">
                  <span className="text-white mr-2">✓</span>
                  Web UI
                </li>
                <li className="flex items-center text-sm">
                  <span className="text-white mr-2">✓</span>
                  Rajoittamattomat integraatiot
                </li>
                <li className="flex items-center text-sm">
                  <span className="text-white mr-2">✓</span>
                  1 agentti
                </li>
              </ul>
              <button className="w-full bg-white text-primary py-2 px-4 rounded-md hover:bg-gray-100 transition-colors font-medium">
                Siirry Growth-tasolle
              </button>
            </div>

            {/* Professional Tier */}
            <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
              <div className="text-center mb-6">
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <span className="text-xl">⚙️</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Professional</h3>
                <p className="text-3xl font-bold text-primary">599€</p>
                <p className="text-sm text-gray-500">Vuosittain</p>
              </div>
              <ul className="space-y-3 mb-6">
                <li className="flex items-center text-sm">
                  <span className="text-green-500 mr-2">✓</span>
                  Rajoittamattomat käyttäjät
                </li>
                <li className="flex items-center text-sm">
                  <span className="text-green-500 mr-2">✓</span>
                  Rajoittamattomat keskustelut
                </li>
                <li className="flex items-center text-sm">
                  <span className="text-green-500 mr-2">✓</span>
                  Rajoittamattomat julkaisut
                </li>
                <li className="flex items-center text-sm">
                  <span className="text-green-500 mr-2">✓</span>
                  Web, Slack & Teams UI
                </li>
                <li className="flex items-center text-sm">
                  <span className="text-green-500 mr-2">✓</span>
                  Kaikki integraatiot
                </li>
                <li className="flex items-center text-sm">
                  <span className="text-green-500 mr-2">✓</span>
                  3 agenttia
                </li>
              </ul>
              <button className="w-full bg-gray-100 text-gray-700 py-2 px-4 rounded-md hover:bg-gray-200 transition-colors">
                Ota yhteyttä myyntiin
              </button>
            </div>

            {/* Enterprise Tier */}
            <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
              <div className="text-center mb-6">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">✓</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Enterprise</h3>
                <p className="text-3xl font-bold text-primary">Räätälöity</p>
                <p className="text-sm text-gray-500">Hinnoittelu</p>
              </div>
              <ul className="space-y-3 mb-6">
                <li className="flex items-center text-sm">
                  <span className="text-green-500 mr-2">✓</span>
                  Mukautetut käyttäjäroolit
                </li>
                <li className="flex items-center text-sm">
                  <span className="text-green-500 mr-2">✓</span>
                  Mukautetut integraatiot
                </li>
                <li className="flex items-center text-sm">
                  <span className="text-green-500 mr-2">✓</span>
                  Mukautetut raportit
                </li>
                <li className="flex items-center text-sm">
                  <span className="text-green-500 mr-2">✓</span>
                  Mukautetut ominaisuudet
                </li>
                <li className="flex items-center text-sm">
                  <span className="text-green-500 mr-2">✓</span>
                  Dedicatetd tuki
                </li>
                <li className="flex items-center text-sm">
                  <span className="text-green-500 mr-2">✓</span>
                  SLA, koulutus & toteutus
                </li>
              </ul>
              <button className="w-full bg-gray-100 text-gray-700 py-2 px-4 rounded-md hover:bg-gray-200 transition-colors">
                Ota yhteyttä myyntiin
              </button>
            </div>
          </div>

          {/* ROI Calculator Section */}
          <div className="bg-gray-50 rounded-lg p-8 mb-16">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-primary mb-4">Laske ROI</h2>
              <p className="text-lg text-gray-600">
                Vertaa Lyyli.ai Professional-pakettia perinteisiin viestintäratkaisuihin
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              {/* Calculator Inputs */}
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <label className="text-sm font-medium text-gray-700">Käyttöön viestintätiimissä</label>
                  <div className="relative">
                    <input type="checkbox" className="sr-only" id="team-toggle" />
                    <label htmlFor="team-toggle" className="block w-12 h-6 bg-gray-200 rounded-full cursor-pointer">
                      <span className="block w-4 h-4 bg-white rounded-full transform transition-transform translate-x-1 translate-y-1"></span>
                    </label>
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Viestintähenkilöstön määrä
                  </label>
                  <select className="w-full p-3 border border-gray-300 rounded-md">
                    <option value="0.5">0.5</option>
                    <option value="1" selected>1</option>
                    <option value="1.5">1.5</option>
                    <option value="2">2</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Viestintäasiantuntijan keskipalkka
                  </label>
                  <div className="flex items-center space-x-2">
                    <input type="range" min="2000" max="5000" value="3200" className="flex-1" />
                    <span className="text-sm font-medium text-gray-700">3200€ / Kuukausi</span>
                  </div>
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-white p-4 rounded-lg">
                    <p className="text-sm text-gray-600">Vuosikustannus henkilöstöllä</p>
                    <p className="text-2xl font-bold text-primary">58 800 €</p>
                  </div>
                  <div className="bg-white p-4 rounded-lg">
                    <p className="text-sm text-gray-600">Lyyli.ai:n tehokkuusarvo</p>
                    <p className="text-2xl font-bold text-primary">47 040 €</p>
                  </div>
                </div>
              </div>
              
              {/* Results */}
              <div className="space-y-6">
                <div className="bg-white p-6 rounded-lg">
                  <h3 className="text-lg font-bold text-gray-900 mb-4">Sijoitetun pääoman tuotto</h3>
                  <div className="text-center">
                    <p className="text-4xl font-bold text-green-600 mb-2">554.4%</p>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-green-600 h-2 rounded-full" style={{width: '100%'}}></div>
                    </div>
                  </div>
                </div>
                
                <div className="bg-white p-6 rounded-lg">
                  <h3 className="text-lg font-bold text-gray-900 mb-4">Nettosäästöt</h3>
                  <p className="text-3xl font-bold text-primary">39 852 €</p>
                </div>
                
                <div className="bg-white p-6 rounded-lg">
                  <h3 className="text-lg font-bold text-gray-900 mb-4">Vuosikustannus Lyyli.ai Professional</h3>
                  <p className="text-2xl font-bold text-primary mb-2">7 188 €</p>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-primary h-2 rounded-full" style={{width: '12%'}}></div>
                  </div>
                </div>
                
                <div className="bg-gray-100 p-4 rounded-lg">
                  <h4 className="font-bold text-gray-900 mb-2">Todellinen yhteenveto</h4>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span>Työtehosäästö:</span>
                      <span className="font-bold text-green-600">+47 040 €</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Lyyli-kustannukset:</span>
                      <span className="font-bold text-red-600">-7 188 €</span>
                    </div>
                    <div className="flex justify-between border-t pt-2">
                      <span className="font-bold">Nettosäästöt:</span>
                      <span className="font-bold text-primary">39 852 € (554.4% ROI)</span>
                    </div>
                  </div>
                </div>
                
                <button className="w-full bg-primary text-white py-3 px-6 rounded-md hover:bg-primary/90 transition-colors font-medium">
                  Aloita säästäminen Lyyli.ai:n kanssa
                </button>
              </div>
            </div>
          </div>

          {/* Security Standards Section */}
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-primary mb-8">Yritystason tietoturva ja standardit</h2>
            <div className="grid md:grid-cols-2 gap-8 max-w-2xl mx-auto">
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">✓</span>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">GDPR-yhteensopiva</h3>
                <p className="text-sm text-gray-600">Tietojesi suoja on meille tärkeää</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🔒</span>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">ISO 27001</h3>
                <p className="text-sm text-gray-600">Kansainväliset tietoturvastandardit</p>
              </div>
            </div>
          </div>

          {/* FAQ Section */}
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-primary mb-4">Usein kysytyt kysymykset</h2>
            <p className="text-lg text-gray-600 mb-8">
              Vastaus yleisimpiin kysymyksiin hinnoittelustamme ja paketeistamme
            </p>
            
            <div className="max-w-3xl mx-auto space-y-4">
              <div className="bg-white border border-gray-200 rounded-lg p-6 text-left">
                <div className="flex justify-between items-center cursor-pointer">
                  <h3 className="text-lg font-medium text-gray-900">
                    Mitä tapahtuu, kun kokeilujakso päättyy?
                  </h3>
                  <span className="text-gray-500">▼</span>
                </div>
              </div>
              
              <div className="bg-white border border-gray-200 rounded-lg p-6 text-left">
                <div className="flex justify-between items-center cursor-pointer">
                  <h3 className="text-lg font-medium text-gray-900">
                    Voinko vaihtaa pakettia?
                  </h3>
                  <span className="text-gray-500">▼</span>
                </div>
              </div>
              
              <div className="bg-white border border-gray-200 rounded-lg p-6 text-left">
                <div className="flex justify-between items-center cursor-pointer">
                  <h3 className="text-lg font-medium text-gray-900">
                    Tarjoatteko alennuksia oppilaitoksille?
                  </h3>
                  <span className="text-gray-500">▼</span>
                </div>
              </div>
              
              <div className="bg-white border border-gray-200 rounded-lg p-6 text-left">
                <div className="flex justify-between items-center cursor-pointer">
                  <h3 className="text-lg font-medium text-gray-900">
                    Mitä maksutapoja hyväksytte?
                  </h3>
                  <span className="text-gray-500">▼</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}