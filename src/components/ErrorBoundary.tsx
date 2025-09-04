// src/components/ErrorBoundary.tsx
import React, { Component, ReactNode } from 'react';
import { AlertTriangle, RefreshCw, Home } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
  error?: Error;
  errorInfo?: any;
}

class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error): State {
    // Update state to show error UI
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: any) {
    console.error('Error caught by boundary:', error, errorInfo);
    
    this.setState({
      error,
      errorInfo
    });
    
    // Send error to analytics if available
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', 'exception', {
        description: `${error.name}: ${error.message}`,
        fatal: false,
        error_stack: error.stack?.substring(0, 150) // Truncate for analytics
      });
    }
  }

  handleRefresh = () => {
    window.location.reload();
  }

  handleGoHome = () => {
    window.location.href = '/';
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
          <div className="text-center p-8 max-w-lg bg-white rounded-lg shadow-lg">
            <AlertTriangle className="h-16 w-16 text-red-500 mx-auto mb-6" />
            
            <h1 className="text-2xl font-bold mb-4 text-gray-900">
              Oops! Something went wrong
            </h1>
            
            <p className="text-gray-600 mb-6 leading-relaxed">
              I'm sorry, but there was an unexpected error while loading the page. 
              This has been automatically reported and I'll work to fix it soon.
            </p>
            
            {/* Error Details (only in development) */}
            {process.env.NODE_ENV === 'development' && this.state.error && (
              <details className="mb-6 text-left">
                <summary className="cursor-pointer text-sm text-gray-500 mb-2">
                  View Error Details
                </summary>
                <div className="bg-red-50 border border-red-200 rounded p-3 text-xs font-mono text-red-800 overflow-auto max-h-32">
                  <p className="mb-2"><strong>Error:</strong> {this.state.error.message}</p>
                  {this.state.error.stack && (
                    <p><strong>Stack:</strong> {this.state.error.stack}</p>
                  )}
                </div>
              </details>
            )}
            
            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Button 
                onClick={this.handleRefresh}
                className="bg-theme-primary hover:bg-theme-primary/90 text-white"
              >
                <RefreshCw className="mr-2 h-4 w-4" />
                Refresh Page
              </Button>
              
              <Button 
                onClick={this.handleGoHome}
                variant="outline"
                className="border-gray-300 hover:bg-gray-50"
              >
                <Home className="mr-2 h-4 w-4" />
                Go Home
              </Button>
            </div>
            
            {/* Contact Option */}
            <div className="mt-6 pt-6 border-t border-gray-200">
              <p className="text-sm text-gray-500 mb-3">
                If this problem persists, please let me know:
              </p>
              <Button variant="ghost" size="sm" asChild>
                <a href="mailto:ioj@andrew.cmu.edu?subject=Website Error Report">
                  Report this issue
                </a>
              </Button>
            </div>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;