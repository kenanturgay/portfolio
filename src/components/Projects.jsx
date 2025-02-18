import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import ProjectCard from './ProjectCard';

const Projects = () => {
  const { t } = useLanguage();
  
  const projects = [
    {
      title: "To-Do List",
      description: "A simple and easy-to-use todo list app made with React, Redux, and TailwindCSS.",
      image: "/to-do.png",
      tech: ["React", "Redux", "Tailwind CSS"],
      liveUrl: "https://to-do-gold-nine.vercel.app/",
      githubUrl: "https://github.com/kenanturgay/to-do"
    },
    
  ];

  return (
    <section className="py-20 bg-white/50 dark:bg-black/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="section-title text-center dark:text-white">{t('projects.title')}</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;