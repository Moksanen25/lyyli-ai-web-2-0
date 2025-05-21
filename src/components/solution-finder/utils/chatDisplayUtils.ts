
import { ChatMessage } from "../hooks/types";

/**
 * Displays messages with a delay to create a natural conversation flow
 */
export const displayMessagesWithDelay = (
  messageContents: string[],
  addMessage: (content: string) => void,
  onComplete: () => void
) => {
  // Base delay between messages for better reading pace (2 seconds)
  const baseDelay = 2000; 
  // Additional delay per character (simulates typing speed)
  const charDelay = 0.05;
  
  let cumulativeDelay = 0;
  
  messageContents.forEach((content, index) => {
    // Calculate delay based on previous message length
    const prevContentLength = index > 0 ? messageContents[index-1].length : 0;
    const typingDelay = prevContentLength * charDelay;
    
    // Add increasing delay for each message: base delay + typing simulation
    cumulativeDelay += baseDelay + Math.min(typingDelay, 1000); // Cap typing delay at 1s max
    
    setTimeout(() => {
      // Add the message
      addMessage(content);
      
      // If this is the last message, call the onComplete callback
      if (index === messageContents.length - 1) {
        onComplete();
      }
    }, cumulativeDelay);
  });
};
