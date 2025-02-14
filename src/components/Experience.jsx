import React from 'react';
import { Briefcase } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const Experience = () => {
  const { t } = useLanguage();

  return (
    <section className="py-20 bg-white/50 dark:bg-black/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="section-title text-center dark:text-white">{t('experience.title')}</h2>
        <div className="max-w-3xl mx-auto">
          {t('experience.positions').map((position, index) => (
            <div key={index} className="mb-12 flex gap-4">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-primary-100 dark:bg-primary-900/20 rounded-full flex items-center justify-center">
                  <Briefcase className="h-6 w-6 text-primary-600 dark:text-primary-400" />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">{position.title}</h3>
                <p className="text-primary-600 dark:text-primary-400">{position.company}</p>
                <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">{position.period}</p>
                <p className="text-gray-600 dark:text-gray-300">{position.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;