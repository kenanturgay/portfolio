import React, { createContext, useContext, useState, useEffect } from 'react';
import { translations } from '../constants/translations.data';

const LanguageContext = createContext(null);

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState(() => {
    try {
      if (typeof window === 'undefined') return 'tr';
      
      const savedLanguage = localStorage.getItem('language');
      if (savedLanguage) {
        return savedLanguage;
      }

      const browserLanguage = navigator.language || navigator.userLanguage;
      const languageCode = browserLanguage.split('-')[0];

      if (['en', 'tr', 'ar'].includes(languageCode)) {
        return languageCode;
      }

      return 'tr';
    } catch (error) {
      console.warn('Error getting language from localStorage:', error);
      return 'tr';
    }
  });

  useEffect(() => {
    try {
      if (typeof window === 'undefined') return;
      
      document.documentElement.lang = language;
      document.documentElement.dir = language === 'ar' ? 'rtl' : 'ltr';
    } catch (error) {
      console.warn('Error setting document language:', error);
    }
  }, [language]);

  const changeLanguage = (lang) => {
    if (['en', 'tr', 'ar'].includes(lang)) {
      setLanguage(lang);
      try {
        if (typeof window === 'undefined') return;
        
        localStorage.setItem('language', lang);
        document.documentElement.lang = lang;
        document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
      } catch (error) {
        console.warn('Error saving language to localStorage:', error);
      }
    }
  };

  const t = (key) => {
    try {
      const keys = key.split('.');
      let value = translations[language];
      
      for (const k of keys) {
        if (value && typeof value === 'object' && k in value) {
          value = value[k];
        } else {
          return key; // Return the key if translation not found
        }
      }
      
      return value || key;
    } catch (error) {
      console.warn(`Translation error for key: ${key}`, error);
      return key;
    }
  };

  const value = {
    language,
    changeLanguage,
    t,
    translations
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === null || context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};