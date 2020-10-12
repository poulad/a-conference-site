import React from "react";
import Layout from "./layout";

type ErrorState = {
  hasError: boolean;
  error?: Error;
  message?: string;
  code?: string;
};

export default class AppErrorBoundary extends React.Component {
  state: ErrorState = { hasError: false };

  constructor(props) {
    super(props);
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    // You can also log the error to an error reporting service
    console.warn("Error Reporting Service:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <Layout>
          <div className="container">
            <div className="row">
              <h2>Something went wrong!</h2>
            </div>
            <section className="row">
              <h4>Error boundary state is:</h4>
              <pre>{JSON.stringify(this.state, null, 2)}</pre>
            </section>
          </div>
        </Layout>
      );
    }

    return this.props.children;
  }
}
