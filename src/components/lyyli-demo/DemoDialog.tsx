
import React, { useRef, useEffect, useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog';
import { Loader2, Play, Pause } from 'lucide-react';
import { Button } from '@/components/ui/button';
import ChatInterface from './ChatInterface';
import SlackInterface from './SlackInterface';
import AnimationController from './AnimationController';
import { useIsMobile } from '@/hooks/use-mobile';
import { ErrorBoundary } from '@/components/ui/error-boundary';
import { useSafeTranslation } from '@/utils/safeTranslation';

interface DemoDialogProps {
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
  animationPhase: number;
  setAnimationPhase: React.Dispatch<React.SetStateAction<number>>;
  isLoading: boolean;
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>;
}

const DemoDialog: React.FC<DemoDialogProps> = ({ 
  isOpen,
  setIsOpen, 
  animationPhase, 
  setAnimationPhase,
  isLoading,
  setIsLoading
}) => {
  const chatContainerRef = useRef<HTMLDivElement>(null);
  const [isPaused, setIsPaused] = useState(false);
  const isMobile = useIsMobile();
  const { safeT } = useSafeTranslation();
  
  // Auto-scroll to bottom when new messages appear
  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
    }
  }, [animationPhase]);
  
  const togglePause = () => {
    console.log('Animation pause toggled:', !isPaused);
    setIsPaused(!isPaused);
  };
  
  // Clean up function when dialog closes
  useEffect(() => {
    if (!isOpen) {
      console.log('Dialog closed, resetting animation state');
      setAnimationPhase(0);
      setIsPaused(false); // Reset pause state when dialog closes
    }
  }, [isOpen, setAnimationPhase]);

  // Safety check to prevent render issues
  if (!isOpen && animationPhase === 0) {
    return null;
  }
  
  // Determine dialog titles safely
  const dialogTitle = animationPhase < 7 
    ? safeT('demo.title', { fallback: 'See How Lyyli Works' })
    : safeT('demo.readyToReplaceTitle', { fallback: 'Ready to replace time-consuming communication tasks?' });
    
  const dialogSubtitle = animationPhase < 7 
    ? safeT('demo.subtitle', { fallback: 'See how Lyyli can automate your communications and save you time' })
    : '';
  
  // Safe loading text
  const loadingText = safeT('demo.generating', { fallback: 'Generating...' });
  
  // Safe pause/resume button text
  const pauseButtonText = isPaused 
    ? safeT('demo.resume', { fallback: 'Resume' })
    : safeT('demo.pause', { fallback: 'Pause' });
  
  return (
    <Dialog open={isOpen} onOpenChange={(open) => {
      if (!open) {
        // Add a slight delay before closing to avoid animation glitches
        setTimeout(() => setIsOpen(false), 100);
      } else {
        setIsOpen(true);
      }
    }}>
      <DialogContent 
        className="p-0 overflow-hidden" 
        style={{ 
          width: isMobile ? "95vw" : "650px", 
          maxWidth: "95vw", 
          height: isMobile ? "80vh" : "600px"
        }}
      >
        <AnimationController 
          isOpen={isOpen}
          animationPhase={animationPhase}
          setAnimationPhase={setAnimationPhase}
          setIsLoading={setIsLoading}
          isPaused={isPaused}
        />
        <div className="flex flex-col h-full">
          <DialogHeader className="p-3 md:p-4 border-b bg-background flex flex-row justify-between items-center">
            <div className="flex-1">
              <DialogTitle className="text-center text-base md:text-lg">
                {dialogTitle}
              </DialogTitle>
              <DialogDescription className="text-center text-xs md:text-sm text-muted-foreground">
                {dialogSubtitle}
              </DialogDescription>
            </div>
            
            <Button
              variant="ghost"
              size="icon"
              onClick={togglePause}
              className="ml-2"
              title={pauseButtonText}
              disabled={isLoading}
            >
              {isPaused ? <Play className="h-4 w-4" /> : <Pause className="h-4 w-4" />}
            </Button>
          </DialogHeader>
          
          <div className="flex-grow relative overflow-hidden">
            {isLoading && (
              <div className="absolute inset-0 flex items-center justify-center bg-background/80 z-10">
                <div className="flex flex-col items-center space-y-4">
                  <Loader2 className="h-8 w-8 md:h-10 md:w-10 animate-spin text-primary" />
                  <p className="text-sm text-muted-foreground">
                    {loadingText}
                  </p>
                </div>
              </div>
            )}
            
            <ErrorBoundary>
              {/* Chat Interface */}
              <div 
                className={`w-full h-full absolute top-0 left-0 transition-opacity duration-500 ${
                  animationPhase >= 7 ? "opacity-0 pointer-events-none" : "opacity-100"
                }`}
              >
                <ChatInterface 
                  animationPhase={animationPhase}
                  chatContainerRef={chatContainerRef}
                />
              </div>
              
              {/* Slack interface transition */}
              <div 
                className={`w-full h-full absolute top-0 left-0 transition-opacity duration-500 ${
                  animationPhase < 7 ? "opacity-0 pointer-events-none" : "opacity-100"
                }`}
              >
                <SlackInterface animationPhase={animationPhase} />
              </div>
            </ErrorBoundary>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default DemoDialog;
