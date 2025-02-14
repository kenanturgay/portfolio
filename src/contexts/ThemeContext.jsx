import React, { createContext, useContext } from 'react';
import { useTheme as useThemeHook } from '../hooks/useTheme';

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const themeValue = useThemeHook();

  return (
    <ThemeContext.Provider value={themeValue}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};