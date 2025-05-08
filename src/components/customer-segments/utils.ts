
/**
 * Helper function to ensure we get an array from translations
 * This helps handle cases where translation data might not be in array format
 * or where it might be delivered as a comma-separated string
 */
export const ensureArray = (value: unknown): string[] => {
  if (Array.isArray(value)) return value;
  
  // Handle case where value is a string that should be an array
  // This covers both English and Finnish translations
  if (typeof value === 'string') {
    return value.split(',').map(item => item.trim()).filter(Boolean);
  }
  
  // Return empty array as fallback
  return [];
};
