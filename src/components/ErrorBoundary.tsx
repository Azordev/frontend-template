import React from 'react'
import Error from './Error'

interface ErrorBoundaryProps {
  children: React.ReactNode
}

type ErrorBoundaryState = {
  error: Error | null
  errorInfo: React.ErrorInfo | null
  hasError: boolean
}

class ErrorBoundary extends React.Component<ErrorBoundaryProps, ErrorBoundaryState> {
  // Constructor for initializing Variables etc in a state
  // Just similar to initial line of useState if you are familiar
  // with Functional Components
  constructor(props: ErrorBoundaryProps) {
    super(props)
    this.state = { error: null, errorInfo: null, hasError: false }
  }

  static getDerivedStateFromError(error: Error) {
    if (error) {
      return { hasError: true }
    }
  }

  // This method is called if any error is encountered
  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    // Catch errors in any components below and
    // re-render with error message
    this.setState({
      error,
      errorInfo,
    })

    // You can also log error messages to an error
    // reporting service here
  }

  // This will render this component wherever called
  render() {
    const { hasError, errorInfo } = this.state
    if (hasError) {
      // Error path
      return <Error errorInfo={errorInfo} />
    }
    // Normally, just render children, i.e. in
    // case no error is Found
    return this.props.children
  }
}

export default ErrorBoundary
