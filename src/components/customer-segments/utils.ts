
/**
 * Helper function to ensure we get an array from translations
 * This helps handle cases where translation data might not be in array format
 * or where it might be delivered as a comma-separated string
 */
export const ensureArray = (value: unknown): string[] => {
  console.log('ensureArray called with:', typeof value, value);
  
  if (!value) {
    console.warn('Empty or null value provided to ensureArray');
    return [];
  }
  
  if (Array.isArray(value)) {
    console.log('Value is already an array');
    return value;
  }
  
  // Handle case where value is a string that should be an array
  // This covers both English and Finnish translations
  if (typeof value === 'string') {
    console.log('Converting string to array');
    return value.split(',').map(item => item.trim()).filter(Boolean);
  }
  
  // Try to convert object to array if possible
  if (typeof value === 'object') {
    try {
      console.log('Attempting to extract array from object');
      const objectValues = Object.values(value);
      if (Array.isArray(objectValues) && objectValues.every(item => typeof item === 'string')) {
        return objectValues;
      }
    } catch (error) {
      console.warn('Failed to convert object to array:', error);
    }
  }
  
  console.warn('Returning empty array as fallback for unsupported type:', typeof value);
  // Return empty array as fallback
  return [];
};
