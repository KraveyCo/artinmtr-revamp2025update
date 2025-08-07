import React, { Component, ErrorInfo, ReactNode } from 'react';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
  error: Error | null;
}

class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false,
    error: null
  };

  public static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('Uncaught error:', error, errorInfo);
  }

  public render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen flex flex-col items-center justify-center p-4">
          <div className="max-w-md w-full text-center">
            <h1 className="text-4xl font-bold mb-4">Oops!</h1>
            <p className="text-gray-600 mb-6">
              Something went wrong. We're sorry for the inconvenience.
            </p>
            <div className="bg-red-50 p-4 rounded-lg mb-6 text-left">
              <p className="text-sm text-red-800 font-mono">
                {this.state.error?.message}
              </p>
            </div>
            <Button
              onClick={() => window.location.href = '/'}
              className="bg-primary text-white hover:bg-primary/90"
            >
              Return to Home
            </Button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary; 