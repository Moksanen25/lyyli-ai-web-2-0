import React from 'react'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Tapaustutkimukset - Lyyli AI',
  description: 'Katso miten Lyyli AI on auttanut yrityksiä mullistamaan viestintänsä.',
}

export default function CaseStudiesPageFi() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-gray-900 mb-8 text-center">
            Tapaustutkimukset
          </h1>
          <p className="text-center text-gray-600 mb-12">
            Tulossa pian - Oikeita esimerkkejä siitä, miten Lyyli AI mullistaa yritysten viestinnän.
          </p>
        </div>
      </div>
    </div>
  )
}