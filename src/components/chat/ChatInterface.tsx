
import React, { useState, useRef, useEffect } from 'react';
import { Send, Loader2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { ScrollArea } from '@/components/ui/scroll-area';
import { useToast } from '@/components/ui/use-toast';
import { 
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle
} from '@/components/ui/dialog';
import {
  hasOpenAICredentials,
  setOpenAICredentials,
  createThread,
  getThreadId,
  addMessageToThread,
  runAssistant,
  checkRunStatus,
  getMessages
} from '@/services/openaiService';

interface Message {
  role: 'user' | 'assistant' | 'system';
  content: string;
  timestamp: Date;
}

const ChatInterface = () => {
  const [messages, setMessages] = useState<Message[]>([
    { 
      role: 'assistant', 
      content: 'Hello! How can I help you today?', 
      timestamp: new Date() 
    }
  ]);
  const [inputMessage, setInputMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [threadId, setThreadId] = useState<string | null>(null);
  const [showApiKeyDialog, setShowApiKeyDialog] = useState(false);
  const [apiKey, setApiKey] = useState('');
  const [assistantId, setAssistantId] = useState('');
  const scrollRef = useRef<HTMLDivElement>(null);
  const { toast } = useToast();

  // Initialize thread and check for credentials
  useEffect(() => {
    if (!hasOpenAICredentials()) {
      setShowApiKeyDialog(true);
    }
    
    const storedThreadId = getThreadId();
    if (storedThreadId) {
      setThreadId(storedThreadId);
    } else {
      initializeThread();
    }
  }, []);

  // Scroll to bottom of chat when messages change
  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages]);

  const initializeThread = async () => {
    if (!hasOpenAICredentials()) return;
    
    try {
      const newThreadId = await createThread();
      setThreadId(newThreadId);
    } catch (error) {
      console.error('Error initializing thread:', error);
      toast({
        title: "Error",
        description: "Failed to initialize chat. Please try again.",
        variant: "destructive",
      });
    }
  };

  const handleSaveCredentials = () => {
    if (!apiKey || !assistantId) {
      toast({
        title: "Error",
        description: "Please provide both API Key and Assistant ID.",
        variant: "destructive",
      });
      return;
    }
    
    setOpenAICredentials(apiKey, assistantId);
    setShowApiKeyDialog(false);
    initializeThread();
    
    toast({
      title: "Success",
      description: "API credentials saved. Chat is now connected to OpenAI.",
    });
  };

  const pollRunStatus = async (threadId: string, runId: string) => {
    let runStatus = await checkRunStatus(threadId, runId);
    
    while (runStatus.status !== 'completed' && runStatus.status !== 'failed' && runStatus.status !== 'expired') {
      await new Promise(resolve => setTimeout(resolve, 1000));
      runStatus = await checkRunStatus(threadId, runId);
    }
    
    if (runStatus.status === 'completed') {
      const messagesResponse = await getMessages(threadId);
      
      if (messagesResponse.data && messagesResponse.data.length > 0) {
        const assistantMessage = messagesResponse.data.find(
          (msg: any) => msg.role === 'assistant'
        );
        
        if (assistantMessage) {
          const content = assistantMessage.content[0].text.value;
          
          setMessages(prev => [
            ...prev, 
            { 
              role: 'assistant', 
              content, 
              timestamp: new Date() 
            }
          ]);
        }
      }
    } else {
      throw new Error(`Run ended with status: ${runStatus.status}`);
    }
  };

  const handleSendMessage = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!inputMessage.trim() || !threadId || !hasOpenAICredentials()) {
      if (!hasOpenAICredentials()) {
        setShowApiKeyDialog(true);
      }
      return;
    }
    
    // Add user message to chat
    const userMessage: Message = {
      role: 'user',
      content: inputMessage,
      timestamp: new Date()
    };
    
    setMessages(prev => [...prev, userMessage]);
    setInputMessage('');
    setIsLoading(true);
    
    try {
      // Send message to OpenAI Assistant
      await addMessageToThread(threadId, inputMessage);
      
      // Run the assistant
      const runResponse = await runAssistant(threadId);
      
      // Poll for completion and get response
      await pollRunStatus(threadId, runResponse.id);
      
      setIsLoading(false);
    } catch (error) {
      console.error('Error sending message:', error);
      toast({
        title: "Error",
        description: "Failed to send message. Please try again.",
        variant: "destructive",
      });
      setIsLoading(false);
    }
  };

  return (
    <>
      <div className="border rounded-lg shadow-sm bg-card h-[600px] flex flex-col">
        <div className="p-4 border-b">
          <h2 className="font-semibold">Customer Support</h2>
        </div>
        
        <ScrollArea className="flex-grow p-4">
          <div className="space-y-4">
            {messages.map((message, index) => (
              <div 
                key={index} 
                className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div 
                  className={`max-w-[80%] rounded-lg p-3 ${
                    message.role === 'user'
                      ? 'bg-primary text-primary-foreground'
                      : 'bg-muted'
                  }`}
                >
                  <p>{message.content}</p>
                  <p className="text-xs opacity-70 mt-1">
                    {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                  </p>
                </div>
              </div>
            ))}
            <div ref={scrollRef} />
          </div>
        </ScrollArea>
        
        <form onSubmit={handleSendMessage} className="p-4 border-t flex gap-2">
          <Input
            value={inputMessage}
            onChange={(e) => setInputMessage(e.target.value)}
            placeholder="Type your message..."
            disabled={isLoading}
            className="flex-grow"
          />
          <Button type="submit" disabled={isLoading || !inputMessage.trim()}>
            {isLoading ? <Loader2 className="h-4 w-4 animate-spin" /> : <Send className="h-4 w-4" />}
            <span className="sr-only">Send</span>
          </Button>
        </form>
      </div>

      {/* API Key Dialog */}
      <Dialog open={showApiKeyDialog} onOpenChange={setShowApiKeyDialog}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Connect to OpenAI</DialogTitle>
            <DialogDescription>
              Enter your OpenAI API key and Assistant ID to enable the chatbot.
            </DialogDescription>
          </DialogHeader>
          
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <label htmlFor="openai-key" className="col-span-4">
                OpenAI API Key
              </label>
              <Input
                id="openai-key"
                type="password"
                value={apiKey}
                onChange={(e) => setApiKey(e.target.value)}
                placeholder="sk-..."
                className="col-span-4"
              />
            </div>
            
            <div className="grid grid-cols-4 items-center gap-4">
              <label htmlFor="assistant-id" className="col-span-4">
                OpenAI Assistant ID
              </label>
              <Input
                id="assistant-id"
                value={assistantId}
                onChange={(e) => setAssistantId(e.target.value)}
                placeholder="asst_..."
                className="col-span-4"
              />
            </div>
          </div>
          
          <DialogFooter>
            <Button onClick={handleSaveCredentials}>Save</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default ChatInterface;
