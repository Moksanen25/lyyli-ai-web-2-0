import React from 'react'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Yhteenveto - Lyyli AI',
  description: 'Lyyli AI:n liiketoimintasuunnitelman ja strategian yhteenveto.',
}

export default function ExecutiveSummaryPageFi() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">
            Yhteenveto
          </h1>
          <div className="bg-white p-8 rounded-lg shadow-md prose max-w-none">
            <p>Tulossa pian - Lyyli AI:n liiketoimintasuunnitelman ja strategian yhteenveto.</p>
          </div>
        </div>
      </div>
    </div>
  )
}