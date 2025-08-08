import React from 'react'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Odotuslista - Lyyli AI',
  description: 'Liity Lyyli AI:n odotuslistalle ja olet ensimmäisenä tiedolla kun palvelu on saatavilla.',
}

export default function WaitlistPageFi() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-2xl mx-auto">
          <h1 className="text-4xl font-bold text-gray-900 mb-8 text-center">
            Liity odotuslistalle
          </h1>
          
          <div className="bg-white p-8 rounded-lg shadow-md">
            <p className="text-lg mb-6 text-center">
              Olet ensimmäisenä tiedolla kun Lyyli AI:n palvelu on saatavilla!
            </p>
            
            <form className="space-y-4">
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Sähköpostiosoite
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="sinun@email.com"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                  Nimi
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Etunimi Sukunimi"
                  required
                />
              </div>
              
              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-3 px-4 rounded-md hover:bg-blue-700 transition-colors"
              >
                Liity odotuslistalle
              </button>
            </form>
            
            <p className="text-sm text-gray-600 mt-4 text-center">
              Emme jaa tietojasi kolmansille osapuolille.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}