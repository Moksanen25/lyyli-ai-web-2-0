
import React from 'react';
import { useSafeTranslation } from '@/utils/safeTranslation';
import { ImageWithFallback } from '@/components/ui/image-with-fallback';

const ChatHeader: React.FC = () => {
  const { featuresT } = useSafeTranslation();
  
  return (
    <div className="p-3 border-b bg-muted/40 flex items-center">
      <div className="rounded-full w-8 h-8 flex items-center justify-center overflow-hidden">
        <ImageWithFallback 
          src="/lovable-uploads/13b5a3a7-e059-4fe1-ba7b-8173b2638f6e.png"
          alt="Lyyli avatar"
          width={32}
          height={32}
          className="w-full h-full object-cover"
          fallbackSrc="/placeholder.svg"
        />
      </div>
      <span className="ml-2 font-medium">
        {featuresT('solutionFinder.title', { fallback: "Lyyli Industry Advisor" })}
      </span>
    </div>
  );
};

export default ChatHeader;
