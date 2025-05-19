
import { useState } from 'react';

// This is a placeholder hook for managing free plan status
// In a real app, this would likely check against an auth system or backend
export const useFreePlan = () => {
  const [isFreePlan, setIsFreePlan] = useState(true); // Default to free plan
  
  const setToFreePlan = () => {
    setIsFreePlan(true);
  };
  
  return {
    isFreePlan,
    setToFreePlan
  };
};
