import React from 'react';
import { Code2, Laptop, Users } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const iconComponents = {
  Code2: Code2,
  Laptop: Laptop,
  Users: Users
};

const About = () => {
  const { t } = useLanguage();

  const features = [
    {
      icon: 'Code2',
      ...t('about.features.tech')
    },
    {
      icon: 'Laptop',
      ...t('about.features.design')
    },
    {
      icon: 'Users',
      ...t('about.features.team')
    }
  ];

  return (
    <section className="py-20 bg-white dark:bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="section-title text-center dark:text-white">{t('about.title')}</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => {
            const Icon = iconComponents[feature.icon];
            return (
              <div key={index} className="card p-6">
                <div className="bg-primary-50 dark:bg-primary-900/20 p-4 rounded-xl mb-6 w-fit">
                  <Icon className="h-6 w-6 text-primary-600 dark:text-primary-400" />
                </div>
                <h3 className="text-heading-3 mb-4 dark:text-white">{feature.title}</h3>
                <p className="text-gray-600 dark:text-gray-400">{feature.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default About;