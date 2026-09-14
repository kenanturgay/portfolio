import React, { createContext, useContext, useState } from 'react';

const SimpleThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    setTheme(prev => prev === 'light' ? 'dark' : 'light');
  };

  return (
    <SimpleThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </SimpleThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(SimpleThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};