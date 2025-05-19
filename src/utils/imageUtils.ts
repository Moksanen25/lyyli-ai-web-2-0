
/**
 * Utility functions for handling images
 */

/**
 * Checks if an image URL is valid and accessible
 * @param url The image URL to check
 * @returns A promise that resolves to true if the image is valid, false otherwise
 */
export const checkImageExists = (url: string): Promise<boolean> => {
  return new Promise((resolve) => {
    const img = new Image();
    img.onload = () => resolve(true);
    img.onerror = () => resolve(false);
    img.src = url;
  });
};

/**
 * Gets a fallback image URL if the primary one fails
 * @param primaryUrl The primary image URL
 * @param fallbackUrl The fallback image URL (defaults to placeholder)
 * @returns The fallback URL
 */
export const getFallbackImageUrl = (primaryUrl: string, fallbackUrl: string = '/placeholder.svg'): string => {
  return primaryUrl || fallbackUrl;
};

/**
 * Component props for images with error handling
 */
export interface ImageWithFallbackProps {
  src: string;
  alt: string;
  fallbackSrc?: string;
  className?: string;
  width?: number;
  height?: number;
}
