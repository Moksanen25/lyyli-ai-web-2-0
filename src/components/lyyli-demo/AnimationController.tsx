
import { useEffect } from 'react';

interface AnimationControllerProps {
  isOpen: boolean;
  animationPhase: number;
  setAnimationPhase: React.Dispatch<React.SetStateAction<number>>;
}

const AnimationController: React.FC<AnimationControllerProps> = ({ 
  isOpen, 
  animationPhase, 
  setAnimationPhase 
}) => {
  // Animation timeline management
  useEffect(() => {
    if (!isOpen) return;
    
    // Reset animation on open
    setAnimationPhase(0);
    
    // Schedule animation phases
    const timeline = [
      setTimeout(() => setAnimationPhase(1), 2000), // Initial assistant message
      setTimeout(() => setAnimationPhase(2), 4000), // User response
      setTimeout(() => setAnimationPhase(3), 6000), // Assistant typing
      setTimeout(() => setAnimationPhase(4), 8000), // Assistant suggestion
      setTimeout(() => setAnimationPhase(5), 12000), // User approval
      setTimeout(() => setAnimationPhase(6), 14000), // Preparing to publish
      setTimeout(() => setAnimationPhase(7), 16000), // Show Slack interface
      setTimeout(() => setAnimationPhase(8), 20000)  // Show final branding
    ];
    
    // Cleanup timeouts when dialog closes
    return () => timeline.forEach(timer => clearTimeout(timer));
  }, [isOpen, setAnimationPhase]);

  return null; // This is a logic-only component, no UI to render
};

export default AnimationController;
