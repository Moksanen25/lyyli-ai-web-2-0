import React from 'react'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Executive Summary - Lyyli AI',
  description: 'Executive summary of Lyyli AI business plan and strategy.',
}

export default function ExecutiveSummaryPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">
            Executive Summary
          </h1>
          <div className="bg-white p-8 rounded-lg shadow-md prose max-w-none">
            <p>Coming soon - Executive summary of Lyyli AI business plan and strategy.</p>
          </div>
        </div>
      </div>
    </div>
  )
}