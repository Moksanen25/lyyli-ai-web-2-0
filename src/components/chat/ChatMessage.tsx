
import React from 'react';
import Link from 'next/link';
import { ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useTranslation } from '@/hooks/useTranslation';

interface ChatMessageProps {
  role: 'user' | 'assistant' | 'system';
  content: string;
  timestamp: Date;
  isMobile: boolean;
}

const ChatMessage: React.FC<ChatMessageProps> = ({ role, content, timestamp, isMobile }) => {
  const { t } = useTranslation();

  // Format content to prevent layout breaking with long words
  const formatMessageContent = (content: string) => {
    if (!isMobile) return content;
    // Split long words/URLs to prevent layout breaking
    return content.replace(/(\S{30})/g, '$1\u200B');
  };

  // Check for case study links in the format [CASE_STUDY:path/to/study]
  const renderedContent = () => {
    const caseStudyPattern = /\[CASE_STUDY:([^\]]+)\]/g;
    
    if (caseStudyPattern.test(content)) {
      // Reset regex state
      caseStudyPattern.lastIndex = 0;
      
      // Replace case study links with buttons
      const parts = content.split(caseStudyPattern);
      
      if (parts.length > 1) {
        return (
          <>
            <p>{formatMessageContent(parts[0])}</p>
            {parts[1] && (
              <Link href={parts[1]} className="mt-2 block">
                <Button variant="outline" size="sm" className="mt-2">
                  <ExternalLink className="mr-1 h-4 w-4" />
                  {t('chat.caseStudy.view')}
                </Button>
              </Link>
            )}
            {parts[2] && <p className="mt-2">{formatMessageContent(parts[2])}</p>}
          </>
        );
      }
    }
    
    // Improve readability by processing headers and paragraphs
    const formattedContent = formatMessageContent(content);
    
    // Convert markdown-style headers (## Header) to styled headers
    const contentWithHeaders = formattedContent.split('\n').map((line, i) => {
      if (line.startsWith('## ')) {
        return <h3 key={i} className="font-bold mt-3 mb-1">{line.replace('## ', '')}</h3>;
      } else if (line.startsWith('# ')) {
        return <h2 key={i} className="font-bold text-lg mt-3 mb-2">{line.replace('# ', '')}</h2>;
      } else if (line.trim() === '') {
        return <br key={i} />;
      } else {
        return <p key={i} className="mb-2">{line}</p>;
      }
    });

    return contentWithHeaders;
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
        {renderedContent()}
        <p className="text-xs opacity-70 mt-1">
          {timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
        </p>
      </div>
    </div>
  );
};

export default ChatMessage;
