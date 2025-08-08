import React from 'react'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Ota yhteyttä - Lyyli AI',
  description: 'Onko kysyttävää? Tekoälyavustajamme on valmis auttamaan tai ota suoraan yhteyttä tiimiimme.',
}

export default function ContactPageFi() {
  return (
    <div className="min-h-screen bg-white">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-6xl mx-auto">
          {/* Page Title and Subtitle */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-primary mb-4">
              Ota yhteyttä
            </h1>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Onko kysyttävää? Tekoälyavustajamme on valmis auttamaan tai ota suoraan yhteyttä tiimiimme.
            </p>
          </div>

          {/* Chat Button */}
          <div className="text-center mb-12">
            <button className="bg-primary text-white px-8 py-3 rounded-lg hover:bg-primary/90 transition-colors font-medium flex items-center mx-auto">
              <span className="mr-2">💬</span>
              Keskustele Lyylin kanssa
            </button>
          </div>

          {/* Contact Information and Form */}
          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-bold text-primary mb-6">Yhteystiedot</h2>
                
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center">
                      <span className="text-primary">📞</span>
                    </div>
                    <span className="text-gray-700">+358 40 961 9224</span>
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center">
                      <span className="text-primary">✉️</span>
                    </div>
                    <span className="text-gray-700">mikko@lyyli.ai</span>
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center">
                      <span className="text-primary">🌐</span>
                    </div>
                    <span className="text-gray-700">www.lyyli.ai</span>
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center">
                      <span className="text-primary">✉️</span>
                    </div>
                    <span className="text-gray-700">hello@lyyli.ai</span>
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center">
                      <span className="text-primary">💬</span>
                    </div>
                    <span className="text-gray-700">WhatsApp</span>
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-gray-100 rounded-lg flex items-center justify-center">
                      <span className="text-gray-600 text-sm font-medium">Y</span>
                    </div>
                    <span className="text-gray-700">Y-tunnus: 3537519-5</span>
                  </div>
                </div>
              </div>

              {/* Contact Buttons */}
              <div className="space-y-3">
                <button className="w-full bg-primary text-white py-3 px-6 rounded-lg hover:bg-primary/90 transition-colors font-medium flex items-center justify-center">
                  <span className="mr-2">📞</span>
                  Soita
                </button>
                
                <button className="w-full bg-gray-100 text-gray-700 py-3 px-6 rounded-lg hover:bg-gray-200 transition-colors font-medium flex items-center justify-center">
                  <span className="mr-2">✉️</span>
                  Sähköposti
                </button>
                
                <button className="w-full bg-gray-100 text-gray-700 py-3 px-6 rounded-lg hover:bg-gray-200 transition-colors font-medium flex items-center justify-center">
                  <span className="mr-2">💬</span>
                  WhatsApp
                </button>
              </div>
            </div>

            {/* Message Form */}
            <div className="bg-gray-50 rounded-lg p-8">
              <div className="relative">
                <textarea
                  placeholder="Kirjoita viestisi..."
                  className="w-full h-64 p-4 border border-gray-300 rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                />
                <button className="absolute bottom-4 right-4 w-10 h-10 bg-primary text-white rounded-full hover:bg-primary/90 transition-colors flex items-center justify-center">
                  <span>✈️</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}