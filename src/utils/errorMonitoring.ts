
// Error monitoring utility - ready for integration with services like Sentry
export interface ErrorContext {
  userId?: string;
  userAgent?: string;
  url?: string;
  timestamp?: string;
  additionalData?: Record<string, any>;
}

export class ErrorMonitor {
  private static instance: ErrorMonitor;
  private isProduction = import.meta.env.PROD;
  private sentryDsn = import.meta.env.VITE_SENTRY_DSN; // Configure in production

  private constructor() {
    this.setupGlobalErrorHandlers();
  }

  static getInstance(): ErrorMonitor {
    if (!ErrorMonitor.instance) {
      ErrorMonitor.instance = new ErrorMonitor();
    }
    return ErrorMonitor.instance;
  }

  private setupGlobalErrorHandlers() {
    // Global error handler
    window.addEventListener('error', (event) => {
      this.captureError(new Error(event.message), {
        url: event.filename,
        additionalData: {
          line: event.lineno,
          column: event.colno,
        }
      });
    });

    // Unhandled promise rejections
    window.addEventListener('unhandledrejection', (event) => {
      this.captureError(new Error(event.reason), {
        additionalData: {
          type: 'unhandledrejection',
          reason: event.reason
        }
      });
    });
  }

  captureError(error: Error, context?: ErrorContext) {
    const errorData = {
      message: error.message,
      stack: error.stack,
      name: error.name,
      timestamp: new Date().toISOString(),
      url: window.location.href,
      userAgent: navigator.userAgent,
      ...context
    };

    if (this.isProduction) {
      // In production, send to monitoring service
      this.sendToMonitoringService(errorData);
    } else {
      // In development, log to console
      console.error('Error captured:', errorData);
    }
  }

  captureMessage(message: string, level: 'info' | 'warning' | 'error' = 'info', context?: ErrorContext) {
    const messageData = {
      message,
      level,
      timestamp: new Date().toISOString(),
      url: window.location.href,
      ...context
    };

    if (this.isProduction) {
      this.sendToMonitoringService(messageData);
    } else {
      console.log(`[${level.toUpperCase()}] ${message}`, messageData);
    }
  }

  private async sendToMonitoringService(data: any) {
    try {
      // Placeholder for monitoring service integration
      // Example: Sentry, LogRocket, etc.
      if (this.sentryDsn) {
        // await Sentry.captureException(data);
      }
      
      // Fallback: send to custom endpoint
      await fetch('/api/errors', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });
    } catch (error) {
      console.error('Failed to send error to monitoring service:', error);
    }
  }

  setUser() {
    // Set user context for error tracking
    if (this.isProduction && this.sentryDsn) {
      // Sentry.setUser({ id: userId, ...additionalData });
    }
  }

  addBreadcrumb(message: string, category: string = 'navigation', data?: Record<string, any>) {
    // Add breadcrumb for error context
    if (this.isProduction && this.sentryDsn) {
      // Sentry.addBreadcrumb({ message, category, data });
    } else {
      console.log(`Breadcrumb: [${category}] ${message}`, data);
    }
  }
}

// Export singleton instance
export const errorMonitor = ErrorMonitor.getInstance();

// React Error Boundary hook
export const useErrorHandler = () => {
  return (error: Error, errorInfo?: any) => {
    errorMonitor.captureError(error, {
      additionalData: errorInfo
    });
  };
};
