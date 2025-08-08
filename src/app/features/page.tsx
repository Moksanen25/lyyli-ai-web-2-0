import React from 'react'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Features - Lyyli AI',
  description: 'Discover the powerful features of Lyyli AI for intelligent business communication.',
}

export default function FeaturesPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Hero Section with Image */}
      <div className="relative bg-gradient-to-r from-primary to-primary/80 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-12">
            {/* Text Content */}
            <div className="flex-1 text-white">
              <h1 className="text-5xl font-bold mb-6">
                Powerful Features for Intelligent Communication
              </h1>
              <p className="text-xl text-white/90 mb-8">
                Transform your business communication with AI-powered tools that learn your brand voice 
                and create consistent, high-quality content across all channels.
              </p>
              <div className="flex flex-wrap gap-4">
                <div className="bg-white/20 backdrop-blur-sm rounded-lg px-4 py-2">
                  <span className="text-sm font-medium">AI Assistant</span>
                </div>
                <div className="bg-white/20 backdrop-blur-sm rounded-lg px-4 py-2">
                  <span className="text-sm font-medium">Automation</span>
                </div>
                <div className="bg-white/20 backdrop-blur-sm rounded-lg px-4 py-2">
                  <span className="text-sm font-medium">Analytics</span>
                </div>
                <div className="bg-white/20 backdrop-blur-sm rounded-lg px-4 py-2">
                  <span className="text-sm font-medium">Multi-language</span>
                </div>
              </div>
            </div>
            
            {/* Hero Image */}
            <div className="flex-1 flex justify-center">
              <div className="relative w-full max-w-md">
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 shadow-2xl">
                  <img
                    src="/images/hero/features-hero.png"
                    alt="AI-powered communication features illustration"
                    className="w-full h-auto"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Features Grid */}
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Core Features
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-2xl font-semibold mb-4">AI Assistant</h2>
              <p className="text-gray-600">
                Intelligent AI assistant that learns your brand voice and creates consistent, 
                high-quality content across all channels.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-2xl font-semibold mb-4">Automation</h2>
              <p className="text-gray-600">
                Automate routine communication tasks and free up time for creative work 
                and strategic thinking.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-2xl font-semibold mb-4">Analytics</h2>
              <p className="text-gray-600">
                Track performance and engagement across all communication channels 
                with detailed analytics and insights.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-2xl font-semibold mb-4">Multi-language</h2>
              <p className="text-gray-600">
                Support for multiple languages with automatic translation and 
                localization capabilities.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}