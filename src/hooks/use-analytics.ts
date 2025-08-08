
interface AnalyticsEvent {
  name: string;
  properties?: Record<string, unknown>;
  timestamp: string;
}

export const useAnalytics = () => {
  const track = (eventName: string, properties?: Record<string, unknown>) => {
    const event: AnalyticsEvent = {
      name: eventName,
      properties,
      timestamp: new Date().toISOString()
    };

    // In development, log to console
    if (process.env.NODE_ENV === 'development') {
      console.log('Analytics event:', event);
      return;
    }

    // In production, you would send to your analytics service
    // Example: gtag('event', eventName, properties);
    // Example: analytics.track(eventName, properties);
  };

  return { track };
};
