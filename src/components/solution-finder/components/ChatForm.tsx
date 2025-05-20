
import React from 'react';
import { Send, Loader2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useTranslation } from '@/hooks/useTranslation';
import { useSafeTranslation } from '@/utils/safeTranslation';

interface ChatFormProps {
  inputMessage: string;
  isLoading: boolean;
  onInputChange: (value: string) => void;
  onSubmit: (e?: React.FormEvent) => void;
}

const ChatForm: React.FC<ChatFormProps> = ({
  inputMessage,
  isLoading,
  onInputChange,
  onSubmit
}) => {
  const { t } = useTranslation();
  const { featuresT } = useSafeTranslation();

  return (
    <form onSubmit={onSubmit} className="flex gap-2">
      <Input
        value={inputMessage}
        onChange={(e) => onInputChange(e.target.value)}
        placeholder={featuresT('solutionFinder.inputPlaceholder', { fallback: "Ask about your industry..." })}
        disabled={isLoading}
        className="flex-grow"
      />
      <Button type="submit" disabled={isLoading || !inputMessage.trim()}>
        {isLoading ? <Loader2 className="h-4 w-4 animate-spin" /> : <Send className="h-4 w-4" />}
        <span className="sr-only">{t('chat.send')}</span>
      </Button>
    </form>
  );
};

export default ChatForm;
