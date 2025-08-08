import React from 'react'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Tietoja - Lyyli AI',
  description: 'Lue lisää Lyyli AI:sta ja tavoitteestamme mullistaa yritysten viestintä tekoälyllä.',
}

export default function AboutPageFi() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">
            Tietoja Lyyli AI:sta
          </h1>
          
          <div className="prose prose-lg max-w-none">
            <p className="text-xl text-gray-600 mb-8">
              Lyyli AI mullistaa yritysten viestintää hyödyntämällä tekoälyn voimaa 
              sisäisen ja ulkoisen viestinnän automatisoimiseksi ja parantamiseksi.
            </p>
            
            <div className="grid md:grid-cols-2 gap-8 mt-12">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h2 className="text-2xl font-semibold mb-4">Tavoitteemme</h2>
                <p className="text-gray-600">
                  Auttaa organisaatioita älykkäillä viestintätyökaluilla, jotka säästävät aikaa, 
                  parantavat johdonmukaisuutta ja lisäävät sitoutumista kaikilla kanavilla.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h2 className="text-2xl font-semibold mb-4">Visio</h2>
                <p className="text-gray-600">
                  Maailma, jossa jokainen yritys voi viestiä tehokkaasti ja tehokkaasti 
                  tekoälyn voiman avulla, riippumatta koosta tai resursseista.
                </p>
              </div>
            </div>
            
            <div className="mt-12">
              <h2 className="text-3xl font-bold mb-6">Tiimimme</h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-semibold mb-2">Mikko Oksanen</h3>
                  <p className="text-gray-600 mb-2">Toimitusjohtaja ja perustaja</p>
                  <p className="text-gray-600">
                    Asiantuntija organisaatioiden viestinnällisissä haasteissa ja vuosien kokemus 
                    yritysten viestintäprosessien parantamisesta.
                  </p>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-semibold mb-2">Veikko Laitinen</h3>
                  <p className="text-gray-600 mb-2">Teknologiajohtaja ja perustaja</p>
                  <p className="text-gray-600">
                    Teknologiajohtaja syvällä osaamisella tekoälyssä ja koneoppimisessa, 
                    innostunut skaalautuvien ratkaisujen rakentamisesta.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 