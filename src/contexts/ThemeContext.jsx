import React, { createContext, useContext, useState, useEffect } from 'react';

const ThemeContext = createContext(null);

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(() => {
    try {
      if (typeof window === 'undefined') return 'light';
      
      const savedTheme = localStorage.getItem('theme');
      if (savedTheme) {
        return savedTheme;
      }

      if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        return 'dark';
      }

      return 'light';
    } catch (error) {
      console.warn('Error getting theme from localStorage:', error);
      return 'light';
    }
  });

  useEffect(() => {
    try {
      if (typeof window === 'undefined') return;
      
      const root = window.document.documentElement;
      root.classList.remove('light', 'dark');
      root.classList.add(theme);
      localStorage.setItem('theme', theme);
    } catch (error) {
      console.warn('Error setting theme:', error);
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => prev === 'light' ? 'dark' : 'light');
  };

  const value = {
    theme,
    toggleTheme
  };

  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (context === null || context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};