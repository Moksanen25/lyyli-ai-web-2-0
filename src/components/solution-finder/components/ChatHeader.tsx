
import React from 'react';
import { useSafeTranslation } from '@/utils/safeTranslation';

const ChatHeader: React.FC = () => {
  const { featuresT } = useSafeTranslation();
  
  return (
    <div className="p-3 border-b bg-muted/40 flex items-center">
      <div className="bg-primary rounded-full w-8 h-8 flex items-center justify-center text-white font-semibold">L</div>
      <span className="ml-2 font-medium">
        {featuresT('solutionFinder.title', { fallback: "Lyyli Industry Advisor" })}
      </span>
    </div>
  );
};

export default ChatHeader;
