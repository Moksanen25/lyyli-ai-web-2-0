
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
    
    // Clear any existing timeouts
    timeoutsRef.current.forEach(timer => clearTimeout(timer));
    timeoutsRef.current = [];
    
    // Reset animation on open
    if (animationPhase === 0) {
      setAnimationPhase(0);
    }
    
    // Schedule animation phases based on current phase
    const calculateDelay = (targetPhase: number) => {
      // Base delays in milliseconds for each phase
      const phaseDelays = [0, 2000, 2000, 2000, 2000, 4000, 2000, 2000, 4000];
      let totalDelay = 0;
      
      // Calculate cumulative delay from current phase to target phase
      for (let i = animationPhase + 1; i <= targetPhase; i++) {
        totalDelay += phaseDelays[i - 1] || 2000; // Default 2s if not specified
      }
      
      return totalDelay;
    };
    
    // Create new timeouts based on current phase
    const newTimeouts = [];
    
    if (animationPhase < 1) {
      newTimeouts.push(
        setTimeout(() => {
          setIsLoading(false); // Remove loading state when first animation starts
          setAnimationPhase(1);
        }, calculateDelay(1))
      );
    }
    
    for (let phase = Math.max(2, animationPhase + 1); phase <= 8; phase++) {
      newTimeouts.push(
        setTimeout(() => setAnimationPhase(phase), calculateDelay(phase))
      );
    }
    
    timeoutsRef.current = newTimeouts;
    
    // Cleanup timeouts when dialog closes or component unmounts
    return () => {
      timeoutsRef.current.forEach(timer => clearTimeout(timer));
    };
  }, [isOpen, animationPhase, setAnimationPhase, setIsLoading, isPaused]);

  return null; // This is a logic-only component, no UI to render
};

export default AnimationController;
