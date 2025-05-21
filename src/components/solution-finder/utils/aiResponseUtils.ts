
import { SupportedLanguage } from "@/translations";

/**
 * Process AI response to check for special commands and split into multiple messages
 */
export const processAIResponse = (content: string): string[] => {
  // Check if the response contains a command to open the demo dialog
  if (content.includes("[[OPEN_DEMO]]")) {
    // Remove the commands from the displayed message
    content = content.replace("[[OPEN_DEMO]]", "").replace("[[USER_CONFIRMED_DEMO]]", "");
  }
  
  let messages: string[] = [];
  
  // Split the response into separate "speech bubbles" using the [[NEXT_MESSAGE]] delimiter
  if (content.includes("[[NEXT_MESSAGE]]")) {
    // Split by delimiter and filter out empty messages
    messages = content
      .split("[[NEXT_MESSAGE]]")
      .map(msg => msg.trim())
      .filter(msg => msg.length > 0);
  } else {
    // Split by sentences for better readability (max 2 sentences per bubble)
    // Use regex to match sentence endings (periods, question marks, exclamation points followed by space or line break)
    const sentences = content.match(/[^.!?]+[.!?]+(\s|$)/g) || [content];
    
    if (sentences.length > 1) {
      // Group sentences into chunks of 1-2 sentences
      for (let i = 0; i < sentences.length; i += 2) {
        if (i + 1 < sentences.length) {
          // Two sentences
          messages.push((sentences[i] + sentences[i + 1]).trim());
        } else {
          // Just one sentence left
          messages.push(sentences[i].trim());
        }
      }
    } else {
      messages = [content];
    }
  }
  
  return messages;
};

/**
 * Create an enhanced prompt with context for the AI
 */
export const createEnhancedPrompt = (userMessage: string, languageCode: SupportedLanguage = 'en') => {
  return `
USER CONTEXT: The user is on the Features page looking at industry-specific solutions.
USER LANGUAGE: ${languageCode.toUpperCase()} (${languageCode === 'fi' ? 'Finnish' : 'English'})

INSTRUCTIONS: 
- You are Lyyli AI, an assistant specialized in helping users find the right solution for their industry.
- IMPORTANT: RESPOND IN ${languageCode === 'fi' ? 'FINNISH' : 'ENGLISH'} LANGUAGE.
- Respond in a friendly, helpful voice.
- Your goal is to guide users toward booking a demo or signing up.
- IMPORTANT: Break up your responses into multiple chat bubbles using [[NEXT_MESSAGE]] between each section.
- Keep each message bubble VERY SHORT - maximum 1-2 sentences per bubble.
- Use frequent [[NEXT_MESSAGE]] markers to create a conversational flow.
- Use clear headers and short paragraphs to make your responses more readable.
- If they ask about a specific industry (tech, consulting, nonprofit, education, creative, sports), provide relevant challenges and solutions in a structured format.
- When appropriate, refer to relevant case studies or blog posts that might help them.
- Always ask if they'd like to know more or have other questions before suggesting a demo.
- ONLY include [[OPEN_DEMO]] in your response if the user has EXPLICITLY said "yes" to booking a demo AND include [[USER_CONFIRMED_DEMO]] as well.
- If they ask questions outside the scope of Lyyli's services, acknowledge their question and steer the conversation back to how Lyyli can help.

USER MESSAGE: ${userMessage}
`;
};
