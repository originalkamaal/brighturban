import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./bundle.css";
import { Provider } from 'react-redux';
import { configStore } from './redux/store';
import { ErrorBoundary } from 'react-error-boundary';
import { HelmetProvider } from 'react-helmet-async';
import { PersistGate } from 'redux-persist/lib/integration/react';
import {BrowserRouter} from 'react-router-dom';

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

ReactDOM.render(
  <Provider store={store}>
    <PersistGate persistor={persistor}>
      <ErrorBoundary FallbackComponent={ErrorFallback}>
        <HelmetProvider>
          <React.StrictMode>
            <BrowserRouter>
              <App />
            </BrowserRouter>
          </React.StrictMode>
        </HelmetProvider>
      </ErrorBoundary>
    </PersistGate>
  </Provider>,
  document.getElementById('root')
);
