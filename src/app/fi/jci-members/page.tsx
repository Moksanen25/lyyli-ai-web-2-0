import React from 'react'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'JCI Jäsenet - Lyyli AI',
  description: 'Tutustu Lyyli AI:n JCI-jäseniin ja heidän osaamiseensa.',
}

export default function JCIMembersPageFi() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl font-bold text-gray-900 mb-8 text-center">
            JCI Jäsenet
          </h1>
          
          <div className="bg-white p-8 rounded-lg shadow-md">
            <p className="text-lg mb-6">
              Lyyli AI:n tiimi koostuu kokeneista JCI-jäsenistä, jotka tuovat mukanaan 
              laajan osaamisen liiketoiminnasta, teknologiasta ja viestinnästä.
            </p>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
              <div className="text-center">
                <div className="w-32 h-32 bg-gray-200 rounded-full mx-auto mb-4"></div>
                <h3 className="text-xl font-semibold mb-2">Jäsen 1</h3>
                <p className="text-gray-600">Asema ja osaamisalue</p>
              </div>
              
              <div className="text-center">
                <div className="w-32 h-32 bg-gray-200 rounded-full mx-auto mb-4"></div>
                <h3 className="text-xl font-semibold mb-2">Jäsen 2</h3>
                <p className="text-gray-600">Asema ja osaamisalue</p>
              </div>
              
              <div className="text-center">
                <div className="w-32 h-32 bg-gray-200 rounded-full mx-auto mb-4"></div>
                <h3 className="text-xl font-semibold mb-2">Jäsen 3</h3>
                <p className="text-gray-600">Asema ja osaamisalue</p>
              </div>
            </div>
            
            <p className="text-center mt-8 text-gray-600">
              Tulossa pian - Yksityiskohtaiset tiedot jäsenistä
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}