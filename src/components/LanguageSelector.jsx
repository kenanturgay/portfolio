import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';

const LanguageSelector = () => {
  const { language, changeLanguage } = useLanguage();

  return (
    <div className="relative inline-block">
      <select
        value={language}
        onChange={(e) => changeLanguage(e.target.value)}
        className="appearance-none bg-transparent py-2 pl-3 pr-8 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors cursor-pointer text-gray-600 dark:text-gray-400"
      >
        <option value="tr"> TR</option>
        <option value="en"> EN</option>
      </select>
    </div>
  );
};

export default LanguageSelector;