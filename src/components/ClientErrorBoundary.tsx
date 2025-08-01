'use client'

import React from 'react'

interface ErrorBoundaryState {
  hasError: boolean
  error?: Error
}

interface ErrorBoundaryProps {
  children: React.ReactNode
  fallback?: React.ComponentType<{ error: Error; reset: () => void }>
}

class ClientErrorBoundary extends React.Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props)
    this.state = { hasError: false }
  }

  static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    return { hasError: true, error }
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error('Client Error Boundary caught an error:', error, errorInfo)
    
    // Filter out specific known errors that are not critical
    const ignoredErrors = [
      'Failed to fetch',
      'FullStory',
      'fullstory',
      'hmrM',
      'webpack'
    ]
    
    const shouldIgnore = ignoredErrors.some(ignored => 
      error.message?.toLowerCase().includes(ignored.toLowerCase()) ||
      error.stack?.toLowerCase().includes(ignored.toLowerCase())
    )
    
    if (shouldIgnore) {
      console.warn('Ignoring non-critical error:', error.message)
      // Reset the error boundary for known non-critical errors
      this.setState({ hasError: false, error: undefined })
      return
    }
  }

  render() {
    if (this.state.hasError && this.state.error) {
      const FallbackComponent = this.props.fallback || DefaultErrorFallback
      return (
        <FallbackComponent 
          error={this.state.error} 
          reset={() => this.setState({ hasError: false, error: undefined })}
        />
      )
    }

    return this.props.children
  }
}

function DefaultErrorFallback({ error, reset }: { error: Error; reset: () => void }) {
  return (
    <div className="min-h-screen bg-neutral-950 flex items-center justify-center p-4">
      <div className="max-w-md w-full bg-neutral-900 rounded-xl p-8 border border-red-500/30 text-center">
        <div className="w-16 h-16 bg-red-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
          <svg className="w-8 h-8 text-red-400" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
          </svg>
        </div>
        
        <h2 className="text-xl font-bold text-red-400 mb-4">Something went wrong</h2>
        <p className="text-neutral-300 mb-6 text-sm">
          We encountered an unexpected error. Please try refreshing the page.
        </p>
        
        <div className="space-y-3">
          <button
            onClick={reset}
            className="w-full bg-primary-500 hover:bg-primary-600 text-neutral-950 font-bold py-3 px-6 rounded-lg transition-colors duration-200"
          >
            Try Again
          </button>
          
          <button
            onClick={() => window.location.reload()}
            className="w-full bg-neutral-700 hover:bg-neutral-600 text-white font-medium py-2 px-6 rounded-lg transition-colors duration-200"
          >
            Refresh Page
          </button>
        </div>
        
        <details className="mt-6 text-left">
          <summary className="text-neutral-400 text-sm cursor-pointer hover:text-neutral-300">
            Error Details
          </summary>
          <pre className="mt-2 p-3 bg-neutral-800 rounded text-xs text-red-300 overflow-auto max-h-32">
            {error.message}
          </pre>
        </details>
      </div>
    </div>
  )
}

export default ClientErrorBoundary
