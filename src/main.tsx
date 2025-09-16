import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import ErrorBoundary from "./components/ErrorBoundary.tsx";
import { ThemeProvider } from "./context/ThemeContext.tsx";
import { AuthProvider } from "./context/AuthContext.tsx";
import { store } from "./redux/store";
import { Provider } from "react-redux";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <AuthProvider>
      <ThemeProvider>
        <ErrorBoundary>
          <Provider store={store}>
            <App />
          </Provider>
        </ErrorBoundary>
      </ThemeProvider>
    </AuthProvider>
  </StrictMode>
);
