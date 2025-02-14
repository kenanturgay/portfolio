import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import './index.css';
import { ThemeProvider } from './contexts/ThemeContext';
import { LanguageProvider } from './contexts/LanguageContext';

createRoot(document.getElementById('root')).render(
  <ThemeProvider>
    <LanguageProvider>
      <App />
    </LanguageProvider>
  </ThemeProvider>
);