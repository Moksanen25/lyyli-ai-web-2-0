
import React from 'react';

interface ChatMessageProps {
  role: 'user' | 'assistant' | 'system';
  content: string;
  timestamp: Date;
  isMobile: boolean;
}

const ChatMessage: React.FC<ChatMessageProps> = ({ role, content, timestamp, isMobile }) => {
  // Format content to prevent layout breaking with long words
  const formatMessageContent = (content: string) => {
    if (!isMobile) return content;
    // Split long words/URLs to prevent layout breaking
    return content.replace(/(\S{30})/g, '$1\u200B');
  };

  return (
    <div className={`flex ${role === 'user' ? 'justify-end' : 'justify-start'}`}>
      <div 
        className={`max-w-[85%] ${isMobile ? 'break-words' : ''} rounded-lg p-3 ${
          role === 'user'
            ? 'bg-primary text-primary-foreground'
            : 'bg-muted'
        }`}
        style={{ 
          overflowWrap: 'break-word', 
          wordBreak: 'break-word',
          hyphens: 'auto'
        }}
      >
        <p>{formatMessageContent(content)}</p>
        <p className="text-xs opacity-70 mt-1">
          {timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
        </p>
      </div>
    </div>
  );
};

export default ChatMessage;
