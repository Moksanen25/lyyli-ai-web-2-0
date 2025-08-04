'use client';

import React, { useEffect, useState } from 'react';

interface SSRSafeWrapperProps {
  children: React.ReactNode;
  fallback?: React.ReactNode;
}

/**
 * Wrapper component that ensures children only render on the client side
 * This prevents SSR issues with hooks that depend on browser APIs
 */
export const SSRSafeWrapper: React.FC<SSRSafeWrapperProps> = ({ 
  children, 
  fallback = null 
}) => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return <>{fallback}</>;
  }

  return <>{children}</>;
};

export default SSRSafeWrapper; 