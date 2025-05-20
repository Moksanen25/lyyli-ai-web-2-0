
/**
 * Helper functions for segment data management
 */

/**
 * Creates a testimonial object with proper fallbacks
 */
export const createTestimonial = (
  id: string, 
  t: (key: string) => string
) => {
  return {
    quote: t(`customerSegments.segments.${id}.quote`) || 
          t(`features.customerSegments.segments.${id}.quote`) || '',
    author: t(`customerSegments.segments.${id}.author`) || 
           t(`features.customerSegments.segments.${id}.author`) || '',
    company: id === 'tech' ? 'Tech Corp' : 
            id === 'consulting' ? 'Consulting Firm' :
            id === 'nonprofit' ? 'Charity Org' :
            id === 'education' ? 'University' :
            id === 'creative' ? 'Design Studio' :
            id === 'sports' ? 'Sports League' : '',
  };
};

/**
 * Gets the appropriate fallback image URL for a segment
 */
export const getSegmentFallbackImage = (id: string): string => {
  const fallbackImages = {
    tech: 'https://images.unsplash.com/photo-1581092921461-eab10380bdba?auto=format&fit=crop&q=80&w=800',
    consulting: 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=800',
    nonprofit: 'https://images.unsplash.com/photo-1559027615-cd4628902d4a?auto=format&fit=crop&q=80&w=800',
    education: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&q=80&w=800',
    creative: 'https://images.unsplash.com/photo-1542744095-fcf48d80b0fd?auto=format&fit=crop&q=80&w=800',
    sports: 'https://images.unsplash.com/photo-1461896836934-ffe607ba8211?auto=format&fit=crop&q=80&w=800'
  };
  
  return fallbackImages[id as keyof typeof fallbackImages] || fallbackImages.consulting;
};

/**
 * Safely extracts an array of translated strings
 */
export const getTranslatedArray = (
  id: string, 
  fieldName: string, 
  t: (key: string) => string, 
  count: number = 3
): string[] => {
  const result = [];
  
  for (let i = 0; i < count; i++) {
    const value = t(`customerSegments.segments.${id}.${fieldName}.${i}`) || 
                 t(`features.customerSegments.segments.${id}.${fieldName}.${i}`) || '';
    if (value) {
      result.push(value);
    }
  }
  
  return result;
};
