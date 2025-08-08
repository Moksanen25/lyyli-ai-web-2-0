import React from 'react'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Tietoturva - Lyyli AI',
  description: 'Lyyli AI:n tietoturvakäytännöt ja -toimenpiteet.',
}

export default function SecurityPageFi() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">
            Tietoturva
          </h1>
          <div className="bg-white p-8 rounded-lg shadow-md prose max-w-none">
            <p>Lyyli AI:n tietoturvakäytännöt ja -toimenpiteet varmistavat tietojesi turvallisuuden.</p>
            <p>Tulossa pian - Yksityiskohtaiset tiedot tietoturvakäytännöistä.</p>
          </div>
        </div>
      </div>
    </div>
  )
}