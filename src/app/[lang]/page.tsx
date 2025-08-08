import React from 'react'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Lyyli AI - Tekoälyavusteinen viestintäalusta',
  description: 'Lyyli AI mullistaa yritysten viestinnän tekoälyn avulla. Automatisoi ja paranna sisäistä ja ulkoista viestintää.',
}

export default function HomePageFi() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            Tekoälyavusteinen viestintäalusta
          </h1>
          
          <p className="text-xl text-gray-600 mb-8">
            Lyyli AI mullistaa yritysten viestinnän tekoälyn avulla. 
            Automatisoi ja paranna sisäistä ja ulkoista viestintää älykkäällä teknologialla.
          </p>
          
          <div className="grid md:grid-cols-3 gap-8 mt-12">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-2xl font-semibold mb-4">Automatisointi</h2>
              <p className="text-gray-600">
                Automatisoi rutiinitehtäviä ja vapauta aikaa luovaan työhön.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-2xl font-semibold mb-4">Johdonmukaisuus</h2>
              <p className="text-gray-600">
                Varmista johdonmukainen viestintä kaikissa kanavissa.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-2xl font-semibold mb-4">Laatu</h2>
              <p className="text-gray-600">
                Paranna sisällön laatua ja sitoutumista.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 