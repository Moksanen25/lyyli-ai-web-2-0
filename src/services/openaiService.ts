
export const sendMessage = async () => {
  // OpenAI functionality is disabled for now
  return {
    success: false,
    error: 'OpenAI functionality is temporarily disabled.'
  }
}

export const hasOpenAICredentials = (): boolean => {
  return false
}
