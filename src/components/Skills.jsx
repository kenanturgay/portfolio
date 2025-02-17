import React from 'react';
import { Code2 } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const Skills = () => {
  const { t } = useLanguage();
  
  const skills = [
    { name: "React & React Hooks", level: t('skills.levels.advanced') },
    { name: "Tailwind CSS", level: t('skills.levels.advanced') },
    { name: "Git & Version Control", level: t('skills.levels.advanced') },
    { name: "REST APIs", level: t('skills.levels.advanced') },
    { name: "PostgreSQL", level: t('skills.levels.intermediate') },
    { name: "Python", level: t('skills.levels.intermediate') },
    { name: "Java", level: t('skills.levels.intermediate') },
    { name: "Spring Boot", level: t('skills.levels.intermediate') },
    { name: "Figma", level: t('skills.levels.intermediate') },
    { name: "Testing (Jest, RTL)", level: t('skills.levels.intermediate') },
  ];

  return (
    <section className="py-20 bg-gray-50 dark:bg-black/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="section-title text-center dark:text-white">{t('skills.title')}</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skill, index) => (
            <div 
              key={index} 
              className="card p-6"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="bg-primary-50 dark:bg-primary-900/20 p-2 rounded-lg">
                  <Code2 className="h-6 w-6 text-primary-600 dark:text-primary-400" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">{skill.name}</h3>
              </div>
              <div className="w-full bg-gray-100 dark:bg-gray-800 rounded-full h-2">
                <div 
                  className="bg-gradient-to-r from-primary-500 to-primary-600 h-2 rounded-full"
                  style={{ 
                    width: skill.level.includes('Advanced') || skill.level.includes('İleri') ? '90%' : 
                           skill.level.includes('Intermediate') || skill.level.includes('Orta') ? '65%' : '40%' 
                  }}
                ></div>
              </div>
              <p className="text-gray-600 dark:text-gray-400 mt-2 text-sm">{skill.level}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;