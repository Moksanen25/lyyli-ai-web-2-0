
import React, { useState } from 'react';
import { cn } from "@/lib/utils";
import { getFallbackImageUrl } from '@/utils/imageUtils';

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
    if (imgSrc !== fallbackSrc) {
      console.warn(`Image failed to load: ${imgSrc}, falling back to: ${fallbackSrc}`);
      setImgSrc(fallbackSrc);
      setHasError(true);
    }
  };

  return (
    <img
      src={imgSrc}
      alt={alt}
      onError={handleError}
      className={cn(
        "transition-opacity duration-300",
        hasError ? "opacity-70" : "",
        className
      )}
      width={width}
      height={height}
      style={style}
      {...props}
    />
  );
};

export { ImageWithFallback };
