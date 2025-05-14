
import { useEffect, useRef } from 'react';

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
  
  // Animation timeline management
  useEffect(() => {
    if (!isOpen || isPaused) return;
    
    console.log("Animation controller running, phase:", animationPhase);
    
    // Clear any existing timeouts
    timeoutsRef.current.forEach(timer => clearTimeout(timer));
    timeoutsRef.current = [];
    
    // Initial loading state
    if (animationPhase === 0) {
      // Remove loading state after 1.5s
      const loadingTimeout = setTimeout(() => {
        setIsLoading(false);
        setAnimationPhase(1);
      }, 1500);
      
      timeoutsRef.current.push(loadingTimeout);
      return;
    }
    
    // Schedule animation phases based on current phase
    const phaseDelays = [0, 2000, 2000, 2000, 2000, 2000, 2000, 2000];
    
    // Create new timeouts for the next phases
    for (let phase = animationPhase + 1; phase <= 8; phase++) {
      const delay = phaseDelays[phase - 1] || 2000;
      
      timeoutsRef.current.push(
        setTimeout(() => {
          console.log(`Setting animation phase to ${phase}`);
          setAnimationPhase(phase);
        }, delay)
      );
    }
    
    // Cleanup timeouts when dialog closes or component unmounts
    return () => {
      console.log("Cleaning up animation timeouts");
      timeoutsRef.current.forEach(timer => clearTimeout(timer));
    };
  }, [isOpen, animationPhase, setAnimationPhase, setIsLoading, isPaused]);

  return null; // This is a logic-only component, no UI to render
};

export default AnimationController;
