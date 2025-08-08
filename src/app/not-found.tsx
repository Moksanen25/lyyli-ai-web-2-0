import React from 'react'
import Link from 'next/link'

export default function NotFoundPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-light-gray via-white to-soft-rose/30 flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-6xl font-playfair font-normal text-forest-green mb-4">404</h1>
        <h2 className="text-2xl font-inter font-semibold text-forest-green mb-4">Page Not Found</h2>
        <p className="text-dark-gray mb-8 font-inter font-normal text-base leading-relaxed">
          The page you are looking for doesn&apos;t exist or has been moved.
        </p>
        <Link 
          href="/"
          className="btn-primary px-6 py-3 rounded-lg font-inter font-semibold text-base shadow-soft hover:shadow-medium transition-all duration-300"
        >
          Go Home
        </Link>
      </div>
    </div>
  )
} 