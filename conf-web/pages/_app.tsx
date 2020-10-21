import React from "react";
import { AppProps } from "next/app";
import { ThemeProvider } from "../providers/use-theme";
import AppErrorBoundary from "../components/app-error-boundary";
import "../styles/globals.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider>
      <AppErrorBoundary>
        <Component {...pageProps} />
      </AppErrorBoundary>
    </ThemeProvider>
  );
}

export default MyApp;
