
interface AnalyticsEvent {
  name: string;
  properties?: Record<string, any>;
  timestamp: string;
}

export const useAnalytics = () => {
  const track = (eventName: string, properties?: Record<string, any>) => {
    const event: AnalyticsEvent = {
      name: eventName,
      properties,
      timestamp: new Date().toISOString()
    };

    // In development, log to console
    if (import.meta.env.DEV) {
      console.log('Analytics event:', event);
    }

    // In production, you would send to your analytics service
    // Example: gtag('event', eventName, properties);
    // Example: analytics.track(eventName, properties);
  };

  return { track };
};
