'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Sidebar() {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const navigation = [
    { name: 'Etusivu', href: '/', icon: '🏠' },
    { name: 'Tietoa', href: '/about', icon: 'ℹ️' },
    { name: 'Referenssit', href: '/cases', icon: '📋' },
    { name: 'Yhteystiedot', href: '/contact', icon: '📞' },
  ];

  return (
    <aside className={`bg-secondary min-h-screen transition-all duration-300 ${
      isCollapsed ? 'w-16' : 'w-64'
    }`}>
      <div className="p-4">
        {/* Toggle button */}
        <button
          onClick={() => setIsCollapsed(!isCollapsed)}
          className="w-full mb-4 p-2 bg-primary text-white rounded-md hover:bg-opacity-90 transition-colors duration-200"
        >
          {isCollapsed ? '→' : '←'}
        </button>

        {/* Navigation */}
        <nav className="space-y-2">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className={`flex items-center p-3 rounded-md transition-colors duration-200 ${
                isCollapsed 
                  ? 'justify-center hover:bg-accent' 
                  : 'hover:bg-accent hover:text-primary'
              }`}
            >
              <span className="text-lg">{item.icon}</span>
              {!isCollapsed && (
                <span className="ml-3 font-medium">{item.name}</span>
              )}
            </Link>
          ))}
        </nav>

        {/* Additional info when expanded */}
        {!isCollapsed && (
          <div className="mt-8 p-4 bg-white rounded-md">
            <h3 className="font-semibold text-primary mb-2">Yhteystiedot</h3>
            <p className="text-sm text-gray-600 mb-2">
              📧 info@example.com
            </p>
            <p className="text-sm text-gray-600">
              📱 +358 40 123 4567
            </p>
          </div>
        )}
      </div>
    </aside>
  );
} 