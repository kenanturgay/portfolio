import { useState, useEffect } from 'react';
import { translations } from '../constants/translations.data';

export const useLanguage = () => {
  const [language, setLanguage] = useState(() => {
    return localStorage.getItem('language') || 'tr';
  });

  useEffect(() => {
    document.documentElement.lang = language;
    document.documentElement.dir = language === 'ar' ? 'rtl' : 'ltr';
  }, [language]);

  const changeLanguage = (lang) => {
    if (['en', 'tr', 'ar'].includes(lang)) {
      setLanguage(lang);
      localStorage.setItem('language', lang);
      document.documentElement.lang = lang;
      document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
    }
  };

  const t = (key) => {
    const keys = key.split('.');
    let value = translations[language];
    for (const k of keys) {
      if (value === undefined) return key;
      value = value[k];
    }
    return value || key;
  };

  return { language, changeLanguage, t };
};