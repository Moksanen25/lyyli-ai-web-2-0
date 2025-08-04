'use client';


import React, { useState } from 'react';
import { cn } from "@/lib/utils";

interface ImageWithFallbackProps {
  src: string;
  alt: string;
  fallbackSrc?: string;
  className?: string;
  width?: number | string;
  height?: number | string;
  style?: React.CSSProperties;
}

const ImageWithFallback: React.FC<ImageWithFallbackProps> = ({
  src,
  alt,
  fallbackSrc = '/placeholder.svg',
  className,
  width,
  height,
  style,
  ...props
}) => {
  const [imgSrc, setImgSrc] = useState<string>(src);
  const [hasError, setHasError] = useState<boolean>(false);

  const handleError = () => {
    if (!hasError) {
      console.log(`Image failed to load: ${src}, using fallback: ${fallbackSrc}`);
      setImgSrc(fallbackSrc);
      setHasError(true);
    }
  };

  // Safety checks for invalid image sources
  const isSrcValid = typeof imgSrc === 'string' && 
    !imgSrc.startsWith('customerSegments.') && 
    !imgSrc.startsWith('segments.') &&
    !imgSrc.startsWith('features.') &&
    !imgSrc.includes('{{') &&
    !imgSrc.includes('}}');
    
  // Use a display source that's guaranteed to be valid
  const displaySrc = (isSrcValid && imgSrc) ? imgSrc : fallbackSrc;

  return (
    <img
      src={displaySrc}
      alt={alt || 'Image'}
      onError={handleError}
      className={cn(
        "transition-opacity duration-300",
        hasError ? "opacity-70" : "",
        className
      )}
      width={width}
      height={height}
      style={{
        objectFit: 'cover',
        maxWidth: '100%',
        ...style
      }}
      loading="lazy"
      {...props}
    />
  );
};

export { ImageWithFallback };
