
/**
 * Displays messages with a delay to create a natural conversation flow
 * @param messages - Array of messages to display
 * @param onMessageDisplay - Callback function when a message is displayed
 * @param delay - Delay between messages in milliseconds
 */
export const displayMessagesWithDelay = async (
  messages: any[],
  onMessageDisplay: (message: any) => void,
  delay: number = 1000
) => {
  // Character delay for typing effect (milliseconds per character)
  const charDelay = 50;
  let cumulativeDelay = 0;
  
  messages.forEach((message, index) => {
    // Calculate delay based on previous message length
    const prevContentLength = index > 0 ? messages[index-1].content?.length || 0 : 0;
    const typingDelay = prevContentLength * charDelay;
    
    // Add base delay plus typing delay
    cumulativeDelay += delay + typingDelay;
    
    setTimeout(() => {
      // Add the message
      onMessageDisplay(message);
    }, cumulativeDelay);
  });
};
