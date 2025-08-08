import React from 'react'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Security - Lyyli AI',
  description: 'Lyyli AI security policies and measures.',
}

export default function SecurityPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">
            Security
          </h1>
          <div className="bg-white p-8 rounded-lg shadow-md prose max-w-none">
            <p>Lyyli AI's security policies and measures ensure the safety of your data.</p>
            <p>Coming soon - Detailed security policy information.</p>
          </div>
        </div>
      </div>
    </div>
  )
}