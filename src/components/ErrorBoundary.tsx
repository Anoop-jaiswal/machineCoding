import React, { type ReactNode } from "react";

class ErrorBoundary extends React.Component {
  constructor(props: {}) {
    super(props);
    this.state = { hasError: false, error: null, errorInfo: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo): void {
    this.setState({ error, errorInfo });
  }

  render(): ReactNode {
    if (this.state.hasError) {
      return <>Something went wrong</>;
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
