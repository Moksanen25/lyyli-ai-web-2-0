
import React, { useRef, useEffect } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog';
import ChatInterface from './ChatInterface';
import SlackInterface from './SlackInterface';
import AnimationController from './AnimationController';

interface DemoDialogProps {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  animationPhase: number;
  setAnimationPhase: React.Dispatch<React.SetStateAction<number>>;
}

const DemoDialog: React.FC<DemoDialogProps> = ({ 
  isOpen,
  setIsOpen, 
  animationPhase, 
  setAnimationPhase 
}) => {
  const chatContainerRef = useRef<HTMLDivElement>(null);
  
  // Auto-scroll to bottom when new messages appear
  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
    }
  }, [animationPhase]);
  
  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent className="p-0 overflow-hidden max-h-[90vh]" style={{ width: "650px", maxWidth: "90vw", height: "600px" }}>
        <AnimationController 
          isOpen={isOpen}
          animationPhase={animationPhase}
          setAnimationPhase={setAnimationPhase}
        />
        <div className="flex flex-col h-full">
          <DialogHeader className="p-4 border-b bg-background">
            <DialogTitle className="text-center">
              {animationPhase < 7 ? "Lyyli.ai Content Assistant" : "Content Published"}
            </DialogTitle>
            <DialogDescription className="text-center text-sm text-muted-foreground">
              {animationPhase < 7 ? "Creating content with AI" : "Publishing to communication channels"}
            </DialogDescription>
          </DialogHeader>
          
          <div className="flex-grow relative overflow-hidden">
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
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default DemoDialog;
