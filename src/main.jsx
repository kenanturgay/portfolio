import React from 'react';
import ReactDOM from 'react-dom/client';
import { ThemeProvider } from './contexts/SimpleThemeContext';
import { LanguageProvider } from './contexts/SimpleLanguageContext';
import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ThemeProvider>
      <LanguageProvider>
        <App />
      </LanguageProvider>
    </ThemeProvider>
  </React.StrictMode>
);