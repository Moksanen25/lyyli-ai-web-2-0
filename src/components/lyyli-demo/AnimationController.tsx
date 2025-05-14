
import { useEffect, useRef, useState } from 'react';

interface AnimationControllerProps {
  isOpen: boolean;
  animationPhase: number;
  setAnimationPhase: React.Dispatch<React.SetStateAction<number>>;
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>;
  isPaused: boolean;
}

const AnimationController: React.FC<AnimationControllerProps> = ({ 
  isOpen, 
  animationPhase, 
  setAnimationPhase,
  setIsLoading,
  isPaused
}) => {
  const timeoutsRef = useRef<NodeJS.Timeout[]>([]);
  const [isInitialized, setIsInitialized] = useState(false);
  
  // Safer animation progress function
  const progressAnimation = (targetPhase: number, delay: number) => {
    console.log(`Scheduling animation phase ${targetPhase} with delay ${delay}ms`);
    
    return setTimeout(() => {
      console.log(`Setting animation phase to ${targetPhase}`);
      setAnimationPhase(targetPhase);
    }, delay);
  };
  
  // Clear all timeouts safely
  const clearAllTimeouts = () => {
    console.log(`Clearing ${timeoutsRef.current.length} animation timeouts`);
    timeoutsRef.current.forEach(timer => clearTimeout(timer));
    timeoutsRef.current = [];
  };
  
  // Animation timeline management
  useEffect(() => {
    // Skip if dialog is closed or animation is paused
    if (!isOpen || isPaused) {
      if (!isOpen) {
        console.log("Dialog closed, clearing animation timeouts");
        clearAllTimeouts();
      } else if (isPaused) {
        console.log("Animation paused, clearing timeouts");
        clearAllTimeouts();
      }
      return;
    }
    
    console.log("Animation controller running, phase:", animationPhase);
    
    // Clear any existing timeouts
    clearAllTimeouts();
    
    // Initial loading state
    if (animationPhase === 0) {
      // Remove loading state after 1.5s
      const loadingTimeout = setTimeout(() => {
        console.log("Initial loading complete");
        setIsLoading(false);
        setAnimationPhase(1);
        setIsInitialized(true);
      }, 1500);
      
      timeoutsRef.current.push(loadingTimeout);
      return;
    }
    
    // Only continue if we've passed initial loading
    if (!isInitialized) return;
    
    // Define reliable delays between phases
    const phaseDelays = {
      1: 2000, // Wait after welcome message
      2: 2000, // Wait after user prompt
      3: 2000, // Wait during typing animation
      4: 2500, // Wait after assistant suggestion
      5: 2000, // Wait after user approval
      6: 3000, // Wait after content display
      7: 2500, // Wait after slack transition
      8: 0     // Final state
    };
    
    // Schedule next phase if we're not at the end
    if (animationPhase < 8) {
      const nextPhase = animationPhase + 1;
      const delay = phaseDelays[nextPhase as keyof typeof phaseDelays] || 2000;
      
      const timer = progressAnimation(nextPhase, delay);
      timeoutsRef.current.push(timer);
    }
    
    // Cleanup timeouts when dialog closes or component unmounts
    return () => {
      if (!isOpen) {
        console.log("Cleaning up animation timeouts on unmount");
        clearAllTimeouts();
      }
    };
  }, [isOpen, animationPhase, isPaused, isInitialized, setAnimationPhase, setIsLoading]);

  // Reset initialization when dialog closes
  useEffect(() => {
    if (!isOpen) {
      setIsInitialized(false);
    }
  }, [isOpen]);

  return null; // This is a logic-only component, no UI to render
};

export default AnimationController;
