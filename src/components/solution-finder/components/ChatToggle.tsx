
import React from 'react';
import { MessageSquare } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useSafeTranslation } from '@/utils/safeTranslation';

interface ChatToggleProps {
  isChatOpen: boolean;
  onToggle: () => void;
}

const ChatToggle: React.FC<ChatToggleProps> = ({ isChatOpen, onToggle }) => {
  const { featuresT } = useSafeTranslation();
  
  return (
    <div className="flex md:hidden justify-center mb-4">
      <Button 
        onClick={onToggle} 
        variant="outline" 
        className="w-full flex items-center justify-center gap-2"
      >
        <MessageSquare className="h-4 w-4" />
        {isChatOpen 
          ? featuresT('solutionFinder.closeChat', { fallback: "Close industry advisor" })
          : featuresT('solutionFinder.openChat', { fallback: "Open industry advisor" })
        }
      </Button>
    </div>
  );
};

export default ChatToggle;
