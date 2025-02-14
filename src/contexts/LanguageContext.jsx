import React, { createContext, useContext } from 'react';
import { useLanguage as useLanguageHook } from '../hooks/useLanguage';

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const languageValue = useLanguageHook();

  return (
    <LanguageContext.Provider value={languageValue}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};