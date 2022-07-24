import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./bundle.css";
import { Provider } from 'react-redux';
import { configStore } from './redux/store';
import { ErrorBoundary } from 'react-error-boundary';
import { HelmetProvider } from 'react-helmet-async';
import { PersistGate } from 'redux-persist/lib/integration/react';
import { BrowserRouter } from 'react-router-dom';
import client from './apolloClient';
import { ApolloProvider } from "@apollo/react-hooks";
import { AuthProvider } from "./contexts/authContext";


const { persistor, store } = configStore();

function ErrorFallback({ error, resetErrorBoundary }) {
  return (
    <div role="alert">
      <p>Something went wrong:</p>
      <pre>{error.message}</pre>
      <button onClick={resetErrorBoundary}>Try again</button>
    </div>
  )
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <AuthProvider>
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <ErrorBoundary FallbackComponent={ErrorFallback}>
          <HelmetProvider>
            <ApolloProvider client={client}>
              <BrowserRouter>
                <App />
              </BrowserRouter>
            </ApolloProvider>
          </HelmetProvider>
        </ErrorBoundary>
      </PersistGate>
    </Provider>
  </AuthProvider>
);

