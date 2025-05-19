
export const useAnalytics = () => {
  return {
    track: (eventName: string, properties?: Record<string, any>) => {
      console.log('Analytics event:', eventName, properties);
    }
  };
};
