import React from 'react'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Evästekäytäntö - Lyyli AI',
  description: 'Lue, miten Lyyli AI käyttää evästeitä ja vastaavia teknologioita.',
}

export default function CookiesPageFi() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">
            Evästekäytäntö
          </h1>
          <div className="bg-white p-8 rounded-lg shadow-md prose max-w-none">
            <p>Tämä evästekäytäntö selittää, miten Lyyli AI käyttää evästeitä ja vastaavia teknologioita.</p>
            <p>Tulossa pian - Yksityiskohtaiset tiedot evästekäytännöstä.</p>
          </div>
        </div>
      </div>
    </div>
  )
}