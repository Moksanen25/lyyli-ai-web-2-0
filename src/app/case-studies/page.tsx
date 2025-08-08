import React from 'react'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Case Studies - Lyyli AI',
  description: 'See how Lyyli AI has helped businesses transform their communication.',
}

export default function CaseStudiesPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-gray-900 mb-8 text-center">
            Case Studies
          </h1>
          <p className="text-center text-gray-600 mb-12">
            Coming soon - Real examples of how Lyyli AI transforms business communication.
          </p>
        </div>
      </div>
    </div>
  )
}