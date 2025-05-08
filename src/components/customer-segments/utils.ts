
/**
 * Helper function to ensure we get an array from translations
 * This helps handle cases where translation data might not be in array format
 */
export const ensureArray = (value: unknown): string[] => {
  if (Array.isArray(value)) return value;
  return [];
};
