import React, { createContext, useContext, useState } from 'react';

const SimpleLanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState('tr');
  
  const t = (key) => {
    // Simple translation function
    const translations = {
      tr: {
        'nav.about': 'Hakkımda',
        'nav.experience': 'Deneyim',
        'nav.skills': 'Yetenekler',
        'nav.projects': 'Projeler',
        'nav.contact': 'İletişim',
        'hero.greeting': 'Merhaba, Ben',
        'hero.name': 'Kenan Turgay',
        'hero.title': 'Full Stack Developer',
        'hero.description': 'Full Stack Developer olarak modern teknolojilerle çalışıyor, kullanıcı dostu ve yüksek performanslı uygulamalar geliştiriyorum.',
        'hero.buttons.contact': 'İletişime Geç',
        'hero.buttons.projects': 'Projelerimi Gör',
        'about.title': 'Hakkımda',
        'experience.title': 'Deneyim',
        'skills.title': 'Yetenekler',
        'skills.levels.advanced': 'İleri Seviye',
        'skills.levels.intermediate': 'Orta Seviye',
        'skills.levels.beginner': 'Başlangıç Seviye',
        'projects.title': 'Projeler',
        'contact.title': 'İletişim'
      }
    };
    
    const keys = key.split('.');
    let value = translations[language];
    
    for (const k of keys) {
      if (value && typeof value === 'object' && k in value) {
        value = value[k];
      } else {
        return key;
      }
    }
    
    return value || key;
  };

  const changeLanguage = (lang) => {
    setLanguage(lang);
  };

  return (
    <SimpleLanguageContext.Provider value={{ language, changeLanguage, t }}>
      {children}
    </SimpleLanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(SimpleLanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};