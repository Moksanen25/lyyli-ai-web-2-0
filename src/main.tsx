
import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App.tsx';
import './index.css';

// Error boundary for the entire app
class ErrorBoundary extends React.Component<{children: React.ReactNode}, {hasError: boolean, error: Error | null, errorInfo: React.ErrorInfo | null}> {
  constructor(props: {children: React.ReactNode}) {
    super(props);
    this.state = { 
      hasError: false, 
      error: null,
      errorInfo: null
    };
  }

  static getDerivedStateFromError(error: Error) {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error("React Error:", error);
    console.error("Component Stack:", errorInfo.componentStack);
    this.setState({ errorInfo });
  }

  render() {
    if (this.state.hasError) {
      return (
        <div style={{ 
          padding: '20px', 
          margin: '20px', 
          backgroundColor: '#fff1f0', 
          border: '1px solid #ffa39e',
          borderRadius: '4px',
          color: '#cf1322',
          maxWidth: '800px',
          margin: '20px auto'
        }}>
          <h2>Something went wrong.</h2>
          <p>The application encountered an error. Please refresh the page or contact support if the issue persists.</p>
          
          {import.meta.env.DEV && (
            <div style={{ marginTop: '20px' }}>
              <details>
                <summary style={{ cursor: 'pointer', fontWeight: 'bold' }}>Error Details (for developers)</summary>
                <pre style={{ 
                  backgroundColor: '#f8f8f8', 
                  padding: '10px', 
                  overflow: 'auto',
                  border: '1px solid #ddd',
                  marginTop: '10px',
                  fontSize: '14px'
                }}>
                  {this.state.error?.toString()}
                  {this.state.errorInfo?.componentStack}
                </pre>
              </details>
            </div>
          )}
          
          <button 
            onClick={() => window.location.reload()} 
            style={{
              backgroundColor: '#ff4d4f', 
              color: 'white', 
              border: 'none',
              borderRadius: '4px',
              padding: '8px 16px',
              cursor: 'pointer',
              marginTop: '15px'
            }}
          >
            Refresh Page
          </button>
        </div>
      );
    }

    return this.props.children;
  }
}

// Create the root and render the app
const rootElement = document.getElementById('root');

if (!rootElement) {
  console.error('Root element not found!');
} else {
  try {
    console.log('Mounting React application');
    const root = createRoot(rootElement);
    root.render(
      <React.StrictMode>
        <ErrorBoundary>
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </ErrorBoundary>
      </React.StrictMode>
    );
    console.log('Application rendered successfully');
  } catch (error) {
    console.error('Failed to render application:', error);
    rootElement.innerHTML = '<div style="padding: 20px; color: red;">Failed to load application. Please check console for errors.</div>';
  }
}
