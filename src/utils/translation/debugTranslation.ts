
/**
 * Hook for debugging translation issues
 */
export const useDebugTranslation = () => {
  // Debug function to help diagnose translation issues
  const debugTranslation = (key: string, language: string, result: string) => {
    if (process.env.NODE_ENV === 'development') {
      console.log(`[Translation Debug] Key: ${key}, Language: ${language}, Result: ${result}`);
    }
  };

  return { debugTranslation };
};
