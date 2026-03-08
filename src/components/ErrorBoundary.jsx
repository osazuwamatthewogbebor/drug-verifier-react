import React from 'react';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.error("Uncaught error:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div style={{ padding: '40px', color: '#e11d48', backgroundColor: '#fff1f2', minHeight: '100vh', fontFamily: 'sans-serif' }}>
          <h1 style={{ fontSize: '24px', fontWeight: 'bold', marginBottom: '16px' }}>SafeVerify Runtime Error</h1>
          <p style={{ marginBottom: '24px' }}>The application crashed during render. Error details:</p>
          <pre style={{ padding: '20px', backgroundColor: '#000', color: '#fff', borderRadius: '12px', overflow: 'auto' }}>
            {this.state.error?.toString()}
          </pre>
          <button 
            onClick={() => window.location.reload()}
            style={{ marginTop: '24px', padding: '12px 24px', backgroundColor: '#e11d48', color: '#fff', border: 'none', borderRadius: '8px', cursor: 'pointer', fontWeight: 'bold' }}
          >
            Retry Loading
          </button>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
