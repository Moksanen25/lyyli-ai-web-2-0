import React from 'react'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'JCI Members - Lyyli AI',
  description: 'Meet Lyyli AI\'s JCI members and their expertise.',
}

export default function JCIMembersPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl font-bold text-gray-900 mb-8 text-center">
            JCI Members
          </h1>
          
          <div className="bg-white p-8 rounded-lg shadow-md">
            <p className="text-lg mb-6">
              Lyyli AI&apos;s team consists of experienced JCI members who bring extensive 
              expertise in business, technology, and communication.
            </p>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
              <div className="text-center">
                <div className="w-32 h-32 bg-gray-200 rounded-full mx-auto mb-4"></div>
                <h3 className="text-xl font-semibold mb-2">Member 1</h3>
                <p className="text-gray-600">Position and expertise</p>
              </div>
              
              <div className="text-center">
                <div className="w-32 h-32 bg-gray-200 rounded-full mx-auto mb-4"></div>
                <h3 className="text-xl font-semibold mb-2">Member 2</h3>
                <p className="text-gray-600">Position and expertise</p>
              </div>
              
              <div className="text-center">
                <div className="w-32 h-32 bg-gray-200 rounded-full mx-auto mb-4"></div>
                <h3 className="text-xl font-semibold mb-2">Member 3</h3>
                <p className="text-gray-600">Position and expertise</p>
              </div>
            </div>
            
            <p className="text-center mt-8 text-gray-600">
              Coming soon - Detailed member information
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}